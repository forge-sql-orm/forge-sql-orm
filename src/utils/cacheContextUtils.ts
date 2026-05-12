import { AsyncLocalStorage } from "node:async_hooks";
import { AnyMySqlSelectQueryBuilder, AnyMySqlTable } from "drizzle-orm/mysql-core";
import { getTableName } from "drizzle-orm/table";
import { ForgeSqlOrmOptions } from "../core/ForgeSQLQueryBuilder";
import { MySqlSelectDynamic } from "drizzle-orm/mysql-core/query-builders/select.types";
import { hashKey } from "./cacheUtils";
import { Query } from "drizzle-orm/sql/sql";

/**
 * Interface representing the cache application context.
 * Stores information about tables that are being processed within a cache context.
 */
export interface CacheApplicationContext {
  /** Set of table names (in lowercase) that are being processed within the cache context */
  tables: Set<string>;
}

/**
 * Interface representing the local cache application context.
 * Stores cached query results in memory for the duration of a local cache context.
 *
 * @interface LocalCacheApplicationContext
 */
export interface LocalCacheApplicationContext {
  /**
   * Cache object mapping query hash keys to cached results
   * @property {Record<string, {sql: string, data: unknown[]}>} cache - Map of query keys to cached data
   */
  cache: Record<
    string,
    {
      sql: string;
      data: unknown[];
    }
  >;
}

function isQuery(obj: any): obj is Query {
  return (
    typeof obj === "object" &&
    obj !== null &&
    typeof obj.sql === "string" &&
    Array.isArray(obj.params)
  );
}

/**
 * AsyncLocalStorage instance for managing cache context across async operations.
 * This allows tracking which tables are being processed within a cache context
 * without explicitly passing context through function parameters.
 */
export const cacheApplicationContext = new AsyncLocalStorage<CacheApplicationContext>();

/**
 * AsyncLocalStorage instance for managing local cache context across async operations.
 * This allows storing and retrieving cached query results within a local cache context
 * without explicitly passing context through function parameters.
 */
export const localCacheApplicationContext = new AsyncLocalStorage<LocalCacheApplicationContext>();

/**
 * Saves a table name to the current cache context if one exists.
 * This function is used to track which tables are being processed within
 * a cache context for proper cache invalidation.
 *
 * @param table - The Drizzle table schema to track
 * @returns Promise that resolves when the table is saved to context
 *
 * @example
 * ```typescript
 * await saveTableIfInsideCacheContext(usersTable);
 * ```
 */
export async function saveTableIfInsideCacheContext<T extends AnyMySqlTable>(
  table: T,
): Promise<void> {
  const context = cacheApplicationContext.getStore();
  if (context) {
    const tableName = getTableName(table).toLowerCase();
    context.tables.add(tableName);
  }
}

/**
 * Saves a query result to the local cache context.
 * This function stores query results in memory for the duration of the local cache context.
 *
 * @param query - The Drizzle query to cache
 * @param rows - The query result data to cache
 * @param options - ForgeSqlOrm options
 * @returns Promise that resolves when the data is saved to local cache
 *
 * @example
 * ```typescript
 * const query = db.select({ id: users.id, name: users.name }).from(users);
 * const results = await query.execute();
 * await saveQueryLocalCacheQuery(query, results);
 * ```
 */
/**
 * Returns the local cache context with its `cache` map guaranteed initialised,
 * or `undefined` when no context is active. Centralises the context-lookup +
 * cache-init pattern shared by the save / get / evict helpers.
 */
function getReadyLocalCacheContext(): LocalCacheApplicationContext | undefined {
  const context = localCacheApplicationContext.getStore();
  if (!context) {
    return undefined;
  }
  if (!context.cache) {
    context.cache = {};
  }
  return context;
}

/**
 * Normalises a Drizzle query (or raw Query object) to something with `.toSQL()`.
 */
function asToSql<T>(query: T): { toSQL: () => Query } {
  if (isQuery(query)) {
    const q = query;
    return { toSQL: () => q };
  }
  return query as { toSQL: () => Query };
}

/**
 * Emits a structured debug line for a local-cache event when logging is enabled.
 */
function logLocalCacheEvent(action: "SAVE" | "HIT", q: Query, options: ForgeSqlOrmOptions): void {
  if (!options.logCache) {
    return;
  }
  // eslint-disable-next-line no-console
  console.debug(
    `[forge-sql-orm][local-cache][${action}] sql="${q.sql}", params=${JSON.stringify(q.params)}`,
  );
}

export async function saveQueryLocalCacheQuery<
  T extends MySqlSelectDynamic<AnyMySqlSelectQueryBuilder>,
>(query: T, rows: unknown[], options: ForgeSqlOrmOptions): Promise<void> {
  const context = getReadyLocalCacheContext();
  if (!context) {
    return;
  }

  const toSQL = asToSql(query).toSQL();
  context.cache[hashKey(toSQL)] = {
    sql: toSQL.sql.toLowerCase(),
    data: rows,
  };
  logLocalCacheEvent("SAVE", toSQL, options);
}

/**
 * Retrieves a query result from the local cache context.
 * This function checks if a query result is already cached in memory.
 *
 * @param query - The Drizzle query to check for cached results
 * @param options - Option Property
 * @returns Promise that resolves to cached data if found, undefined otherwise
 *
 * @example
 * ```typescript
 * const query = db.select({ id: users.id, name: users.name }).from(users);
 * const cachedResult = await getQueryLocalCacheQuery(query);
 * if (cachedResult) {
 *   return cachedResult; // Use cached data
 * }
 * // Execute query and cache result
 * ```
 */
export async function getQueryLocalCacheQuery<
  T extends MySqlSelectDynamic<AnyMySqlSelectQueryBuilder>,
>(query: T, options: ForgeSqlOrmOptions): Promise<unknown[] | undefined> {
  const context = getReadyLocalCacheContext();
  if (!context) {
    return undefined;
  }

  const toSQL = asToSql(query).toSQL();
  const entry = context.cache[hashKey(toSQL)];
  if (entry?.sql !== toSQL.sql.toLowerCase()) {
    return undefined;
  }

  logLocalCacheEvent("HIT", toSQL, options);
  return entry.data;
}

/**
 * Evicts cached queries from the local cache context that involve the specified table.
 * This function removes cached query results that contain the given table name.
 *
 * @param table - The Drizzle table schema to evict cache for
 * @param options - ForgeSQL ORM options containing cache configuration
 * @returns Promise that resolves when cache eviction is complete
 *
 * @example
 * ```typescript
 * // After inserting/updating/deleting from users table
 * await evictLocalCacheQuery(usersTable, forgeSqlOptions);
 * // All cached queries involving users table are now removed
 * ```
 */
export async function evictLocalCacheQuery<T extends AnyMySqlTable>(
  table: T,
  options: ForgeSqlOrmOptions,
): Promise<void> {
  const context = getReadyLocalCacheContext();
  if (!context) {
    return;
  }

  const tableName = getTableName(table);
  const searchString = options.cacheWrapTable ? `\`${tableName}\`` : tableName;
  for (const [key, entry] of Object.entries(context.cache)) {
    if (entry.sql.includes(searchString)) {
      delete context.cache[key];
    }
  }
}

/**
 * Checks if the given SQL query contains any tables that are currently being processed
 * within a cache context. This is used to determine if cache should be bypassed
 * for queries that affect tables being modified within the context.
 *
 * @param sql - The SQL query string to check
 * @param options - ForgeSQL ORM options containing cache configuration
 * @returns Promise that resolves to true if the SQL contains tables in cache context
 *
 * @example
 * ```typescript
 * const shouldBypassCache = await isTableContainsTableInCacheContext(
 *   "SELECT * FROM users WHERE id = 1",
 *   forgeSqlOptions
 * );
 * ```
 */
export async function isTableContainsTableInCacheContext(
  sql: string,
  options: ForgeSqlOrmOptions,
): Promise<boolean> {
  const context = cacheApplicationContext.getStore();
  if (!context) {
    return false;
  }

  const tables = Array.from(context.tables);
  const lowerSql = sql.toLowerCase();

  return tables.some((table) => {
    const tablePattern = options.cacheWrapTable ? `\`${table}\`` : table;
    return lowerSql.includes(tablePattern);
  });
}
