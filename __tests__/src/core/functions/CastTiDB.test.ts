import { describe, expect, it } from "vitest";
import { getTableColumns } from "drizzle-orm";
import { CasingCache } from "drizzle-orm/casing";
import { int, mysqlTable, text } from "drizzle-orm/mysql-core";
import {
  castTargetArray,
  castTargetChar,
  castTargetDateTime,
  castTargetDecimal,
  castTargetUnsigned,
  sqlBinary,
  sqlCast,
  sqlConvert,
  sqlConvertUsing,
} from "../../../../src/core/functions/CastTiDB";

const t = mysqlTable("cast_t", {
  id: int("id").primaryKey(),
  body: text("body"),
});

const cols = getTableColumns(t);

const mysqlQueryConfig = {
  casing: new CasingCache(undefined),
  escapeName: (name: string) => `\`${name.replace(/`/g, "``")}\``,
  escapeParam: (_num: number) => `?`,
  escapeString: (str: string) => `'${str.replace(/'/g, "''")}'`,
};

describe("CastTiDB SQL fragments (toQuery)", () => {
  it("sqlCast with castTarget helpers", () => {
    const q = sqlCast(0x54694442, castTargetChar()).toQuery(mysqlQueryConfig);
    expect(q.sql).toBe("CAST(? AS CHAR)");
    expect(q.params?.[0]).toBe(0x54694442);

    expect(sqlCast(cols.body, castTargetDateTime(3)).toQuery(mysqlQueryConfig).sql).toBe(
      "CAST(`cast_t`.`body` AS DATETIME(3))",
    );

    expect(sqlCast(cols.id, castTargetDecimal(12, 2)).toQuery(mysqlQueryConfig).sql).toBe(
      "CAST(`cast_t`.`id` AS DECIMAL(12, 2))",
    );
  });

  it("sqlCast ARRAY target for multi-valued index style", () => {
    const inner = castTargetArray(castTargetUnsigned());
    expect(inner).toBe("UNSIGNED ARRAY");
    const q = sqlCast(cols.body, inner).toQuery(mysqlQueryConfig);
    expect(q.sql).toBe("CAST(`cast_t`.`body` AS UNSIGNED ARRAY)");
  });

  it("sqlConvert and sqlConvertUsing", () => {
    expect(sqlConvert(0x616263, castTargetChar()).toQuery(mysqlQueryConfig).sql).toBe(
      "CONVERT(?, CHAR)",
    );
    expect(sqlConvertUsing(0x616263, "utf8mb4").toQuery(mysqlQueryConfig).sql).toBe(
      "CONVERT(? USING utf8mb4)",
    );
  });

  it("sqlBinary (deprecated operator)", () => {
    expect(sqlBinary(cols.body).toQuery(mysqlQueryConfig).sql).toBe("BINARY `cast_t`.`body`");
  });
});
