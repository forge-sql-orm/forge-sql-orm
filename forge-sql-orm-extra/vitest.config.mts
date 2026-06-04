import { defineConfig } from "vitest/config";
import { fileURLToPath } from "node:url";

// forge-sql-orm (core) is consumed as a built dependency, and it `require`s @forge/sql from
// the root node_modules — a different physical copy than this package's. That duplication
// makes `vi.mock("@forge/sql")` miss core's usage. Alias every @forge/sql* specifier to a
// single copy so mocks apply uniformly across the test and core's compiled code.
const forgeSqlDir = fileURLToPath(new URL("./node_modules/@forge/sql", import.meta.url));

export default defineConfig({
  resolve: {
    alias: [{ find: /^@forge\/sql/, replacement: forgeSqlDir }],
  },
  test: {
    globals: true,
    mockReset: true,
    coverage: {
      provider: "v8",
      reporter: ["text", "lcov"],
      include: ["src"],
      reportsDirectory: "./coverage",
      thresholds: {
        statements: 80,
        branches: 80,
        functions: 80,
        lines: 80,
      },
    },
    include: ["__tests__/**/*.test.ts"],
  },
});