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
  return error == null ? fallback : String(error);
}
