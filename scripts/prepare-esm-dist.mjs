// SPDX-FileCopyrightText: 2025-2026 Vasyl Zakharchenko
// SPDX-License-Identifier: MIT

// Prepares dist/esm after tsc: marks it as an ES module package (so .js/.d.ts
// files are resolved under the "import" condition), fixes relative specifiers in
// the declarations and generates the ESM runtime entry point.
import { writeFileSync } from "node:fs";
import { join } from "node:path";
import { writeEsmEntry } from "./write-esm-entry.mjs";
import { rewriteEsmDeclarations } from "./rewrite-esm-declarations.mjs";

export function prepareEsmDist(distDir) {
  const esmDir = join(distDir, "esm");
  writeFileSync(join(esmDir, "package.json"), JSON.stringify({ type: "module" }, null, 2) + "\n");
  rewriteEsmDeclarations(esmDir);
  writeEsmEntry(distDir);
}
