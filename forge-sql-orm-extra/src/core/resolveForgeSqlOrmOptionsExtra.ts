// SPDX-FileCopyrightText: 2025-2026 Vasyl Zakharchenko
// SPDX-License-Identifier: MIT

import { KVSCache } from "../cache";
import type { ForgeSqlOrmOptionsExtra } from "./ForgeSQLExt";

/**
 * Merges user-provided options with forge-sql-orm-extra defaults.
 * Partial objects (including `{}`) receive full defaults for unset fields.
 */
export function resolveForgeSqlOrmOptionsExtra(
  options?: ForgeSqlOrmOptionsExtra,
): ForgeSqlOrmOptionsExtra {
  return {
    logRawSqlQuery: false,
    logCache: false,
    disableOptimisticLocking: false,
    cacheWrapTable: true,
    cacheTTL: 120,
    cacheEntityQueryName: "sql",
    cacheEntityExpirationName: "expiration",
    cacheEntityDataName: "data",
    cacheImplementation: new KVSCache(),
    ...options,
  };
}
