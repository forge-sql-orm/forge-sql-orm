import type { KnipConfig } from "knip";
import { defaultConfig } from "../../knip.config";
const config: KnipConfig = {
  ...defaultConfig,
  ignoreDependencies: ["@forge/bridge", "@forge/react", "react"],
  project: ["src/**/*.ts", "src/**/*.jsx"],
};

export default config;
