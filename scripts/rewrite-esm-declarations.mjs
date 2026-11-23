// SPDX-FileCopyrightText: 2025-2026 Vasyl Zakharchenko
// SPDX-License-Identifier: MIT

import { existsSync, readdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";

// Node16/NodeNext consumers require explicit extensions on relative imports in
// ES module declarations. tsc (moduleResolution: Bundler) emits them without,
// so rewrite them: "./x" -> "./x.js" or "./x/index.js". Bundler still resolves these.
function listDeclarations(dir) {
  return readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) return listDeclarations(full);
    return entry.name.endsWith(".d.ts") ? [full] : [];
  });
}

// @forge/sql has no "exports" map, so deep imports need the extension too.
const FORGE_SQL_DEEP_IMPORT = "@forge/sql/out/";

function withExtension(file, specifier) {
  if (specifier.startsWith(FORGE_SQL_DEEP_IMPORT)) {
    return specifier.endsWith(".js") ? specifier : `${specifier}.js`;
  }
  if (!specifier.startsWith(".") || /\.[cm]?js$|\.json$/.test(specifier)) return specifier;
  const target = resolve(dirname(file), specifier);
  if (existsSync(`${target}.d.ts`)) return `${specifier}.js`;
  if (existsSync(join(target, "index.d.ts"))) return `${specifier.replace(/\/$/, "")}/index.js`;
  return specifier;
}

const specifierPattern = /(\bfrom\s*|\bimport\s*\(\s*)(["'])(\.[^"']*|@forge\/sql\/out\/[^"']*)\2/g;
export function rewriteEsmDeclarations(esmDir) {
  for (const file of listDeclarations(esmDir)) {
    const source = readFileSync(file, "utf8");
    const rewritten = source.replace(
      specifierPattern,
      (_, prefix, quote, specifier) => `${prefix}${quote}${withExtension(file, specifier)}${quote}`,
    );
    if (rewritten !== source) writeFileSync(file, rewritten);
  }
}
