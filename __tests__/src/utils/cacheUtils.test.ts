// SPDX-FileCopyrightText: 2025-2026 Vasyl Zakharchenko
// SPDX-License-Identifier: MIT

import { describe, it, expect, beforeEach, vi } from "vitest";
import type { ForgeSqlOrmOptions } from "../../../src/core/ForgeSQLQueryBuilder";
import type { Cache } from "../../../src";

// cacheUtils is a thin SPI-delegation layer over options.cacheImplementation; the actual
// KVS-backed behaviour lives in forge-sql-orm-extra (see KVSCache tests there).
vi.mock("../../../src/utils/cacheContextUtils", () => ({
  cacheApplicationContext: { getStore: vi.fn() },
  isTableContainsTableInCacheContext: vi.fn().mockResolvedValue(false),
}));

const mockTable = { _: { name: "users" } } as any;

vi.mock("drizzle-orm/table", () => ({
  getTableName: vi.fn((table: any) => table._.name),
}));

describe("cacheUtils", () => {
  const fakeCache = {
    getQueryResultsFromCache: vi.fn(),
    setQueryResult: vi.fn(),
    clearTablesCache: vi.fn(),
    clearExpiredCache: vi.fn(),
  } satisfies Cache;

  const defaultOptions: ForgeSqlOrmOptions = {
    cacheEntityName: "cache",
    cacheTTL: 120,
    logCache: true,
    cacheWrapTable: true,
    cacheImplementation: fakeCache,
  };

  const mockQuery = {
    toSQL: vi.fn(() => ({ sql: "SELECT * FROM `users` WHERE id = ?", params: [1] })),
  };

  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe("clearCache", () => {
    it("adds the table to the cache context when one is active", async () => {
      const { clearCache } = await import("../../../src/utils/cacheUtils");
      const { cacheApplicationContext } = await import("../../../src/utils/cacheContextUtils");
      const store = { tables: new Set<string>() };
      (cacheApplicationContext.getStore as any).mockReturnValue(store);

      await clearCache(mockTable, defaultOptions);

      expect(store.tables.has("users")).toBe(true);
      expect(fakeCache.clearTablesCache).not.toHaveBeenCalled();
    });

    it("clears the table immediately when there is no cache context", async () => {
      const { clearCache } = await import("../../../src/utils/cacheUtils");
      const { cacheApplicationContext } = await import("../../../src/utils/cacheContextUtils");
      (cacheApplicationContext.getStore as any).mockReturnValue(undefined);

      await clearCache(mockTable, defaultOptions);

      expect(fakeCache.clearTablesCache).toHaveBeenCalledWith(["users"], defaultOptions);
    });
  });

  describe("getFromCache", () => {
    it("throws when cacheImplementation is not configured", async () => {
      const { getFromCache } = await import("../../../src/utils/cacheUtils");
      await expect(
        getFromCache(mockQuery, { ...defaultOptions, cacheImplementation: undefined }),
      ).rejects.toThrow("cacheImplementation is not configured");
    });

    it("delegates to the cache implementation and returns its value", async () => {
      const { getFromCache } = await import("../../../src/utils/cacheUtils");
      fakeCache.getQueryResultsFromCache.mockResolvedValue({ id: 1 });

      const result = await getFromCache(mockQuery, defaultOptions);

      expect(fakeCache.getQueryResultsFromCache).toHaveBeenCalledWith(mockQuery, defaultOptions);
      expect(result).toEqual({ id: 1 });
    });

    it("swallows implementation errors and returns undefined", async () => {
      const { getFromCache } = await import("../../../src/utils/cacheUtils");
      const errorSpy = vi.spyOn(console, "error").mockImplementation(() => undefined);
      fakeCache.getQueryResultsFromCache.mockRejectedValue(new Error("boom"));

      const result = await getFromCache(mockQuery, defaultOptions);

      expect(result).toBeUndefined();
      expect(errorSpy).toHaveBeenCalled();
      errorSpy.mockRestore();
    });
  });

  describe("setCacheResult", () => {
    it("throws when cacheImplementation is not configured", async () => {
      const { setCacheResult } = await import("../../../src/utils/cacheUtils");
      await expect(
        setCacheResult(
          mockQuery,
          { ...defaultOptions, cacheImplementation: undefined },
          { id: 1 },
          300,
        ),
      ).rejects.toThrow("cacheImplementation is not configured");
    });

    it("delegates to the cache implementation with the TTL", async () => {
      const { setCacheResult } = await import("../../../src/utils/cacheUtils");
      const data = { id: 1 };

      await setCacheResult(mockQuery, defaultOptions, data, 300);

      expect(fakeCache.setQueryResult).toHaveBeenCalledWith(defaultOptions, mockQuery, data, 300);
    });

    it("swallows implementation errors", async () => {
      const { setCacheResult } = await import("../../../src/utils/cacheUtils");
      const errorSpy = vi.spyOn(console, "error").mockImplementation(() => undefined);
      fakeCache.setQueryResult.mockRejectedValue(new Error("boom"));

      await expect(
        setCacheResult(mockQuery, defaultOptions, { id: 1 }, 300),
      ).resolves.toBeUndefined();
      expect(errorSpy).toHaveBeenCalled();
      errorSpy.mockRestore();
    });
  });

  describe("clearTablesCache", () => {
    it("throws when cacheImplementation is not configured", async () => {
      const { clearTablesCache } = await import("../../../src/utils/cacheUtils");
      await expect(
        clearTablesCache(["users"], { ...defaultOptions, cacheImplementation: undefined }),
      ).rejects.toThrow("cacheImplementation is not configured");
    });

    it("delegates to the cache implementation", async () => {
      const { clearTablesCache } = await import("../../../src/utils/cacheUtils");

      await clearTablesCache(["users", "orders"], defaultOptions);

      expect(fakeCache.clearTablesCache).toHaveBeenCalledWith(["users", "orders"], defaultOptions);
    });

    it("swallows implementation errors", async () => {
      const { clearTablesCache } = await import("../../../src/utils/cacheUtils");
      const errorSpy = vi.spyOn(console, "error").mockImplementation(() => undefined);
      fakeCache.clearTablesCache.mockRejectedValue(new Error("boom"));

      await expect(clearTablesCache(["users"], defaultOptions)).resolves.toBeUndefined();
      expect(errorSpy).toHaveBeenCalled();
      errorSpy.mockRestore();
    });
  });

  describe("clearExpiredCache", () => {
    it("throws when cacheImplementation is not configured", async () => {
      const { clearExpiredCache } = await import("../../../src/utils/cacheUtils");
      await expect(
        clearExpiredCache({ ...defaultOptions, cacheImplementation: undefined }),
      ).rejects.toThrow("cacheImplementation is not configured");
    });

    it("delegates to the cache implementation", async () => {
      const { clearExpiredCache } = await import("../../../src/utils/cacheUtils");

      await clearExpiredCache(defaultOptions);

      expect(fakeCache.clearExpiredCache).toHaveBeenCalledWith(defaultOptions);
    });

    it("swallows implementation errors", async () => {
      const { clearExpiredCache } = await import("../../../src/utils/cacheUtils");
      const errorSpy = vi.spyOn(console, "error").mockImplementation(() => undefined);
      fakeCache.clearExpiredCache.mockRejectedValue(new Error("boom"));

      await expect(clearExpiredCache(defaultOptions)).resolves.toBeUndefined();
      expect(errorSpy).toHaveBeenCalled();
      errorSpy.mockRestore();
    });
  });

  describe("logging", () => {
    it("debugCacheLog logs only when logCache is enabled", async () => {
      const { debugCacheLog } = await import("../../../src/utils/cacheUtils");
      const debugSpy = vi.spyOn(console, "debug").mockImplementation(() => undefined);

      debugCacheLog("hello", { ...defaultOptions, logCache: false });
      expect(debugSpy).not.toHaveBeenCalled();

      debugCacheLog("hello", { ...defaultOptions, logCache: true });
      expect(debugSpy).toHaveBeenCalledWith("hello");
      debugSpy.mockRestore();
    });

    it("warnCacheLog logs only when logCache is enabled", async () => {
      const { warnCacheLog } = await import("../../../src/utils/cacheUtils");
      const warnSpy = vi.spyOn(console, "warn").mockImplementation(() => undefined);

      warnCacheLog("careful", { ...defaultOptions, logCache: false });
      expect(warnSpy).not.toHaveBeenCalled();

      warnCacheLog("careful", { ...defaultOptions, logCache: true });
      expect(warnSpy).toHaveBeenCalledWith("careful");
      warnSpy.mockRestore();
    });
  });

  describe("hashKey", () => {
    it("generates a consistent hash for the same query", async () => {
      const { hashKey } = await import("../../../src/utils/cacheUtils");
      const query = { sql: "SELECT * FROM users WHERE id = ?", params: [1] };

      expect(hashKey(query)).toBe(hashKey({ ...query }));
      expect(hashKey(query)).toMatch(/^CachedQuery_[a-f0-9]{32}$/);
    });

    it("generates different hashes for different params", async () => {
      const { hashKey } = await import("../../../src/utils/cacheUtils");
      const sql = "SELECT * FROM users WHERE id = ?";

      expect(hashKey({ sql, params: [1] })).not.toBe(hashKey({ sql, params: [2] }));
    });

    it("generates different hashes for different SQL", async () => {
      const { hashKey } = await import("../../../src/utils/cacheUtils");

      expect(hashKey({ sql: "SELECT * FROM users WHERE id = ?", params: [1] })).not.toBe(
        hashKey({ sql: "SELECT * FROM users WHERE name = ?", params: [1] }),
      );
    });

    it("is case-insensitive on the SQL", async () => {
      const { hashKey } = await import("../../../src/utils/cacheUtils");

      expect(hashKey({ sql: "SELECT * FROM users", params: [] })).toBe(
        hashKey({ sql: "select * from users", params: [] }),
      );
    });
  });
});
