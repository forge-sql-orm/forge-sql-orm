import { describe, expect, it } from "vitest";
import { getTableColumns } from "drizzle-orm";
import { CasingCache } from "drizzle-orm/casing";
import { int, mysqlTable, text } from "drizzle-orm/mysql-core";
import {
  castTargetArray,
  castTargetBinary,
  castTargetChar,
  castTargetDate,
  castTargetDateTime,
  castTargetDecimal,
  castTargetDouble,
  castTargetFloat,
  castTargetJson,
  castTargetReal,
  castTargetSigned,
  castTargetSignedInteger,
  castTargetTime,
  castTargetUnsigned,
  castTargetUnsignedInteger,
  castTargetVector,
  castTargetYear,
  sqlBinary,
  sqlCast,
  sqlConvert,
  sqlConvertUsing,
} from "../../../../src";

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

  it("castTarget helpers cover optional branches via sqlCast / sqlConvert", () => {
    const q = mysqlQueryConfig;
    const id = cols.id;

    expect(sqlCast(id, castTargetBinary()).toQuery(q).sql).toBe("CAST(`cast_t`.`id` AS BINARY)");
    expect(sqlCast(id, castTargetBinary(16)).toQuery(q).sql).toBe(
      "CAST(`cast_t`.`id` AS BINARY(16))",
    );
    expect(sqlCast(id, castTargetChar()).toQuery(q).sql).toBe("CAST(`cast_t`.`id` AS CHAR)");
    expect(sqlCast(id, castTargetChar(10)).toQuery(q).sql).toBe("CAST(`cast_t`.`id` AS CHAR(10))");
    expect(sqlCast(id, castTargetDate()).toQuery(q).sql).toBe("CAST(`cast_t`.`id` AS DATE)");
    expect(sqlCast(id, castTargetDateTime()).toQuery(q).sql).toBe(
      "CAST(`cast_t`.`id` AS DATETIME)",
    );
    expect(sqlCast(id, castTargetDecimal()).toQuery(q).sql).toBe("CAST(`cast_t`.`id` AS DECIMAL)");
    expect(sqlCast(id, castTargetDecimal(10)).toQuery(q).sql).toBe(
      "CAST(`cast_t`.`id` AS DECIMAL(10))",
    );
    expect(sqlCast(id, castTargetDouble()).toQuery(q).sql).toBe("CAST(`cast_t`.`id` AS DOUBLE)");
    expect(sqlCast(id, castTargetFloat()).toQuery(q).sql).toBe("CAST(`cast_t`.`id` AS FLOAT)");
    expect(sqlCast(id, castTargetFloat(24)).toQuery(q).sql).toBe(
      "CAST(`cast_t`.`id` AS FLOAT(24))",
    );
    expect(sqlCast(id, castTargetJson()).toQuery(q).sql).toBe("CAST(`cast_t`.`id` AS JSON)");
    expect(sqlCast(id, castTargetReal()).toQuery(q).sql).toBe("CAST(`cast_t`.`id` AS REAL)");
    expect(sqlCast(id, castTargetSigned()).toQuery(q).sql).toBe("CAST(`cast_t`.`id` AS SIGNED)");
    expect(sqlCast(id, castTargetSignedInteger()).toQuery(q).sql).toBe(
      "CAST(`cast_t`.`id` AS SIGNED INTEGER)",
    );
    expect(sqlCast(id, castTargetUnsignedInteger()).toQuery(q).sql).toBe(
      "CAST(`cast_t`.`id` AS UNSIGNED INTEGER)",
    );
    expect(sqlCast(id, castTargetTime()).toQuery(q).sql).toBe("CAST(`cast_t`.`id` AS TIME)");
    expect(sqlCast(id, castTargetTime(3)).toQuery(q).sql).toBe("CAST(`cast_t`.`id` AS TIME(3))");
    expect(sqlCast(id, castTargetVector()).toQuery(q).sql).toBe("CAST(`cast_t`.`id` AS VECTOR)");
    expect(sqlCast(id, castTargetYear()).toQuery(q).sql).toBe("CAST(`cast_t`.`id` AS YEAR)");

    expect(sqlConvert(id, castTargetBinary(8)).toQuery(q).sql).toBe(
      "CONVERT(`cast_t`.`id`, BINARY(8))",
    );
  });
});
