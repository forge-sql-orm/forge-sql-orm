// SPDX-FileCopyrightText: 2025-2026 Vasyl Zakharchenko
// SPDX-License-Identifier: MIT

import { applySchemaMigrations } from "forge-sql-orm";
import migration from "./migration";

export { handler } from "./resolvers";

export const handlerMigration = async () => {
  return applySchemaMigrations(migration);
};
