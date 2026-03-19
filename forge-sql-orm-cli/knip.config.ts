import type { KnipConfig } from "knip";
import { defaultConfig } from "../knip.config";
const config: KnipConfig = {
  ...defaultConfig,
  project: ["src/**/*.ts"],
  ignoreDependencies: ["drizzle-kit", "reflect-metadata"],
};

export default config;
