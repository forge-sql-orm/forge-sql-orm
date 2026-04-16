import { sql, type SQL, type AnyColumn } from "drizzle-orm";

/**
 * TiDB miscellaneous function helpers.
 * @see https://docs.pingcap.com/tidb/stable/miscellaneous-functions
 */
export type MiscSqlInput = SQL | AnyColumn | string | number | boolean;

/** `ANY_VALUE(expr)` */
export function anyValue(expr: MiscSqlInput): SQL {
  return sql`ANY_VALUE(${expr})`;
}

/** `BIN_TO_UUID(bin_uuid [, swap_flag])` */
export function binToUuid(binUuid: MiscSqlInput, swapFlag?: MiscSqlInput): SQL {
  if (swapFlag !== undefined) {
    return sql`BIN_TO_UUID(${binUuid}, ${swapFlag})`;
  }
  return sql`BIN_TO_UUID(${binUuid})`;
}

/** `DEFAULT(col_name)` */
export function defaultValue(column: MiscSqlInput): SQL {
  return sql`DEFAULT(${column})`;
}

/** `GROUPING(expr [, expr] ...)` */
export function grouping(first: MiscSqlInput, ...rest: MiscSqlInput[]): SQL {
  return sql`GROUPING(${first}${sql.join(
    rest.map((r) => sql`, ${r}`),
    sql.empty(),
  )})`;
}

/** `INET_ATON(expr)` */
export function inetAton(expr: MiscSqlInput): SQL {
  return sql`INET_ATON(${expr})`;
}

/** `INET_NTOA(expr)` */
export function inetNtoa(expr: MiscSqlInput): SQL {
  return sql`INET_NTOA(${expr})`;
}

/** `INET6_ATON(expr)` */
export function inet6Aton(expr: MiscSqlInput): SQL {
  return sql`INET6_ATON(${expr})`;
}

/** `INET6_NTOA(expr)` */
export function inet6Ntoa(expr: MiscSqlInput): SQL {
  return sql`INET6_NTOA(${expr})`;
}

/** `IS_IPV4(expr)` */
export function isIpv4(expr: MiscSqlInput): SQL {
  return sql`IS_IPV4(${expr})`;
}

/** `IS_IPV4_COMPAT(expr)` */
export function isIpv4Compat(expr: MiscSqlInput): SQL {
  return sql`IS_IPV4_COMPAT(${expr})`;
}

/** `IS_IPV4_MAPPED(expr)` */
export function isIpv4Mapped(expr: MiscSqlInput): SQL {
  return sql`IS_IPV4_MAPPED(${expr})`;
}

/** `IS_IPV6(expr)` */
export function isIpv6(expr: MiscSqlInput): SQL {
  return sql`IS_IPV6(${expr})`;
}

/** `IS_UUID(expr)` */
export function isUuid(expr: MiscSqlInput): SQL {
  return sql`IS_UUID(${expr})`;
}

/** `NAME_CONST(name, value)` */
export function nameConst(name: MiscSqlInput, value: MiscSqlInput): SQL {
  return sql`NAME_CONST(${name}, ${value})`;
}

/** `SLEEP(seconds)` */
export function sleep(seconds: MiscSqlInput): SQL {
  return sql`SLEEP(${seconds})`;
}

/** `UUID()` */
export function uuid(): SQL {
  return sql`UUID()`;
}

/** `UUID_TO_BIN(uuid_str [, swap_flag])` */
export function uuidToBin(uuidStr: MiscSqlInput, swapFlag?: MiscSqlInput): SQL {
  if (swapFlag !== undefined) {
    return sql`UUID_TO_BIN(${uuidStr}, ${swapFlag})`;
  }
  return sql`UUID_TO_BIN(${uuidStr})`;
}

/** `VALUES(col_name)` */
export function valuesFn(column: MiscSqlInput): SQL {
  return sql`VALUES(${column})`;
}
