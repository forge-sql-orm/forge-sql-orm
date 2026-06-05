// SPDX-FileCopyrightText: 2025-2026 Vasyl Zakharchenko
// SPDX-License-Identifier: MIT

import { beforeEach, describe, expect, it, vi } from "vitest";
import { eq, sql as rawSql } from "drizzle-orm";
import { sql } from "@forge/sql";
import ForgeSQLORM from "../../../src/core/ForgeSQLORM";
import type { ForgeSqlOperation } from "../../../src/core/ForgeSQLQueryBuilder";
import { NopCache } from "../../../src/lib/cache/NopCache";
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

type ForgeSQLORMInternal = InstanceType<typeof ForgeSQLORM> & {
  ormInstance: ForgeSqlOperation;
};

function getOrmInstance(forgeSQL: ForgeSQLORM): ForgeSqlOperation {
  return (forgeSQL as ForgeSQLORMInternal).ormInstance;
}

describe("ForgeSQLORM", () => {
  let forgeSQL: ForgeSQLORM;
  let consoleErrorSpy: ReturnType<typeof vi.spyOn>;

  beforeEach(() => {
    vi.clearAllMocks();
    consoleErrorSpy = vi.spyOn(console, "error").mockImplementation(() => {});
    forgeSQL = new ForgeSQLORM({
      logRawSqlQuery: false,
      disableOptimisticLocking: false,
      cacheWrapTable: true,
      cacheTTL: 120,
      cacheImplementation: new NopCache(),
    });
  });

  describe("singleton and surface", () => {
    it("returns the same underlying instance for repeated construction", () => {
      const second = new ForgeSQLORM({ logRawSqlQuery: true });
      expect(getOrmInstance(second)).toBe(getOrmInstance(forgeSQL));
    });

    it("exposes fetch, analyze, modifyWithVersioning, and drizzle builder", () => {
      expect(forgeSQL.fetch()).toBeDefined();
      expect(forgeSQL.analyze()).toBeDefined();
      expect(forgeSQL.modifyWithVersioning()).toBeDefined();
      const qb = forgeSQL.getDrizzleQueryBuilder();
      expect(typeof qb.selectAliased).toBe("function");
      expect(typeof qb.selectAliasedDistinct).toBe("function");
    });
  });

  describe("executeWithMetadata", () => {
    it("returns the query result and invokes onMetadata with aggregated metrics", async () => {
      const onMetadata = vi.fn().mockResolvedValue(undefined);

      const result = await forgeSQL.executeWithMetadata(
        async () => {
          await forgeSQL.select({ id: testEntity.id }).from(testEntity);
          return { ok: true };
        },
        onMetadata,
        { mode: "TopSlowest", topQueries: 2 },
      );

      expect(result).toEqual({ ok: true });
      expect(onMetadata).toHaveBeenCalledWith(
        expect.any(Number),
        expect.any(Number),
        expect.any(Function),
      );
    });

    it("skips onMetadata when getLastestMetadata returns undefined", async () => {
      const metadataUtils = await import("../../../src/utils/metadataContextUtils");
      const spy = vi.spyOn(metadataUtils, "getLastestMetadata").mockResolvedValue(undefined);

      const onMetadata = vi.fn();
      const result = await forgeSQL.executeWithMetadata(async () => "done", onMetadata);

      expect(result).toBe("done");
      expect(onMetadata).not.toHaveBeenCalled();
      spy.mockRestore();
    });

    it("logs and swallows errors from the onMetadata callback", async () => {
      const result = await forgeSQL.executeWithMetadata(
        async () => "value",
        () => {
          throw new Error("metadata callback failed");
        },
      );

      expect(result).toBe("value");
      expect(consoleErrorSpy).toHaveBeenCalledWith(
        "[ForgeSQLORM][executeWithMetadata] Failed to run onMetadata callback",
        expect.objectContaining({
          errorMessage: "metadata callback failed",
          errorStack: expect.any(String),
        }),
        expect.any(Error),
      );
    });

    it("invokes the initial printQueriesWithPlan stub in the metadata context", async () => {
      const metadataUtils = await import("../../../src/utils/metadataContextUtils");
      const originalRun = metadataUtils.metadataQueryContext.run.bind(
        metadataUtils.metadataQueryContext,
      );
      const runSpy = vi
        .spyOn(metadataUtils.metadataQueryContext, "run")
        .mockImplementation((store, fn) => {
          void store.printQueriesWithPlan();
          return originalRun(store, fn);
        });

      await forgeSQL.executeWithMetadata(async () => "ok", vi.fn());

      runSpy.mockRestore();
    });

    it("handles non-Error throws in the onMetadata callback", async () => {
      await forgeSQL.executeWithMetadata(
        async () => undefined,
        () => {
          throw "plain failure";
        },
      );

      expect(consoleErrorSpy).toHaveBeenCalledWith(
        "[ForgeSQLORM][executeWithMetadata] Failed to run onMetadata callback",
        expect.objectContaining({
          errorMessage: "plain failure",
          errorStack: undefined,
        }),
        "plain failure",
      );
    });
  });

  describe("select helpers", () => {
    it("throws when select fields are empty", () => {
      const impl = getOrmInstance(forgeSQL);
      expect(() => impl.select(null as never)).toThrow("fields is empty");
      expect(() => impl.selectDistinct(undefined as never)).toThrow("fields is empty");
    });

    it("delegates select and selectDistinct to aliased drizzle helpers", () => {
      const impl = getOrmInstance(forgeSQL);
      expect(impl.select({ id: testEntity.id })).toBeDefined();
      expect(impl.selectDistinct({ id: testEntity.id })).toBeDefined();
    });
  });

  describe("ForgeSQLORMImpl-only query entry points", () => {
    it("selectFrom and selectDistinctFrom run through the impl drizzle instance", async () => {
      const impl = getOrmInstance(forgeSQL);

      await impl.selectFrom(testEntity);
      await impl.selectDistinctFrom(testEntity);

      expect(sql.prepare).toHaveBeenCalledWith(
        "select `id` as `a_id_id`, `name` as `a_name_name` from `test_entity`",
      );
      expect(sql.prepare).toHaveBeenCalledWith(
        "select distinct `id` as `a_id_id`, `name` as `a_name_name` from `test_entity`",
      );
    });

    it("$with and with run through the impl drizzle instance", async () => {
      const impl = getOrmInstance(forgeSQL);
      const withQuery = impl
        .$with("orm_impl_with")
        .as(impl.select({ id: rawSql<number>`${testEntity.id}`.as("id") }).from(testEntity));
      const result = await impl.with(withQuery).select({ id: withQuery.id }).from(withQuery);

      expect(sql.prepare).toHaveBeenCalledWith(
        "with `orm_impl_with` as (select `id` as `id` from `test_entity`) select `id` from `orm_impl_with`",
      );
      expect(result).toEqual([{ id: 1 }]);
    });
  });

  describe("DDL and raw execution", () => {
    it("executeDDLActions on the public wrapper delegates to the impl", async () => {
      const result = await forgeSQL.executeDDLActions(async () => {
        return await forgeSQL.execute("SELECT 1");
      });

      expect(result).toBeDefined();
    });

    it("executeDDL wraps executeQuery in DDL context", async () => {
      await forgeSQL.executeDDL("CREATE TABLE t (id INT)");
      expect(sql.prepare).toHaveBeenCalled();
    });

    it("insert, update, and delete return drizzle builders", () => {
      expect(forgeSQL.insert(testEntity)).toBeDefined();
      expect(forgeSQL.update(testEntity)).toBeDefined();
      expect(forgeSQL.delete(testEntity)).toBeDefined();
    });
  });

  describe("public-only APIs", () => {
    it("selectDistinctCacheableFrom uses the cacheable distinct helper", async () => {
      await forgeSQL.selectDistinctCacheableFrom(testEntity, 60).where(eq(testEntity.id, 1));

      expect(sql.prepare).toHaveBeenCalledWith(
        "select distinct `id` as `a_id_id`, `name` as `a_name_name` from `test_entity` where `test_entity`.`id` = ?",
      );
    });

    it("$with and with on the public class use getDrizzleQueryBuilder", async () => {
      const withQuery = forgeSQL
        .$with("public_with")
        .as(forgeSQL.select({ id: rawSql<number>`${testEntity.id}`.as("id") }).from(testEntity));
      await forgeSQL.with(withQuery).select({ id: withQuery.id }).from(withQuery);

      expect(sql.prepare).toHaveBeenCalledWith(
        "with `public_with` as (select `id` as `id` from `test_entity`) select `id` from `public_with`",
      );
    });
  });

  describe("local cache context", () => {
    it("executeWithLocalContext runs the callback", async () => {
      const callback = vi.fn().mockResolvedValue(undefined);
      await forgeSQL.executeWithLocalContext(callback);
      expect(callback).toHaveBeenCalled();
    });

    it("executeWithLocalCacheContextAndReturnValue returns the callback result", async () => {
      const result = await forgeSQL.executeWithLocalCacheContextAndReturnValue(async () => 99);
      expect(result).toBe(99);
    });
  });

  describe("normalizationSQL", () => {
    it("replaces literals via regex on the public wrapper and impl", () => {
      const sql = "SELECT * FROM users WHERE id = 42 AND name = 'Alice'";

      const publicResult = forgeSQL.normalizationSQL(sql);
      const implResult = getOrmInstance(forgeSQL).normalizationSQL(sql);

      expect(publicResult).toBe(implResult);
      expect(publicResult).toContain("id = ?");
      expect(publicResult).toContain("name = ?");
      expect(publicResult).not.toContain("Alice");
      expect(publicResult).not.toContain("42");
    });
  });

  describe("public wrapper delegation", () => {
    it("selectFrom and selectDistinctFrom delegate to getDrizzleQueryBuilder", async () => {
      await forgeSQL.selectFrom(testEntity);
      await forgeSQL.selectDistinctFrom(testEntity);

      expect(sql.prepare).toHaveBeenCalledWith(
        "select `id` as `a_id_id`, `name` as `a_name_name` from `test_entity`",
      );
      expect(sql.prepare).toHaveBeenCalledWith(
        "select distinct `id` as `a_id_id`, `name` as `a_name_name` from `test_entity`",
      );
    });

    it("execute delegates to the underlying impl", async () => {
      await forgeSQL.execute("SELECT 1");
      expect(sql.prepare).toHaveBeenCalled();
    });

    it("selectDistinct delegates to the underlying impl", () => {
      expect(forgeSQL.selectDistinct({ id: testEntity.id })).toBeDefined();
    });
  });
});

describe("ForgeSQLORM isolated module initialization", () => {
  afterEach(() => {
    vi.doUnmock("../../../src/utils/forgeDriverProxy");
    vi.resetModules();
  });

  it("logs debug output when logRawSqlQuery is enabled", async () => {
    const debugSpy = vi.spyOn(console, "debug").mockImplementation(() => {});
    vi.resetModules();

    const { default: IsolatedForgeSQLORM } = await import("../../../src/core/ForgeSQLORM");
    new IsolatedForgeSQLORM({ logRawSqlQuery: true });

    expect(debugSpy).toHaveBeenCalledWith("Initializing ForgeSQLORM...");
    debugSpy.mockRestore();
  });

  it("applies default options when none are provided", async () => {
    vi.resetModules();

    const { default: IsolatedForgeSQLORM } = await import("../../../src/core/ForgeSQLORM");
    const instance = new IsolatedForgeSQLORM();

    expect(instance.fetch()).toBeDefined();
  });

  it("logs and rethrows when driver initialization fails", async () => {
    vi.doMock("../../../src/utils/forgeDriverProxy", () => ({
      createForgeDriverProxy: vi.fn(() => {
        throw new Error("driver init failed");
      }),
    }));
    vi.resetModules();

    const errorSpy = vi.spyOn(console, "error").mockImplementation(() => {});
    const { default: IsolatedForgeSQLORM } = await import("../../../src/core/ForgeSQLORM");

    expect(() => new IsolatedForgeSQLORM()).toThrow("driver init failed");
    expect(errorSpy).toHaveBeenCalledWith("ForgeSQLORM initialization failed:", expect.any(Error));

    errorSpy.mockRestore();
  });
});
