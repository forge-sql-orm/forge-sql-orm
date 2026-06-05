// SPDX-FileCopyrightText: 2025-2026 Vasyl Zakharchenko
// SPDX-License-Identifier: MIT

import { readFileSync, writeFileSync } from "node:fs";
import path from "node:path";

export const GPR_REGISTRY = "https://npm.pkg.github.com";
export const CI_PUBLISH_TAG = "ci";
export const LATEST_PUBLISH_TAG = "latest";
export const CI_PACKAGE_DIRS = [".", "forge-sql-orm-extra", "forge-sql-orm-cli"];
export const WEEKLY_WORKFLOW_FILE = "node.js.yml";

function requireRunNumber() {
  const runNumber = process.env.GITHUB_RUN_NUMBER;
  if (!runNumber) {
    throw new Error("GITHUB_RUN_NUMBER is required for CI package versions");
  }
  return runNumber;
}

export function readPkg(dir) {
  return JSON.parse(readFileSync(path.join(dir, "package.json"), "utf8"));
}

function baseVersion(version) {
  return String(version)
    .replace(/-ci\.[\d]+(?:-a[\d]+)?$/, "")
    .replace(/-weekly\.\d{8}$/, "");
}

export function weeklyVersionLabel() {
  const fromEnv = process.env.WEEKLY_BUILD_DATE;
  if (fromEnv) {
    return fromEnv;
  }
  return new Date().toISOString().slice(0, 10).replaceAll("-", "");
}

export function weeklyVersion(dir = ".") {
  const pkg = readPkg(dir);
  return `${baseVersion(pkg.version)}-weekly.${weeklyVersionLabel()}`;
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

export function githubOwner() {
  const repository = process.env.GITHUB_REPOSITORY;
  if (!repository) {
    throw new Error("GITHUB_REPOSITORY is required for GitHub Packages");
  }
  return repository.split("/")[0];
}

export function githubToken() {
  const token = process.env.NODE_AUTH_TOKEN ?? process.env.GITHUB_TOKEN;
  if (!token) {
    throw new Error("NODE_AUTH_TOKEN or GITHUB_TOKEN is required to access GitHub Packages");
  }
  return token;
}

export function scopedGprName(name) {
  if (name.startsWith("@")) {
    return name;
  }
  return `@${githubOwner()}/${name}`;
}

export function gprDependencyAlias(name, version) {
  return `npm:${scopedGprName(name)}@${version}`;
}

export function gprInstallAlias(name, version) {
  return `${name}@npm:${scopedGprName(name)}@${version}`;
}

function npmrcContent() {
  const owner = githubOwner();
  return `//npm.pkg.github.com/:_authToken=${githubToken()}\n@${owner}:registry=${GPR_REGISTRY}\nregistry=https://registry.npmjs.org/\n`;
}

export function writeNpmrc(targetDir = ".") {
  writeFileSync(path.join(targetDir, ".npmrc"), npmrcContent());
}

export function npmEnvWithoutUserConfig() {
  const env = { ...process.env, NODE_AUTH_TOKEN: githubToken() };
  delete env.NPM_CONFIG_USERCONFIG;
  return env;
}

export async function githubApi(apiPath, { method = "GET", token } = {}) {
  return fetch(`https://api.github.com${apiPath}`, {
    method,
    headers: {
      Accept: "application/vnd.github+json",
      Authorization: `Bearer ${token}`,
      "X-GitHub-Api-Version": "2022-11-28",
    },
  });
}
