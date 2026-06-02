// SPDX-FileCopyrightText: 2025-2026 Vasyl Zakharchenko
// SPDX-License-Identifier: MIT

import { describe, it, expect, vi, beforeAll, beforeEach } from "vitest";
import type { Command } from "commander";
import fs from "fs";
import inquirer from "inquirer";

const mocks = vi.hoisted(() => ({
  generateModels: vi.fn(),
  createMigration: vi.fn(),
  updateMigration: vi.fn(),
  dropMigration: vi.fn(),
  createSchema: vi.fn(),
}));

vi.mock("../../src/actions/generate-models", () => ({ generateModels: mocks.generateModels }));
vi.mock("../../src/actions/migrations-create", () => ({ createMigration: mocks.createMigration }));
vi.mock("../../src/actions/migrations-update", () => ({ updateMigration: mocks.updateMigration }));
vi.mock("../../src/actions/migrations-drops", () => ({ dropMigration: mocks.dropMigration }));
vi.mock("../../src/actions/schema-create", () => ({ createSchema: mocks.createSchema }));
vi.mock("inquirer", () => ({ default: { prompt: vi.fn() } }));

// Connection flags shared by every subcommand.
const conn = [
  "--host",
  "db",
  "--port",
  "3307",
  "--user",
  "u",
  "--password",
  "p",
  "--dbName",
  "mydb",
];

// Only includes flags that the given subcommand actually declares.
const argvFor = (command: string, extra: string[]) => ["node", "cli", command, ...conn, ...extra];

describe("cli program", () => {
  let program: Command;

  beforeAll(async () => {
    // The module runs program.parse(process.argv) on import. An empty argv makes
    // commander print help and call process.exit, so feed it a valid (mocked) command.
    // This import-time invocation is cleared by mockReset before the first test runs.
    process.argv = argvFor("generate:model", ["--output", "./out", "--versionField", "ver"]);
    const mod = await import("../../src/cli");
    program = mod.program;
  });

  beforeEach(() => {
    for (const key of Object.keys(process.env)) {
      if (key.startsWith("FORGE_SQL_ORM_")) {
        delete process.env[key];
      }
    }
    vi.spyOn(console, "log").mockImplementation(() => undefined);
  });

  it("registers all expected subcommands", () => {
    const names = program.commands.map((c) => c.name());
    expect(names).toEqual(
      expect.arrayContaining([
        "generate:model",
        "migrations:create",
        "migrations:update",
        "migrations:drop",
        "schema:create",
      ]),
    );
  });

  it("generate:model passes parsed config (numeric port) to generateModels", async () => {
    await program.parseAsync(
      argvFor("generate:model", ["--output", "./out", "--versionField", "ver"]),
    );

    expect(mocks.generateModels).toHaveBeenCalledTimes(1);
    const cfg = mocks.generateModels.mock.calls[0][0];
    expect(cfg).toMatchObject({
      host: "db",
      port: 3307,
      user: "u",
      password: "p",
      dbName: "mydb",
      output: "./out",
      versionField: "ver",
    });
    expect(typeof cfg.port).toBe("number");
  });

  it("migrations:create forwards the --force flag", async () => {
    await program.parseAsync(argvFor("migrations:create", ["--output", "./out", "--force"]));

    expect(mocks.createMigration).toHaveBeenCalledTimes(1);
    expect(mocks.createMigration.mock.calls[0][0]).toMatchObject({ force: true, dbName: "mydb" });
  });

  it("migrations:update forwards entitiesPath to updateMigration", async () => {
    await program.parseAsync(
      argvFor("migrations:update", ["--output", "./out", "--entitiesPath", "./entities"]),
    );

    expect(mocks.updateMigration).toHaveBeenCalledTimes(1);
    expect(mocks.updateMigration.mock.calls[0][0]).toMatchObject({ entitiesPath: "./entities" });
  });

  it("schema:create calls createSchema with entitiesPath", async () => {
    await program.parseAsync(argvFor("schema:create", ["--entitiesPath", "./entities"]));

    expect(mocks.createSchema).toHaveBeenCalledTimes(1);
    expect(mocks.createSchema.mock.calls[0][0]).toMatchObject({ entitiesPath: "./entities" });
  });

  it("--saveEnv persists the resolved config to .env, preserving existing entries", async () => {
    vi.spyOn(fs, "existsSync").mockReturnValue(true);
    vi.spyOn(fs, "readFileSync").mockReturnValue("EXISTING=1\n# a comment\nFORGE_SQL_ORM_HOST=old");
    const writeSpy = vi.spyOn(fs, "writeFileSync").mockImplementation(() => undefined);

    await program.parseAsync([
      ...argvFor("generate:model", ["--output", "./out", "--versionField", "ver"]),
      "--saveEnv",
    ]);

    expect(writeSpy).toHaveBeenCalledTimes(1);
    const written = String(writeSpy.mock.calls[0][1]);
    expect(written).toContain("FORGE_SQL_ORM_HOST=db");
    expect(written).toContain("FORGE_SQL_ORM_PORT=3307");
    expect(written).toContain("FORGE_SQL_ORM_VERSIONFIELD=ver");
    expect(written).toContain("EXISTING=1");
  });

  it("generate:model prompts for a missing versionField", async () => {
    vi.mocked(inquirer.prompt).mockResolvedValue({
      host: "ph",
      port: "3309",
      user: "pu",
      password: "pp",
      dbName: "pdb",
      output: "./pout",
      versionField: "v2",
    });

    await program.parseAsync(["node", "cli", "generate:model"]);

    expect(inquirer.prompt).toHaveBeenCalled();
    expect(mocks.generateModels.mock.calls[0][0]).toMatchObject({ versionField: "v2", port: 3309 });
  });

  it("migrations:update prompts for a missing entitiesPath", async () => {
    vi.mocked(inquirer.prompt).mockResolvedValue({
      host: "ph",
      port: "3309",
      user: "pu",
      password: "pp",
      dbName: "pdb",
      output: "./pout",
      entitiesPath: "./pe",
    });

    await program.parseAsync(["node", "cli", "migrations:update"]);

    expect(mocks.updateMigration.mock.calls[0][0]).toMatchObject({ entitiesPath: "./pe" });
  });

  it("schema:create prompts for a missing entitiesPath", async () => {
    vi.mocked(inquirer.prompt).mockResolvedValue({
      host: "ph",
      port: "3309",
      user: "pu",
      password: "pp",
      dbName: "pdb",
      entitiesPath: "./pe",
    });

    await program.parseAsync(["node", "cli", "schema:create"]);

    expect(mocks.createSchema.mock.calls[0][0]).toMatchObject({ entitiesPath: "./pe" });
  });

  it("prompts via inquirer for missing parameters and parses the answered port", async () => {
    vi.mocked(inquirer.prompt).mockResolvedValue({
      host: "ph",
      port: "3309",
      user: "pu",
      password: "pp",
      dbName: "pdb",
      output: "./pout",
      entitiesPath: "./pe",
    });

    await program.parseAsync(["node", "cli", "migrations:drop"]);

    expect(inquirer.prompt).toHaveBeenCalled();
    expect(mocks.dropMigration).toHaveBeenCalledTimes(1);
    const cfg = mocks.dropMigration.mock.calls[0][0];
    expect(cfg.host).toBe("ph");
    expect(cfg.port).toBe(3309);
    expect(typeof cfg.port).toBe("number");
  });
});
