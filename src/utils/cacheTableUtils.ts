import { Parser } from "node-sql-parser";
import { ForgeSqlOrmOptions } from "../core/ForgeSQLQueryBuilder";

/**
 * Extracts table name from backticks_quote_string type.
 */
function extractTableNameFromBackticks(value: any): string | null {
  if (value.type === "backticks_quote_string" && typeof value.value === "string") {
    return value.value === "dual" ? null : value.value.toLowerCase();
  }
  return null;
}

/**
 * Extracts table name from object value.
 */
function extractTableNameFromObject(value: any, context?: string): string | null {
  // If it's an array, skip it (not a table name)
  if (Array.isArray(value)) {
    return null;
  }

  // Handle backticks_quote_string type only for node.table context
  if (context?.includes("node.table")) {
    const fromBackticks = extractTableNameFromBackticks(value);
    if (fromBackticks !== null) {
      return fromBackticks;
    }
  }

  // Try value.name first (most common)
  if (typeof value.name === "string") {
    return value.name === "dual" ? null : value.name.toLowerCase();
  }

  // Try value.table if it's a nested structure
  if (value.table) {
    return normalizeTableName(value.table, context);
  }

  // Log when we encounter an object that we can't extract table name from
  // eslint-disable-next-line no-console
  console.warn(
    `[cacheTableUtils] Unable to extract table name from object:`,
    JSON.stringify(value, null, 2),
    context ? `(context: ${context})` : "",
  );
  return null;
}

/**
 * Helper function to safely convert to string and lowercase.
 */
function normalizeTableName(value: any, context?: string): string | null {
  if (!value) {
    return null;
  }
  // If it's already a string, use it
  if (typeof value === "string") {
    return value === "dual" ? null : value.toLowerCase();
  }
  // If it's an object, try to extract name from various properties
  if (typeof value === "object") {
    return extractTableNameFromObject(value, context);
  }
  // For other types (number, boolean, etc.), log and don't treat as table name
  // eslint-disable-next-line no-console
  console.warn(
    `[cacheTableUtils] Unexpected table name type:`,
    typeof value,
    value,
    context ? `(context: ${context})` : "",
  );
  return null;
}

/**
 * Checks if a node is a column reference alias.
 */
function isColumnRefAlias(node: any): boolean {
  return node.type === "column_ref" && !node.table;
}

/**
 * Checks if a node is an explicit alias (has 'as' property but is not a table node).
 */
function isExplicitAlias(node: any): boolean {
  return Boolean(node.as && node.type !== "table" && node.type !== "dual" && !node.table);
}

/**
 * Checks if a node has a short name that is likely an alias.
 */
function isShortNameAlias(node: any): boolean {
  if (!node.name || node.table || node.type === "table" || node.type === "dual") {
    return false;
  }
  const nameStr = typeof node.name === "string" ? node.name : node.name?.name || node.name?.value;
  return typeof nameStr === "string" && nameStr.length <= 2;
}

/**
 * Checks if a node is likely an alias (not a real table).
 */
function isLikelyAlias(node: any): boolean {
  return isColumnRefAlias(node) || isExplicitAlias(node) || isShortNameAlias(node);
}

/**
 * Extracts table name from table/dual node.
 */
function extractTableNameFromTableNode(node: any): string | null {
  const fromTable = node.table
    ? normalizeTableName(node.table, `node.type=${node.type}, node.table`)
    : null;
  if (fromTable) {
    return fromTable;
  }
  const fromName = node.name
    ? normalizeTableName(node.name, `node.type=${node.type}, node.name`)
    : null;
  return fromName;
}

/**
 * Extracts table name from table node.
 *
 * @param node - AST node with table information
 * @returns Table name in lowercase or null if not applicable
 */
function extractTableName(node: any): string | null {
  if (!node || isLikelyAlias(node)) {
    return null;
  }

  // Handle table node directly
  if (node.type === "table" || node.type === "dual") {
    return extractTableNameFromTableNode(node);
  }

  // Handle table reference in different formats
  if (node.table) {
    return normalizeTableName(node.table, `node.table (type: ${node.type})`);
  }

  return null;
}

/**
 * Processes and adds table name to the set if valid.
 */
function processTableName(node: any, tableName: string, tables: Set<string>): void {
  // Filter out a_ prefixed names (field aliases)
  if (tableName.startsWith("a_")) {
    return;
  }

  // Filter out short names that are likely table aliases (u, us, o, oi, etc.)
  // Only filter if it's not a real table node (type === "table" or "dual")
  const isRealTableNode = node.type === "table" || node.type === "dual";
  if (!isRealTableNode && tableName.length <= 2) {
    return;
  }

  tables.add(tableName);
}

/**
 * Extracts table name from node and adds to set if valid.
 */
function extractAndAddTableName(node: any, tables: Set<string>): void {
  const tableName = extractTableName(node);
  if (tableName && tableName.length > 0) {
    processTableName(node, tableName, tables);
  }
}

/**
 * Processes CTE (Common Table Expressions) - WITH clause.
 */
function processCTE(node: any, tables: Set<string>): void {
  if (!node.with && !node.with_list) {
    return;
  }
  const withClauses = node.with_list || (Array.isArray(node.with) ? node.with : [node.with]);
  withClauses.forEach((cte: any) => {
    if (cte?.stmt) {
      extractTablesFromNode(cte.stmt, tables);
    }
    if (cte?.as?.stmt) {
      extractTablesFromNode(cte.as.stmt, tables);
    }
  });
}

/**
 * Processes FROM and JOIN clauses.
 */
function processFromAndJoin(node: any, tables: Set<string>): void {
  if (node.from) {
    if (Array.isArray(node.from)) {
      node.from.forEach((item: any) => extractTablesFromNode(item, tables));
    } else {
      extractTablesFromNode(node.from, tables);
    }
  }

  if (node.join) {
    if (Array.isArray(node.join)) {
      node.join.forEach((item: any) => extractTablesFromNode(item, tables));
    } else {
      extractTablesFromNode(node.join, tables);
    }
  }
}

/**
 * Processes a single column for table extraction.
 */
function processSingleColumn(col: any, tables: Set<string>): void {
  if (!col) {
    return;
  }

  // If the column itself is a subquery
  if (col.type === "subquery" || col.type === "select") {
    extractTablesFromNode(col, tables);
  }

  // Process expression (may contain subqueries)
  if (col.expr) {
    extractTablesFromNode(col.expr, tables);
  }

  // Process AST (alternative structure for subqueries)
  if (col.ast) {
    extractTablesFromNode(col.ast, tables);
  }
}

/**
 * Processes SELECT columns that may contain subqueries.
 */
function processSelectColumns(node: any, tables: Set<string>): void {
  const columns = node.columns || node.select;
  if (!columns) {
    return;
  }

  if (Array.isArray(columns)) {
    columns.forEach((col: any) => processSingleColumn(col, tables));
  } else if (typeof columns === "object") {
    extractTablesFromNode(columns, tables);
  }
}

/**
 * Processes ORDER BY or GROUP BY clause.
 */
function processOrderByOrGroupBy(clause: any, tables: Set<string>): void {
  if (!clause) {
    return;
  }
  if (Array.isArray(clause)) {
    clause.forEach((item: any) => {
      if (item?.expr) {
        extractTablesFromNode(item.expr, tables);
      }
      extractTablesFromNode(item, tables);
    });
  } else {
    extractTablesFromNode(clause, tables);
  }
}

/**
 * Processes UNION operations.
 */
function processUnionNode(unionNode: any, tables: Set<string>): void {
  if (!unionNode) {
    return;
  }

  const unionTypes = [
    "select",
    "union",
    "union_all",
    "union_distinct",
    "intersect",
    "except",
    "minus",
  ];
  const isUnionType = unionTypes.includes(unionNode.type);

  if (isUnionType) {
    extractTablesFromNode(unionNode, tables);
  } else if (unionNode.select) {
    extractTablesFromNode(unionNode.select, tables);
  } else if (unionNode.ast) {
    extractTablesFromNode(unionNode.ast, tables);
  } else {
    extractTablesFromNode(unionNode, tables);
  }
}

/**
 * Processes UNION/UNION ALL/UNION DISTINCT/INTERSECT/EXCEPT/MINUS clauses.
 */
function processUnion(node: any, tables: Set<string>): void {
  if (!node.union) {
    return;
  }

  if (Array.isArray(node.union)) {
    node.union.forEach((unionNode: any) => processUnionNode(unionNode, tables));
  } else if (typeof node.union === "object") {
    processUnionNode(node.union, tables);
  }
}

/**
 * Processes UNION/INTERSECT/EXCEPT operation nodes.
 */
function processUnionOperation(node: any, tables: Set<string>): void {
  const unionOperationTypes = [
    "union",
    "union_all",
    "union_distinct",
    "intersect",
    "except",
    "minus",
  ];
  const isUnionOperation = unionOperationTypes.includes(node.type);

  if (!isUnionOperation) {
    return;
  }

  if (node.left) {
    extractTablesFromNode(node.left, tables);
  }
  if (node.right) {
    extractTablesFromNode(node.right, tables);
  }
  extractTablesFromNode(node, tables);
}

/**
 * Processes _next property (alternative UNION structure).
 */
function processNext(node: any, tables: Set<string>): void {
  if (!node._next) {
    return;
  }
  if (Array.isArray(node._next)) {
    node._next.forEach((nextNode: any) => extractTablesFromNode(nextNode, tables));
  } else {
    extractTablesFromNode(node._next, tables);
  }
}

/**
 * Recursively processes all object properties for any remaining nested structures.
 */
/**
 * Processes array values recursively.
 */
function processArrayValues(values: any[], tables: Set<string>): void {
  values.forEach((item: any) => {
    if (item && typeof item === "object") {
      extractTablesFromNode(item, tables);
    }
  });
}

/**
 * Processes object values recursively.
 */
function processObjectValues(node: any, tables: Set<string>): void {
  Object.values(node).forEach((value) => {
    if (value && typeof value === "object") {
      if (Array.isArray(value)) {
        processArrayValues(value, tables);
      } else {
        extractTablesFromNode(value, tables);
      }
    }
  });
}

function processRecursively(node: any, tables: Set<string>): void {
  const isColumnRefAlias = node.type === "column_ref" && !node.table;
  const hasName = Boolean(node.name);
  const hasNoTable = !node.table;
  const isNotTableType = node.type !== "table" && node.type !== "dual";
  const isShortName = hasName && node.name.length <= 2;
  const isShortNameAlias = hasName && hasNoTable && isNotTableType && isShortName;
  const isLikelyAlias = isColumnRefAlias || isShortNameAlias;

  if (isLikelyAlias || Array.isArray(node)) {
    return;
  }

  processObjectValues(node, tables);
}

/**
 * Processes DML statement types (UPDATE, INSERT, DELETE).
 */
function processDmlStatements(node: any, tables: Set<string>): void {
  if (node.type === "update" && node.table) {
    extractTablesFromNode(node.table, tables);
  } else if (node.type === "insert" && node.table) {
    extractTablesFromNode(node.table, tables);
  } else if (node.type === "delete" && node.from) {
    extractTablesFromNode(node.from, tables);
  }
}

/**
 * Processes SELECT-specific clauses (WHERE, HAVING, ORDER BY, GROUP BY).
 */
function processSelectClauses(node: any, tables: Set<string>): void {
  if (node.where) {
    extractTablesFromNode(node.where, tables);
  }
  if (node.having) {
    extractTablesFromNode(node.having, tables);
  }
  processOrderByOrGroupBy(node.orderby || node.order_by, tables);
  processOrderByOrGroupBy(node.groupby || node.group_by, tables);
}

/**
 * Processes subquery and SELECT statement types.
 */
function processSubqueryAndSelect(node: any, tables: Set<string>): void {
  if (node.type === "subquery" || node.type === "select") {
    if (node.ast) {
      extractTablesFromNode(node.ast, tables);
    }
    if (node.from) {
      extractTablesFromNode(node.from, tables);
    }
  }
}

/**
 * Processes set operations (UNION, INTERSECT, EXCEPT).
 */
function processSetOperations(node: any, tables: Set<string>): void {
  processUnion(node, tables);
  processUnionOperation(node, tables);
  processNext(node, tables);
}

/**
 * Recursively extracts table names from SQL AST node.
 * Handles regular tables, CTEs, subqueries, and complex query structures.
 *
 * @param node - AST node to extract tables from
 * @param tables - Accumulator set for table names
 */
function extractTablesFromNode(node: any, tables: Set<string>): void {
  if (!node || typeof node !== "object") {
    return;
  }

  // Extract table name if node is a table type
  extractAndAddTableName(node, tables);

  // Handle CTE (Common Table Expressions) - WITH clause
  processCTE(node, tables);

  // Extract tables from FROM and JOIN clauses
  processFromAndJoin(node, tables);

  // Handle subqueries and SELECT statements
  processSubqueryAndSelect(node, tables);

  // Process SELECT-specific clauses
  processSelectClauses(node, tables);

  // Extract tables from SELECT columns (may contain subqueries)
  processSelectColumns(node, tables);

  // Process DML statements (UPDATE, INSERT, DELETE)
  processDmlStatements(node, tables);

  // Process set operations (UNION, INTERSECT, EXCEPT)
  processSetOperations(node, tables);

  // Recursively process all object properties
  processRecursively(node, tables);
}

/**
 * Extracts all table names from SQL query using node-sql-parser, with regex fallback.
 * Returns them as comma-separated string in format `table1`,`table2`.
 *
 * @param sql - SQL query string
 * @param options - ForgeSQL ORM options for logging
 * @returns Comma-separated string of unique table names in backticks
 */
/**
 * Formats table names as backticked comma-separated string.
 */
function formatBacktickedValues(tables: Set<string>): string {
  return Array.from(tables)
    .sort((a, b) => a.localeCompare(b, undefined, { sensitivity: "base", numeric: true }))
    .map((table) => `\`${table}\``)
    .join(",");
}

/**
 * Extracts table names using regex fallback.
 */
function extractTablesWithRegex(sql: string): Set<string> {
  const regex = /`([^`]+)`/g;
  const matches = new Set<string>();
  let match;

  while ((match = regex.exec(sql.toLowerCase())) !== null) {
    if (!match[1].startsWith("a_")) {
      matches.add(match[1]);
    }
  }

  return matches;
}

export function extractBacktickedValues(sql: string, options: ForgeSqlOrmOptions): string {
  // Try to use node-sql-parser first
  try {
    const parser = new Parser();
    const ast = parser.astify(sql.trim());

    const tables = new Set<string>();

    // Handle both single statement and multiple statements
    const statements = Array.isArray(ast) ? ast : [ast];
    statements.forEach((statement) => {
      extractTablesFromNode(statement, tables);
    });

    if (tables.size > 0) {
      const backtickedValues = formatBacktickedValues(tables);
      if (options.logCache) {
        // eslint-disable-next-line no-console
        console.warn(`Extracted backticked values: ${backtickedValues}`);
      }
      return backtickedValues;
    }
  } catch (error) {
    if (options.logCache) {
      // eslint-disable-next-line no-console
      console.error(
        `Error extracting backticked values: ${error}. Using regex-based extraction instead.`,
      );
    }
    // If parsing fails, fall back to regex-based extraction
    // This handles cases where node-sql-parser doesn't support the SQL syntax
  }

  // Fallback to regex-based extraction (original logic)
  const matches = extractTablesWithRegex(sql);
  return formatBacktickedValues(matches);
}
