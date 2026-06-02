// SPDX-FileCopyrightText: 2025-2026 Vasyl Zakharchenko
// SPDX-License-Identifier: MIT

import { ForgeSqlOrmOptions } from "../../core";
import { Query } from "drizzle-orm";

/**
 * Service Provider Interface (SPI) for the query-result cache used by ForgeSQL ORM.
 *
 * A cache stores the results of read queries keyed by their SQL and parameters, and
 * invalidates those results when the underlying tables change or entries expire.
 * The ORM never talks to a storage backend directly: it always goes through this
 * interface, so a backend (for example Forge KVS) can be plugged in via
 * {@link ForgeSqlOrmOptions.cacheImplementation} without changing ORM code.
 *
 * Implementations are responsible for choosing the storage backend, computing cache
 * keys, honouring the TTL and respecting the field names configured in
 * {@link ForgeSqlOrmOptions} (such as `cacheEntityName`).
 */
export interface Cache {
  /**
   * Returns the cached result for a query, or `undefined` on a cache miss.
   *
   * The query's SQL and parameters identify the entry. Expired entries and entries
   * whose table is currently scheduled for invalidation must be treated as a miss.
   *
   * @typeParam T - Expected shape of the cached result.
   * @param query - Query whose `toSQL()` output is used to build the cache key.
   * @param options - ForgeSQL ORM options describing the cache backend.
   * @returns The cached result, or `undefined` if absent, expired or stale.
   */
  getQueryResultsFromCache<T>(
    query: { toSQL: () => Query },
    options: ForgeSqlOrmOptions,
  ): Promise<T | undefined>;

  /**
   * Stores the result of a query in the cache with the given time-to-live.
   *
   * @param options - ForgeSQL ORM options describing the cache backend.
   * @param query - Query whose `toSQL()` output is used to build the cache key.
   * @param results - The query result to cache (serialized by the implementation).
   * @param ttl - Time-to-live in seconds for the stored entry.
   */
  setQueryResult(
    options: ForgeSqlOrmOptions,
    query: { toSQL: () => Query },
    results: unknown,
    ttl: number,
  ): Promise<void>;

  /**
   * Removes expired entries from the cache backend.
   *
   * @param options - ForgeSQL ORM options describing the cache backend.
   */
  clearExpiredCache(options: ForgeSqlOrmOptions): Promise<void>;

  /**
   * Removes every cached entry that references any of the given tables, so that
   * subsequent reads of those tables are served fresh.
   *
   * @param tables - Names of the tables whose cached entries must be evicted.
   * @param options - ForgeSQL ORM options describing the cache backend.
   */
  clearTablesCache(tables: string[], options: ForgeSqlOrmOptions): Promise<void>;
}
