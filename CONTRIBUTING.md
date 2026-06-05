# Contributing to Forge SQL ORM

First off, thanks for taking the time to contribute! 🎉

The following is a set of guidelines for contributing to Forge SQL ORM.

For product scope, platform limits, and documentation obligations, see [REQUIREMENTS.md](REQUIREMENTS.md).

## Repository layout

This monorepo publishes three npm packages:

| Package                | Directory              | When you change it                                                                            |
| ---------------------- | ---------------------- | --------------------------------------------------------------------------------------------- |
| `forge-sql-orm` (core) | `src/`, `__tests__/`   | Run checks from the repository root (see [Pre-commit Requirements](#pre-commit-requirements)) |
| `forge-sql-orm-extra`  | `forge-sql-orm-extra/` | Also run `npm ci`, `npm run build`, and `npm run test:coverage` inside `forge-sql-orm-extra/` |
| `forge-sql-orm-cli`    | `forge-sql-orm-cli/`   | Also run `npm ci`, `npm run build`, and `npm run test:coverage` inside `forge-sql-orm-cli/`   |

CI runs the full quality gate for all three packages on every pull request to `master`. See [REQUIREMENTS.md §2.4](REQUIREMENTS.md#24-modular-package-architecture) for how features are split between core and extra.

## Code of Conduct

This project and everyone participating in it is governed by the [Code of Conduct](CODE_OF_CONDUCT.md). By participating, you are expected to uphold this code.

## Development Setup & Strict Checks

This project uses **Husky** to enforce high code quality standards via git hooks.

```bash
# Clone the repository
git clone https://github.com/forge-sql-orm/forge-sql-orm.git

# Install dependencies (this automatically sets up Husky)
npm install
```

## Pre-commit Requirements

Important: Simply running npm run test is NOT sufficient. Our pre-commit hook is strict and performs a full health check.

Before committing, ensure your code passes the following suite:

```bash
# 1. Format code (Essential!)
npm run format

# 2. Type-checking & Build
npm run build

# 3. Dependency validation (Knip)
npm run knip

# 4. Linter
npm run lint

# 5. Tests with Coverage
npm run test
```

If you changed **`forge-sql-orm-extra`** or **`forge-sql-orm-cli`**, run the same checks in that package directory before opening a PR:

```bash
# forge-sql-orm-extra
cd forge-sql-orm-extra
npm ci
npm run knip
npm run build
npm run test:coverage

# forge-sql-orm-cli
cd forge-sql-orm-cli
npm ci
npm run knip
npm run build
npm run test:coverage
```

## Code Coverage Requirements

This project enforces strict code coverage thresholds via Vitest **in each package** (root, `forge-sql-orm-extra/`, `forge-sql-orm-cli/`). If your PR lowers the coverage below these limits, the build will fail:

- **Statements: > 80%**
- **Branches: > 80%**
- **Functions: > 80%**
- **Lines: > 80%**

Please ensure that any new logic includes corresponding unit tests.

## How Can I Contribute?

**Reporting Bugs & Suggestions**

- Use a clear title and describe the problem or suggestion in detail.
- Provide reproduction steps (code snippets or repo links are highly appreciated).
- Explain expected vs. actual behavior.

**Pull Requests**

1. Fork the repo and create your branch from master.
2. Make sure you have run the Pre-commit Requirements listed above.
3. Ensure strict coverage thresholds are met.
4. Issue that pull request!

## Pull Request Review Policy

Forge SQL ORM is a solo-maintained open-source project. To keep review discipline strong without a team of human reviewers, every PR goes through an **automated review pipeline** whose comments are treated as binding review items.

**Review tools that run on every PR to `master`:**

| Tool                                                       | Role                                                                                                                            |
| ---------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| [CodeRabbit](https://www.coderabbit.ai/)                   | AI line-level review (correctness, style, likely defects). Operates under the **free tier** — rate-limited but covers every PR. |
| [Codacy AI Reviewer](https://www.codacy.com/)              | AI comments on security, duplication, and best practices.                                                                       |
| [SonarCloud Quality Gate](https://sonarcloud.io/)          | Coverage, code smells, vulnerabilities, security hotspots. Blocks merge if the Quality Gate fails.                              |
| [Qlty](https://qlty.sh/)                                   | Maintainability score, coverage tracking.                                                                                       |
| [DeepScan](https://deepscan.io/), [Snyk](https://snyk.io/) | Static defect and vulnerability analysis.                                                                                       |
| [REUSE / SPDX](https://reuse.software/)                    | License-header compliance, enforced via `fsfe/reuse-action` in CI.                                                              |

**Comment resolution is mandatory:**

- Every comment posted by any tool above is a **blocking review item**, regardless of severity.
- A **human maintainer must explicitly resolve each comment** — by applying a fix, replying with reasoning that the comment is wrong/inapplicable and marking it resolved, or filing a follow-up issue if it is out of scope.
- Auto-merge is enabled **only after** the pipeline passes _and_ every outstanding comment has been resolved by a human.
- PRs with unresolved bot comments will not be merged.

This replaces, by design, the need for a second human reviewer on a solo-maintained project. See [REQUIREMENTS.md §8.2](REQUIREMENTS.md#82-code-review-and-comment-resolution) for the corresponding requirements-level definition.

## Example Apps & Forge Deployment Flow

The CI pipeline (`.github/workflows/node.js.yml`, job `examples`) builds **and deploys** every example app to Atlassian Forge. The target environment depends on the trigger:

- **Push to `master`** → the `production` Forge environment.
- **Pull request (or manual `development` dispatch)** → a **per-contributor Forge environment**, named after your sanitized GitHub username (`github.actor` with everything except letters/digits stripped, e.g. `Jane-Doe` → `JaneDoe`). Each example is then installed on `FORGE_HOSTNAME` for that environment.

The install step is idempotent: it runs `forge install list --json`, checks whether the app already exists on `FORGE_HOSTNAME` in that environment, and either `--upgrade`s it or performs a fresh install.

All deployments run under the **maintainer's** Forge credentials (`FORGE_EMAIL` / `FORGE_API_TOKEN` repository secrets) against the maintainer's apps and `FORGE_HOSTNAME` site — **you do not need any Forge account, site access, or Developer Console membership to contribute.** The per-contributor environment naming only namespaces the dev deploys so concurrent PRs don't collide.

## Logging

Diagnostic logging goes through the platform-native `console.*` API — Atlassian Forge captures `console` output from resolvers and triggers, and we deliberately avoid third-party logging frameworks to keep dependencies lean (see [REQUIREMENTS.md NFR-11](REQUIREMENTS.md#4-non-functional-requirements)).

Because of this, `no-console` is configured as an **ESLint error**. You cannot just drop in a `console.log`:

- Each intentional log must be opted in per line with `// eslint-disable-next-line no-console`.
- Think before adding one — keep it intentional and minimal, and gate noisy output behind a flag where appropriate (e.g. `logRawSqlQuery`):

```ts
if (newOptions.logRawSqlQuery) {
  // eslint-disable-next-line no-console
  console.debug("Initializing ForgeSQLORM...");
}
```

The explicit opt-in is intentional: it keeps every log line visible in review rather than letting console output accumulate accidentally.

## Styleguides

- Use the present tense ("Add feature" not "Added feature").
- Reference issues and pull requests liberally.

# Thank you for your contribution!
