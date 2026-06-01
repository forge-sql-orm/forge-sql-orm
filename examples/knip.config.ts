// SPDX-FileCopyrightText: 2025-2026 Vasyl Zakharchenko
// SPDX-License-Identifier: MIT

import type { KnipConfig } from "knip";
import { defaultConfig } from "../knip.config";
export const exampleConfig: KnipConfig = {
  ...defaultConfig,
  rules: { ...defaultConfig.rules, files: "off" },
  project: ["src/**/*.ts"],
};
