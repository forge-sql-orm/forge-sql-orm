// SPDX-FileCopyrightText: 2025-2026 Vasyl Zakharchenko
// SPDX-License-Identifier: MIT

import ForgeSQL from "forge-sql-orm-extra";

export const FORGE_SQL_ORM = new ForgeSQL({
  logRawSqlQuery: false,
  cacheEntityName: "cache",
  cacheTTL: 180,
});
