import { sql, type SQL, type AnyColumn } from "drizzle-orm";

/**
 * TiDB aggregate helpers that are not provided by `drizzle-orm` aggregate exports.
 *
 * Do NOT duplicate `count`, `countDistinct`, `sum`, `sumDistinct`, `avg`, `avgDistinct`,
 * `min`, and `max` because those already exist in `drizzle-orm/sql/functions/aggregate`.
 *
 * JSON aggregates are implemented in `JsonTiDB` (`jsonArrayAgg`, `jsonObjectAgg`).
 */
export type AggregateSqlInput = SQL | AnyColumn | string | number | boolean;

/** `GROUP_CONCAT(expr)` or `GROUP_CONCAT(expr SEPARATOR sep)` */
export function groupConcat(expr: AggregateSqlInput, separator?: AggregateSqlInput): SQL {
  if (separator !== undefined) {
    return sql`GROUP_CONCAT(${expr} SEPARATOR ${separator})`;
  }
  return sql`GROUP_CONCAT(${expr})`;
}

/** `GROUP_CONCAT(DISTINCT expr)` or `... SEPARATOR sep` */
export function groupConcatDistinct(expr: AggregateSqlInput, separator?: AggregateSqlInput): SQL {
  if (separator !== undefined) {
    return sql`GROUP_CONCAT(DISTINCT ${expr} SEPARATOR ${separator})`;
  }
  return sql`GROUP_CONCAT(DISTINCT ${expr})`;
}

/** `VARIANCE(expr)` — alias of `VAR_POP` */
export function variance(expr: AggregateSqlInput): SQL {
  return sql`VARIANCE(${expr})`;
}

/** `VAR_POP(expr)` */
export function varPop(expr: AggregateSqlInput): SQL {
  return sql`VAR_POP(${expr})`;
}

/** `STD(expr)` — alias of `STDDEV_POP` */
export function std(expr: AggregateSqlInput): SQL {
  return sql`STD(${expr})`;
}

/** `STDDEV(expr)` — alias of `STDDEV_POP` */
export function stddev(expr: AggregateSqlInput): SQL {
  return sql`STDDEV(${expr})`;
}

/** `STDDEV_POP(expr)` */
export function stddevPop(expr: AggregateSqlInput): SQL {
  return sql`STDDEV_POP(${expr})`;
}

/** `VAR_SAMP(expr)` */
export function varSamp(expr: AggregateSqlInput): SQL {
  return sql`VAR_SAMP(${expr})`;
}

/** `STDDEV_SAMP(expr)` */
export function stddevSamp(expr: AggregateSqlInput): SQL {
  return sql`STDDEV_SAMP(${expr})`;
}

/** `APPROX_PERCENTILE(expr, percentage)` where percentage is in [1,100]. */
export function approxPercentile(expr: AggregateSqlInput, percentage: number): SQL {
  return sql`APPROX_PERCENTILE(${expr}, ${percentage})`;
}

/** `APPROX_COUNT_DISTINCT(expr [, expr ...])` */
export function approxCountDistinct(first: AggregateSqlInput, ...rest: AggregateSqlInput[]): SQL {
  return sql`APPROX_COUNT_DISTINCT(${first}${sql.join(
    rest.map((r) => sql`, ${r}`),
    sql.empty(),
  )})`;
}
