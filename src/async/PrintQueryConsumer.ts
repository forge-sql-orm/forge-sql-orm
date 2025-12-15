import { AsyncEvent } from "@forge/events";
import {
  MetadataQueryOptions,
  printDegradationQueries,
  Statistic,
} from "../utils/metadataContextUtils";
import { ForgeSqlOperation } from "../core/ForgeSQLQueryBuilder";

/**
 * Event payload for async query degradation analysis.
 * Contains query performance statistics and metadata for analysis.
 */
export type AsyncEventPrintQuery = {
  /** Total database execution time across all queries in milliseconds */
  totalDbExecutionTime: number;
  /** Total response size across all queries in bytes */
  totalResponseSize: number;
  /** Timestamp when the query execution started */
  beginTime: Date;
  /** Query analysis options with all fields set to defaults if not provided */
  options: Required<MetadataQueryOptions>;
  /** Array of query statistics including SQL, parameters, and execution metadata */
  statistics: Statistic[];
};

/**
 * Consumer function for processing async query degradation events.
 *
 * This function is called by the Forge event system when a query degradation event
 * is received from the queue. It processes the event and prints query performance
 * analysis including execution plans for slow queries.
 *
 * The function logs a warning message with job ID, total DB time, query count, and
 * start time to help correlate with the original resolver/service logs.
 *
 * @param forgeSQLORM - The ForgeSQL operation instance for database access
 * @param event - The async event containing query degradation data
 * @returns Promise that resolves when query analysis is complete
 *
 * @example
 * ```yaml
 * # manifest.yml - Configure consumer for async query degradation analysis
 * modules:
 *   consumer:
 *     - key: print-degradation-queries
 *       queue: degradationQueue
 *       function: handlerAsyncDegradation
 *   function:
 *     - key: handlerAsyncDegradation
 *       handler: index.handlerAsyncDegradation
 * ```
 *
 * @example
 * ```typescript
 * // index.ts - Handler function that processes async events
 * import { AsyncEvent } from "@forge/events";
 * import { printDegradationQueriesConsumer } from "forge-sql-orm";
 * import { FORGE_SQL_ORM } from "./utils/forgeSqlOrmUtils";
 *
 * export const handlerAsyncDegradation = (event: AsyncEvent) => {
 *   return printDegradationQueriesConsumer(FORGE_SQL_ORM, event);
 * };
 * ```
 *
 * @example
 * ```typescript
 * // Using async queue in resolver - Enable async processing
 * resolver.define("fetch", async (req: Request) => {
 *   return await FORGE_SQL_ORM.executeWithMetadata(
 *     async () => {
 *       // ... your queries ...
 *       return await SQL_QUERY;
 *     },
 *     async (totalDbExecutionTime, totalResponseSize, printQueries) => {
 *       if (totalDbExecutionTime > 800) {
 *         await printQueries(); // Will queue for async processing
 *       }
 *     },
 *     { asyncQueueName: "degradationQueue" } // Enable async processing
 *   );
 * });
 * ```
 *
 * @example
 * ```typescript
 * // Log correlation - How to find related logs
 * //
 * // 1. In resolver/service log, you'll see:
 * //    [Performance Analysis] Query degradation event queued for async processing | Job ID: abc-123 | ...
 * //
 * // 2. In consumer log (handlerAsyncDegradation), search for the same Job ID:
 * //    [Performance Analysis] Processing query degradation event | Job ID: abc-123 | ...
 * //
 * // 3. To find all related logs, search logs for: "Job ID: abc-123"
 * //    This will show both the queuing event and the processing event
 * //
 * // Example log flow:
 * // WARN resolver: [Performance Analysis] Query degradation event queued... | Job ID: abc-123
 * // WARN handlerAsyncDegradation: [Performance Analysis] Processing query degradation event | Job ID: abc-123
 * // WARN handlerAsyncDegradation: SQL: SELECT ... | Time: 3514 ms
 * ```
 */
export async function printDegradationQueriesConsumer(
  forgeSQLORM: ForgeSqlOperation,
  event: AsyncEvent,
): Promise<void> {
  const body: AsyncEventPrintQuery = event.body as AsyncEventPrintQuery;
  body.beginTime = new Date(body.beginTime);
  // eslint-disable-next-line no-console
  console.warn(
    `[Performance Analysis] Processing query degradation event | Job ID: ${event.jobId} | Total DB time: ${body.totalDbExecutionTime}ms | Queries: ${body.statistics.length} | Started: ${body.beginTime.toISOString()}`,
  );
  await printDegradationQueries(forgeSQLORM, body);
}
