// SPDX-FileCopyrightText: 2025-2026 Vasyl Zakharchenko
// SPDX-License-Identifier: MIT

import { describe, it, expect, beforeEach, afterEach, vi } from "vitest";
import fs from "fs";
import os from "os";
import path from "path";

import { dropMigration, type DropMigrationOptions } from "../../../src/actions/migrations-drops";

vi.mock("forge-sql-orm", () => ({
  getTableMetadata: vi.fn((table: { tableName: string }) => ({ tableName: table.tableName })),
  generateDropTableStatements: vi.fn((names: string[]) =>
    names.map((n) => `DROP TABLE IF EXISTS \`${n}\`;`),
  ),
}));

describe("dropMigration", () => {
  let entitiesPath: string;
  let output: string;
  let exitSpy: ReturnType<typeof vi.spyOn>;

  beforeEach(() => {
    entitiesPath = fs.mkdtempSync(path.join(os.tmpdir(), "fso-cli-drop-ent-"));
    output = fs.mkdtempSync(path.join(os.tmpdir(), "fso-cli-drop-out-"));
    exitSpy = vi.spyOn(process, "exit").mockImplementation((() => undefined) as unknown as never);
    vi.spyOn(console, "log").mockImplementation(() => undefined);
    vi.spyOn(console, "error").mockImplementation(() => undefined);
  });
  afterEach(() => {
    fs.rmSync(entitiesPath, { recursive: true, force: true });
    fs.rmSync(output, { recursive: true, force: true });
    vi.restoreAllMocks();
  });

  const options = (): DropMigrationOptions => ({ entitiesPath, output });

  it("generates DROP statements for every exported table", async () => {
    fs.writeFileSync(
      path.join(entitiesPath, "schema.ts"),
      `export const users = { tableName: "users" };
       export const posts = { tableName: "posts" };`,
    );

    await dropMigration(options());

    const migration = fs.readFileSync(path.join(output, "migrationV1.ts"), "utf-8");
    expect(migration).toContain("DROP TABLE IF EXISTS `users`");
    expect(migration).toContain("DROP TABLE IF EXISTS `posts`");
    expect(migration).toContain('import { MigrationRunner } from "@forge/sql/out/migration";');
    expect(fs.readFileSync(path.join(output, "migrationCount.ts"), "utf-8")).toContain(
      "MIGRATION_VERSION = 1",
    );
    expect(exitSpy).toHaveBeenCalledWith(0);
  });

  it("writes a migration index that imports the generated migration", async () => {
    fs.writeFileSync(
      path.join(entitiesPath, "schema.ts"),
      `export const users = { tableName: "users" };`,
    );

    await dropMigration(options());

    const index = fs.readFileSync(path.join(output, "index.ts"), "utf-8");
    expect(index).toContain("MIGRATION_VERSION");
    expect(index).toContain("migrationRunner");
  });

  it("exits with code 1 when the schema file is missing", async () => {
    await dropMigration(options());
    expect(exitSpy).toHaveBeenCalledWith(1);
    expect(fs.existsSync(path.join(output, "migrationV1.ts"))).toBe(false);
  });

  it("exits with code 1 when the schema exports no tables", async () => {
    fs.writeFileSync(path.join(entitiesPath, "schema.ts"), "// no exports here");
    await dropMigration(options());
    expect(exitSpy).toHaveBeenCalledWith(1);
    expect(fs.existsSync(path.join(output, "migrationV1.ts"))).toBe(false);
  });
});
