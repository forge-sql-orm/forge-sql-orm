// SPDX-FileCopyrightText: 2025-2026 Vasyl Zakharchenko
// SPDX-License-Identifier: MIT

/**
 * Safely serializes `value` to JSON; returns `fallback` on failure
 * (circular references, etc.).
 *
 * @param value - Value to serialize.
 * @param fallback - String returned when serialization fails.
 */
function safeStringify(value: unknown, fallback: string): string {
  try {
    return JSON.stringify(value) ?? fallback;
  } catch {
    return fallback;
  }
}

/**
 * Converts a non-Error, non-null value to a string. Objects and functions
 * are JSON-stringified; primitives go through `String()`.
 *
 * @param value - Thrown value (already filtered of `Error`, string, and nullish).
 * @param fallback - String returned when JSON serialization fails.
 */
function renderNonErrorValue(value: NonNullable<unknown>, fallback: string): string {
  if (typeof value === "object" || typeof value === "function") {
    return safeStringify(value, fallback);
  }
  return String(value);
}

/**
 * Extracts a human-readable message from a thrown value of unknown type.
 *
 * @param error - The caught value.
 * @param fallback - Returned when `error` is `null` or `undefined`. Defaults to `"Unknown error"`.
 */
export function getErrorMessage(error: unknown, fallback: string = "Unknown error"): string {
  if (error instanceof Error) return error.message;
  if (typeof error === "string") return error;
  if (error == null) return fallback;
  return renderNonErrorValue(error, fallback);
}

/**
 * Shape of error objects thrown by `@forge/sql`.
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
 * Returns `value` if it is a string, otherwise `undefined`.
 *
 * @param value - Value to check.
 */
function asString(value: unknown): string | undefined {
  return typeof value === "string" ? value : undefined;
}

type SqlErrorGetter = (e: ForgeSqlErrorShape | null | undefined) => string | undefined;

/**
 * Ordered accessors for the known message fields on a `@forge/sql` error,
 * from most specific to least.
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
 *
 * @param error - The caught value.
 * @param fallback - Returned when no known message field is populated. Defaults to `"Unknown error occurred"`.
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
