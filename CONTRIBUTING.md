# Contributing to Forge SQL ORM

First off, thanks for taking the time to contribute! 🎉

The following is a set of guidelines for contributing to Forge SQL ORM.

## Code of Conduct

This project and everyone participating in it is governed by the [Code of Conduct](CODE_OF_CONDUCT.md). By participating, you are expected to uphold this code.

## Development Setup & Strict Checks

This project uses **Husky** to enforce high code quality standards via git hooks.

```bash
# Clone the repository
git clone [https://github.com/forge-sql-orm/forge-sql-orm.git](https://github.com/forge-sql-orm/forge-sql-orm.git)

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
## Code Coverage Requirements

This project enforces strict code coverage thresholds via Vitest. If your PR lowers the coverage below these limits, the build will fail:

- **Statements: > 80%**
- **Branches: > 75%**
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

## Styleguides
- Use the present tense ("Add feature" not "Added feature").
- Reference issues and pull requests liberally.

# Thank you for your contribution!
