// SPDX-FileCopyrightText: 2025-2026 Vasyl Zakharchenko
// SPDX-License-Identifier: MIT

import { Cache } from "./Cache";
import { ForgeSqlOrmOptions } from "../..";
import { Filter, FilterConditions, kvs, WhereConditions } from "@forge/kvs";
import { extractBacktickedValues } from "../../utils/cacheTableUtils";
import { Query } from "drizzle-orm";
import { isTableContainsTableInCacheContext } from "../../utils/cacheContextUtils";
import { debugCacheLog, warnCacheLog, hashKey } from "../../utils/cacheUtils";
import { DateTime } from "luxon";
import { getErrorMessage } from "../../utils/errorUtils";

const CACHE_CONSTANTS = {
  BATCH_SIZE: 25,
  MAX_RETRY_ATTEMPTS: 3,
  INITIAL_RETRY_DELAY: 1000,
  RETRY_DELAY_MULTIPLIER: 2,
  DEFAULT_ENTITY_QUERY_NAME: "sql",
  DEFAULT_EXPIRATION_NAME: "expiration",
  DEFAULT_DATA_NAME: "data",
  PAGE_SIZE: 100,
} as const;

type CacheEntity = {
  [key: string]: string | number;
};

/** Names of the cache entity fields, resolved from options with defaults applied. */
type ResolvedFieldNames = {
  entityQueryName: string;
  expirationName: string;
  dataName: string;
};

/** A page of cache keys returned by a KVS query, with an optional pagination cursor. */
type CacheKeyPage = {
  results: Array<{ key: string }>;
  nextCursor?: string;
};

/**
 * Current Unix time in whole seconds.
 *
 * @returns Current timestamp as an integer number of seconds.
 */
function nowSeconds(): number {
  return Math.floor(DateTime.now().toSeconds());
}

/**
 * Computes a future timestamp by adding seconds to the current time.
 *
 * @param secondsToAdd - Number of seconds to add to the current time.
 * @returns Future timestamp in whole seconds.
 */
function nowPlusSeconds(secondsToAdd: number): number {
  return Math.floor(DateTime.now().plus({ seconds: secondsToAdd }).toSeconds());
}

/**
 * {@link Cache} implementation backed by the Atlassian Forge KVS custom entity store.
 *
 * Query results are stored as custom entities keyed by {@link hashKey}, with a TTL and
 * an expiration timestamp. Reads verify both the expiration and the originating SQL so
 * that stale or hash-colliding entries are ignored. Invalidation and expired-entry
 * cleanup use cursor-based pagination and batched deletes to stay within Forge limits,
 * and transient KVS failures are retried with exponential backoff.
 */
export class KVSCache implements Cache {
  /**
   * Returns the configured cache entity name, throwing when caching is not configured.
   */
  private requireEntityName(options: ForgeSqlOrmOptions): string {
    if (!options.cacheEntityName) {
      throw new Error("cacheEntityName is not configured");
    }
    return options.cacheEntityName;
  }

  /**
   * Resolves the cache entity field names from options, applying defaults.
   */
  private resolveFieldNames(options: ForgeSqlOrmOptions): ResolvedFieldNames {
    return {
      entityQueryName: options.cacheEntityQueryName ?? CACHE_CONSTANTS.DEFAULT_ENTITY_QUERY_NAME,
      expirationName: options.cacheEntityExpirationName ?? CACHE_CONSTANTS.DEFAULT_EXPIRATION_NAME,
      dataName: options.cacheEntityDataName ?? CACHE_CONSTANTS.DEFAULT_DATA_NAME,
    };
  }

  /**
   * Deletes cache entries in batches to respect Forge limits and timeouts.
   *
   * @param results - Array of cache entries to delete.
   * @param cacheEntityName - Name of the cache entity.
   * @param options - Forge SQL ORM options used for logging.
   */
  private async deleteCacheEntriesInBatches(
    results: Array<{ key: string }>,
    cacheEntityName: string,
    options?: ForgeSqlOrmOptions,
  ): Promise<void> {
    for (let i = 0; i < results.length; i += CACHE_CONSTANTS.BATCH_SIZE) {
      const batch = results.slice(i, i + CACHE_CONSTANTS.BATCH_SIZE);
      const batchResult = await kvs.batchDelete(
        batch.map((result) => ({ key: result.key, entityName: cacheEntityName })),
      );
      batchResult.failedKeys.forEach((failedKey) =>
        warnCacheLog(JSON.stringify(failedKey), options),
      );
    }
  }

  /**
   * Drains a KVS query page by page, deleting every matched entry, and returns the
   * total number of deleted entries.
   *
   * @param baseQuery - Query builder configured with the index and filters to drain.
   * @param cacheEntityName - Name of the cache entity being cleared.
   * @param options - ForgeSQL ORM options used for logging.
   * @param label - Human-readable label used in debug logs.
   * @returns Total number of deleted cache entries.
   */
  private async drainAndDelete<
    Q extends {
      cursor(cursor: string): Q;
      limit(limit: number): { getMany(): Promise<CacheKeyPage> };
    },
  >(
    baseQuery: Q,
    cacheEntityName: string,
    options: ForgeSqlOrmOptions,
    label: string,
  ): Promise<number> {
    let cursor = "";
    let total = 0;

    for (;;) {
      const activeQuery = cursor ? baseQuery.cursor(cursor) : baseQuery;
      const listResult = await activeQuery.limit(CACHE_CONSTANTS.PAGE_SIZE).getMany();

      debugCacheLog(`${label}: ${JSON.stringify(listResult.results.map((r) => r.key))}`, options);
      await this.deleteCacheEntriesInBatches(listResult.results, cacheEntityName, options);
      total += listResult.results.length;

      if (!listResult.nextCursor) {
        return total;
      }
      cursor = listResult.nextCursor;
    }
  }

  /**
   * Executes an operation with retry and exponential backoff on failure.
   *
   * @param operation - Operation to execute.
   * @param operationName - Name of the operation, used in log messages.
   * @returns The operation result once it succeeds.
   * @throws The last error if all retry attempts are exhausted.
   */
  private async executeWithRetry<T>(
    operation: () => Promise<T>,
    operationName: string,
  ): Promise<T> {
    let attempt = 0;
    let delay = CACHE_CONSTANTS.INITIAL_RETRY_DELAY;

    while (attempt < CACHE_CONSTANTS.MAX_RETRY_ATTEMPTS) {
      try {
        return await operation();
      } catch (err) {
        const message = getErrorMessage(err);
        // eslint-disable-next-line no-console
        console.warn(`Error during ${operationName}: ${message}, retry ${attempt}`, err);
        attempt++;

        if (attempt >= CACHE_CONSTANTS.MAX_RETRY_ATTEMPTS) {
          // eslint-disable-next-line no-console
          console.error(`Error during ${operationName}: ${message}`, err);
          throw err;
        }

        await new Promise((resolve) => setTimeout(resolve, delay));
        delay *= CACHE_CONSTANTS.RETRY_DELAY_MULTIPLIER;
      }
    }

    throw new Error(`Maximum retry attempts exceeded for ${operationName}`);
  }

  /**
   * Runs a clearing operation with retry and logs how many entries were removed and
   * how long it took.
   *
   * @param operationName - Operation name used for retry logging.
   * @param recordNoun - Noun describing the cleared records, used in the summary log.
   * @param options - ForgeSQL ORM options used for logging.
   * @param operation - Clearing operation returning the number of deleted entries.
   */
  private async runClear(
    operationName: string,
    recordNoun: string,
    options: ForgeSqlOrmOptions,
    operation: () => Promise<number>,
  ): Promise<void> {
    const startTime = DateTime.now();
    let totalRecords = 0;

    try {
      totalRecords = await this.executeWithRetry(operation, operationName);
    } finally {
      const duration = DateTime.now().toSeconds() - startTime.toSeconds();
      debugCacheLog(`Cleared ${totalRecords} ${recordNoun} in ${duration} seconds`, options);
    }
  }

  /**
   * Evicts every cached entry whose stored SQL references any of the given tables.
   *
   * @param tables - Names of the tables whose cached entries must be evicted.
   * @param options - ForgeSQL ORM options describing the cache backend.
   */
  async clearTablesCache(tables: string[], options: ForgeSqlOrmOptions): Promise<void> {
    const cacheEntityName = this.requireEntityName(options);
    const { entityQueryName } = this.resolveFieldNames(options);

    const filters = new Filter<{ [entityQueryName]: string }>();
    for (const table of tables) {
      const wrapIfNeeded = options.cacheWrapTable ? `\`${table}\`` : table;
      filters.or(entityQueryName, FilterConditions.contains(wrapIfNeeded?.toLowerCase()));
    }

    const baseQuery = kvs
      .entity<{ [entityQueryName]: string }>(cacheEntityName)
      .query()
      .index(entityQueryName)
      .filters(filters);

    await this.runClear("clearing cache", "cache records", options, () =>
      this.drainAndDelete(baseQuery, cacheEntityName, options, "clear cache Records"),
    );
  }

  /**
   * Removes cache entries whose expiration timestamp is already in the past.
   *
   * @param options - ForgeSQL ORM options describing the cache backend.
   */
  async clearExpiredCache(options: ForgeSqlOrmOptions): Promise<void> {
    const cacheEntityName = this.requireEntityName(options);
    const { expirationName } = this.resolveFieldNames(options);

    const baseQuery = kvs
      .entity<{ [expirationName]: number }>(cacheEntityName)
      .query()
      .index(expirationName)
      .where(WhereConditions.lessThan(nowSeconds()));

    await this.runClear("clearing expired cache", "expired cache records", options, () =>
      this.drainAndDelete(baseQuery, cacheEntityName, options, "clear expired Records"),
    );
  }

  /**
   * Returns the cached result for a query, or `undefined` when it is missing, expired,
   * stale (the stored SQL no longer matches), or its table is pending invalidation.
   *
   * @typeParam T - Expected shape of the cached result.
   * @param query - Query whose `toSQL()` output identifies the cache entry.
   * @param options - ForgeSQL ORM options describing the cache backend.
   * @returns The cached result, or `undefined`.
   */
  async getQueryResultsFromCache<T>(
    query: { toSQL: () => Query },
    options: ForgeSqlOrmOptions,
  ): Promise<T | undefined> {
    const cacheEntityName = this.requireEntityName(options);
    const { entityQueryName, expirationName, dataName } = this.resolveFieldNames(options);

    const sqlQuery = query.toSQL();
    const key = hashKey(sqlQuery);

    // Skip cache if the table is queued for invalidation in the current context.
    if (await isTableContainsTableInCacheContext(sqlQuery.sql, options)) {
      debugCacheLog("Context contains value to clear. Skip getting from cache", options);
      return undefined;
    }

    const cacheResult = await kvs.entity<CacheEntity>(cacheEntityName).get(key);
    if (!cacheResult) {
      return undefined;
    }

    const notExpired = (cacheResult[expirationName] as number) >= nowSeconds();
    const matchesQuery =
      extractBacktickedValues(sqlQuery.sql, options) === cacheResult[entityQueryName];
    if (notExpired && matchesQuery) {
      debugCacheLog(`Get value from cache, cacheKey: ${key}`, options);
      return JSON.parse(cacheResult[dataName] as string);
    }

    debugCacheLog(
      `Expired cache entry still exists (will be automatically removed within 48 hours per Forge KVS TTL documentation), cacheKey: ${key}`,
      options,
    );
    return undefined;
  }

  /**
   * Stores a query result in the cache with the given TTL, skipping the write when the
   * table is queued for invalidation in the current context.
   *
   * @param options - ForgeSQL ORM options describing the cache backend.
   * @param query - Query whose `toSQL()` output identifies the cache entry.
   * @param results - The query result to cache.
   * @param ttl - Time-to-live in seconds; falls back to `options.cacheTTL`.
   */
  async setQueryResult(
    options: ForgeSqlOrmOptions,
    query: { toSQL: () => Query },
    results: unknown,
    ttl: number,
  ): Promise<void> {
    const cacheEntityName = this.requireEntityName(options);
    const { entityQueryName, expirationName, dataName } = this.resolveFieldNames(options);

    const sqlQuery = query.toSQL();

    // Skip cache if the table is queued for invalidation in the current context.
    if (await isTableContainsTableInCacheContext(sqlQuery.sql, options)) {
      debugCacheLog("Context contains value to clear. Skip setting from cache", options);
      return;
    }

    const key = hashKey(sqlQuery);
    const cacheTTLValue = ttl ?? options.cacheTTL;

    await kvs
      .transact()
      .set(
        key,
        {
          [entityQueryName]: extractBacktickedValues(sqlQuery.sql, options),
          [expirationName]: nowPlusSeconds(cacheTTLValue),
          [dataName]: JSON.stringify(results),
        },
        { entityName: cacheEntityName },
        { ttl: { value: cacheTTLValue, unit: "SECONDS" } },
      )
      .execute();
    debugCacheLog(`Store value to cache, cacheKey: ${key}`, options);
  }
}
