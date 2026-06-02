// SPDX-FileCopyrightText: 2025-2026 Vasyl Zakharchenko
// SPDX-License-Identifier: MIT

import { Cache } from "./Cache";
import { Query } from "drizzle-orm";

/**
 * No-op {@link Cache} implementation used as the default when no caching backend
 * is configured.
 *
 * Every method is a safe stub: reads always report a cache miss and writes and
 * invalidations do nothing. Each call emits a `console.warn` so that caching being
 * effectively disabled is visible during development and points to a missing
 * {@link ForgeSqlOrmOptions.cacheImplementation} configuration.
 */
export class NopCache implements Cache {
  /**
   * No-op table invalidation; warns that caching is not configured.
   */
  async clearTablesCache(tables: string[]): Promise<void> {
    // eslint-disable-next-line no-console
    console.warn(
      `NopCache.clearTablesCache is invoked for tables: ${tables.join(", ")}. Please check your configuration.`,
    );
  }

  /**
   * Always reports a cache miss; warns that caching is not configured.
   */
  async getQueryResultsFromCache<T>(query: { toSQL: () => Query }): Promise<T | undefined> {
    // eslint-disable-next-line no-console
    console.warn(
      `NopCache.getQueryResultsFromCache is invoked for query: ${query.toSQL().sql}. Please check your configuration.`,
    );
    return undefined;
  }

  /**
   * No-op expired-entry cleanup; warns that caching is not configured.
   */
  async clearExpiredCache(): Promise<void> {
    // eslint-disable-next-line no-console
    console.warn("NopCache.clearExpiredCache is invoked. Please check your configuration.");
  }

  /**
   * No-op result storage; warns that caching is not configured.
   */
  async setQueryResult(): Promise<void> {
    // eslint-disable-next-line no-console
    console.warn("NopCache.setQueryResult is invoked. Please check your configuration.");
  }
}
