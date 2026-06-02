// SPDX-FileCopyrightText: 2025-2026 Vasyl Zakharchenko
// SPDX-License-Identifier: MIT

import { describe, it, expect, beforeEach, afterEach, vi } from "vitest";
import fs from "fs";
import os from "os";
import path from "path";
import { execSync } from "child_process";

import { generateModels, type GenerateModelsOptions } from "../../../src/actions/generate-models";

vi.mock("child_process", () => ({ execSync: vi.fn() }));

interface SnapshotColumn {
  name: string;
  type: string;
  notNull: boolean;
}

const snapshotTable = (columns: Record<string, SnapshotColumn>) => ({
  name: "tbl",
  columns,
  compositePrimaryKeys: {},
  indexes: {},
  foreignKeys: {},
  uniqueConstraints: {},
  checkConstraint: {},
});

describe("generateModels", () => {
  let dir: string;
  let exitSpy: ReturnType<typeof vi.spyOn>;
  let warnSpy: ReturnType<typeof vi.spyOn>;

  const options = (): GenerateModelsOptions => ({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "secret",
    dbName: "testdb",
    output: dir,
    versionField: "version",
  });

  beforeEach(() => {
    dir = fs.mkdtempSync(path.join(os.tmpdir(), "fso-cli-gen-"));
    exitSpy = vi.spyOn(process, "exit").mockImplementation((() => undefined) as unknown as never);
    vi.spyOn(console, "log").mockImplementation(() => undefined);
    warnSpy = vi.spyOn(console, "warn").mockImplementation(() => undefined);
    vi.spyOn(console, "error").mockImplementation(() => undefined);

    const metaDir = path.join(dir, "meta");
    fs.mkdirSync(metaDir, { recursive: true });
    fs.writeFileSync(
      path.join(metaDir, "0000_snapshot.json"),
      JSON.stringify({
        tables: {
          users: snapshotTable({
            id: { name: "id", type: "int", notNull: true },
            version: { name: "version", type: "int", notNull: true },
          }),
          a_cache: snapshotTable({
            id: { name: "id", type: "int", notNull: true },
          }),
          posts: snapshotTable({
            version: { name: "version", type: "int", notNull: false },
          }),
          logs: snapshotTable({
            version: { name: "version", type: "varchar", notNull: true },
          }),
        },
      }),
    );
    fs.writeFileSync(
      path.join(metaDir, "_journal.json"),
      JSON.stringify({ version: "7", dialect: "mysql", entries: [{ tag: "0000_init" }] }),
    );
    fs.writeFileSync(path.join(dir, "0000_init.sql"), "CREATE TABLE x;");
    fs.mkdirSync(path.join(dir, "migrations"), { recursive: true });
  });

  afterEach(() => {
    fs.rmSync(dir, { recursive: true, force: true });
    vi.restoreAllMocks();
  });

  it("invokes drizzle-kit pull with the connection url", async () => {
    fs.writeFileSync(path.join(dir, "schema.ts"), "// empty");
    await generateModels(options());

    expect(execSync).toHaveBeenCalledTimes(1);
    const cmd = vi.mocked(execSync).mock.calls[0][0] as string;
    expect(cmd).toContain("drizzle-kit pull");
    expect(cmd).toContain("mysql://root:secret@localhost:3306/testdb");
    expect(exitSpy).toHaveBeenCalledWith(0);
  });

  it("writes version metadata only for supported, NOT NULL version fields", async () => {
    fs.writeFileSync(path.join(dir, "schema.ts"), "// empty");
    await generateModels(options());

    const index = fs.readFileSync(path.join(dir, "index.ts"), "utf-8");
    expect(index).toContain('export * from "./schema";');
    expect(index).toContain('"users"');
    // nullable / unsupported / a_-prefixed tables are excluded from metadata
    expect(index).not.toContain('"posts"');
    expect(index).not.toContain('"logs"');
  });

  it("warns about a_-prefixed tables, nullable and unsupported version fields", async () => {
    fs.writeFileSync(path.join(dir, "schema.ts"), "// empty");
    await generateModels(options());

    const warnings = warnSpy.mock.calls.map((c: unknown[]) => String(c[0])).join("\n");
    expect(warnings).toContain('Table "a_cache" starts with "a_"');
    expect(warnings).toContain("is nullable");
    expect(warnings).toContain('unsupported type "varchar"');
  });

  it("rewrites MySQL types in schema.ts to forge custom types", async () => {
    fs.writeFileSync(
      path.join(dir, "schema.ts"),
      `export const t = { created: datetime('created_at', { mode: 'string' }) };`,
    );
    await generateModels(options());

    const schema = fs.readFileSync(path.join(dir, "schema.ts"), "utf-8");
    expect(schema).toContain("import { forgeDateTimeString");
    expect(schema).toContain("forgeDateTimeString('created_at')");
    expect(schema).not.toContain("datetime('created_at'");
  });

  it("cleans up meta directory, journal sql files and migrations directory", async () => {
    fs.writeFileSync(path.join(dir, "schema.ts"), "// empty");
    await generateModels(options());

    expect(fs.existsSync(path.join(dir, "meta"))).toBe(false);
    expect(fs.existsSync(path.join(dir, "0000_init.sql"))).toBe(false);
    expect(fs.existsSync(path.join(dir, "migrations"))).toBe(false);
  });

  it("handles an output directory with no meta directory and no schema file", async () => {
    fs.rmSync(path.join(dir, "meta"), { recursive: true, force: true });
    fs.rmSync(path.join(dir, "migrations"), { recursive: true, force: true });
    fs.rmSync(path.join(dir, "0000_init.sql"), { force: true });
    // no schema.ts is written

    await generateModels(options());

    const index = fs.readFileSync(path.join(dir, "index.ts"), "utf-8");
    expect(index).toContain("export const additionalMetadata");
    expect(exitSpy).toHaveBeenCalledWith(0);
  });

  it("accepts every supported version-field type", async () => {
    fs.writeFileSync(
      path.join(dir, "meta", "0000_snapshot.json"),
      JSON.stringify({
        tables: {
          t_dt: snapshotTable({ version: { name: "version", type: "datetime", notNull: true } }),
          t_ts: snapshotTable({ version: { name: "version", type: "timestamp", notNull: true } }),
          t_num: snapshotTable({ version: { name: "version", type: "number", notNull: true } }),
          t_dec: snapshotTable({ version: { name: "version", type: "decimal", notNull: true } }),
        },
      }),
    );

    await generateModels(options());

    const index = fs.readFileSync(path.join(dir, "index.ts"), "utf-8");
    expect(index).toContain('"t_dt"');
    expect(index).toContain('"t_ts"');
    expect(index).toContain('"t_num"');
    expect(index).toContain('"t_dec"');
  });

  it("exits with code 1 when drizzle-kit pull throws", async () => {
    vi.mocked(execSync).mockImplementationOnce(() => {
      throw new Error("pull failed");
    });
    await generateModels(options());
    expect(exitSpy).toHaveBeenCalledWith(1);
  });
});
