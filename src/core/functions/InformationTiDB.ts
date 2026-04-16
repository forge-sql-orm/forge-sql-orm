import { sql, type SQL, type AnyColumn } from "drizzle-orm";

/**
 * TiDB / MySQL information functions for Drizzle `sql` fragments.
 * @see https://docs.pingcap.com/tidb/stable/information-functions
 *
 * TiDB does not implement `CHARSET()`, `COERCIBILITY()`, `COLLATION()`, `ICU_VERSION()`, `ROLES_GRAPHML()`.
 * Use `tidbVersion()` for a detailed build string; `version()` returns a MySQL-compatible server version.
 */
export type InformationSqlInput = SQL | AnyColumn | string | number | boolean;

/** `BENCHMARK(count, expression)` */
export function sqlBenchmark(count: InformationSqlInput, expression: InformationSqlInput): SQL {
  return sql`BENCHMARK(${count}, ${expression})`;
}

/** `CONNECTION_ID()` */
export function connectionId(): SQL {
  return sql`CONNECTION_ID()`;
}

/** `CURRENT_ROLE()` */
export function currentRole(): SQL {
  return sql`CURRENT_ROLE()`;
}

/** `CURRENT_USER()` */
export function currentUser(): SQL {
  return sql`CURRENT_USER()`;
}

/** `DATABASE()` */
export function database(): SQL {
  return sql`DATABASE()`;
}

/** `FOUND_ROWS()` */
export function foundRows(): SQL {
  return sql`FOUND_ROWS()`;
}

/** `LAST_INSERT_ID()` or `LAST_INSERT_ID(expr)` */
export function lastInsertId(expr?: InformationSqlInput): SQL {
  if (expr !== undefined) {
    return sql`LAST_INSERT_ID(${expr})`;
  }
  return sql`LAST_INSERT_ID()`;
}

/** `ROW_COUNT()` */
export function rowCount(): SQL {
  return sql`ROW_COUNT()`;
}

/** `SCHEMA()` — synonym for `DATABASE()` */
export function schema(): SQL {
  return sql`SCHEMA()`;
}

/** `SESSION_USER()` — synonym for `USER()` */
export function sessionUser(): SQL {
  return sql`SESSION_USER()`;
}

/** `SYSTEM_USER()` — synonym for `USER()` */
export function systemUser(): SQL {
  return sql`SYSTEM_USER()`;
}

/** `USER()` */
export function user(): SQL {
  return sql`USER()`;
}

/** `VERSION()` — MySQL-compatible version string (TiDB identifies as MySQL 8.0.x). */
export function version(): SQL {
  return sql`VERSION()`;
}

/** `TIDB_VERSION()` — TiDB-only detailed build information. */
export function tidbVersion(): SQL {
  return sql`TIDB_VERSION()`;
}

/** `CURRENT_RESOURCE_GROUP()` — TiDB-only resource group for the session. */
export function currentResourceGroup(): SQL {
  return sql`CURRENT_RESOURCE_GROUP()`;
}
