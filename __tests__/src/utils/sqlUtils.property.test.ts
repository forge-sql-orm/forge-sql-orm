// SPDX-FileCopyrightText: 2025-2026 Vasyl Zakharchenko
// SPDX-License-Identifier: MIT

import { describe, it, expect } from "vitest";
import fc from "fast-check";
import { formatDateTime, formatLimitOffset, parseDateTime } from "../../../src/utils/sqlUtils";

// Property-based tests: fast-check generates many inputs, including hostile ones, to check
// that the helpers that build SQL fragments and format dates keep their contracts.
const rawText = (value: unknown): string => (value as any).queryChunks[0].value[0];

describe("formatLimitOffset (property-based)", () => {
  it("renders every safe integer as plain digits and nothing else", () => {
    fc.assert(
      fc.property(
        fc.integer({ min: Number.MIN_SAFE_INTEGER, max: Number.MAX_SAFE_INTEGER }),
        (n) => {
          expect(rawText(formatLimitOffset(n))).toMatch(/^-?\d+$/);
          expect(rawText(formatLimitOffset(n))).toBe(String(n));
        },
      ),
    );
  });

  it("rejects every value that is not a number, so text can never reach the raw SQL", () => {
    fc.assert(
      fc.property(
        fc.oneof(fc.string(), fc.boolean(), fc.constant(null), fc.constant(undefined), fc.object()),
        (value) => {
          expect(() => formatLimitOffset(value as unknown as number)).toThrow(
            "limitOrOffset must be a valid number",
          );
        },
      ),
    );
  });
});

describe("parseDateTime (property-based)", () => {
  it("never throws for arbitrary strings and always returns a Date", () => {
    fc.assert(
      fc.property(fc.string(), (value) => {
        expect(parseDateTime(value, "yyyy-MM-dd")).toBeInstanceOf(Date);
      }),
    );
  });

  it("returns the same instant for any valid Date", () => {
    fc.assert(
      fc.property(fc.date({ noInvalidDate: true }), (date) => {
        expect(parseDateTime(date, "yyyy-MM-dd").getTime()).toBe(date.getTime());
      }),
    );
  });
});

describe("formatDateTime (property-based)", () => {
  const MIN_TIMESTAMP_MS = 1000; // 1970-01-01 00:00:01 UTC
  const MAX_TIMESTAMP_MS = 2147483647 * 1000; // 2038-01-19 03:14:07 UTC

  it("accepts every instant inside the Forge timestamp range", () => {
    fc.assert(
      fc.property(fc.integer({ min: MIN_TIMESTAMP_MS, max: MAX_TIMESTAMP_MS }), (ms) => {
        expect(formatDateTime(ms, "yyyy-MM-dd HH:mm:ss", true)).toMatch(
          /^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}$/,
        );
      }),
    );
  });

  it("rejects every instant before the Forge timestamp range", () => {
    fc.assert(
      fc.property(fc.integer({ min: -8.64e12, max: MIN_TIMESTAMP_MS - 1 }), (ms) => {
        expect(() => formatDateTime(ms, "yyyy-MM-dd", true)).toThrow(/zero or negative timestamps/);
      }),
    );
  });

  it("rejects every instant after the Forge timestamp range", () => {
    fc.assert(
      fc.property(fc.integer({ min: MAX_TIMESTAMP_MS + 1, max: 8.64e12 }), (ms) => {
        expect(() => formatDateTime(ms, "yyyy-MM-dd", true)).toThrow(/beyond 2038-01-19/);
      }),
    );
  });
});
