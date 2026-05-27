// SPDX-FileCopyrightText: 2025-2026 Vasyl Zakharchenko
// SPDX-License-Identifier: MIT

import { MigrationRunner } from "@forge/sql/out/migration";
import v1 from "./migrationV1";
import migrationAdditional from "./migrationAdditional";

export type MigrationType = (migrationRunner: MigrationRunner) => MigrationRunner;

export default async (migrationRunner: MigrationRunner): Promise<MigrationRunner> => {
  v1(migrationRunner);
  migrationAdditional(migrationRunner);
  return migrationRunner;
};
