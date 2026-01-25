// qlty-ignore: +qlty:file-complexity
import {
  ForgeSqlOperation,
  ForgeSqlOrmOptions,
  RlsSettings,
  RovoIntegration,
  RovoIntegrationSetting,
  RovoIntegrationSettingCreator,
} from "./ForgeSQLQueryBuilder";
import { Result, sql } from "@forge/sql";
import { Parser, Select } from "node-sql-parser";
import { AnyMySqlTable, MySqlColumn } from "drizzle-orm/mysql-core";
import { getTableName } from "drizzle-orm/table";

/**
 * Configuration for RovoIntegrationSettingImpl.
 */
interface RovoIntegrationSettingConfig {
  accountId: string;
  tableName: string;
  contextParam: Record<string, string>;
  rls: boolean;
  rlsFields: string[];
  rlsWherePart: (alias: string) => string;
}

/**
 * Implementation of RovoIntegrationSetting interface.
 * Stores configuration for Rovo query execution including user context, table name, and RLS settings.
 *
 * @class RovoIntegrationSettingImpl
 * @implements {RovoIntegrationSetting}
 */
class RovoIntegrationSettingImpl implements RovoIntegrationSetting {
  private readonly accountId: string;
  private readonly tableName: string;
  private readonly contextParam: Record<string, string>;
  private readonly rls: boolean;
  private readonly rlsFields: string[];
  private readonly rlsWherePart: (alias: string) => string;

  /**
   * Creates a new RovoIntegrationSettingImpl instance.
   *
   * @param config - Configuration object for the setting
   */
  constructor(config: RovoIntegrationSettingConfig) {
    this.accountId = config.accountId;
    this.tableName = config.tableName;
    this.contextParam = config.contextParam;
    this.rls = config.rls;
    this.rlsFields = config.rlsFields;
    this.rlsWherePart = config.rlsWherePart;
  }

  /**
   * Gets the account ID of the active user.
   *
   * @returns {string} The account ID of the active user
   */
  getActiveUser(): string {
    return this.accountId;
  }

  /**
   * Gets the context parameters for query substitution.
   *
   * @returns {Record<string, string>} Map of parameter names to their values
   */
  getParameters(): Record<string, string> {
    return this.contextParam;
  }

  /**
   * Gets the name of the table to query.
   *
   * @returns {string} The table name
   */
  getTableName(): string {
    return this.tableName;
  }

  /**
   * Checks if Row-Level Security is enabled.
   *
   * @returns {boolean} True if RLS is enabled, false otherwise
   */
  isUseRLS(): boolean {
    return this.rls;
  }

  /**
   * Gets the list of field names required for RLS validation.
   *
   * @returns {string[]} Array of field names that must be present in SELECT clause for RLS
   */
  userScopeFields(): string[] {
    return this.rlsFields;
  }

  /**
   * Generates the WHERE clause for Row-Level Security filtering.
   *
   * @param {string} alias - The table alias to use in the WHERE clause
   * @returns {string} SQL WHERE clause condition for RLS filtering
   */
  userScopeWhere(alias: string): string {
    return this.rlsWherePart(alias);
  }
}

/**
 * Builder class for creating RovoIntegrationSetting instances.
 * Provides a fluent API for configuring Rovo query settings including context parameters and RLS.
 *
 * @class RovoIntegrationSettingCreatorImpl
 * @implements {RovoIntegrationSettingCreator}
 */
class RovoIntegrationSettingCreatorImpl implements RovoIntegrationSettingCreator {
  private readonly tableName: string;
  private readonly accountId: string;
  private readonly contextParam: Record<string, string> = {};
  private readonly rlsFields: string[] = [];
  private isUseRls: boolean = false;
  private isUseRlsConditional: () => Promise<boolean> = async () => true;
  private wherePart: (alias: string) => string = () => "";

  /**
   * Creates a new RovoIntegrationSettingCreatorImpl instance.
   *
   * @param {string} tableName - The name of the table to query
   * @param {string} accountId - The account ID of the active user
   */
  constructor(tableName: string, accountId: string) {
    this.tableName = tableName;
    this.accountId = accountId;
  }

  /**
   * Adds a string context parameter for query substitution.
   * The value will be wrapped in single quotes in the SQL query.
   *
   * @param {string} parameterName - The parameter name to replace in the query (e.g., '{{projectKey}}')
   * @param {string} value - The string value to substitute for the parameter
   * @returns {RovoIntegrationSettingCreator} This builder instance for method chaining
   *
   * @example
   * ```typescript
   * builder.addStringContextParameter('{{projectKey}}', 'PROJ-123');
   * // In SQL: {{projectKey}} will be replaced with 'PROJ-123'
   * ```
   */
  addStringContextParameter(parameterName: string, value: string): RovoIntegrationSettingCreator {
    this.addContextParameter(parameterName, value, true);
    return this;
  }

  /**
   * Adds a number context parameter for query substitution.
   * The value will be inserted as-is without quotes in the SQL query.
   *
   * @param {string} parameterName - The parameter name to replace in the query (e.g., '{{limit}}')
   * @param {number} value - The numeric value to substitute for the parameter
   * @returns {RovoIntegrationSettingCreator} This builder instance for method chaining
   *
   * @example
   * ```typescript
   * builder.addNumberContextParameter('{{limit}}', 100);
   * // In SQL: {{limit}} will be replaced with 100
   * ```
   */
  addNumberContextParameter(parameterName: string, value: number): RovoIntegrationSettingCreator {
    this.addContextParameter(parameterName, String(value), false);
    return this;
  }

  /**
   * Adds a boolean context parameter for query substitution.
   * The value will be converted to 1 (true) or 0 (false) and inserted as a number.
   *
   * @param {string} parameterName - The parameter name to replace in the query (e.g., '{{isActive}}')
   * @param {boolean} value - The boolean value to substitute for the parameter
   * @returns {RovoIntegrationSettingCreator} This builder instance for method chaining
   *
   * @example
   * ```typescript
   * builder.addBooleanContextParameter('{{isActive}}', true);
   * // In SQL: {{isActive}} will be replaced with 1
   * ```
   */
  addBooleanContextParameter(parameterName: string, value: boolean): RovoIntegrationSettingCreator {
    this.addNumberContextParameter(parameterName, value ? 1 : 0);
    return this;
  }
  /**
   * Adds a context parameter for query substitution.
   * Context parameters are replaced in the SQL query before execution.
   *
   * @param {string} parameterName - The parameter name to replace in the query (e.g., '{{projectKey}}')
   * @param {string} value - The value to substitute for the parameter
   * @param {boolean} wrap - Whether to wrap the value in single quotes (true for strings, false for numbers)
   * @returns {RovoIntegrationSettingCreator} This builder instance for method chaining
   *
   * @example
   * ```typescript
   * builder.addContextParameter('{{projectKey}}', 'PROJ-123', true);
   * // In SQL: {{projectKey}} will be replaced with 'PROJ-123'
   * ```
   */
  addContextParameter(
    parameterName: string,
    value: string,
    wrap: boolean,
  ): RovoIntegrationSettingCreator {
    this.contextParam[parameterName] = wrap ? `'${value}'` : value;
    return this;
  }

  /**
   * Enables Row-Level Security (RLS) for the query.
   * Returns a RlsSettings builder for configuring RLS options.
   *
   * @returns {RlsSettings} RLS settings builder for configuring security options
   *
   * @example
   * ```typescript
   * builder.useRLS()
   *   .addRlsColumn(usersTable.id)
   *   .addRlsWherePart((alias) => `${alias}.id = '${accountId}'`)
   *   .finish();
   * ```
   */
  useRLS(): RlsSettings {
    /**
     * Internal implementation of RlsSettings interface.
     * Provides fluent API for configuring Row-Level Security settings.
     *
     * @class RlsSettingsImpl
     * @implements {RlsSettings}
     */
    return new (class RlsSettingsImpl implements RlsSettings {
      private isUseRlsConditionalSettings: () => Promise<boolean> = async () => true;
      private rlsFieldsSettings: string[] = [];
      private wherePartSettings: (alias: string) => string = () => "";

      /**
       * Creates a new RlsSettingsImpl instance.
       *
       * @param {RovoIntegrationSettingCreatorImpl} parent - The parent settings builder instance
       */
      constructor(private readonly parent: RovoIntegrationSettingCreatorImpl) {}
      /**
       * Sets a conditional function to determine if RLS should be applied.
       *
       * @param {() => Promise<boolean>} condition - Async function that returns true if RLS should be enabled
       * @returns {RlsSettings} This builder instance for method chaining
       *
       * @example
       * ```typescript
       * .addRlsCondition(async () => {
       *   const user = await getUser();
       *   return !user.isAdmin;
       * })
       * ```
       */
      addRlsCondition(condition: () => Promise<boolean>): RlsSettings {
        this.isUseRlsConditionalSettings = condition;
        return this;
      }

      /**
       * Adds a column name that must be present in the SELECT clause for RLS validation.
       *
       * @param {string} columnName - The name of the column to require
       * @returns {RlsSettings} This builder instance for method chaining
       *
       * @example
       * ```typescript
       * .addRlsColumnName('userId')
       * ```
       */
      addRlsColumnName(columnName: string): RlsSettings {
        this.rlsFieldsSettings.push(columnName);
        return this;
      }

      /**
       * Adds a Drizzle column that must be present in the SELECT clause for RLS validation.
       *
       * @param {MySqlColumn} column - The Drizzle column object
       * @returns {RlsSettings} This builder instance for method chaining
       *
       * @example
       * ```typescript
       * .addRlsColumn(usersTable.userId)
       * ```
       */
      addRlsColumn(column: MySqlColumn): RlsSettings {
        this.rlsFieldsSettings.push(column.name);
        return this;
      }

      /**
       * Sets the WHERE clause function for RLS filtering.
       * The function receives a table alias and should return a SQL WHERE condition.
       *
       * @param {(alias: string) => string} wherePart - Function that generates WHERE clause
       * @returns {RlsSettings} This builder instance for method chaining
       *
       * @example
       * ```typescript
       * .addRlsWherePart((alias) => `${alias}.userId = '${accountId}'`)
       * ```
       */
      addRlsWherePart(wherePart: (alias: string) => string): RlsSettings {
        this.wherePartSettings = wherePart;
        return this;
      }

      /**
       * Finishes RLS configuration and returns to the settings builder.
       *
       * @returns {RovoIntegrationSettingCreator} The parent settings builder
       */
      finish(): RovoIntegrationSettingCreator {
        this.parent.isUseRls = true;
        this.rlsFieldsSettings.forEach((columnName) => this.parent.rlsFields.push(columnName));
        this.parent.wherePart = this.wherePartSettings;
        this.parent.isUseRlsConditional = this.isUseRlsConditionalSettings;
        return this.parent;
      }
    })(this);
  }

  /**
   * Builds and returns the RovoIntegrationSetting instance.
   * Evaluates the RLS condition if RLS is enabled.
   *
   * @returns {Promise<RovoIntegrationSetting>} The configured RovoIntegrationSetting instance
   *
   * @example
   * ```typescript
   * const settings = await builder
   *   .addContextParameter('{{projectKey}}', 'PROJ-123')
   *   .useRLS()
   *   .addRlsColumn(usersTable.id)
   *   .addRlsWherePart((alias) => `${alias}.id = '${accountId}'`)
   *   .finish()
   *   .build();
   * ```
   */
  async build(): Promise<RovoIntegrationSetting> {
    const useRls = this.isUseRls ? await this.isUseRlsConditional() : false;
    return new RovoIntegrationSettingImpl({
      accountId: this.accountId,
      tableName: this.tableName,
      contextParam: this.contextParam,
      rls: useRls,
      rlsFields: this.rlsFields,
      rlsWherePart: this.wherePart,
    });
  }
}

/**
 * Main class for Rovo integration - a secure pattern for natural-language analytics in Forge apps.
 *
 * Rovo provides a secure way to execute dynamic SQL queries with comprehensive security validations:
 * - Only SELECT queries are allowed
 * - Queries are restricted to a single table
 * - JOINs, subqueries, and window functions are blocked
 * - Row-Level Security (RLS) support for data isolation
 * - Post-execution validation of query results
 *
 * @class Rovo
 * @implements {RovoIntegration}
 *
 * @example
 * ```typescript
 * const rovo = forgeSQL.rovo();
 * const settings = await rovo.rovoSettingBuilder(usersTable, accountId)
 *   .useRLS()
 *   .addRlsColumn(usersTable.id)
 *   .addRlsWherePart((alias) => `${alias}.id = '${accountId}'`)
 *   .finish()
 *   .build();
 *
 * const result = await rovo.dynamicIsolatedQuery(
 *   "SELECT id, name FROM users WHERE status = 'active'",
 *   settings
 * );
 * ```
 */
export class Rovo implements RovoIntegration {
  private readonly forgeOperations: ForgeSqlOperation;
  private readonly options: ForgeSqlOrmOptions;
  /**
   * Creates a new Rovo instance.
   *
   * @param {ForgeSqlOperation} forgeSqlOperations - The ForgeSQL operations instance for query analysis and execution
   * @param {ForgeSqlOrmOptions} options - Configuration options for the ORM (e.g., logging settings)
   */
  constructor(forgeSqlOperations: ForgeSqlOperation, options: ForgeSqlOrmOptions) {
    this.forgeOperations = forgeSqlOperations;
    this.options = options;
  }

  /**
   * Parses SQL query into AST and validates it's a single SELECT statement.
   *
   * @param {string} sqlQuery - Normalized SQL query string
   * @returns {Select} Parsed AST of the SELECT statement
   * @throws {Error} If parsing fails or query is not a single SELECT statement
   */
  private parseSqlQuery(sqlQuery: string): Select {
    const parser = new Parser();
    let ast;
    try {
      ast = parser.astify(sqlQuery);
    } catch (parseError: any) {
      throw new Error(
        `SQL parsing error: ${parseError.message || "Invalid SQL syntax"}. Please check your query syntax.`,
      );
    }

    // Validate that query is a SELECT statement
    // Parser can return either an object (single statement) or an array (multiple statements)
    if (Array.isArray(ast)) {
      if (ast.length !== 1 || ast[0].type !== "select") {
        throw new Error(
          "Only a single SELECT query is allowed. Multiple statements or non-SELECT statements are not permitted.",
        );
      }
      return ast[0];
    } else if (ast?.type === "select") {
      return ast;
    } else {
      throw new Error("Only SELECT queries are allowed.");
    }
  }

  /**
   * Recursively processes array or single node and extracts table names.
   *
   * @param {any} items - Array of AST nodes or single AST node
   * @param {string[]} tables - Accumulator array for collecting table names (modified in place)
   */
  private extractTablesFromItems(items: any, tables: string[]): void {
    if (Array.isArray(items)) {
      items.forEach((item: any) => {
        tables.push(...this.extractTables(item));
      });
    } else {
      tables.push(...this.extractTables(items));
    }
  }

  /**
   * Extracts table name from table AST node.
   *
   * @param {any} node - AST node with table information
   * @returns {string | null} Table name in uppercase, or null if not applicable (e.g., 'dual' table)
   */
  private extractTableName(node: any): string | null {
    if (!node.table) {
      return null;
    }
    const tableName = node.table === "dual" ? "dual" : node.table.name || node.table;
    return tableName && tableName !== "dual" ? tableName.toUpperCase() : null;
  }

  /**
   * Recursively extracts all table names from SQL AST node.
   * Traverses FROM and JOIN clauses to find all referenced tables.
   *
   * @param {any} node - AST node to extract tables from
   * @returns {string[]} Array of table names in uppercase
   */
  private extractTables(node: any): string[] {
    const tables: string[] = [];

    // Extract table name if node is a table type
    if (node.type === "table" || node.type === "dual") {
      const tableName = this.extractTableName(node);
      if (tableName) {
        tables.push(tableName);
      }
    }

    // Extract tables from FROM clause
    if (node.from) {
      this.extractTablesFromItems(node.from, tables);
    }

    // Extract tables from JOIN clause
    if (node.join) {
      this.extractTablesFromItems(node.join, tables);
    }

    return tables;
  }

  /**
   * Recursively checks if AST node contains scalar subqueries.
   * Used for security validation to prevent subquery-based attacks.
   *
   * @param {any} node - AST node to check for subqueries
   * @returns {boolean} True if node contains scalar subquery, false otherwise
   */
  private hasScalarSubquery(node: any): boolean {
    if (!node) return false;

    if (node.type === "subquery" || node.ast?.type === "select") {
      return true;
    }

    if (Array.isArray(node)) {
      return node.some((item) => this.hasScalarSubquery(item));
    }

    if (typeof node === "object") {
      return Object.values(node).some((value) => this.hasScalarSubquery(value));
    }

    return false;
  }

  /**
   * Creates a settings builder for Rovo queries using a raw table name.
   *
   * @param {string} tableName - The name of the table to query (case-insensitive)
   * @param {string} accountId - The account ID of the active user for RLS filtering
   * @returns {RovoIntegrationSettingCreator} Builder for configuring Rovo query settings
   *
   * @example
   * ```typescript
   * const builder = rovo.rovoRawSettingBuilder('users', accountId);
   * const settings = await builder
   *   .addStringContextParameter('{{status}}', 'active')
   *   .build();
   * ```
   */
  rovoRawSettingBuilder(tableName: string, accountId: string): RovoIntegrationSettingCreator {
    return new RovoIntegrationSettingCreatorImpl(tableName, accountId);
  }

  /**
   * Creates a settings builder for Rovo queries using a Drizzle table object.
   * This is a convenience method that extracts the table name from the Drizzle table object.
   *
   * @param {AnyMySqlTable} table - The Drizzle table object
   * @param {string} accountId - The account ID of the active user for RLS filtering
   * @returns {RovoIntegrationSettingCreator} Builder for configuring Rovo query settings
   *
   * @example
   * ```typescript
   * const builder = rovo.rovoSettingBuilder(usersTable, accountId);
   * const settings = await builder
   *   .useRLS()
   *   .addRlsColumn(usersTable.id)
   *   .addRlsWherePart((alias) => `${alias}.userId = '${accountId}'`)
   *   .finish()
   *   .build();
   * ```
   */
  rovoSettingBuilder(table: AnyMySqlTable, accountId: string): RovoIntegrationSettingCreator {
    return this.rovoRawSettingBuilder(getTableName(table), accountId);
  }

  /**
   * Validates basic input parameters for the SQL query.
   *
   * @param {string} query - The SQL query string to validate
   * @param {string} tableName - The expected table name
   * @returns {string} The trimmed query string
   * @throws {Error} If query is empty, table name is missing, or query is not a SELECT statement
   */
  private validateInputs(query: string, tableName: string): string {
    if (!query?.trim()) {
      throw new Error("SQL query is required. Please provide a valid SELECT query.");
    }
    if (!tableName) {
      throw new Error("Table Name is required. Please provide a valid Table Name.");
    }

    const trimmedQuery = query.trim();
    const quickUpper = trimmedQuery.toUpperCase();
    if (!quickUpper.startsWith("SELECT")) {
      throw new Error(
        "Only SELECT queries are allowed. Data modification operations (INSERT, UPDATE, DELETE, etc.) are not permitted.",
      );
    }

    return trimmedQuery;
  }

  /**
   * Validates that AST represents a single SELECT statement.
   */
  private validateSelectAst(ast: any): void {
    if (Array.isArray(ast)) {
      if (ast.length !== 1 || ast[0].type !== "select") {
        throw new Error(
          "Only a single SELECT query is allowed. Multiple statements or non-SELECT statements are not permitted.",
        );
      }
    } else if (ast && ast.type !== "select") {
      throw new Error("Only SELECT queries are allowed.");
    }
  }

  /**
   * Normalizes SQL query using AST parsing and stringification.
   * This ensures consistent formatting and validates the query structure.
   *
   * @param {string} sql - The SQL query string to normalize
   * @returns {string} The normalized SQL query string
   * @throws {Error} If parsing fails, query is not a SELECT statement, or multiple statements are detected
   */
  private normalizeSqlString(sql: string): string {
    try {
      const parser = new Parser();
      const ast = parser.astify(sql.trim());

      this.validateSelectAst(ast);

      const normalized = parser.sqlify(Array.isArray(ast) ? ast[0] : ast);
      return normalized.trim();
    } catch (error: any) {
      if (
        error.message &&
        (error.message.includes("Only") || error.message.includes("single SELECT"))
      ) {
        throw error;
      }
      if (error.message?.includes("SQL parsing error")) {
        throw error;
      }
      throw new Error(
        `SQL parsing error: ${error.message || "Invalid SQL syntax"}. Please check your query syntax.`,
      );
    }
  }

  /**
   * Validates that query targets the correct table.
   * Checks that the FROM clause references only the expected table.
   *
   * @param {string} normalized - The normalized SQL query string
   * @param {string} tableName - The expected table name
   * @throws {Error} If query does not target the expected table
   */
  private validateTableName(normalized: string, tableName: string): void {
    const upperTableName = tableName.toUpperCase();
    const tableNamePattern = new RegExp(`FROM\\s+[\`]?${upperTableName}[\`]?`, "i");
    if (!tableNamePattern.test(normalized)) {
      throw new Error(
        "Queries must target the '" +
          upperTableName +
          "' table only. Other tables are not accessible.",
      );
    }
  }

  /**
   * Validates that query only references the expected table.
   */
  private validateTableReferences(selectAst: Select, tableName: string): void {
    const upperTableName = tableName.toUpperCase();
    const tablesInQuery = this.extractTables(selectAst);
    const uniqueTables = [...new Set(tablesInQuery)];
    const invalidTables = uniqueTables.filter((table) => table !== upperTableName);

    if (invalidTables.length > 0) {
      throw new Error(
        `Security violation: Query references table(s) other than '${tableName}': ${invalidTables.join(", ")}. ` +
          `Only queries against the ${tableName} table are allowed. ` +
          "JOINs, subqueries, or references to other tables are not permitted for security reasons.",
      );
    }
  }

  /**
   * Validates that SELECT columns don't contain scalar subqueries.
   */
  private validateNoSubqueriesInColumns(selectAst: Select): void {
    if (selectAst.columns && Array.isArray(selectAst.columns)) {
      const hasSubqueryInColumns = selectAst.columns.some((col: any) => {
        if (col.expr) {
          return this.hasScalarSubquery(col.expr);
        }
        return this.hasScalarSubquery(col);
      });

      if (hasSubqueryInColumns) {
        throw new Error(
          "Security violation: Scalar subqueries in SELECT columns are not allowed. " +
            "Subqueries can be used to access data from other tables or bypass security restrictions. " +
            "Please rewrite your query without using subqueries in the SELECT clause.",
        );
      }
    }
  }

  /**
   * Validates query structure for security compliance.
   * Checks that only the specified table is referenced and no scalar subqueries are present.
   *
   * @param {Select} selectAst - The parsed SELECT AST node
   * @param {string} tableName - The expected table name
   * @throws {Error} If query references other tables or contains scalar subqueries
   */
  private validateQueryStructure(selectAst: Select, tableName: string): void {
    this.validateTableReferences(selectAst, tableName);
    this.validateNoSubqueriesInColumns(selectAst);
  }

  /**
   * Validates query execution plan for security violations.
   * Uses EXPLAIN to detect JOINs, window functions, and references to other tables.
   *
   * @param {string} normalized - The normalized SQL query string
   * @param {string} tableName - The expected table name
   * @returns {Promise<void>}
   * @throws {Error} If execution plan reveals JOINs, window functions, or references to other tables
   */
  private async validateExecutionPlan(normalized: string, tableName: string): Promise<void> {
    const explainRows = await this.forgeOperations.analyze().explainRaw(normalized, []);

    const hasJoin = explainRows.some((row) => {
      const info = (row.operatorInfo ?? "").toUpperCase();
      return (
        info.includes("JOIN") ||
        info.includes("CARTESIAN") ||
        info.includes("NESTED LOOP") ||
        info.includes("HASH JOIN")
      );
    });

    if (hasJoin) {
      throw new Error(
        "Security violation: JOIN operations are not allowed. " +
          `For security reasons, Rovo analytics only supports queries over the ${tableName} table without joins, subqueries, or references to other tables. ` +
          `Please rewrite your query to use only the ${tableName} table.`,
      );
    }

    const hasWindow = explainRows.some((row) => {
      const id = row.id.toUpperCase();
      const info = (row.operatorInfo ?? "").toUpperCase();
      return id.includes("WINDOW") || info.includes(" OVER(") || info.includes(" OVER()");
    });

    if (hasWindow) {
      throw new Error(
        "Window functions (for example COUNT(*) OVER(...)) are not allowed in Rovo SQL for this app. " +
          "Please rephrase your question so that it uses regular aggregates instead of window functions.",
      );
    }

    const tablesInPlan = explainRows.filter(
      (row) =>
        row.accessObject?.startsWith("table:") &&
        row.accessObject?.toLowerCase() !== "table:" + tableName.toLowerCase(),
    );
    if (tablesInPlan.length > 0) {
      throw new Error(
        `Security violation: Query execution plan detected references to tables other than '${tableName.toLowerCase()}'. ` +
          `Only queries against the ${tableName.toLowerCase()} table are allowed. ` +
          "JOINs, subqueries, or references to other tables are not permitted for security reasons.",
      );
    }
  }

  /**
   * Applies row-level security filtering to query.
   * Wraps the original query in a subquery and adds a WHERE clause with RLS conditions.
   *
   * @param {string} normalized - The normalized SQL query string
   * @param {RovoIntegrationSetting} settings - Rovo settings containing RLS configuration
   * @returns {string} The SQL query with RLS filtering applied
   */
  private applyRLSFiltering(normalized: string, settings: RovoIntegrationSetting): string {
    if (normalized.endsWith(";")) {
      normalized = normalized.slice(0, -1);
    }

    return `
            SELECT *
            FROM (
                     ${normalized}
                     ) AS t
            WHERE (${settings.userScopeWhere("t")})
        `;
  }

  /**
   * Validates that required RLS fields are present and from correct table.
   */
  private validateRlsFields(
    fields: Array<{ name: string; orgTable?: string }>,
    rlsFields: string[],
    upperTableName: string,
  ): void {
    rlsFields.forEach((field) => {
      const actualFields = fields.filter((f) => f.name.toLowerCase() === field?.toLowerCase());
      if (actualFields.length === 0) {
        throw new Error(
          `Security validation failed: The query must include ${field} as a raw column in the SELECT statement. This field is required for row-level security enforcement.`,
        );
      }
      const actualField = actualFields.find(
        (f) => !f.orgTable || f.orgTable.toUpperCase() !== upperTableName,
      );
      if (actualField) {
        throw new Error(
          `Security validation failed: '${field}' must come directly from the ${upperTableName} table. Joins, subqueries, or table aliases that change the origin of this column are not allowed.`,
        );
      }
    });
  }

  /**
   * Validates that all fields come from the expected table.
   */
  private validateAllFieldsFromTable(
    fields: Array<{ orgTable?: string }>,
    upperTableName: string,
  ): void {
    const fieldsFromOtherTables = fields.filter(
      (f) => f.orgTable && f.orgTable.toUpperCase() !== upperTableName,
    );
    if (fieldsFromOtherTables.length > 0) {
      throw new Error(
        `Security validation failed: All fields must come from the ${upperTableName} table. ` +
          "Fields from other tables detected, which indicates the use of JOINs, subqueries, or references to other tables. " +
          "This is not allowed for security reasons.",
      );
    }
  }

  /**
   * Validates query results for RLS compliance.
   * Ensures that required RLS fields are present and all fields originate from the correct table.
   *
   * @param {Result<unknown>} result - The query execution result
   * @param {RovoIntegrationSetting} settings - Rovo settings containing RLS field requirements
   * @param {string} upperTableName - The expected table name in uppercase
   * @throws {Error} If required RLS fields are missing or fields originate from other tables
   */
  private validateQueryResults(
    result: Result<unknown>,
    settings: RovoIntegrationSetting,
    upperTableName: string,
  ): void {
    if (!result?.metadata?.fields) {
      return;
    }

    const fields = result.metadata.fields as Array<{
      name: string;
      schema?: string;
      table?: string;
      orgTable?: string;
    }>;

    this.validateRlsFields(fields, settings.userScopeFields(), upperTableName);
    this.validateAllFieldsFromTable(fields, upperTableName);
  }

  /**
   * Normalizes SQL query with error handling.
   */
  private normalizeQueryWithErrorHandling(query: string): string {
    try {
      return this.normalizeSqlString(query);
    } catch (error: any) {
      if (
        error.message &&
        (error.message.includes("Only") || error.message.includes("single SELECT"))
      ) {
        throw error;
      }
      if (error.message?.includes("SQL parsing error")) {
        throw error;
      }
      throw new Error(
        `SQL parsing error: ${error.message || "Invalid SQL syntax"}. Please check your query syntax.`,
      );
    }
  }

  /**
   * Replaces context parameters in the query string.
   */
  private replaceQueryParameters(normalized: string, parameters: Record<string, string>): string {
    let result = normalized.replaceAll("ari:cloud:identity::user/", "");
    Object.entries(parameters).forEach(([key, value]) => {
      result = result.replaceAll(key, value);
    });
    return result;
  }

  /**
   * Performs all security validations on the query.
   */
  private async performSecurityValidations(normalized: string, tableName: string): Promise<void> {
    const selectAst = this.parseSqlQuery(normalized);
    this.validateQueryStructure(selectAst, tableName);
    await this.validateExecutionPlan(normalized, tableName);
  }

  /**
   * Executes a dynamic SQL query with comprehensive security validations.
   *
   * This method performs multiple security checks:
   * 1. Validates that the query is a SELECT statement
   * 2. Ensures the query targets only the specified table
   * 3. Blocks JOINs, subqueries, and window functions
   * 4. Applies Row-Level Security filtering if enabled
   * 5. Validates query results to ensure security fields are present
   *
   * @param {string} dynamicSql - The SQL query to execute (must be a SELECT statement)
   * @param {RovoIntegrationSetting} settings - Configuration settings for the query
   * @returns {Promise<Result<unknown>>} Query execution result with metadata
   * @throws {Error} If the query violates security restrictions, parsing fails, or validation errors occur
   *
   * @example
   * ```typescript
   * const result = await rovo.dynamicIsolatedQuery(
   *   "SELECT id, name, email FROM users WHERE status = 'active' ORDER BY name",
   *   settings
   * );
   *
   * console.log(result.rows); // Query results
   * console.log(result.metadata); // Query metadata
   * ```
   */
  async dynamicIsolatedQuery(
    dynamicSql: string,
    settings: RovoIntegrationSetting,
  ): Promise<Result<unknown>> {
    const tableName = settings.getTableName();
    const accountId = settings.getActiveUser();
    const parameters = settings.getParameters();

    // Validate inputs
    const trimmedQuery = this.validateInputs(dynamicSql, tableName);

    // Normalize SQL
    let normalized = this.normalizeQueryWithErrorHandling(trimmedQuery);

    // Validate table name and account
    this.validateTableName(normalized, tableName);

    if (!accountId) {
      throw new Error(
        "Authentication error: User account ID is missing. Please ensure you are logged in.",
      );
    }

    // Replace parameters in query
    normalized = this.replaceQueryParameters(normalized, parameters);

    // Perform security validations
    await this.performSecurityValidations(normalized, tableName);

    // Apply RLS filtering if needed
    const isUseRLSFiltering = settings.isUseRLS();
    if (isUseRLSFiltering) {
      normalized = this.applyRLSFiltering(normalized, settings);
    }

    if (this.options.logRawSqlQuery) {
      // eslint-disable-next-line no-console
      console.debug("Rovo query: " + normalized);
    }

    const result = await sql.executeRaw(normalized);

    // Validate query results for RLS compliance
    if (isUseRLSFiltering) {
      const upperTableName = tableName.toUpperCase();
      this.validateQueryResults(result, settings, upperTableName);
    }

    return result;
  }
}
