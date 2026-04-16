import { sql, type SQL, type AnyColumn } from "drizzle-orm";

/**
 * TiDB / MySQL numeric expressions for Drizzle `sql` fragments.
 * @see https://docs.pingcap.com/tidb/stable/numeric-functions-and-operators
 *
 * Use `count`, `sum`, `avg`, `min`, `max`, and `*Distinct` variants from `drizzle-orm`
 * instead of re-wrapping aggregate functions here.
 */
export type NumericSqlInput = SQL | AnyColumn | string | number | boolean;

// --- Arithmetic operators (no dedicated helpers in drizzle-orm) ---

/** `(a + b)` */
export function numAdd(a: NumericSqlInput, b: NumericSqlInput): SQL {
  return sql`(${a} + ${b})`;
}

/** `(a - b)` */
export function numSub(a: NumericSqlInput, b: NumericSqlInput): SQL {
  return sql`(${a} - ${b})`;
}

/** `(a * b)` */
export function numMul(a: NumericSqlInput, b: NumericSqlInput): SQL {
  return sql`(${a} * ${b})`;
}

/** `(a / b)` — floating-point division */
export function numDiv(a: NumericSqlInput, b: NumericSqlInput): SQL {
  return sql`(${a} / ${b})`;
}

/** `(a DIV b)` — integer division */
export function numDivInt(a: NumericSqlInput, b: NumericSqlInput): SQL {
  return sql`(${a} DIV ${b})`;
}

/** `(a % b)` */
export function numModOp(a: NumericSqlInput, b: NumericSqlInput): SQL {
  return sql`(${a} % ${b})`;
}

/** Unary minus `(-a)` */
export function numNeg(a: NumericSqlInput): SQL {
  return sql`(-${a})`;
}

// --- Mathematical functions ---

/** `ABS(x)` */
export function abs(x: NumericSqlInput): SQL {
  return sql`ABS(${x})`;
}

/** `ACOS(x)` */
export function acos(x: NumericSqlInput): SQL {
  return sql`ACOS(${x})`;
}

/** `ASIN(x)` */
export function asin(x: NumericSqlInput): SQL {
  return sql`ASIN(${x})`;
}

/** `ATAN(x)` */
export function atan(x: NumericSqlInput): SQL {
  return sql`ATAN(${x})`;
}

/** `ATAN2(y, x)` */
export function atan2(y: NumericSqlInput, x: NumericSqlInput): SQL {
  return sql`ATAN2(${y}, ${x})`;
}

/** `CEIL(x)` */
export function ceil(x: NumericSqlInput): SQL {
  return sql`CEIL(${x})`;
}

/** `CEILING(x)` — synonym for `CEIL` */
export function ceiling(x: NumericSqlInput): SQL {
  return sql`CEILING(${x})`;
}

/** `CONV(n, from_base, to_base)` */
export function conv(n: NumericSqlInput, fromBase: NumericSqlInput, toBase: NumericSqlInput): SQL {
  return sql`CONV(${n}, ${fromBase}, ${toBase})`;
}

/** `COS(x)` */
export function cos(x: NumericSqlInput): SQL {
  return sql`COS(${x})`;
}

/** `COT(x)` */
export function cot(x: NumericSqlInput): SQL {
  return sql`COT(${x})`;
}

/** `CRC32(expr)` */
export function crc32(expr: NumericSqlInput): SQL {
  return sql`CRC32(${expr})`;
}

/** `DEGREES(x)` */
export function degrees(x: NumericSqlInput): SQL {
  return sql`DEGREES(${x})`;
}

/** `EXP(x)` */
export function exp(x: NumericSqlInput): SQL {
  return sql`EXP(${x})`;
}

/** `FLOOR(x)` */
export function floor(x: NumericSqlInput): SQL {
  return sql`FLOOR(${x})`;
}

/** `LN(x)` */
export function ln(x: NumericSqlInput): SQL {
  return sql`LN(${x})`;
}

/** `LOG(x)` — natural logarithm (single-argument form) */
export function log(x: NumericSqlInput): SQL {
  return sql`LOG(${x})`;
}

/** `LOG(base, x)` — logarithm of x to the given base */
export function logBase(base: NumericSqlInput, x: NumericSqlInput): SQL {
  return sql`LOG(${base}, ${x})`;
}

/** `LOG10(x)` */
export function log10(x: NumericSqlInput): SQL {
  return sql`LOG10(${x})`;
}

/** `LOG2(x)` — base-2 logarithm */
export function logBase2(x: NumericSqlInput): SQL {
  return sql`LOG2(${x})`;
}

/** `MOD(a, b)` */
export function mod(a: NumericSqlInput, b: NumericSqlInput): SQL {
  return sql`MOD(${a}, ${b})`;
}

/** `PI()` */
export function pi(): SQL {
  return sql`PI()`;
}

/** `POW(x, y)` */
export function pow(x: NumericSqlInput, y: NumericSqlInput): SQL {
  return sql`POW(${x}, ${y})`;
}

/** `POWER(x, y)` — synonym for `POW` */
export function power(x: NumericSqlInput, y: NumericSqlInput): SQL {
  return sql`POWER(${x}, ${y})`;
}

/** `RADIANS(x)` */
export function radians(x: NumericSqlInput): SQL {
  return sql`RADIANS(${x})`;
}

/** `RAND()` or `RAND(seed)` */
export function rand(seed?: NumericSqlInput): SQL {
  if (seed !== undefined) {
    return sql`RAND(${seed})`;
  }
  return sql`RAND()`;
}

/** `ROUND(x [, d])` */
export function round(x: NumericSqlInput, d?: NumericSqlInput): SQL {
  if (d !== undefined) {
    return sql`ROUND(${x}, ${d})`;
  }
  return sql`ROUND(${x})`;
}

/** `SIGN(x)` */
export function sign(x: NumericSqlInput): SQL {
  return sql`SIGN(${x})`;
}

/** `SIN(x)` */
export function sin(x: NumericSqlInput): SQL {
  return sql`SIN(${x})`;
}

/** `SQRT(x)` */
export function sqrt(x: NumericSqlInput): SQL {
  return sql`SQRT(${x})`;
}

/** `TAN(x)` */
export function tan(x: NumericSqlInput): SQL {
  return sql`TAN(${x})`;
}

/** `TRUNCATE(x, d)` */
export function truncateTo(x: NumericSqlInput, d: NumericSqlInput): SQL {
  return sql`TRUNCATE(${x}, ${d})`;
}
