// SPDX-FileCopyrightText: 2025-2026 Vasyl Zakharchenko
// SPDX-License-Identifier: MIT

import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { eq, sql as rawSql } from "drizzle-orm";
import type { Cache } from "forge-sql-orm";
import { cacheApplicationContext, clearTablesCache } from "forge-sql-orm";
import ForgeSQL from "../../../src";
import type { ForgeSqlOperationExt } from "../../../src/core/ForgeSQLExt";
import { testEntity } from "../../entities/TestEntity";

vi.mock("@forge/sql", () => ({
  sql: {
    prepare: vi.fn((query: string) => {
      const statement = {
        query: query || "MOCK_QUERY",
        params: [] as unknown[],
        bindParams: vi.fn(),
        execute: vi.fn().mockResolvedValue({
          rows: [{ id: 1, name: "Test" }],
          metadata: { dbExecutionTime: 10, responseSize: 100 },
        }),
      };
      statement.bindParams.mockReturnValue(statement);
      return statement;
    }),
  },
}));

vi.mock("@forge/sql/out/sql", () => ({
  SQL_API_ENDPOINTS: { EXECUTE_DDL: "EXECUTE_DDL" },
}));

vi.mock("@forge/kvs", () => ({
  kvs: { entity: vi.fn(), transact: vi.fn(), batchDelete: vi.fn() },
  Filter: class {},
  FilterConditions: { contains: vi.fn() },
  WhereConditions: { lessThan: vi.fn() },
}));

const cacheContextTables = new Set<string>(["test_entity"]);

vi.mock("forge-sql-orm", async (importOriginal) => {
  const actual = await importOriginal<typeof import("forge-sql-orm")>();
  return {
    ...actual,
    clearTablesCache: vi.fn().mockResolvedValue(undefined),
    cacheApplicationContext: {
      getStore: vi.fn(() => ({ tables: cacheContextTables })),
      run: vi.fn((_store: unknown, fn: () => unknown) => fn()),
    },
  };
});

const mockClearTablesCache = vi.mocked(clearTablesCache);

const fakeCache = {
  getQueryResultsFromCache: vi.fn(),
  setQueryResult: vi.fn(),
  clearTablesCache: vi.fn(),
  clearExpiredCache: vi.fn(),
} satisfies Cache;

type ForgeSQLInternal = InstanceType<typeof ForgeSQL> & {
  ormInstance: ForgeSqlOperationExt;
};

function getOrmInstance(forgeSQL: InstanceType<typeof ForgeSQL>): ForgeSqlOperationExt {
  return (forgeSQL as ForgeSQLInternal).ormInstance;
}

describe("forge-sql-orm-extra ForgeSQLORM", () => {
  let forgeSQL: InstanceType<typeof ForgeSQL>;

  beforeEach(() => {
    vi.clearAllMocks();
    vi.mocked(cacheApplicationContext.getStore).mockImplementation(() => ({
      tables: cacheContextTables,
    }));
    fakeCache.getQueryResultsFromCache.mockResolvedValue(undefined);
    fakeCache.clearTablesCache.mockResolvedValue(undefined);
    mockClearTablesCache.mockResolvedValue(undefined);
    forgeSQL = new ForgeSQL({
      cacheEntityName: "cache",
      cacheTTL: 300,
      cacheImplementation: fakeCache,
      logRawSqlQuery: false,
    });
  });

  describe("singleton and surface", () => {
    it("returns the same underlying instance for repeated construction", () => {
      const second = new ForgeSQL({ cacheImplementation: fakeCache });
      expect(getOrmInstance(second)).toBe(getOrmInstance(forgeSQL));
    });

    it("exposes fetch, analyze, modifyWithVersioning, drizzle builder, and rovo", () => {
      expect(forgeSQL.fetch()).toBeDefined();
      expect(forgeSQL.analyze()).toBeDefined();
      expect(forgeSQL.modifyWithVersioning()).toBeDefined();
      const qb = forgeSQL.getDrizzleQueryBuilder();
      expect(typeof qb.selectAliased).toBe("function");
      expect(typeof qb.selectAliasedCacheable).toBe("function");
      expect(typeof qb.selectFromCacheable).toBe("function");
      const rovo = forgeSQL.rovo();
      expect(typeof rovo.rovoSettingBuilder).toBe("function");
    });

    it("getDrizzleQueryBuilder on impl returns the extended drizzle instance", () => {
      const impl = getOrmInstance(forgeSQL);
      const qb = impl.getDrizzleQueryBuilder();
      expect(typeof qb.insertAndEvictCache).toBe("function");
      expect(typeof qb.executeQueryCacheable).toBe("function");
    });
  });

  describe("executeWithMetadata", () => {
    it("delegates to core with normalizeFunction when options are omitted", async () => {
      const onMetadata = vi.fn();
      const result = await forgeSQL.executeWithMetadata(async () => ({ ok: true }), onMetadata);
      expect(result).toEqual({ ok: true });
      expect(onMetadata).toHaveBeenCalled();
    });

    it("passes through explicit metadata options", async () => {
      const onMetadata = vi.fn();
      await forgeSQL.executeWithMetadata(async () => "x", onMetadata, {
        mode: "SummaryTable",
        summaryTableWindowTime: 5000,
      });
      expect(onMetadata).toHaveBeenCalled();
    });

    it("impl applies normalizeFunction when metadata options are omitted", async () => {
      const onMetadata = vi.fn();
      await getOrmInstance(forgeSQL).executeWithMetadata(async () => "ok", onMetadata);
      expect(onMetadata).toHaveBeenCalled();
    });
  });

  describe("cache context", () => {
    it("executeWithCacheContext runs the callback", async () => {
      const callback = vi.fn().mockResolvedValue(undefined);
      await forgeSQL.executeWithCacheContext(callback);
      expect(callback).toHaveBeenCalled();
    });

    it("executeWithCacheContextAndReturnValue returns value and clears collected tables", async () => {
      const result = await forgeSQL.executeWithCacheContextAndReturnValue(async () => 42);

      expect(result).toBe(42);
      expect(mockClearTablesCache).toHaveBeenCalledWith(
        ["test_entity"],
        expect.objectContaining({ cacheEntityName: "cache" }),
      );
    });

    it("uses empty defaults when cacheApplicationContext has no store", async () => {
      vi.mocked(cacheApplicationContext.getStore).mockReturnValue(undefined);

      await forgeSQL.executeWithCacheContextAndReturnValue(async () => 1);

      expect(mockClearTablesCache).toHaveBeenCalledWith(
        [],
        expect.objectContaining({ cacheEntityName: "cache" }),
      );
    });
  });

  describe("local cache context", () => {
    it("executeWithLocalContext and executeWithLocalCacheContextAndReturnValue delegate to core", async () => {
      const localCb = vi.fn().mockResolvedValue(undefined);
      await forgeSQL.executeWithLocalContext(localCb);
      expect(localCb).toHaveBeenCalled();

      const result = await forgeSQL.executeWithLocalCacheContextAndReturnValue(async () => 7);
      expect(result).toBe(7);
    });
  });

  describe("select helpers", () => {
    it("throws when select fields are empty on impl", () => {
      const impl = getOrmInstance(forgeSQL);
      expect(() => impl.select(null as never)).toThrow("fields is empty");
      expect(() => impl.selectDistinct(undefined as never)).toThrow("fields is empty");
      expect(() => impl.selectCacheable(null as never)).toThrow("fields is empty");
      expect(() => impl.selectDistinctCacheable(undefined as never)).toThrow("fields is empty");
    });

    it("returns builders for select, selectDistinct, selectCacheable, and selectDistinctCacheable", () => {
      expect(forgeSQL.select({ id: testEntity.id })).toBeDefined();
      expect(forgeSQL.selectDistinct({ id: testEntity.id })).toBeDefined();
      expect(forgeSQL.selectCacheable({ id: testEntity.id }, 60)).toBeDefined();
      expect(forgeSQL.selectDistinctCacheable({ id: testEntity.id }, 60)).toBeDefined();
    });
  });

  describe("table-scoped selects", () => {
    it("selectFrom and selectDistinctFrom return builders via public wrapper", () => {
      expect(forgeSQL.selectFrom(testEntity)).toBeDefined();
      expect(forgeSQL.selectDistinctFrom(testEntity)).toBeDefined();
    });

    it("selectFrom and selectDistinctFrom on impl delegate to core", () => {
      const impl = getOrmInstance(forgeSQL);
      expect(impl.selectFrom(testEntity)).toBeDefined();
      expect(impl.selectDistinctFrom(testEntity)).toBeDefined();
    });

    it("selectCacheableFrom returns cached rows on hit", async () => {
      fakeCache.getQueryResultsFromCache.mockResolvedValue([{ id: 1, name: "cached" }]);
      const result = await forgeSQL.selectCacheableFrom(testEntity);
      expect(result).toEqual([{ id: 1, name: "cached" }]);
    });

    it("selectCacheableFrom and selectDistinctCacheableFrom on impl use drizzle cacheable helpers", async () => {
      const impl = getOrmInstance(forgeSQL);
      fakeCache.getQueryResultsFromCache.mockResolvedValue([{ id: 2, name: "hit" }]);
      const fromResult = await impl.selectCacheableFrom(testEntity, 120);
      const distinctResult = await impl.selectDistinctCacheableFrom(testEntity, 90);
      expect(fromResult).toEqual([{ id: 2, name: "hit" }]);
      expect(distinctResult).toEqual([{ id: 2, name: "hit" }]);
    });

    it("selectDistinctCacheableFrom via public wrapper with cache hit", async () => {
      fakeCache.getQueryResultsFromCache.mockResolvedValue([{ id: 1, name: "d" }]);
      const result = await forgeSQL
        .selectDistinctCacheableFrom(testEntity, 60)
        .where(eq(testEntity.id, 1));
      expect(result).toEqual([{ id: 1, name: "d" }]);
    });
  });

  describe("CRUD builders", () => {
    it("returns insert, update, delete builders from public API", () => {
      expect(forgeSQL.insert(testEntity)).toBeDefined();
      expect(forgeSQL.update(testEntity)).toBeDefined();
      expect(forgeSQL.delete(testEntity)).toBeDefined();
    });

    it("returns cache-evicting builders from public API", () => {
      expect(forgeSQL.insertAndEvictCache(testEntity)).toBeDefined();
      expect(forgeSQL.updateAndEvictCache(testEntity)).toBeDefined();
      expect(forgeSQL.deleteAndEvictCache(testEntity)).toBeDefined();
    });

    it("returns cache-evicting builders from impl", () => {
      const impl = getOrmInstance(forgeSQL);
      expect(impl.insertAndEvictCache(testEntity)).toBeDefined();
      expect(impl.updateAndEvictCache(testEntity)).toBeDefined();
      expect(impl.deleteAndEvictCache(testEntity)).toBeDefined();
    });
  });

  describe("raw SQL execution", () => {
    it("execute, executeDDL, executeDDLActions, and executeCacheable delegate on public API", async () => {
      const impl = getOrmInstance(forgeSQL);
      vi.spyOn(impl, "execute").mockResolvedValue([[]] as never);
      vi.spyOn(impl, "executeDDL").mockResolvedValue([[]] as never);
      vi.spyOn(impl, "executeDDLActions").mockImplementation(async (fn) => fn());
      vi.spyOn(impl, "executeCacheable").mockResolvedValue([[]] as never);

      await forgeSQL.execute("SELECT 1");
      await forgeSQL.executeDDL("CREATE TABLE t (id INT)");
      await forgeSQL.executeDDLActions(async () => "ddl");
      await forgeSQL.executeCacheable("SELECT 3", 120);

      expect(impl.execute).toHaveBeenCalledWith("SELECT 1");
      expect(impl.executeDDL).toHaveBeenCalledWith("CREATE TABLE t (id INT)");
      expect(impl.executeCacheable).toHaveBeenCalledWith("SELECT 3", 120);
    });

    it("executeDDLActions on impl delegates to core", async () => {
      const impl = getOrmInstance(forgeSQL);
      const core = (
        impl as ForgeSqlOperationExt & {
          forgeSQLORM: { executeDDLActions: typeof impl.executeDDLActions };
        }
      ).forgeSQLORM;
      vi.spyOn(core, "executeDDLActions").mockImplementation(async (fn) => fn());

      const result = await impl.executeDDLActions(async () => "ddl-ok");

      expect(result).toBe("ddl-ok");
      expect(core.executeDDLActions).toHaveBeenCalled();
    });

    it("execute, executeCacheable, and executeDDL on impl delegate to drizzle/core", async () => {
      const impl = getOrmInstance(forgeSQL);
      const core = (
        impl as ForgeSqlOperationExt & { forgeSQLORM: { execute: typeof impl.execute } }
      ).forgeSQLORM;
      const coreExecute = vi.spyOn(core, "execute").mockResolvedValue([[]] as never);
      const cacheable = vi
        .spyOn(impl.getDrizzleQueryBuilder(), "executeQueryCacheable")
        .mockResolvedValue([[]] as never);

      await impl.execute(rawSql`select 1`);
      await impl.executeCacheable("SELECT 4");
      await impl.executeDDL("DROP TABLE IF EXISTS t");

      expect(coreExecute).toHaveBeenCalledTimes(2);
      expect(cacheable).toHaveBeenCalledWith("SELECT 4", undefined);
      expect(coreExecute).toHaveBeenCalledWith("DROP TABLE IF EXISTS t");
    });
  });

  describe("CTEs", () => {
    it("$with and with on impl delegate to core", () => {
      const impl = getOrmInstance(forgeSQL);
      const withBuilder = impl.$with("impl_cte");
      expect(withBuilder).toBeDefined();
      const withQuery = withBuilder.as(
        impl.select({ id: rawSql<number>`${testEntity.id}`.as("id") }).from(testEntity),
      );
      expect(impl.with(withQuery).select({ id: withQuery.id })).toBeDefined();
    });

    it("$with and with on public class use getDrizzleQueryBuilder", () => {
      const withBuilder = forgeSQL.$with("public_cte");
      expect(withBuilder).toBeDefined();
      const withQuery = withBuilder.as(
        forgeSQL.select({ id: rawSql<number>`${testEntity.id}`.as("id") }).from(testEntity),
      );
      expect(forgeSQL.with(withQuery).select({ id: withQuery.id })).toBeDefined();
    });
  });

  describe("cache eviction", () => {
    it("evictCache delegates table names through clearTablesCache", async () => {
      await forgeSQL.evictCache(["users", "orders"]);
      expect(mockClearTablesCache).toHaveBeenCalledWith(
        ["users", "orders"],
        expect.objectContaining({ cacheEntityName: "cache" }),
      );
    });

    it("evictCacheEntities resolves table objects to names", async () => {
      await forgeSQL.evictCacheEntities([testEntity]);
      expect(mockClearTablesCache).toHaveBeenCalledWith(
        ["test_entity"],
        expect.objectContaining({ cacheEntityName: "cache" }),
      );
    });
  });
});

describe("forge-sql-orm-extra ForgeSQLORM isolated initialization", () => {
  afterEach(() => {
    vi.doUnmock("forge-sql-orm");
    vi.resetModules();
  });

  it("applies default options when none are provided", async () => {
    vi.resetModules();
    const { default: IsolatedForgeSQL } = await import("../../../src");
    const instance = new IsolatedForgeSQL();
    expect(instance.fetch()).toBeDefined();
  });

  it("logs and rethrows when core ForgeSQL initialization fails", async () => {
    vi.doMock("forge-sql-orm", async (importOriginal) => {
      const actual = await importOriginal<typeof import("forge-sql-orm")>();
      class FailingForgeSQL {
        constructor() {
          throw new Error("core init failed");
        }
      }
      return { ...actual, default: FailingForgeSQL };
    });
    vi.resetModules();

    const errorSpy = vi.spyOn(console, "error").mockImplementation(() => {});
    const { default: IsolatedForgeSQL } = await import("../../../src");

    expect(() => new IsolatedForgeSQL({ cacheImplementation: fakeCache })).toThrow(
      "core init failed",
    );
    expect(errorSpy).toHaveBeenCalledWith(
      "ForgeSQLORM EXT initialization failed:",
      expect.any(Error),
    );
    errorSpy.mockRestore();
  });
});
