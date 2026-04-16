import { describe, expect, it } from "vitest";
import { getTableColumns, sql as dsql } from "drizzle-orm";
import { CasingCache } from "drizzle-orm/casing";
import { int, mysqlTable, varchar } from "drizzle-orm/mysql-core";
import {
  ascii,
  charCodes,
  concat,
  concatWs,
  exportSet,
  locate,
  regexpInstr,
  regexpReplace,
  sqlLike,
  sqlRegExp,
  substr,
  substring,
  weightStringAsChar,
} from "../../../../src/core/functions/StringTiDB";

const t = mysqlTable("str_t", {
  id: int("id").primaryKey(),
  name: varchar("name", { length: 64 }),
});

const cols = getTableColumns(t);

const mysqlQueryConfig = {
  casing: new CasingCache(undefined),
  escapeName: (name: string) => `\`${name.replace(/`/g, "``")}\``,
  escapeParam: (_num: number) => `?`,
  escapeString: (str: string) => `'${str.replace(/'/g, "''")}'`,
};

describe("StringTiDB SQL fragments (toQuery)", () => {
  it("ascii / charCodes / concat / concatWs compile with placeholders", () => {
    expect(ascii("A").toQuery(mysqlQueryConfig).sql).toBe("ASCII(?)");
    expect(ascii("A").toQuery(mysqlQueryConfig).params).toEqual(["A"]);

    const ch = charCodes(65, 66).toQuery(mysqlQueryConfig);
    expect(ch.sql).toBe("CHAR(?, ?)");
    expect(ch.params).toEqual([65, 66]);

    const c = concat("Ti", cols.name).toQuery(mysqlQueryConfig);
    expect(c.sql).toBe("CONCAT(?, `str_t`.`name`)");
    expect(c.params).toEqual(["Ti"]);

    const ws = concatWs(",", "a", "b").toQuery(mysqlQueryConfig);
    expect(ws.sql).toBe("CONCAT_WS(?, ?, ?)");
    expect(ws.params).toEqual([",", "a", "b"]);
  });

  it("exportSet optional arguments", () => {
    const a = exportSet(dsql`b'101'`, "ON", "off").toQuery(mysqlQueryConfig);
    expect(a.sql).toBe("EXPORT_SET(b'101', ?, ?)");
    expect(a.params).toEqual(["ON", "off"]);

    const b = exportSet(5, "x", "_", "|", 8).toQuery(mysqlQueryConfig);
    expect(b.sql).toBe("EXPORT_SET(?, ?, ?, ?, ?)");
    expect(b.params).toEqual([5, "x", "_", "|", 8]);
  });

  it("locate with optional position", () => {
    expect(locate("bar", "foobar").toQuery(mysqlQueryConfig).sql).toBe("LOCATE(?, ?)");
    expect(locate("bar", "foobar", 5).toQuery(mysqlQueryConfig).sql).toBe("LOCATE(?, ?, ?)");
  });

  it("substring two- and three-argument forms", () => {
    expect(substring("abcdef", 2).toQuery(mysqlQueryConfig).sql).toBe("SUBSTRING(?, ?)");
    expect(substring("abcdef", 2, 3).toQuery(mysqlQueryConfig).sql).toBe("SUBSTRING(?, ?, ?)");
  });

  it("substr emits SUBSTR", () => {
    expect(substr("abcdef", 2).toQuery(mysqlQueryConfig).sql).toBe("SUBSTR(?, ?)");
    expect(substr("abcdef", 2, 3).toQuery(mysqlQueryConfig).sql).toBe("SUBSTR(?, ?, ?)");
  });

  it("regexp helpers compile", () => {
    expect(regexpInstr("abc", "^a").toQuery(mysqlQueryConfig).sql).toBe("REGEXP_INSTR(?, ?)");
    expect(
      regexpInstr("abc", "^a", {
        start: 1,
        occurrence: 2,
        returnOption: 0,
        matchType: "i",
      }).toQuery(mysqlQueryConfig).sql,
    ).toBe("REGEXP_INSTR(?, ?, ?, ?, ?, ?)");

    expect(regexpReplace("TooDB", "o{2}", "i").toQuery(mysqlQueryConfig).sql).toBe(
      "REGEXP_REPLACE(?, ?, ?)",
    );
    expect(
      regexpReplace("TooDB", "o", "i", {
        start: 1,
        occurrence: 2,
        matchType: "i",
      }).toQuery(mysqlQueryConfig).sql,
    ).toBe("REGEXP_REPLACE(?, ?, ?, ?, ?, ?)");
  });

  it("LIKE and REGEXP infix operators", () => {
    const likeQ = sqlLike(cols.name, "%tidb%").toQuery(mysqlQueryConfig);
    expect(likeQ.sql).toBe("`str_t`.`name` LIKE ?");
    expect(likeQ.params).toEqual(["%tidb%"]);

    const re = sqlRegExp(cols.name, "^Ti").toQuery(mysqlQueryConfig);
    expect(re.sql).toBe("`str_t`.`name` REGEXP ?");
    expect(re.params).toEqual(["^Ti"]);
  });

  it("weightStringAsChar embeds AS CHAR", () => {
    const w = weightStringAsChar("ab", 3).toQuery(mysqlQueryConfig);
    expect(w.sql).toBe("WEIGHT_STRING(? AS CHAR(?))");
    expect(w.params).toEqual(["ab", 3]);
  });
});
