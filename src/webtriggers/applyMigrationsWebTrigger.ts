// SPDX-FileCopyrightText: 2025-2026 Vasyl Zakharchenko
// SPDX-License-Identifier: MIT

import { migrationRunner, sql } from "@forge/sql";
import { MigrationRunner } from "@forge/sql/out/migration";
import { extractSqlErrorMessage } from "../utils/errorUtils";

/**
 * Options for {@link applySchemaMigrations}.
 */
export interface ApplySchemaMigrationsOptions {
  /**
   * Receives progress messages. Defaults to `console.debug`.
   * Pass a no-op function (`() => {}`) to silence progress logs completely.
   * Errors are always reported through `console.error`.
   */
  logger?: (message: string, data?: unknown) => void;
  /**
   * Whether to log the full migration history after migrations were applied. Defaults to `true`.
   */
  logHistory?: boolean;
}

/**
 * Web trigger for applying database schema migrations in Atlassian Forge SQL.
 * This function handles the complete migration process including:
 * - Database provisioning
 * - Migration execution
 * - Migration history tracking
 *
 * Progress messages are only logged when at least one migration was applied, so it is safe
 * to call from a frequent scheduled trigger without flooding the logs.
 *
 * @param migration - A function that takes a MigrationRunner instance and returns a Promise of MigrationRunner
 *                     This function should define the sequence of migrations to be applied
 * @param options - Optional logging settings, see {@link ApplySchemaMigrationsOptions}
 * @returns {Promise<{
 *   headers: { "Content-Type": ["application/json"] },
 *   statusCode: number,
 *   statusText: string,
 *   body: string
 * }>} A response object containing:
 * - headers: Content-Type header set to application/json
 * - statusCode: 200 on success
 * - statusText: "OK" on success
 * - body: Success message or error details
 *
 * @throws {Error} If database provisioning fails
 * @throws {Error} If migration execution fails
 */
export const applySchemaMigrations = async (
  migration: (migrationRunner: MigrationRunner) => Promise<MigrationRunner>,
  options: ApplySchemaMigrationsOptions = {},
) => {
  // eslint-disable-next-line no-console
  const { logger: customLogger = console.debug, logHistory = true } = options;
  // A failing logger must not turn already applied migrations into an error response
  const logger: NonNullable<ApplySchemaMigrationsOptions["logger"]> = (...args) => {
    try {
      customLogger(...args);
    } catch (loggerError) {
      // eslint-disable-next-line no-console
      console.error("Migration logger failed:", loggerError);
    }
  };
  try {
    if (typeof migration !== "function") {
      throw new Error("migration is not a function");
    }
    await sql._provision();
    const migrations = await migration(migrationRunner);
    const successfulMigrations = await migrations.run();

    if (Array.isArray(successfulMigrations) && successfulMigrations.length === 0) {
      return {
        headers: { "Content-Type": ["application/json"] },
        statusCode: 200,
        statusText: "OK",
        body: "Migrations successfully executed",
      };
    }

    logger("Provisioned the database and ran schema migrations");
    logger("Migrations applied:", successfulMigrations);

    if (logHistory) {
      const migrationList = await migrationRunner.list();
      let migrationHistory = "No migrations found";

      if (Array.isArray(migrationList) && migrationList.length > 0) {
        const sortedMigrations = migrationList.toSorted(
          (a, b) => a.migratedAt.getTime() - b.migratedAt.getTime(),
        );

        migrationHistory = sortedMigrations
          .map((y) => `${y.id}, ${y.name}, ${y.migratedAt.toISOString()}`)
          .join("\n");
      }
      logger("Migrations history:\nid, name, migrated_at\n", migrationHistory);
    }

    return {
      headers: { "Content-Type": ["application/json"] },
      statusCode: 200,
      statusText: "OK",
      body: "Migrations successfully executed",
    };
  } catch (error) {
    const errorMessage = extractSqlErrorMessage(error);
    // eslint-disable-next-line no-console
    console.error("Error during migration:", errorMessage);
    return {
      headers: { "Content-Type": ["application/json"] },
      statusCode: 500,
      statusText: "Internal Server Error",
      body: error instanceof Error ? errorMessage : "Unknown error during migration",
    };
  }
};
