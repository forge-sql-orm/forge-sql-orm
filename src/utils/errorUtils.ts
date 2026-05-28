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
 * Extracts a human-readable message from an unknown thrown value.
 *
 * Centralised so that `catch (e) { ... e.message ... }` sites do not need to
 * inline an `instanceof Error` ternary, which inflates cyclomatic complexity.
 */
export function getErrorMessage(error: unknown, fallback: string = "Unknown error"): string {
  if (error instanceof Error) return error.message;
  if (typeof error === "string") return error;
  if (error == null) return fallback;
  return typeof error === "object" ? safeStringify(error, fallback) : String(error);
}

/**
 * Property paths that `@forge/sql` is known to populate when raising an
 * error. Walked in order of specificity by `extractSqlErrorMessage`.
 */
const SQL_ERROR_PATHS: readonly (readonly string[])[] = [
  ["cause", "context", "debug", "sqlMessage"],
  ["cause", "context", "debug", "message"],
  ["debug", "context", "sqlMessage"],
  ["debug", "context", "message"],
  ["debug", "sqlMessage"],
  ["debug", "message"],
  ["message"],
];

/**
 * Walks a dotted property path on an unknown object and returns the value at
 * the leaf if and only if it is a non-empty string; otherwise `undefined`.
 */
function readStringPath(source: unknown, path: readonly string[]): string | undefined {
  let current: unknown = source;
  for (const key of path) {
    if (current == null || typeof current !== "object") return undefined;
    current = (current as Record<string, unknown>)[key];
  }
  return typeof current === "string" ? current : undefined;
}

/**
 * Extracts the most specific SQL message from a `@forge/sql` error.
 * Walks {@link SQL_ERROR_PATHS} in order and falls back to the provided
 * default when none of them yield a non-empty string.
 */
export function extractSqlErrorMessage(
  error: unknown,
  fallback: string = "Unknown error occurred",
): string {
  for (const path of SQL_ERROR_PATHS) {
    const value = readStringPath(error, path);
    if (value !== undefined) return value;
  }
  return fallback;
}
