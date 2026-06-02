// SPDX-FileCopyrightText: 2025-2026 Vasyl Zakharchenko
// SPDX-License-Identifier: MIT

import { describe, it, expect, beforeEach, afterEach, vi } from "vitest";
import fs from "fs";
import os from "os";
import path from "path";
import { execSync } from "child_process";

import { createSchema, type CreateSchemaOptions } from "../../../src/actions/schema-create";

vi.mock("child_process", () => ({ execSync: vi.fn() }));

describe("createSchema", () => {
  let dir: string;
  let exitSpy: ReturnType<typeof vi.spyOn>;

  const options = (): CreateSchemaOptions => ({
    host: "localhost",
    port: 3306,
    user: "ro ot",
    password: "p@ss/word",
    dbName: "testdb",
    entitiesPath: dir,
  });

  beforeEach(() => {
    dir = fs.mkdtempSync(path.join(os.tmpdir(), "fso-cli-schema-"));
    exitSpy = vi.spyOn(process, "exit").mockImplementation((() => undefined) as unknown as never);
    vi.spyOn(console, "log").mockImplementation(() => undefined);
    vi.spyOn(console, "error").mockImplementation(() => undefined);
  });
  afterEach(() => {
    fs.rmSync(dir, { recursive: true, force: true });
    vi.restoreAllMocks();
  });

  it("runs drizzle-kit push with a URL-encoded connection string", async () => {
    fs.writeFileSync(path.join(dir, "schema.ts"), "// schema");
    await createSchema(options());

    expect(execSync).toHaveBeenCalledTimes(1);
    const cmd = vi.mocked(execSync).mock.calls[0][0] as string;
    expect(cmd).toContain("drizzle-kit push");
    // user "ro ot" / password "p@ss/word" must be percent-encoded
    expect(cmd).toContain("mysql://ro%20ot:p%40ss%2Fword@localhost:3306/testdb");
    expect(cmd).toContain(path.join(dir, "schema.ts"));
    expect(exitSpy).toHaveBeenCalledWith(0);
  });

  it("exits with code 1 when the schema file does not exist", async () => {
    await createSchema(options());
    expect(execSync).not.toHaveBeenCalled();
    expect(exitSpy).toHaveBeenCalledWith(1);
  });

  it("exits with code 1 when connection parameters are missing", async () => {
    fs.writeFileSync(path.join(dir, "schema.ts"), "// schema");
    await createSchema({ ...options(), host: undefined });
    expect(exitSpy).toHaveBeenCalledWith(1);
  });
});
