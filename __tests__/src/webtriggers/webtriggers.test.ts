import { describe, it, expect, vi, beforeEach } from "vitest";
import {
  fetchSchemaWebTrigger,
  dropSchemaMigrations,
  applySchemaMigrations,
  dropTableSchemaMigrations,
  clearCacheSchedulerTrigger,
  slowQuerySchedulerTrigger,
} from "../../../src/webtriggers";
import { getTables } from "../../../src/core/SystemTables";
import { generateDropTableStatements, slowQueryPerHours } from "../../../src/utils/sqlUtils";
import { clearExpiredCache } from "../../../src/utils/cacheUtils";
import { sql } from "@forge/sql";
import { MigrationRunner } from "@forge/sql/out/migration";
import { getTableName } from "drizzle-orm/table";

vi.useFakeTimers();
vi.setSystemTime(new Date("2023-04-12 00:00:01"));

interface MockMigrationRunner extends MigrationRunner {
  enqueue: ReturnType<typeof vi.fn>;
  run: ReturnType<typeof vi.fn>;
  list: ReturnType<typeof vi.fn>;
}

// Mock sql
vi.mock("@forge/sql", () => {
  const mockMigrationRunner = {
    enqueue: vi.fn().mockReturnThis(),
    run: vi.fn().mockResolvedValue(["migration1"]),
    list: vi.fn().mockResolvedValue([{ id: 1, name: "test_migration", migratedAt: new Date() }]),
  } as MockMigrationRunner;

  return {
    sql: {
      prepare: vi.fn((query: string) => {
        let procedureMock = vi
          .fn()
          .mockResolvedValue({ rows: [{ id: 1, data: "t", name: "Test" }] });
        if (
          query ===
          "select `test_data_entity`.`id` as `ID1`, `test_entity`.`id` as ID2, `test_data_entity`.`data`, `test_entity`.`name` from `test_data_entity` inner join `test_entity` on `test_data_entity`.`id` = `test_entity`.`id`"
        ) {
          procedureMock = vi
            .fn()
            .mockResolvedValue({ rows: [{ ID1: 1, ID2: 2, data: "t", name: "Test" }] });
        }
        const executeMock = procedureMock;
        return {
          query: query || "MOCK_QUERY",
          _params: [],
          remoteSqlApi: "",
          params: [],
          bindParams: vi.fn(),
          execute: executeMock,
        };
      }),
      executeRaw: vi.fn(),
      _provision: vi.fn().mockResolvedValue(undefined),
      executeDDL: vi.fn().mockResolvedValue({ rows: [] }),
    },
    migrationRunner: mockMigrationRunner,
  };
});

// Mock drizzle-orm/table
vi.mock("drizzle-orm/table", () => ({
  getTableName: vi.fn((table: any) => table?._?.name || table?.name || "unknown"),
}));

// Mock SystemTables
const mockForgeSystemTables: any[] = [];
vi.mock("../../../src/core/SystemTables", () => ({
  getTables: vi.fn().mockResolvedValue([]),
  get forgeSystemTables() {
    return mockForgeSystemTables;
  },
  clusterStatementsSummary: {
    digest: "digest",
    stmtType: "stmtType",
    schemaName: "schemaName",
    execCount: "execCount",
    avgLatency: "avgLatency",
    maxLatency: "maxLatency",
    minLatency: "minLatency",
    avgProcessTime: "avgProcessTime",
    avgWaitTime: "avgWaitTime",
    avgBackoffTime: "avgBackoffTime",
    avgTotalKeys: "avgTotalKeys",
    firstSeen: "firstSeen",
    lastSeen: "lastSeen",
    planInCache: "planInCache",
    planCacheHits: "planCacheHits",
    digestText: "digestText",
    plan: "plan",
    summaryEndTime: "summaryEndTime",
  },
  clusterStatementsSummaryHistory: {
    digest: "digest",
    stmtType: "stmtType",
    schemaName: "schemaName",
    execCount: "execCount",
    avgLatency: "avgLatency",
    maxLatency: "maxLatency",
    minLatency: "minLatency",
    avgProcessTime: "avgProcessTime",
    avgWaitTime: "avgWaitTime",
    avgBackoffTime: "avgBackoffTime",
    avgTotalKeys: "avgTotalKeys",
    firstSeen: "firstSeen",
    lastSeen: "lastSeen",
    planInCache: "planInCache",
    planCacheHits: "planCacheHits",
    digestText: "digestText",
    plan: "plan",
    summaryEndTime: "summaryEndTime",
  },
}));

// Mock sqlUtils
vi.mock("../../../src/utils/sqlUtils", () => ({
  generateDropTableStatements: vi.fn().mockReturnValue([]),
  formatLimitOffset: vi.fn().mockReturnValue(1),
  slowQueryPerHours: vi
    .fn()
    .mockResolvedValue([
      "Found SlowQuery SQL: SELECT * FROM users | Memory: 2.50 MB | Time: 150.00 ms\n Plan:IndexScan(users)",
    ]),
}));

// Mock cacheUtils
vi.mock("../../../src/utils/cacheUtils", () => ({
  clearExpiredCache: vi.fn().mockResolvedValue(undefined),
}));

// Mock drizzle-orm/mysql-core
vi.mock("drizzle-orm/mysql-core", () => ({
  unionAll: vi.fn().mockImplementation(() => ({
    as: vi.fn().mockReturnValue({
      digest: "digest",
      stmtType: "stmtType",
      schemaName: "schemaName",
      execCount: "execCount",
      avgLatencyNs: "avgLatencyNs",
      maxLatencyNs: "maxLatencyNs",
      minLatencyNs: "minLatencyNs",
      avgProcessTimeNs: "avgProcessTimeNs",
      avgWaitTimeNs: "avgWaitTimeNs",
      avgBackoffTimeNs: "avgBackoffTimeNs",
      avgMemBytes: "avgMemBytes",
      maxMemBytes: "maxMemBytes",
      avgTotalKeys: "avgTotalKeys",
      firstSeen: "firstSeen",
      lastSeen: "lastSeen",
      planInCache: "planInCache",
      planCacheHits: "planCacheHits",
      digestText: "digestText",
      plan: "plan",
    }),
  })),
}));

// Mock ForgeSQLORM
vi.mock("../../../src/core/ForgeSQLORM", () => {
  const mockQueryBuilder = {
    select: vi.fn().mockReturnThis(),
    from: vi.fn().mockReturnThis(),
    where: vi.fn().mockReturnThis(),
    orderBy: vi.fn().mockReturnThis(),
    limit: vi.fn().mockReturnThis(),
    groupBy: vi.fn().mockReturnThis(),
    getSelectedFields: vi.fn().mockReturnValue({}),
    addSetOperators: vi.fn().mockReturnThis(),
  };

  return {
    default: vi.fn().mockImplementation(() => ({
      getDrizzleQueryBuilder: vi.fn().mockReturnValue(mockQueryBuilder),
    })),
  };
});

describe("WebTriggers", () => {
  let mockMigrationRunner: MockMigrationRunner;

  beforeEach(() => {
    // Reset mocks
    vi.clearAllMocks();
    mockMigrationRunner = (vi.mocked(sql) as any).migrationRunner;
    // Reset mockForgeSystemTables
    mockForgeSystemTables.length = 0;
    // Reset getTableName mock
    vi.mocked(getTableName).mockImplementation(
      (table: any) => table?._?.name || table?.name || "unknown",
    );
  });

  describe("fetchSchemaWebTrigger", () => {
    it("should return SQL statements for recreating database structure", async () => {
      // Mock getTables to return some table names
      (getTables as any).mockResolvedValue(["table1", "table2"]);

      // Mock executeDDL to return create table statements
      vi.mocked(sql.executeDDL).mockImplementation(() =>
        Promise.resolve({
          rows: [
            { "Create Table": "CREATE TABLE table1 (...)", Table: "table1" },
            { "Create Table": "CREATE TABLE table2 (...)", Table: "table2" },
          ],
        }),
      );

      const result = await fetchSchemaWebTrigger();

      expect(result.statusCode).toBe(200);
      expect(result.body).toContain("CREATE TABLE IF NOT EXISTS table1");
      expect(result.body).toContain("CREATE TABLE IF NOT EXISTS table2");
      expect(result.body).toContain("SET foreign_key_checks = 0");
      expect(result.body).toContain("SET foreign_key_checks = 1");
    });

    it("should filter out system tables", async () => {
      // Mock getTables to return table names including a system table
      (getTables as any).mockResolvedValue(["table1", "__migrations", "table2"]);

      // Mock forgeSystemTables to include __migrations
      const mockSystemTable = { _: { name: "__migrations" } };
      mockForgeSystemTables.push(mockSystemTable);

      // Mock getTableName to return the table name
      vi.mocked(getTableName).mockImplementation((table: any) => {
        if (table === mockSystemTable || table?._?.name === "__migrations") {
          return "__migrations";
        }
        return table?._?.name || table?.name || "unknown";
      });

      // Mock executeDDL to return create table statements
      vi.mocked(sql.executeDDL).mockImplementation((query: string) => {
        if (query.includes("table1")) {
          return Promise.resolve({
            rows: [{ "Create Table": "CREATE TABLE table1 (...)", Table: "table1" }],
          });
        }
        if (query.includes("__migrations")) {
          return Promise.resolve({
            rows: [{ "Create Table": "CREATE TABLE __migrations (...)", Table: "__migrations" }],
          });
        }
        if (query.includes("table2")) {
          return Promise.resolve({
            rows: [{ "Create Table": "CREATE TABLE table2 (...)", Table: "table2" }],
          });
        }
        return Promise.resolve({ rows: [] });
      });

      const result = await fetchSchemaWebTrigger();

      expect(result.statusCode).toBe(200);
      expect(result.body).toContain("CREATE TABLE IF NOT EXISTS table1");
      expect(result.body).toContain("CREATE TABLE IF NOT EXISTS table2");
      expect(result.body).not.toContain("__migrations");
    });

    it("should filter out rows with empty Create Table", async () => {
      (getTables as any).mockResolvedValue(["table1", "table2"]);

      vi.mocked(sql.executeDDL).mockImplementation(() =>
        Promise.resolve({
          rows: [
            { "Create Table": "CREATE TABLE table1 (...)", Table: "table1" },
            { "Create Table": "", Table: "table2" },
            { "Create Table": null, Table: "table3" },
          ],
        }),
      );

      const result = await fetchSchemaWebTrigger();

      expect(result.statusCode).toBe(200);
      expect(result.body).toContain("CREATE TABLE IF NOT EXISTS table1");
      expect(result.body).not.toContain("table2");
      expect(result.body).not.toContain("table3");
    });

    it("should format CREATE TABLE statements correctly (remove quotes, add IF NOT EXISTS)", async () => {
      (getTables as any).mockResolvedValue(["table1"]);

      vi.mocked(sql.executeDDL).mockImplementation(() =>
        Promise.resolve({
          rows: [
            {
              "Create Table": 'CREATE TABLE "table1" (`id` int)',
              Table: "table1",
            },
          ],
        }),
      );

      const result = await fetchSchemaWebTrigger();

      expect(result.statusCode).toBe(200);
      expect(result.body).toContain("CREATE TABLE IF NOT EXISTS table1");
      expect(result.body).not.toContain('"');
      // Note: formatCreateTableStatement only removes double quotes, not backticks
      // Backticks are valid MySQL syntax for identifiers
    });

    it("should handle empty table list", async () => {
      (getTables as any).mockResolvedValue([]);

      const result = await fetchSchemaWebTrigger();

      expect(result.statusCode).toBe(200);
      expect(result.body).toContain("SET foreign_key_checks = 0");
      expect(result.body).toContain("SET foreign_key_checks = 1");
      // Should only contain the foreign key check statements
      const statements = result.body.split(";\n");
      expect(statements.length).toBe(2);
    });

    it("should handle case when all tables are system tables", async () => {
      const mockSystemTable = { _: { name: "__migrations" } };
      mockForgeSystemTables.push(mockSystemTable);

      vi.mocked(getTableName).mockImplementation((table: any) => {
        if (table === mockSystemTable || table?._?.name === "__migrations") {
          return "__migrations";
        }
        return table?._?.name || table?.name || "unknown";
      });

      (getTables as any).mockResolvedValue(["__migrations"]);

      vi.mocked(sql.executeDDL).mockImplementation(() =>
        Promise.resolve({
          rows: [{ "Create Table": "CREATE TABLE __migrations (...)", Table: "__migrations" }],
        }),
      );

      const result = await fetchSchemaWebTrigger();

      expect(result.statusCode).toBe(200);
      expect(result.body).not.toContain("__migrations");
      expect(result.body).toContain("SET foreign_key_checks = 0");
      expect(result.body).toContain("SET foreign_key_checks = 1");
    });

    it("should handle errors with debug.sqlMessage", async () => {
      const error: any = new Error("Database error");
      error.debug = { sqlMessage: "SQL syntax error" };
      (getTables as any).mockRejectedValue(error);

      const consoleErrorSpy = vi.spyOn(console, "error").mockImplementation(() => {});

      const result = await fetchSchemaWebTrigger();

      expect(result.statusCode).toBe(500);
      expect(result.body).toBe("SQL syntax error");
      expect(consoleErrorSpy).toHaveBeenCalledWith("SQL syntax error");

      consoleErrorSpy.mockRestore();
    });

    it("should handle errors with debug.message", async () => {
      const error: any = new Error("Database error");
      error.debug = { message: "Connection failed" };
      (getTables as any).mockRejectedValue(error);

      const consoleErrorSpy = vi.spyOn(console, "error").mockImplementation(() => {});

      const result = await fetchSchemaWebTrigger();

      expect(result.statusCode).toBe(500);
      expect(result.body).toBe("Connection failed");
      expect(consoleErrorSpy).toHaveBeenCalledWith("Connection failed");

      consoleErrorSpy.mockRestore();
    });

    it("should handle errors with only error.message", async () => {
      (getTables as any).mockRejectedValue(new Error("Failed to get tables"));

      const consoleErrorSpy = vi.spyOn(console, "error").mockImplementation(() => {});

      const result = await fetchSchemaWebTrigger();

      expect(result.statusCode).toBe(500);
      expect(result.body).toContain("Failed to get tables");
      expect(consoleErrorSpy).toHaveBeenCalledWith("Failed to get tables");

      consoleErrorSpy.mockRestore();
    });

    it("should handle errors with unknown error format", async () => {
      const error = { unknown: "property" };
      (getTables as any).mockRejectedValue(error);

      const consoleErrorSpy = vi.spyOn(console, "error").mockImplementation(() => {});

      const result = await fetchSchemaWebTrigger();

      expect(result.statusCode).toBe(500);
      expect(result.body).toBe("Unknown error occurred");
      expect(consoleErrorSpy).toHaveBeenCalledWith("Unknown error occurred");

      consoleErrorSpy.mockRestore();
    });

    it("should handle errors during executeDDL", async () => {
      (getTables as any).mockResolvedValue(["table1"]);

      const error: any = new Error("DDL execution failed");
      error.debug = { sqlMessage: "Table does not exist" };
      vi.mocked(sql.executeDDL).mockRejectedValue(error);

      const consoleErrorSpy = vi.spyOn(console, "error").mockImplementation(() => {});

      const result = await fetchSchemaWebTrigger();

      expect(result.statusCode).toBe(500);
      expect(result.body).toBe("Table does not exist");
      expect(consoleErrorSpy).toHaveBeenCalledWith("Table does not exist");

      consoleErrorSpy.mockRestore();
    });

    it("should properly format SQL statements with semicolons", async () => {
      (getTables as any).mockResolvedValue(["table1", "table2"]);

      vi.mocked(sql.executeDDL).mockImplementation(() =>
        Promise.resolve({
          rows: [
            { "Create Table": "CREATE TABLE table1 (...)", Table: "table1" },
            { "Create Table": "CREATE TABLE table2 (...)", Table: "table2" },
          ],
        }),
      );

      const result = await fetchSchemaWebTrigger();

      expect(result.statusCode).toBe(200);
      const statements = result.body.split(";\n");
      expect(statements.length).toBeGreaterThanOrEqual(4);
      expect(statements[0]).toBe("SET foreign_key_checks = 0");
      expect(statements[1]).toContain("CREATE TABLE IF NOT EXISTS table1");
      expect(statements[2]).toContain("CREATE TABLE IF NOT EXISTS table2");
      expect(statements[statements.length - 1]).toBe("SET foreign_key_checks = 1");
    });
  });

  describe("dropSchemaMigrations", () => {
    it("should drop all tables successfully", async () => {
      // Mock getTables to return some table names
      (getTables as any).mockResolvedValue(["table1", "table2"]);

      // Mock generateDropTableStatements to return drop statements
      (generateDropTableStatements as any).mockReturnValue([
        "DROP TABLE IF EXISTS table1",
        "DROP TABLE IF EXISTS table2",
      ]);

      // Mock executeDDL to succeed
      (sql.executeDDL as any).mockResolvedValue({ rows: [] });

      const result = await dropSchemaMigrations();

      expect(result.statusCode).toBe(200);
      expect(result.body).toBe(
        "⚠️ All data in these tables has been permanently deleted. This operation cannot be undone.",
      );
      expect(sql.executeDDL).toHaveBeenCalledTimes(2);
    });

    it("should handle errors during table dropping", async () => {
      (getTables as any).mockResolvedValue(["table1"]);
      (generateDropTableStatements as any).mockReturnValue(["DROP TABLE IF EXISTS table1"]);
      (sql.executeDDL as any).mockRejectedValue(new Error("Failed to drop table"));

      const result = await dropSchemaMigrations();

      expect(result.statusCode).toBe(500);
      expect(result.body).toContain("Failed to drop table");
    });
  });
  describe("dropTableSchemaMigrations", () => {
    it("should drop all tables/squence successfully", async () => {
      // Mock getTables to return some table names
      (getTables as any).mockResolvedValue(["table1", "table2"]);

      // Mock generateDropTableStatements to return drop statements
      (generateDropTableStatements as any).mockReturnValue([
        "DROP TABLE IF EXISTS table1",
        "DROP TABLE IF EXISTS table2",
      ]);

      // Mock executeDDL to succeed
      (sql.executeDDL as any).mockResolvedValue({ rows: [] });

      const result = await dropTableSchemaMigrations();

      expect(result.statusCode).toBe(200);
      expect(result.body).toBe(
        "⚠️ All data in these tables has been permanently deleted. This operation cannot be undone.",
      );
      expect(sql.executeDDL).toHaveBeenCalledTimes(2);
    });

    it("should handle errors during table dropping", async () => {
      (getTables as any).mockResolvedValue(["table1"]);
      (generateDropTableStatements as any).mockReturnValue(["DROP TABLE IF EXISTS table1"]);
      (sql.executeDDL as any).mockRejectedValue(new Error("Failed to drop table"));

      const result = await dropSchemaMigrations();

      expect(result.statusCode).toBe(500);
      expect(result.body).toContain("Failed to drop table");
    });
  });

  describe("applySchemaMigrations", () => {
    it("should apply migrations successfully", async () => {
      const mockMigration = async (runner: MigrationRunner) => {
        runner.enqueue("test_migration", "CREATE TABLE test (id INT)");
        return runner;
      };

      const result = await applySchemaMigrations(mockMigration);

      expect(result.statusCode).toBe(200);
      expect(result.body).toBe("Migrations successfully executed");
    });

    it("should handle errors during migration", async () => {
      const mockMigration = async (runner: MigrationRunner) => {
        runner.enqueue("test_migration", "CREATE TABLE test (id INT)");
        throw new Error("Failed to apply migration");
      };

      const result = await applySchemaMigrations(mockMigration);

      expect(result.statusCode).toBe(500);
      expect(result.body).toContain("Failed to apply migration");
    });

    it("should handle invalid migration object", async () => {
      const result = await applySchemaMigrations(null as any);

      expect(result.statusCode).toBe(500);
      expect(result.body).toContain("migration is not a function");
    });
  });

  describe("clearCacheSchedulerTrigger", () => {
    beforeEach(() => {
      vi.clearAllMocks();
    });

    it("should clear expired cache successfully with default options", async () => {
      const result = await clearCacheSchedulerTrigger();

      expect(clearExpiredCache).toHaveBeenCalledWith({
        logRawSqlQuery: false,
        disableOptimisticLocking: false,
        cacheTTL: 120,
        cacheEntityName: "cache",
        cacheEntityQueryName: "sql",
        cacheEntityExpirationName: "expiration",
        cacheEntityDataName: "data",
      });

      expect(result.statusCode).toBe(200);
      expect(result.statusText).toBe("OK");
      expect(result.headers).toEqual({ "Content-Type": ["application/json"] });

      const body = JSON.parse(result.body);
      expect(body.success).toBe(true);
      expect(body.message).toBe("Cache cleanup completed successfully");
      expect(body.timestamp).toBeDefined();
    });

    it("should clear expired cache successfully with custom options", async () => {
      const customOptions = {
        cacheEntityName: "custom_cache",
        logRawSqlQuery: true,
        cacheTTL: 300,
      };

      const result = await clearCacheSchedulerTrigger(customOptions);

      expect(clearExpiredCache).toHaveBeenCalledWith(customOptions);

      expect(result.statusCode).toBe(200);
      expect(result.statusText).toBe("OK");
      expect(result.headers).toEqual({ "Content-Type": ["application/json"] });

      const body = JSON.parse(result.body);
      expect(body.success).toBe(true);
      expect(body.message).toBe("Cache cleanup completed successfully");
      expect(body.timestamp).toBeDefined();
    });

    it("should handle missing cacheEntityName in options", async () => {
      const invalidOptions = {
        logRawSqlQuery: true,
        cacheTTL: 300,
        // cacheEntityName is missing
      };

      const result = await clearCacheSchedulerTrigger(invalidOptions);

      expect(clearExpiredCache).not.toHaveBeenCalled();

      expect(result.statusCode).toBe(500);
      expect(result.statusText).toBe("Internal Server Error");
      expect(result.headers).toEqual({ "Content-Type": ["application/json"] });

      const body = JSON.parse(result.body);
      expect(body.success).toBe(false);
      expect(body.error).toBe("cacheEntityName is not configured");
      expect(body.timestamp).toBeDefined();
    });

    it("should handle errors during cache cleanup", async () => {
      const error = new Error("Cache cleanup failed");
      (clearExpiredCache as any).mockRejectedValue(error);

      const result = await clearCacheSchedulerTrigger();

      expect(clearExpiredCache).toHaveBeenCalled();

      expect(result.statusCode).toBe(500);
      expect(result.statusText).toBe("Internal Server Error");
      expect(result.headers).toEqual({ "Content-Type": ["application/json"] });

      const body = JSON.parse(result.body);
      expect(body.success).toBe(false);
      expect(body.error).toBe("Cache cleanup failed");
      expect(body.timestamp).toBeDefined();
    });

    it("should handle unknown errors during cache cleanup", async () => {
      (clearExpiredCache as any).mockRejectedValue("Unknown error");

      const result = await clearCacheSchedulerTrigger();

      expect(clearExpiredCache).toHaveBeenCalled();

      expect(result.statusCode).toBe(500);
      expect(result.statusText).toBe("Internal Server Error");
      expect(result.headers).toEqual({ "Content-Type": ["application/json"] });

      const body = JSON.parse(result.body);
      expect(body.success).toBe(false);
      expect(body.error).toBe("Unknown error during cache cleanup");
      expect(body.timestamp).toBeDefined();
    });

    it("should use default options when no options provided", async () => {
      const result = await clearCacheSchedulerTrigger(undefined);

      expect(clearExpiredCache).toHaveBeenCalledWith({
        logRawSqlQuery: false,
        disableOptimisticLocking: false,
        cacheTTL: 120,
        cacheEntityName: "cache",
        cacheEntityQueryName: "sql",
        cacheEntityExpirationName: "expiration",
        cacheEntityDataName: "data",
      });

      expect(result.statusCode).toBe(200);
    });

    it("should use provided options directly", async () => {
      const partialOptions = {
        cacheEntityName: "test_cache",
        logRawSqlQuery: true,
      };

      const result = await clearCacheSchedulerTrigger(partialOptions);

      expect(clearExpiredCache).toHaveBeenCalledWith(partialOptions);

      expect(result.statusCode).toBe(200);
    });
  });

  describe("slowQuerySchedulerTrigger", () => {
    let mockForgeSQLORM: any;

    beforeEach(() => {
      vi.clearAllMocks();
      mockForgeSQLORM = {
        getDrizzleQueryBuilder: vi.fn().mockReturnValue({
          select: vi.fn().mockReturnThis(),
          from: vi.fn().mockReturnThis(),
          where: vi.fn().mockReturnThis(),
        }),
      };
    });

    it("should successfully analyze slow queries with default options", async () => {
      const mockResults = [
        "Found SlowQuery SQL: SELECT * FROM users | Memory: 2.50 MB | Time: 150.00 ms\n Plan:IndexScan(users)",
      ];
      (slowQueryPerHours as any).mockResolvedValue(mockResults);

      const result = await slowQuerySchedulerTrigger(mockForgeSQLORM, {
        hours: 1,
        timeout: 3000,
      });

      expect(slowQueryPerHours).toHaveBeenCalledWith(mockForgeSQLORM, 1, 3000);
      expect(result.statusCode).toBe(200);
      expect(result.statusText).toBe("Ok");
      expect(result.headers).toEqual({ "Content-Type": ["application/json"] });
      expect(result.body).toBe(JSON.stringify(mockResults));
    });

    it("should use default values when options are not provided", async () => {
      const mockResults = ["Found SlowQuery SQL: SELECT * FROM orders"];
      (slowQueryPerHours as any).mockResolvedValue(mockResults);

      const result = await slowQuerySchedulerTrigger(mockForgeSQLORM, {
        hours: undefined as any,
        timeout: undefined as any,
      });

      expect(slowQueryPerHours).toHaveBeenCalledWith(mockForgeSQLORM, 1, 3000);
      expect(result.statusCode).toBe(200);
      expect(result.body).toBe(JSON.stringify(mockResults));
    });

    it("should handle custom hours and timeout options", async () => {
      const mockResults = [
        "Found SlowQuery SQL: SELECT * FROM products | Memory: 5.00 MB | Time: 300.00 ms\n Plan:FullScan(products)",
      ];
      (slowQueryPerHours as any).mockResolvedValue(mockResults);

      const result = await slowQuerySchedulerTrigger(mockForgeSQLORM, {
        hours: 6,
        timeout: 5000,
      });

      expect(slowQueryPerHours).toHaveBeenCalledWith(mockForgeSQLORM, 6, 5000);
      expect(result.statusCode).toBe(200);
      expect(result.body).toBe(JSON.stringify(mockResults));
    });

    it("should handle errors with sqlMessage in debug context", async () => {
      const error = {
        debug: {
          sqlMessage: "Query timeout exceeded",
        },
      };
      (slowQueryPerHours as any).mockRejectedValue(error);

      const result = await slowQuerySchedulerTrigger(mockForgeSQLORM, {
        hours: 1,
        timeout: 3000,
      });

      expect(result.statusCode).toBe(500);
      expect(result.statusText).toBe("Bad Request");
      expect(result.body).toBe("Query timeout exceeded");
    });

    it("should handle errors with message in debug context", async () => {
      const error = {
        debug: {
          message: "Database connection failed",
        },
      };
      (slowQueryPerHours as any).mockRejectedValue(error);

      const result = await slowQuerySchedulerTrigger(mockForgeSQLORM, {
        hours: 1,
        timeout: 3000,
      });

      expect(result.statusCode).toBe(500);
      expect(result.body).toBe("Database connection failed");
    });

    it("should handle errors with direct message property", async () => {
      const error = {
        message: "Network error occurred",
      };
      (slowQueryPerHours as any).mockRejectedValue(error);

      const result = await slowQuerySchedulerTrigger(mockForgeSQLORM, {
        hours: 1,
        timeout: 3000,
      });

      expect(result.statusCode).toBe(500);
      expect(result.body).toBe("Network error occurred");
    });

    it("should handle errors with unknown error structure", async () => {
      const error = {};
      (slowQueryPerHours as any).mockRejectedValue(error);

      const result = await slowQuerySchedulerTrigger(mockForgeSQLORM, {
        hours: 1,
        timeout: 3000,
      });

      expect(result.statusCode).toBe(500);
      expect(result.body).toBe("Unknown error occurred");
    });

    it("should handle empty results array", async () => {
      (slowQueryPerHours as any).mockResolvedValue([]);

      const result = await slowQuerySchedulerTrigger(mockForgeSQLORM, {
        hours: 24,
        timeout: 2000,
      });

      expect(result.statusCode).toBe(200);
      expect(result.body).toBe(JSON.stringify([]));
    });

    it("should handle multiple slow query results", async () => {
      const mockResults = [
        "Found SlowQuery SQL: SELECT * FROM users | Memory: 2.50 MB | Time: 150.00 ms\n Plan:IndexScan(users)",
        "Found SlowQuery SQL: SELECT * FROM orders | Memory: 3.75 MB | Time: 200.00 ms\n Plan:FullScan(orders)",
        "Found SlowQuery SQL: SELECT * FROM products | Memory: 1.25 MB | Time: 100.00 ms\n Plan:IndexLookup(products)",
      ];
      (slowQueryPerHours as any).mockResolvedValue(mockResults);

      const result = await slowQuerySchedulerTrigger(mockForgeSQLORM, {
        hours: 1,
        timeout: 3000,
      });

      expect(result.statusCode).toBe(200);
      expect(result.body).toBe(JSON.stringify(mockResults));
      expect(JSON.parse(result.body as string)).toHaveLength(3);
    });

    it("should log error to console when error occurs", async () => {
      const consoleErrorSpy = vi.spyOn(console, "error").mockImplementation(() => {});
      const error = {
        message: "Test error",
      };
      (slowQueryPerHours as any).mockRejectedValue(error);

      await slowQuerySchedulerTrigger(mockForgeSQLORM, {
        hours: 1,
        timeout: 3000,
      });

      expect(consoleErrorSpy).toHaveBeenCalledWith("Test error");
      consoleErrorSpy.mockRestore();
    });
  });
});
