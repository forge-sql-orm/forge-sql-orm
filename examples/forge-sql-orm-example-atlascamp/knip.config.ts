import type { KnipConfig } from "knip";
import { defaultConfig } from "../../knip.config";
const config: KnipConfig = {
  ...defaultConfig,
  project: ["src/**/*.ts"],
  ignoreDependencies: ["drizzle-kit", "@forge/kvs", "forge-sql-orm"],
};

export default config;
