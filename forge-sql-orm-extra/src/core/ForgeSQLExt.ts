// SPDX-FileCopyrightText: 2025-2026 Vasyl Zakharchenko
// SPDX-License-Identifier: MIT

import { Result } from "@forge/sql";

import { AnyMySqlTable, MySqlSelectBuilder, MySqlTable, MySqlColumn } from "drizzle-orm/mysql-core";
import { type SelectedFields } from "drizzle-orm/mysql-core/query-builders/select.types";
import {
  MySqlRemoteDatabase,
  MySqlRemotePreparedQueryHKT,
  MySqlRemoteQueryResultHKT,
} from "drizzle-orm/mysql-proxy";

import {
  MySqlDeleteBase,
  MySqlInsertBuilder,
  MySqlSelectBase,
  MySqlUpdateBuilder,
} from "drizzle-orm/mysql-core/query-builders";

import {
  GetSelectTableName,
  GetSelectTableSelection,
  SelectResultField,
} from "drizzle-orm/query-builders/select.types";
import { SQLWrapper } from "drizzle-orm/sql/sql";

export interface ForgeSqlOrmOptionsExtra extends ForgeSqlOrmOptions {
  /** Name of the KVS entity used for cache storage */
  cacheEntityName?: string;
  /** Name of the field in cache entity that stores SQL query */
  cacheEntityQueryName?: string;
  /** Whether to wrap table names with backticks in cache keys */
  cacheWrapTable?: boolean;
  /** Name of the field in cache entity that stores expiration timestamp */
  cacheEntityExpirationName?: string;
  /** Name of the field in cache entity that stores cached data */
  cacheEntityDataName?: string;
}

/**
 * Type alias for MySqlSelectBase return type used in selectFrom methods.
 * Reduces code duplication in type definitions.
 */
export type SelectFromReturnType<T extends MySqlTable> = MySqlSelectBase<
  GetSelectTableName<T>,
  GetSelectTableSelection<T>,
  "single",
  MySqlRemotePreparedQueryHKT,
  GetSelectTableName<T> extends string ? Record<string & GetSelectTableName<T>, "not-null"> : {},
  false,
  never,
  {
    [K in keyof {
      [Key in keyof GetSelectTableSelection<T>]: SelectResultField<GetSelectTableSelection<T>[Key]>;
    }]: {
      [Key in keyof GetSelectTableSelection<T>]: SelectResultField<GetSelectTableSelection<T>[Key]>;
    }[K];
  }[],
  // eslint-disable-next-line @typescript-eslint/no-explicit-any -- Drizzle's MySqlSelectBase final generic is an internal column-map type whose public shape is not exported
  any
>;
import type { MySqlQueryResultKind } from "drizzle-orm/mysql-core/session";
import {
  DeleteAndEvictCacheType,
  ExecuteQuery,
  ExecuteQueryCacheable,
  ForgeSqlOrmOptions,
  InsertAndEvictCacheType,
  QueryBuilderForgeSql,
  ForgeSqlOperation,
  SelectAliasedCacheableType,
  SelectAliasedDistinctCacheableType,
  SelectAliasedDistinctType,
  SelectAliasedType,
  SelectAllDistinctFromAliasedType,
  SelectAllDistinctFromCacheableAliasedType,
  SelectAllFromAliasedType,
  SelectAllFromCacheableAliasedType,
  UpdateAndEvictCacheType,
} from "forge-sql-orm";

/**
 * Core interface for ForgeSQL operations.
 * Provides access to CRUD operations, schema-level SQL operations, and query analysis capabilities.
 *
 * This is the main interface that developers interact with when using ForgeSQL ORM.
 * It combines query building capabilities with database operations and caching.
 *
 * @interface ForgeSqlOperation
 * @extends {QueryBuilderForgeSql}
 */
export interface ForgeSqlOperationExt
  extends QueryBuilderForgeSqlExt, ForgeSqlOperation, CacheForgeSQL {
  /**
   * Creates a new query builder for the given entity.
   * @returns {MySqlRemoteDatabase<Record<string, unknown>>} The Drizzle database instance for building queries
   */
  getDrizzleQueryBuilder(): MySqlRemoteDatabase<Record<string, unknown>> & {
    selectAliased: SelectAliasedType;
    selectAliasedDistinct: SelectAliasedDistinctType;
    executeQuery: ExecuteQuery;
    selectAliasedCacheable: SelectAliasedCacheableType;
    selectAliasedDistinctCacheable: SelectAliasedDistinctCacheableType;
    executeQueryCacheable: ExecuteQueryCacheable;
    insertWithCacheContext: InsertAndEvictCacheType;
    insertAndEvictCache: InsertAndEvictCacheType;
    updateAndEvictCache: UpdateAndEvictCacheType;
    updateWithCacheContext: UpdateAndEvictCacheType;
    deleteAndEvictCache: DeleteAndEvictCacheType;
    deleteWithCacheContext: DeleteAndEvictCacheType;
    selectFrom: SelectAllFromAliasedType;
    selectDistinctFrom: SelectAllDistinctFromAliasedType;
    selectFromCacheable: SelectAllFromCacheableAliasedType;
    selectDistinctFromCacheable: SelectAllDistinctFromCacheableAliasedType;
  };

  rovo(): RovoIntegration;
}

/**
 * Interface for Query Builder operations.
 * Provides access to the underlying Drizzle ORM query builder with enhanced functionality.
 *
 * This interface extends Drizzle's query building capabilities with:
 * - Field aliasing to prevent name collisions in joins
 * - Caching support for select operations
 * - Automatic cache eviction for modify operations
 *
 * @interface QueryBuilderForgeSql
 */
export interface QueryBuilderForgeSqlExt extends QueryBuilderForgeSql {
  /**
   * Creates a new query builder for the given entity.
   * @returns {MySqlRemoteDatabase<Record<string, unknown>>} The Drizzle database instance for building queries
   */
  getDrizzleQueryBuilder(): MySqlRemoteDatabase<Record<string, unknown>> & {
    selectAliased: SelectAliasedType;
    selectAliasedDistinct: SelectAliasedDistinctType;
    executeQuery: ExecuteQuery;
    selectAliasedCacheable: SelectAliasedCacheableType;
    selectAliasedDistinctCacheable: SelectAliasedDistinctCacheableType;
    executeQueryCacheable: ExecuteQueryCacheable;
    insertWithCacheContext: InsertAndEvictCacheType;
    insertAndEvictCache: InsertAndEvictCacheType;
    updateAndEvictCache: UpdateAndEvictCacheType;
    updateWithCacheContext: UpdateAndEvictCacheType;
    deleteAndEvictCache: DeleteAndEvictCacheType;
    deleteWithCacheContext: DeleteAndEvictCacheType;
  };

  /**
   * Creates a cacheable select query with unique field aliases to prevent field name collisions in joins.
   * This is particularly useful when working with Atlassian Forge SQL, which collapses fields with the same name in joined tables.
   *
   * @template TSelection - The type of the selected fields
   * @param {TSelection} fields - Object containing the fields to select, with table schemas as values
   * @param {number} cacheTTL - cache ttl optional default is 60 sec.
   * @returns {MySqlSelectBuilder<TSelection, MySql2PreparedQueryHKT>} A select query builder with unique field aliases
   * @throws {Error} If fields parameter is empty
   * @example
   * ```typescript
   * await forgeSQL
   *   .selectCacheable({user: users, order: orders},60)
   *   .from(orders)
   *   .innerJoin(users, eq(orders.userId, users.id));
   * ```
   */
  selectCacheable<TSelection extends SelectedFields>(
    fields: TSelection,
    cacheTTL?: number,
  ): MySqlSelectBuilder<TSelection, MySqlRemotePreparedQueryHKT>;

  /**
   * Creates a cacheable select query builder for all columns from a table with field aliasing and caching support.
   * This is a convenience method that automatically selects all columns from the specified table with caching enabled.
   *
   * @template T - The type of the table
   * @param table - The table to select from
   * @param cacheTTL - Optional cache TTL override (defaults to global cache TTL)
   * @returns Select query builder with all table columns, field aliasing, and caching support
   * @example
   * ```typescript
   * const users = await forgeSQL.selectCacheableFrom(userTable, 300).where(eq(userTable.id, 1));
   * ```
   */
  selectCacheableFrom<T extends MySqlTable>(table: T, cacheTTL?: number): SelectFromReturnType<T>;

  /**
   * Creates a cacheable distinct select query with unique field aliases to prevent field name collisions in joins.
   * This is particularly useful when working with Atlassian Forge SQL, which collapses fields with the same name in joined tables.
   *
   * @template TSelection - The type of the selected fields
   * @param {TSelection} fields - Object containing the fields to select, with table schemas as values
   * @param {number} cacheTTL - cache ttl optional default is 60 sec.
   * @returns {MySqlSelectBuilder<TSelection, MySql2PreparedQueryHKT>} A distinct select query builder with unique field aliases
   * @throws {Error} If fields parameter is empty
   * @example
   * ```typescript
   * await forgeSQL
   *   .selectDistinctCacheable({user: users, order: orders}, 60)
   *   .from(orders)
   *   .innerJoin(users, eq(orders.userId, users.id));
   * ```
   */
  selectDistinctCacheable<TSelection extends SelectedFields>(
    fields: TSelection,
    cacheTTL?: number,
  ): MySqlSelectBuilder<TSelection, MySqlRemotePreparedQueryHKT>;

  /**
   * Creates a cacheable select distinct query builder for all columns from a table with field aliasing and caching support.
   * This is a convenience method that automatically selects all distinct columns from the specified table with caching enabled.
   *
   * @template T - The type of the table
   * @param table - The table to select from
   * @param cacheTTL - Optional cache TTL override (defaults to global cache TTL)
   * @returns Select distinct query builder with all table columns, field aliasing, and caching support
   * @example
   * ```typescript
   * const uniqueUsers = await forgeSQL.selectDistinctCacheableFrom(userTable, 300).where(eq(userTable.status, 'active'));
   * ```
   */
  selectDistinctCacheableFrom<T extends MySqlTable>(
    table: T,
    cacheTTL?: number,
  ): SelectFromReturnType<T>;

  /**
   * Creates an insert query builder that automatically evicts cache after execution.
   *
   * ⚠️ **IMPORTANT**: This method does NOT support optimistic locking/versioning.
   * For versioned inserts, use `modifyWithVersioning().insert()` or `modifyWithVersioningAndEvictCache().insert()` instead.
   *
   * @param table - The table to insert into
   * @returns Insert query builder with automatic cache eviction (no versioning)
   */
  insertAndEvictCache<TTable extends MySqlTable>(
    table: TTable,
  ): MySqlInsertBuilder<TTable, MySqlRemoteQueryResultHKT, MySqlRemotePreparedQueryHKT>;

  /**
   * Creates an update query builder that automatically evicts cache after execution.
   *
   * ⚠️ **IMPORTANT**: This method does NOT support optimistic locking/versioning.
   * For versioned updates, use `modifyWithVersioning().updateById()` or `modifyWithVersioningAndEvictCache().updateById()` instead.
   *
   * @param table - The table to update
   * @returns Update query builder with automatic cache eviction (no versioning)
   */
  updateAndEvictCache<TTable extends MySqlTable>(
    table: TTable,
  ): MySqlUpdateBuilder<TTable, MySqlRemoteQueryResultHKT, MySqlRemotePreparedQueryHKT>;

  /**
   * Creates a delete query builder that automatically evicts cache after execution.
   *
   * ⚠️ **IMPORTANT**: This method does NOT support optimistic locking/versioning.
   * For versioned deletes, use `modifyWithVersioning().deleteById()` or `modifyWithVersioningAndEvictCache().deleteById()` instead.
   *
   * @param table - The table to delete from
   * @returns Delete query builder with automatic cache eviction (no versioning)
   */
  deleteAndEvictCache<TTable extends MySqlTable>(
    table: TTable,
  ): MySqlDeleteBase<TTable, MySqlRemoteQueryResultHKT, MySqlRemotePreparedQueryHKT>;

  /**
   * Executes operations within a cache context that collects cache eviction events.
   * All clearCache calls within the context are collected and executed in batch at the end.
   * Queries executed within this context will bypass cache for tables that were marked for clearing.
   *
   * @param cacheContext - Function containing operations that may trigger cache evictions
   * @returns Promise that resolves when all operations and cache clearing are complete
   */
  executeWithCacheContext(cacheContext: () => Promise<void>): Promise<void>;

  /**
   * Executes operations within a cache context and returns a value.
   * All clearCache calls within the context are collected and executed in batch at the end.
   * Queries executed within this context will bypass cache for tables that were marked for clearing.
   *
   * @param cacheContext - Function containing operations that may trigger cache evictions
   * @returns Promise that resolves to the return value of the cacheContext function
   */
  executeWithCacheContextAndReturnValue<T>(cacheContext: () => Promise<T>): Promise<T>;

  executeCacheable<T>(
    query: SQLWrapper | string,
    cacheTtl?: number,
  ): Promise<MySqlQueryResultKind<MySqlRemoteQueryResultHKT, T>>;
}

export interface CacheForgeSQL {
  evictCache(tables: string[]): Promise<void>;
  evictCacheEntities(tables: AnyMySqlTable[]): Promise<void>;
}

/**
 * Interface for Rovo integration settings.
 * Defines configuration for secure dynamic SQL query execution.
 *
 * @interface RovoIntegrationSetting
 */
export interface RovoIntegrationSetting {
  /**
   * Gets the account ID of the active user.
   *
   * @returns {string} The account ID of the active user
   */
  getActiveUser(): string;

  /**
   * Gets the context parameters for query substitution.
   *
   * @returns {Record<string, string>} Map of parameter names to their values
   */
  getParameters(): Record<string, string>;

  /**
   * Gets the name of the table to query.
   *
   * @returns {string} The table name
   */
  getTableName(): string;

  /**
   * Checks if Row-Level Security is enabled.
   *
   * @returns {boolean} True if RLS is enabled, false otherwise
   */
  isUseRLS(): boolean;

  /**
   * Generates the WHERE clause for Row-Level Security filtering.
   *
   * @param {string} alias - The table alias to use in the WHERE clause
   * @returns {string} SQL WHERE clause condition for RLS filtering
   */
  userScopeWhere(alias: string): string;

  /**
   * Gets the list of field names required for RLS validation.
   *
   * @returns {string[]} Array of field names that must be present in SELECT clause for RLS
   */
  userScopeFields(): string[];
}

/**
 * Interface for configuring Row-Level Security (RLS) settings.
 * Provides a fluent API for setting up RLS conditions, required columns, and WHERE clauses.
 *
 * @interface RlsSettings
 */
export interface RlsSettings {
  /**
   * Sets a conditional function to determine if RLS should be applied.
   *
   * @param {() => Promise<boolean>} condition - Async function that returns true if RLS should be enabled
   * @returns {RlsSettings} This builder instance for method chaining
   */
  addRlsCondition(condition: () => Promise<boolean>): RlsSettings;

  /**
   * Adds a column name that must be present in the SELECT clause for RLS validation.
   *
   * @param {string} columnName - The name of the column to require
   * @returns {RlsSettings} This builder instance for method chaining
   */
  addRlsColumnName(columnName: string): RlsSettings;

  /**
   * Adds a Drizzle column that must be present in the SELECT clause for RLS validation.
   *
   * @param {MySqlColumn} column - The Drizzle column object
   * @returns {RlsSettings} This builder instance for method chaining
   */
  addRlsColumn(columnName: MySqlColumn): RlsSettings;

  /**
   * Sets the WHERE clause function for RLS filtering.
   *
   * @param {(alias: string) => string} wherePart - Function that generates WHERE clause
   * @returns {RlsSettings} This builder instance for method chaining
   */
  addRlsWherePart(wherePart: (alias: string) => string): RlsSettings;

  /**
   * Finishes RLS configuration and returns to the settings builder.
   *
   * @returns {RovoIntegrationSettingCreator} The parent settings builder
   */
  finish(): RovoIntegrationSettingCreator;
}

/**
 * Interface for building Rovo integration settings.
 * Provides a fluent API for configuring query settings including context parameters and RLS.
 *
 * @interface RovoIntegrationSettingCreator
 */
export interface RovoIntegrationSettingCreator {
  /**
   * Adds a string context parameter for query substitution.
   * The value will be wrapped in single quotes in the SQL query.
   *
   * @param {string} parameterName - The parameter name to replace in the query (e.g., '{{projectKey}}')
   * @param {string} value - The string value to substitute for the parameter
   * @returns {RovoIntegrationSettingCreator} This builder instance for method chaining
   *
   * @example
   * ```typescript
   * builder.addStringContextParameter('{{projectKey}}', 'PROJ-123');
   * // In SQL: {{projectKey}} will be replaced with 'PROJ-123'
   * ```
   */
  addStringContextParameter(parameterName: string, value: string): RovoIntegrationSettingCreator;
  /**
   * Adds a number context parameter for query substitution.
   * The value will be inserted as-is without quotes in the SQL query.
   *
   * @param {string} parameterName - The parameter name to replace in the query (e.g., '{{limit}}')
   * @param {number} value - The numeric value to substitute for the parameter
   * @returns {RovoIntegrationSettingCreator} This builder instance for method chaining
   *
   * @example
   * ```typescript
   * builder.addNumberContextParameter('{{limit}}', 100);
   * // In SQL: {{limit}} will be replaced with 100
   * ```
   */
  addNumberContextParameter(parameterName: string, value: number): RovoIntegrationSettingCreator;
  /**
   * Adds a boolean context parameter for query substitution.
   * The value will be converted to 1 (true) or 0 (false) and inserted as a number.
   *
   * @param {string} parameterName - The parameter name to replace in the query (e.g., '{{isActive}}')
   * @param {boolean} value - The boolean value to substitute for the parameter
   * @returns {RovoIntegrationSettingCreator} This builder instance for method chaining
   *
   * @example
   * ```typescript
   * builder.addBooleanContextParameter('{{isActive}}', true);
   * // In SQL: {{isActive}} will be replaced with 1
   * ```
   */
  addBooleanContextParameter(parameterName: string, value: boolean): RovoIntegrationSettingCreator;
  /**
   * Adds a context parameter for query substitution.
   * Context parameters are replaced in the SQL query before execution.
   *
   * @param {string} parameterName - The parameter name to replace in the query (e.g., '{{projectKey}}')
   * @param {string} value - The value to substitute for the parameter
   * @param {boolean} wrap - Whether to wrap the value in single quotes (true for strings, false for numbers)
   * @returns {RovoIntegrationSettingCreator} This builder instance for method chaining
   *
   * @example
   * ```typescript
   * builder.addContextParameter('{{projectKey}}', 'PROJ-123', true);
   * // In SQL: {{projectKey}} will be replaced with 'PROJ-123'
   * ```
   */
  addContextParameter(
    parameterName: string,
    value: string,
    wrap: boolean,
  ): RovoIntegrationSettingCreator;

  /**
   * Enables Row-Level Security (RLS) for the query.
   *
   * @returns {RlsSettings} RLS settings builder for configuring security options
   */
  useRLS(): RlsSettings;

  /**
   * Builds and returns the RovoIntegrationSetting instance.
   *
   * @returns {Promise<RovoIntegrationSetting>} The configured RovoIntegrationSetting instance
   */
  build(): Promise<RovoIntegrationSetting>;
}

/**
 * Interface for Rovo integration - a secure pattern for natural-language analytics.
 *
 * Rovo provides secure execution of dynamic SQL queries with comprehensive security validations.
 *
 * @interface RovoIntegration
 */
export interface RovoIntegration {
  /**
   * Creates a settings builder for Rovo queries using a raw table name.
   *
   * @param {string} tableName - The name of the table to query
   * @param {string} accountId - The account ID of the active user
   * @returns {RovoIntegrationSettingCreator} Builder for configuring Rovo query settings
   */
  rovoRawSettingBuilder(tableName: string, accountId: string): RovoIntegrationSettingCreator;

  /**
   * Creates a settings builder for Rovo queries using a Drizzle table object.
   *
   * @param {AnyMySqlTable} table - The Drizzle table object
   * @param {string} accountId - The account ID of the active user
   * @returns {RovoIntegrationSettingCreator} Builder for configuring Rovo query settings
   */
  rovoSettingBuilder(table: AnyMySqlTable, accountId: string): RovoIntegrationSettingCreator;

  /**
   * Executes a dynamic SQL query with comprehensive security validations.
   *
   * @param {string} dynamicSql - The SQL query to execute (must be a SELECT statement)
   * @param {RovoIntegrationSetting} settings - Configuration settings for the query
   * @returns {Promise<Result<unknown>>} Query execution result with metadata
   * @throws {Error} If the query violates security restrictions
   */
  dynamicIsolatedQuery(
    dynamicSql: string,
    settings: RovoIntegrationSetting,
  ): Promise<Result<unknown>>;
}
