// SPDX-FileCopyrightText: 2025-2026 Vasyl Zakharchenko
// SPDX-License-Identifier: MIT

import { Query } from "drizzle-orm";
import { AnyMySqlTable } from "drizzle-orm/mysql-core";
import { getTableName } from "drizzle-orm/table";
import { ForgeSqlOrmOptions } from "../core";
import { cacheApplicationContext } from "./cacheContextUtils";
import { getErrorMessage } from "./errorUtils";
import * as crypto from "node:crypto";

const SHARED_CACHE_CONSTANTS = {
  HASH_LENGTH: 32,
} as const;

/**
 * Logs a message to console.debug when options.logCache is enabled.
 *
 * @param message - Message to log
 * @param options - ForgeSQL ORM options (optional)
 */
export function debugCacheLog(message: string, options?: ForgeSqlOrmOptions): void {
  if (options?.logCache) {
    // eslint-disable-next-line no-console
    console.debug(message);
  }
}

/**
 * Logs a message to console.warn when options.logCache is enabled.
 *
 * @param message - Message to log
 * @param options - ForgeSQL ORM options (optional)
 */
export function warnCacheLog(message: string, options?: ForgeSqlOrmOptions): void {
  if (options?.logCache) {
    // eslint-disable-next-line no-console
    console.warn(message);
  }
}

/**
 * Clears cache for a specific table.
 * Uses cache context if available, otherwise clears immediately.
 *
 * @param schema - The table schema to clear cache for
 * @param options - ForgeSQL ORM options
 */
export async function clearCache<T extends AnyMySqlTable>(
  schema: T,
  options: ForgeSqlOrmOptions,
): Promise<void> {
  const tableName = getTableName(schema);
  if (cacheApplicationContext.getStore()) {
    cacheApplicationContext.getStore()?.tables.add(tableName);
  } else {
    await clearTablesCache([tableName], options);
  }
}

/**
 * Clears cache for multiple tables with retry logic and performance logging.
 *
 * @param tables - Array of table names to clear cache for
 * @param options - ForgeSQL ORM options
 * @returns Promise that resolves when cache clearing is complete
 */
export async function clearTablesCache(
  tables: string[],
  options: ForgeSqlOrmOptions,
): Promise<void> {
  if (!options.cacheImplementation) {
    throw new Error("cacheImplementation is not configured");
  }

  try {
    return await options.cacheImplementation.clearTablesCache(tables, options);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(`Error clear cache: ${getErrorMessage(error)}`, error);
  }
}
/**
 * since https://developer.atlassian.com/platform/forge/changelog/#CHANGE-3038
 * Clears expired cache entries with retry logic and performance logging.
 *
 * @param options - ForgeSQL ORM options
 * @returns Promise that resolves when expired cache clearing is complete
 */
export async function clearExpiredCache(options: ForgeSqlOrmOptions): Promise<void> {
  if (!options.cacheImplementation) {
    throw new Error("cacheImplementation is not configured");
  }

  try {
    return await options.cacheImplementation.clearExpiredCache(options);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(`Error getting from cache: ${getErrorMessage(error)}`, error);
  }
}

/**
 * Retrieves data from cache if it exists and is not expired.
 *
 * Note: Due to Forge KVS asynchronous deletion (up to 48 hours), expired entries may still
 * be returned. This function checks the expiration timestamp to filter out expired entries.
 * If cache growth impacts performance, use the Clear Cache Scheduler Trigger.
 *
 * @param query - Query object with toSQL method
 * @param options - ForgeSQL ORM options
 * @returns Cached data if found and valid, undefined otherwise
 */
export async function getFromCache<T>(
  query: { toSQL: () => Query },
  options: ForgeSqlOrmOptions,
): Promise<T | undefined> {
  if (!options.cacheImplementation) {
    throw new Error("cacheImplementation is not configured");
  }

  try {
    return await options.cacheImplementation.getQueryResultsFromCache(query, options);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(`Error getting from cache: ${getErrorMessage(error)}`, error);
  }

  return undefined;
}

/**
 * Stores query results in cache with specified TTL.
 *
 * Uses Forge KVS TTL feature to set expiration. Note that expired data deletion is asynchronous:
 * expired data is not removed immediately upon expiry. Deletion may take up to 48 hours.
 * During this window, read operations may still return expired results. If your app requires
 * strict expiry semantics, consider using the Clear Cache Scheduler Trigger to proactively
 * clean up expired entries, especially if cache growth impacts INSERT/UPDATE performance.
 *
 * @param query - Query object with toSQL method
 * @param options - ForgeSQL ORM options
 * @param results - Data to cache
 * @param cacheTtl - Time to live in seconds (maximum TTL is 1 year from write time)
 * @returns Promise that resolves when data is stored in cache
 * @see https://developer.atlassian.com/platform/forge/runtime-reference/storage-api-basic-api/#ttl
 */
export async function setCacheResult(
  query: { toSQL: () => Query },
  options: ForgeSqlOrmOptions,
  results: unknown,
  cacheTtl: number,
): Promise<void> {
  if (!options.cacheImplementation) {
    throw new Error("cacheImplementation is not configured");
  }

  try {
    await options.cacheImplementation.setQueryResult(options, query, results, cacheTtl);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(`Error setting cache: ${getErrorMessage(error)}`, error);
  }
}

/**
 * Generates a stable cache key for a query based on its SQL and parameters.
 *
 * @param query - The Drizzle query object.
 * @returns A `CachedQuery_`-prefixed 32-character hexadecimal hash.
 */
export function hashKey(query: Query): string {
  const h = crypto.createHash("sha256");
  h.update(query.sql.toLowerCase());
  h.update(JSON.stringify(query.params));
  return "CachedQuery_" + h.digest("hex").slice(0, SHARED_CACHE_CONSTANTS.HASH_LENGTH);
}
