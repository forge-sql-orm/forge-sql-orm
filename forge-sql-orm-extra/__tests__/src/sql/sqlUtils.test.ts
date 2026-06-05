// SPDX-FileCopyrightText: 2025-2026 Vasyl Zakharchenko
// SPDX-License-Identifier: MIT

import { describe, it, expect } from "vitest";
import { normalizeFunction } from "../../../src/sql/sqlUtils";

describe("normalizeFunction", () => {
  it("replaces numeric literals with placeholders and strips backticks", () => {
    const result = normalizeFunction("select * from users where id = 5");

    expect(result).not.toContain("`");
    expect(result).not.toContain("5");
    expect(result).toContain("?");
    expect(result.toLowerCase()).toContain("from users");
  });

  it("replaces string literals with placeholders", () => {
    const result = normalizeFunction("select * from users where name = 'John'");

    expect(result).not.toContain("John");
    expect(result).toContain("?");
  });

  it("produces identical output for queries differing only in literal values", () => {
    expect(normalizeFunction("select * from users where id = 5")).toBe(
      normalizeFunction("select * from users where id = 999"),
    );
    expect(normalizeFunction("select * from users where name = 'John'")).toBe(
      normalizeFunction("select * from users where name = 'Jane'"),
    );
  });

  it("is idempotent on an already-normalized query", () => {
    const once = normalizeFunction("select * from users where id = 5");
    expect(normalizeFunction(once)).toBe(once);
  });

  it("normalizes only the first statement when multiple are provided", () => {
    const result = normalizeFunction("select * from first_table; select * from second_table");

    expect(result.toLowerCase()).toContain("first_table");
    expect(result.toLowerCase()).not.toContain("second_table");
  });

  it("trims surrounding whitespace before parsing", () => {
    expect(normalizeFunction("   select * from users   ")).toBe(
      normalizeFunction("select * from users"),
    );
  });
});
