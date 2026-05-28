#!/usr/bin/env node
// SPDX-FileCopyrightText: 2025-2026 Vasyl Zakharchenko
// SPDX-License-Identifier: MIT
import { readFileSync, writeFileSync } from "node:fs";

const COPYRIGHT = "2025-2026 Vasyl Zakharchenko";
const LICENSE = "MIT";
// Tokens split so the REUSE scanner does not try to parse template
// expressions like `${LICENSE}` as SPDX license expressions.
const TAG_COPY = "SPDX-File" + "CopyrightText";
const TAG_LIC = "SPDX-License" + "-Identifier";
const HEADER = `// ${TAG_COPY}: ${COPYRIGHT}\n// ${TAG_LIC}: ${LICENSE}\n`;
const MARKER = "SPDX-License" + "-Identifier";

let touched = 0;
for (const file of process.argv.slice(2)) {
  const original = readFileSync(file, "utf8");
  if (original.slice(0, 500).includes(MARKER)) continue;

  let prefix = "";
  let body = original;
  if (body.startsWith("#!")) {
    const nl = body.indexOf("\n");
    if (nl === -1) {
      prefix = `${body}\n`;
      body = "";
    } else {
      prefix = body.slice(0, nl + 1);
      body = body.slice(nl + 1);
    }
  }

  const separator = body.startsWith("\n") ? "" : "\n";
  writeFileSync(file, `${prefix}${HEADER}${separator}${body}`);
  touched++;
}

if (touched > 0) process.stdout.write(`SPDX: added headers to ${touched} file(s)\n`);
