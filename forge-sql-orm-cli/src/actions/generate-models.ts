// SPDX-FileCopyrightText: 2025-2026 Vasyl Zakharchenko
// SPDX-License-Identifier: MIT

import "reflect-metadata";
import fs from "node:fs";
import path from "node:path";
import { execSync } from "node:child_process";

/**
 * Options for model generation
 */
export interface GenerateModelsOptions {
  host: string;
  port: number;
  user: string;
  password: string;
  dbName: string;
  output: string;
  versionField: string;
}

/**
 * Interface for column metadata
 */
interface ColumnMetadata {
  autoincrement: boolean;
  name: string;
  type: string;
  primaryKey: boolean;
  notNull: boolean;
}

/**
 * Interface for table metadata
 */
interface TableMetadata {
  name: string;
  columns: Record<string, ColumnMetadata>;
  compositePrimaryKeys: Record<string, { name: string; columns: string[] }>;
  indexes: Record<string, unknown>;
  foreignKeys: Record<string, unknown>;
  uniqueConstraints: Record<string, unknown>;
  checkConstraint: Record<string, unknown>;
}

/**
 * Interface for version field metadata
 */
interface VersionFieldMetadata {
  fieldName: string;
}

/**
 * Interface for table version metadata
 */
interface TableVersionMetadata {
  tableName: string;
  versionField: VersionFieldMetadata;
}

/**
 * Type for additional metadata map
 */
type AdditionalMetadata = Record<string, TableVersionMetadata>;

/**
 * Interface for journal entry
 */
interface JournalEntry {
  idx: number;
  version: string;
  when: number;
  tag: string;
  breakpoints: boolean;
}

/**
 * Interface for journal data
 */
interface JournalData {
  version: string;
  dialect: string;
  entries: JournalEntry[];
}

/**
 * Replaces MySQL types with custom types in the generated schema
 * @param schemaContent - The content of the generated schema file
 * @returns Modified schema content with custom types
 */
function replaceMySQLTypes(schemaContent: string): string {
  // Add imports at the top of the file
  const imports = `import { forgeDateTimeString, forgeTimeString, forgeDateString, forgeTimestampString } from "forge-sql-orm";\n\n`;

  // Replace types in the content
  let modifiedContent = schemaContent
    // Handle datetime with column name and mode option
    .replace(
      /datetime\(['"]([^'"]+)['"],\s*{\s*mode:\s*['"]string['"]\s*}\)/g,
      "forgeDateTimeString('$1')",
    )
    // Handle datetime with column name only
    .replace(/datetime\(['"]([^'"]+)['"]\)/g, "forgeDateTimeString('$1')")
    // Handle datetime with mode option only
    .replace(/datetime\(\s*{\s*mode:\s*['"]string['"]\s*}\s*\)/g, "forgeDateTimeString()")
    // Handle time with column name and mode option
    .replace(/time\(['"]([^'"]+)['"],\s*{\s*mode:\s*['"]string['"]\s*}\)/g, "forgeTimeString('$1')")
    // Handle time with column name only
    .replace(/time\(['"]([^'"]+)['"]\)/g, "forgeTimeString('$1')")
    // Handle time with mode option only
    .replace(/time\(\s*{\s*mode:\s*['"]string['"]\s*}\s*\)/g, "forgeTimeString()")
    // Handle date with column name and mode option
    .replace(/date\(['"]([^'"]+)['"],\s*{\s*mode:\s*['"]string['"]\s*}\)/g, "forgeDateString('$1')")
    // Handle date with column name only
    .replace(/date\(['"]([^'"]+)['"]\)/g, "forgeDateString('$1')")
    // Handle date with mode option only
    .replace(/date\(\s*{\s*mode:\s*['"]string['"]\s*}\s*\)/g, "forgeDateString()")
    // Handle timestamp with column name and mode option
    .replace(
      /timestamp\(['"]([^'"]+)['"],\s*{\s*mode:\s*['"]string['"]\s*}\)/g,
      "forgeTimestampString('$1')",
    )
    // Handle timestamp with column name only
    .replace(/timestamp\(['"]([^'"]+)['"]\)/g, "forgeTimestampString('$1')")
    // Handle timestamp with mode option only
    .replace(/timestamp\(\s*{\s*mode:\s*['"]string['"]\s*}\s*\)/g, "forgeTimestampString()");

  // Add imports if they don't exist
  if (!modifiedContent.includes("import { forgeDateTimeString")) {
    modifiedContent = imports + modifiedContent;
  }

  return modifiedContent;
}

/** MySQL/Drizzle column types supported for optimistic-locking version fields. */
const SUPPORTED_VERSION_TYPES = new Set(["datetime", "timestamp", "int", "number", "decimal"]);

/**
 * Validates a version-field column and returns its metadata, or undefined
 * (after logging a warning) when the column cannot be used for versioning.
 */
function resolveVersionField(
  tableName: string,
  col: ColumnMetadata,
): TableVersionMetadata | undefined {
  if (col.notNull && SUPPORTED_VERSION_TYPES.has(col.type)) {
    return { tableName, versionField: { fieldName: col.name } };
  }

  if (col.notNull) {
    console.warn(
      `Version field "${col.name}" in table ${tableName} has unsupported type "${col.type}". ` +
        `Only datetime, timestamp, int, and decimal types are supported for versioning. Versioning will be skipped.`,
    );
  } else {
    console.warn(
      `Version field "${col.name}" in table ${tableName} is nullable. Versioning may not work correctly.`,
    );
  }
  return undefined;
}

/**
 * Reads the drizzle snapshot and builds the version-metadata map for all tables.
 */
function buildAdditionalMetadata(metaDir: string, versionFieldName: string): AdditionalMetadata {
  const additionalMetadata: AdditionalMetadata = {};
  const snapshotFile = path.join(metaDir, "0000_snapshot.json");
  if (!fs.existsSync(snapshotFile)) {
    return additionalMetadata;
  }

  const snapshotData = JSON.parse(fs.readFileSync(snapshotFile, "utf-8"));
  for (const [tableName, tableData] of Object.entries(snapshotData.tables)) {
    const table = tableData as TableMetadata;

    if (tableName.toLowerCase().startsWith("a_")) {
      console.warn(
        `⚠️  Table "${tableName}" starts with "a_". KVS Cache will not work with this table because such tables are ignored in cache operations.`,
      );
    }

    const versionEntry = Object.entries(table.columns).find(
      ([, col]) => col.name.toLowerCase() === versionFieldName,
    );
    if (!versionEntry) {
      continue;
    }

    const metadata = resolveVersionField(tableName, versionEntry[1]);
    if (metadata) {
      additionalMetadata[tableName] = metadata;
    }
  }
  return additionalMetadata;
}

/** Renders the generated `index.ts` exporting schema, relations and version metadata. */
function renderVersionMetadata(additionalMetadata: AdditionalMetadata): string {
  return `/**
 * This file was auto-generated by forge-sql-orm
 * Generated at: ${new Date().toISOString()}
 *
 * DO NOT EDIT THIS FILE MANUALLY
 * Any changes will be overwritten on next generation
 */


export * from "./relations";
export * from "./schema";

export interface VersionFieldMetadata {
  fieldName: string;
}

export interface TableMetadata {
  tableName: string;
  versionField: VersionFieldMetadata;
}

export type AdditionalMetadata = Record<string, TableMetadata>;

export const additionalMetadata: AdditionalMetadata = ${JSON.stringify(additionalMetadata, null, 2)};
`;
}

/** Rewrites MySQL column types in the generated schema to forge custom types. */
function rewriteSchemaTypes(output: string): void {
  const schemaPath = path.join(output, "schema.ts");
  if (!fs.existsSync(schemaPath)) {
    return;
  }
  fs.writeFileSync(schemaPath, replaceMySQLTypes(fs.readFileSync(schemaPath, "utf-8")));
  console.log(`✅ Updated schema types in: ${schemaPath}`);
}

/** Removes drizzle-kit migration/meta artifacts that are not needed by forge-sql-orm. */
function cleanupGeneratedArtifacts(output: string, metaDir: string): void {
  const migrationDir = path.join(output, "migrations");
  if (fs.existsSync(migrationDir)) {
    fs.rmSync(migrationDir, { recursive: true, force: true });
    console.log(`✅ Removed: ${migrationDir}`);
  }

  if (!fs.existsSync(metaDir)) {
    return;
  }

  const journalFile = path.join(metaDir, "_journal.json");
  if (fs.existsSync(journalFile)) {
    const journalData = JSON.parse(fs.readFileSync(journalFile, "utf-8")) as JournalData;
    for (const entry of journalData.entries) {
      const sqlFile = path.join(output, `${entry.tag}.sql`);
      if (fs.existsSync(sqlFile)) {
        fs.rmSync(sqlFile, { force: true });
        console.log(`✅ Removed SQL file: ${entry.tag}.sql`);
      }
    }
  }

  fs.rmSync(metaDir, { recursive: true, force: true });
  console.log(`✅ Removed: ${metaDir}`);
}

/**
 * Generates models for all tables in the database using drizzle-kit
 * @param options - Generation options
 */
export const generateModels = async (options: GenerateModelsOptions) => {
  try {
    // Generate models using drizzle-kit pull
    execSync(
      `npx drizzle-kit pull --dialect mysql --url mysql://${options.user}:${options.password}@${options.host}:${options.port}/${options.dbName} --out ${options.output}`,
      { encoding: "utf-8" },
    );

    const metaDir = path.join(options.output, "meta");
    const additionalMetadata = fs.existsSync(metaDir)
      ? buildAdditionalMetadata(metaDir, options.versionField)
      : {};

    fs.writeFileSync(
      path.join(options.output, "index.ts"),
      renderVersionMetadata(additionalMetadata),
    );

    rewriteSchemaTypes(options.output);
    cleanupGeneratedArtifacts(options.output, metaDir);

    console.log(`✅ Successfully generated models and version metadata`);
    process.exit(0);
  } catch (error) {
    console.error(`❌ Error during model generation:`, error);
    process.exit(1);
  }
};
