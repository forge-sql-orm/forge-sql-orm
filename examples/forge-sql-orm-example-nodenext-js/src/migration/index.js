// SPDX-FileCopyrightText: 2025-2026 Vasyl Zakharchenko
// SPDX-License-Identifier: MIT

/**
 * @param {import("@forge/sql/out/migration.js").MigrationRunner} migrationRunner
 * @returns {Promise<import("@forge/sql/out/migration.js").MigrationRunner>}
 */
export default async (migrationRunner) => {
  return migrationRunner.enqueue(
    "v1_MIGRATION0",
    "CREATE TABLE IF NOT EXISTS `users` ( `id` int AUTO_INCREMENT NOT NULL, `name` varchar(200), CONSTRAINT `users_id` PRIMARY KEY(`id`) )",
  );
};
