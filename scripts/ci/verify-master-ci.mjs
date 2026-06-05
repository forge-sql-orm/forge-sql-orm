// SPDX-FileCopyrightText: 2025-2026 Vasyl Zakharchenko
// SPDX-License-Identifier: MIT

import { githubApi, WEEKLY_WORKFLOW_FILE } from "./gpr-shared.mjs";

function requireRepository() {
  const repository = process.env.GITHUB_REPOSITORY;
  if (!repository) {
    throw new Error("GITHUB_REPOSITORY is required to verify CI status");
  }
  return repository;
}

function requireHeadSha(args) {
  const headSha = args[0] ?? process.env.GITHUB_SHA;
  if (!headSha) {
    throw new Error("usage: verify-master-ci <headSha>");
  }
  return headSha;
}

function isGreenMasterRun(run) {
  return run.conclusion === "success" && run.event === "push";
}

export async function verifyMasterCiGreen(headSha) {
  const repository = requireRepository();
  const response = await githubApi(
    `/repos/${repository}/actions/workflows/${WEEKLY_WORKFLOW_FILE}/runs?head_sha=${headSha}&status=completed&per_page=20`,
  );

  if (!response.ok) {
    const body = await response.text();
    throw new Error(`Failed to query workflow runs (${response.status}): ${body}`);
  }

  const payload = await response.json();
  const greenRun = payload.workflow_runs?.find(isGreenMasterRun);
  if (!greenRun) {
    throw new Error(
      `master @ ${headSha} is not green: no successful push run of ${WEEKLY_WORKFLOW_FILE} found`,
    );
  }

  console.error(
    `Verified green master CI: workflow run ${greenRun.id} (${greenRun.html_url}) for ${headSha}`,
  );
  return greenRun;
}

