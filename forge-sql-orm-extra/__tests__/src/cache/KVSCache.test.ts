// SPDX-FileCopyrightText: 2025-2026 Vasyl Zakharchenko
// SPDX-License-Identifier: MIT

import { describe, it, expect, beforeEach, afterEach, vi } from "vitest";
import { DateTime } from "luxon";

// Hoisted mocks so the @forge/kvs mock factory can reference them safely.
const { mockKvs, mockContains, mockLessThan, mockFilterOr } = vi.hoisted(() => ({
  mockKvs: {
    entity: vi.fn(),
    transact: vi.fn(),
    batchDelete: vi.fn(),
  },
  mockContains: vi.fn((value: string) => ({ contains: value })),
  mockLessThan: vi.fn((value: number) => ({ lessThan: value })),
  mockFilterOr: vi.fn(),
}));

vi.mock("@forge/kvs", () => {
  class MockFilter {
    or(...args: unknown[]) {
      mockFilterOr(...args);
      return this;
    }
  }
  return {
    kvs: mockKvs,
    Filter: MockFilter,
    FilterConditions: { contains: mockContains },
    WhereConditions: { lessThan: mockLessThan },
  };
});

// KVSCache pulls cache-context/log helpers from the forge-sql-orm barrel; partial-mock
// it so only the cache-context check is stubbed and the rest stays real.
const mockIsTableInContext = vi.hoisted(() => vi.fn());
vi.mock("forge-sql-orm", async (importOriginal) => {
  const actual = await importOriginal<typeof import("forge-sql-orm")>();
  return { ...actual, isTableContainsTableInCacheContext: mockIsTableInContext };
});

import { KVSCache } from "../../../src/cache/KVSCache";
import { ForgeSqlOrmOptionsExtra } from "../../../src/core";

// Builds a query-builder mock whose terminal getMany resolves to the given pages.
const queryBuilder = (
  pages: Array<{ results: Array<{ key: string }>; nextCursor: string | null }>,
) => {
  const getMany = vi.fn();
  pages.forEach((page) => getMany.mockResolvedValueOnce(page));
  return {
    index: vi.fn().mockReturnThis(),
    filters: vi.fn().mockReturnThis(),
    where: vi.fn().mockReturnThis(),
    cursor: vi.fn().mockReturnThis(),
    limit: vi.fn().mockReturnThis(),
    getMany,
  };
};

describe("KVSCache", () => {
  let cache: KVSCache;

  const defaultOptions: ForgeSqlOrmOptionsExtra = {
    cacheEntityName: "cache",
    cacheTTL: 120,
    logCache: true,
    cacheWrapTable: true,
  };

  const mockQuery = {
    toSQL: () => ({ sql: "SELECT * FROM `users` WHERE id = ?", params: [1] }),
  } as any;

  beforeEach(() => {
    vi.clearAllMocks();
    vi.useFakeTimers();
    vi.setSystemTime(new Date("2024-01-01T00:00:00Z"));
    cache = new KVSCache();
    mockKvs.batchDelete.mockResolvedValue({ failedKeys: [] });
    mockIsTableInContext.mockResolvedValue(false);
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  describe("getQueryResultsFromCache", () => {
    it("throws when cacheEntityName is not configured", async () => {
      await expect(
        cache.getQueryResultsFromCache(mockQuery, {
          ...defaultOptions,
          cacheEntityName: undefined,
        }),
      ).rejects.toThrow("cacheEntityName is not configured");
    });

    it("returns undefined and skips KVS when the table is queued for invalidation", async () => {
      mockIsTableInContext.mockResolvedValue(true);

      const result = await cache.getQueryResultsFromCache(mockQuery, defaultOptions);

      expect(result).toBeUndefined();
      expect(mockKvs.entity).not.toHaveBeenCalled();
    });

    it("returns parsed data when the entry is valid and not expired", async () => {
      mockKvs.entity.mockReturnValue({
        get: vi.fn().mockResolvedValue({
          sql: "`users`",
          expiration: Math.floor(DateTime.now().plus({ hours: 1 }).toSeconds()),
          data: JSON.stringify({ id: 1, name: "John" }),
        }),
      });

      const result = await cache.getQueryResultsFromCache(mockQuery, defaultOptions);

      expect(result).toEqual({ id: 1, name: "John" });
      expect(mockKvs.entity).toHaveBeenCalledWith("cache");
    });

    it("returns undefined and logs when the entry is expired", async () => {
      const debugSpy = vi.spyOn(console, "debug").mockImplementation(() => undefined);
      mockKvs.entity.mockReturnValue({
        get: vi.fn().mockResolvedValue({
          sql: "`users`",
          expiration: Math.floor(DateTime.now().minus({ hours: 1 }).toSeconds()),
          data: JSON.stringify({ id: 1 }),
        }),
      });

      const result = await cache.getQueryResultsFromCache(mockQuery, defaultOptions);

      expect(result).toBeUndefined();
      expect(debugSpy).toHaveBeenCalledWith(
        expect.stringMatching(/Expired cache entry still exists/),
      );
      debugSpy.mockRestore();
    });

    it("returns undefined when the stored SQL no longer matches", async () => {
      mockKvs.entity.mockReturnValue({
        get: vi.fn().mockResolvedValue({
          sql: "`orders`",
          expiration: Math.floor(DateTime.now().plus({ hours: 1 }).toSeconds()),
          data: JSON.stringify({ id: 1 }),
        }),
      });

      const result = await cache.getQueryResultsFromCache(mockQuery, defaultOptions);

      expect(result).toBeUndefined();
    });

    it("returns undefined on a cache miss", async () => {
      mockKvs.entity.mockReturnValue({ get: vi.fn().mockResolvedValue(undefined) });

      const result = await cache.getQueryResultsFromCache(mockQuery, defaultOptions);

      expect(result).toBeUndefined();
    });

    it("reads from the configured custom field names", async () => {
      const get = vi.fn().mockResolvedValue({
        query: "`users`",
        exp: Math.floor(DateTime.now().plus({ hours: 1 }).toSeconds()),
        result: JSON.stringify({ id: 7 }),
      });
      mockKvs.entity.mockReturnValue({ get });

      const result = await cache.getQueryResultsFromCache(mockQuery, {
        ...defaultOptions,
        cacheEntityQueryName: "query",
        cacheEntityExpirationName: "exp",
        cacheEntityDataName: "result",
      });

      expect(result).toEqual({ id: 7 });
    });
  });

  describe("setQueryResult", () => {
    const mockTransactSet = () => {
      const set = vi.fn().mockReturnThis();
      const execute = vi.fn().mockResolvedValue(undefined);
      mockKvs.transact.mockReturnValue({ set, execute });
      return { set, execute };
    };

    it("throws when cacheEntityName is not configured", async () => {
      await expect(
        cache.setQueryResult({ ...defaultOptions, cacheEntityName: undefined }, mockQuery, {}, 300),
      ).rejects.toThrow("cacheEntityName is not configured");
    });

    it("skips writing when the table is queued for invalidation", async () => {
      mockIsTableInContext.mockResolvedValue(true);

      await cache.setQueryResult(defaultOptions, mockQuery, { id: 1 }, 300);

      expect(mockKvs.transact).not.toHaveBeenCalled();
    });

    it("stores the serialized result with backticked tables, expiration and TTL", async () => {
      const { set, execute } = mockTransactSet();
      const data = { id: 1, name: "John" };

      await cache.setQueryResult(defaultOptions, mockQuery, data, 300);

      expect(set).toHaveBeenCalledWith(
        expect.any(String),
        expect.objectContaining({
          sql: "`users`",
          expiration: expect.any(Number),
          data: JSON.stringify(data),
        }),
        { entityName: "cache" },
        { ttl: { value: 300, unit: "SECONDS" } },
      );
      expect(execute).toHaveBeenCalled();
    });

    it("writes to the configured custom field names", async () => {
      const { set } = mockTransactSet();

      await cache.setQueryResult(
        {
          ...defaultOptions,
          cacheEntityQueryName: "query",
          cacheEntityExpirationName: "exp",
          cacheEntityDataName: "result",
        },
        mockQuery,
        { id: 1 },
        300,
      );

      expect(set).toHaveBeenCalledWith(
        expect.any(String),
        expect.objectContaining({
          query: "`users`",
          exp: expect.any(Number),
          result: JSON.stringify({ id: 1 }),
        }),
        { entityName: "cache" },
        { ttl: { value: 300, unit: "SECONDS" } },
      );
    });
  });

  describe("clearTablesCache", () => {
    it("throws when cacheEntityName is not configured", async () => {
      await expect(
        cache.clearTablesCache(["users"], { ...defaultOptions, cacheEntityName: undefined }),
      ).rejects.toThrow("cacheEntityName is not configured");
    });

    it("deletes matched entries for every table", async () => {
      const builder = queryBuilder([{ results: [{ key: "k1" }, { key: "k2" }], nextCursor: null }]);
      mockKvs.entity.mockReturnValue({ query: vi.fn().mockReturnValue(builder) });

      await cache.clearTablesCache(["users", "orders"], defaultOptions);

      expect(mockKvs.entity).toHaveBeenCalledWith("cache");
      expect(builder.getMany).toHaveBeenCalledTimes(1);
      expect(mockKvs.batchDelete).toHaveBeenCalledTimes(1);
    });

    it("wraps table names in backticks when cacheWrapTable is enabled", async () => {
      const builder = queryBuilder([{ results: [], nextCursor: null }]);
      mockKvs.entity.mockReturnValue({ query: vi.fn().mockReturnValue(builder) });

      await cache.clearTablesCache(["Users"], defaultOptions);

      expect(mockContains).toHaveBeenCalledWith("`users`");
    });

    it("uses raw lowercased table names when cacheWrapTable is disabled", async () => {
      const builder = queryBuilder([{ results: [], nextCursor: null }]);
      mockKvs.entity.mockReturnValue({ query: vi.fn().mockReturnValue(builder) });

      await cache.clearTablesCache(["Users"], { ...defaultOptions, cacheWrapTable: false });

      expect(mockContains).toHaveBeenCalledWith("users");
    });

    it("follows pagination cursors until exhausted", async () => {
      const builder = queryBuilder([
        { results: [{ key: "k1" }], nextCursor: "cursor1" },
        { results: [{ key: "k2" }], nextCursor: null },
      ]);
      mockKvs.entity.mockReturnValue({ query: vi.fn().mockReturnValue(builder) });

      await cache.clearTablesCache(["users"], defaultOptions);

      expect(builder.getMany).toHaveBeenCalledTimes(2);
      expect(mockKvs.batchDelete).toHaveBeenCalledTimes(2);
    });

    it("deletes in batches of 25", async () => {
      const results = Array.from({ length: 30 }, (_, i) => ({ key: `k${i}` }));
      const builder = queryBuilder([{ results, nextCursor: null }]);
      mockKvs.entity.mockReturnValue({ query: vi.fn().mockReturnValue(builder) });

      await cache.clearTablesCache(["users"], defaultOptions);

      expect(mockKvs.batchDelete).toHaveBeenCalledTimes(2);
      expect(mockKvs.batchDelete.mock.calls[0][0]).toHaveLength(25);
      expect(mockKvs.batchDelete.mock.calls[1][0]).toHaveLength(5);
    });

    it("warns about keys that failed to delete", async () => {
      const warnSpy = vi.spyOn(console, "warn").mockImplementation(() => undefined);
      mockKvs.batchDelete.mockResolvedValue({ failedKeys: [{ key: "k1" }] });
      const builder = queryBuilder([{ results: [{ key: "k1" }], nextCursor: null }]);
      mockKvs.entity.mockReturnValue({ query: vi.fn().mockReturnValue(builder) });

      await cache.clearTablesCache(["users"], defaultOptions);

      expect(warnSpy).toHaveBeenCalledWith(expect.stringContaining("k1"));
      warnSpy.mockRestore();
    });

    it("logs how many records were cleared", async () => {
      const debugSpy = vi.spyOn(console, "debug").mockImplementation(() => undefined);
      const builder = queryBuilder([{ results: [{ key: "k1" }], nextCursor: null }]);
      mockKvs.entity.mockReturnValue({ query: vi.fn().mockReturnValue(builder) });

      await cache.clearTablesCache(["users"], defaultOptions);

      expect(debugSpy).toHaveBeenCalledWith(
        expect.stringMatching(/Cleared \d+ cache records in \d+ seconds/),
      );
      debugSpy.mockRestore();
    });
  });

  describe("clearExpiredCache", () => {
    it("throws when cacheEntityName is not configured", async () => {
      await expect(
        cache.clearExpiredCache({ ...defaultOptions, cacheEntityName: undefined }),
      ).rejects.toThrow("cacheEntityName is not configured");
    });

    it("deletes entries whose expiration is in the past", async () => {
      const builder = queryBuilder([
        { results: [{ key: "expired1" }, { key: "expired2" }], nextCursor: null },
      ]);
      mockKvs.entity.mockReturnValue({ query: vi.fn().mockReturnValue(builder) });

      await cache.clearExpiredCache(defaultOptions);

      expect(mockKvs.entity).toHaveBeenCalledWith("cache");
      expect(mockLessThan).toHaveBeenCalled();
      expect(mockKvs.batchDelete).toHaveBeenCalled();
    });

    it("follows pagination cursors for expired entries", async () => {
      const builder = queryBuilder([
        { results: [{ key: "e1" }], nextCursor: "cursor1" },
        { results: [{ key: "e2" }], nextCursor: null },
      ]);
      mockKvs.entity.mockReturnValue({ query: vi.fn().mockReturnValue(builder) });

      await cache.clearExpiredCache(defaultOptions);

      expect(builder.getMany).toHaveBeenCalledTimes(2);
      expect(mockKvs.batchDelete).toHaveBeenCalledTimes(2);
    });

    it("logs how many expired records were cleared", async () => {
      const debugSpy = vi.spyOn(console, "debug").mockImplementation(() => undefined);
      const builder = queryBuilder([{ results: [{ key: "e1" }], nextCursor: null }]);
      mockKvs.entity.mockReturnValue({ query: vi.fn().mockReturnValue(builder) });

      await cache.clearExpiredCache(defaultOptions);

      expect(debugSpy).toHaveBeenCalledWith(
        expect.stringMatching(/Cleared \d+ expired cache records in \d+ seconds/),
      );
      debugSpy.mockRestore();
    });
  });

  describe("retry behavior", () => {
    beforeEach(() => {
      // Make backoff delays resolve immediately.
      vi.stubGlobal("setTimeout", (callback: () => void) => {
        callback();
        return 0 as unknown as ReturnType<typeof setTimeout>;
      });
    });

    afterEach(() => {
      vi.unstubAllGlobals();
    });

    it("retries transient failures and succeeds", async () => {
      const warnSpy = vi.spyOn(console, "warn").mockImplementation(() => undefined);
      let attempts = 0;
      const getMany = vi.fn().mockImplementation(() => {
        attempts += 1;
        if (attempts < 3) {
          throw new Error("Temporary error");
        }
        return Promise.resolve({ results: [{ key: "k1" }], nextCursor: null });
      });
      mockKvs.entity.mockReturnValue({
        query: vi.fn().mockReturnValue({
          index: vi.fn().mockReturnThis(),
          filters: vi.fn().mockReturnThis(),
          cursor: vi.fn().mockReturnThis(),
          limit: vi.fn().mockReturnThis(),
          getMany,
        }),
      });

      await cache.clearTablesCache(["users"], defaultOptions);

      expect(getMany).toHaveBeenCalledTimes(3);
      expect(warnSpy).toHaveBeenCalledWith(
        expect.stringMatching(/Error during clearing cache: Temporary error, retry \d+/),
        expect.any(Error),
      );
      warnSpy.mockRestore();
    });

    it("rejects after exhausting the maximum retry attempts", async () => {
      const errorSpy = vi.spyOn(console, "error").mockImplementation(() => undefined);
      vi.spyOn(console, "warn").mockImplementation(() => undefined);
      const getMany = vi.fn().mockRejectedValue(new Error("Persistent error"));
      mockKvs.entity.mockReturnValue({
        query: vi.fn().mockReturnValue({
          index: vi.fn().mockReturnThis(),
          filters: vi.fn().mockReturnThis(),
          cursor: vi.fn().mockReturnThis(),
          limit: vi.fn().mockReturnThis(),
          getMany,
        }),
      });

      await expect(cache.clearTablesCache(["users"], defaultOptions)).rejects.toThrow(
        "Persistent error",
      );
      expect(errorSpy).toHaveBeenCalledWith(
        expect.stringMatching(/Error during clearing cache: Persistent error/),
        expect.any(Error),
      );
      errorSpy.mockRestore();
    });
  });
});
