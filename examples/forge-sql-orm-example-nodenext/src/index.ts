// SPDX-FileCopyrightText: 2025-2026 Vasyl Zakharchenko
// SPDX-License-Identifier: MIT

// Named imports from both packages must type-check under nodenext (see #2865).
import { applySchemaMigrations } from "forge-sql-orm";
import migration from "./migration/index.js";

export { handler } from "./resolvers/index.js";

export const handlerMigration = async () => {
  return applySchemaMigrations(migration);
};
