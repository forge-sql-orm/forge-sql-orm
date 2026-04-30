import js from "@eslint/js";
import tseslint from "@typescript-eslint/eslint-plugin";
import tsparser from "@typescript-eslint/parser";
import prettierConfig from "eslint-config-prettier";

export default [
  js.configs.recommended,
  {
    languageOptions: {
      parser: tsparser,
      sourceType: "module",
      ecmaVersion: "latest",
    },
    plugins: {
      "@typescript-eslint": tseslint,
    },
    rules: {
      ...prettierConfig.rules,

      "no-console": "off",
      "@typescript-eslint/no-unused-vars": ["warn"],
      "no-unused-vars": ["off"],
      "@typescript-eslint/explicit-function-return-type": "off",
      "no-undef": "off",
    },
  },
];
