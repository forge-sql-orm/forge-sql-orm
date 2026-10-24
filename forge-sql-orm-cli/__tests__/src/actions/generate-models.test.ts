// SPDX-FileCopyrightText: 2025-2026 Vasyl Zakharchenko
// SPDX-License-Identifier: MIT

import { describe, it, expect, beforeEach, afterEach, vi } from "vitest";
import fs from "fs";
import os from "os";
import path from "path";
import { execFileSync } from "child_process";

import { generateModels, type GenerateModelsOptions } from "../../../src/actions/generate-models";

vi.mock("child_process", () => ({ execFileSync: vi.fn() }));

type SnapshotDdl = Record<string, unknown>[];

const table = (name: string) => ({ entityType: "tables", name });
const column = (tableName: string, name: string, type: string, notNull: boolean) => ({
  entityType: "columns",
  table: tableName,
  name,
  type,
  notNull,
});

const DEFAULT_DDL: SnapshotDdl = [
  table("users"),
  column("users", "id", "int", true),
  column("users", "version", "int", true),
  table("a_cache"),
  column("a_cache", "id", "int", true),
  table("posts"),
  column("posts", "version", "int", false),
  table("logs"),
  column("logs", "version", "varchar(20)", true),
];

describe("generateModels", () => {
  let dir: string;
  let exitSpy: ReturnType<typeof vi.spyOn>;
  let warnSpy: ReturnType<typeof vi.spyOn>;

  /** Makes the mocked `drizzle-kit pull` create a v1 migration folder with the given snapshot. */
  const mockPull = (ddl: SnapshotDdl, folder = "20260101000000_init") => {
    vi.mocked(execFileSync).mockImplementation((() => {
      const folderPath = path.join(dir, folder);
      fs.mkdirSync(folderPath, { recursive: true });
      fs.writeFileSync(path.join(folderPath, "snapshot.json"), JSON.stringify({ ddl }));
      fs.writeFileSync(path.join(folderPath, "migration.sql"), "CREATE TABLE x;");
      return "";
    }) as unknown as typeof execFileSync);
  };

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

    mockPull(DEFAULT_DDL);
  });

  afterEach(() => {
    fs.rmSync(dir, { recursive: true, force: true });
    vi.restoreAllMocks();
  });

  it("invokes drizzle-kit pull with the connection url", () => {
    fs.writeFileSync(path.join(dir, "schema.ts"), "// empty");
    generateModels(options());

    expect(execFileSync).toHaveBeenCalledTimes(1);
    const cmd = (vi.mocked(execFileSync).mock.calls[0][1] as string[]).join(" ");
    expect(cmd).toContain("drizzle-kit pull");
    expect(cmd).toContain("mysql://root:secret@localhost:3306/testdb");
    expect(exitSpy).toHaveBeenCalledWith(0);
  });

  it("writes version metadata only for supported, NOT NULL version fields", () => {
    fs.writeFileSync(path.join(dir, "schema.ts"), "// empty");
    generateModels(options());

    const index = fs.readFileSync(path.join(dir, "index.ts"), "utf-8");
    expect(index).toContain('export * from "./schema";');
    expect(index).toContain('"users"');
    // nullable / unsupported / a_-prefixed tables are excluded from metadata
    expect(index).not.toContain('"posts"');
    expect(index).not.toContain('"logs"');
  });

  it("warns about a_-prefixed tables, nullable and unsupported version fields", () => {
    fs.writeFileSync(path.join(dir, "schema.ts"), "// empty");
    generateModels(options());

    const warnings = warnSpy.mock.calls.map((c: unknown[]) => String(c[0])).join("\n");
    expect(warnings).toContain('Table "a_cache" starts with "a_"');
    expect(warnings).toContain("is nullable");
    expect(warnings).toContain('unsupported type "varchar"');
  });

  it("rewrites MySQL date/time types in schema.ts to forge custom types", () => {
    fs.writeFileSync(
      path.join(dir, "schema.ts"),
      [
        `created: datetime("created_at", { mode: 'string' }),`,
        `precise: datetime({ fsp: 3 }).notNull(),`,
        `updated: timestamp("updated_at").defaultNow(),`,
        `stamp: timestamp({ mode: 'string' }),`,
        `day: date("day"),`,
        `at: time(),`,
      ].join("\n"),
    );
    generateModels(options());

    const schema = fs.readFileSync(path.join(dir, "schema.ts"), "utf-8");
    expect(schema).toContain("import { forgeDateTimeString");
    expect(schema).toContain("forgeDateTimeString('created_at')");
    expect(schema).toContain("forgeDateTimeString().notNull()");
    expect(schema).toContain("forgeTimestampString('updated_at').defaultNow()");
    expect(schema).toContain("forgeTimestampString()");
    expect(schema).toContain("forgeDateString('day')");
    expect(schema).toContain("forgeTimeString()");
    expect(schema).not.toMatch(/\b(datetime|timestamp|date|time)\(/);
  });

  it("removes the migration folder created by drizzle-kit but keeps existing ones", () => {
    const existing = path.join(dir, "20250101000000_old");
    fs.mkdirSync(existing, { recursive: true });
    fs.writeFileSync(path.join(existing, "snapshot.json"), "{}");
    fs.writeFileSync(path.join(dir, "schema.ts"), "// empty");

    generateModels(options());

    expect(fs.existsSync(path.join(dir, "20260101000000_init"))).toBe(false);
    expect(fs.existsSync(existing)).toBe(true);
    expect(fs.existsSync(path.join(dir, "schema.ts"))).toBe(true);
  });

  it("handles a pull that creates no migration folder and no schema file", () => {
    vi.mocked(execFileSync).mockImplementation((() => "") as unknown as typeof execFileSync);

    generateModels(options());

    const index = fs.readFileSync(path.join(dir, "index.ts"), "utf-8");
    expect(index).toContain("export const additionalMetadata");
    expect(index).toContain("{}");
    expect(exitSpy).toHaveBeenCalledWith(0);
  });

  it("accepts every supported version-field type, ignoring length and precision", () => {
    mockPull([
      table("t_dt"),
      column("t_dt", "version", "datetime(3)", true),
      table("t_ts"),
      column("t_ts", "version", "timestamp", true),
      table("t_num"),
      column("t_num", "version", "number", true),
      table("t_dec"),
      column("t_dec", "version", "decimal(10,2)", true),
    ]);

    generateModels(options());

    const index = fs.readFileSync(path.join(dir, "index.ts"), "utf-8");
    expect(index).toContain('"t_dt"');
    expect(index).toContain('"t_ts"');
    expect(index).toContain('"t_num"');
    expect(index).toContain('"t_dec"');
  });

  it("exits with code 1 when drizzle-kit pull throws", () => {
    vi.mocked(execFileSync).mockImplementationOnce(() => {
      throw new Error("pull failed");
    });
    generateModels(options());
    expect(exitSpy).toHaveBeenCalledWith(1);
  });
});
