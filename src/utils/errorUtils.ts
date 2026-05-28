// SPDX-FileCopyrightText: 2025-2026 Vasyl Zakharchenko
// SPDX-License-Identifier: MIT

/**
 * JSON-stringifies a value, swallowing `TypeError` from circular structures
 * and returning the provided fallback instead. Kept private so the public
 * helpers stay free of the try/catch and stay below the cyclomatic limit.
 */
function safeStringify(value: unknown, fallback: string): string {
  try {
    return JSON.stringify(value) ?? fallback;
  } catch {
    return fallback;
  }
}

/**
 * Renders a non-Error, non-null thrown value. Objects and functions go
 * through JSON to avoid the `[object Object]` default; the remaining
 * primitives are cast to a concrete union before reaching `String()` so
 * Sonar's S6551 (`[object Object]` coercion) sees a guaranteed-primitive
 * input rather than the wider `NonNullable<unknown>`.
 */
function renderNonErrorValue(value: NonNullable<unknown>, fallback: string): string {
  if (typeof value === "object" || typeof value === "function") {
    return safeStringify(value, fallback);
  }
  return String(value as string | number | boolean | bigint | symbol);
}

/**
 * Extracts a human-readable message from an unknown thrown value.
 *
 * Centralised so that `catch (e) { ... e.message ... }` sites do not need to
 * inline an `instanceof Error` ternary, which inflates cyclomatic complexity.
 */
export function getErrorMessage(error: unknown, fallback: string = "Unknown error"): string {
  if (error instanceof Error) return error.message;
  if (typeof error === "string") return error;
  if (error == null) return fallback;
  return renderNonErrorValue(error, fallback);
}

/**
 * Shape of error objects thrown by `@forge/sql`. Both nested `cause.context`
 * (apply-migrations path) and direct `debug` (DDL / scheduler path) variants
 * are documented in Atlassian's Forge SQL error contract.
 */
interface ForgeSqlErrorShape {
  message?: string;
  cause?: { context?: { debug?: { sqlMessage?: string; message?: string } } };
  debug?: {
    sqlMessage?: string;
    message?: string;
    context?: { sqlMessage?: string; message?: string };
  };
}

/**
 * Returns `value` when it is a string, `undefined` otherwise. Tiny helper
 * shared by the SQL-error getters below so each one stays a single
 * expression and the public function keeps its `for-of` loop flat.
 */
function asString(value: unknown): string | undefined {
  return typeof value === "string" ? value : undefined;
}

type SqlErrorGetter = (e: ForgeSqlErrorShape | null | undefined) => string | undefined;

/**
 * Static accessors for the property paths that `@forge/sql` is known to
 * populate when raising an error, in order of specificity.
 *
 * Each path is hard-coded as an optional-chain expression instead of being
 * walked dynamically as a string array — this keeps the scanner happy
 * (`obj[var]` in a loop trips Opengrep's prototype-pollution rule even
 * when guarded) and surfaces typos at compile time.
 */
const SQL_ERROR_GETTERS: readonly SqlErrorGetter[] = [
  (e) => asString(e?.cause?.context?.debug?.sqlMessage),
  (e) => asString(e?.cause?.context?.debug?.message),
  (e) => asString(e?.debug?.context?.sqlMessage),
  (e) => asString(e?.debug?.context?.message),
  (e) => asString(e?.debug?.sqlMessage),
  (e) => asString(e?.debug?.message),
  (e) => asString(e?.message),
];

/**
 * Extracts the most specific SQL message from a `@forge/sql` error.
 * Runs {@link SQL_ERROR_GETTERS} in order and falls back to the provided
 * default when none of them yield a string.
 */
export function extractSqlErrorMessage(
  error: unknown,
  fallback: string = "Unknown error occurred",
): string {
  const err = (
    typeof error === "object" && error !== null ? error : null
  ) as ForgeSqlErrorShape | null;
  for (const get of SQL_ERROR_GETTERS) {
    const value = get(err);
    if (value !== undefined) return value;
  }
  return fallback;
}
