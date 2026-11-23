// SPDX-FileCopyrightText: 2025-2026 Vasyl Zakharchenko
// SPDX-License-Identifier: MIT

import type { MigrationRunner } from "@forge/sql/out/migration.js";

export default async (migrationRunner: MigrationRunner): Promise<MigrationRunner> => {
  return migrationRunner.enqueue(
    "v1_MIGRATION0",
    "CREATE TABLE IF NOT EXISTS `users` ( `id` int AUTO_INCREMENT NOT NULL, `name` varchar(200), CONSTRAINT `users_id` PRIMARY KEY(`id`) )",
  );
};
