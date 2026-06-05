// SPDX-FileCopyrightText: 2025-2026 Vasyl Zakharchenko
// SPDX-License-Identifier: MIT

import {
  CI_PACKAGE_DIRS,
  ciVersion,
  githubApi,
  githubOwner,
  githubToken,
  readPkg,
  scopedGprName,
} from "./gpr-shared.mjs";

const MAX_VERSION_PAGES = 5;

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

function packageVersionRoots(owner, apiPackageName) {
  const encodedName = encodeURIComponent(apiPackageName);
  return [
    `/orgs/${owner}/packages/npm/${encodedName}`,
    `/users/${owner}/packages/npm/${encodedName}`,
    `/user/packages/npm/${encodedName}`,
  ];
}

async function readVersionsPage(root, page, token, apiPackageName) {
  const response = await githubApi(`${root}/versions?per_page=100&page=${page}&state=active`, { token });
  if (response.status === 404) {
    return { stop: true, versions: [] };
  }
  if (!response.ok) {
    const body = await response.text();
    console.warn(`Failed to list ${apiPackageName} versions (${root}): ${response.status} ${body}`);
    return { stop: true, versions: [] };
  }
  const pageVersions = await response.json();
  return { stop: !pageVersions.length, versions: pageVersions };
}

async function collectVersionsForRoot(root, token, apiPackageName) {
  const versions = [];
  for (let page = 1; page <= MAX_VERSION_PAGES; page += 1) {
    const pageResult = await readVersionsPage(root, page, token, apiPackageName);
    versions.push(...pageResult.versions);
    if (pageResult.stop) {
      break;
    }
  }
  return versions;
}

async function listPackageVersions(owner, apiPackageName, token) {
  for (const root of packageVersionRoots(owner, apiPackageName)) {
    const versions = await collectVersionsForRoot(root, token, apiPackageName);
    if (versions.length) {
      return { root, versions };
    }
  }
  return null;
}

async function findPackageApiName(owner, unscopedName, token) {
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

async function deleteLocatedVersion(located, version, scopedName, token) {
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

async function deleteGprVersion(unscopedName, version) {
  const owner = githubOwner();
  const token = githubToken();
  const scopedName = scopedGprName(unscopedName);
  const apiPackageName = await findPackageApiName(owner, unscopedName, token);
  if (!apiPackageName) {
    console.error(`Package ${scopedName} not found in GitHub Packages API, skipping delete for ${version}`);
    return;
  }

  const located = await listPackageVersions(owner, apiPackageName, token);
  if (!located) {
    console.error(`No versions listed for ${apiPackageName}, skipping delete for ${version}`);
    return;
  }

  await deleteLocatedVersion(located, version, scopedName, token);
}

export async function cleanupCiVersions() {
  for (const dir of CI_PACKAGE_DIRS) {
    const pkg = readPkg(dir);
    await deleteGprVersion(pkg.name, ciVersion(dir));
  }
}
