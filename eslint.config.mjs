import js from "@eslint/js";
import tseslint from "@typescript-eslint/eslint-plugin";
import tsparser from "@typescript-eslint/parser";
import prettierConfig from "eslint-config-prettier";
import vitest from '@vitest/eslint-plugin'
import globals from "globals";
export default [
  js.configs.recommended,
  {
    languageOptions: {
      parser: tsparser,
      sourceType: "module",
      ecmaVersion: "latest",
      globals: globals.node,
    },
    plugins: {
      "@typescript-eslint": tseslint,
      vitest: vitest,
    },
    rules: {
      ...prettierConfig.rules,
      "no-console": "error",
      "@typescript-eslint/no-unused-vars": ["error"],
      "no-unused-vars": ["off"],
      "@typescript-eslint/no-explicit-any": "error",
      "@typescript-eslint/explicit-function-return-type": "off",
      "vitest/no-disabled-tests": "warn",
      "vitest/no-focused-tests": "error",
      "no-undef": "error",
      "vitest/valid-expect": "error",
        "preserve-caught-error": "warn"
    },
  },
  {
    ignores: [
      "examples/**",
      "forge-sql-orm-cli/**",
      "node_modules/**",
      "dist/**",
      "coverage/**",
    ],
  },
];
