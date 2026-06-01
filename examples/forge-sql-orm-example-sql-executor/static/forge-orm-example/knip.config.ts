// SPDX-FileCopyrightText: 2025-2026 Vasyl Zakharchenko
// SPDX-License-Identifier: MIT

import type { KnipConfig } from "knip";
import { exampleConfig as defaultConfig } from "../../../knip.config";
const config: KnipConfig = {
  ...defaultConfig,
  project: ["src/*.{ts,tsx}"],
  ignoreDependencies: ["prettier-plugin-pkg"],
};

export default config;
