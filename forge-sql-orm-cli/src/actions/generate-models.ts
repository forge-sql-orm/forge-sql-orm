// SPDX-FileCopyrightText: 2025-2026 Vasyl Zakharchenko
// SPDX-License-Identifier: MIT

import "reflect-metadata";
import fs from "node:fs";
import path from "node:path";
import { execFileSync } from "node:child_process";

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
 * Interface for a drizzle-kit snapshot DDL entity (`snapshot.json` -> `ddl`)
 */
interface SnapshotEntity {
  entityType: string;
  table?: string;
  name: string;
  type?: string;
  notNull?: boolean;
}

/**
 * Interface for column metadata
 */
interface ColumnMetadata {
  name: string;
  type: string;
  notNull: boolean;
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

/** Drizzle date/time column builders and the forge custom types that replace them. */
const FORGE_DATE_TYPES: Record<string, string> = {
  datetime: "forgeDateTimeString",
  timestamp: "forgeTimestampString",
  date: "forgeDateString",
  time: "forgeTimeString",
};

/** Matches `type()`, `type("name")`, `type({ ... })` and `type("name", { ... })`. */
const DATE_COLUMN_PATTERN =
  /\b(datetime|timestamp|date|time)\(\s*(?:(['"])([^'"]+)\2)?\s*,?\s*(?:\{[^{}]*\})?\s*\)/g;

/**
 * Replaces MySQL types with custom types in the generated schema
 * @param schemaContent - The content of the generated schema file
 * @returns Modified schema content with custom types
 */
function replaceMySQLTypes(schemaContent: string): string {
  // Add imports at the top of the file
  const imports = `import { forgeDateTimeString, forgeTimeString, forgeDateString, forgeTimestampString } from "forge-sql-orm";\n\n`;

  // Replace date/time column builders, with or without a column name and column config
  // (e.g. `datetime("c")`, `datetime({ fsp: 3 })`, `timestamp("c", { mode: "string" })`)
  let modifiedContent = schemaContent.replace(
    DATE_COLUMN_PATTERN,
    (_match, type: string, _quote: string | undefined, columnName: string | undefined) =>
      `${FORGE_DATE_TYPES[type]}(${columnName ? `'${columnName}'` : ""})`,
  );

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

/** Strips length/precision from a MySQL column type: `datetime(3)` -> `datetime`. */
function baseColumnType(type: string): string {
  return type.replace(/\(.*$/, "").trim().toLowerCase();
}

/** Groups the snapshot columns by table name. */
function readSnapshotTables(snapshotFile: string): Map<string, ColumnMetadata[]> {
  const snapshot = JSON.parse(fs.readFileSync(snapshotFile, "utf-8")) as { ddl: SnapshotEntity[] };
  const tables = new Map<string, ColumnMetadata[]>();
  for (const entity of snapshot.ddl) {
    if (entity.entityType === "tables") {
      tables.set(entity.name, tables.get(entity.name) ?? []);
    } else if (entity.entityType === "columns" && entity.table) {
      const columns = tables.get(entity.table) ?? [];
      columns.push({
        name: entity.name,
        type: baseColumnType(entity.type ?? ""),
        notNull: entity.notNull === true,
      });
      tables.set(entity.table, columns);
    }
  }
  return tables;
}

/**
 * Reads the drizzle snapshot and builds the version-metadata map for all tables.
 */
function buildAdditionalMetadata(
  snapshotFile: string | undefined,
  versionFieldName: string,
): AdditionalMetadata {
  const additionalMetadata: AdditionalMetadata = {};
  if (!snapshotFile) {
    return additionalMetadata;
  }

  for (const [tableName, columns] of readSnapshotTables(snapshotFile)) {
    if (tableName.toLowerCase().startsWith("a_")) {
      console.warn(
        `⚠️  Table "${tableName}" starts with "a_". KVS Cache will not work with this table because such tables are ignored in cache operations.`,
      );
    }

    const versionColumn = columns.find((col) => col.name.toLowerCase() === versionFieldName);
    if (!versionColumn) {
      continue;
    }

    const metadata = resolveVersionField(tableName, versionColumn);
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

/** Lists drizzle-kit migration folders (`<timestamp>_<name>/snapshot.json`) in the output directory. */
function listMigrationFolders(output: string): string[] {
  if (!fs.existsSync(output)) {
    return [];
  }
  return fs
    .readdirSync(output, { withFileTypes: true })
    .filter(
      (entry) =>
        entry.isDirectory() && fs.existsSync(path.join(output, entry.name, "snapshot.json")),
    )
    .map((entry) => entry.name)
    .sort();
}

/** Removes the migration folders drizzle-kit created, they are not needed by forge-sql-orm. */
function cleanupGeneratedArtifacts(output: string, createdFolders: string[]): void {
  for (const folder of createdFolders) {
    fs.rmSync(path.join(output, folder), { recursive: true, force: true });
    console.log(`✅ Removed: ${path.join(output, folder)}`);
  }
}

const NPX_COMMAND = process.platform === "win32" ? "npx.cmd" : "npx";

/**
 * Generates models for all tables in the database using drizzle-kit
 * @param options - Generation options
 */
export const generateModels = (options: GenerateModelsOptions): void => {
  try {
    const foldersBefore = new Set(listMigrationFolders(options.output));

    // Generate models using drizzle-kit pull
    // Arguments are passed as an array (no shell) so user input cannot inject commands
    execFileSync(
      NPX_COMMAND,
      [
        "drizzle-kit",
        "pull",
        "--dialect",
        "mysql",
        "--url",
        `mysql://${options.user}:${options.password}@${options.host}:${options.port}/${options.dbName}`,
        "--out",
        options.output,
      ],
      { encoding: "utf-8" },
    );

    const createdFolders = listMigrationFolders(options.output).filter(
      (folder) => !foldersBefore.has(folder),
    );
    const latestFolder = createdFolders.at(-1);
    const additionalMetadata = buildAdditionalMetadata(
      latestFolder ? path.join(options.output, latestFolder, "snapshot.json") : undefined,
      options.versionField,
    );

    fs.writeFileSync(
      path.join(options.output, "index.ts"),
      renderVersionMetadata(additionalMetadata),
    );

    rewriteSchemaTypes(options.output);
    cleanupGeneratedArtifacts(options.output, createdFolders);

    console.log(`✅ Successfully generated models and version metadata`);
    process.exit(0);
  } catch (error) {
    console.error(`❌ Error during model generation:`, error);
    process.exit(1);
  }
};
