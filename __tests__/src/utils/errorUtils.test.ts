// SPDX-FileCopyrightText: 2025-2026 Vasyl Zakharchenko
// SPDX-License-Identifier: MIT

import { describe, it, expect } from "vitest";
import { extractSqlErrorMessage, getErrorMessage } from "../../../src/utils/errorUtils";

describe("errorUtils", () => {
  describe("getErrorMessage", () => {
    it("returns Error.message for Error instances", () => {
      expect(getErrorMessage(new Error("boom"))).toBe("boom");
    });

    it("returns subclass Error.message", () => {
      class CustomError extends Error {}
      expect(getErrorMessage(new CustomError("derived"))).toBe("derived");
    });

    it("returns the value as-is when given a string", () => {
      expect(getErrorMessage("plain text")).toBe("plain text");
    });

    it("returns the empty string when an Error has an empty message", () => {
      expect(getErrorMessage(new Error(""))).toBe("");
    });

    it("returns the fallback for null", () => {
      expect(getErrorMessage(null)).toBe("Unknown error");
    });

    it("returns the fallback for undefined", () => {
      expect(getErrorMessage(undefined)).toBe("Unknown error");
    });

    it("honours a custom fallback for null", () => {
      expect(getErrorMessage(null, "missing")).toBe("missing");
    });

    it("JSON-stringifies plain objects instead of returning [object Object]", () => {
      expect(getErrorMessage({ code: 42, info: "x" })).toBe('{"code":42,"info":"x"}');
    });

    it("returns the fallback when JSON.stringify throws on a circular object", () => {
      const cyclic: Record<string, unknown> = {};
      cyclic.self = cyclic;
      expect(getErrorMessage(cyclic, "ring")).toBe("ring");
    });

    it("converts numbers via String()", () => {
      expect(getErrorMessage(404)).toBe("404");
    });

    it("converts booleans via String()", () => {
      expect(getErrorMessage(false)).toBe("false");
    });

    it("converts symbols via String()", () => {
      expect(getErrorMessage(Symbol("tag"))).toBe("Symbol(tag)");
    });
  });

  describe("extractSqlErrorMessage", () => {
    it("picks cause.context.debug.sqlMessage with highest priority", () => {
      const err = {
        message: "low",
        debug: { sqlMessage: "mid", message: "lower-mid" },
        cause: { context: { debug: { sqlMessage: "top", message: "alt" } } },
      };
      expect(extractSqlErrorMessage(err)).toBe("top");
    });

    it("falls through to cause.context.debug.message when sqlMessage is missing", () => {
      const err = {
        message: "fallback",
        cause: { context: { debug: { message: "via cause.message" } } },
      };
      expect(extractSqlErrorMessage(err)).toBe("via cause.message");
    });

    it("falls through to debug.context.sqlMessage", () => {
      const err = {
        message: "fallback",
        debug: { context: { sqlMessage: "deep" } },
      };
      expect(extractSqlErrorMessage(err)).toBe("deep");
    });

    it("falls through to debug.context.message", () => {
      const err = {
        message: "fallback",
        debug: { context: { message: "ctx-msg" } },
      };
      expect(extractSqlErrorMessage(err)).toBe("ctx-msg");
    });

    it("falls through to debug.sqlMessage", () => {
      const err = { message: "fallback", debug: { sqlMessage: "direct-sql" } };
      expect(extractSqlErrorMessage(err)).toBe("direct-sql");
    });

    it("falls through to debug.message", () => {
      const err = { message: "fallback", debug: { message: "direct-debug" } };
      expect(extractSqlErrorMessage(err)).toBe("direct-debug");
    });

    it("falls through to error.message when no debug info is present", () => {
      expect(extractSqlErrorMessage(new Error("just message"))).toBe("just message");
    });

    it("returns the default fallback for null", () => {
      expect(extractSqlErrorMessage(null)).toBe("Unknown error occurred");
    });

    it("returns the default fallback for undefined", () => {
      expect(extractSqlErrorMessage(undefined)).toBe("Unknown error occurred");
    });

    it("returns the default fallback for strings (no traversable shape)", () => {
      expect(extractSqlErrorMessage("oops")).toBe("Unknown error occurred");
    });

    it("returns the default fallback for objects without any known field", () => {
      expect(extractSqlErrorMessage({ unrelated: true })).toBe("Unknown error occurred");
    });

    it("honours a custom fallback", () => {
      expect(extractSqlErrorMessage({}, "custom")).toBe("custom");
    });

    it("ignores non-string values along the path", () => {
      const err = { message: 42 as unknown as string };
      expect(extractSqlErrorMessage(err, "fb")).toBe("fb");
    });

    it("ignores null intermediate nodes without throwing", () => {
      const err = { debug: null, message: "after-null" };
      expect(extractSqlErrorMessage(err)).toBe("after-null");
    });
  });
});
