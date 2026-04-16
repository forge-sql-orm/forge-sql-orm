import { describe, expect, it } from "vitest";
import { getTableColumns, sql as dsql } from "drizzle-orm";
import { CasingCache } from "drizzle-orm/casing";
import { int, mysqlTable } from "drizzle-orm/mysql-core";
import {
  bitAnd,
  bitCount,
  bitNot,
  bitOr,
  bitShl,
  bitShr,
  bitXor,
} from "../../../../src/core/functions/BitTiDB";

const t = mysqlTable("bit_t", {
  id: int("id").primaryKey(),
  flags: int("flags"),
});

const cols = getTableColumns(t);

const mysqlQueryConfig = {
  casing: new CasingCache(undefined),
  escapeName: (name: string) => `\`${name.replace(/`/g, "``")}\``,
  escapeParam: (_num: number) => `?`,
  escapeString: (str: string) => `'${str.replace(/'/g, "''")}'`,
};

describe("BitTiDB SQL fragments (toQuery)", () => {
  it("BIT_COUNT", () => {
    const q = bitCount(dsql`b'00101001'`).toQuery(mysqlQueryConfig);
    expect(q.sql).toBe("BIT_COUNT(b'00101001')");
  });

  it("bitwise operators with column and literals", () => {
    expect(bitAnd(cols.flags, 15).toQuery(mysqlQueryConfig).sql).toBe("(`bit_t`.`flags` & ?)");
    expect(bitOr(cols.flags, 1).toQuery(mysqlQueryConfig).sql).toBe("(`bit_t`.`flags` | ?)");
    expect(bitXor(cols.flags, cols.flags).toQuery(mysqlQueryConfig).sql).toBe(
      "(`bit_t`.`flags` ^ `bit_t`.`flags`)",
    );
    expect(bitNot(cols.flags).toQuery(mysqlQueryConfig).sql).toBe("(~`bit_t`.`flags`)");
  });

  it("shifts", () => {
    expect(bitShl(1, cols.id).toQuery(mysqlQueryConfig).sql).toBe("(? << `bit_t`.`id`)");
    expect(bitShr(1024, 4).toQuery(mysqlQueryConfig).sql).toBe("(? >> ?)");
    expect(bitShr(1024, 4).toQuery(mysqlQueryConfig).params).toEqual([1024, 4]);
  });
});
