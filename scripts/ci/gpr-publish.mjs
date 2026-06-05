// SPDX-FileCopyrightText: 2025-2026 Vasyl Zakharchenko
// SPDX-License-Identifier: MIT

import { cpSync, mkdtempSync, rmSync, writeFileSync } from "node:fs";
import { execSync } from "node:child_process";
import { tmpdir } from "node:os";

import {
  CI_PUBLISH_TAG,
  GPR_REGISTRY,
  ciVersion,
  gprDependencyAlias,
  gprInstallAlias,
  npmEnvWithoutUserConfig,
  readPkg,
  scopedGprName,
  writeNpmrc,
} from "./gpr-shared.mjs";

const PUBLISH_LIFECYCLE_SCRIPTS = ["prepare", "prepublish", "prepublishOnly", "prepack", "postpack"];

function commandOutput(error) {
  if (!error || typeof error !== "object") {
    return "";
  }
  return `${error.stdout?.toString() ?? ""}${error.stderr?.toString() ?? ""}${error.message ?? ""}`;
}

function isGprAlreadyPublishedError(error) {
  return /E409|409|Cannot publish over existing version/i.test(commandOutput(error));
}

function runNpmCommand(cwd, args) {
  return execSync(`npm ${args}`, {
    cwd,
    stdio: ["inherit", process.stderr, "pipe"],
    env: npmEnvWithoutUserConfig(),
  });
}

function copyPackagePayload(sourceDir, targetDir, pkg) {
  const files = pkg.files ?? [];
  for (const entry of files) {
    cpSync(`${sourceDir}/${entry}`, `${targetDir}/${entry}`, { recursive: true });
  }
}

function sanitizePublishManifest(pkg) {
  for (const scriptName of PUBLISH_LIFECYCLE_SCRIPTS) {
    delete pkg.scripts?.[scriptName];
  }
  if (pkg.scripts && Object.keys(pkg.scripts).length === 0) {
    delete pkg.scripts;
  }
  delete pkg.husky;
  delete pkg["lint-staged"];
  delete pkg.devDependencies;
}

async function npmPublishEphemeral(sourceDir, version, transformPkg) {
  const sourcePkg = readPkg(sourceDir);
  const publishPkg = structuredClone(sourcePkg);
  publishPkg.name = scopedGprName(sourcePkg.name);
  publishPkg.version = version;
  publishPkg.publishConfig = { registry: GPR_REGISTRY, access: "public" };
  transformPkg?.(publishPkg);
  sanitizePublishManifest(publishPkg);

  const stagingDir = mkdtempSync(`${tmpdir()}/forge-sql-orm-gpr-`);
  try {
    copyPackagePayload(sourceDir, stagingDir, sourcePkg);
    writeFileSync(`${stagingDir}/package.json`, `${JSON.stringify(publishPkg, null, 2)}\n`);
    writeNpmrc(stagingDir);
    try {
      runNpmCommand(stagingDir, `publish --ignore-scripts --tag ${CI_PUBLISH_TAG}`);
      console.error(`Published ${publishPkg.name}@${version} to GitHub Packages`);
    } catch (error) {
      if (isGprAlreadyPublishedError(error)) {
        console.error(`Already published ${publishPkg.name}@${version}, continuing`);
        return;
      }
      throw error;
    }
  } finally {
    rmSync(stagingDir, { recursive: true, force: true });
  }
}

function installFromGpr(cwd, specs) {
  if (!specs.length) {
    return;
  }
  writeNpmrc(cwd);
  execSync(`npm install ${specs.join(" ")} --ignore-scripts`, {
    cwd,
    stdio: "inherit",
    env: npmEnvWithoutUserConfig(),
  });
}

function hasDep(pkg, name) {
  return Boolean(pkg.dependencies?.[name] ?? pkg.devDependencies?.[name]);
}

export async function publishCore() {
  const version = ciVersion(".");
  await npmPublishEphemeral(".", version);
}

export async function publishExtra(coreVersion) {
  const version = ciVersion("forge-sql-orm-extra");
  await npmPublishEphemeral("forge-sql-orm-extra", version, (pkg) => {
    if (pkg.dependencies?.["forge-sql-orm"]) {
      pkg.dependencies["forge-sql-orm"] = gprDependencyAlias("forge-sql-orm", coreVersion);
    }
  });
}

export async function publishCli(coreVersion) {
  const version = ciVersion("forge-sql-orm-cli");
  await npmPublishEphemeral("forge-sql-orm-cli", version, (pkg) => {
    if (pkg.dependencies?.["forge-sql-orm"]) {
      pkg.dependencies["forge-sql-orm"] = gprDependencyAlias("forge-sql-orm", coreVersion);
    }
  });
}

function installWorkspacePackage(cwd, name, version) {
  const pkg = readPkg(cwd);
  if (!hasDep(pkg, name)) {
    return;
  }
  installFromGpr(cwd, [gprInstallAlias(name, version)]);
}

export function installWorkspacePackages(cwd, coreVersion, extraVersion, cliVersion) {
  installWorkspacePackage(cwd, "forge-sql-orm", coreVersion);
  if (extraVersion) {
    installWorkspacePackage(cwd, "forge-sql-orm-extra", extraVersion);
  }
  if (cliVersion) {
    installWorkspacePackage(cwd, "forge-sql-orm-cli", cliVersion);
  }
}

export function installExampleDeps(exampleDir, versions) {
  const pkg = readPkg(exampleDir);
  const specs = [];
  for (const [name, version] of Object.entries(versions)) {
    if (hasDep(pkg, name)) {
      specs.push(gprInstallAlias(name, version));
    }
  }
  installFromGpr(exampleDir, specs);
}
