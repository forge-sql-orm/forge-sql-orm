import { describe, expect, it } from "vitest";
import { getTableColumns, sql as dsql, type SQL } from "drizzle-orm";
import { CasingCache } from "drizzle-orm/casing";
import { int, mysqlTable, varchar } from "drizzle-orm/mysql-core";
import {
  ascii,
  bin,
  bitLength,
  charCodes,
  charLength,
  characterLength,
  concat,
  concatWs,
  elt,
  exportSet,
  field,
  findInSet,
  formatSql,
  fromBase64,
  hex,
  insert,
  instr,
  lcase,
  left,
  length,
  locate,
  lower,
  lpad,
  ltrim,
  makeSet,
  mid,
  oct,
  octetLength,
  ord,
  position,
  quote,
  regexpInstr,
  regexpLike,
  regexpReplace,
  regexpSubstr,
  repeat,
  replace,
  reverse,
  right,
  rpad,
  rtrim,
  space,
  strcmp,
  sqlLike,
  sqlLikeEscape,
  sqlNotLike,
  sqlNotLikeEscape,
  sqlNotRegExp,
  sqlRegExp,
  sqlRLike,
  substr,
  substring,
  substringIndex,
  toBase64,
  translate,
  trim,
  trimBoth,
  trimLeadingFrom,
  trimTrailingFrom,
  ucase,
  unhex,
  upper,
  weightString,
  weightStringAsBinary,
  weightStringAsChar,
} from "../../../../src";

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

  it("smoke: invokes each StringTiDB export for coverage", () => {
    const s = cols.name;
    const q = mysqlQueryConfig;
    const run = (x: SQL) => expect(x.toQuery(q).sql.length).toBeGreaterThan(0);

    run(bin(3));
    run(bitLength("x"));
    run(charLength("x"));
    run(characterLength("x"));
    run(elt(1, "a", "b"));
    run(exportSet(1, "a", "b", ","));
    run(field("a", "b", "a"));
    run(findInSet("a", "a,b"));
    run(formatSql("1.2", "2", "en_US"));
    run(fromBase64("YWI="));
    run(hex("ab"));
    run(insert("abcd", 2, 2, "xx"));
    run(instr("foobar", "bar"));
    run(lcase("X"));
    run(left("abc", 2));
    run(length("x"));
    run(lower("X"));
    run(lpad("a", 5, "."));
    run(ltrim(" x"));
    run(makeSet(3, "a", "b", "c"));
    run(mid("abcdef", 2));
    run(mid("abcdef", 2, 3));
    run(oct(8));
    run(octetLength("x"));
    run(ord("A"));
    run(position("b", "abc"));
    run(quote("a'b"));
    run(regexpLike("a", "^a"));
    run(regexpLike("a", "^a", "c"));
    run(regexpSubstr("abc", "a"));
    run(regexpSubstr("abc", "a", 1));
    run(regexpSubstr("abc", "a", 1, 1));
    run(regexpSubstr("abc", "a", 1, 1, "c"));
    run(repeat("a", 3));
    run(replace("aba", "a", "b"));
    run(reverse("ab"));
    run(right("abc", 2));
    run(rpad("a", 5, "."));
    run(rtrim("x "));
    run(space(2));
    run(strcmp("a", "b"));
    run(sqlLikeEscape(s, "a%", "\\"));
    run(sqlNotLike(s, "x"));
    run(sqlNotLikeEscape(s, "x", "\\"));
    run(sqlNotRegExp(s, "^z"));
    run(sqlRLike(s, ".*"));
    run(substringIndex("a.b.c", ".", 2));
    run(toBase64("ab"));
    run(translate("abc", "a", "z"));
    run(trim(" x "));
    run(trimBoth("xxabcxx", "x"));
    run(trimLeadingFrom("xxabc", "x"));
    run(trimTrailingFrom("abcxx", "x"));
    run(ucase("x"));
    run(unhex("6162"));
    run(upper("x"));
    run(weightString("ab"));
    run(weightStringAsBinary("ab", 4));
  });
});
