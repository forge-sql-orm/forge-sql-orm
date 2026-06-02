// SPDX-FileCopyrightText: 2025-2026 Vasyl Zakharchenko
// SPDX-License-Identifier: MIT

import { describe, it, expect, beforeEach, afterEach, vi } from "vitest";
import fs from "fs";
import os from "os";
import path from "path";
import mysql from "mysql2/promise";

import {
  cleanSQLStatement,
  generateMigrationFile,
  saveMigrationFiles,
  loadMigrationVersion,
  createMigration,
  type CreateMigrationOptions,
} from "../../../src/actions/migrations-create";

vi.mock("mysql2/promise", () => ({
  default: { createConnection: vi.fn() },
}));

const makeTmpDir = () => fs.mkdtempSync(path.join(os.tmpdir(), "fso-cli-create-"));

describe("cleanSQLStatement", () => {
  it("adds IF NOT EXISTS to CREATE TABLE / INDEX / UNIQUE INDEX", () => {
    expect(cleanSQLStatement("CREATE TABLE `users` (id int)")).toContain(
      "CREATE TABLE IF NOT EXISTS `users`",
    );
    expect(cleanSQLStatement("CREATE INDEX idx ON `users` (id)")).toContain(
      "CREATE INDEX IF NOT EXISTS idx",
    );
    expect(cleanSQLStatement("CREATE UNIQUE INDEX idx ON `users` (id)")).toContain(
      "CREATE UNIQUE INDEX IF NOT EXISTS idx",
    );
  });

  it("does not duplicate IF NOT EXISTS when already present", () => {
    const sql = "CREATE TABLE IF NOT EXISTS `users` (id int)";
    expect(cleanSQLStatement(sql)).toBe("CREATE TABLE IF NOT EXISTS `users` (id int)");
  });

  it("does not touch ALTER TABLE statements", () => {
    const sql = "ALTER TABLE `users` ADD CONSTRAINT `fk` FOREIGN KEY (a) REFERENCES b(c);";
    expect(cleanSQLStatement(sql)).not.toContain("IF NOT EXISTS");
  });

  it("strips the trailing charset/engine options", () => {
    const sql = "CREATE TABLE `users` (id int) DEFAULT CHARACTER SET utf8mb4 ENGINE = InnoDB;";
    const cleaned = cleanSQLStatement(sql);
    expect(cleaned).not.toMatch(/character set/i);
    expect(cleaned).not.toMatch(/engine/i);
    expect(cleaned).toContain("CREATE TABLE IF NOT EXISTS `users`");
  });
});

describe("generateMigrationFile", () => {
  it("renders one .enqueue() line per statement with a versioned id", () => {
    const out = generateMigrationFile(
      ["CREATE TABLE `a` (id int)", "CREATE TABLE `b` (id int)"],
      2,
    );
    expect(out).toContain('import { MigrationRunner } from "@forge/sql/out/migration";');
    expect(out).toContain('.enqueue("v2_MIGRATION0"');
    expect(out).toContain('.enqueue("v2_MIGRATION1"');
    // statements are normalized (collapsed whitespace) and IF NOT EXISTS added
    expect(out).toContain("CREATE TABLE IF NOT EXISTS `a`");
  });

  it("collapses internal whitespace in statements", () => {
    const out = generateMigrationFile(["CREATE TABLE `a` (id   int,   name   text)"], 1);
    expect(out).toContain("CREATE TABLE IF NOT EXISTS `a` (id int, name text)");
  });
});

describe("saveMigrationFiles", () => {
  let dir: string;
  beforeEach(() => {
    dir = makeTmpDir();
  });
  afterEach(() => {
    fs.rmSync(dir, { recursive: true, force: true });
  });

  it("writes migration, count and index files", () => {
    saveMigrationFiles("// migration code", 1, dir);

    expect(fs.existsSync(path.join(dir, "migrationV1.ts"))).toBe(true);
    expect(fs.readFileSync(path.join(dir, "migrationCount.ts"), "utf-8")).toContain(
      "export const MIGRATION_VERSION = 1;",
    );
    const index = fs.readFileSync(path.join(dir, "index.ts"), "utf-8");
    expect(index).toContain('import v1 from "./migrationV1";');
    expect(index).toContain("v1(migrationRunner);");
  });

  it("creates the output directory when it does not exist", () => {
    const nested = path.join(dir, "deep", "migration");
    saveMigrationFiles("// code", 2, nested);
    expect(fs.existsSync(path.join(nested, "migrationV2.ts"))).toBe(true);
  });

  it("emits an import/call line for every version up to the given version", () => {
    saveMigrationFiles("// code", 3, dir);
    const index = fs.readFileSync(path.join(dir, "index.ts"), "utf-8");
    expect(index).toContain('import v1 from "./migrationV1";');
    expect(index).toContain('import v3 from "./migrationV3";');
    expect(index).toContain("v2(migrationRunner);");
  });
});

describe("loadMigrationVersion", () => {
  let dir: string;
  beforeEach(() => {
    dir = makeTmpDir();
  });
  afterEach(() => {
    fs.rmSync(dir, { recursive: true, force: true });
  });

  it("returns 0 when migrationCount.ts is missing", async () => {
    await expect(loadMigrationVersion(dir)).resolves.toBe(0);
  });

  it("returns the version exported from migrationCount.ts", async () => {
    fs.writeFileSync(path.join(dir, "migrationCount.ts"), "export const MIGRATION_VERSION = 7;");
    await expect(loadMigrationVersion(dir)).resolves.toBe(7);
  });

  it("exits with code 1 when migrationCount.ts cannot be imported", async () => {
    const exitSpy = vi
      .spyOn(process, "exit")
      .mockImplementation((() => undefined) as unknown as never);
    vi.spyOn(console, "error").mockImplementation(() => undefined);
    fs.writeFileSync(path.join(dir, "migrationCount.ts"), "throw new Error('boom');");

    await loadMigrationVersion(dir);

    expect(exitSpy).toHaveBeenCalledWith(1);
    vi.restoreAllMocks();
  });
});

describe("createMigration", () => {
  let dir: string;
  let exitSpy: ReturnType<typeof vi.spyOn>;

  const baseOptions = (output: string): CreateMigrationOptions => ({
    output,
    entitiesPath: output,
    host: "localhost",
    port: 3306,
    user: "root",
    password: "secret",
    dbName: "testdb",
  });

  beforeEach(() => {
    dir = makeTmpDir();
    exitSpy = vi.spyOn(process, "exit").mockImplementation((() => undefined) as unknown as never);
    vi.spyOn(console, "log").mockImplementation(() => undefined);
    vi.spyOn(console, "error").mockImplementation(() => undefined);
    vi.spyOn(console, "warn").mockImplementation(() => undefined);
  });
  afterEach(() => {
    fs.rmSync(dir, { recursive: true, force: true });
    vi.restoreAllMocks();
  });

  it("fetches CREATE TABLE statements and writes a v1 migration", async () => {
    const connection = {
      execute: vi
        .fn()
        .mockResolvedValueOnce([[{ Tables_in_testdb: "users" }]]) // SHOW TABLES
        .mockResolvedValueOnce([
          [{ Table: "users", "Create Table": "CREATE TABLE `users` (`id` int)" }],
        ]), // SHOW CREATE TABLE
      end: vi.fn().mockResolvedValue(undefined),
    };
    vi.mocked(mysql.createConnection).mockResolvedValue(
      connection as unknown as Awaited<ReturnType<typeof mysql.createConnection>>,
    );

    await createMigration(baseOptions(dir));

    expect(connection.execute).toHaveBeenCalledTimes(2);
    expect(connection.end).toHaveBeenCalled();
    expect(fs.existsSync(path.join(dir, "migrationV1.ts"))).toBe(true);
    const migration = fs.readFileSync(path.join(dir, "migrationV1.ts"), "utf-8");
    expect(migration).toContain("CREATE TABLE IF NOT EXISTS `users`");
    expect(exitSpy).toHaveBeenCalledWith(0);
  });

  it("exits with code 1 when connection params are missing", async () => {
    const opts = { ...baseOptions(dir), host: undefined };
    // exit is a no-op, so a missing connection still resolves; assert the error exit code.
    vi.mocked(mysql.createConnection).mockRejectedValue(new Error("no connection"));

    await createMigration(opts as CreateMigrationOptions);

    expect(exitSpy).toHaveBeenCalledWith(1);
  });

  it("refuses to overwrite an existing migration without --force", async () => {
    fs.writeFileSync(path.join(dir, "migrationCount.ts"), "export const MIGRATION_VERSION = 1;");
    exitSpy.mockImplementation(((code: number) => {
      throw new Error(`exit:${code}`);
    }) as never);

    await expect(createMigration(baseOptions(dir))).rejects.toThrow("exit:1");
    expect(mysql.createConnection).not.toHaveBeenCalled();
  });

  it("warns (but proceeds) with --force when a migration already exists and the db has no tables", async () => {
    fs.writeFileSync(path.join(dir, "migrationCount.ts"), "export const MIGRATION_VERSION = 1;");
    const warnSpy = vi.spyOn(console, "warn").mockImplementation(() => undefined);
    const connection = {
      execute: vi.fn().mockResolvedValueOnce([[]]), // SHOW TABLES -> no tables
      end: vi.fn().mockResolvedValue(undefined),
    };
    vi.mocked(mysql.createConnection).mockResolvedValue(
      connection as unknown as Awaited<ReturnType<typeof mysql.createConnection>>,
    );

    await createMigration({ ...baseOptions(dir), force: true });

    const warnings = warnSpy.mock.calls.map((c: unknown[]) => String(c[0])).join("\n");
    expect(warnings).toContain("Migration already exists");
    expect(warnings).toContain("No tables found");
    expect(exitSpy).toHaveBeenCalledWith(0);
  });

  it("skips tables whose SHOW CREATE TABLE returns no row", async () => {
    const connection = {
      execute: vi
        .fn()
        .mockResolvedValueOnce([[{ Tables_in_testdb: "ghost" }]]) // SHOW TABLES
        .mockResolvedValueOnce([[]]), // SHOW CREATE TABLE -> empty
      end: vi.fn().mockResolvedValue(undefined),
    };
    vi.mocked(mysql.createConnection).mockResolvedValue(
      connection as unknown as Awaited<ReturnType<typeof mysql.createConnection>>,
    );

    await createMigration(baseOptions(dir));

    // No CREATE TABLE statement was collected, so the migration body has no enqueue lines.
    const migration = fs.readFileSync(path.join(dir, "migrationV1.ts"), "utf-8");
    expect(migration).not.toContain(".enqueue(");
    expect(exitSpy).toHaveBeenCalledWith(0);
  });
});
