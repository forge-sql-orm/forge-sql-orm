// SPDX-FileCopyrightText: 2025-2026 Vasyl Zakharchenko
// SPDX-License-Identifier: MIT

import { describe, it, expect } from "vitest";
import fc from "fast-check";
import type { Query } from "drizzle-orm";
import { hashKey } from "../../../src/utils/cacheUtils";

// Property-based tests: fast-check feeds many generated queries to hashKey and checks the
// invariants that the cache relies on (stable, well-formed, case-insensitive on SQL text).
const jsonParam = fc.oneof(
  fc.string(),
  fc.integer(),
  fc.boolean(),
  fc.constant(null),
  fc.double({ noNaN: true, noDefaultInfinity: true }),
);
const query = fc.record({
  sql: fc.string(),
  params: fc.array(jsonParam, { maxLength: 8 }),
});

describe("hashKey (property-based)", () => {
  it("always returns a CachedQuery_ prefix followed by 32 lowercase hex characters", () => {
    fc.assert(
      fc.property(query, (q) => {
        expect(hashKey(q as Query)).toMatch(/^CachedQuery_[0-9a-f]{32}$/);
      }),
    );
  });

  it("is deterministic for the same query", () => {
    fc.assert(
      fc.property(query, (q) => {
        expect(hashKey(q as Query)).toBe(hashKey({ ...q } as Query));
      }),
    );
  });

  it("ignores the case of the SQL text", () => {
    fc.assert(
      fc.property(query, (q) => {
        const upper = { ...q, sql: q.sql.toUpperCase() };
        const lower = { ...q, sql: q.sql.toLowerCase() };
        expect(hashKey(upper as Query)).toBe(hashKey(lower as Query));
      }),
    );
  });

  it("gives different keys when the parameters differ", () => {
    fc.assert(
      fc.property(
        fc.string(),
        fc.array(jsonParam, { maxLength: 8 }),
        fc.array(jsonParam, { maxLength: 8 }),
        (sql, a, b) => {
          fc.pre(JSON.stringify(a) !== JSON.stringify(b));
          expect(hashKey({ sql, params: a } as Query)).not.toBe(
            hashKey({ sql, params: b } as Query),
          );
        },
      ),
    );
  });
});
