# Changelog

All notable changes to this project are documented in this file.
The entries are generated from the corresponding GitHub Releases and
preserved verbatim. The project follows [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

> See also: [GitHub Releases](https://github.com/forge-sql-orm/forge-sql-orm/releases).

## [2.2.0] - IN PROGRESS

🚀 What's New

📦 Modular packages ([#2321](https://github.com/forge-sql-orm/forge-sql-orm/issues/2321))

Advanced capabilities are split out of the monolith so **ORM-only** apps get a smaller dependency footprint and fewer surprises from transitive packages during Forge bundling and lint (see also [#2128](https://github.com/forge-sql-orm/forge-sql-orm/issues/2128)). Keeping everything in one package with `optionalDependencies` was not sufficient: Forge often still resolves and analyzes those dependencies even when a feature is unused.

| Package                   | Responsibility                                                                                                                                       |
| ------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| **`forge-sql-orm`**       | Core ORM: Drizzle + `@forge/sql`, migrations, optimistic locking, query observability, **Level 1 local cache**, `Cache` SPI + default **`NopCache`** |
| **`forge-sql-orm-extra`** | **Level 2** global cache (`@forge/kvs`, `KVSCache`, SQL-parser cache invalidation), Rovo, `clearCacheSchedulerTrigger`                               |
| **`forge-sql-orm-cli`**   | Schema / migration CLI (unchanged role)                                                                                                              |

The core package remains fully usable **without** installing `forge-sql-orm-extra`.

🧩 Cache SPI (Level 2)

- New **`Cache`** interface in core (`getQueryResultsFromCache`, `setQueryResult`, `clearExpiredCache`, `clearTablesCache`).
- **`NopCache`** in core — default on `forge-sql-orm`; global cache methods do not persist to KVS.
- **`KVSCache`** in **forge-sql-orm-extra** — default on `forge-sql-orm-extra`; Forge KVS backend (cursor pagination, batched deletes, retry with backoff).
- `cacheImplementation` on `ForgeSqlOrmOptions` to plug in a custom backend or tests.

**Level 1 (local / in-memory) cache** (`executeWithLocalContext`, `selectFrom`, `execute`, …) stays in **core** and works the same with either import.

Manual global cache eviction is simplified:

```typescript
await forgeSQL.evictCache(["users", "orders"]);
await forgeSQL.evictCacheEntities([Users, Orders]);
```

📖 Documentation split between [README.md](README.md) (core) and [forge-sql-orm-extra/README.md](forge-sql-orm-extra/README.md) (L2 cache + Rovo).

---

⚠️ Migration to 2.2.x

### Why this release

- **Smaller core** for users who only need SQL + Drizzle + migrations.
- **Fewer transitive risks** (`node-sql-parser`, `@forge/kvs`, Rovo code paths) for apps that never enable those features.
- **Clear boundaries** between core, extensions, and CLI — easier maintenance and future optional modules.

### If you only use the ORM (no global KVS cache, no Rovo)

**No migration required.**

```bash
npm install forge-sql-orm @forge/sql drizzle-orm -S
```

```typescript
import ForgeSQL from "forge-sql-orm";
const forgeSQL = new ForgeSQL();
```

Local cache, versioning, and Drizzle helpers behave as before. Core defaults to `NopCache()` for Level 2.

### If you use global cache (Level 2) and/or Rovo

1. Install the extension (keep core deps):

   ```bash
   npm install forge-sql-orm-extra @forge/kvs -S
   ```

2. Change the import — **logic, options, and queries stay the same**:

   ```typescript
   // Before (monolith ≤ 2.1.x)
   import ForgeSQL from "forge-sql-orm";

   // After (2.2.x)
   import ForgeSQL from "forge-sql-orm-extra";
   ```

3. Keep existing cache configuration, for example:

   ```typescript
   const forgeSQL = new ForgeSQL({
     cacheEntityName: "cache",
     cacheTTL: 300,
   });
   ```

4. Update moved imports, for example:

   ```typescript
   import { clearCacheSchedulerTrigger } from "forge-sql-orm-extra";
   ```

5. Replace manual eviction via `modifyWithVersioningAndEvictCache().evictCache*` with:

   ```typescript
   await forgeSQL.evictCache(["users", "orders"]);
   await forgeSQL.evictCacheEntities([Users, Orders]);
   ```

`forge-sql-orm-extra` defaults to `new KVSCache()` — equivalent to the old monolith behaviour once you switch the import.

Full details: [README — Breaking Changes (2.2.x)](README.md#4-breaking-changes-22x--core-vs-extra) and [forge-sql-orm-extra README](forge-sql-orm-extra/README.md).

---

🧪 CLI Test Suite & Merged Coverage

`forge-sql-orm-cli` now has its own test safety net, and coverage from the library and the CLI is reported together.

- Added Vitest unit tests for the CLI (command wiring, model generation, migration create/update/drop, schema diffing) behind an 80% coverage gate.
- Library and CLI `lcov` reports are merged into a single report for SonarCloud and Qlty.

🧹 Quality & Static Analysis

- Banned explicit `any` in the CLI (`@typescript-eslint/no-explicit-any`) and replaced `any` in catch blocks across the codebase.
- Lowered cognitive complexity in the CLI model/migration generators and applied SonarCloud fixes (`node:` import prefixes, `Number.parseInt`, locale-aware sorting, and more).
- Stricter Knip configuration, SPDX/REUSE license headers, and a license-compliance check that fails on GPL/LGPL/AGPL/copyleft dependencies.
- Documented the console-based logging policy (NFR-11).

🛠 CI / Release Automation

- Split the monolithic pipeline into separate quality / CLI / examples jobs; example deploys are capped at `max-parallel: 5`.
- Randomized Forge deploy/install retry backoff to ride out transient Atlassian failures.
- Codacy `exclude_paths` tuning and a Codacy badge in the README.

📦 Dependency Updates

Updated npm dependencies to their latest versions to ensure improved compatibility, security, and overall performance.

## [2.1.29] - 2026-05-21

🚀 What's New

⬆️ TypeScript 6 & ESLint 10 Upgrade

The toolchain jumped a full major on both fronts. The codebase and example apps were adapted so they keep building cleanly under the stricter compiler.

- TypeScript: bumped from 5.9.3 to 6.0.3 (root + CLI).
- ESLint: now on 10.4.x with matching @typescript-eslint 8.59.4.
- Imports: restored the explicit node: prefix on async_hooks / crypto so module resolution stays predictable on TS 6.

🧹 Cyclomatic Complexity Cleanup

Several utilities were refactored to lower complexity flagged by Qlty while keeping behaviour identical. The result is shorter, flatter helpers that are easier to read and test.

🛠 CI / Release Automation

The release pipeline got a noticeable hardening pass.

- Daily autoupdate workflow: new autoupdate.yml that runs npm-check-updates
  so opened PRs actually trigger CI.
- Dependabot auto-merge: PRs get merged automatically once green.
- Pinned third-party actions to commit SHA for supply-chain safety.
- Concurrency: added concurrency settings to the Node.js workflow so duplicate runs cancel themselves on rapid pushes.
- Husky portability: pre-commit no longer uses pushd / popd — it now runs in a ( … ) subshell so /bin/sh is happy on every platform.

📦 Dependency Updates

Bumped runtime + dev dependencies to their latest compatible versions.

- Peer: @forge/sql ^3.0.23 → ^3.0.24.
- Runtime: @forge/api ^7.1.4 → ^7.2.0.
- Dev: vitest 4.1.5 → 4.1.7, knip 6.11.0 → 6.14.1, @types/node 25.6.0 → 25.9.1, inquirer 13.4.2 → 13.4.3, vite 8.0.10 → 8.0.14, plus alignments across all example apps.

## [2.1.28] - 2026-05-05

🚀 What’s New

📦 Bundle Optimization & Forge Lint Fix
Moved advanced integration dependencies to optionalDependencies to optimize bundle size and resolve strict build errors in Atlassian Forge environments.

**Optional Dependencies:** `node-sql-parser` and `@forge/events` are now marked as optional. They are no longer bundled by default unless you explicitly use the advanced features.

## [2.1.27] - 2026-04-21

🚀 **What’s New**

### 🧬 Binary & UUID Custom Types Support

Introducing a set of custom types for compact binary storage and optimized UUID handling in Atlassian Forge.

- **uuidBinary**: Store UUID primary keys in a compact `VARBINARY(16)` form. It automatically handles `UUID_TO_BIN` on writes and returns clean UUID strings on reads.
- **forgeBLOB & Friends**: New types for binary payloads: `forgeBLOB`, `forgeTinyBLOB`, `forgeMediumBLOB`, `forgeBinary`, and `forgeVarBinary`.

### 🤖 New AI Semantic Search Examples

Added two new real-world example projects demonstrating different architectural approaches for AI in Forge:

- [Frontend Embeddings (Custom UI)](https://github.com/forge-sql-orm/forge-sql-orm/tree/master/examples/forge-sql-orm-example-ai): Computes embeddings directly in the browser. Forge SQL is used to store `document` + `embedding` and perform vector similarity search.
- [Backend Embeddings (Forge Resolvers)](https://github.com/forge-sql-orm/forge-sql-orm/tree/master/examples/forge-sql-orm-example-backend-ai): Computes embeddings server-side using the `ai-lib` sidecar. The UI only sends raw text, keeping the logic entirely on the backend.

Article: [AI Magic in Atlassian Forge: Local Semantic Search with Forge SQL](https://community.developer.atlassian.com/t/ai-magic-in-atlassian-forge-local-semantic-search-with-forge-sql/100163)

### 🛠️ Comprehensive TiDB SQL Function Helpers

Added a massive collection of ready-to-use SQL helper modules. These helpers return Drizzle `sql` fragments, making it easy to use TiDB-specific functions inside your query builders:

- **String & Numeric**: `concat`, `substring`, `trim`, `round`, `trigonometry`, and more.
- **JSON & Date**: Specialized helpers for JSON mutation/validation and complex `DATE_ADD`/`DATE_SUB` calculations.
- **Advanced**: Bitwise operators, Encryption/Hashing (`AES`, `SHA`, `MD5`), and Window functions (`rowNumber`, `rank`, `lag`, `lead`).

### 🛡️ Parameterized Vector Inputs (Security Fix)

Improved the security and reliability of vector operations in `VectorTiDB` helpers.

- **Placeholder Support**: Inputs for `VEC_FROM_TEXT` are now properly **parameterized** using placeholders (`?`) instead of being inlined as raw strings.
- **Injection Prevention**: This change eliminates potential SQL injection risks when handling vector strings and ensures more predictable query execution.

### 📦 Dependency Updates

Updated npm dependencies to their latest versions to ensure improved compatibility, security, and overall performance.

## [2.1.26] - 2026-04-08

🚀 What’s New

🔢 TiDB VECTOR Type Support for Forge SQL
Forge SQL ORM now supports the [TiDB VECTOR](https://docs.pingcap.com/ai/vector-search-data-types/) data type and vector SQL helpers.

This means Forge SQL can now be used for [vector search](https://docs.pingcap.com/ai/vector-search-overview/) workloads on top of TiDB vector capabilities.

Typical use cases include:
• semantic search
• retrieval-augmented generation (RAG)
• recommendation scenarios
• storing embeddings directly in Forge SQL and querying them with vector distance functions

This release adds the foundation for AI-oriented SQL workflows while keeping relational data and vector embeddings in the same database.

📚 New Official-Style Vector Example
Added a new example project:
[forge-sql-orm-example-vector](https://github.com/forge-sql-orm/forge-sql-orm/tree/master/examples/forge-sql-orm-example-vector)

This example follows the same flow as the [official TiDB SQL quickstart for vector search](https://docs.pingcap.com/ai/quickstart-via-sql/):
• create a vector table
• insert embeddings
• fetch stored rows
• run cosine-distance vector search

The goal is to make it easier to start with vector search in Forge using a practical example that mirrors the official TiDB documentation.

🕒 Fixed datetime Handling for Midnight Values
Fixed datetime processing for values where the time part is 00:00:00.

Midnight values are now handled correctly.

📦 Dependency Updates

Updated npm dependencies to their latest versions to ensure improved compatibility, security, and overall performance.

## [2.1.25] - 2026-03-12

## 🚀 What’s New

### ⚡ Optimized Global Caching with Forge KVS

- **Native KVS TTL Support:** The global cache system now leverages the native Forge KVS TTL feature (`{ ttl: { unit: "SECONDS", value: number } }`) to mark entries as expired automatically.
- **Batch Deletion (`kvs.batchDelete`):** The deletion of outdated or evicted cache records in KVS has been significantly optimized. The ORM now uses the `kvs.batchDelete` method, which greatly improves the performance of cache invalidation and scheduled cleanup operations.
- **Proactive Expiration Management:** Since Forge KVS TTL deletion is asynchronous (and can take up to 48 hours), a large cache might impact `INSERT`/`UPDATE` performance. I've updated the architecture and documentation to highlight the optional `clearCacheSchedulerTrigger` for proactive, immediate cleanup of expired entries in batches.

### 🎓 New Atlas Camp Example Project

- Added a new real-world example project based on the recent Atlas Camp presentation: [forge-sql-orm-example-atlascamp](https://github.com/forge-sql-orm/forge-sql-orm/tree/master/examples/forge-sql-orm-example-atlascamp).
- 📺 **Watch the presentation:** Check out the full talk and demonstration on YouTube — [Watch the video](https://www.youtube.com/watch?v=EL-kbJgk12o).

### 📦 Dependency Updates

- Updated npm dependencies to their latest versions to ensure improved compatibility, security, and overall performance.

## [2.1.24] - 2026-02-04

## Changes

- Added a new **UI Kit** example project.
- Updated dependencies for compatibility and security.
- Minor internal stability improvements.

## Notes

- No functional changes.
- Recommended for all users to stay up-to-date with the latest fixes from external libraries.

## [2.1.23] - 2026-01-25

## Changes

- Updated dependency versions to improve compatibility and security.
- Minor internal stability improvements.

## Notes

- No functional changes.
- Recommended for all users to stay up-to-date with the latest fixes from external libraries.

## [2.1.22] - 2026-01-11

**Organization Move & Infrastructure Updates**

This release consolidates the repository into a dedicated GitHub Organization and updates the CI/CD tooling.

#### 🚀 What’s New

**📦 Repository Moved to Organization**
The project is now hosted under the `forge-sql-orm` organization. Old URLs will automatically redirect to the new location.

- **New URL:** `https://github.com/forge-sql-orm/forge-sql-orm`
- **Recommended:** Update your local remote to match the new origin:

```bash
git remote set-url origin https://github.com/forge-sql-orm/forge-sql-orm.git
```

**🛠 CI/CD & Tooling Updates**

- **SonarCloud Integration:** Replaced Coveralls with **SonarCloud** for static analysis and security scanning.
- **Husky & Knip:** Added validation via pre-commit hooks. Commits are now checked locally for unused dependencies (`knip`), type safety, and linting rules.
- **Test Coverage:** Vitest coverage thresholds (>80%) are now enforced in the pipeline.

**📄 Repository Standards**
Added standard documentation files to define project processes:

- **Security:** Added `SECURITY.md` with disclosure guidelines.
- **Contributing:** Added `CONTRIBUTING.md` with setup instructions.
- **Code of Conduct:** Added `CODE_OF_CONDUCT.md`.
- **Templates:** Added structured Issue templates (including `manifest.yaml` fields) and a Pull Request template.

## [2.1.21] - 2025-12-30

🚀 What’s New

🛡️ Safer Development WebTriggers.
Development WebTriggers now strictly verify the environment and will not run in Production. Note: Please remember to remove these triggers from your production manifest.

Available Developer WebTriggers:

- **fetchSchemaWebTrigger**. Generates a DDL script of the current Forge-SQL database, allowing schema export to any MySQL-compatible DB for debugging.
- **dropSchemaMigrations**. Performs a complete cleanup by dropping all tables and sequences.
- **dropTableSchemaMigrations**. Drops all tables while preserving sequences.

✨ Updated Examples • All examples have been updated to align with RoA eligibility. • Development triggers in examples are now disabled by default.

🐛 CLI Bug Fixes • Fixed various bugs in forge-sql-orm-cli to improve stability.

🤖 Improved Rovo Integration

- Added support for single quotes (') in context variables.
- Ensures correct syntax handling when wrapping variables for AI context.

📦 Dependency Updates • Dependencies updated for better stability.

## [2.1.18] - 2025-12-21

✨ What’s New / Updated

🟢 Node.js 24 Examples
• All examples have been updated to node24.x
• Aligns sample code with the latest Forge runtime

🛠 forge-sql-orm-cli: migration:create
• Migration generation no longer relies on drizzle-orm-cli
• Table metadata is now fetched directly from the database (SHOW TABLES)
• More predictable and reliable migration creation

📦 Dependency Updates
• Project dependencies have been updated
• Improves compatibility, stability, and security

## [2.1.17] - 2025-12-17

✨ What’s New

✅ Node.js 24 Support
• Full compatibility with Node.js 24
• No breaking changes for existing Node 20/22 users
• Ready for upcoming Forge runtime updates

⚡ Non-Blocking Query Degradation Analysis
• Query analysis now runs asynchronously
• Resolver responses are not blocked by performance diagnostics
• Uses Forge event queue + consumer model

🔁 Automatic Fallback
• If async queue push fails or times out, analysis falls back to synchronous execution
• Guarantees analysis is never skipped

🔗 Log Correlation with Job IDs
• Resolver and consumer logs include a shared Job ID
• Makes tracing async analysis straightforward in production logs

🎯 Why It Matters
• Faster resolvers in production
• Safer performance diagnostics
• Scales observability without impacting user experience

## [2.1.16] - 2025-12-07

🔧 Improved Migration Engine & CLI Stability

This release focuses on making schema evolution more predictable and strengthening the CLI, especially around complex Drizzle-based diff generation and safe NOT NULL transitions.

✨ What’s New

1. Refined forge-sql-orm-cli Behavior

1.1 Removed Dynamic Imports During Diff Generation
The CLI no longer relies on dynamic imports when resolving schema diffs between the reference database and Drizzle models.

1.2 Safe NOT NULL Field Introduction (3-Step Migration)
When adding a new field that is NOT NULL in the reference schema, the CLI now generates a deterministic 3-migration sequence:
• Migration 1 — create the field as nullable
• Migration 2 — populate the field with a default value (if the default is not defined in schema, it must be provided manually)
• Migration 3 — convert the field to NOT NULL

This avoids runtime failures and ensures smooth transitions in production schemas.

1.3 Converting Nullable → NOT NULL (2-Step Migration)
When updating an existing column from nullable to not null, the CLI now generates:
• Migration 1 —update all existing rows with a default value (if the default is not defined in the schema, it must be provided manually) where the field is NULL
• Migration 2 — apply the NOT NULL constraint

This prevents TiDB errors and enforces predictable schema tightening.

⸻

2. Improved Table Extraction Logic (Regex as Fallback)

The mechanism for extracting table names from SQL queries has been redesigned:
• The new parser avoids regex entirely for the primary extraction logic
• Regex is used only as a fallback for unusual or nested SQL structures

This improvement is essential for the caching layer:
by reliably detecting which tables a query touches, the ORM can precisely determine which cache entries should be invalidated — without over-invalidating or missing dependencies.

## [2.1.15] - 2025-11-29

🔍 Enhanced Observability Layer

This release introduces a fully updated SQL observability system with deterministic diagnostics, safer failure analysis, and improved tooling for resolver-level profiling.

✨ What’s New

1. Deterministic TopSlowest Mode (New Default)

The default mode no longer depends on CLUSTER_STATEMENTS_SUMMARY.
• Logs exact SQL digests executed inside a resolver
• Prints slowest queries with optional EXPLAIN ANALYZE
• Stable diagnostics for long-running workflows

```
{
  topQueries: 2,
  showSlowestPlans: true,
}
```

2. Improved SummaryTable Mode (Optional)

```
summaryTableWindowTime: 15000 // 15s
```

Now treated as an advanced diagnostic mode.
Automatically falls back to TopSlowest if resolver execution exceeds the window.

3. Updated Diagnostics API

```js
executeWithMetadata(fn, onStats, {
  mode: "TopSlowest" | "SummaryTable",
  summaryTableWindowTime: 15000,
  topQueries: 1,
  showSlowestPlans: true,
});
```

Gives full control over plan printing, thresholds, and sampling.

4. Post-Mortem Analysis for Timeout & OOM

On Timeout or OOM errors, forge-sql-orm now performs an immediate post-mortem lookup:
• Captures the actual failing SQL
• Captures the real TiDB execution plan (no re-execution)
• Fully Forge-safe (metadata only)

Useful for diagnosing severe SQL failures without triggering them again.

5. Deprecated Method Temporarily Restored

The deprecated trigger:

```
topSlowestStatementLastHourTrigger(...)
```

was restored for backward compatibility.
• Still marked `@deprecated`
• Internally wraps slowQuerySchedulerTrigger
• Will be removed in a future version
• Not equivalent to the new executeWithMetadata system
• Provided only to support existing apps during migration

Developers are encouraged to migrate to the new observability system:
• TopSlowest mode (default) for deterministic profiling
• SummaryTable mode for advanced use cases
• Automatic fallbacks and reliable post-mortem diagnostics

## [2.1.14] - 2025-11-21

🔒 **Rovo Integration - Secure Natural-Language Analytics**

Forge SQL ORM now includes Rovo — a secure pattern for enabling AI-powered natural-language analytics with comprehensive security validations.

- **Secure Dynamic SQL Execution**

  • Enables safe execution of user-generated SQL queries for AI analytics features.

  • Multiple layers of security validations prevent SQL injection and unauthorized data access.

  • AST-based SQL normalization ensures queries are properly parsed and validated before execution.

  • Example:

  const rovo = forgeSQL.rovo();
  const settings = await rovo
  .rovoSettingBuilder(usersTable, accountId)
  .useRLS()
  .addRlsColumn(usersTable.id)
  .addRlsWherePart((alias) => `${alias}.id = '${accountId}'`)
  .finish()
  .build();

  const result = await rovo.dynamicIsolatedQuery(
  "SELECT id, name FROM users WHERE status = 'active'",
  settings
  );
  - **Comprehensive Security Validations**

  • **Query Type Restriction**: Only SELECT queries are allowed — blocks INSERT, UPDATE, DELETE, and other data modification operations.

  • **Single Table Isolation**: Queries are restricted to a single table to prevent cross-table data access.

  • **JOIN Detection**: Automatically detects and blocks JOIN operations using EXPLAIN analysis.

  • **Subquery Blocking**: Prevents scalar subqueries in SELECT columns that could access other tables.

  • **Window Function Blocking**: Blocks window functions (e.g., `COUNT(*) OVER()`) for security.

  • **Execution Plan Validation**: Verifies that only the expected table is accessed in the query execution plan.

  • **Post-Execution Validation**: Ensures all result fields come from the correct table and required security fields are present.

- **Row-Level Security (RLS) Support**

  • Built-in RLS support for data isolation based on user context.

  • Conditional RLS activation based on user roles or permissions.

  • Type-safe column references using Drizzle ORM table objects.

  • Automatic query wrapping with RLS filtering when enabled.

  • Example:

  const settings = await rovo
  .rovoSettingBuilder(securityNotesTable, accountId)
  .useRLS()
  .addRlsCondition(async () => {
  const userService = getUserService();
  return !(await userService.isAdmin()); // Only apply RLS for non-admin users
  })
  .addRlsColumn(securityNotesTable.createdBy)
  .addRlsWherePart((alias) => `${alias}.createdBy = '${accountId}'`)
  .finish()
  .build();
  - **Type-Safe Configuration**

  • Uses Drizzle ORM table objects for type-safe column references.

  • Supports both raw table names and Drizzle table objects.

  • Context parameter substitution for dynamic query values.

  • Optional query logging for debugging (`logRawSqlQuery` option).

⚡ Designed to enable secure AI-powered analytics features where users can query data using natural language, with comprehensive security validations built directly into Forge SQL ORM.

📖 **Real-World Example**: See [Forge-Secure-Notes-for-Jira](https://github.com/vzakharchenko/Forge-Secure-Notes-for-Jira) for a complete implementation of Rovo AI agent with secure natural-language analytics.

## [2.1.13] - 2025-11-20

## What's Changed

- Bump @vitest/coverage-v8 from 4.0.7 to 4.0.8 by @dependabot[bot] in https://github.com/vzakharchenko/forge-sql-orm/pull/1028

**Full Changelog**: https://github.com/vzakharchenko/forge-sql-orm/compare/2.1.12...2.1.13

## [2.1.12] - 2025-10-31

🚀 **What’s New**

✨ **Enhanced Observability Layer**
Forge SQL ORM now provides end-to-end observability — from resolver-level profiling to automatic diagnostics and scheduled slow-query monitoring.

- **Resolver-Level Observability**
  • Added built-in profiling across all SQL queries executed inside a resolver.
  • Automatically aggregates `totalDbExecutionTime` and `totalResponseSize` for every invocation.
  • Emits performance warnings when exceeding baseline thresholds and can print execution plans for analysis.
  • Example:

  ```ts
  resolver.define("fetch", async (req: Request) => {
    try {
      return await forgeSQL.executeWithMetadata(
        async () => {
          const users = await forgeSQL.selectFrom(demoUsers);
          const orders = await forgeSQL
            .selectFrom(demoOrders)
            .where(eq(demoOrders.userId, demoUsers.id));
          return { users, orders };
        },
        async (totalDbExecutionTime, totalResponseSize, printQueriesWithPlan) => {
          const threshold = 500; // ms baseline
          if (totalDbExecutionTime > threshold * 1.5) {
            console.warn(
              `[Performance Warning fetch] Resolver exceeded DB time: ${totalDbExecutionTime} ms`,
            );
            await printQueriesWithPlan(); // log or capture diagnostics
          } else if (totalDbExecutionTime > threshold) {
            console.debug(`[Performance Debug fetch] High DB time: ${totalDbExecutionTime} ms`);
          }
        },
      );
    } catch (e) {
      const error = e?.cause?.debug?.sqlMessage ?? e?.cause;
      console.error(error, e);
      throw error;
    }
  });
  ```

- **Automatic Error Analysis**
  • Automatically detects and diagnoses queries that fail with
  `“Your query has been cancelled due to exceeding the allowed memory limit for a single SQL query.”`
  or
  `“The provided query took more than 5000 milliseconds to execute.”`
  • Retrieves execution plans for failed queries directly from TiDB metadata tables for instant analysis.
  • Works entirely within Forge SQL ORM — no external tools required.

- **Slow Query Scheduler Trigger**
  • Introduces an hourly scheduler trigger that automatically collects and logs slow queries.
  • Leverages `INFORMATION_SCHEMA.CLUSTER_SLOW_QUERY` to track execution time, memory usage, and query plans.
  • Example:

  ```ts
  import ForgeSQL, { slowQuerySchedulerTrigger } from "forge-sql-orm";

  const forgeSQL = new ForgeSQL();

  export const slowQueryTrigger = () =>
    slowQuerySchedulerTrigger(forgeSQL, { hours: 1, timeout: 3000 });
  ```

  Configure in `manifest.yml`:

  ```yaml
  scheduledTrigger:
    - key: slow-query-trigger
      function: slowQueryTrigger
      interval: hour
  function:
    - key: slowQueryTrigger
      handler: index.slowQueryTrigger
  ```

⚡ Designed to provide full resolver-level profiling, automatic failure diagnostics, and periodic slow-query monitoring — all built directly into Forge SQL ORM.

## [2.1.9] - 2025-10-02

🚀 **What’s New**

✨ **New Execution APIs**  
I added three new execution helpers to make working with Forge SQL more powerful and transparent:

- **`executeWithMetadata(query, onMetadata)`**  
  • Runs any SQL/ORM query and provides full execution metadata.  
  • Exposes `totalDbExecutionTime`, `totalResponseSize`, and raw `ForgeSQLMetadata`.  
  • Perfect for monitoring query performance, logging, or building custom dashboards.  
  • Example:

  ```ts
  const result = await forgeSQL.executeWithMetadata(
    () => forgeSQL.select().from(users).where(eq(users.id, 1)),
    (dbTime, size, meta) => {
      console.log(`DB time: ${dbTime}ms, size: ${size} bytes`, meta);
    },
  );
  ```

- **`executeDDL(sql)`**  
  • Execute DDL statements like `CREATE`, `ALTER`, `DROP`, `TRUNCATE`.  
  • Ensures proper context handling for schema modifications in Forge SQL.  
  • Example:

  ```ts
  await forgeSQL.executeDDL(`
    CREATE TABLE users (
      id INT PRIMARY KEY AUTO_INCREMENT,
      name VARCHAR(255) NOT NULL,
      email VARCHAR(255) UNIQUE
    )
  `);
  ```

- **`executeDDLActions(actions)`**  
  • Run a series of queries wrapped in a DDL operation context.  
  • Useful for treating normal SQL as DDL for monitoring / tracking purposes.  
  • Example:
  ```ts
  const slowQueries = await forgeSQL.executeDDLActions(async () => {
    return await forgeSQL.execute(`
      SELECT * FROM INFORMATION_SCHEMA.STATEMENTS_SUMMARY
      WHERE AVG_LATENCY > 1000000
    `);
  });
  ```

⚡ Designed to make query execution more transparent, schema management safer, and monitoring easier inside Forge apps.

## [2.1.5] - 2025-09-21

🚀 What’s New

✨ Memory & Latency Monitoring Trigger
I added a built-in scheduled trigger to help surface problematic queries automatically:
• topSlowestStatementLastHourTrigger(warnThresholdMs, warnMemMb?)
• Checks the slowest query or the most memory-intensive query from the last hour.
• Outputs compact JSON and writes structured warnings to the Forge Developer Console logs for easy inspection.
• Provides digest, preview of SQL text, latency (ms), memory (MB), and an execution plan snapshot.
• Skips noise (e.g., empty digest and USE/SET/SHOW statements).
• Designed for tenant-isolated Forge apps, helping stay within the Forge SQL ~16 MiB per-query limit.

📦 [Cache Example](https://github.com/vzakharchenko/forge-sql-orm/tree/master/examples/forge-sql-orm-example-cache) Update
• Cache Example now shows advanced caching combined with topSlowestStatementLastHourTrigger.
• Demonstrates how caching + monitoring can both optimize query performance and detect high-latency or high-memory queries early.

## [2.1.3] - 2025-09-18

**Full Changelog**: https://github.com/vzakharchenko/forge-sql-orm/compare/2.1.2...2.1.3

Changes 1. Improved logging. 2. Added validation for timestamp values. Atlassian Forge does not handle 0 timestamps correctly, which caused data in responses to shift if a table contained a zero date.

## [2.1.2] - 2025-09-15

🚀 What’s New

✨ Two-Level Query Caching

I added a two-level caching system to improve query performance and reduce load on Forge SQL:
• L1 Local Cache (in-memory)
• Works within a single resolver invocation.
• Prevents duplicate KVS lookups and speeds up repeated queries inside the same function call.
• Automatically bypassed in Cache Context if tables are modified.
• L2 Global Cache (powered by @forge/kvs)
• Stores query results across invocations with configurable TTL.
• Supports automatic eviction on data modifications (\*AndEvictCache methods) and batch eviction with executeWithCacheContext.
• Helps keep apps within Forge SQL quotas and improves p95 latency for dashboards and reports.

🛠 Improvements
• Unified eviction query for Cache Context (single OR-filter across affected tables).
• Date handling:
• Switched from UTC-only formatting to SQL-native date handling.
• Dates are now validated before being transformed into SQL format, preventing invalid values.
• Updated README with detailed cache diagrams and usage guidelines.

## [2.1.0] - 2025-09-14

🚀 What’s New

✨ Two-Level Query Caching

I added a two-level caching system to improve query performance and reduce load on Forge SQL:
• L1 Local Cache (in-memory)
• Works within a single resolver invocation.
• Prevents duplicate KVS lookups and speeds up repeated queries inside the same function call.
• Automatically bypassed in Cache Context if tables are modified.
• L2 Global Cache (powered by @forge/kvs)
• Stores query results across invocations with configurable TTL.
• Supports automatic eviction on data modifications (\*AndEvictCache methods) and batch eviction with executeWithCacheContext.
• Helps keep apps within Forge SQL quotas and improves p95 latency for dashboards and reports.

🛠 Improvements
• Unified eviction query for Cache Context (single OR-filter across affected tables).
• Date handling:
• Switched from UTC-only formatting to SQL-native date handling.
• Dates are now validated before being transformed into SQL format, preventing invalid values.
• Updated README with detailed cache diagrams and usage guidelines.

## [2.0.30] - 2025-09-01

✨ Compatibility Fixes for @forge/cli ≥ 12.5.0
• Replaced moment dependency with luxon
• Fixed errors:

```
Unknown module type for “./src/migration/ lazy ^\.\/migrationV.*$ namespace object
```

and

```
Unknown module type for "./node_modules/moment/locale/ sync ^\\.\\/.*$".
```

📦 Dependency Updates
• Updated internal dependencies to improve compatibility and security.

## [2.0.28] - 2025-08-23

Changes
Updated dependency versions to improve compatibility and security.
Minor internal stability improvements.
Notes
No functional changes.
Recommended for all users to stay up-to-date with the latest fixes from external libraries.

## [2.0.27] - 2025-08-12

## Changes

- Updated dependency versions to improve compatibility and security.
- Minor internal stability improvements.
- fixed examples
- added sort to apply schema

## Notes

- No functional changes.
- Recommended for all users to stay up-to-date with the latest fixes from external libraries.

---

## [2.0.26] - 2025-07-29

## Changes

- Updated dependency versions to improve compatibility and security.
- Minor internal stability improvements.

## Notes

- No functional changes.
- Recommended for all users to stay up-to-date with the latest fixes from external libraries.

---

## [2.0.25] - 2025-06-26

## Changes

- Updated dependency versions to improve compatibility and security.
- Minor internal stability improvements.

## Notes

- No functional changes.
- Recommended for all users to stay up-to-date with the latest fixes from external libraries.

---

## [2.0.23] - 2025-06-16

## Changes

- Updated dependency versions to improve compatibility and security.
- Minor internal stability improvements.

## Notes

- No functional changes.
- Recommended for all users to stay up-to-date with the latest fixes from external libraries.

---

## [2.0.22] - 2025-05-30

# forge-sql-orm v2.0.22

## Changes

- Updated dependency versions to improve compatibility and security.
- Minor internal stability improvements.

## Notes

- No functional changes.
- Recommended for all users to stay up-to-date with the latest fixes from external libraries.

---

## [2.0.21] - 2025-05-17

# forge-sql-orm v2.0.21

## 🚀 What's New

### ✨ Features

- **`nextVal` helper for SEQUENCE-based inserts**
  Enables safe and convenient use of SQL `SEQUENCE` values when inserting rows.

  ```ts
  import { nextVal } from "forge-sql-orm";

  const user = {
    id: nextVal("user_id_seq"),
    name: "user test",
    organization_id: 1,
  };

  const id = await forgeSQL.modify().insert(appUser, [user]);
  ```

- **`formatLimitOffset` utility**
  Helps safely format numeric `LIMIT` and `OFFSET` values in raw SQL queries.

  ```ts
  import { formatLimitOffset } from "forge-sql-orm";

  const result = await forgeSQL
    .select()
    .from(orderItem)
    .orderBy(asc(orderItem.createdAt))
    .limit(formatLimitOffset(10))
    .offset(formatLimitOffset(350000));

  // Generates:
  // SELECT * FROM order_item
  // ORDER BY created_at ASC
  // LIMIT 10
  // OFFSET 350000
  ```

### 🧪 Examples

- **`forge-sql-orm-example-checklist`**
  Demonstrates the use of optimistic locking in Forge SQL ORM. This example implements a checklist feature that prevents data loss during concurrent updates in Jira issues.

- **`forge-sql-orm-example-org-tracker`**
  A practical organization tracking system built with Forge SQL ORM. It showcases search, filtering, and real-time user-organization mapping.

### 📦 Dependency Updates

- Updated internal dependencies to improve compatibility and security.

## [2.0.20] - 2025-04-29

# forge-sql-orm v2.0.20

## Changes

- Updated dependency versions to improve compatibility and security.
- Minor internal stability improvements.

## Notes

- No functional changes.
- Recommended for all users to stay up-to-date with the latest fixes from external libraries.

---

## [2.0.19] - 2025-04-11

### ✨ New: Query Analysis API

A powerful new API is now available under `forgeSqlOrm.analyze()` — enabling in-depth query diagnostics and performance insights directly from your Forge app.

**Highlights:**

- `explain()` / `explainAnalyze()` — for Drizzle queries
- `explainRaw()` / `explainAnalyzeRaw()` — for raw SQL queries
- `analyzeSlowQueries()` — access to slow query logs with query plans
- `analyzeQueriesHistory()` — query history per table (Drizzle objects) with query plans
- `analyzeQueriesHistoryRaw()` — query history per table (string names) with query plans

Useful for performance tuning in TiDB, MySQL, and other compatible systems.

---

### 🛠 Deprecations

- `forgeSqlOrm.crud()` has been **deprecated** and will be removed in a future release.  
  Please migrate to `forgeSqlOrm.modify()` — the API remains the same, just with an updated name that better reflects its intent.

#### Migration Example:

```ts
// Before:
const query = forgeSqlOrm.crud().select().from(...)

// After:
const query = forgeSqlOrm.modify().select().from(...)
```

---

### 🧪 Code Quality & Fixes

- Integrated static code analyzers for improved consistency and safety
- Expanded test coverage across core components
- Minor bug fixes and internal stability improvements

## [2.0.18] - 2025-04-08

✨ New Features
SQL Hints Support: You can now add SQL hints to SELECT, INSERT, UPDATE, and DELETE queries for fine-tuned query optimization and execution behavior.

🐞 Bug Fixes
Fixed issues related to selectAlias and selectAliasDistinct that could cause incorrect alias resolution or unexpected results in some edge cases.

## [2.0.16] - 2025-04-06

### ✨ What's New

#### 1. Improved Unique Aliases in `select`

Enhanced how column aliases are generated in `select` when duplicate field names appear across different groups. Now, each field receives a unique alias to avoid collisions in the final query result.

**Example:**

```ts
forgeSqlOrm
  .select({
    group1: { name: user.name },
    group2: { name: user.name },
  })
  .from(users);
```

Previously, this could result in naming conflicts. With this update, each `name` field is uniquely aliased under the hood.

#### 2. Smarter Group Null Handling in Response

A new post-processing step ensures that when all values in a selected group are `null` (e.g., due to a `leftJoin` with no match), the entire group is returned as `null` instead of a group of `null` values.

**Example:**

```ts
forgeSqlOrm
  .select({
    group1: { name: user.name },
    group2: { name: userStatus.name },
  })
  .from(users)
  .leftJoin(userStatus, eq(userStatus.id, user.id));
```

**Before (undesired):**

```ts
{
  group2: {
    name: null;
  }
}
```

**Now (correct):**

```ts
{
  group2: null;
}
```

This leads to cleaner and more intuitive data structures when dealing with optional or missing related records.

## [2.0.13] - 2025-04-05

### 📦 CLI moved to a separate package

The CLI has been extracted from the main `forge-sql-orm` package into its own dedicated package: [`[forge-sql-orm-cli](https://www.npmjs.com/package/forge-sql-orm-cli)`](https://www.npmjs.com/package/forge-sql-orm-cli).

#### ❗ What’s changed?

Previously, you could run the CLI directly via:

```bash
npx forge-sql-orm --help
```

Now, you need to install and use the new CLI package:

```bash
npm install forge-sql-orm-cli --save-dev
npx forge-sql-orm-cli --help
```

#### 💡 Why this change?

In the previous setup, the CLI was bundled with the main package, meaning all CLI-related dependencies were included — even if you were only using the core library. Since `devDependencies` are not available during CLI execution, many of them had to be listed under regular `dependencies`, increasing the size of the package unnecessarily.

By turning the CLI into a standalone app, all CLI-specific dependencies now live in `forge-sql-orm-cli`, keeping the main `forge-sql-orm` package lightweight and focused solely on the ORM functionality.

#### 🔧 How to upgrade

If you're using the CLI, update your setup as follows:

1. **Install the new CLI package**:

   ```bash
   npm install forge-sql-orm-cli --save-dev
   ```

2. **Update your `package.json` scripts** to use the new CLI command:

   ```json
   "scripts": {
     "models:create": "forge-sql-orm-cli generate:model --output src/entities",
     "migration:create": "forge-sql-orm-cli migrations:create",
     "migration:update": "forge-sql-orm-cli migrations:update",
     "migration:drop": "forge-sql-orm-cli migrations:drop"
   }
   ```

3. **Update any references in your documentation or tooling** from:

   ```bash
   npx forge-sql-orm ...
   ```

   to:

   ```bash
   npx forge-sql-orm-cli ...
   ```

No other changes are needed — all CLI functionality remains the same, just now under a separate, focused package.

## [2.0.11] - 2025-04-03

## What's Changed

- Bump the npm_and_yarn group across 4 directories with 2 updates by @dependabot in https://github.com/vzakharchenko/forge-sql-orm/pull/13

**Full Changelog**: https://github.com/vzakharchenko/forge-sql-orm/compare/2.0.10...2.0.11

## [2.0.10] - 2025-03-29

## [2.0.8] - 2025-03-28

## [2.0.7] - 2025-03-27

## [2.0.5] - 2025-03-27
