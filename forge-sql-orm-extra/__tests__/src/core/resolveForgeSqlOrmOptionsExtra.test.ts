// SPDX-FileCopyrightText: 2025-2026 Vasyl Zakharchenko
// SPDX-License-Identifier: MIT

import { describe, it, expect } from "vitest";
import { KVSCache } from "../../../src/cache";
import { resolveForgeSqlOrmOptionsExtra } from "../../../src/core/resolveForgeSqlOrmOptionsExtra";

describe("resolveForgeSqlOrmOptionsExtra", () => {
  it("returns full defaults when options is undefined", () => {
    const resolved = resolveForgeSqlOrmOptionsExtra();

    expect(resolved.logRawSqlQuery).toBe(false);
    expect(resolved.logCache).toBe(false);
    expect(resolved.cacheTTL).toBe(120);
    expect(resolved.cacheWrapTable).toBe(true);
    expect(resolved.cacheEntityQueryName).toBe("sql");
    expect(resolved.cacheImplementation).toBeInstanceOf(KVSCache);
  });

  it("merges partial options without dropping defaults", () => {
    const resolved = resolveForgeSqlOrmOptionsExtra({
      cacheEntityName: "my_cache",
      cacheTTL: 600,
    });

    expect(resolved.cacheEntityName).toBe("my_cache");
    expect(resolved.cacheTTL).toBe(600);
    expect(resolved.cacheWrapTable).toBe(true);
    expect(resolved.cacheImplementation).toBeInstanceOf(KVSCache);
    expect(resolved.logCache).toBe(false);
  });

  it("merges empty object with defaults", () => {
    const resolved = resolveForgeSqlOrmOptionsExtra({});

    expect(resolved.cacheTTL).toBe(120);
    expect(resolved.cacheImplementation).toBeInstanceOf(KVSCache);
  });
});
