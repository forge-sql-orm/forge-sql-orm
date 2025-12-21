import "reflect-metadata";
import fs from "fs";
import path from "path";
import mysql from "mysql2/promise";
import { RowDataPacket } from "mysql2";

/**
 * Options for migration creation
 */
export interface CreateMigrationOptions {
  output: string;
  entitiesPath: string;
  force?: boolean;
  host?: string;
  port?: number;
  user?: string;
  password?: string;
  dbName?: string;
}

interface CreateTableRow extends RowDataPacket {
  Table: string;
  "Create Table": string;
}

/**
 * Loads the current migration version from `migrationCount.ts`.
 * @param migrationPath - Path to the migration folder.
 * @returns The latest migration version.
 */
export const loadMigrationVersion = async (migrationPath: string): Promise<number> => {
  try {
    const migrationCountFilePath = path.resolve(path.join(migrationPath, "migrationCount.ts"));
    if (!fs.existsSync(migrationCountFilePath)) {
      console.log(`✅ Current migration version: 0`);
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
 * Regular expressions for adding IF NOT EXISTS to SQL statements
 * Note: MySQL/TiDB does not support IF NOT EXISTS for ALTER TABLE ADD CONSTRAINT
 */
const SQL_KIND_REGEX = /CREATE (?!.*IF NOT EXISTS)(UNIQUE INDEX|INDEX|TABLE) /gim;

/**
 * Inserts IF NOT EXISTS into CREATE statements.
 * Only adds IF NOT EXISTS to CREATE TABLE, CREATE INDEX, and CREATE UNIQUE INDEX.
 * Does not add IF NOT EXISTS to ALTER TABLE statements as MySQL/TiDB doesn't support it.
 * @param content - The SQL content.
 * @returns The SQL content with IF NOT EXISTS added.
 */
function insertNotExists(content: string): string {
  SQL_KIND_REGEX.lastIndex = 0;

  // Add IF NOT EXISTS to CREATE TABLE, CREATE INDEX, CREATE UNIQUE INDEX
  // Note: ALTER TABLE ADD CONSTRAINT and ALTER TABLE ADD INDEX don't support IF NOT EXISTS in MySQL/TiDB
  content = content.replace(SQL_KIND_REGEX, "CREATE $1 IF NOT EXISTS ");

  return content;
}

/**
 * Cleans SQL statements by removing unnecessary database options.
 * @param sql - The raw SQL statement.
 * @returns The cleaned SQL statement.
 */
export function cleanSQLStatement(sql: string): string {
  // Add IF NOT EXISTS to relevant statements
  sql = insertNotExists(sql);

  // Remove unnecessary database options
  return sql.replace(/\s+default\s+character\s+set\s+utf8mb4\s+engine\s*=\s*InnoDB;?/gi, "").trim();
}

/**
 * Generates a migration file using the provided SQL statements.
 * @param createStatements - Array of SQL statements.
 * @param version - Migration version number.
 * @returns TypeScript migration file content.
 */
export function generateMigrationFile(createStatements: string[], version: number): string {
  const versionPrefix = `v${version}_MIGRATION`;

  // Clean each SQL statement and generate migration lines with .enqueue()
  const migrationLines = createStatements
    .map(
      (stmt, index) =>
        `        .enqueue("${versionPrefix}${index}", "${cleanSQLStatement(stmt).replace(/\s+/g, " ")}")`,
    )
    .join("\n");

  // Migration template
  return `import { MigrationRunner } from "@forge/sql/out/migration";

export default (migrationRunner: MigrationRunner): MigrationRunner => {
    return migrationRunner
${migrationLines};
};`;
}

/**
 * Saves the generated migration file along with `migrationCount.ts` and `index.ts`.
 * @param migrationCode - The migration code to be written to the file.
 * @param version - Migration version number.
 * @param outputDir - Directory where the migration files will be saved.
 */
export function saveMigrationFiles(migrationCode: string, version: number, outputDir: string) {
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
  // Build import lines for each migration version
  const importLines = [];
  for (let i = 1; i <= version; i++) {
    importLines.push(`import v${i} from "./migrationV${i}";`);
  }
  // Build call lines for each migration version
  const callLines = [];
  for (let i = 1; i <= version; i++) {
    callLines.push(`  v${i}(migrationRunner);`);
  }
  const indexFileContent = `import { MigrationRunner } from "@forge/sql/out/migration";
${importLines.join("\n")}

export type MigrationType = (
  migrationRunner: MigrationRunner,
) => MigrationRunner;

export default async (
  migrationRunner: MigrationRunner,
): Promise<MigrationRunner> => {
${callLines.join("\n")}
  return migrationRunner;
};`;

  fs.writeFileSync(indexFilePath, indexFileContent);

  console.log(`✅ Migration file created: ${migrationFilePath}`);
  console.log(`✅ Migration count file updated: ${migrationCountPath}`);
  console.log(`✅ Migration index file created: ${indexFilePath}`);
}

/**
 * Gets list of tables from the database
 * @param connection - MySQL connection
 * @returns Array of table names
 */
async function getTables(connection: mysql.Connection): Promise<string[]> {
  const [rows] = await connection.execute<any[]>("SHOW TABLES");
  return rows.map((row) => Object.values(row)[0] as string);
}

/**
 * Gets CREATE TABLE statement for a specific table
 * @param connection - MySQL connection
 * @param tableName - Name of the table
 * @returns CREATE TABLE statement
 */
async function getCreateTableStatement(
  connection: mysql.Connection,
  tableName: string,
): Promise<string | null> {
  const [rows] = await connection.execute<CreateTableRow[]>(`SHOW CREATE TABLE \`${tableName}\``);
  const result = rows as CreateTableRow[];
  if (result.length > 0 && result[0]["Create Table"]) {
    return result[0]["Create Table"];
  }
  return null;
}

/**
 * Gets all CREATE TABLE statements from the database
 * @param connection - MySQL connection
 * @returns Array of CREATE TABLE statements
 */
async function getAllCreateTableStatements(connection: mysql.Connection): Promise<string[]> {
  const tables = await getTables(connection);
  const statements: string[] = [];

  for (const table of tables) {
    const createTable = await getCreateTableStatement(connection, table);
    if (createTable) {
      statements.push(createTable);
    }
  }

  return statements;
}

/**
 * Creates a full database migration.
 * @param options - Database connection settings and output paths.
 */
export const createMigration = async (options: CreateMigrationOptions) => {
  try {
    let version = await loadMigrationVersion(options.output);

    if (version > 0) {
      if (options.force) {
        console.warn(
          `⚠️ Warning: Migration already exists. Creating new migration with force flag...`,
        );
      } else {
        console.error(
          `❌ Error: Migration has already been created. Use --force flag to override.`,
        );
        process.exit(1);
      }
    }

    // Validate database connection parameters
    if (!options.host || !options.port || !options.user || !options.password || !options.dbName) {
      console.error(
        `❌ Error: Database connection parameters are required (host, port, user, password, dbName)`,
      );
      process.exit(1);
    }

    // Create database connection
    const connection = await mysql.createConnection({
      host: options.host,
      port: options.port,
      user: options.user,
      password: options.password,
      database: options.dbName,
    });

    try {
      console.log(`✅ Connected to database: ${options.dbName}`);

      // Get all CREATE TABLE statements from the database
      console.log(`📋 Fetching CREATE TABLE statements from database...`);
      const createStatements = await getAllCreateTableStatements(connection);

      if (createStatements.length === 0) {
        console.warn(`⚠️ Warning: No tables found in the database.`);
      } else {
        console.log(`✅ Found ${createStatements.length} table(s)`);
      }

      // Generate and save migration files
      const migrationFile = generateMigrationFile(createStatements, 1);
      saveMigrationFiles(migrationFile, 1, options.output);

      console.log(`✅ Migration successfully created!`);
      process.exit(0);
    } finally {
      await connection.end();
    }
  } catch (error) {
    console.error(`❌ Error during migration creation:`, error);
    process.exit(1);
  }
};
