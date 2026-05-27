// SPDX-FileCopyrightText: 2025-2026 Vasyl Zakharchenko
// SPDX-License-Identifier: MIT

import { applySchemaMigrations, dropSchemaMigrations, fetchSchemaWebTrigger } from "forge-sql-orm";
import migration from "./database/migration";

export { handler } from "./resolvers";

export const handlerMigration = async () => {
  return applySchemaMigrations(migration);
};

export const dropMigrations = () => {
  return dropSchemaMigrations();
};

export const fetchMigrations = () => {
  return fetchSchemaWebTrigger();
};
