import { sql, type SQL, type AnyColumn } from "drizzle-orm";

/**
 * TiDB-specific function helpers (not available in MySQL).
 * @see https://docs.pingcap.com/tidb/stable/tidb-functions
 */
export type TiDBSpecificSqlInput = SQL | AnyColumn | string | number | boolean;

/** `CURRENT_RESOURCE_GROUP()` */
export function tidbCurrentResourceGroup(): SQL {
  return sql`CURRENT_RESOURCE_GROUP()`;
}

/** `TIDB_BOUNDED_STALENESS(ts1, ts2)` */
export function tidbBoundedStaleness(ts1: TiDBSpecificSqlInput, ts2: TiDBSpecificSqlInput): SQL {
  return sql`TIDB_BOUNDED_STALENESS(${ts1}, ${ts2})`;
}

/** `TIDB_CURRENT_TSO()` */
export function tidbCurrentTso(): SQL {
  return sql`TIDB_CURRENT_TSO()`;
}

/** `TIDB_DECODE_BINARY_PLAN(binary_plan)` */
export function tidbDecodeBinaryPlan(binaryPlan: TiDBSpecificSqlInput): SQL {
  return sql`TIDB_DECODE_BINARY_PLAN(${binaryPlan})`;
}

/** `TIDB_DECODE_KEY(key)` */
export function tidbDecodeKey(key: TiDBSpecificSqlInput): SQL {
  return sql`TIDB_DECODE_KEY(${key})`;
}

/** `TIDB_DECODE_PLAN(plan)` */
export function tidbDecodePlan(plan: TiDBSpecificSqlInput): SQL {
  return sql`TIDB_DECODE_PLAN(${plan})`;
}

/** `TIDB_DECODE_SQL_DIGESTS(digests [, stmtTruncateLength])` */
export function tidbDecodeSqlDigests(
  digests: TiDBSpecificSqlInput,
  stmtTruncateLength?: TiDBSpecificSqlInput,
): SQL {
  if (stmtTruncateLength !== undefined) {
    return sql`TIDB_DECODE_SQL_DIGESTS(${digests}, ${stmtTruncateLength})`;
  }
  return sql`TIDB_DECODE_SQL_DIGESTS(${digests})`;
}

/** `TIDB_ENCODE_SQL_DIGEST(query_str)` */
export function tidbEncodeSqlDigest(query: TiDBSpecificSqlInput): SQL {
  return sql`TIDB_ENCODE_SQL_DIGEST(${query})`;
}

/** `TIDB_IS_DDL_OWNER()` */
export function tidbIsDdlOwner(): SQL {
  return sql`TIDB_IS_DDL_OWNER()`;
}

/** `TIDB_PARSE_TSO(tso)` */
export function tidbParseTso(tso: TiDBSpecificSqlInput): SQL {
  return sql`TIDB_PARSE_TSO(${tso})`;
}

/** `TIDB_PARSE_TSO_LOGICAL(tso)` */
export function tidbParseTsoLogical(tso: TiDBSpecificSqlInput): SQL {
  return sql`TIDB_PARSE_TSO_LOGICAL(${tso})`;
}

/** `TIDB_ROW_CHECKSUM()` */
export function tidbRowChecksum(): SQL {
  return sql`TIDB_ROW_CHECKSUM()`;
}

/** `TIDB_SHARD(value)` */
export function tidbShard(value: TiDBSpecificSqlInput): SQL {
  return sql`TIDB_SHARD(${value})`;
}

/** `TIDB_VERSION()` */
export function tidbVersionInfo(): SQL {
  return sql`TIDB_VERSION()`;
}

/** `VITESS_HASH(num)` */
export function vitessHash(num: TiDBSpecificSqlInput): SQL {
  return sql`VITESS_HASH(${num})`;
}

/** `TIDB_ENCODE_INDEX_KEY(db_name, table_name, index_name, ...)` */
export function tidbEncodeIndexKey(
  dbName: TiDBSpecificSqlInput,
  tableName: TiDBSpecificSqlInput,
  indexName: TiDBSpecificSqlInput,
  ...values: TiDBSpecificSqlInput[]
): SQL {
  return sql`TIDB_ENCODE_INDEX_KEY(${dbName}, ${tableName}, ${indexName}${sql.join(
    values.map((v) => sql`, ${v}`),
    sql.empty(),
  )})`;
}

/** `TIDB_ENCODE_RECORD_KEY(db_name, table_name, ...)` */
export function tidbEncodeRecordKey(
  dbName: TiDBSpecificSqlInput,
  tableName: TiDBSpecificSqlInput,
  ...handleColumns: TiDBSpecificSqlInput[]
): SQL {
  return sql`TIDB_ENCODE_RECORD_KEY(${dbName}, ${tableName}${sql.join(
    handleColumns.map((v) => sql`, ${v}`),
    sql.empty(),
  )})`;
}

/** `TIDB_MVCC_INFO(key)` */
export function tidbMvccInfo(key: TiDBSpecificSqlInput): SQL {
  return sql`TIDB_MVCC_INFO(${key})`;
}
