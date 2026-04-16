import { sql, type SQL, type AnyColumn } from "drizzle-orm";

/**
 * TiDB / MySQL cast expressions for Drizzle `sql` fragments.
 * @see https://docs.pingcap.com/tidb/stable/cast-functions-and-operators
 *
 * `asType` / `type` / `charset` fragments are embedded with `sql.raw()` and must be trusted
 * (build them with `castTarget*` helpers or fixed literals — never concatenate user input).
 */
export type CastSqlInput = SQL | AnyColumn | string | number | boolean;

/** `CAST(expr AS type)` — `asType` is a full MySQL cast target, e.g. `castTargetChar(10)`. */
export function sqlCast(expr: CastSqlInput, asType: string): SQL {
  return sql`CAST(${expr} AS ${sql.raw(asType)})`;
}

/**
 * `CONVERT(expr, type)` — same cast targets as `CAST(... AS type)`.
 * Prefer `sqlCast` unless you need `CONVERT` syntax.
 */
export function sqlConvert(expr: CastSqlInput, type: string): SQL {
  return sql`CONVERT(${expr}, ${sql.raw(type)})`;
}

/** `CONVERT(expr USING charset)` — character set conversion (e.g. `utf8mb4`). */
export function sqlConvertUsing(expr: CastSqlInput, charset: string): SQL {
  return sql`CONVERT(${expr} USING ${sql.raw(charset)})`;
}

/**
 * `BINARY expr` (deprecated since MySQL 8.0.27; prefer `sqlCast(expr, castTargetBinary())`).
 */
export function sqlBinary(expr: CastSqlInput): SQL {
  return sql`BINARY ${expr}`;
}

/** `BINARY` or `BINARY(n)` */
export function castTargetBinary(length?: number): string {
  return length === undefined ? "BINARY" : `BINARY(${length})`;
}

/** `CHAR` or `CHAR(n)` */
export function castTargetChar(length?: number): string {
  return length === undefined ? "CHAR" : `CHAR(${length})`;
}

/** `DATE` */
export function castTargetDate(): string {
  return "DATE";
}

/** `DATETIME` or `DATETIME(fsp)` */
export function castTargetDateTime(fsp?: number): string {
  return fsp === undefined ? "DATETIME" : `DATETIME(${fsp})`;
}

/** `DECIMAL`, `DECIMAL(n)`, or `DECIMAL(n, m)` */
export function castTargetDecimal(precision?: number, scale?: number): string {
  if (precision === undefined) {
    return "DECIMAL";
  }
  if (scale === undefined) {
    return `DECIMAL(${precision})`;
  }
  return `DECIMAL(${precision}, ${scale})`;
}

/** `DOUBLE` */
export function castTargetDouble(): string {
  return "DOUBLE";
}

/** `FLOAT` or `FLOAT(n)` */
export function castTargetFloat(bits?: number): string {
  return bits === undefined ? "FLOAT" : `FLOAT(${bits})`;
}

/** `JSON` */
export function castTargetJson(): string {
  return "JSON";
}

/** `REAL` */
export function castTargetReal(): string {
  return "REAL";
}

/** `SIGNED` */
export function castTargetSigned(): string {
  return "SIGNED";
}

/** `SIGNED INTEGER` */
export function castTargetSignedInteger(): string {
  return "SIGNED INTEGER";
}

/** `UNSIGNED` */
export function castTargetUnsigned(): string {
  return "UNSIGNED";
}

/** `UNSIGNED INTEGER` */
export function castTargetUnsignedInteger(): string {
  return "UNSIGNED INTEGER";
}

/** `TIME` or `TIME(fsp)` */
export function castTargetTime(fsp?: number): string {
  return fsp === undefined ? "TIME" : `TIME(${fsp})`;
}

/** `VECTOR` (TiDB) */
export function castTargetVector(): string {
  return "VECTOR";
}

/** `YEAR` */
export function castTargetYear(): string {
  return "YEAR";
}

/**
 * Multi-valued index form: `UNSIGNED ARRAY`, `CHAR(10) ARRAY`, etc.
 * @param elementTarget — e.g. `castTargetUnsigned()` or `castTargetChar(64)`
 */
export function castTargetArray(elementTarget: string): string {
  return `${elementTarget} ARRAY`;
}
