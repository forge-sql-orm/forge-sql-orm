#!/usr/bin/env node
// SPDX-FileCopyrightText: 2025-2026 Vasyl Zakharchenko
// SPDX-License-Identifier: MIT

/**
 * GitHub Packages CI helpers. Repository package.json files are never modified;
 * publish uses a temporary directory with an adjusted manifest only for npm publish.
 */

import { cpSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { execSync } from "node:child_process";
import path from "node:path";
import { tmpdir } from "node:os";

const GPR_REGISTRY = "https://npm.pkg.github.com";
const CI_PUBLISH_TAG = "ci";
const CI_PACKAGE_DIRS = [".", "forge-sql-orm-extra", "forge-sql-orm-cli"];

function requireRunNumber() {
  const runNumber = process.env.GITHUB_RUN_NUMBER;
  if (!runNumber) {
    throw new Error("GITHUB_RUN_NUMBER is required for CI package versions");
  }
  return runNumber;
}

function readPkg(dir) {
  return JSON.parse(readFileSync(path.join(dir, "package.json"), "utf8"));
}

function baseVersion(version) {
  return String(version).replace(/-ci\.[\d]+(?:-a[\d]+)?$/, "");
}

function ciVersionLabel() {
  const runNumber = requireRunNumber();
  const attempt = process.env.GITHUB_RUN_ATTEMPT ?? "1";
  return attempt === "1" ? runNumber : `${runNumber}-a${attempt}`;
}

export function ciVersion(dir = ".") {
  const pkg = readPkg(dir);
  return `${baseVersion(pkg.version)}-ci.${ciVersionLabel()}`;
}

function githubOwner() {
  const repository = process.env.GITHUB_REPOSITORY;
  if (!repository) {
    throw new Error("GITHUB_REPOSITORY is required for GitHub Packages");
  }
  return repository.split("/")[0];
}

function githubToken() {
  const token = process.env.NODE_AUTH_TOKEN ?? process.env.GITHUB_TOKEN;
  if (!token) {
    throw new Error("NODE_AUTH_TOKEN or GITHUB_TOKEN is required to access GitHub Packages");
  }
  return token;
}

function scopedGprName(name) {
  if (name.startsWith("@")) {
    return name;
  }
  return `@${githubOwner()}/${name}`;
}

function gprDependencyAlias(name, version) {
  return `npm:${scopedGprName(name)}@${version}`;
}

function gprInstallAlias(name, version) {
  return `${name}@npm:${scopedGprName(name)}@${version}`;
}

function npmrcContent() {
  const owner = githubOwner();
  return `//npm.pkg.github.com/:_authToken=${githubToken()}\n@${owner}:registry=${GPR_REGISTRY}\nregistry=https://registry.npmjs.org/\n`;
}

function writeNpmrc(targetDir = ".") {
  writeFileSync(path.join(targetDir, ".npmrc"), npmrcContent());
}

function copyPackagePayload(sourceDir, targetDir, pkg) {
  const files = pkg.files ?? [];
  for (const entry of files) {
    cpSync(path.join(sourceDir, entry), path.join(targetDir, entry), { recursive: true });
  }
}

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

  const stagingDir = mkdtempSync(path.join(tmpdir(), "forge-sql-orm-gpr-"));
  try {
    copyPackagePayload(sourceDir, stagingDir, sourcePkg);
    writeFileSync(
      path.join(stagingDir, "package.json"),
      `${JSON.stringify(publishPkg, null, 2)}\n`,
    );
    writeNpmrc(stagingDir);
    try {
      // Keep npm notices off stdout so workflow output capture stays a single version line.
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

function npmEnvWithoutUserConfig() {
  const env = { ...process.env, NODE_AUTH_TOKEN: githubToken() };
  delete env.NPM_CONFIG_USERCONFIG;
  return env;
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

async function publishCore() {
  const version = ciVersion(".");
  await npmPublishEphemeral(".", version);
  return version;
}

async function publishExtra(coreVersion) {
  const version = ciVersion("forge-sql-orm-extra");
  await npmPublishEphemeral("forge-sql-orm-extra", version, (pkg) => {
    if (pkg.dependencies?.["forge-sql-orm"]) {
      pkg.dependencies["forge-sql-orm"] = gprDependencyAlias("forge-sql-orm", coreVersion);
    }
  });
  return version;
}

async function publishCli(coreVersion) {
  const version = ciVersion("forge-sql-orm-cli");
  await npmPublishEphemeral("forge-sql-orm-cli", version, (pkg) => {
    if (pkg.dependencies?.["forge-sql-orm"]) {
      pkg.dependencies["forge-sql-orm"] = gprDependencyAlias("forge-sql-orm", coreVersion);
    }
  });
  return version;
}

function installWorkspacePackage(cwd, name, version) {
  const pkg = readPkg(cwd);
  if (!hasDep(pkg, name)) {
    return;
  }
  installFromGpr(cwd, [gprInstallAlias(name, version)]);
}

function installExampleDeps(exampleDir, versions) {
  const pkg = readPkg(exampleDir);
  const specs = [];
  for (const [name, version] of Object.entries(versions)) {
    if (hasDep(pkg, name)) {
      specs.push(gprInstallAlias(name, version));
    }
  }
  installFromGpr(exampleDir, specs);
}

async function githubApi(apiPath, { method = "GET", token } = {}) {
  return fetch(`https://api.github.com${apiPath}`, {
    method,
    headers: {
      Accept: "application/vnd.github+json",
      Authorization: `Bearer ${token}`,
      "X-GitHub-Api-Version": "2022-11-28",
    },
  });
}

function matchesPackageName(pkgName, unscopedName) {
  const owner = githubOwner();
  const scoped = scopedGprName(unscopedName);
  return (
    pkgName === unscopedName ||
    pkgName === scoped ||
    pkgName === `${owner}/${unscopedName}` ||
    pkgName?.toLowerCase() === unscopedName.toLowerCase()
  );
}

function packageNameCandidates(unscopedName) {
  const owner = githubOwner();
  const scoped = scopedGprName(unscopedName);
  return [...new Set([unscopedName, scoped, `${owner}/${unscopedName}`])];
}

async function listPackageVersions(owner, apiPackageName, token) {
  const encodedName = encodeURIComponent(apiPackageName);
  const roots = [`/orgs/${owner}/packages/npm/${encodedName}`, `/users/${owner}/packages/npm/${encodedName}`, `/user/packages/npm/${encodedName}`];

  for (const root of roots) {
    const versions = [];
    for (let page = 1; page <= 5; page += 1) {
      const response = await githubApi(`${root}/versions?per_page=100&page=${page}&state=active`, { token });
      if (response.status === 404) {
        break;
      }
      if (!response.ok) {
        const body = await response.text();
        console.warn(`Failed to list ${apiPackageName} versions (${root}): ${response.status} ${body}`);
        break;
      }
      const pageVersions = await response.json();
      if (!pageVersions.length) {
        break;
      }
      versions.push(...pageVersions);
    }
    if (versions.length) {
      return { root, versions };
    }
  }

  return null;
}

async function discoverPackageApiName(owner, unscopedName, token) {
  const response = await githubApi(`/orgs/${owner}/packages?package_type=npm&per_page=100`, { token });
  if (response.ok) {
    const packages = await response.json();
    const match = packages.find((pkg) => matchesPackageName(pkg.name, unscopedName));
    if (match) {
      return match.name;
    }
  }

  for (const candidate of packageNameCandidates(unscopedName)) {
    const located = await listPackageVersions(owner, candidate, token);
    if (located) {
      return candidate;
    }
  }

  return null;
}

async function deleteGprVersion(unscopedName, version) {
  const owner = githubOwner();
  const token = githubToken();
  const scopedName = scopedGprName(unscopedName);
  const apiPackageName = await discoverPackageApiName(owner, unscopedName, token);
  if (!apiPackageName) {
    console.error(`Package ${scopedName} not found in GitHub Packages API, skipping delete for ${version}`);
    return;
  }

  const located = await listPackageVersions(owner, apiPackageName, token);
  if (!located) {
    console.error(`No versions listed for ${apiPackageName}, skipping delete for ${version}`);
    return;
  }

  const match = located.versions.find((entry) => entry.name === version);
  if (!match) {
    console.error(`Version ${scopedName}@${version} not found, skipping`);
    return;
  }

  const response = await githubApi(`${located.root}/versions/${match.id}`, { method: "DELETE", token });
  if (response.status === 204) {
    console.error(`Deleted ${scopedName}@${version}`);
    return;
  }

  const body = await response.text();
  console.warn(`Failed to delete ${scopedName}@${version}: ${response.status} ${body}`);
}

async function cleanupCiVersions() {
  for (const dir of CI_PACKAGE_DIRS) {
    const pkg = readPkg(dir);
    await deleteGprVersion(pkg.name, ciVersion(dir));
  }
}

async function main() {
  const [command, ...args] = process.argv.slice(2);

  switch (command) {
    case "ci-version": {
      console.log(ciVersion(args[0] ?? "."));
      break;
    }
    case "write-npmrc": {
      writeNpmrc();
      break;
    }
    case "publish-core": {
      writeNpmrc();
      await publishCore();
      break;
    }
    case "publish-extra": {
      writeNpmrc();
      const coreVersion = args[0];
      if (!coreVersion) {
        throw new Error("usage: publish-extra <coreVersion>");
      }
      await publishExtra(coreVersion);
      break;
    }
    case "publish-cli": {
      writeNpmrc();
      const coreVersion = args[0];
      if (!coreVersion) {
        throw new Error("usage: publish-cli <coreVersion>");
      }
      await publishCli(coreVersion);
      break;
    }
    case "install-workspace": {
      const [cwd, coreVersion, extraVersion, cliVersion] = args;
      if (!cwd || !coreVersion) {
        throw new Error("usage: install-workspace <dir> <coreVersion> [extraVersion] [cliVersion]");
      }
      installWorkspacePackage(cwd, "forge-sql-orm", coreVersion);
      if (extraVersion) {
        installWorkspacePackage(cwd, "forge-sql-orm-extra", extraVersion);
      }
      if (cliVersion) {
        installWorkspacePackage(cwd, "forge-sql-orm-cli", cliVersion);
      }
      break;
    }
    case "install-example": {
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
      break;
    }
    case "cleanup-ci-versions": {
      await cleanupCiVersions();
      break;
    }
    default:
      throw new Error(
        `Unknown command: ${command ?? "(none)"}. Use ci-version | write-npmrc | publish-core | publish-extra | publish-cli | install-workspace | install-example | cleanup-ci-versions`,
      );
  }
}

await main();
