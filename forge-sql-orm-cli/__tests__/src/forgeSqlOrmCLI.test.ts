// SPDX-FileCopyrightText: 2025-2026 Vasyl Zakharchenko
// SPDX-License-Identifier: MIT

import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { execSync } from "node:child_process";

vi.mock("node:child_process", () => ({ execSync: vi.fn() }));

describe("forgeSqlOrmCLI entry", () => {
  let exitSpy: ReturnType<typeof vi.spyOn>;
  let errorSpy: ReturnType<typeof vi.spyOn>;
  const originalArgv = process.argv;

  beforeEach(() => {
    vi.resetModules();
    // process.exit is a no-op so the module finishes evaluating instead of aborting.
    exitSpy = vi.spyOn(process, "exit").mockImplementation((() => undefined) as unknown as never);
    errorSpy = vi.spyOn(console, "error").mockImplementation(() => undefined);
  });

  afterEach(() => {
    process.argv = originalArgv;
    vi.restoreAllMocks();
  });

  it("runs cli.mjs through tsm with forwarded args and exits 0 on success", async () => {
    process.argv = ["node", "forgeSqlOrmCLI", "generate:model", "--host", "db"];

    await import("../../src/forgeSqlOrmCLI");

    expect(execSync).toHaveBeenCalledTimes(1);
    const [command, options] = vi.mocked(execSync).mock.calls[0];
    expect(command).toContain("tsm");
    expect(command).toContain("cli.mjs");
    expect(command).toContain("generate:model --host db");
    expect(options).toEqual({ stdio: "inherit" });
    expect(exitSpy).toHaveBeenCalledWith(0);
    expect(errorSpy).not.toHaveBeenCalled();
  });

  it("logs the error and exits 1 when the command fails", async () => {
    vi.mocked(execSync).mockImplementationOnce(() => {
      throw new Error("boom");
    });
    process.argv = ["node", "forgeSqlOrmCLI", "migrations:create"];

    await import("../../src/forgeSqlOrmCLI");

    expect(errorSpy).toHaveBeenCalledWith(
      expect.stringContaining("Command execution failed"),
      "boom",
    );
    expect(exitSpy).toHaveBeenCalledWith(1);
  });

  it("logs the raw value when a non-Error is thrown and exits 1", async () => {
    vi.mocked(execSync).mockImplementationOnce(() => {
      throw "string failure";
    });
    process.argv = ["node", "forgeSqlOrmCLI", "migrations:drop"];

    await import("../../src/forgeSqlOrmCLI");

    expect(errorSpy).toHaveBeenCalledWith(
      expect.stringContaining("Command execution failed"),
      "string failure",
    );
    expect(exitSpy).toHaveBeenCalledWith(1);
  });
});
