import { sql, type SQL, type AnyColumn } from "drizzle-orm";

/**
 * TiDB / MySQL string expressions for use inside Drizzle `sql` fragments.
 * Mirrors TiDB string functions documented at https://docs.pingcap.com/tidb/stable/string-functions
 */
export type StringSqlInput = SQL | AnyColumn | string | number | boolean;

function joinArgs(parts: StringSqlInput[]): SQL {
  return sql.join(
    parts.map((p) => sql`${p}`),
    sql`, `,
  );
}

/** `ASCII(str)` */
export function ascii(str: StringSqlInput): SQL {
  return sql`ASCII(${str})`;
}

/** `BIN(expr)` */
export function bin(expr: StringSqlInput): SQL {
  return sql`BIN(${expr})`;
}

/** `BIT_LENGTH(str)` */
export function bitLength(str: StringSqlInput): SQL {
  return sql`BIT_LENGTH(${str})`;
}

/** `CHAR(code [, ...codes])` */
export function charCodes(...codes: number[]): SQL {
  return sql`CHAR(${joinArgs(codes)})`;
}

/** `CHAR_LENGTH(str)` */
export function charLength(str: StringSqlInput): SQL {
  return sql`CHAR_LENGTH(${str})`;
}

/** Synonym for `CHAR_LENGTH` — `CHARACTER_LENGTH(str)` */
export function characterLength(str: StringSqlInput): SQL {
  return sql`CHARACTER_LENGTH(${str})`;
}

/** `CONCAT(str1, str2, ...)` */
export function concat(...parts: StringSqlInput[]): SQL {
  return sql`CONCAT(${joinArgs(parts)})`;
}

/** `CONCAT_WS(separator, str1, str2, ...)` */
export function concatWs(separator: StringSqlInput, ...parts: StringSqlInput[]): SQL {
  return sql`CONCAT_WS(${joinArgs([separator, ...parts])})`;
}

/** `ELT(index, str1, str2, ...)` */
export function elt(index: StringSqlInput, ...choices: StringSqlInput[]): SQL {
  return sql`ELT(${joinArgs([index, ...choices])})`;
}

/** `EXPORT_SET(bits, on, off [, separator [, number_of_bits]])` */
export function exportSet(
  bits: StringSqlInput,
  on: StringSqlInput,
  off: StringSqlInput,
  separator?: StringSqlInput,
  numberOfBits?: StringSqlInput,
): SQL {
  if (separator !== undefined && numberOfBits !== undefined) {
    return sql`EXPORT_SET(${bits}, ${on}, ${off}, ${separator}, ${numberOfBits})`;
  }
  if (separator !== undefined) {
    return sql`EXPORT_SET(${bits}, ${on}, ${off}, ${separator})`;
  }
  return sql`EXPORT_SET(${bits}, ${on}, ${off})`;
}

/** `FIELD(needle, str1, str2, ...)` */
export function field(needle: StringSqlInput, ...list: StringSqlInput[]): SQL {
  return sql`FIELD(${joinArgs([needle, ...list])})`;
}

/** `FIND_IN_SET(str, strlist)` */
export function findInSet(str: StringSqlInput, strlist: StringSqlInput): SQL {
  return sql`FIND_IN_SET(${str}, ${strlist})`;
}

/** `FORMAT(x, d [, locale])` */
export function formatSql(x: StringSqlInput, d: StringSqlInput, locale?: StringSqlInput): SQL {
  if (locale !== undefined) {
    return sql`FORMAT(${x}, ${d}, ${locale})`;
  }
  return sql`FORMAT(${x}, ${d})`;
}

/** `FROM_BASE64(str)` */
export function fromBase64(str: StringSqlInput): SQL {
  return sql`FROM_BASE64(${str})`;
}

/** `HEX(expr)` */
export function hex(expr: StringSqlInput): SQL {
  return sql`HEX(${expr})`;
}

/** `INSERT(str, pos, len, newstr)` */
export function insert(
  str: StringSqlInput,
  pos: StringSqlInput,
  len: StringSqlInput,
  newstr: StringSqlInput,
): SQL {
  return sql`INSERT(${str}, ${pos}, ${len}, ${newstr})`;
}

/** `INSTR(str, substr)` */
export function instr(str: StringSqlInput, substr: StringSqlInput): SQL {
  return sql`INSTR(${str}, ${substr})`;
}

/** `LCASE(str)` — synonym for `LOWER` */
export function lcase(str: StringSqlInput): SQL {
  return sql`LCASE(${str})`;
}

/** `LEFT(str, len)` */
export function left(str: StringSqlInput, len: StringSqlInput): SQL {
  return sql`LEFT(${str}, ${len})`;
}

/** `LENGTH(str)` */
export function length(str: StringSqlInput): SQL {
  return sql`LENGTH(${str})`;
}

/** `expr LIKE pat` */
export function sqlLike(expr: StringSqlInput, pat: StringSqlInput): SQL {
  return sql`${expr} LIKE ${pat}`;
}

/** `expr LIKE pat ESCAPE esc` */
export function sqlLikeEscape(expr: StringSqlInput, pat: StringSqlInput, esc: StringSqlInput): SQL {
  return sql`${expr} LIKE ${pat} ESCAPE ${esc}`;
}

/** `expr NOT LIKE pat` */
export function sqlNotLike(expr: StringSqlInput, pat: StringSqlInput): SQL {
  return sql`${expr} NOT LIKE ${pat}`;
}

/** `expr NOT LIKE pat ESCAPE esc` */
export function sqlNotLikeEscape(
  expr: StringSqlInput,
  pat: StringSqlInput,
  esc: StringSqlInput,
): SQL {
  return sql`${expr} NOT LIKE ${pat} ESCAPE ${esc}`;
}

/** `LOCATE(substr, str [, pos])` */
export function locate(substr: StringSqlInput, str: StringSqlInput, pos?: StringSqlInput): SQL {
  if (pos !== undefined) {
    return sql`LOCATE(${substr}, ${str}, ${pos})`;
  }
  return sql`LOCATE(${substr}, ${str})`;
}

/** `LOWER(str)` */
export function lower(str: StringSqlInput): SQL {
  return sql`LOWER(${str})`;
}

/** `LPAD(str, len, padstr)` */
export function lpad(str: StringSqlInput, len: StringSqlInput, padstr: StringSqlInput): SQL {
  return sql`LPAD(${str}, ${len}, ${padstr})`;
}

/** `LTRIM(str)` */
export function ltrim(str: StringSqlInput): SQL {
  return sql`LTRIM(${str})`;
}

/** `MAKE_SET(bits, str1, str2, ...)` */
export function makeSet(bits: StringSqlInput, ...strs: StringSqlInput[]): SQL {
  return sql`MAKE_SET(${joinArgs([bits, ...strs])})`;
}

/** `MID(str, pos [, len])` — TiDB v8.4+ supports the two-argument form */
export function mid(str: StringSqlInput, pos: StringSqlInput, len?: StringSqlInput): SQL {
  if (len !== undefined) {
    return sql`MID(${str}, ${pos}, ${len})`;
  }
  return sql`MID(${str}, ${pos})`;
}

/** `expr REGEXP pat` */
export function sqlRegExp(expr: StringSqlInput, pat: StringSqlInput): SQL {
  return sql`${expr} REGEXP ${pat}`;
}

/** `expr NOT REGEXP pat` */
export function sqlNotRegExp(expr: StringSqlInput, pat: StringSqlInput): SQL {
  return sql`${expr} NOT REGEXP ${pat}`;
}

/** Synonym for `sqlRegExp` — `expr RLIKE pat` */
export function sqlRLike(expr: StringSqlInput, pat: StringSqlInput): SQL {
  return sql`${expr} RLIKE ${pat}`;
}

/** `OCT(n)` */
export function oct(n: StringSqlInput): SQL {
  return sql`OCT(${n})`;
}

/** `OCTET_LENGTH(str)` — synonym for `LENGTH` */
export function octetLength(str: StringSqlInput): SQL {
  return sql`OCTET_LENGTH(${str})`;
}

/** `ORD(str)` */
export function ord(str: StringSqlInput): SQL {
  return sql`ORD(${str})`;
}

/** `POSITION(substr IN str)` — synonym for `LOCATE(substr, str)` */
export function position(substr: StringSqlInput, str: StringSqlInput): SQL {
  return sql`POSITION(${substr} IN ${str})`;
}

/** `QUOTE(str)` */
export function quote(str: StringSqlInput): SQL {
  return sql`QUOTE(${str})`;
}

export interface RegexpInstrOptions {
  start?: StringSqlInput;
  occurrence?: StringSqlInput;
  returnOption?: StringSqlInput;
  matchType?: StringSqlInput;
}

/** `REGEXP_INSTR(str, regexp [, start [, occurrence [, return_option [, match_type]]]])` */
export function regexpInstr(
  str: StringSqlInput,
  regexp: StringSqlInput,
  options?: RegexpInstrOptions,
): SQL {
  const args: StringSqlInput[] = [str, regexp];
  if (options?.start !== undefined) args.push(options.start);
  if (options?.occurrence !== undefined) args.push(options.occurrence);
  if (options?.returnOption !== undefined) args.push(options.returnOption);
  if (options?.matchType !== undefined) args.push(options.matchType);
  return sql`REGEXP_INSTR(${joinArgs(args)})`;
}

/** `REGEXP_LIKE(str, regexp [, match_type])` */
export function regexpLike(
  str: StringSqlInput,
  regexp: StringSqlInput,
  matchType?: StringSqlInput,
): SQL {
  if (matchType !== undefined) {
    return sql`REGEXP_LIKE(${str}, ${regexp}, ${matchType})`;
  }
  return sql`REGEXP_LIKE(${str}, ${regexp})`;
}

export interface RegexpReplaceOptions {
  start?: StringSqlInput;
  occurrence?: StringSqlInput;
  matchType?: StringSqlInput;
}

/** `REGEXP_REPLACE(str, regexp, replace [, start [, occurrence [, match_type]]])` */
export function regexpReplace(
  str: StringSqlInput,
  regexp: StringSqlInput,
  replace: StringSqlInput,
  options?: RegexpReplaceOptions,
): SQL {
  const args: StringSqlInput[] = [str, regexp, replace];
  if (options?.start !== undefined) args.push(options.start);
  if (options?.occurrence !== undefined) args.push(options.occurrence);
  if (options?.matchType !== undefined) args.push(options.matchType);
  return sql`REGEXP_REPLACE(${joinArgs(args)})`;
}

/** `REGEXP_SUBSTR(str, regexp [, start [, occurrence [, match_type]]])` */
export function regexpSubstr(
  str: StringSqlInput,
  regexp: StringSqlInput,
  start?: StringSqlInput,
  occurrence?: StringSqlInput,
  matchType?: StringSqlInput,
): SQL {
  if (start === undefined) {
    return sql`REGEXP_SUBSTR(${str}, ${regexp})`;
  }
  if (occurrence === undefined) {
    return sql`REGEXP_SUBSTR(${str}, ${regexp}, ${start})`;
  }
  if (matchType === undefined) {
    return sql`REGEXP_SUBSTR(${str}, ${regexp}, ${start}, ${occurrence})`;
  }
  return sql`REGEXP_SUBSTR(${str}, ${regexp}, ${start}, ${occurrence}, ${matchType})`;
}

/** `REPEAT(str, count)` */
export function repeat(str: StringSqlInput, count: StringSqlInput): SQL {
  return sql`REPEAT(${str}, ${count})`;
}

/** `REPLACE(str, from_str, to_str)` */
export function replace(str: StringSqlInput, fromStr: StringSqlInput, toStr: StringSqlInput): SQL {
  return sql`REPLACE(${str}, ${fromStr}, ${toStr})`;
}

/** `REVERSE(str)` */
export function reverse(str: StringSqlInput): SQL {
  return sql`REVERSE(${str})`;
}

/** `RIGHT(str, len)` */
export function right(str: StringSqlInput, len: StringSqlInput): SQL {
  return sql`RIGHT(${str}, ${len})`;
}

/** `RPAD(str, len, padstr)` */
export function rpad(str: StringSqlInput, len: StringSqlInput, padstr: StringSqlInput): SQL {
  return sql`RPAD(${str}, ${len}, ${padstr})`;
}

/** `RTRIM(str)` */
export function rtrim(str: StringSqlInput): SQL {
  return sql`RTRIM(${str})`;
}

/** `SPACE(n)` */
export function space(n: StringSqlInput): SQL {
  return sql`SPACE(${n})`;
}

/** `STRCMP(str1, str2)` */
export function strcmp(str1: StringSqlInput, str2: StringSqlInput): SQL {
  return sql`STRCMP(${str1}, ${str2})`;
}

/** `SUBSTRING(str, pos [, len])` */
export function substring(str: StringSqlInput, pos: StringSqlInput, len?: StringSqlInput): SQL {
  if (len !== undefined) {
    return sql`SUBSTRING(${str}, ${pos}, ${len})`;
  }
  return sql`SUBSTRING(${str}, ${pos})`;
}

/** `SUBSTR(str, pos [, len])` — synonym in SQL; emitted as `SUBSTR` (not `SUBSTRING`) */
export function substr(str: StringSqlInput, pos: StringSqlInput, len?: StringSqlInput): SQL {
  if (len !== undefined) {
    return sql`SUBSTR(${str}, ${pos}, ${len})`;
  }
  return sql`SUBSTR(${str}, ${pos})`;
}

/** `SUBSTRING_INDEX(str, delim, count)` */
export function substringIndex(
  str: StringSqlInput,
  delim: StringSqlInput,
  count: StringSqlInput,
): SQL {
  return sql`SUBSTRING_INDEX(${str}, ${delim}, ${count})`;
}

/** `TO_BASE64(str)` */
export function toBase64(str: StringSqlInput): SQL {
  return sql`TO_BASE64(${str})`;
}

/** `TRANSLATE(str, from_str, to_str)` */
export function translate(
  str: StringSqlInput,
  fromStr: StringSqlInput,
  toStr: StringSqlInput,
): SQL {
  return sql`TRANSLATE(${str}, ${fromStr}, ${toStr})`;
}

/** `TRIM(str)` */
export function trim(str: StringSqlInput): SQL {
  return sql`TRIM(${str})`;
}

/** `TRIM(BOTH remstr FROM str)` */
export function trimBoth(str: StringSqlInput, remstr: StringSqlInput): SQL {
  return sql`TRIM(BOTH ${remstr} FROM ${str})`;
}

/** `TRIM(LEADING remstr FROM str)` — omit `remstr` for space-only trimming via `ltrim` */
export function trimLeadingFrom(str: StringSqlInput, remstr: StringSqlInput): SQL {
  return sql`TRIM(LEADING ${remstr} FROM ${str})`;
}

/** `TRIM(TRAILING remstr FROM str)` */
export function trimTrailingFrom(str: StringSqlInput, remstr: StringSqlInput): SQL {
  return sql`TRIM(TRAILING ${remstr} FROM ${str})`;
}

/** `UCASE(str)` — synonym for `UPPER` */
export function ucase(str: StringSqlInput): SQL {
  return sql`UCASE(${str})`;
}

/** `UNHEX(str)` */
export function unhex(str: StringSqlInput): SQL {
  return sql`UNHEX(${str})`;
}

/** `UPPER(str)` */
export function upper(str: StringSqlInput): SQL {
  return sql`UPPER(${str})`;
}

/** `WEIGHT_STRING(str)` */
export function weightString(str: StringSqlInput): SQL {
  return sql`WEIGHT_STRING(${str})`;
}

/** `WEIGHT_STRING(str AS CHAR(n))` */
export function weightStringAsChar(str: StringSqlInput, n: StringSqlInput): SQL {
  return sql`WEIGHT_STRING(${str} AS CHAR(${n}))`;
}

/** `WEIGHT_STRING(str AS BINARY(n))` */
export function weightStringAsBinary(str: StringSqlInput, n: StringSqlInput): SQL {
  return sql`WEIGHT_STRING(${str} AS BINARY(${n}))`;
}
