#!/usr/bin/env node
// SPDX-FileCopyrightText: 2025-2026 Vasyl Zakharchenko
// SPDX-License-Identifier: MIT

/**
 * GitHub Packages CI helpers. Repository package.json files are never modified;
 * publish uses a temporary directory with an adjusted manifest only for npm publish.
 */

import { cleanupAllCiVersions, cleanupCiVersions } from "./gpr-delete.mjs";
import {
  installExampleDeps,
  installWorkspacePackages,
  publishCli,
  publishCore,
  publishExtra,
  publishWeeklyCli,
  publishWeeklyCore,
  publishWeeklyExtra,
} from "./gpr-publish.mjs";
import { ciVersion, weeklyVersion, writeNpmrc } from "./gpr-shared.mjs";

const COMMAND_USAGE =
  "ci-version | weekly-version | write-npmrc | publish-core | publish-extra | publish-cli | publish-weekly-core | publish-weekly-extra | publish-weekly-cli | install-workspace | install-example | cleanup-ci-versions | cleanup-all-ci-versions";

function requireCliArg(args, index, usage) {
  const value = args[index];
  if (!value) {
    throw new Error(`usage: ${usage}`);
  }
  return value;
}

function runCiVersionCommand(args) {
  console.log(ciVersion(args[0] ?? "."));
}

function runWeeklyVersionCommand(args) {
  console.log(weeklyVersion(args[0] ?? "."));
}

function runWriteNpmrcCommand() {
  writeNpmrc();
}

async function runPublishCoreCommand() {
  writeNpmrc();
  await publishCore();
}

async function runPublishExtraCommand(args) {
  writeNpmrc();
  await publishExtra(requireCliArg(args, 0, "publish-extra <coreVersion>"));
}

async function runPublishCliCommand(args) {
  writeNpmrc();
  await publishCli(requireCliArg(args, 0, "publish-cli <coreVersion>"));
}

async function runPublishWeeklyCoreCommand() {
  writeNpmrc();
  await publishWeeklyCore();
}

async function runPublishWeeklyExtraCommand(args) {
  writeNpmrc();
  await publishWeeklyExtra(requireCliArg(args, 0, "publish-weekly-extra <coreVersion>"));
}

async function runPublishWeeklyCliCommand(args) {
  writeNpmrc();
  await publishWeeklyCli(requireCliArg(args, 0, "publish-weekly-cli <coreVersion>"));
}

function runInstallWorkspaceCommand(args) {
  const [cwd, coreVersion, extraVersion, cliVersion] = args;
  if (!cwd || !coreVersion) {
    throw new Error("usage: install-workspace <dir> <coreVersion> [extraVersion] [cliVersion]");
  }
  installWorkspacePackages(cwd, coreVersion, extraVersion, cliVersion);
}

function runInstallExampleCommand(args) {
  const [exampleDir, coreVersion, extraVersion, cliVersion] = args;
  if (!exampleDir || !coreVersion) {
    throw new Error("usage: install-example <exampleDir> <coreVersion> [extraVersion] [cliVersion]");
  }
  const versions = { "forge-sql-orm": coreVersion };
  if (extraVersion) {
    versions["forge-sql-orm-extra"] = extraVersion;
  }
  if (cliVersion) {
    versions["forge-sql-orm-cli"] = cliVersion;
  }
  installExampleDeps(exampleDir, versions);
}

const commandHandlers = {
  "ci-version": runCiVersionCommand,
  "weekly-version": runWeeklyVersionCommand,
  "write-npmrc": runWriteNpmrcCommand,
  "publish-core": runPublishCoreCommand,
  "publish-extra": runPublishExtraCommand,
  "publish-cli": runPublishCliCommand,
  "publish-weekly-core": runPublishWeeklyCoreCommand,
  "publish-weekly-extra": runPublishWeeklyExtraCommand,
  "publish-weekly-cli": runPublishWeeklyCliCommand,
  "install-workspace": runInstallWorkspaceCommand,
  "install-example": runInstallExampleCommand,
  "cleanup-ci-versions": cleanupCiVersions,
  "cleanup-all-ci-versions": cleanupAllCiVersions,
};

async function main() {
  const [command, ...args] = process.argv.slice(2);
  const handler = commandHandlers[command];
  if (!handler) {
    throw new Error(`Unknown command: ${command ?? "(none)"}. Use ${COMMAND_USAGE}`);
  }
  await handler(args);
}

await main();
