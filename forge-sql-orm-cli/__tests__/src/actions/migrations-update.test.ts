// SPDX-FileCopyrightText: 2025-2026 Vasyl Zakharchenko
// SPDX-License-Identifier: MIT

import { describe, it, expect, beforeEach, afterEach, vi } from "vitest";
import fs from "fs";
import os from "os";
import path from "path";
import mysql from "mysql2/promise";

import {
  updateMigration,
  type UpdateMigrationOptions,
} from "../../../src/actions/migrations-update";

vi.mock("mysql2/promise", () => ({ default: { createConnection: vi.fn() } }));

// Each table object written into schema.ts carries its own metadata under __meta,
// so a single mock can return whatever the test set up.
vi.mock("forge-sql-orm", () => ({
  getTableMetadata: vi.fn((t: { __meta: unknown }) => t.__meta),
}));

type Row = Record<string, unknown>;
type ConnectionMock = { execute: ReturnType<typeof vi.fn>; end: ReturnType<typeof vi.fn> };

const asConnection = (c: ConnectionMock) =>
  c as unknown as Awaited<ReturnType<typeof mysql.createConnection>>;

// Builds a connection whose three INFORMATION_SCHEMA queries resolve to the given rows.
const mkConnection = (
  columns: Row[],
  indexes: Row[] = [],
  foreignKeys: Row[] = [],
): ConnectionMock => ({
  execute: vi
    .fn()
    .mockResolvedValueOnce([columns])
    .mockResolvedValueOnce([indexes])
    .mockResolvedValueOnce([foreignKeys]),
  end: vi.fn().mockResolvedValue(undefined),
});

const column = (over: Partial<Row> & { COLUMN_NAME: string; COLUMN_TYPE: string }): Row => ({
  TABLE_NAME: "users",
  IS_NULLABLE: "NO",
  COLUMN_KEY: "",
  EXTRA: "",
  COLUMN_DEFAULT: null,
  ...over,
});

describe("updateMigration", () => {
  let entitiesPath: string;
  let output: string;
  let exitSpy: ReturnType<typeof vi.spyOn>;
  let logSpy: ReturnType<typeof vi.spyOn>;

  const options = (): UpdateMigrationOptions => ({
    output,
    entitiesPath,
    host: "localhost",
    port: 3306,
    user: "root",
    password: "secret",
    dbName: "testdb",
  });

  const writeSchema = (source: string) =>
    fs.writeFileSync(path.join(entitiesPath, "schema.ts"), source);

  // A "users" table whose Drizzle definition only knows the given columns.
  const usersSchema = (columnsSource: string) =>
    writeSchema(
      `export const users = {
        __meta: {
          tableName: "users",
          columns: { ${columnsSource} },
          indexes: [],
          foreignKeys: [],
          uniqueConstraints: [],
          checks: [],
          primaryKeys: [],
          extras: [],
        },
      };`,
    );

  const idColumn = `id: { dataType: "number", notNull: true, columnType: "MySqlInt", name: "id", hasDefault: false, getSQLType: () => "int" }`;

  // Writes a "users" table with custom metadata arrays (indexes / fks / unique builders).
  const writeUsersSchema = (meta: {
    columns?: string;
    indexes?: string;
    foreignKeys?: string;
    uniqueConstraints?: string;
  }) =>
    writeSchema(
      `export const users = {
        __meta: {
          tableName: "users",
          columns: { ${meta.columns ?? idColumn} },
          indexes: [${meta.indexes ?? ""}],
          foreignKeys: [${meta.foreignKeys ?? ""}],
          uniqueConstraints: [${meta.uniqueConstraints ?? ""}],
          checks: [],
          primaryKeys: [],
          extras: [],
        },
      };`,
    );

  const idDbColumn = () =>
    column({ COLUMN_NAME: "id", COLUMN_TYPE: "int", EXTRA: "auto_increment", COLUMN_KEY: "PRI" });

  const mockConnection = (columns: Row[], indexes: Row[] = [], foreignKeys: Row[] = []) =>
    vi
      .mocked(mysql.createConnection)
      .mockResolvedValue(asConnection(mkConnection(columns, indexes, foreignKeys)));

  const setMigrationVersion = (version: number) =>
    fs.writeFileSync(
      path.join(output, "migrationCount.ts"),
      `export const MIGRATION_VERSION = ${version};`,
    );

  const readMigration = () => fs.readFileSync(path.join(output, "migrationV2.ts"), "utf-8");

  beforeEach(() => {
    entitiesPath = fs.mkdtempSync(path.join(os.tmpdir(), "fso-cli-upd-ent-"));
    output = fs.mkdtempSync(path.join(os.tmpdir(), "fso-cli-upd-out-"));
    exitSpy = vi.spyOn(process, "exit").mockImplementation((() => undefined) as unknown as never);
    logSpy = vi.spyOn(console, "log").mockImplementation(() => undefined);
    vi.spyOn(console, "warn").mockImplementation(() => undefined);
    vi.spyOn(console, "error").mockImplementation(() => undefined);
    setMigrationVersion(1);
  });
  afterEach(() => {
    fs.rmSync(entitiesPath, { recursive: true, force: true });
    fs.rmSync(output, { recursive: true, force: true });
    vi.restoreAllMocks();
  });

  it("exits early when no initial migration exists", async () => {
    fs.rmSync(path.join(output, "migrationCount.ts"), { force: true });
    // exit is a no-op so execution continues; the connection then fails fast.
    vi.mocked(mysql.createConnection).mockRejectedValue(new Error("should not connect cleanly"));

    await updateMigration(options());

    const logs = logSpy.mock.calls.map((c: unknown[]) => String(c[0])).join("\n");
    expect(logs).toContain("Initial migration not found");
  });

  it("generates a CREATE TABLE migration for a db table absent from the schema", async () => {
    writeSchema(
      `export const other = { __meta: { tableName: "other", columns: {}, indexes: [], foreignKeys: [], uniqueConstraints: [], checks: [], primaryKeys: [], extras: [] } };`,
    );
    vi.mocked(mysql.createConnection).mockResolvedValue(
      asConnection(
        mkConnection([
          column({
            COLUMN_NAME: "id",
            COLUMN_TYPE: "int",
            EXTRA: "auto_increment",
            COLUMN_KEY: "PRI",
          }),
        ]),
      ),
    );

    await updateMigration(options());

    const migration = readMigration();
    expect(migration).toContain("CREATE TABLE if not exists `users`");
    expect(migration).toContain("`id` int NOT NULL AUTO_INCREMENT");
    expect(exitSpy).toHaveBeenCalledWith(0);
  });

  it("adds a NOT NULL column via a nullable→update→modify pre-migration", async () => {
    usersSchema(idColumn);
    vi.mocked(mysql.createConnection).mockResolvedValue(
      asConnection(
        mkConnection([
          column({
            COLUMN_NAME: "id",
            COLUMN_TYPE: "int",
            EXTRA: "auto_increment",
            COLUMN_KEY: "PRI",
          }),
          column({
            COLUMN_NAME: "age",
            COLUMN_TYPE: "int",
            IS_NULLABLE: "NO",
            COLUMN_DEFAULT: "5",
          }),
        ]),
      ),
    );

    await updateMigration(options());

    const migration = readMigration();
    // step 1: add as NULL, step 2/3: update existing rows, step 4: enforce NOT NULL
    expect(migration).toContain("ADD COLUMN IF NOT EXISTS `age` int NULL DEFAULT 5");
    expect(migration).toContain("UPDATE `users` SET `age` = 5");
    expect(migration).toContain("MODIFY COLUMN IF EXISTS `age` int NOT NULL DEFAULT 5");
    expect(exitSpy).toHaveBeenCalledWith(0);
  });

  it("emits a MODIFY COLUMN statement when a column type changes", async () => {
    usersSchema(
      `${idColumn},
       name: { dataType: "string", notNull: false, columnType: "MySqlVarChar", name: "name", hasDefault: false, getSQLType: () => "varchar" }`,
    );
    vi.mocked(mysql.createConnection).mockResolvedValue(
      asConnection(
        mkConnection([
          column({
            COLUMN_NAME: "id",
            COLUMN_TYPE: "int",
            EXTRA: "auto_increment",
            COLUMN_KEY: "PRI",
          }),
          column({ COLUMN_NAME: "name", COLUMN_TYPE: "text", IS_NULLABLE: "YES" }),
        ]),
      ),
    );

    await updateMigration(options());

    const migration = readMigration();
    expect(migration).toContain("MODIFY COLUMN IF EXISTS `name` text NULL");
    expect(exitSpy).toHaveBeenCalledWith(0);
  });

  it("creates a database index that is missing from the schema", async () => {
    usersSchema(idColumn);
    vi.mocked(mysql.createConnection).mockResolvedValue(
      asConnection(
        mkConnection(
          [
            column({
              COLUMN_NAME: "id",
              COLUMN_TYPE: "int",
              EXTRA: "auto_increment",
              COLUMN_KEY: "PRI",
            }),
          ],
          [
            {
              TABLE_NAME: "users",
              INDEX_NAME: "idx_name",
              COLUMN_NAME: "id",
              NON_UNIQUE: 1,
              SEQ_IN_INDEX: 1,
            },
          ],
        ),
      ),
    );

    await updateMigration(options());

    const migration = readMigration();
    expect(migration).toContain("INDEX if not exists `idx_name`");
    expect(exitSpy).toHaveBeenCalledWith(0);
  });

  it("filters out statements already present in the previous migration", async () => {
    writeSchema(
      `export const other = { __meta: { tableName: "other", columns: {}, indexes: [], foreignKeys: [], uniqueConstraints: [], checks: [], primaryKeys: [], extras: [] } };`,
    );
    // Previous migration already contains the exact (whitespace-collapsed) CREATE TABLE.
    fs.writeFileSync(
      path.join(output, "migrationV1.ts"),
      `migrationRunner.enqueue("v1_MIGRATION0", "CREATE TABLE if not exists \`users\` ( \`id\` int NOT NULL AUTO_INCREMENT );");`,
    );
    vi.mocked(mysql.createConnection).mockResolvedValue(
      asConnection(
        mkConnection([
          column({
            COLUMN_NAME: "id",
            COLUMN_TYPE: "int",
            EXTRA: "auto_increment",
            COLUMN_KEY: "PRI",
          }),
        ]),
      ),
    );

    await updateMigration(options());

    expect(fs.existsSync(path.join(output, "migrationV2.ts"))).toBe(false);
    const logs = logSpy.mock.calls.map((c: unknown[]) => String(c[0])).join("\n");
    expect(logs).toContain("No new migration changes detected");
  });

  it("creates indexes and foreign keys for a db table absent from the schema", async () => {
    writeSchema(
      `export const other = { __meta: { tableName: "other", columns: {}, indexes: [], foreignKeys: [], uniqueConstraints: [], checks: [], primaryKeys: [], extras: [] } };`,
    );
    mockConnection(
      [idDbColumn(), column({ COLUMN_NAME: "org_id", COLUMN_TYPE: "int", IS_NULLABLE: "YES" })],
      [
        {
          TABLE_NAME: "users",
          INDEX_NAME: "PRIMARY",
          COLUMN_NAME: "id",
          NON_UNIQUE: 0,
          SEQ_IN_INDEX: 1,
        },
        {
          TABLE_NAME: "users",
          INDEX_NAME: "idx_org",
          COLUMN_NAME: "org_id",
          NON_UNIQUE: 1,
          SEQ_IN_INDEX: 1,
        },
      ],
      [
        {
          TABLE_NAME: "users",
          COLUMN_NAME: "org_id",
          CONSTRAINT_NAME: "fk_org",
          REFERENCED_TABLE_NAME: "orgs",
          REFERENCED_COLUMN_NAME: "id",
        },
      ],
    );

    await updateMigration(options());

    const migration = readMigration();
    expect(migration).toContain("CREATE TABLE if not exists `users`");
    expect(migration).toContain("INDEX if not exists `idx_org`");
    expect(migration).toContain("ADD CONSTRAINT `fk_org`");
  });

  it("skips foreign-key indexes when diffing an existing table", async () => {
    writeUsersSchema({ foreignKeys: `{ name: "fk_org", columns: [{ name: "org_id" }] }` });
    mockConnection(
      [idDbColumn()],
      [
        {
          TABLE_NAME: "users",
          INDEX_NAME: "fk_org",
          COLUMN_NAME: "org_id",
          NON_UNIQUE: 1,
          SEQ_IN_INDEX: 1,
        },
      ],
      [
        {
          TABLE_NAME: "users",
          COLUMN_NAME: "org_id",
          CONSTRAINT_NAME: "fk_org",
          REFERENCED_TABLE_NAME: "orgs",
          REFERENCED_COLUMN_NAME: "id",
        },
      ],
    );

    await updateMigration(options());

    // The index named like the FK is recognized as a foreign-key index and skipped,
    // and the FK exists on both sides, so there is nothing to migrate.
    expect(fs.existsSync(path.join(output, "migrationV2.ts"))).toBe(false);
    expect(exitSpy).toHaveBeenCalledWith(0);
  });

  it("drops and recreates an index whose columns changed", async () => {
    writeUsersSchema({ indexes: `{ name: "idx_name", columns: [{ name: "id" }] }` });
    mockConnection(
      [idDbColumn()],
      [
        {
          TABLE_NAME: "users",
          INDEX_NAME: "idx_name",
          COLUMN_NAME: "id",
          NON_UNIQUE: 1,
          SEQ_IN_INDEX: 1,
        },
        {
          TABLE_NAME: "users",
          INDEX_NAME: "idx_name",
          COLUMN_NAME: "name",
          NON_UNIQUE: 1,
          SEQ_IN_INDEX: 2,
        },
      ],
    );

    await updateMigration(options());

    const migration = readMigration();
    expect(migration).toContain("DROP INDEX `idx_name`");
    expect(migration).toContain("INDEX if not exists `idx_name`");
  });

  it("treats a unique constraint as the matching index", async () => {
    writeUsersSchema({ uniqueConstraints: `{ name: "uq_email", columns: [{ name: "email" }] }` });
    mockConnection(
      [idDbColumn()],
      [
        {
          TABLE_NAME: "users",
          INDEX_NAME: "uq_email",
          COLUMN_NAME: "email",
          NON_UNIQUE: 0,
          SEQ_IN_INDEX: 1,
        },
        {
          TABLE_NAME: "users",
          INDEX_NAME: "uq_email",
          COLUMN_NAME: "id",
          NON_UNIQUE: 0,
          SEQ_IN_INDEX: 2,
        },
      ],
    );

    await updateMigration(options());

    expect(readMigration()).toContain("`uq_email`");
  });

  it("reconciles foreign keys present in the db but absent from the schema", async () => {
    writeUsersSchema({ foreignKeys: `{ name: "fk_other", columns: [{ name: "zzz" }] }` });
    mockConnection(
      [idDbColumn()],
      [],
      [
        {
          TABLE_NAME: "users",
          COLUMN_NAME: "uid",
          CONSTRAINT_NAME: "fk1",
          REFERENCED_TABLE_NAME: "orgs",
          REFERENCED_COLUMN_NAME: "id",
        },
      ],
    );

    await updateMigration(options());

    const migration = readMigration();
    expect(migration).toContain("ADD CONSTRAINT `fk1` FOREIGN KEY (`uid`)");
    expect(migration).toContain("DROP FOREIGN KEY `fk_other`");
  });

  it("warns about an unnamed foreign key defined in the schema", async () => {
    const warnSpy = vi.spyOn(console, "warn");
    writeUsersSchema({ foreignKeys: `{ name: undefined, columns: [{ name: "uid" }] }` });
    mockConnection([idDbColumn()]);

    await updateMigration(options());

    const warnings = warnSpy.mock.calls.map((c: unknown[]) => String(c[0])).join("\n");
    expect(warnings).toContain("does not provide a name for FOREIGN KEY");
    expect(warnings).toContain("uid");
  });

  it("adds an update+modify pre-migration when a nullable column becomes NOT NULL", async () => {
    writeUsersSchema({
      columns: `${idColumn},
        email: { dataType: "string", notNull: false, columnType: "MySqlVarChar", name: "email", hasDefault: false, getSQLType: () => "varchar" }`,
    });
    mockConnection([
      idDbColumn(),
      column({ COLUMN_NAME: "email", COLUMN_TYPE: "varchar", IS_NULLABLE: "NO" }),
    ]);

    await updateMigration(options());

    const migration = readMigration();
    expect(migration).toContain("UPDATE `users` SET `email` = ?");
    expect(migration).toContain("MODIFY COLUMN IF EXISTS `email` varchar NOT NULL");
  });

  it("resolves Drizzle column defaults from both literals and SQL expressions", async () => {
    writeUsersSchema({
      columns: `${idColumn},
        status: { dataType: "string", notNull: false, columnType: "MySqlVarChar", name: "status", hasDefault: true, default: "active", getSQLType: () => "varchar" },
        created: { dataType: "date", notNull: false, columnType: "MySqlTimestamp", name: "created", hasDefault: true, default: { toQuery: () => ({ sql: "now()" }) }, getSQLType: () => "timestamp" }`,
    });
    mockConnection([idDbColumn()]);

    await updateMigration(options());

    // No db-side differences, so no migration is produced, but the default-building
    // code path (literal + toQuery) is exercised while assembling the Drizzle schema.
    expect(fs.existsSync(path.join(output, "migrationV2.ts"))).toBe(false);
    expect(exitSpy).toHaveBeenCalledWith(0);
  });

  it("exits with code 1 when the database connection fails", async () => {
    usersSchema(idColumn);
    vi.mocked(mysql.createConnection).mockRejectedValue(new Error("connection refused"));

    await updateMigration(options());

    expect(exitSpy).toHaveBeenCalledWith(1);
  });
});
