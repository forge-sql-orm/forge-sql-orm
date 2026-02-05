import { clearExpiredCache } from "../utils/cacheUtils";
import { ForgeSqlOrmOptions } from "../core/ForgeSQLQueryBuilder";

/**
 * Scheduler trigger for proactively clearing expired cache entries.
 *
 * **Why this trigger is needed:**
 *
 * While forge-sql-orm uses Forge KVS TTL feature to mark entries as expired, **actual deletion
 * is asynchronous and may take up to 48 hours**. During this window, expired entries remain in
 * storage and can impact INSERT/UPDATE performance if the cache grows large.
 *
 * This scheduler trigger proactively cleans up expired entries by querying the expiration index
 * and deleting entries where expiration < now, preventing cache growth from impacting data
 * modification operations.
 *
 * **When to use:**
 * - Your cache grows large over time
 * - INSERT/UPDATE operations are slowing down due to cache size
 * - You need strict expiry semantics (immediate cleanup)
 * - You want to reduce storage costs proactively
 *
 * **When optional:**
 * - Small cache footprint
 * - No performance impact on data modifications
 * - You can tolerate expired entries being returned for up to 48 hours
 *
 * @note This function is automatically disabled in production environments and will return a 500 error if called.
 *
 * @param options - Optional ForgeSQL ORM configuration. If not provided,
 *                  uses default cache settings with cacheEntityName: "cache"
 * @returns Promise that resolves to HTTP response object
 *
 * @example
 * ```typescript
 * // In your index.ts
 * import { clearCacheSchedulerTrigger } from "forge-sql-orm";
 *
 * export const clearCache = () => {
 *   return clearCacheSchedulerTrigger({
 *     cacheEntityName: "cache",
 *     logRawSqlQuery: true
 *   });
 * };
 * ```
 *
 * @example
 * ```yaml
 * # In manifest.yml (optional - only if cache growth impacts INSERT/UPDATE performance)
 * scheduledTrigger:
 *   - key: clear-cache-trigger
 *     function: clearCache
 *     interval: fiveMinute
 *
 * function:
 *   - key: clearCache
 *     handler: index.clearCache
 * ```
 *
 * @see https://developer.atlassian.com/platform/forge/runtime-reference/storage-api-basic-api/#ttl
 */
export const clearCacheSchedulerTrigger = async (options?: ForgeSqlOrmOptions) => {
  try {
    const newOptions: ForgeSqlOrmOptions = options ?? {
      logRawSqlQuery: false,
      disableOptimisticLocking: false,
      cacheTTL: 120,
      cacheEntityName: "cache",
      cacheEntityQueryName: "sql",
      cacheEntityExpirationName: "expiration",
      cacheEntityDataName: "data",
    };
    if (!newOptions.cacheEntityName) {
      throw new Error("cacheEntityName is not configured");
    }
    await clearExpiredCache(newOptions);

    return {
      headers: { "Content-Type": ["application/json"] },
      statusCode: 200,
      statusText: "OK",
      body: JSON.stringify({
        success: true,
        message: "Cache cleanup completed successfully",
        timestamp: new Date().toISOString(),
      }),
    };
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error("Error during cache cleanup: ", JSON.stringify(error));
    return {
      headers: { "Content-Type": ["application/json"] },
      statusCode: 500,
      statusText: "Internal Server Error",
      body: JSON.stringify({
        success: false,
        error: error instanceof Error ? error.message : "Unknown error during cache cleanup",
        timestamp: new Date().toISOString(),
      }),
    };
  }
};
