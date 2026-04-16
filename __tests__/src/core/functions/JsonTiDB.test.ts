import { describe, expect, it } from "vitest";
import { getTableColumns } from "drizzle-orm";
import { CasingCache } from "drizzle-orm/casing";
import { int, json, mysqlTable } from "drizzle-orm/mysql-core";
import {
  jsonArray,
  jsonAppend,
  jsonArrayAppend,
  jsonArrayInsert,
  jsonContains,
  jsonContainsPath,
  jsonExtract,
  jsonGet,
  jsonGetUnquote,
  jsonInsert,
  jsonKeys,
  jsonMerge,
  jsonMergePatch,
  jsonMergePreserve,
  jsonObject,
  jsonOverlaps,
  jsonQuote,
  jsonDepth,
  jsonLength,
  jsonPretty,
  jsonRemove,
  jsonReplace,
  jsonSearch,
  jsonSet,
  jsonStorageFree,
  jsonStorageSize,
  jsonType,
  jsonUnquote,
  jsonValid,
  jsonArrayAgg,
  jsonObjectAgg,
  jsonSchemaValid,
  memberOf,
} from "../../../../src/core/functions/JsonTiDB";

const t = mysqlTable("json_t", {
  id: int("id").primaryKey(),
  j: json("j").$type<Record<string, unknown>>(),
});

const cols = getTableColumns(t);

const mysqlQueryConfig = {
  casing: new CasingCache(undefined),
  escapeName: (name: string) => `\`${name.replace(/`/g, "``")}\``,
  escapeParam: (_num: number) => `?`,
  escapeString: (str: string) => `'${str.replace(/'/g, "''")}'`,
};

describe("JsonTiDB SQL fragments (toQuery)", () => {
  it("JSON_ARRAY", () => {
    expect(jsonArray().toQuery(mysqlQueryConfig).sql).toBe("JSON_ARRAY()");
    const q = jsonArray(1, 2, "foo").toQuery(mysqlQueryConfig);
    expect(q.sql).toBe("JSON_ARRAY(?, ?, ?)");
    expect(q.params).toEqual([1, 2, "foo"]);
  });

  it("JSON_OBJECT", () => {
    expect(jsonObject().toQuery(mysqlQueryConfig).sql).toBe("JSON_OBJECT()");
    const q = jsonObject("database", "TiDB", "distributed", true).toQuery(mysqlQueryConfig);
    expect(q.sql).toBe("JSON_OBJECT(?, ?, ?, ?)");
    expect(q.params).toEqual(["database", "TiDB", "distributed", true]);
  });

  it("JSON_OBJECT rejects odd argument count", () => {
    expect(() => jsonObject("a")).toThrow(/even number/);
  });

  it("JSON_QUOTE and column ref", () => {
    expect(jsonQuote("x").toQuery(mysqlQueryConfig).sql).toBe("JSON_QUOTE(?)");
    expect(jsonQuote(cols.j).toQuery(mysqlQueryConfig).sql).toBe("JSON_QUOTE(`json_t`.`j`)");
  });

  it("JSON_CONTAINS and JSON_CONTAINS_PATH", () => {
    expect(jsonContains(cols.j, '"bar"').toQuery(mysqlQueryConfig).sql).toBe(
      "JSON_CONTAINS(`json_t`.`j`, ?)",
    );
    expect(jsonContains(cols.j, '"bar"', "$.foo").toQuery(mysqlQueryConfig).sql).toBe(
      "JSON_CONTAINS(`json_t`.`j`, ?, ?)",
    );

    expect(jsonContainsPath(cols.j, "all", "$.foo", "$.aaa").toQuery(mysqlQueryConfig).sql).toBe(
      "JSON_CONTAINS_PATH(`json_t`.`j`, ?, ?, ?)",
    );
    expect(() => jsonContainsPath(cols.j, "one")).toThrow(/at least one JSON path/);
  });

  it("JSON_EXTRACT and arrow aliases", () => {
    expect(jsonExtract(cols.j, "$.foo").toQuery(mysqlQueryConfig).sql).toBe(
      "JSON_EXTRACT(`json_t`.`j`, ?)",
    );
    expect(jsonExtract(cols.j, "$.foo", "$.aaa").toQuery(mysqlQueryConfig).sql).toBe(
      "JSON_EXTRACT(`json_t`.`j`, ?, ?)",
    );
    expect(() => jsonExtract(cols.j)).toThrow(/at least one JSON path/);

    expect(jsonGet(cols.j, "$.foo").toQuery(mysqlQueryConfig).sql).toBe("`json_t`.`j` -> ?");
    expect(jsonGetUnquote(cols.j, "$.foo").toQuery(mysqlQueryConfig).sql).toBe(
      "`json_t`.`j` ->> ?",
    );
  });

  it("JSON_KEYS / JSON_SEARCH / MEMBER OF / JSON_OVERLAPS", () => {
    expect(jsonKeys(cols.j).toQuery(mysqlQueryConfig).sql).toBe("JSON_KEYS(`json_t`.`j`)");
    expect(jsonKeys(cols.j, "$.name").toQuery(mysqlQueryConfig).sql).toBe(
      "JSON_KEYS(`json_t`.`j`, ?)",
    );

    expect(jsonSearch(cols.j, "one", "cc").toQuery(mysqlQueryConfig).sql).toBe(
      "JSON_SEARCH(`json_t`.`j`, ?, ?)",
    );
    expect(jsonSearch(cols.j, "all", "cc", "\\\\", "$.a").toQuery(mysqlQueryConfig).sql).toBe(
      "JSON_SEARCH(`json_t`.`j`, ?, ?, ?, ?)",
    );
    expect(jsonSearch(cols.j, "all", "cc", undefined, "$.a").toQuery(mysqlQueryConfig).sql).toBe(
      "JSON_SEARCH(`json_t`.`j`, ?, ?, NULL, ?)",
    );

    expect(memberOf("🍍", cols.j).toQuery(mysqlQueryConfig).sql).toBe("? MEMBER OF (`json_t`.`j`)");
    expect(jsonOverlaps(cols.j, cols.j).toQuery(mysqlQueryConfig).sql).toBe(
      "JSON_OVERLAPS(`json_t`.`j`, `json_t`.`j`)",
    );
  });

  it("JSON modify functions with path/value pairs", () => {
    expect(jsonArrayAppend(cols.j, "$.a", 1).toQuery(mysqlQueryConfig).sql).toBe(
      "JSON_ARRAY_APPEND(`json_t`.`j`, ?, ?)",
    );
    expect(jsonAppend(cols.j, "$.a", 1).toQuery(mysqlQueryConfig).sql).toBe(
      "JSON_ARRAY_APPEND(`json_t`.`j`, ?, ?)",
    );
    expect(jsonArrayInsert(cols.j, "$[0]", "x").toQuery(mysqlQueryConfig).sql).toBe(
      "JSON_ARRAY_INSERT(`json_t`.`j`, ?, ?)",
    );
    expect(jsonInsert(cols.j, "$.branch", "main").toQuery(mysqlQueryConfig).sql).toBe(
      "JSON_INSERT(`json_t`.`j`, ?, ?)",
    );
    expect(jsonReplace(cols.j, "$.version", 2).toQuery(mysqlQueryConfig).sql).toBe(
      "JSON_REPLACE(`json_t`.`j`, ?, ?)",
    );
    expect(jsonSet(cols.j, "$.version", 2).toQuery(mysqlQueryConfig).sql).toBe(
      "JSON_SET(`json_t`.`j`, ?, ?)",
    );
    expect(() => jsonSet(cols.j, "$.a")).toThrow(/path\/value pairs/);
  });

  it("JSON merge and remove/unquote", () => {
    expect(jsonMergePatch('{"a":1}', '{"b":2}').toQuery(mysqlQueryConfig).sql).toBe(
      "JSON_MERGE_PATCH(?, ?)",
    );
    expect(jsonMergePreserve('{"a":1}', '{"a":2}').toQuery(mysqlQueryConfig).sql).toBe(
      "JSON_MERGE_PRESERVE(?, ?)",
    );
    expect(jsonMerge('{"a":1}', '{"a":2}').toQuery(mysqlQueryConfig).sql).toBe(
      "JSON_MERGE_PRESERVE(?, ?)",
    );
    expect(() => jsonMergePatch('{"a":1}')).toThrow(/at least two JSON documents/);

    expect(jsonRemove(cols.j, "$.b", "$.c").toQuery(mysqlQueryConfig).sql).toBe(
      "JSON_REMOVE(`json_t`.`j`, ?, ?)",
    );
    expect(() => jsonRemove(cols.j)).toThrow(/at least one JSON path/);

    expect(jsonUnquote('"foo"').toQuery(mysqlQueryConfig).sql).toBe("JSON_UNQUOTE(?)");
  });

  it("JSON return/validate functions", () => {
    expect(jsonDepth(cols.j).toQuery(mysqlQueryConfig).sql).toBe("JSON_DEPTH(`json_t`.`j`)");
    expect(jsonLength(cols.j).toQuery(mysqlQueryConfig).sql).toBe("JSON_LENGTH(`json_t`.`j`)");
    expect(jsonLength(cols.j, "$.weather").toQuery(mysqlQueryConfig).sql).toBe(
      "JSON_LENGTH(`json_t`.`j`, ?)",
    );
    expect(jsonType(cols.j).toQuery(mysqlQueryConfig).sql).toBe("JSON_TYPE(`json_t`.`j`)");
    expect(jsonValid('{"foo":"bar"}').toQuery(mysqlQueryConfig).sql).toBe("JSON_VALID(?)");
  });

  it("JSON utility functions", () => {
    expect(jsonPretty(cols.j).toQuery(mysqlQueryConfig).sql).toBe("JSON_PRETTY(`json_t`.`j`)");
    expect(jsonStorageFree(cols.j).toQuery(mysqlQueryConfig).sql).toBe(
      "JSON_STORAGE_FREE(`json_t`.`j`)",
    );
    expect(jsonStorageSize(cols.j).toQuery(mysqlQueryConfig).sql).toBe(
      "JSON_STORAGE_SIZE(`json_t`.`j`)",
    );
  });

  it("JSON aggregate functions", () => {
    expect(jsonArrayAgg(cols.j).toQuery(mysqlQueryConfig).sql).toBe("JSON_ARRAYAGG(`json_t`.`j`)");
    expect(jsonObjectAgg("k", cols.j).toQuery(mysqlQueryConfig).sql).toBe(
      "JSON_OBJECTAGG(?, `json_t`.`j`)",
    );
  });

  it("JSON schema validation function", () => {
    const q = jsonSchemaValid('{"type":"object"}', cols.j).toQuery(mysqlQueryConfig);
    expect(q.sql).toBe("JSON_SCHEMA_VALID(?, `json_t`.`j`)");
    expect(q.params).toEqual(['{"type":"object"}']);
  });
});
