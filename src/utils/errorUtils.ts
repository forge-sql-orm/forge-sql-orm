// SPDX-FileCopyrightText: 2025-2026 Vasyl Zakharchenko
// SPDX-License-Identifier: MIT

/**
 * Extracts a human-readable message from an unknown thrown value.
 *
 * Centralised so that `catch (e) { ... e.message ... }` sites do not need to
 * inline the `instanceof Error` ternary, which inflates cyclomatic complexity.
 */
export function getErrorMessage(error: unknown, fallback: string = "Unknown error"): string {
  if (error instanceof Error) {
    return error.message;
  }
  if (typeof error === "string") {
    return error;
  }
  if (error == null) {
    return fallback;
  }
  if (typeof error === "object") {
    try {
      return JSON.stringify(error);
    } catch {
      return fallback;
    }
  }
  return String(error);
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
 * Extracts the most specific SQL message from a `@forge/sql` error.
 * Walks the known well-known paths in order of specificity and falls back
 * to the value of `Error.message` (or the provided fallback) when none
 * of them are populated.
 */
export function extractSqlErrorMessage(
  error: unknown,
  fallback: string = "Unknown error occurred",
): string {
  const err = error as ForgeSqlErrorShape;
  return (
    err?.cause?.context?.debug?.sqlMessage ??
    err?.cause?.context?.debug?.message ??
    err?.debug?.context?.sqlMessage ??
    err?.debug?.context?.message ??
    err?.debug?.sqlMessage ??
    err?.debug?.message ??
    err?.message ??
    fallback
  );
}
