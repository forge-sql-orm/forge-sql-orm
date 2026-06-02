// SPDX-FileCopyrightText: 2025-2026 Vasyl Zakharchenko
// SPDX-License-Identifier: MIT

import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { NopCache } from "../../../../src";

describe("NopCache", () => {
  let cache: NopCache;
  let warnSpy: ReturnType<typeof vi.spyOn>;

  const query = {
    toSQL: () => ({ sql: "SELECT * FROM `users`", params: [] }),
  } as any;

  beforeEach(() => {
    cache = new NopCache();
    warnSpy = vi.spyOn(console, "warn").mockImplementation(() => undefined);
  });

  afterEach(() => {
    warnSpy.mockRestore();
  });

  it("getQueryResultsFromCache reports a cache miss and warns", async () => {
    const result = await cache.getQueryResultsFromCache(query);

    expect(result).toBeUndefined();
    expect(warnSpy).toHaveBeenCalledWith(
      expect.stringContaining("NopCache.getQueryResultsFromCache is invoked"),
    );
    expect(warnSpy).toHaveBeenCalledWith(expect.stringContaining("SELECT * FROM `users`"));
  });

  it("setQueryResult is a no-op that resolves and warns", async () => {
    await expect(cache.setQueryResult()).resolves.toBeUndefined();
    expect(warnSpy).toHaveBeenCalledWith(
      expect.stringContaining("NopCache.setQueryResult is invoked"),
    );
  });

  it("clearExpiredCache is a no-op that resolves and warns", async () => {
    await expect(cache.clearExpiredCache()).resolves.toBeUndefined();
    expect(warnSpy).toHaveBeenCalledWith(
      expect.stringContaining("NopCache.clearExpiredCache is invoked"),
    );
  });

  it("clearTablesCache is a no-op that resolves and warns with the table names", async () => {
    await expect(cache.clearTablesCache(["users", "orders"])).resolves.toBeUndefined();
    expect(warnSpy).toHaveBeenCalledWith(
      expect.stringContaining("NopCache.clearTablesCache is invoked for tables: users, orders"),
    );
  });
});
