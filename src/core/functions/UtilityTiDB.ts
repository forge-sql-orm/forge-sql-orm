import { sql, type SQL, type AnyColumn } from "drizzle-orm";

/**
 * TiDB utility functions.
 * @see https://docs.pingcap.com/tidb/stable/miscellaneous-functions#utility-functions
 */
export type UtilitySqlInput = SQL | AnyColumn | string | number | boolean;

/** `FORMAT_BYTES(expr)` */
export function formatBytes(expr: UtilitySqlInput): SQL {
  return sql`FORMAT_BYTES(${expr})`;
}

/** `FORMAT_NANO_TIME(expr)` */
export function formatNanoTime(expr: UtilitySqlInput): SQL {
  return sql`FORMAT_NANO_TIME(${expr})`;
}
