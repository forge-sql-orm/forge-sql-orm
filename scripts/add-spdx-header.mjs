#!/usr/bin/env node
import { readFileSync, writeFileSync } from "node:fs";

const COPYRIGHT = "2025-2026 Vasyl Zakharchenko";
const LICENSE = "MIT";
const HEADER = `// SPDX-FileCopyrightText: ${COPYRIGHT}\n// SPDX-License-Identifier: ${LICENSE}\n`;

let touched = 0;
for (const file of process.argv.slice(2)) {
  const original = readFileSync(file, "utf8");
  if (original.slice(0, 500).includes("SPDX-License-Identifier")) continue;

  let prefix = "";
  let body = original;
  if (body.startsWith("#!")) {
    const nl = body.indexOf("\n");
    prefix = body.slice(0, nl + 1);
    body = body.slice(nl + 1);
  }

  const separator = body.startsWith("\n") ? "" : "\n";
  writeFileSync(file, `${prefix}${HEADER}${separator}${body}`);
  touched++;
}

if (touched > 0) console.log(`SPDX: added headers to ${touched} file(s)`);
