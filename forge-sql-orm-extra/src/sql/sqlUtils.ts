import { Parser } from "node-sql-parser";
import { normalizeSqlForLoggingRegex } from "forge-sql-orm";

/**
 * Parser-based SQL normalization used by `forge-sql-orm-extra`.
 * Canonicalizes structure with `node-sql-parser`, then replaces literals via regex.
 *
 * @param sql - Raw SQL query string
 * @returns Normalized SQL with literals replaced by `?`
 */
export const normalizeFunction = (sql: string) => {
  const parser = new Parser();
  const ast = parser.astify(sql.trim());

  // Convert AST back to SQL (this normalizes structure and formatting)
  const normalized = parser.sqlify(Array.isArray(ast) ? ast[0] : ast);

  // Apply regex-based value replacement to the normalized SQL
  // This handles the case where sqlify might preserve some literal values
  let result = normalizeSqlForLoggingRegex(normalized.trim());

  // Remove backticks added by sqlify for cleaner logging (optional - can be removed if backticks are preferred)
  result = result.replace(/`/g, "");

  return result;
};
