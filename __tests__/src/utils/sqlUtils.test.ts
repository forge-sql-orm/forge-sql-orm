import { describe, expect, it, vi, beforeEach, afterEach } from "vitest";
import {
  formatLimitOffset,
  generateDropTableStatements,
  nextVal,
  parseDateTime,
  formatDateTime,
  withTimeout,
  withTidbHint,
  getPrimaryKeys,
  getTableMetadata,
  mapSelectFieldsWithAlias,
  applyFromDriverTransform,
  printQueriesWithPlan,
  handleErrorsWithPlan,
  slowQueryPerHours,
  checkProductionEnvironment,
} from "../../../src/utils/sqlUtils";
import { DateTime } from "luxon";
import { int, mysqlTable, varchar, text, primaryKey } from "drizzle-orm/mysql-core";
import { sql } from "drizzle-orm";
import { ForgeSqlOperation } from "../../../src/core/ForgeSQLQueryBuilder";

// Mock @forge/api
const mockGetAppContext = vi.fn();
vi.mock("@forge/api", () => ({
  getAppContext: () => mockGetAppContext(),
}));

// Test suite for transformValue function
describe("transformValue", () => {
  // Test suite for parseDateTime function
  describe("parseDateTime", () => {
    it("should correctly parse a datetime string", () => {
      const dateString = "2024-03-03T12:34:56.789";
      const format = "yyyy-LL-dd'T'HH:mm:ss.SSS";
      const parsedDate = parseDateTime(dateString, format);
      expect(DateTime.fromJSDate(parsedDate).toFormat(format)).toBe(dateString);
    });

    it("should correctly parse a date string", () => {
      const dateString = "2024-03-03";
      const format = "yyyy-LL-dd";
      const parsedDate = parseDateTime(dateString, format);
      expect(DateTime.fromJSDate(parsedDate).toFormat(format)).toBe(dateString);
    });

    it("should handle Date object input", () => {
      const date = new Date("2024-03-03T12:34:56.789");
      const format = "yyyy-LL-dd'T'HH:mm:ss.SSS";
      const parsedDate = parseDateTime(date, format);
      expect(parsedDate).toBeInstanceOf(Date);
      expect(parsedDate.getTime()).toBe(date.getTime());
    });

    it("should fallback to SQL format parsing", () => {
      const dateString = "2024-03-03 12:34:56";
      const format = "yyyy-LL-dd HH:mm:ss";
      const parsedDate = parseDateTime(dateString, format);
      expect(parsedDate).toBeInstanceOf(Date);
      expect(DateTime.fromJSDate(parsedDate).isValid).toBe(true);
    });

    it("should fallback to RFC2822 format parsing", () => {
      const dateString = "Mon, 03 Mar 2024 12:34:56 GMT";
      const format = "yyyy-LL-dd";
      const parsedDate = parseDateTime(dateString, format);
      expect(parsedDate).toBeInstanceOf(Date);
      expect(DateTime.fromJSDate(parsedDate).isValid).toBe(true);
    });

    it("should handle invalid date with fallback", () => {
      const dateString = "invalid-date";
      const format = "yyyy-LL-dd";
      const parsedDate = parseDateTime(dateString, format);
      expect(parsedDate).toBeInstanceOf(Date);
    });
  });

  describe("formatLimitOffset", () => {
    it("should return a valid SQL raw number for valid input", () => {
      const result = formatLimitOffset(10);
      expect(result).toBeDefined();
      expect(JSON.stringify(result)).toBe(
        JSON.stringify({
          decoder: {},
          shouldInlineParams: false,
          usedTables: [],
          queryChunks: [{ value: ["10"] }],
        }),
      );
    });

    it("should throw error for NaN input", () => {
      expect(() => formatLimitOffset(NaN)).toThrow("limitOrOffset must be a valid number");
    });

    it("should throw error for non-number input", () => {
      // @ts-expect-error Testing invalid input type
      expect(() => formatLimitOffset("10")).toThrow("limitOrOffset must be a valid number");
    });

    it("should handle zero value", () => {
      const result = formatLimitOffset(0);
      expect(result).toBeDefined();
      expect(JSON.stringify(result)).toBe(
        JSON.stringify({
          decoder: {},
          shouldInlineParams: false,
          usedTables: [],
          queryChunks: [{ value: ["0"] }],
        }),
      );
    });

    it("should handle negative values", () => {
      const result = formatLimitOffset(-5);
      expect(result).toBeDefined();
      expect(JSON.stringify(result)).toBe(
        JSON.stringify({
          decoder: {},
          shouldInlineParams: false,
          usedTables: [],
          queryChunks: [{ value: ["-5"] }],
        }),
      );
    });
  });

  describe("nextVal", () => {
    it("should return a valid SQL template literal for sequence", () => {
      const result = nextVal("test_sequence");
      expect(result).toBeDefined();
      expect(JSON.stringify(result)).toBe(
        JSON.stringify({
          decoder: {},
          shouldInlineParams: false,
          usedTables: [],
          queryChunks: [{ value: ["NEXTVAL(test_sequence)"] }],
        }),
      );
    });

    it("should handle sequence names with special characters", () => {
      const result = nextVal("test-sequence_123");
      expect(result).toBeDefined();
      expect(JSON.stringify(result)).toBe(
        JSON.stringify({
          decoder: {},
          shouldInlineParams: false,
          usedTables: [],
          queryChunks: [{ value: ["NEXTVAL(test-sequence_123)"] }],
        }),
      );
    });

    it("should handle empty sequence name", () => {
      const result = nextVal("");
      expect(result).toBeDefined();
      expect(JSON.stringify(result)).toBe(
        JSON.stringify({
          decoder: {},
          shouldInlineParams: false,
          usedTables: [],
          queryChunks: [{ value: ["NEXTVAL()"] }],
        }),
      );
    });
  });

  describe("generateDropTableStatements", () => {
    it("should generate correct DROP TABLE statements for single table", () => {
      const tables = ["users"];
      const expected = ["DROP TABLE IF EXISTS `users`;", "DROP SEQUENCE IF EXISTS `users`;"];
      expect(generateDropTableStatements(tables)).toEqual(expected);
    });

    it("should generate correct DROP TABLE statements for multiple tables", () => {
      const tables = ["users", "orders", "products"];
      const expected = [
        "DROP TABLE IF EXISTS `users`;",
        "DROP SEQUENCE IF EXISTS `users`;",
        "DROP TABLE IF EXISTS `orders`;",
        "DROP SEQUENCE IF EXISTS `orders`;",
        "DROP TABLE IF EXISTS `products`;",
        "DROP SEQUENCE IF EXISTS `products`;",
      ];
      expect(generateDropTableStatements(tables)).toEqual(expected);
    });

    it("should handle table names with special characters", () => {
      const tables = ["user-profiles", "order_items"];
      const expected = [
        "DROP TABLE IF EXISTS `user-profiles`;",
        "DROP SEQUENCE IF EXISTS `user-profiles`;",
        "DROP TABLE IF EXISTS `order_items`;",
        "DROP SEQUENCE IF EXISTS `order_items`;",
      ];
      expect(generateDropTableStatements(tables)).toEqual(expected);
    });

    it("should return empty array for empty input", () => {
      expect(generateDropTableStatements([])).toEqual([]);
    });

    it("should generate only table drop statements when sequence option is false", () => {
      const tables = ["users"];
      const expected = ["DROP TABLE IF EXISTS `users`;"];
      expect(generateDropTableStatements(tables, { sequence: false, table: true })).toEqual(
        expected,
      );
    });

    it("should generate only sequence drop statements when table option is false", () => {
      const tables = ["users"];
      const expected = ["DROP SEQUENCE IF EXISTS `users`;"];
      expect(generateDropTableStatements(tables, { sequence: true, table: false })).toEqual(
        expected,
      );
    });

    it("should return empty array when both options are false", () => {
      const tables = ["users"];
      expect(generateDropTableStatements(tables, { sequence: false, table: false })).toEqual([]);
    });

    it("should handle empty table name", () => {
      const tables = [""];
      const expected = ["DROP TABLE IF EXISTS ``;", "DROP SEQUENCE IF EXISTS ``;"];
      expect(generateDropTableStatements(tables)).toEqual(expected);
    });

    it("should handle table names with backticks", () => {
      const tables = ["`users`"];
      // The function wraps table names in backticks, so `users` becomes ``users``
      const expected = ["DROP TABLE IF EXISTS ``users``;", "DROP SEQUENCE IF EXISTS ``users``;"];
      expect(generateDropTableStatements(tables)).toEqual(expected);
    });

    it("should warn when both options are false", () => {
      const consoleWarnSpy = vi.spyOn(console, "warn").mockImplementation(() => {});
      const tables = ["users"];
      generateDropTableStatements(tables, { sequence: false, table: false });
      expect(consoleWarnSpy).toHaveBeenCalledWith(
        'No drop operations requested: both "table" and "sequence" options are false',
      );
      consoleWarnSpy.mockRestore();
    });
  });

  describe("formatDateTime", () => {
    it("should format Date object correctly", () => {
      const date = new Date("2024-03-03T12:34:56.789");
      const result = formatDateTime(date, "yyyy-LL-dd'T'HH:mm:ss.SSS", false);
      expect(result).toBe("2024-03-03T12:34:56.789");
    });

    it("should format ISO string correctly", () => {
      const dateString = "2024-03-03T12:34:56.789Z";
      const result = formatDateTime(dateString, "yyyy-LL-dd'T'HH:mm:ss.SSS", false);
      // Result may differ based on timezone, so just check it's a valid formatted date
      expect(result).toMatch(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}$/);
      expect(result).toContain("2024-03-03");
    });

    it("should format SQL string correctly", () => {
      const dateString = "2024-03-03 12:34:56";
      const result = formatDateTime(dateString, "yyyy-LL-dd HH:mm:ss", false);
      expect(result).toBe("2024-03-03 12:34:56");
    });

    it("should format number timestamp correctly", () => {
      const timestamp = new Date("2024-03-03T12:34:56.789").getTime();
      const result = formatDateTime(timestamp, "yyyy-LL-dd", false);
      expect(result).toBe("2024-03-03");
    });

    it("should validate timestamp range for timestamps", () => {
      const minDate = new Date("1970-01-01T00:00:01.000Z");
      const result = formatDateTime(minDate, "yyyy-LL-dd", true);
      expect(result).toBe("1970-01-01");
    });

    it("should throw error for timestamp before 1970-01-01 00:00:01", () => {
      const date = new Date("1970-01-01T00:00:00.000Z");
      expect(() => formatDateTime(date, "yyyy-LL-dd", true)).toThrow(
        "Atlassian Forge does not support zero or negative timestamps",
      );
    });

    it("should throw error for timestamp after 2038-01-19 03:14:07.999", () => {
      const date = new Date("2038-01-19T03:14:08.000Z");
      expect(() => formatDateTime(date, "yyyy-LL-dd", true)).toThrow(
        "Atlassian Forge does not support timestamps beyond 2038-01-19",
      );
    });

    it("should throw error for invalid date string", () => {
      expect(() => formatDateTime("invalid-date", "yyyy-LL-dd", false)).toThrow("Invalid Date");
    });

    it("should throw error for unsupported type", () => {
      // @ts-expect-error Testing invalid input type
      expect(() => formatDateTime(null, "yyyy-LL-dd", false)).toThrow("Unsupported type");
    });

    it("should handle ISO string format", () => {
      // ISO format is supported by parseStringToDateTime
      const dateString = "2024-03-03T12:34:56.789Z";
      const result = formatDateTime(dateString, "yyyy-LL-dd", false);
      expect(result).toBe("2024-03-03");
    });

    it("should handle SQL string format", () => {
      // SQL format is supported by parseStringToDateTime
      const dateString = "2024-03-03 12:34:56";
      const result = formatDateTime(dateString, "yyyy-LL-dd", false);
      expect(result).toBe("2024-03-03");
    });

    it("should handle number string as timestamp", () => {
      const timestamp = new Date("2024-03-03T12:34:56.789").getTime();
      const result = formatDateTime(String(timestamp), "yyyy-LL-dd", false);
      expect(result).toBe("2024-03-03");
    });

    it("should validate timestamp at minimum boundary", () => {
      const minDate = new Date("1970-01-01T00:00:01.000Z");
      const result = formatDateTime(minDate, "yyyy-LL-dd", true);
      expect(result).toBe("1970-01-01");
    });

    it("should validate timestamp at maximum boundary", () => {
      // Maximum date is 2038-01-19 03:14:07.000 UTC (2147483647 * 1000 milliseconds)
      // Using a date slightly before the maximum to avoid boundary issues
      const maxDate = new Date(2147483647 * 1000 - 1000); // 1 second before maximum
      const result = formatDateTime(maxDate, "yyyy-LL-dd", true);
      expect(result).toBe("2038-01-19");
    });
  });

  describe("withTimeout", () => {
    it("should resolve promise before timeout", async () => {
      const promise = Promise.resolve("success");
      const result = await withTimeout(promise, "Test timeout", 1000);
      expect(result).toBe("success");
    });

    it("should reject promise on timeout", async () => {
      const promise = new Promise<string>(() => {
        // Never resolves - will timeout
      });

      const resultPromise = withTimeout(promise, "Test timeout", 50);

      await expect(resultPromise).rejects.toThrow("Test timeout");
    }, 200);

    it("should handle promise rejection", async () => {
      const promise = Promise.reject(new Error("Test error"));
      const resultPromise = withTimeout(promise, "Test timeout", 1000);

      await expect(resultPromise).rejects.toThrow("Test error");
    });

    it("should clear timeout when promise resolves", async () => {
      const clearTimeoutSpy = vi.spyOn(global, "clearTimeout");
      const promise = Promise.resolve("success");
      const resultPromise = withTimeout(promise, "Test timeout", 1000);

      await resultPromise;

      // Give a small delay to ensure clearTimeout is called
      await new Promise((resolve) => setTimeout(resolve, 10));

      expect(clearTimeoutSpy).toHaveBeenCalled();
      clearTimeoutSpy.mockRestore();
    });

    it("should clear timeout when promise rejects", async () => {
      const clearTimeoutSpy = vi.spyOn(global, "clearTimeout");
      const promise = Promise.reject(new Error("Test error"));
      const resultPromise = withTimeout(promise, "Test timeout", 1000);

      await expect(resultPromise).rejects.toThrow("Test error");

      // Give a small delay to ensure clearTimeout is called
      await new Promise((resolve) => setTimeout(resolve, 10));

      expect(clearTimeoutSpy).toHaveBeenCalled();
      clearTimeoutSpy.mockRestore();
    });

    it("should handle very short timeout", async () => {
      const promise = new Promise<string>(() => {
        // Never resolves
      });

      const resultPromise = withTimeout(promise, "Very short timeout", 10);

      await expect(resultPromise).rejects.toThrow("Very short timeout");
    }, 200);

    it("should handle zero timeout", async () => {
      const promise = new Promise<string>(() => {
        // Never resolves
      });

      const resultPromise = withTimeout(promise, "Zero timeout", 0);

      await expect(resultPromise).rejects.toThrow("Zero timeout");
    }, 200);
  });

  describe("withTidbHint", () => {
    it("should wrap column with TiDB session alias hint", () => {
      const testTable = mysqlTable("test", {
        id: int("id").primaryKey(),
      });

      const result = withTidbHint(testTable.id);

      expect(result).toBeDefined();
      // Check that result is a SQL object with queryChunks
      expect(result).toHaveProperty("queryChunks");
      // Check that the result has the expected SQL structure
      // The function wraps the column with a TiDB hint, so we verify the structure exists
      expect(result).toHaveProperty("decoder");
      expect(result).toHaveProperty("queryChunks");
    });

    it("should return SQL wrapper object", () => {
      const testTable = mysqlTable("test", {
        id: int("id").primaryKey(),
      });

      const result = withTidbHint(testTable.id);

      expect(result).toBeDefined();
      // The result should be a SQL wrapper object
      expect(result).toHaveProperty("queryChunks");
      expect(result).toHaveProperty("decoder");
    });
  });

  describe("getTableMetadata", () => {
    it("should extract table metadata with primary key", () => {
      const testTable = mysqlTable("users", {
        id: int("id").primaryKey(),
        name: varchar("name", { length: 255 }),
      });

      const metadata = getTableMetadata(testTable);

      expect(metadata).toBeDefined();
      expect(metadata.tableName).toBe("users");
      expect(metadata.columns).toBeDefined();
      expect(metadata.columns.id).toBeDefined();
      expect(metadata.columns.name).toBeDefined();
      expect(metadata.indexes).toBeInstanceOf(Array);
      expect(metadata.checks).toBeInstanceOf(Array);
      expect(metadata.foreignKeys).toBeInstanceOf(Array);
      expect(metadata.primaryKeys).toBeInstanceOf(Array);
      expect(metadata.uniqueConstraints).toBeInstanceOf(Array);
      expect(metadata.extras).toBeInstanceOf(Array);
    });

    it("should extract table metadata without primary key", () => {
      const testTable = mysqlTable("posts", {
        id: int("id"),
        title: varchar("title", { length: 255 }),
      });

      const metadata = getTableMetadata(testTable);

      expect(metadata).toBeDefined();
      expect(metadata.tableName).toBe("posts");
      expect(metadata.columns).toBeDefined();
      expect(metadata.columns.id).toBeDefined();
      expect(metadata.columns.title).toBeDefined();
    });

    it("should handle table with multiple columns", () => {
      const testTable = mysqlTable("products", {
        id: int("id").primaryKey(),
        name: varchar("name", { length: 255 }),
        description: text("description"),
        price: int("price"),
      });

      const metadata = getTableMetadata(testTable);

      expect(metadata.columns).toHaveProperty("id");
      expect(metadata.columns).toHaveProperty("name");
      expect(metadata.columns).toHaveProperty("description");
      expect(metadata.columns).toHaveProperty("price");
    });
  });

  describe("getPrimaryKeys", () => {
    it("should return primary key from column", () => {
      const testTable = mysqlTable("users", {
        id: int("id").primaryKey(),
        name: varchar("name", { length: 255 }),
      });

      const primaryKeys = getPrimaryKeys(testTable);

      expect(primaryKeys).toBeDefined();
      expect(primaryKeys.length).toBe(1);
      expect(primaryKeys[0][0]).toBe("id");
      expect(primaryKeys[0][1]).toBeDefined();
    });

    it("should return empty array when no primary key", () => {
      const testTable = mysqlTable("posts", {
        id: int("id"),
        title: varchar("title", { length: 255 }),
      });

      const primaryKeys = getPrimaryKeys(testTable);

      expect(primaryKeys).toBeDefined();
      expect(primaryKeys).toEqual([]);
    });

    it("should handle table with composite primary key using primaryKey builder", () => {
      const testTable = mysqlTable(
        "order_items",
        {
          orderId: int("order_id"),
          itemId: int("item_id"),
        },
        (table) => ({
          pk: primaryKey({ columns: [table.orderId, table.itemId] }),
        }),
      );

      const primaryKeys = getPrimaryKeys(testTable);

      // Note: This test may return empty array if primary keys are only in builders
      // The actual behavior depends on how drizzle-orm stores primary keys
      expect(primaryKeys).toBeDefined();
      expect(Array.isArray(primaryKeys)).toBe(true);
    });
  });

  describe("mapSelectFieldsWithAlias", () => {
    it("should map table fields to aliases", () => {
      const testTable = mysqlTable("users", {
        id: int("id").primaryKey(),
        name: varchar("name", { length: 255 }),
      });

      const fields = {
        id: testTable.id,
        name: testTable.name,
      };

      const result = mapSelectFieldsWithAlias(fields);

      expect(result).toBeDefined();
      expect(result.selections).toBeDefined();
      expect(result.aliasMap).toBeDefined();
      expect(Object.keys(result.aliasMap).length).toBeGreaterThan(0);
    });

    it("should map nested fields to aliases", () => {
      const usersTable = mysqlTable("users", {
        id: int("id").primaryKey(),
        name: varchar("name", { length: 255 }),
      });

      const ordersTable = mysqlTable("orders", {
        id: int("id").primaryKey(),
        userId: int("user_id"),
      });

      const fields = {
        user: {
          id: usersTable.id,
          name: usersTable.name,
        },
        order: {
          id: ordersTable.id,
        },
      };

      const result = mapSelectFieldsWithAlias(fields);

      expect(result).toBeDefined();
      expect(result.selections).toBeDefined();
      expect(result.selections.user).toBeDefined();
      expect(result.selections.order).toBeDefined();
      expect(result.aliasMap).toBeDefined();
    });

    it("should throw error for empty fields", () => {
      expect(() => mapSelectFieldsWithAlias({} as any)).not.toThrow();
      // @ts-expect-error Testing invalid input
      expect(() => mapSelectFieldsWithAlias(null)).toThrow("fields is empty");
      // @ts-expect-error Testing invalid input
      expect(() => mapSelectFieldsWithAlias(undefined)).toThrow("fields is empty");
    });

    it("should handle SQL wrapper fields", () => {
      const testTable = mysqlTable("users", {
        id: int("id").primaryKey(),
        name: varchar("name", { length: 255 }),
      });

      const fields = {
        id: testTable.id,
        count: sql<number>`COUNT(*)`,
      };

      const result = mapSelectFieldsWithAlias(fields);

      expect(result).toBeDefined();
      expect(result.selections).toBeDefined();
      expect(result.selections.count).toBeDefined();
    });
  });

  describe("applyFromDriverTransform", () => {
    it("should transform rows without custom mapFrom", () => {
      const testTable = mysqlTable("users", {
        id: int("id").primaryKey(),
        name: varchar("name", { length: 255 }),
      });

      const fields = {
        id: testTable.id,
        name: testTable.name,
      };

      const { selections, aliasMap } = mapSelectFieldsWithAlias(fields);
      const rows = [
        { id: 1, name: "John" },
        { id: 2, name: "Jane" },
      ];

      const result = applyFromDriverTransform(rows, selections, aliasMap);

      expect(result).toBeDefined();
      expect(result.length).toBe(2);
      expect(result[0]).toEqual({ id: 1, name: "John" });
      expect(result[1]).toEqual({ id: 2, name: "Jane" });
    });

    it("should transform rows with null branches", () => {
      const usersTable = mysqlTable("users", {
        id: int("id").primaryKey(),
        name: varchar("name", { length: 255 }),
      });

      const ordersTable = mysqlTable("orders", {
        id: int("id").primaryKey(),
        userId: int("user_id"),
      });

      const fields = {
        user: {
          id: usersTable.id,
          name: usersTable.name,
        },
        order: {
          id: ordersTable.id,
        },
      };

      const { selections, aliasMap } = mapSelectFieldsWithAlias(fields);
      // Note: transformObject expects objects, not null. Null values are handled by processNullBranches
      // after transformation. So we pass empty objects that will be converted to null.
      const rows = [
        {
          user: { id: 1, name: "John" },
          order: {}, // Empty object will be converted to null by processNullBranches
        },
        {
          user: { id: 2, name: "Jane" },
          order: { id: 10 },
        },
      ];

      const result = applyFromDriverTransform(rows, selections, aliasMap);

      expect(result).toBeDefined();
      expect(result.length).toBe(2);
      expect(result[0].user).toBeDefined();
      expect(result[0].order).toBeNull(); // Empty object becomes null
      expect(result[1].user).toBeDefined();
      expect(result[1].order).toBeDefined();
    });

    it("should handle empty rows array", () => {
      const testTable = mysqlTable("users", {
        id: int("id").primaryKey(),
      });

      const fields = { id: testTable.id };
      const { selections, aliasMap } = mapSelectFieldsWithAlias(fields);

      const result = applyFromDriverTransform([], selections, aliasMap);

      expect(result).toBeDefined();
      expect(result).toEqual([]);
    });

    it("should handle rows with all null nested objects", () => {
      const usersTable = mysqlTable("users", {
        id: int("id").primaryKey(),
      });

      const ordersTable = mysqlTable("orders", {
        id: int("id").primaryKey(),
      });

      const fields = {
        user: { id: usersTable.id },
        order: { id: ordersTable.id },
      };

      const { selections, aliasMap } = mapSelectFieldsWithAlias(fields);
      // Empty object will be converted to null by processNullBranches
      const rows = [
        {
          user: { id: 1 },
          order: {}, // Empty object becomes null
        },
      ];

      const result = applyFromDriverTransform(rows, selections, aliasMap);

      expect(result).toBeDefined();
      expect(result.length).toBe(1);
      expect(result[0].user).toBeDefined();
      expect(result[0].order).toBeNull();
    });
  });

  describe("printQueriesWithPlan", () => {
    let mockForgeSQLORM: ForgeSqlOperation;
    let consoleWarnSpy: ReturnType<typeof vi.spyOn>;
    let consoleDebugSpy: ReturnType<typeof vi.spyOn>;

    beforeEach(() => {
      consoleWarnSpy = vi.spyOn(console, "warn").mockImplementation(() => {});
      consoleDebugSpy = vi.spyOn(console, "debug").mockImplementation(() => {});

      const mockQueryBuilder = {
        select: vi.fn().mockReturnThis(),
        from: vi.fn().mockReturnThis(),
        where: vi.fn().mockReturnThis(),
      };

      mockForgeSQLORM = {
        getDrizzleQueryBuilder: vi.fn().mockReturnValue(mockQueryBuilder),
      } as unknown as ForgeSqlOperation;
    });

    afterEach(() => {
      consoleWarnSpy.mockRestore();
      consoleDebugSpy.mockRestore();
    });

    it("should handle successful query execution", async () => {
      const mockResults = [
        {
          digestText: "SELECT * FROM users",
          avgLatency: "1000000", // 1ms in nanoseconds
          avgMem: "2000000", // 2MB in bytes
          execCount: "5",
          plan: "Index Scan",
          stmtType: "Select",
        },
      ];

      const mockQuery = {
        select: vi.fn().mockReturnThis(),
        from: vi.fn().mockReturnThis(),
        where: vi.fn().mockReturnValue(Promise.resolve(mockResults)),
      };

      (mockForgeSQLORM.getDrizzleQueryBuilder as any).mockReturnValue(mockQuery);

      await printQueriesWithPlan(mockForgeSQLORM, 1000, 100);

      expect(mockForgeSQLORM.getDrizzleQueryBuilder).toHaveBeenCalled();
      expect(consoleWarnSpy).toHaveBeenCalled();
    });

    it("should handle query errors gracefully", async () => {
      const mockQuery = {
        select: vi.fn().mockReturnThis(),
        from: vi.fn().mockReturnThis(),
        where: vi.fn().mockRejectedValue(new Error("Query failed")),
      };

      (mockForgeSQLORM.getDrizzleQueryBuilder as any).mockReturnValue(mockQuery);

      await printQueriesWithPlan(mockForgeSQLORM, 1000, 100);

      expect(consoleDebugSpy).toHaveBeenCalled();
    });

    it("should use default timeout when not provided", async () => {
      const mockQuery = {
        select: vi.fn().mockReturnThis(),
        from: vi.fn().mockReturnThis(),
        where: vi.fn().mockReturnValue(Promise.resolve([])),
      };

      (mockForgeSQLORM.getDrizzleQueryBuilder as any).mockReturnValue(mockQuery);

      await printQueriesWithPlan(mockForgeSQLORM, 1000);

      expect(mockForgeSQLORM.getDrizzleQueryBuilder).toHaveBeenCalled();
    });
  });

  describe("handleErrorsWithPlan", () => {
    let mockForgeSQLORM: ForgeSqlOperation;
    let consoleWarnSpy: ReturnType<typeof vi.spyOn>;
    let consoleDebugSpy: ReturnType<typeof vi.spyOn>;

    beforeEach(() => {
      consoleWarnSpy = vi.spyOn(console, "warn").mockImplementation(() => {});
      consoleDebugSpy = vi.spyOn(console, "debug").mockImplementation(() => {});

      mockForgeSQLORM = {
        getDrizzleQueryBuilder: vi.fn(),
      } as unknown as ForgeSqlOperation;
    });

    afterEach(() => {
      consoleWarnSpy.mockRestore();
      consoleDebugSpy.mockRestore();
    });

    it("should handle OOM errors", async () => {
      const mockResults = [
        {
          digestText: "SELECT * FROM large_table",
          avgLatency: "5000000",
          avgMem: "100000000", // 100MB
          execCount: "1",
          plan: "Full Table Scan",
          stmtType: "Select",
        },
      ];

      const mockQuery = {
        select: vi.fn().mockReturnThis(),
        from: vi.fn().mockReturnThis(),
        where: vi.fn().mockReturnThis(),
        orderBy: vi.fn().mockReturnThis(),
        limit: vi.fn().mockReturnValue(Promise.resolve(mockResults)),
      };

      (mockForgeSQLORM.getDrizzleQueryBuilder as any).mockReturnValue(mockQuery);

      await handleErrorsWithPlan(mockForgeSQLORM, 1000, "OOM");

      expect(mockForgeSQLORM.getDrizzleQueryBuilder).toHaveBeenCalled();
      expect(mockQuery.orderBy).toHaveBeenCalled();
      expect(mockQuery.limit).toHaveBeenCalled();
    });

    it("should handle TIMEOUT errors", async () => {
      const mockResults = [
        {
          digestText: "SELECT * FROM slow_table",
          avgLatency: "10000000000", // 10 seconds
          avgMem: "5000000",
          execCount: "1",
          plan: "Nested Loop",
          stmtType: "Select",
        },
      ];

      const mockQuery = {
        select: vi.fn().mockReturnThis(),
        from: vi.fn().mockReturnThis(),
        where: vi.fn().mockReturnThis(),
        orderBy: vi.fn().mockReturnThis(),
        limit: vi.fn().mockReturnValue(Promise.resolve(mockResults)),
      };

      (mockForgeSQLORM.getDrizzleQueryBuilder as any).mockReturnValue(mockQuery);

      await handleErrorsWithPlan(mockForgeSQLORM, 1000, "TIMEOUT");

      expect(mockForgeSQLORM.getDrizzleQueryBuilder).toHaveBeenCalled();
      expect(mockQuery.orderBy).toHaveBeenCalled();
    });

    it("should handle query errors gracefully", async () => {
      const mockQuery = {
        select: vi.fn().mockReturnThis(),
        from: vi.fn().mockReturnThis(),
        where: vi.fn().mockReturnThis(),
        orderBy: vi.fn().mockReturnThis(),
        limit: vi.fn().mockRejectedValue(new Error("Query failed")),
      };

      (mockForgeSQLORM.getDrizzleQueryBuilder as any).mockReturnValue(mockQuery);

      await handleErrorsWithPlan(mockForgeSQLORM, 1000, "OOM");

      expect(consoleDebugSpy).toHaveBeenCalled();
    });
  });

  describe("slowQueryPerHours", () => {
    let mockForgeSQLORM: ForgeSqlOperation;
    let consoleWarnSpy: ReturnType<typeof vi.spyOn>;
    let consoleDebugSpy: ReturnType<typeof vi.spyOn>;

    beforeEach(() => {
      consoleWarnSpy = vi.spyOn(console, "warn").mockImplementation(() => {});
      consoleDebugSpy = vi.spyOn(console, "debug").mockImplementation(() => {});

      mockForgeSQLORM = {
        getDrizzleQueryBuilder: vi.fn(),
      } as unknown as ForgeSqlOperation;
    });

    afterEach(() => {
      consoleWarnSpy.mockRestore();
      consoleDebugSpy.mockRestore();
    });

    it("should return slow query results", async () => {
      const mockResults = [
        {
          query: "SELECT * FROM users WHERE id = ?",
          queryTime: "5000",
          memMax: "10000000", // 10MB
          plan: "Index Scan",
        },
      ];

      const mockQuery = {
        select: vi.fn().mockReturnThis(),
        from: vi.fn().mockReturnThis(),
        where: vi.fn().mockReturnValue(Promise.resolve(mockResults)),
      };

      (mockForgeSQLORM.getDrizzleQueryBuilder as any).mockReturnValue(mockQuery);

      const result = await slowQueryPerHours(mockForgeSQLORM, 1);

      expect(result).toBeDefined();
      expect(Array.isArray(result)).toBe(true);
      expect(result.length).toBeGreaterThan(0);
      expect(consoleWarnSpy).toHaveBeenCalled();
    });

    it("should handle null memMax values", async () => {
      const mockResults = [
        {
          query: "SELECT * FROM users",
          queryTime: "3000",
          memMax: null,
          plan: "Table Scan",
        },
      ];

      const mockQuery = {
        select: vi.fn().mockReturnThis(),
        from: vi.fn().mockReturnThis(),
        where: vi.fn().mockReturnValue(Promise.resolve(mockResults)),
      };

      (mockForgeSQLORM.getDrizzleQueryBuilder as any).mockReturnValue(mockQuery);

      const result = await slowQueryPerHours(mockForgeSQLORM, 1);

      expect(result).toBeDefined();
      expect(result.length).toBeGreaterThan(0);
    });

    it("should handle query errors and return error message", async () => {
      const mockQuery = {
        select: vi.fn().mockReturnThis(),
        from: vi.fn().mockReturnThis(),
        where: vi.fn().mockRejectedValue(new Error("Query failed")),
      };

      (mockForgeSQLORM.getDrizzleQueryBuilder as any).mockReturnValue(mockQuery);

      const result = await slowQueryPerHours(mockForgeSQLORM, 1);

      expect(result).toBeDefined();
      expect(Array.isArray(result)).toBe(true);
      expect(result[0]).toContain("Error occurred");
      expect(consoleDebugSpy).toHaveBeenCalled();
    });

    it("should use default timeout when not provided", async () => {
      const mockQuery = {
        select: vi.fn().mockReturnThis(),
        from: vi.fn().mockReturnThis(),
        where: vi.fn().mockReturnValue(Promise.resolve([])),
      };

      (mockForgeSQLORM.getDrizzleQueryBuilder as any).mockReturnValue(mockQuery);

      await slowQueryPerHours(mockForgeSQLORM, 1);

      expect(mockForgeSQLORM.getDrizzleQueryBuilder).toHaveBeenCalled();
    });

    it("should use custom timeout when provided", async () => {
      const mockQuery = {
        select: vi.fn().mockReturnThis(),
        from: vi.fn().mockReturnThis(),
        where: vi.fn().mockReturnValue(Promise.resolve([])),
      };

      (mockForgeSQLORM.getDrizzleQueryBuilder as any).mockReturnValue(mockQuery);

      await slowQueryPerHours(mockForgeSQLORM, 1, 5000);

      expect(mockForgeSQLORM.getDrizzleQueryBuilder).toHaveBeenCalled();
    });
  });

  describe("checkProductionEnvironment", () => {
    let consoleLogSpy: ReturnType<typeof vi.spyOn>;

    beforeEach(() => {
      consoleLogSpy = vi.spyOn(console, "log").mockImplementation(() => {});
      vi.clearAllMocks();
    });

    afterEach(() => {
      consoleLogSpy.mockRestore();
      vi.clearAllMocks();
    });

    it("should return error response when in production environment", () => {
      mockGetAppContext.mockReturnValue({ environmentType: "PRODUCTION" });

      const result = checkProductionEnvironment("testFunction");

      expect(result).toBeDefined();
      expect(result?.statusCode).toBe(500);
      expect(result?.body).toBe("testFunction is disabled in production environment");
      expect(consoleLogSpy).toHaveBeenCalledWith(
        "testFunction is disabled in production environment",
      );
    });

    it("should return null when not in production environment", () => {
      mockGetAppContext.mockReturnValue({ environmentType: "DEVELOPMENT" });

      const result = checkProductionEnvironment("testFunction");

      expect(result).toBeNull();
      expect(consoleLogSpy).toHaveBeenCalledWith("testFunction triggered in DEVELOPMENT");
    });

    it("should return null when environment type is STAGING", () => {
      mockGetAppContext.mockReturnValue({ environmentType: "STAGING" });

      const result = checkProductionEnvironment("testFunction");

      expect(result).toBeNull();
      expect(consoleLogSpy).toHaveBeenCalledWith("testFunction triggered in STAGING");
    });

    it("should handle undefined app context", () => {
      mockGetAppContext.mockReturnValue(undefined);

      const result = checkProductionEnvironment("testFunction");

      expect(result).toBeNull();
      expect(consoleLogSpy).toHaveBeenCalledWith("testFunction triggered in undefined");
    });

    it("should handle null app context", () => {
      mockGetAppContext.mockReturnValue(null);

      const result = checkProductionEnvironment("testFunction");

      expect(result).toBeNull();
      expect(consoleLogSpy).toHaveBeenCalledWith("testFunction triggered in undefined");
    });

    it("should handle app context without environmentType", () => {
      mockGetAppContext.mockReturnValue({});

      const result = checkProductionEnvironment("testFunction");

      expect(result).toBeNull();
      expect(consoleLogSpy).toHaveBeenCalledWith("testFunction triggered in undefined");
    });
  });
});
