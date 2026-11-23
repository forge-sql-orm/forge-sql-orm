// SPDX-FileCopyrightText: 2025-2026 Vasyl Zakharchenko
// SPDX-License-Identifier: MIT

import { applySchemaMigrations } from "forge-sql-orm";
import migration from "./migration/index.js";

export { handler } from "./resolvers/index.js";

export const handlerMigration = async () => {
  return applySchemaMigrations(migration);
};
