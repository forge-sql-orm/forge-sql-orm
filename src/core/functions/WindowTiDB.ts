import { sql, type SQL, type AnyColumn } from "drizzle-orm";

/**
 * TiDB / MySQL window function fragments.
 * These helpers generate only the function call; use Drizzle `sql` to append `OVER (...)`.
 *
 * Example: `sql`${rowNumber()} OVER (PARTITION BY ${t.groupId} ORDER BY ${t.id})``
 */
export type WindowSqlInput = SQL | AnyColumn | string | number | boolean;

/** `CUME_DIST()` */
export function cumeDist(): SQL {
  return sql`CUME_DIST()`;
}

/** `DENSE_RANK()` */
export function denseRank(): SQL {
  return sql`DENSE_RANK()`;
}

/** `FIRST_VALUE(expr)` */
export function firstValue(expr: WindowSqlInput): SQL {
  return sql`FIRST_VALUE(${expr})`;
}

/** `LAG(expr [, offset [, default]])` */
export function lag(
  expr: WindowSqlInput,
  offset?: WindowSqlInput,
  defaultValue?: WindowSqlInput,
): SQL {
  if (offset === undefined) {
    return sql`LAG(${expr})`;
  }
  if (defaultValue === undefined) {
    return sql`LAG(${expr}, ${offset})`;
  }
  return sql`LAG(${expr}, ${offset}, ${defaultValue})`;
}

/** `LAST_VALUE(expr)` */
export function lastValue(expr: WindowSqlInput): SQL {
  return sql`LAST_VALUE(${expr})`;
}

/** `LEAD(expr [, offset [, default]])` */
export function lead(
  expr: WindowSqlInput,
  offset?: WindowSqlInput,
  defaultValue?: WindowSqlInput,
): SQL {
  if (offset === undefined) {
    return sql`LEAD(${expr})`;
  }
  if (defaultValue === undefined) {
    return sql`LEAD(${expr}, ${offset})`;
  }
  return sql`LEAD(${expr}, ${offset}, ${defaultValue})`;
}

/** `NTH_VALUE(expr, n)` */
export function nthValue(expr: WindowSqlInput, n: WindowSqlInput): SQL {
  return sql`NTH_VALUE(${expr}, ${n})`;
}

/** `NTILE(n)` */
export function ntile(n: WindowSqlInput): SQL {
  return sql`NTILE(${n})`;
}

/** `PERCENT_RANK()` */
export function percentRank(): SQL {
  return sql`PERCENT_RANK()`;
}

/** `RANK()` */
export function rank(): SQL {
  return sql`RANK()`;
}

/** `ROW_NUMBER()` */
export function rowNumber(): SQL {
  return sql`ROW_NUMBER()`;
}
