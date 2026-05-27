// SPDX-FileCopyrightText: 2025-2026 Vasyl Zakharchenko
// SPDX-License-Identifier: MIT

import type { KnipConfig } from "knip";
import { defaultConfig } from "../../knip.config";
const config: KnipConfig = {
  ...defaultConfig,
  ignoreDependencies: ["@forge/bridge", "@forge/react", "react", "eslint-plugin-react-hooks"],
  project: ["src/**/*.ts", "src/**/*.jsx"],
};

export default config;
