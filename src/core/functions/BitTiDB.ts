import { sql, type SQL, type AnyColumn } from "drizzle-orm";

/**
 * TiDB / MySQL bit expressions for Drizzle `sql` fragments.
 * @see https://docs.pingcap.com/tidb/stable/bit-functions-and-operators
 *
 * Prefer bit literals (`b'…'`) or numeric expressions as documented; string arguments are interpreted differently by `BIT_COUNT()`.
 */
export type BitSqlInput = SQL | AnyColumn | string | number | boolean;

/** `BIT_COUNT(expr)` */
export function bitCount(expr: BitSqlInput): SQL {
  return sql`BIT_COUNT(${expr})`;
}

/** `(a & b)` — bitwise AND */
export function bitAnd(a: BitSqlInput, b: BitSqlInput): SQL {
  return sql`(${a} & ${b})`;
}

/** `(~a)` — bitwise inversion (64-bit expansion per MySQL 8 / TiDB) */
export function bitNot(a: BitSqlInput): SQL {
  return sql`(~${a})`;
}

/** `(a | b)` — bitwise OR */
export function bitOr(a: BitSqlInput, b: BitSqlInput): SQL {
  return sql`(${a} | ${b})`;
}

/** `(a ^ b)` — bitwise XOR */
export function bitXor(a: BitSqlInput, b: BitSqlInput): SQL {
  return sql`(${a} ^ ${b})`;
}

/** `(a << n)` — left shift */
export function bitShl(a: BitSqlInput, n: BitSqlInput): SQL {
  return sql`(${a} << ${n})`;
}

/** `(a >> n)` — right shift */
export function bitShr(a: BitSqlInput, n: BitSqlInput): SQL {
  return sql`(${a} >> ${n})`;
}
