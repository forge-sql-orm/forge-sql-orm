// SPDX-FileCopyrightText: 2025-2026 Vasyl Zakharchenko
// SPDX-License-Identifier: MIT

import type { KnipConfig } from "knip";
import { defaultConfig } from "../../knip.config";
const config: KnipConfig = {
  ...defaultConfig,
  project: ["src/**/*.ts"],
  ignoreDependencies: ["drizzle-kit", "forge-sql-orm"],
};

export default config;
