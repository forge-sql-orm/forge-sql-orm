// SPDX-FileCopyrightText: 2025-2026 Vasyl Zakharchenko
// SPDX-License-Identifier: MIT

import "reflect-metadata";
import fs from "node:fs";
import path from "node:path";
import mysql from "mysql2/promise";
import { AnyMySqlTable, MySqlTable, TableConfig } from "drizzle-orm/mysql-core";
import { RowDataPacket } from "mysql2";
import { getTableMetadata } from "forge-sql-orm";
import { AnyIndexBuilder } from "drizzle-orm/mysql-core/indexes";
import { ForeignKeyBuilder } from "drizzle-orm/mysql-core/foreign-keys";
import { UniqueConstraintBuilder } from "drizzle-orm/mysql-core/unique-constraint";
import { v4 as uuid } from "uuid";

/**
 * Options for updating an existing migration.
 */
export interface UpdateMigrationOptions {
  output: string;
  entitiesPath: string;
  host: string;
  port: number;
  user: string;
  password: string;
  dbName: string;
}

interface DrizzleColumn {
  type: string;
  notNull: boolean;
  autoincrement?: boolean;
  columnType?: string;
  name: string;
  default?: string;
  getSQLType: () => string;
}

/**
 * Minimal shape of a Drizzle SQL default expression that exposes `toQuery`.
 */
interface ToQueryable {
  toQuery: (config: Record<string, unknown>) => { sql: string };
}

/**
 * Type guard for default values that expose a `toQuery` method (SQL expressions).
 */
function isToQueryable(value: unknown): value is ToQueryable {
  return (
    typeof value === "object" &&
    value !== null &&
    typeof (value as { toQuery?: unknown }).toQuery === "function"
  );
}

interface DrizzleSchema {
  [tableName: string]: {
    [columnName: string]: DrizzleColumn;
  };
}

interface DatabaseColumn extends RowDataPacket {
  TABLE_NAME: string;
  COLUMN_NAME: string;
  COLUMN_TYPE: string;
  IS_NULLABLE: string;
  COLUMN_KEY: string;
  EXTRA: string;
}

interface DatabaseIndex extends RowDataPacket {
  TABLE_NAME: string;
  INDEX_NAME: string;
  COLUMN_NAME: string;
  NON_UNIQUE: number;
}

interface DatabaseForeignKey extends RowDataPacket {
  TABLE_NAME: string;
  COLUMN_NAME: string;
  CONSTRAINT_NAME: string;
  REFERENCED_TABLE_NAME: string;
  REFERENCED_COLUMN_NAME: string;
}

interface TableSchema {
  columns: Record<string, DatabaseColumn>;
  indexes: Record<
    string,
    {
      columns: string[];
      unique: boolean;
    }
  >;
  foreignKeys: Record<
    string,
    {
      column: string;
      referencedTable: string;
      referencedColumn: string;
    }
  >;
}

interface DatabaseSchema {
  [tableName: string]: TableSchema;
}

type PreMigrationNotNull = {
  tableName: string;
  dbTable: TableSchema;
  colName: string;
  type: string;
  migrationType: "NEW_FIELD_NOT_NULL" | "MODIFY_NOT_NULL" | "INLINE";
  defaultValue: string;
};

function buildDefault(preMigration: PreMigrationNotNull): string {
  const def = preMigration.defaultValue;
  const type = preMigration.type.toLowerCase();

  // No default defined
  if (def === undefined || def === null) {
    return "";
  }

  // Empty string default → DEFAULT ''
  if (def === "") {
    return `''`;
  }

  // Types that must be quoted
  const stringTypes = new Set([
    "char",
    "varchar",
    "text",
    "tinytext",
    "mediumtext",
    "longtext",
    "enum",
    "set",
    "binary",
    "varbinary",
    "blob",
  ]);

  // Numeric types that accept numeric literals
  const numericTypes = new Set([
    "tinyint",
    "smallint",
    "mediumint",
    "int",
    "bigint",
    "decimal",
    "float",
    "double",
    "bit",
  ]);

  // Check if default value is a numeric literal
  const isNumericLiteral = /^[+-]?\d+(\.\d+)?$/.test(def);

  // Numeric types → DEFAULT 123 (no quotes)
  if (numericTypes.has(type) && isNumericLiteral) {
    return `${def}`;
  }

  // String types → DEFAULT 'value'
  if (stringTypes.has(type)) {
    // Double escape single quotes
    const escaped = def.replace(/'/g, "''");
    return `'${escaped}'`;
  }

  // Other types: treat default as an expression
  // e.g. DEFAULT CURRENT_TIMESTAMP, DEFAULT (uuid()), DEFAULT now()
  return `${def}`;
}

/**
 * Generates warning message for missing default value
 */
function generateWarningMessage(tableName: string, colName: string, version: number): string {
  return (
    `⚠️  WARNING: Field \`${tableName}\`.\`${colName}\` requires a default value for existing NULL records.\n` +
    `   Action required in migration file: migrationV${version}.ts\n` +
    `   Find the line with: UPDATE \`${tableName}\` SET \`${colName}\` = ?\n` +
    `   Replace '?' with an actual value (e.g., '' for strings, 0 for numbers, '1970-01-01' for dates)\n` +
    `   OR remove this migration if it's not needed.`
  );
}

/**
 * Handles warning for missing default value
 */
function handleMissingDefaultValue(
  preMigration: PreMigrationNotNull,
  version: number,
  migrationLineList: string[],
): void {
  const warningMsg = generateWarningMessage(preMigration.tableName, preMigration.colName, version);
  console.warn(warningMsg);
  migrationLineList.push(`console.error(${JSON.stringify(warningMsg)});`);
}

/**
 * Gets the default value for UPDATE statement
 */
function getUpdateDefaultValue(preMigration: PreMigrationNotNull, defaultValue: string): string {
  return defaultValue === "?" ? defaultValue : buildDefault(preMigration);
}

/**
 * Generates UPDATE statement for existing NULL records
 */
function generateUpdateStatement(preMigration: PreMigrationNotNull, defaultValue: string): string {
  const updateValue = getUpdateDefaultValue(preMigration, defaultValue);
  return `UPDATE \`${preMigration.tableName}\` SET \`${preMigration.colName}\` = ${updateValue} WHERE \`${preMigration.colName}\` IS NULL`;
}

/**
 * Generates a migration file using the provided SQL statements.
 * @param createStatements - Array of SQL statements.
 * @param version - Migration version number.
 * @returns TypeScript migration file content.
 */
function generateMigrationFile(
  createStatements: {
    changes: { change: string; premigrationId?: string }[];
    preMigrations: Record<string, PreMigrationNotNull>;
  },
  version: number,
): string {
  const versionPrefix = `v${version}_MIGRATION`;
  const migrationLineList: string[] = [];

  createStatements.changes.forEach((change, index) => {
    if (!change.premigrationId) {
      // Regular change without pre-migration
      migrationLineList.push(
        `\nmigrationRunner.enqueue("${versionPrefix}${index}", "${change.change}")`,
      );
      return;
    }

    const preMigration = createStatements.preMigrations[change.premigrationId];
    if (!preMigration) {
      // Pre-migration ID exists but pre-migration not found
      migrationLineList.push(
        `\nmigrationRunner.enqueue("${versionPrefix}${index}", "${change.change}")`,
      );
      return;
    }

    const defaultValue = preMigration.defaultValue ?? "?";
    const needsWarning = defaultValue === "?";

    if (preMigration.migrationType === "NEW_FIELD_NOT_NULL") {
      // Step 1: Add column as NULL
      const addColumnStatement = change.change.replace("NOT NULL", "NULL");
      migrationLineList.push(
        `\nmigrationRunner.enqueue("${versionPrefix}${index}_NULLABLE", "${addColumnStatement}");`,
      );

      // Step 2: Warning if default value is missing
      if (needsWarning) {
        handleMissingDefaultValue(preMigration, version, migrationLineList);
      }

      // Step 3: Update existing NULL records
      const updateStatement = generateUpdateStatement(preMigration, defaultValue);
      migrationLineList.push(
        `\nmigrationRunner.enqueue("${versionPrefix}${index}_UPDATE_EXISTS_RECORDS", "${updateStatement}");`,
      );

      // Step 4: Modify column to NOT NULL
      const defaultClause = defaultValue === "?" ? "" : ` DEFAULT ${buildDefault(preMigration)}`;
      const modifyStatement = `ALTER TABLE \`${preMigration.tableName}\` MODIFY COLUMN IF EXISTS \`${preMigration.colName}\` ${preMigration.type} NOT NULL${defaultClause};`;
      migrationLineList.push(
        `\nmigrationRunner.enqueue("${versionPrefix}${index}", "${modifyStatement}");`,
      );
    } else if (preMigration.migrationType === "MODIFY_NOT_NULL") {
      // Step 1: Warning if default value is missing
      if (needsWarning) {
        handleMissingDefaultValue(preMigration, version, migrationLineList);
      }

      // Step 2: Update existing NULL records, then apply the MODIFY statement
      const updateStatement = generateUpdateStatement(preMigration, defaultValue);
      migrationLineList.push(
        `\nmigrationRunner.enqueue("${versionPrefix}${index}_UPDATE_EXISTS_RECORDS", "${updateStatement}")`,
        `\nmigrationRunner.enqueue("${versionPrefix}${index}", "${change.change}")`,
      );
    }
  });

  const migrationLines = migrationLineList.join("\n");

  return `import { MigrationRunner } from "@forge/sql/out/migration";

export default (migrationRunner: MigrationRunner): MigrationRunner => { 
${migrationLines};
return migrationRunner;
};`;
}

/** Captures the SQL statement (2nd arg) from a `.enqueue("id", "sql")` call. */
const ENQUEUE_STATEMENT_REGEX = /\.enqueue\([^,]+,\s*"([^"]+)"/;

/**
 * Filters out SQL statements that already exist in the previous migration file
 * @param newStatements - Array of SQL statements from new migration
 * @param prevVersion - Previous migration version
 * @param outputDir - Directory where migration files are stored
 * @returns Array of SQL statements that don't exist in previous migration
 */
function filterWithPreviousMigration(
  newStatements: {
    changes: { change: string; premigrationId?: string }[];
    preMigrations: Record<string, PreMigrationNotNull>;
  },
  prevVersion: number,
  outputDir: string,
): {
  changes: { change: string; premigrationId?: string }[];
  preMigrations: Record<string, PreMigrationNotNull>;
} {
  const prevMigrationPath = path.join(outputDir, `migrationV${prevVersion}.ts`);

  if (!fs.existsSync(prevMigrationPath)) {
    return {
      changes: newStatements.changes.map((s) => ({
        change: s.change.replace(/\s+/g, " "),
        premigrationId: s.premigrationId,
      })),
      preMigrations: newStatements.preMigrations,
    };
  }

  // Read previous migration file
  const prevContent = fs.readFileSync(prevMigrationPath, "utf-8");

  // Extract SQL statements from the file into a Set for O(1) existence checks
  const prevStatements = new Set(
    prevContent
      .split("\n")
      .filter((line) => line.includes(".enqueue("))
      .map((line) => {
        const match = ENQUEUE_STATEMENT_REGEX.exec(line);
        return match ? match[1].replace(/\s+/g, " ").trim() : "";
      }),
  );

  // Filter out statements that already exist in previous migration
  return {
    preMigrations: newStatements.preMigrations,
    changes: newStatements.changes
      .filter((s) => !prevStatements.has(s.change.replace(/\s+/g, " ")))
      .map((s) => ({ change: s.change.replace(/\s+/g, " "), premigrationId: s.premigrationId })),
  };
}

/**
 * Saves the generated migration file along with `migrationCount.ts` and `index.ts`.
 * @param migrationCode - The migration code to be written to the file.
 * @param version - Migration version number.
 * @param outputDir - Directory where the migration files will be saved.
 * @returns boolean indicating if migration was saved
 */
function saveMigrationFiles(migrationCode: string, version: number, outputDir: string): boolean {
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  const migrationFilePath = path.join(outputDir, `migrationV${version}.ts`);
  const migrationCountPath = path.join(outputDir, `migrationCount.ts`);
  const indexFilePath = path.join(outputDir, `index.ts`);

  // Write the migration file
  fs.writeFileSync(migrationFilePath, migrationCode);

  // Write the migration count file
  fs.writeFileSync(migrationCountPath, `export const MIGRATION_VERSION = ${version};`);

  // Generate the migration index file with static imports
  const importLines: string[] = [];
  const callLines: string[] = [];

  for (let i = 1; i <= version; i++) {
    importLines.push(`import migrationV${i} from "./migrationV${i}";`);
    callLines.push(`  migrationV${i}(migrationRunner);`);
  }

  const indexFileContent = `import { MigrationRunner } from "@forge/sql/out/migration";
${importLines.join("\n")}

export type MigrationType = (
  migrationRunner: MigrationRunner,
) => MigrationRunner;

export default (
  migrationRunner: MigrationRunner,
): MigrationRunner => {
${callLines.join("\n")}
  return migrationRunner;
};`;

  fs.writeFileSync(indexFilePath, indexFileContent);

  console.log(`✅ Migration file created: ${migrationFilePath}`);
  console.log(`✅ Migration count file updated: ${migrationCountPath}`);
  console.log(`✅ Migration index file created: ${indexFilePath}`);

  return true;
}

/**
 * Loads the current migration version from `migrationCount.ts`.
 * @param migrationPath - Path to the migration folder.
 * @returns The latest migration version.
 */
const loadMigrationVersion = async (migrationPath: string): Promise<number> => {
  try {
    const migrationCountFilePath = path.resolve(path.join(migrationPath, "migrationCount.ts"));
    if (!fs.existsSync(migrationCountFilePath)) {
      console.warn(
        `⚠️ Warning: migrationCount.ts not found in ${migrationCountFilePath}, assuming no previous migrations.`,
      );
      return 0;
    }

    const { MIGRATION_VERSION } = await import(migrationCountFilePath);
    console.log(`✅ Current migration version: ${MIGRATION_VERSION}`);
    return MIGRATION_VERSION as number;
  } catch (error) {
    console.error(`❌ Error loading migrationCount:`, error);
    process.exit(1);
  }
};

/**
 * Gets the current database schema from MySQL including indexes and foreign keys
 * @param connection - MySQL connection
 * @param dbName - Database name
 * @returns Database schema object with indexes and foreign keys
 */
async function getDatabaseSchema(
  connection: mysql.Connection,
  dbName: string,
): Promise<DatabaseSchema> {
  // Get columns
  const [columns] = await connection.execute<DatabaseColumn[]>(
    `
    SELECT TABLE_NAME, COLUMN_NAME, COLUMN_TYPE, IS_NULLABLE, COLUMN_KEY, EXTRA, COLUMN_DEFAULT
    FROM INFORMATION_SCHEMA.COLUMNS
    WHERE TABLE_SCHEMA = ?
  `,
    [dbName],
  );

  // Get indexes
  const [indexes] = await connection.execute<DatabaseIndex[]>(
    `
    SELECT TABLE_NAME, INDEX_NAME, COLUMN_NAME, NON_UNIQUE
    FROM INFORMATION_SCHEMA.STATISTICS
    WHERE TABLE_SCHEMA = ?
    ORDER BY TABLE_NAME, INDEX_NAME, SEQ_IN_INDEX
  `,
    [dbName],
  );

  // Get foreign keys
  const [foreignKeys] = await connection.execute<DatabaseForeignKey[]>(
    `
    SELECT 
      TABLE_NAME,
      COLUMN_NAME,
      CONSTRAINT_NAME,
      REFERENCED_TABLE_NAME,
      REFERENCED_COLUMN_NAME
    FROM INFORMATION_SCHEMA.KEY_COLUMN_USAGE
    WHERE TABLE_SCHEMA = ?
    AND REFERENCED_TABLE_NAME IS NOT NULL
  `,
    [dbName],
  );

  const schema: DatabaseSchema = {};

  // Process columns
  columns.forEach((row) => {
    if (!schema[row.TABLE_NAME]) {
      schema[row.TABLE_NAME] = {
        columns: {},
        indexes: {},
        foreignKeys: {},
      };
    }
    schema[row.TABLE_NAME].columns[row.COLUMN_NAME] = row;
  });

  // Process indexes
  indexes.forEach((row) => {
    if (!schema[row.TABLE_NAME].indexes[row.INDEX_NAME]) {
      schema[row.TABLE_NAME].indexes[row.INDEX_NAME] = {
        columns: [],
        unique: !row.NON_UNIQUE,
      };
    }
    schema[row.TABLE_NAME].indexes[row.INDEX_NAME].columns.push(row.COLUMN_NAME);
  });

  // Process foreign keys
  foreignKeys.forEach((row) => {
    if (!schema[row.TABLE_NAME].foreignKeys[row.CONSTRAINT_NAME]) {
      schema[row.TABLE_NAME].foreignKeys[row.CONSTRAINT_NAME] = {
        column: row.COLUMN_NAME,
        referencedTable: row.REFERENCED_TABLE_NAME,
        referencedColumn: row.REFERENCED_COLUMN_NAME,
      };
    }
  });

  return schema;
}

/**
 * Converts MySQL type to normalized format for comparison
 * @param mysqlType - MySQL type from INFORMATION_SCHEMA or Drizzle type
 * @returns Normalized type string
 */
function normalizeMySQLType(mysqlType: string): string {
  // Remove length/precision information
  let normalized = mysqlType.replace(/\([^)]*\)/, "").toLowerCase();

  // Remove 'mysql' prefix from Drizzle types
  normalized = normalized.replace(/^mysql/, "");

  return normalized;
}

/**
 * Gets the name of a foreign key constraint
 * @param fk - The foreign key builder
 * @returns The name of the foreign key constraint
 */
function getForeignKeyName(fk: ForeignKeyBuilder): string {
  // @ts-ignore - Internal property access
  return fk.name;
}

/**
 * Gets the name of an index
 * @param index - The index builder
 * @returns The name of the index
 */
function getIndexName(index: AnyIndexBuilder): string {
  // @ts-ignore - Internal property access
  return index.name;
}

/**
 * Gets the name of a unique constraint
 * @param uc - The unique constraint builder
 * @returns The name of the unique constraint
 */
function getUniqueConstraintName(uc: UniqueConstraintBuilder): string {
  // @ts-ignore - Internal property access
  return uc.name;
}

/**
 * Gets the columns of an index
 * @param index - The index builder
 * @returns Array of column names
 */
function getIndexColumns(index: AnyIndexBuilder): string[] {
  // @ts-ignore - Internal property access
  return index.columns.map((col) => col.name);
}

/** Locale-aware comparator for sorting column-name arrays deterministically. */
function compareColumnNames(a: string, b: string): number {
  return a.localeCompare(b);
}

function compareForeignKey(
  fk: ForeignKeyBuilder,
  { columns }: { columns: string[]; unique: boolean },
) {
  // @ts-ignore
  const fcolumns: string[] = fk.columns.map((c) => c.name);
  return (
    fcolumns.toSorted(compareColumnNames).join(",") ===
    columns.toSorted(compareColumnNames).join(",")
  );
}

type SchemaChange = { change: string; premigrationId?: string };
type TableMetadataInfo = ReturnType<typeof getTableMetadata>;

/** Builds CREATE TABLE + index + foreign-key statements for a table missing from the schema. */
function buildNewTableChanges(tableName: string, dbTable: TableSchema): SchemaChange[] {
  const changes: SchemaChange[] = [];

  const columnDefs = Object.entries(dbTable.columns)
    .map(([colName, col]) => {
      const nullable = col.IS_NULLABLE === "YES" ? "NULL" : "NOT NULL";
      const autoIncrement = col.EXTRA.includes("auto_increment") ? "AUTO_INCREMENT" : "";
      return `\`${colName}\` ${col.COLUMN_TYPE} ${nullable} ${autoIncrement}`.trim();
    })
    .join(",\n  ");
  changes.push({ change: `CREATE TABLE if not exists \`${tableName}\` (\n  ${columnDefs}\n);` });

  for (const [indexName, dbIndex] of Object.entries(dbTable.indexes)) {
    if (indexName === "PRIMARY") {
      continue;
    }
    const isForeignKeyIndex = dbIndex.columns.some((colName) => {
      const column = dbTable.columns[colName];
      return column?.COLUMN_KEY === "MUL" && column?.EXTRA.includes("foreign key");
    });
    if (isForeignKeyIndex) {
      continue;
    }
    const cols = dbIndex.columns.map((col) => `\`${col}\``).join(", ");
    const unique = dbIndex.unique ? "UNIQUE " : "";
    changes.push({
      change: `CREATE  ${unique}INDEX if not exists  \`${indexName}\` ON \`${tableName}\` (${cols});`,
    });
  }

  for (const [fkName, dbFK] of Object.entries(dbTable.foreignKeys)) {
    changes.push({
      change: `ALTER TABLE \`${tableName}\` ADD CONSTRAINT \`${fkName}\` FOREIGN KEY (\`${dbFK.column}\`) REFERENCES \`${dbFK.referencedTable}\` (\`${dbFK.referencedColumn}\`);`,
    });
  }

  return changes;
}

/** Builds an ADD COLUMN statement for a database column missing from the schema. */
function buildAddColumnChange(
  tableName: string,
  dbTable: TableSchema,
  colName: string,
  dbCol: DatabaseColumn,
  preMigrations: Record<string, PreMigrationNotNull>,
): SchemaChange {
  const type = dbCol.COLUMN_TYPE;
  const nullable = dbCol.IS_NULLABLE === "YES" ? "NULL" : "NOT NULL";
  const defaultValue = dbCol.COLUMN_DEFAULT;

  let premigrationId: string | undefined;
  if (nullable === "NOT NULL") {
    premigrationId = uuid();
    preMigrations[premigrationId] = {
      tableName,
      dbTable,
      colName,
      type,
      migrationType: "NEW_FIELD_NOT_NULL",
      defaultValue,
    };
  }

  const defaultClause =
    defaultValue === undefined || defaultValue === null
      ? ""
      : `DEFAULT ${buildDefault({ tableName, dbTable, colName, type, migrationType: "INLINE", defaultValue })}`;

  return {
    change: `ALTER TABLE \`${tableName}\` ADD COLUMN IF NOT EXISTS \`${colName}\` ${type} ${nullable} ${defaultClause};`,
    premigrationId,
  };
}

/** Builds a MODIFY COLUMN statement when a column's type/nullability/default changed. */
function buildModifyColumnChange(
  tableName: string,
  dbTable: TableSchema,
  colName: string,
  dbCol: DatabaseColumn,
  drizzleCol: DrizzleColumn,
  preMigrations: Record<string, PreMigrationNotNull>,
): SchemaChange | undefined {
  const nullable = dbCol.IS_NULLABLE === "YES" ? "NULL" : "NOT NULL";
  const dbIsNotNull = nullable === "NOT NULL";
  const drizzleIsNotNull = drizzleCol.notNull;

  const typeChanged =
    normalizeMySQLType(dbCol.COLUMN_TYPE) !== normalizeMySQLType(drizzleCol.getSQLType());
  const nullabilityChanged = dbIsNotNull !== drizzleIsNotNull;
  const hasDrizzleDefault = drizzleCol.default !== null && drizzleCol.default !== undefined;
  const hasDbDefault = dbCol.COLUMN_DEFAULT !== null && dbCol.COLUMN_DEFAULT !== undefined;
  const defaultChanged =
    hasDrizzleDefault && hasDbDefault && !drizzleCol.default?.includes(dbCol.COLUMN_DEFAULT);

  if (!typeChanged && !nullabilityChanged && !defaultChanged) {
    return undefined;
  }

  const type = dbCol.COLUMN_TYPE; // Use database type as source of truth
  const defaultValue = dbCol.COLUMN_DEFAULT;

  let premigrationId: string | undefined;
  if (dbIsNotNull && !drizzleIsNotNull) {
    premigrationId = uuid();
    preMigrations[premigrationId] = {
      tableName,
      dbTable,
      colName,
      type,
      migrationType: "MODIFY_NOT_NULL",
      defaultValue,
    };
  }

  const defaultClause =
    defaultValue === undefined || defaultValue === null
      ? ""
      : ` DEFAULT ${buildDefault({ tableName, dbTable, colName, type, migrationType: "INLINE", defaultValue })}`;

  return {
    change: `ALTER TABLE \`${tableName}\` MODIFY COLUMN IF EXISTS \`${colName}\` ${type} ${nullable}${defaultClause};`,
    premigrationId,
  };
}

/** Diffs the columns of an existing table against its Drizzle definition. */
function buildColumnChanges(
  tableName: string,
  dbTable: TableSchema,
  drizzleColumns: Record<string, DrizzleColumn>,
  preMigrations: Record<string, PreMigrationNotNull>,
): SchemaChange[] {
  const changes: SchemaChange[] = [];

  for (const [colName, dbCol] of Object.entries(dbTable.columns)) {
    const drizzleCol = Object.values(drizzleColumns).find((c) => c.name === colName);

    if (!drizzleCol) {
      changes.push(buildAddColumnChange(tableName, dbTable, colName, dbCol, preMigrations));
      continue;
    }

    const change = buildModifyColumnChange(
      tableName,
      dbTable,
      colName,
      dbCol,
      drizzleCol,
      preMigrations,
    );
    if (change) {
      changes.push(change);
    }
  }

  return changes;
}

/** Diffs the indexes of an existing table against its Drizzle metadata. */
function buildIndexChanges(
  tableName: string,
  dbTable: TableSchema,
  metadata: TableMetadataInfo,
): SchemaChange[] {
  const changes: SchemaChange[] = [];

  for (const [indexName, dbIndex] of Object.entries(dbTable.indexes)) {
    if (indexName === "PRIMARY") {
      continue;
    }

    const isForeignKeyIndex = metadata.foreignKeys.some(
      (fk) => getForeignKeyName(fk) === indexName || compareForeignKey(fk, dbIndex),
    );
    if (isForeignKeyIndex) {
      continue;
    }

    const existsUniqIndex = metadata.uniqueConstraints.find(
      (uc) => getUniqueConstraintName(uc) === indexName,
    );
    let drizzleIndex = metadata.indexes.find((i) => getIndexName(i) === indexName);
    if (!drizzleIndex && existsUniqIndex) {
      drizzleIndex = existsUniqIndex as unknown as AnyIndexBuilder;
    }

    const cols = dbIndex.columns.map((col) => `\`${col}\``).join(", ");
    const unique = dbIndex.unique ? "UNIQUE " : "";

    if (!drizzleIndex) {
      changes.push({
        change: `CREATE ${unique}INDEX if not exists \`${indexName}\` ON \`${tableName}\` (${cols});`,
      });
      continue;
    }

    const columnsChanged = dbIndex.columns.join(", ") !== getIndexColumns(drizzleIndex).join(", ");
    const uniqueChanged = dbIndex.unique !== drizzleIndex instanceof UniqueConstraintBuilder;
    if (columnsChanged || uniqueChanged) {
      changes.push(
        { change: `DROP INDEX \`${indexName}\` ON \`${tableName}\`;` },
        {
          change: `CREATE  ${unique}INDEX if not exists \`${indexName}\` ON \`${tableName}\` (${cols});`,
        },
      );
    }
  }

  return changes;
}

/** Diffs the foreign keys of an existing table against its Drizzle metadata. */
function buildForeignKeyChanges(
  tableName: string,
  dbTable: TableSchema,
  metadata: TableMetadataInfo,
): SchemaChange[] {
  const changes: SchemaChange[] = [];

  // Foreign keys present in the database but not in the schema
  for (const [fkName, dbFK] of Object.entries(dbTable.foreignKeys)) {
    const drizzleFK = metadata.foreignKeys.find(
      (fk) =>
        getForeignKeyName(fk) === fkName ||
        compareForeignKey(fk, { columns: [dbFK.column], unique: false }),
    );
    if (!drizzleFK) {
      changes.push({
        change: `ALTER TABLE \`${tableName}\` ADD CONSTRAINT \`${fkName}\` FOREIGN KEY (\`${dbFK.column}\`) REFERENCES \`${dbFK.referencedTable}\` (\`${dbFK.referencedColumn}\`);`,
      });
    }
  }

  // Foreign keys present in the schema but not in the database
  for (const drizzleForeignKey of metadata.foreignKeys) {
    const isDbFk = Object.keys(dbTable.foreignKeys).some((fk) => {
      const foreignKey = dbTable.foreignKeys[fk];
      return (
        fk === getForeignKeyName(drizzleForeignKey) ||
        compareForeignKey(drizzleForeignKey, { columns: [foreignKey.column], unique: false })
      );
    });
    if (isDbFk) {
      continue;
    }

    const fkName = getForeignKeyName(drizzleForeignKey);
    if (fkName) {
      changes.push({ change: `ALTER TABLE \`${tableName}\` DROP FOREIGN KEY  \`${fkName}\`;` });
    } else {
      // @ts-ignore - Internal property access
      const columns = drizzleForeignKey.columns as { name: string }[] | undefined;
      const columnNames = columns?.length
        ? columns.map((c) => c.name).join(", ")
        : "unknown columns";
      console.warn(
        `⚠️ Drizzle model for table '${tableName}' does not provide a name for FOREIGN KEY constraint on columns: ${columnNames}`,
      );
    }
  }

  return changes;
}

/**
 * Generates SQL changes by comparing Drizzle schema with database schema
 * @param drizzleSchema - Schema from Drizzle
 * @param dbSchema - Schema from database
 * @param schemaModule - Drizzle schema module
 * @returns Array of SQL statements
 */
function generateSchemaChanges(
  drizzleSchema: DrizzleSchema,
  dbSchema: DatabaseSchema,
  schemaModule: Record<string, AnyMySqlTable>,
): {
  changes: SchemaChange[];
  preMigrations: Record<string, PreMigrationNotNull>;
} {
  const changes: SchemaChange[] = [];
  const preMigrations: Record<string, PreMigrationNotNull> = {};

  for (const [tableName, dbTable] of Object.entries(dbSchema)) {
    const drizzleColumns = drizzleSchema[tableName];

    // Table exists in the database but not in the schema - create it wholesale.
    if (!drizzleColumns) {
      changes.push(...buildNewTableChanges(tableName, dbTable));
      continue;
    }

    // Otherwise diff columns, then indexes and foreign keys (when the table is known).
    changes.push(...buildColumnChanges(tableName, dbTable, drizzleColumns, preMigrations));

    const table = Object.values(schemaModule).find(
      (t) => getTableMetadata(t).tableName === tableName,
    );
    if (table) {
      const metadata = getTableMetadata(table);
      changes.push(
        ...buildIndexChanges(tableName, dbTable, metadata),
        ...buildForeignKeyChanges(tableName, dbTable, metadata),
      );
    }
  }

  return { changes, preMigrations };
}

/**
 * Updates an existing database migration by generating schema modifications.
 * @param options - Database connection settings and output paths.
 */
export const updateMigration = async (options: UpdateMigrationOptions) => {
  try {
    let version = await loadMigrationVersion(options.output);
    const prevVersion = version;

    if (version < 1) {
      console.log(
        `⚠️ Initial migration not found. Run "npx forge-sql-orm migrations:create" first.`,
      );
      process.exit(0);
    }
    version += 1;

    // Create database connection
    const connection = await mysql.createConnection({
      host: options.host,
      port: options.port,
      user: options.user,
      password: options.password,
      database: options.dbName,
    });

    try {
      // Get current database schema
      const dbSchema = await getDatabaseSchema(connection, options.dbName);

      // Import Drizzle schema using absolute path
      const schemaPath = path.resolve(options.entitiesPath, "schema.ts");
      if (!fs.existsSync(schemaPath)) {
        throw new Error(`Schema file not found at: ${schemaPath}`);
      }

      const schemaModule = await import(schemaPath);
      if (!schemaModule) {
        throw new Error(`Invalid schema file at: ${schemaPath}. Schema must export tables.`);
      }

      // Process exported tables
      const drizzleSchema: DrizzleSchema = {};

      // Get all exports that are tables
      const tables = Object.values(schemaModule) as MySqlTable<TableConfig>[];

      tables.forEach((table) => {
        const metadata = getTableMetadata(table);
        if (metadata.tableName) {
          // Convert AnyColumn to DrizzleColumn
          const columns: Record<string, DrizzleColumn> = {};
          Object.entries(metadata.columns).forEach(([name, column]) => {
            columns[name] = {
              type: column.dataType,
              notNull: column.notNull,
              autoincrement: (column as { autoIncrement?: boolean }).autoIncrement,
              columnType: column.columnType,
              name: column.name,
              default: (() => {
                if (!column.hasDefault) {
                  return undefined;
                }

                const defaultValue = column.default;

                // If default is an object with toQuery method (e.g., SQL expression)
                if (isToQueryable(defaultValue)) {
                  return defaultValue.toQuery({}).sql;
                }

                // Otherwise, convert to string
                return String(defaultValue);
              })(),
              getSQLType: () => column.getSQLType(),
            };
          });
          drizzleSchema[metadata.tableName] = columns;
        }
      });

      if (Object.keys(drizzleSchema).length === 0) {
        throw new Error(`No valid tables found in schema at: ${schemaPath}`);
      }

      console.log("Found tables:", Object.keys(drizzleSchema));

      // Generate SQL changes
      const createStatements = filterWithPreviousMigration(
        generateSchemaChanges(drizzleSchema, dbSchema, schemaModule),
        prevVersion,
        options.output,
      );

      if (createStatements.changes.length) {
        // Generate migration file content
        const migrationFile = generateMigrationFile(createStatements, version);

        // Save migration files only if there are actual changes
        if (saveMigrationFiles(migrationFile, version, options.output)) {
          console.log(`✅ Migration successfully updated!`);
        }
        process.exit(0);
      } else {
        console.log(`⚠️ No new migration changes detected.`);
        process.exit(0);
      }
    } finally {
      await connection.end();
    }
  } catch (error) {
    console.error(`❌ Error during migration update:`, error);
    process.exit(1);
  }
};
