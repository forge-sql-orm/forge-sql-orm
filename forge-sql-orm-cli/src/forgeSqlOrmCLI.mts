#!/usr/bin/env node
// SPDX-FileCopyrightText: 2025-2026 Vasyl Zakharchenko
// SPDX-License-Identifier: MIT

import { execSync } from "node:child_process";
import path, { dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
// Get CLI arguments (excluding "node" and script path)
const args = process.argv.slice(2).join(" ");

// Resolve the path to cli.ts (your TypeScript entry file)
const cliPath = path.resolve(__dirname, "cli.mjs");

try {
    execSync(`npx  --yes tsm --no-warnings "${cliPath}" ${args}`, { stdio: "inherit" });
    process.exit(0);
} catch (e: unknown) {
    console.error("⚠️  Command execution failed:", e instanceof Error ? e.message : e);
    process.exit(1);
}