import { sql, type SQL, type AnyColumn } from "drizzle-orm";

/**
 * TiDB / MySQL JSON functions that **create** JSON values, for Drizzle `sql` fragments.
 * @see https://docs.pingcap.com/tidb/stable/json-functions/json-functions-create
 */
export type JsonSqlInput = SQL | AnyColumn | string | number | boolean;
export type JsonContainsPathMode = "one" | "all";
export type JsonSearchMode = "one" | "all";

function assertPathValuePairs(functionName: string, args: JsonSqlInput[]): void {
  if (args.length === 0 || args.length % 2 !== 0) {
    throw new Error(`${functionName} expects path/value pairs`);
  }
}

/** `JSON_ARRAY([val ...])` */
export function jsonArray(...values: JsonSqlInput[]): SQL {
  if (values.length === 0) {
    return sql`JSON_ARRAY()`;
  }
  return sql`JSON_ARRAY(${sql.join(
    values.map((v) => sql`${v}`),
    sql`, `,
  )})`;
}

/**
 * `JSON_OBJECT([key, val ...])` — arguments must alternate key, value (even count).
 * @throws If the number of arguments is odd */
export function jsonObject(...keyValues: JsonSqlInput[]): SQL {
  if (keyValues.length % 2 !== 0) {
    throw new Error("JSON_OBJECT expects an even number of arguments (key, value pairs)");
  }
  if (keyValues.length === 0) {
    return sql`JSON_OBJECT()`;
  }
  return sql`JSON_OBJECT(${sql.join(
    keyValues.map((kv) => sql`${kv}`),
    sql`, `,
  )})`;
}

/** `JSON_QUOTE(str)` */
export function jsonQuote(str: JsonSqlInput): SQL {
  return sql`JSON_QUOTE(${str})`;
}

/** `JSON_CONTAINS(json_doc, candidate [, path])` */
export function jsonContains(
  jsonDoc: JsonSqlInput,
  candidate: JsonSqlInput,
  path?: JsonSqlInput,
): SQL {
  if (path !== undefined) {
    return sql`JSON_CONTAINS(${jsonDoc}, ${candidate}, ${path})`;
  }
  return sql`JSON_CONTAINS(${jsonDoc}, ${candidate})`;
}

/** `JSON_CONTAINS_PATH(json_doc, one_or_all, path [, path ...])` */
export function jsonContainsPath(
  jsonDoc: JsonSqlInput,
  mode: JsonContainsPathMode,
  ...paths: JsonSqlInput[]
): SQL {
  if (paths.length === 0) {
    throw new Error("JSON_CONTAINS_PATH expects at least one JSON path");
  }
  return sql`JSON_CONTAINS_PATH(${jsonDoc}, ${mode}, ${sql.join(
    paths.map((p) => sql`${p}`),
    sql`, `,
  )})`;
}

/** `JSON_EXTRACT(json_doc, path [, path ...])` */
export function jsonExtract(jsonDoc: JsonSqlInput, ...paths: JsonSqlInput[]): SQL {
  if (paths.length === 0) {
    throw new Error("JSON_EXTRACT expects at least one JSON path");
  }
  return sql`JSON_EXTRACT(${jsonDoc}, ${sql.join(
    paths.map((p) => sql`${p}`),
    sql`, `,
  )})`;
}

/** `column -> path` alias of `JSON_EXTRACT(column, path)` */
export function jsonGet(jsonDoc: JsonSqlInput, path: JsonSqlInput): SQL {
  return sql`${jsonDoc} -> ${path}`;
}

/** `column ->> path` alias of `JSON_UNQUOTE(JSON_EXTRACT(column, path))` */
export function jsonGetUnquote(jsonDoc: JsonSqlInput, path: JsonSqlInput): SQL {
  return sql`${jsonDoc} ->> ${path}`;
}

/** `JSON_KEYS(json_doc [, path])` */
export function jsonKeys(jsonDoc: JsonSqlInput, path?: JsonSqlInput): SQL {
  if (path !== undefined) {
    return sql`JSON_KEYS(${jsonDoc}, ${path})`;
  }
  return sql`JSON_KEYS(${jsonDoc})`;
}

/** `JSON_SEARCH(json_doc, one_or_all, str [, escape_char [, path ...]])` */
export function jsonSearch(
  jsonDoc: JsonSqlInput,
  mode: JsonSearchMode,
  searchStr: JsonSqlInput,
  escapeChar?: JsonSqlInput,
  ...paths: JsonSqlInput[]
): SQL {
  if (escapeChar !== undefined) {
    return sql`JSON_SEARCH(${jsonDoc}, ${mode}, ${searchStr}, ${escapeChar}${sql.join(
      paths.map((p) => sql`, ${p}`),
      sql.empty(),
    )})`;
  }
  if (paths.length > 0) {
    return sql`JSON_SEARCH(${jsonDoc}, ${mode}, ${searchStr}, NULL, ${sql.join(
      paths.map((p) => sql`${p}`),
      sql`, `,
    )})`;
  }
  return sql`JSON_SEARCH(${jsonDoc}, ${mode}, ${searchStr})`;
}

/** `value MEMBER OF (json_array)` */
export function memberOf(value: JsonSqlInput, jsonArrayExpr: JsonSqlInput): SQL {
  return sql`${value} MEMBER OF (${jsonArrayExpr})`;
}

/** `JSON_OVERLAPS(json_doc1, json_doc2)` */
export function jsonOverlaps(left: JsonSqlInput, right: JsonSqlInput): SQL {
  return sql`JSON_OVERLAPS(${left}, ${right})`;
}

/** `JSON_APPEND(...)` — deprecated alias for `JSON_ARRAY_APPEND(...)` */
export function jsonAppend(jsonDoc: JsonSqlInput, ...pathValues: JsonSqlInput[]): SQL {
  return jsonArrayAppend(jsonDoc, ...pathValues);
}

/** `JSON_ARRAY_APPEND(json_doc, path, value [, path, value] ...)` */
export function jsonArrayAppend(jsonDoc: JsonSqlInput, ...pathValues: JsonSqlInput[]): SQL {
  assertPathValuePairs("JSON_ARRAY_APPEND", pathValues);
  return sql`JSON_ARRAY_APPEND(${jsonDoc}, ${sql.join(
    pathValues.map((v) => sql`${v}`),
    sql`, `,
  )})`;
}

/** `JSON_ARRAY_INSERT(json_doc, path, value [, path, value] ...)` */
export function jsonArrayInsert(jsonDoc: JsonSqlInput, ...pathValues: JsonSqlInput[]): SQL {
  assertPathValuePairs("JSON_ARRAY_INSERT", pathValues);
  return sql`JSON_ARRAY_INSERT(${jsonDoc}, ${sql.join(
    pathValues.map((v) => sql`${v}`),
    sql`, `,
  )})`;
}

/** `JSON_INSERT(json_doc, path, value [, path, value] ...)` */
export function jsonInsert(jsonDoc: JsonSqlInput, ...pathValues: JsonSqlInput[]): SQL {
  assertPathValuePairs("JSON_INSERT", pathValues);
  return sql`JSON_INSERT(${jsonDoc}, ${sql.join(
    pathValues.map((v) => sql`${v}`),
    sql`, `,
  )})`;
}

/** `JSON_MERGE_PATCH(json_doc, json_doc [, json_doc] ...)` */
export function jsonMergePatch(first: JsonSqlInput, ...docs: JsonSqlInput[]): SQL {
  if (docs.length === 0) {
    throw new Error("JSON_MERGE_PATCH expects at least two JSON documents");
  }
  return sql`JSON_MERGE_PATCH(${first}, ${sql.join(
    docs.map((d) => sql`${d}`),
    sql`, `,
  )})`;
}

/** `JSON_MERGE_PRESERVE(json_doc, json_doc [, json_doc] ...)` */
export function jsonMergePreserve(first: JsonSqlInput, ...docs: JsonSqlInput[]): SQL {
  if (docs.length === 0) {
    throw new Error("JSON_MERGE_PRESERVE expects at least two JSON documents");
  }
  return sql`JSON_MERGE_PRESERVE(${first}, ${sql.join(
    docs.map((d) => sql`${d}`),
    sql`, `,
  )})`;
}

/** `JSON_MERGE(...)` — deprecated alias of `JSON_MERGE_PRESERVE(...)` */
export function jsonMerge(first: JsonSqlInput, ...docs: JsonSqlInput[]): SQL {
  return jsonMergePreserve(first, ...docs);
}

/** `JSON_REMOVE(json_doc, path [, path] ...)` */
export function jsonRemove(jsonDoc: JsonSqlInput, ...paths: JsonSqlInput[]): SQL {
  if (paths.length === 0) {
    throw new Error("JSON_REMOVE expects at least one JSON path");
  }
  return sql`JSON_REMOVE(${jsonDoc}, ${sql.join(
    paths.map((p) => sql`${p}`),
    sql`, `,
  )})`;
}

/** `JSON_REPLACE(json_doc, path, value [, path, value] ...)` */
export function jsonReplace(jsonDoc: JsonSqlInput, ...pathValues: JsonSqlInput[]): SQL {
  assertPathValuePairs("JSON_REPLACE", pathValues);
  return sql`JSON_REPLACE(${jsonDoc}, ${sql.join(
    pathValues.map((v) => sql`${v}`),
    sql`, `,
  )})`;
}

/** `JSON_SET(json_doc, path, value [, path, value] ...)` */
export function jsonSet(jsonDoc: JsonSqlInput, ...pathValues: JsonSqlInput[]): SQL {
  assertPathValuePairs("JSON_SET", pathValues);
  return sql`JSON_SET(${jsonDoc}, ${sql.join(
    pathValues.map((v) => sql`${v}`),
    sql`, `,
  )})`;
}

/** `JSON_UNQUOTE(json)` */
export function jsonUnquote(value: JsonSqlInput): SQL {
  return sql`JSON_UNQUOTE(${value})`;
}

/** `JSON_DEPTH(json_doc)` */
export function jsonDepth(jsonDoc: JsonSqlInput): SQL {
  return sql`JSON_DEPTH(${jsonDoc})`;
}

/** `JSON_LENGTH(json_doc [, path])` */
export function jsonLength(jsonDoc: JsonSqlInput, path?: JsonSqlInput): SQL {
  if (path !== undefined) {
    return sql`JSON_LENGTH(${jsonDoc}, ${path})`;
  }
  return sql`JSON_LENGTH(${jsonDoc})`;
}

/** `JSON_TYPE(json_val)` */
export function jsonType(jsonVal: JsonSqlInput): SQL {
  return sql`JSON_TYPE(${jsonVal})`;
}

/** `JSON_VALID(str)` */
export function jsonValid(str: JsonSqlInput): SQL {
  return sql`JSON_VALID(${str})`;
}

/** `JSON_PRETTY(json_doc)` */
export function jsonPretty(jsonDoc: JsonSqlInput): SQL {
  return sql`JSON_PRETTY(${jsonDoc})`;
}

/** `JSON_STORAGE_FREE(json_doc)` */
export function jsonStorageFree(jsonDoc: JsonSqlInput): SQL {
  return sql`JSON_STORAGE_FREE(${jsonDoc})`;
}

/** `JSON_STORAGE_SIZE(json_doc)` */
export function jsonStorageSize(jsonDoc: JsonSqlInput): SQL {
  return sql`JSON_STORAGE_SIZE(${jsonDoc})`;
}

/** `JSON_ARRAYAGG(expr)` */
export function jsonArrayAgg(expr: JsonSqlInput): SQL {
  return sql`JSON_ARRAYAGG(${expr})`;
}

/** `JSON_OBJECTAGG(key, value)` */
export function jsonObjectAgg(key: JsonSqlInput, value: JsonSqlInput): SQL {
  return sql`JSON_OBJECTAGG(${key}, ${value})`;
}

/**
 * `JSON_SCHEMA_VALID(schema, json_doc)`
 *
 * TiDB validates schema strictly and can error on invalid schema documents.
 */
export function jsonSchemaValid(schema: JsonSqlInput, jsonDoc: JsonSqlInput): SQL {
  return sql`JSON_SCHEMA_VALID(${schema}, ${jsonDoc})`;
}
