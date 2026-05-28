// SPDX-FileCopyrightText: 2025-2026 Vasyl Zakharchenko
// SPDX-License-Identifier: MIT

import type { KnipConfig } from "knip";
import { defaultConfig } from "../../knip.config";
const config: KnipConfig = {
  ...defaultConfig,
  rules: { ...defaultConfig.rules, unresolved: "off" },
  project: ["src/**/*.ts"],
};

export default config;
