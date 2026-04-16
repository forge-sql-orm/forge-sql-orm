import { describe, expect, it } from "vitest";
import { CasingCache } from "drizzle-orm/casing";
import {
  tidbBoundedStaleness,
  tidbCurrentResourceGroup,
  tidbCurrentTso,
  tidbDecodeBinaryPlan,
  tidbDecodeKey,
  tidbDecodePlan,
  tidbDecodeSqlDigests,
  tidbEncodeIndexKey,
  tidbEncodeRecordKey,
  tidbEncodeSqlDigest,
  tidbIsDdlOwner,
  tidbMvccInfo,
  tidbParseTso,
  tidbParseTsoLogical,
  tidbRowChecksum,
  tidbShard,
  tidbVersionInfo,
  vitessHash,
} from "../../../../src/core/functions/TiDBSpecificTiDB";

const mysqlQueryConfig = {
  casing: new CasingCache(undefined),
  escapeName: (name: string) => `\`${name.replace(/`/g, "``")}\``,
  escapeParam: (_num: number) => `?`,
  escapeString: (str: string) => `'${str.replace(/'/g, "''")}'`,
};

describe("TiDBSpecificTiDB SQL fragments (toQuery)", () => {
  it("zero-arg helpers", () => {
    expect(tidbCurrentResourceGroup().toQuery(mysqlQueryConfig).sql).toBe(
      "CURRENT_RESOURCE_GROUP()",
    );
    expect(tidbCurrentTso().toQuery(mysqlQueryConfig).sql).toBe("TIDB_CURRENT_TSO()");
    expect(tidbIsDdlOwner().toQuery(mysqlQueryConfig).sql).toBe("TIDB_IS_DDL_OWNER()");
    expect(tidbRowChecksum().toQuery(mysqlQueryConfig).sql).toBe("TIDB_ROW_CHECKSUM()");
    expect(tidbVersionInfo().toQuery(mysqlQueryConfig).sql).toBe("TIDB_VERSION()");
  });

  it("single-arg helpers", () => {
    expect(tidbDecodeBinaryPlan("x").toQuery(mysqlQueryConfig).sql).toBe(
      "TIDB_DECODE_BINARY_PLAN(?)",
    );
    expect(tidbDecodeKey("x").toQuery(mysqlQueryConfig).sql).toBe("TIDB_DECODE_KEY(?)");
    expect(tidbDecodePlan("x").toQuery(mysqlQueryConfig).sql).toBe("TIDB_DECODE_PLAN(?)");
    expect(tidbEncodeSqlDigest("SELECT 1").toQuery(mysqlQueryConfig).sql).toBe(
      "TIDB_ENCODE_SQL_DIGEST(?)",
    );
    expect(tidbParseTso(1).toQuery(mysqlQueryConfig).sql).toBe("TIDB_PARSE_TSO(?)");
    expect(tidbParseTsoLogical(1).toQuery(mysqlQueryConfig).sql).toBe("TIDB_PARSE_TSO_LOGICAL(?)");
    expect(tidbShard(123).toQuery(mysqlQueryConfig).sql).toBe("TIDB_SHARD(?)");
    expect(vitessHash(123).toQuery(mysqlQueryConfig).sql).toBe("VITESS_HASH(?)");
    expect(tidbMvccInfo("k").toQuery(mysqlQueryConfig).sql).toBe("TIDB_MVCC_INFO(?)");
  });

  it("multi-arg helpers", () => {
    expect(tidbBoundedStaleness("a", "b").toQuery(mysqlQueryConfig).sql).toBe(
      "TIDB_BOUNDED_STALENESS(?, ?)",
    );
    expect(tidbDecodeSqlDigests("[]").toQuery(mysqlQueryConfig).sql).toBe(
      "TIDB_DECODE_SQL_DIGESTS(?)",
    );
    expect(tidbDecodeSqlDigests("[]", 10).toQuery(mysqlQueryConfig).sql).toBe(
      "TIDB_DECODE_SQL_DIGESTS(?, ?)",
    );
    expect(tidbEncodeIndexKey("test", "t", "idx", 2, 1).toQuery(mysqlQueryConfig).sql).toBe(
      "TIDB_ENCODE_INDEX_KEY(?, ?, ?, ?, ?)",
    );
    expect(tidbEncodeRecordKey("test", "t", 1).toQuery(mysqlQueryConfig).sql).toBe(
      "TIDB_ENCODE_RECORD_KEY(?, ?, ?)",
    );
  });
});
