// SPDX-FileCopyrightText: 2025-2026 Vasyl Zakharchenko
// SPDX-License-Identifier: MIT

import type { KnipConfig } from "knip";
import { exampleConfig } from "../knip.config";

const config: KnipConfig = {
  ...exampleConfig,
  project: ["src/**/*.ts"],
};

export default config;
