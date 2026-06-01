// SPDX-FileCopyrightText: 2025-2026 Vasyl Zakharchenko
// SPDX-License-Identifier: MIT

import type { KnipConfig } from "knip";
import { exampleConfig } from "../knip.config";

const config: KnipConfig = {
  ...exampleConfig,
  project: ["src/**/*.ts"],
  rules: { ...exampleConfig.rules, unresolved: "off" },
};

export default config;
