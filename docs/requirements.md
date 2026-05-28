# Product Requirements — Forge SQL ORM

This document defines **what** Forge SQL ORM must deliver and **which platform limits** it must respect. It complements:

| Artifact                                                               | Role                                                                        |
| ---------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| [README.md](../README.md)                                              | User-facing feature documentation and API usage (canonical feature catalog) |
| [CHANGELOG.md](../CHANGELOG.md)                                        | Version history and breaking-change notes                                   |
| [CONTRIBUTING.md](../CONTRIBUTING.md)                                  | Contributor process and quality gates                                       |
| [GitHub Issues](https://github.com/forge-sql-orm/forge-sql-orm/issues) | Bug reports, feature requests, and traceability                             |
| [forge-sql-orm-cli/README.md](../forge-sql-orm-cli/README.md)          | CLI-specific behavior                                                       |

Official Atlassian references:

- [Forge SQL](https://developer.atlassian.com/platform/forge/storage-reference/sql/) — SQL storage, limits, schema management
- [KVS and Custom Entity Store limits](https://developer.atlassian.com/platform/forge/storage-reference/kvs-limits/) — limits relevant to global (Level 2) caching

---

## 1. Documentation philosophy

Forge SQL ORM follows a **documentation-first** development model:

1. **Every shipped feature is documented** in [README.md](../README.md) (or the CLI README) before or together with the release that exposes it.
2. **Removed or deprecated features** are removed or marked in the same documentation in the release that removes them.
3. **Breaking changes** are called out in [CHANGELOG.md](../CHANGELOG.md) and, when applicable, in the README migration sections.
4. **Nothing intentionally undocumented** — if it is part of the public API or behavior consumers rely on, it must appear in docs or linked examples.
5. **Examples** under `examples/` demonstrate end-to-end usage for major capabilities (migrations, caching, vectors, Rovo, and others listed in the README).

This requirements document does not duplicate the full API; it states obligations and constraints. The README remains the detailed specification of behavior.

---

## 2. Purpose and scope

### 2.1 Purpose

Provide a **type-safe ORM layer** for [Atlassian Forge](https://developer.atlassian.com/platform/forge/) apps that use [@forge/sql](https://developer.atlassian.com/platform/forge/storage-reference/sql-tutorial/), built on [Drizzle ORM](https://orm.drizzle.team), including migrations, caching, observability, and Forge-specific SQL types.

### 2.2 In scope

- npm package `forge-sql-orm` (library)
- npm package `forge-sql-orm-cli` (schema/migration tooling)
- Custom Drizzle driver for `@forge/sql`
- Schema migration queueing and execution patterns aligned with Forge SQL
- Optional two-level caching (in-memory + `@forge/kvs`)
- Query analysis, slow-query monitoring, and timeout/OOM diagnostics
- Forge/TiDB-oriented custom column types and SQL function helpers
- Documented example applications under `examples/`

### 2.3 Out of scope

- Hosting or provisioning Forge SQL (Atlassian platform responsibility)
- Replacing Drizzle ORM; consumers may still use Drizzle directly via the custom driver
- General-purpose ORM for non-Forge MySQL/TiDB deployments
- Atlassian Government Cloud (AGC) — Forge SQL is [not supported on AGC](https://developer.atlassian.com/platform/forge/storage-reference/sql/) at the time of writing; this library targets standard Forge environments where `@forge/sql` is available
- Guaranteed TiDB-specific features beyond what Forge SQL documents as supported; prefer **ANSI SQL** where possible

---

## 3. Functional requirements

Each requirement maps to documentation in [README.md](../README.md) unless noted.

### 3.1 Core data access

| ID   | Requirement                                                                                                                                                                                                     |
| ---- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| FR-1 | Integrate with `@forge/sql` through a custom Drizzle driver so apps can run type-safe queries in Forge resolvers and triggers.                                                                                  |
| FR-2 | Support SELECT/INSERT/UPDATE/DELETE via Drizzle query builder and documented extension methods (`selectFrom`, `selectDistinctFrom`, cacheable variants, CTEs via `with()`, raw `execute` / `executeCacheable`). |
| FR-3 | Prevent ambiguous column names in multi-table selects (field name collision handling).                                                                                                                          |
| FR-4 | Support DDL via `executeDDL` / `executeDDLActions` consistent with Forge SQL migration patterns.                                                                                                                |

### 3.2 Migrations and schema

| ID   | Requirement                                                                                                                                                         |
| ---- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| FR-5 | Support queued DDL migrations compatible with Forge SQL’s queue + scheduled execution model.                                                                        |
| FR-6 | Provide CLI commands to generate models and migrations from a development database and to update or drop migrations ([CLI README](../forge-sql-orm-cli/README.md)). |
| FR-7 | Provide optional web triggers to apply migrations, fetch schema (development), and drop tables (development) with documented security constraints.                  |
| FR-8 | Document backward-compatible schema change practices per Atlassian recommendations (see §5.1).                                                                      |

### 3.3 Caching

| ID    | Requirement                                                                                                                                   |
| ----- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| FR-9  | **Level 1:** In-memory cache scoped to a single resolver/trigger invocation.                                                                  |
| FR-10 | **Level 2 (optional):** Cross-invocation cache via `@forge/kvs` with invalidation and context-aware operations, respecting KVS limits (§5.2). |
| FR-11 | Expose cache-aware query helpers and manual cache management APIs documented in README.                                                       |

### 3.4 Reliability and observability

| ID    | Requirement                                                                                       |
| ----- | ------------------------------------------------------------------------------------------------- |
| FR-12 | Expose query execution metadata (`executeWithMetadata`) including timing and response size.       |
| FR-13 | Detect timeout/OOM-class failures and support automatic post-mortem analysis where documented.    |
| FR-14 | Support scheduled slow-query monitoring and query-plan analysis modes (TopSlowest, SummaryTable). |
| FR-15 | Support **optimistic locking** for concurrent updates.                                            |

### 3.5 Advanced / domain-specific

| ID    | Requirement                                                                                                                                              |
| ----- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| FR-16 | Provide Forge-specific date/time column types matching Forge SQL string formats.                                                                         |
| FR-17 | Provide binary/UUID custom types (`forgeBinary`, `uuidBinary`, BLOB variants, etc.).                                                                     |
| FR-18 | Provide TiDB `VECTOR` type and vector distance helpers for embeddings/similarity search where Forge SQL allows.                                          |
| FR-19 | Provide TiDB SQL function helper modules (aggregates, JSON, window, encrypt, etc.) as documented.                                                        |
| FR-20 | Provide a **Rovo integration** pattern with security validations and optional RLS for dynamic SQL (documented; see external example linked from README). |

---

## 4. Non-functional requirements

| ID    | Requirement                                                                                                                                                                                                                                                    |
| ----- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| NFR-1 | **Type safety:** Public APIs are typed in TypeScript; `tsc` build must pass in CI.                                                                                                                                                                             |
| NFR-2 | **Test coverage:** Library `src/` maintains Vitest coverage ≥ 80% statements/lines/functions and ≥ 75% branches ([CONTRIBUTING.md](../CONTRIBUTING.md)). Integration with Forge SQL is exercised via `@forge/sql` mocks (§8.1), not live cloud DB tests in CI. |
| NFR-3 | **Static analysis:** CI runs ESLint, Knip, SonarCloud, and related checks on every PR to `master`.                                                                                                                                                             |
| NFR-4 | **Code review:** Every pull request is reviewed by an automated pipeline (CodeRabbit, Codacy AI Reviewer, SonarCloud, Qlty, DeepScan, Snyk, REUSE). **All bot comments are mandatory** and must be resolved by a human maintainer before merge. See §8.2.      |
| NFR-5 | **Releases:** Semantic versioning; release notes in [GitHub Releases](https://github.com/forge-sql-orm/forge-sql-orm/releases) and [CHANGELOG.md](../CHANGELOG.md).                                                                                            |
| NFR-6 | **License:** MIT ([LICENSE](../LICENSE)).                                                                                                                                                                                                                      |
| NFR-7 | **Security:** Vulnerabilities reported per [SECURITY.md](../SECURITY.md), not via public issues.                                                                                                                                                               |
| NFR-8 | **Peer dependencies:** `drizzle-orm` and `@forge/sql` versions documented in `package.json`; consumers must align with supported ranges.                                                                                                                       |
| NFR-9 | **Bundle discipline:** Optional/heavy dependencies (e.g. `@forge/kvs`, `node-sql-parser`, `@forge/events`) remain optional where possible to keep core installs lean.                                                                                          |

---

## 5. Platform constraints

The library **must not encourage patterns that violate** Atlassian platform limits. Implementations should fail gracefully or document constraints when limits apply.

### 5.1 Forge SQL limits (per installation)

Source: [Forge SQL — Limitations](https://developer.atlassian.com/platform/forge/storage-reference/sql/) (verify on Atlassian docs for updates).

**Behavioral constraints**

| Constraint                                                                     | Implication for Forge SQL ORM                                                                   |
| ------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------- |
| MySQL-compliant, ANSI SQL encouraged                                           | Prefer portable SQL in examples and generated migrations; avoid undocumented TiDB-only behavior |
| **Foreign keys not supported**                                                 | Do not rely on FK DDL or `ON DELETE CASCADE`; document JOIN + explicit deletes                  |
| **One SQL statement per call**                                                 | Driver and batch helpers must not send multi-statement strings in a single Forge SQL request    |
| Schema applied per installation                                                | Migrations must be installation-scoped via Forge SQL migration runner                           |
| Adding Forge SQL to an existing app requires **major version** + admin consent | Document in app migration guides (README Migration Guide)                                       |

**Per-install quotas**

| Resource                                     | Limit                                                                   |
| -------------------------------------------- | ----------------------------------------------------------------------- |
| Total stored data                            | 1 GiB (production), 256 MiB (staging), 128 MiB (development/custom env) |
| Number of tables                             | 200                                                                     |
| DML requests per second                      | 150                                                                     |
| DDL requests per minute                      | 25                                                                      |
| Size per row                                 | 6 MiB                                                                   |
| Total query execution time (all invocations) | 62.5 seconds per minute                                                 |

**Per-query / per-response limits**

| Resource                        | Limit         |
| ------------------------------- | ------------- |
| Memory usage per query          | 16 MiB        |
| Query time per minute           | 62.5 s/minute |
| Request size                    | 1 MiB         |
| Response size                   | 4 MiB         |
| SELECT timeout (per connection) | 5 s           |
| INSERT/UPDATE/DELETE timeout    | 10 s          |
| DDL timeout                     | 20 s          |

**Schema and data design recommendations (Atlassian)**

- DDL changes must remain **backward compatible** with schema versions still migrating on customer sites.
- SQL used by older app versions must keep working on newer schemas.
- Avoid destructive schema changes that break cross-version compatibility.
- Avoid plain `AUTO_INCREMENT` hotspots; prefer `AUTO_RANDOM` or `BINARY(16)` UUIDs as documented by Atlassian/TiDB.

### 5.2 @forge/kvs limits (Level 2 cache)

Source: [KVS and Custom Entity Store limits](https://developer.atlassian.com/platform/forge/storage-reference/kvs-limits/).

Global caching **must** account for:

| Parameter              | Limit                                                        |
| ---------------------- | ------------------------------------------------------------ |
| Request rate           | 1000 RPS per installation                                    |
| Read throughput        | 4000 × 10 KB requests/min                                    |
| Write throughput       | 4000 × 10 KB requests/min                                    |
| Request size rounding  | Rounded up to nearest 10 KB (batching reduces counted usage) |
| Key length             | 500 characters                                               |
| Key format             | `^(?!\s+$)[a-zA-Z0-9:._\s-#]+$`                              |
| Value size             | 240 KiB (raw) per value                                      |
| Object depth           | 31                                                           |
| Transaction operations | Max 25 ops per transaction                                   |
| Transaction payload    | 4 MiB                                                        |

**Design implications for FR-9–FR-11**

- Cache entries must stay within **240 KiB** per key; large result sets may require chunking or SQL-only strategies.
- High churn caches must respect **RPS and read/write buckets**; bulk workloads should use async events (Atlassian recommendation).
- Prefer **batch KVS operations** where the library batches writes/reads to reduce 10 KB rounding overhead.
- Do not store secrets in plain KVS values; use `kvs.setSecret` and encrypted environment variables for credentials.

---

## 6. Compatibility and versioning

| ID       | Requirement                                                                                                          |
| -------- | -------------------------------------------------------------------------------------------------------------------- |
| COMPAT-1 | **Semantic versioning** for `forge-sql-orm` and `forge-sql-orm-cli` (aligned major versions when released together). |
| COMPAT-2 | Breaking API or behavior changes require a **major** bump and an entry in CHANGELOG under a clearly marked section.  |
| COMPAT-3 | Database-facing changes must remain compatible with Forge SQL migration and multi-version install guidance (§5.1).   |
| COMPAT-4 | Deprecations should be announced in CHANGELOG and README before removal in the next major release where feasible.    |

---

## 7. Traceability

| Work type               | Where it is tracked                                                    |
| ----------------------- | ---------------------------------------------------------------------- |
| Bugs / defects          | [GitHub Issues](https://github.com/forge-sql-orm/forge-sql-orm/issues) |
| Features / enhancements | GitHub Issues + README + CHANGELOG on release                          |
| Security                | Private report per SECURITY.md                                         |
| Implementation          | Pull requests with linked issue when applicable                        |
| Release verification    | GitHub Actions CI, SonarCloud, Qlty coverage                           |

Example of community-reported defect tracking: [Issue #2128](https://github.com/forge-sql-orm/forge-sql-orm/issues/2128) (Forge lint / TypeScript duplicate property reporting).

---

## 8. Verification

Requirements in §3–§4 are verified by:

- Automated tests (`__tests__/`, Vitest) with coverage thresholds
- CI workflow [`.github/workflows/node.js.yml`](../.github/workflows/node.js.yml) (lint, build, test:coverage, SonarCloud, example builds, Forge deploy smoke paths)
- Manual review of README/CHANGELOG on each release
- Example applications built and deployed in CI (smoke validation of packaging and Forge app lifecycle; not a substitute for automated SQL integration tests)

### 8.1 Integration testing and Forge SQL

**Live integration tests against Forge SQL are not part of this repository’s automated test suite.**

Forge SQL is a **hosted, per-installation cloud database** on Atlassian infrastructure. Running deterministic integration tests in CI would require a live Forge app installation, platform credentials, tenant-isolated data, and network access to `@forge/sql` on every pull request. That is impractical for an open-source library consumed across many sites and environments, and it would couple test reliability to external quota limits (see §5.1).

**Strategy: mock the official low-level API (`@forge/sql`).**

Instead of hitting a remote database, tests **mock `@forge/sql`** at the boundary the library actually uses — `sql.prepare(query)` returning objects with `bindParams()` and `execute()` — and assert the **SQL strings, parameters, and ORM behavior** (including Drizzle integration) end-to-end through the public API.

Primary suites (large, query-aware mocks):

| Test file                                                                                                       | What it exercises                                                              |
| --------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| [`__tests__/src/core/ForgeSQLCrudOperations.test.ts`](../__tests__/src/core/ForgeSQLCrudOperations.test.ts)     | INSERT, UPDATE, DELETE, optimistic locking, versioned entities                 |
| [`__tests__/src/core/ForgeSQLSelectOperations.test.ts`](../__tests__/src/core/ForgeSQLSelectOperations.test.ts) | SELECT, JOINs, CTEs, cacheable selects, vector helpers, custom types, metadata |

Additional tests use the same `@forge/sql` mock pattern where needed (e.g. [`ForgeSQLLocalCache.test.ts`](../__tests__/src/core/ForgeSQLLocalCache.test.ts), [`forgeDriver.test.ts`](../__tests__/src/utils/forgeDriver.test.ts), migration web triggers under `__tests__/src/webtriggers/`).

This approach satisfies **integration-style coverage** of the ORM stack (Drizzle → custom driver → `@forge/sql` call shape) without a cloud database. **Manual** validation against real Forge SQL remains the responsibility of app authors and is supported via documented `examples/*` apps and CI Forge deploy steps.

| ID     | Requirement                                                                                                                                                            |
| ------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| TEST-1 | Core SQL generation and CRUD/SELECT behavior must be covered by Vitest suites that mock `@forge/sql`, not by requiring a live Forge SQL instance in CI.                |
| TEST-2 | New query shapes or Forge SQL interactions should extend the mock-based suites above (or add analogous tests) with assertions on generated SQL and `bindParams` usage. |

### 8.2 Code review and comment resolution

Forge SQL ORM is solo-maintained. To keep review discipline at the level a quality rubric expects without a second human reviewer, every pull request to `master` is reviewed by an **automated pipeline** whose comments are treated as binding review items.

**Pipeline (runs on every PR):**

| Tool                                                            | Role                                                           | Operating mode                                   |
| --------------------------------------------------------------- | -------------------------------------------------------------- | ------------------------------------------------ |
| [CodeRabbit](https://www.coderabbit.ai/)                        | AI line-level review of correctness, style, and likely defects | **Free tier** — rate-limited but covers every PR |
| [Codacy AI Reviewer](https://www.codacy.com/)                   | Additional AI comments on security, duplication, best practice | Comments posted on the PR                        |
| [SonarCloud Quality Gate](https://sonarcloud.io/)               | Coverage, code smells, vulnerabilities, security hotspots      | Blocks merge if the Quality Gate fails           |
| [Qlty](https://qlty.sh/)                                        | Maintainability score, coverage tracking                       | Comments + bot tracking on coverage delta        |
| [DeepScan](https://deepscan.io/), [Snyk](https://snyk.io/)      | Static security and runtime-defect scanning                    | Comments on PR / dashboard alerts                |
| [REUSE / SPDX](https://reuse.software/) via `fsfe/reuse-action` | License-header compliance for every source file                | Blocking CI step                                 |

**Comment resolution policy:**

- Every comment posted by any of the tools above is a **mandatory review item**, regardless of severity (info/minor included).
- A **human maintainer must resolve every comment** before merge — by fixing the code, by replying with explicit reasoning that the comment is wrong or inapplicable and marking it resolved, or by filing a follow-up issue if the concern is out of scope.
- Auto-merge is enabled **only after** the pipeline passes _and_ every outstanding bot comment has been resolved by a human.
- PRs with unresolved bot comments will not be merged.

This pipeline, combined with mandatory human-driven comment resolution, satisfies the "code review" quality dimension on a solo-maintained project. See [CONTRIBUTING.md — Pull Request Review Policy](../CONTRIBUTING.md#pull-request-review-policy) for the contributor-facing version of this policy.

| ID    | Requirement                                                                                                                                                                                                |
| ----- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| REV-1 | Every PR to `master` must be reviewed by the automated pipeline above. Auto-merge is gated on all required checks passing.                                                                                 |
| REV-2 | Every comment produced by any bot in the pipeline is mandatory and must be resolved by a human maintainer (fix, reasoned dismissal, or follow-up issue) before merge. Unresolved bot comments block merge. |
| REV-3 | If a tool from the pipeline is removed or replaced, NFR-4 and §8.2 must be updated in the same PR.                                                                                                         |

---

## 9. Document maintenance

| Event                              | Action                                                                   |
| ---------------------------------- | ------------------------------------------------------------------------ |
| New public feature                 | Update README (+ example if non-trivial); add CHANGELOG entry on release |
| Breaking change                    | CHANGELOG + README migration notes; bump major if needed                 |
| Platform limit change by Atlassian | Update §5 and README warnings                                            |
| New quality gate                   | Update CONTRIBUTING and §4                                               |

**Last updated:** 2026-05-27 (added §8.2 Code review and comment resolution)
