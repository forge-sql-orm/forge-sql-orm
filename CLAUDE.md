# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

Root library (package `forge-sql-orm`):

- `npm run build` — clean + `tsc` emit to `dist/`
- `npm run test` — Vitest single run with root `vitest.config.mjs`
- `npm run test:watch` — watch mode
- `npm run test:coverage` — enforces thresholds (statements/functions/lines ≥ 80, branches ≥ 75). CI fails below these.
- Run a single test file: `npx vitest run path/to/file.test.ts`
- Run a single test by name: `npx vitest run -t "test name substring"`
- `npm run lint` / `npm run lint:fix`
- `npm run format` (writes) / `npm run format:check` (CI uses this)
- `npm run knip` — dead-code/unused-dep check; pre-commit and CI both enforce it

Pre-commit (Husky, `.husky/pre-commit`) runs the full suite in order: `lint-staged` → `build` → `knip` → `lint` → `test`, then repeats `lint-staged` + `knip` + `build` inside `forge-sql-orm-cli/`. Simply running `npm test` is not enough to match CI.

CLI package (`forge-sql-orm-cli/`) is a separate npm package with its own `package.json`. `cd forge-sql-orm-cli` first, then: `npm run build` (vite + `tsc --emitDeclarationOnly`), `npm run lint`, `npm run knip`.

Examples (`examples/forge-sql-orm-example-*`) are each full Forge apps with their own `package.json`. Typical flow inside an example:

- `npm run models:create` — regenerates `src/entities/` from live DB via `forge-sql-orm-cli generate:model`
- `npm run migration:create` / `migration:update` / `migration:drop`
- `npm run build:ci` — compiles without emit for CI sanity
- `forge deploy` / `forge tunnel` for actual Forge lifecycle

Repo-wide dependency bumps go through `./autoupdate.sh` (uses `ncu` across root, CLI, and every example). Do not bump versions by hand inside a single example — they are kept in lockstep.

## Architecture

**What this is.** A TypeScript ORM layer for Atlassian Forge's `@forge/sql` (MySQL/TiDB), built on top of Drizzle ORM. It is not a fork of Drizzle — it supplies a custom Drizzle driver, wraps Drizzle's query builder with additional cache-aware and metrics-aware methods, and adds Forge-specific features (KVS-backed global cache, migration web triggers, Rovo analytics).

**Composition, not inheritance.** `ForgeSQLORM` (`src/core/ForgeSQLORM.ts`) is the public entry point and composes four operation classes:

- `ForgeSQLCrudOperations` — `insert`, `update`, `delete`, and cache-evicting variants (`insertAndEvictCache`, `updateAndEvictCache`, `modifyWithVersioningAndEvictCache`).
- `ForgeSQLSelectOperations` — `select`, `selectFrom`, `selectDistinctFrom`, plus cacheable variants (`selectCacheable*`).
- `ForgeSQLCacheOperations` — local (per-invocation) and global (KVS) cache logic, context helpers (`executeWithCacheContext`), manual eviction.
- `ForgeSQLAnalyseOperations` — `executeWithMetadata`, query-plan capture, slow-query detection, degradation queue producer.

`Rovo` (`src/core/Rovo.ts`) is a separate facade for the natural-language analytics flow with its own security validations and RLS context.

When adding new ORM surface, extend one of the four operation classes and expose it through `ForgeSQLORM`. Don't add cross-cutting methods directly to `ForgeSQLORM`.

**Driver layer.** `src/utils/forgeDriver.ts` and `forgeDriverProxy.ts` implement the Drizzle custom driver contract against `@forge/sql`. This is what makes `drizzle()` usable without the standard mysql2 connection pool. `src/lib/drizzle/extensions/` patches Drizzle internals where the upstream API does not expose what we need — treat patches there as load-bearing.

**Two cache tiers.**
- Level 1 (local): in-memory, scoped to a single resolver invocation. Lives in `executeWithCacheContext` and invalidates when the context exits.
- Level 2 (global): persisted in `@forge/kvs` with SQL-hash keys and TTL. Requires a `storage.entities` block in the app's `manifest.yml` (see `examples/forge-sql-orm-example-cache/manifest.yml` for the exact shape) and `storage:app` scope. The entity name passed to `new ForgeSQL({ cacheEntityName: "cache" })` MUST match the manifest entity name.

**Web triggers.** `src/webtriggers/` contains reusable handlers: `applyMigrationsWebTrigger`, `dropMigrationWebTrigger`, `dropTablesMigrationWebTrigger`, `fetchSchemaWebTrigger`, `slowQuerySchedulerTrigger`, `topSlowestStatementLastHourTrigger`, `clearCacheSchedulerTrigger`. Examples import these directly and wire them as `function` entries in `manifest.yml`.

**TiDB function helpers.** `src/core/functions/` mirrors TiDB's function categories (Vector, Date, Numeric, String, JSON, Window, Aggregate, Cast, Bit, Encrypt, Info, Misc, Sequence, TiDBSpecific, Utility). These return Drizzle `SQL<T>` fragments and are the canonical way to build TiDB-specific expressions like `vecCosineDistance`.

**Custom types.** `src/core/customTypes.ts` exports Drizzle column wrappers (`vectorTiDBType`, `forgeBinary`, `forgeVarBinary`, `forgeBLOB`, `forgeTinyBLOB`, `forgeMediumBLOB`, `uuidBinary`, `forgeTimestampString`). Schemas in example projects import these directly from `forge-sql-orm`.

**Public export surface.** `src/index.ts` re-exports `core`, `utils`, `lib`, `webtriggers`, `async`. When judging whether something is public, check that it appears somewhere in that tree — internal modules are not reachable from consumer code.

## Examples as a test matrix

The `examples/` directory is not documentation decoration. CI builds every example on every PR, and several are deployed to live Forge environments (production on `push`, development on `pull_request`) — see `.github/workflows/node.js.yml`. Breaking any example's `build:ci` or `knip` step blocks merging.

Key examples and what they exercise:

- `forge-sql-orm-example-simple` — minimal CRUD, single table, baseline template.
- `forge-sql-orm-example-cache` — KVS cache entity, `executeWithMetadata`, degradation consumer, slow-query trigger.
- `forge-sql-orm-example-vector` — TiDB `VECTOR` column + cosine distance search.
- `forge-sql-orm-example-optimistic-locking` — version fields (`additionalMetadata` in `entities/index.ts`).
- `forge-sql-orm-example-query-analyses` — analyse pipeline end-to-end.
- `forge-sql-orm-example-dynamic` / `forge-sql-orm-example-drizzle-driver-simple` — schema-reflective UIs and direct Drizzle driver usage.
- `forge-sql-orm-example-ai` / `forge-sql-orm-example-backend-ai` — embeddings / semantic search (backend-ai additionally builds a native `ai-lib` sidecar).

Each example's `src/entities/index.ts` carries a `DO NOT EDIT THIS FILE MANUALLY` banner — it is regenerated by `forge-sql-orm-cli generate:model`. Never hand-edit it; edit the schema instead and rerun `npm run models:create`.

## Migration pattern

Examples follow a fixed layout that must not drift:

- `src/migration/migrationCount.ts` — `export const MIGRATION_VERSION = N`.
- `src/migration/migrationV{N}.ts` — default-exports a function `(runner: MigrationRunner) => runner.enqueue("vN_MIGRATIONk", "SQL").enqueue(...)`.
- `src/migration/index.ts` — imports all `vN` files in order and chains them on the runner.
- Migration SQL strings must match what Drizzle would emit for the current `entities/schema.ts`. The pairing is manual: when you add a column, add a new `vN+1` file (not edit an old one) and bump `MIGRATION_VERSION`.

## Coverage and code quality gates

- Vitest config includes both `src/**/*.test.ts` and `__tests__/**/*.test.ts`. The root `__tests__/` holds integration-style coverage for core classes.
- Do not add shallow tests just to lift coverage — Knip will also flag any added fixtures that never get imported.
- SonarCloud and Qlty run on `master` pushes and non-dependabot PRs; local CI does not enforce these but they are blocking gates on GitHub.

## Conventions worth knowing before editing

- `ForgeSQL` is instantiated with `new ForgeSQL({ logRawSqlQuery: true })` in examples. The `logRawSqlQuery` flag is the intended way to get SQL logs — don't add ad-hoc `console.log` wrappers.
- Drizzle operators (`eq`, `asc`, `desc`, `sql`, etc.) always come from `drizzle-orm`, not from this library. TiDB-specific helpers come from `forge-sql-orm`.
- Peer deps are pinned narrow (`@forge/sql ^3.0.22`, `drizzle-orm ^0.45.2`). `@forge/kvs` is optional — code that uses it must handle the case where it's absent (relevant for the global cache path).
- Node runtime is 24.x everywhere — `package.json`, example `manifest.yml` (`runtime.name: nodejs24.x`), and CI matrix.
