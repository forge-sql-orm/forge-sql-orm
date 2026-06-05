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
  return String(version).replace(/-ci\.\d+$/, "");
}

export function ciVersion(dir = ".") {
  const pkg = readPkg(dir);
  return `${baseVersion(pkg.version)}-ci.${requireRunNumber()}`;
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

function npmPublishEphemeral(sourceDir, version, transformPkg) {
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
    const publishEnv = { ...process.env };
    delete publishEnv.NPM_CONFIG_USERCONFIG;
    // Keep npm notices off stdout so workflow output capture stays a single version line.
    execSync(`npm publish --ignore-scripts --tag ${CI_PUBLISH_TAG}`, {
      cwd: stagingDir,
      stdio: ["inherit", process.stderr, "inherit"],
      env: publishEnv,
    });
    console.error(`Published ${publishPkg.name}@${version} to GitHub Packages`);
  } finally {
    rmSync(stagingDir, { recursive: true, force: true });
  }
}

function installFromGpr(cwd, specs) {
  if (!specs.length) {
    return;
  }
  execSync(`npm install ${specs.join(" ")} --ignore-scripts`, {
    cwd,
    stdio: "inherit",
  });
}

function hasDep(pkg, name) {
  return Boolean(pkg.dependencies?.[name] ?? pkg.devDependencies?.[name]);
}

function publishCore() {
  const version = ciVersion(".");
  npmPublishEphemeral(".", version);
  return version;
}

function publishExtra(coreVersion) {
  const version = ciVersion("forge-sql-orm-extra");
  npmPublishEphemeral("forge-sql-orm-extra", version, (pkg) => {
    if (pkg.dependencies?.["forge-sql-orm"]) {
      pkg.dependencies["forge-sql-orm"] = gprDependencyAlias("forge-sql-orm", coreVersion);
    }
  });
  return version;
}

function publishCli(coreVersion) {
  const version = ciVersion("forge-sql-orm-cli");
  npmPublishEphemeral("forge-sql-orm-cli", version, (pkg) => {
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

async function githubApi(path, { method = "GET", token } = {}) {
  return fetch(`https://api.github.com${path}`, {
    method,
    headers: {
      Accept: "application/vnd.github+json",
      Authorization: `Bearer ${token}`,
      "X-GitHub-Api-Version": "2022-11-28",
    },
  });
}

async function findPackageVersionId(owner, packageName, version, token) {
  const encodedName = encodeURIComponent(packageName);
  const scopes = [`/orgs/${owner}/packages/npm/${encodedName}/versions`, `/users/${owner}/packages/npm/${encodedName}/versions`];

  for (const scope of scopes) {
    for (let page = 1; page <= 5; page += 1) {
      const response = await githubApi(`${scope}?per_page=100&page=${page}`, { token });
      if (response.status === 404) {
        break;
      }
      if (!response.ok) {
        const body = await response.text();
        console.warn(`Failed to list ${packageName} versions (${scope}): ${response.status} ${body}`);
        break;
      }

      const versions = await response.json();
      if (!versions.length) {
        break;
      }

      const match = versions.find((entry) => entry.name === version);
      if (match) {
        return { scope, id: match.id };
      }
    }
  }

  return null;
}

async function deletePackageVersion(owner, packageName, version, token) {
  const located = await findPackageVersionId(owner, packageName, version, token);
  if (!located) {
    console.log(`Version ${packageName}@${version} not found, skipping`);
    return;
  }

  const response = await githubApi(`${located.scope}/${located.id}`, { method: "DELETE", token });
  if (response.status === 204) {
    console.log(`Deleted ${packageName}@${version}`);
    return;
  }

  const body = await response.text();
  console.warn(`Failed to delete ${packageName}@${version}: ${response.status} ${body}`);
}

async function cleanupCiVersions() {
  const owner = githubOwner();
  const token = githubToken();

  for (const dir of CI_PACKAGE_DIRS) {
    const pkg = readPkg(dir);
    const version = ciVersion(dir);
    await deletePackageVersion(owner, scopedGprName(pkg.name), version, token);
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
      publishCore();
      break;
    }
    case "publish-extra": {
      writeNpmrc();
      const coreVersion = args[0];
      if (!coreVersion) {
        throw new Error("usage: publish-extra <coreVersion>");
      }
      publishExtra(coreVersion);
      break;
    }
    case "publish-cli": {
      writeNpmrc();
      const coreVersion = args[0];
      if (!coreVersion) {
        throw new Error("usage: publish-cli <coreVersion>");
      }
      publishCli(coreVersion);
      break;
    }
    case "install-workspace": {
      writeNpmrc();
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
      writeNpmrc();
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
