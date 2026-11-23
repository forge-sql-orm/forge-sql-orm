// SPDX-FileCopyrightText: 2025-2026 Vasyl Zakharchenko
// SPDX-License-Identifier: MIT

// Marks dist/esm as an ES module package so its .js/.d.ts files are resolved
// under the "import" condition (drizzle-orm .d.ts, not .d.cts). This keeps the
// drizzle type identity consistent for ESM/bundler consumers of forge-sql-orm.
import { writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { rewriteEsmDeclarations } from "./rewrite-esm-declarations.mjs";

writeFileSync(
  new URL("../dist/esm/package.json", import.meta.url),
  JSON.stringify({ type: "module" }, null, 2) + "\n",
);

rewriteEsmDeclarations(fileURLToPath(new URL("../dist/esm/", import.meta.url)));
