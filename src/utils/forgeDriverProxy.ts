// SPDX-FileCopyrightText: 2025-2026 Vasyl Zakharchenko
// SPDX-License-Identifier: MIT

import { forgeDriver } from "./forgeDriver";
import { ForgeSqlOperation } from "../core";
import { handleErrorsWithPlan } from "./sqlUtils";

/**
 * Error codes and constants for query analysis
 */
const QUERY_ERROR_CODES = {
  TIMEOUT: "SQL_QUERY_TIMEOUT",
  OUT_OF_MEMORY_ERRNO: 8175,
} as const;

/**
 * Delay to wait for CLUSTER_STATEMENTS_SUMMARY to be populated
 */
const STATEMENTS_SUMMARY_DELAY_MS = 200;

/**
 * Checks if error is a timeout or out-of-memory error.
 */
function isQueryError(error: unknown): { isTimeout: boolean; isOutOfMemory: boolean } {
  const err = error as { code?: string; context?: { debug?: { errno?: number } } };
  const isTimeout = err?.code === QUERY_ERROR_CODES.TIMEOUT;
  const isOutOfMemory = err?.context?.debug?.errno === QUERY_ERROR_CODES.OUT_OF_MEMORY_ERRNO;
  return { isTimeout, isOutOfMemory };
}

/**
 * Handles timeout or out-of-memory errors by analyzing the query.
 */
async function handleQueryError(
  queryStartTime: number,
  forgeSqlOperation: ForgeSqlOperation,
  isTimeout: boolean,
): Promise<void> {
  // Wait for CLUSTER_STATEMENTS_SUMMARY to be populated with our failed query data
  await new Promise((resolve) => setTimeout(resolve, STATEMENTS_SUMMARY_DELAY_MS));

  const queryEndTime = Date.now();
  const queryDuration = queryEndTime - queryStartTime;
  const errorType: "OOM" | "TIMEOUT" = isTimeout ? "TIMEOUT" : "OOM";

  if (isTimeout) {
    // eslint-disable-next-line no-console
    console.error(` TIMEOUT detected - Query exceeded time limit`);
  } else {
    // eslint-disable-next-line no-console
    console.error(`OUT OF MEMORY detected - Query exceeded memory limit`);
  }

  // Analyze the failed query using CLUSTER_STATEMENTS_SUMMARY
  await handleErrorsWithPlan(forgeSqlOperation, queryDuration, errorType);
}

/**
 * Creates a proxy for the forgeDriver that wraps query execution with error analysis.
 *
 * On timeout or out-of-memory errors, the proxy waits for CLUSTER_STATEMENTS_SUMMARY
 * to be populated and logs diagnostic information for the failed query.
 *
 * @param forgeSqlOperation - The ForgeSQL operation instance used for query analysis
 * @param logRawSqlQuery - When true, logs SQL error details to the console on failure
 * @returns A proxied version of the forgeDriver
 */
export function createForgeDriverProxy(
  forgeSqlOperation: ForgeSqlOperation,
  logRawSqlQuery?: boolean,
) {
  return async (
    query: string,
    params: unknown[],
    method: "all" | "execute",
  ): Promise<{
    rows: unknown[];
    insertId?: number;
    affectedRows?: number;
  }> => {
    const queryStartTime = Date.now();

    try {
      return await forgeDriver(query, params, method);
    } catch (error) {
      const { isTimeout, isOutOfMemory } = isQueryError(error);

      if (isTimeout || isOutOfMemory) {
        await handleQueryError(queryStartTime, forgeSqlOperation, isTimeout);
      }

      // Log SQL error details if requested
      if (logRawSqlQuery) {
        // eslint-disable-next-line no-console
        console.debug(`SQL Error Details:`, JSON.stringify(error, null, 2));
      }

      // Re-throw the original error
      throw error;
    }
  };
}
