import type { KnipConfig } from "knip";
import { defaultConfig } from "../knip.config";

const config: KnipConfig = {
  ...defaultConfig,
  project: ["src/**/*.ts"],
  // Used only via the lint/format scripts; the shared config disables binary detection.
  ignoreDependencies: [],
};

export default config;
