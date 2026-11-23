// SPDX-FileCopyrightText: 2025-2026 Vasyl Zakharchenko
// SPDX-License-Identifier: MIT

// Never bundled by Forge. A ".mts" file is always an ES module, so under nodenext/node16 it is
// resolved through the "import" condition (dist/esm/**/*.d.ts) of both packages. Regression
// guard for #2865: named exports must resolve and ForgeSQL must not degrade to `any`.
import ForgeSQL, { KVSCache } from "forge-sql-orm-extra";
import { applySchemaMigrations } from "forge-sql-orm";

export const esmExports = { KVSCache, applySchemaMigrations };

// Fails to compile if ForgeSQL is `any` (an unused directive is an error).
// @ts-expect-error not a boolean
export const wrongOption = new ForgeSQL({ logRawSqlQuery: "not-a-boolean" });
// @ts-expect-error unknown method
new ForgeSQL().nonExistentMethod();
