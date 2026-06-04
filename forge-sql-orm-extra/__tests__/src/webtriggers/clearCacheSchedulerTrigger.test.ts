// SPDX-FileCopyrightText: 2025-2026 Vasyl Zakharchenko
// SPDX-License-Identifier: MIT

import { describe, it, expect, beforeEach, vi } from "vitest";

// The trigger calls clearExpiredCache from the forge-sql-orm barrel (which delegates to the
// configured cache implementation). Partial-mock the barrel so only that helper is stubbed.
const mockClearExpiredCache = vi.hoisted(() => vi.fn());
vi.mock("forge-sql-orm", async (importOriginal) => {
  const actual = await importOriginal<typeof import("forge-sql-orm")>();
  return { ...actual, clearExpiredCache: mockClearExpiredCache };
});

// Defensive stub so importing the package graph never reaches the Forge KVS runtime.
vi.mock("@forge/kvs", () => ({
  kvs: { entity: vi.fn(), transact: vi.fn(), batchDelete: vi.fn() },
  Filter: class {},
  FilterConditions: { contains: vi.fn() },
  WhereConditions: { lessThan: vi.fn() },
}));

import { clearExpiredCache } from "forge-sql-orm";
import { clearCacheSchedulerTrigger } from "../../../src/webtriggers/clearCacheSchedulerTrigger";
import { resolveForgeSqlOrmOptionsExtra } from "../../../src/core/resolveForgeSqlOrmOptionsExtra";

const DEFAULT_OPTIONS = resolveForgeSqlOrmOptionsExtra({ cacheEntityName: "cache" });

describe("clearCacheSchedulerTrigger", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    mockClearExpiredCache.mockResolvedValue(undefined);
  });

  it("clears expired cache with the default options", async () => {
    const result = await clearCacheSchedulerTrigger();

    expect(clearExpiredCache).toHaveBeenCalledWith(DEFAULT_OPTIONS);
    expect(result.statusCode).toBe(200);
    expect(result.statusText).toBe("OK");
    expect(result.headers).toEqual({ "Content-Type": ["application/json"] });

    const body = JSON.parse(result.body);
    expect(body.success).toBe(true);
    expect(body.message).toBe("Cache cleanup completed successfully");
    expect(body.timestamp).toBeDefined();
  });

  it("clears expired cache with custom options passed through", async () => {
    const customOptions = { cacheEntityName: "custom_cache", logRawSqlQuery: true, cacheTTL: 300 };

    const result = await clearCacheSchedulerTrigger(customOptions);

    expect(clearExpiredCache).toHaveBeenCalledWith(resolveForgeSqlOrmOptionsExtra(customOptions));
    expect(result.statusCode).toBe(200);

    const body = JSON.parse(result.body);
    expect(body.success).toBe(true);
  });

  it("returns 500 when cacheEntityName is empty", async () => {
    const result = await clearCacheSchedulerTrigger({
      cacheEntityName: "",
      logRawSqlQuery: true,
      cacheTTL: 300,
    });

    expect(clearExpiredCache).not.toHaveBeenCalled();
    expect(result.statusCode).toBe(500);
    expect(result.statusText).toBe("Internal Server Error");

    const body = JSON.parse(result.body);
    expect(body.success).toBe(false);
    expect(body.error).toBe("cacheEntityName is not configured");
    expect(body.timestamp).toBeDefined();
  });

  it("returns 500 and the error message when cleanup throws an Error", async () => {
    mockClearExpiredCache.mockRejectedValue(new Error("Cache cleanup failed"));

    const result = await clearCacheSchedulerTrigger();

    expect(clearExpiredCache).toHaveBeenCalled();
    expect(result.statusCode).toBe(500);

    const body = JSON.parse(result.body);
    expect(body.success).toBe(false);
    expect(body.error).toBe("Cache cleanup failed");
  });

  it("returns 500 with a generic message when a non-Error is thrown", async () => {
    mockClearExpiredCache.mockRejectedValue("Unknown error");

    const result = await clearCacheSchedulerTrigger();

    expect(clearExpiredCache).toHaveBeenCalled();
    expect(result.statusCode).toBe(500);

    const body = JSON.parse(result.body);
    expect(body.success).toBe(false);
    expect(body.error).toBe("Unknown error during cache cleanup");
  });

  it("uses default options when called with undefined", async () => {
    const result = await clearCacheSchedulerTrigger(undefined);

    expect(clearExpiredCache).toHaveBeenCalledWith(DEFAULT_OPTIONS);
    expect(result.statusCode).toBe(200);
  });

  it("merges partial options with defaults", async () => {
    const partialOptions = { cacheEntityName: "test_cache", logRawSqlQuery: true };

    const result = await clearCacheSchedulerTrigger(partialOptions);

    expect(clearExpiredCache).toHaveBeenCalledWith(resolveForgeSqlOrmOptionsExtra(partialOptions));
    expect(result.statusCode).toBe(200);
  });
});
