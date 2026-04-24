---
name: docs-sync
description: Cross-check the repository's README and example READMEs against the actual code to find drift - missing docs for new public APIs, stale references to renamed/removed symbols, broken internal anchors, and code snippets in README that no longer compile. Use when the user asks to "check docs", "sync docs", "verify README", "find stale docs", "audit documentation", or after a refactor of public API surface.
---

# Forge SQL ORM Docs Sync

The root `README.md` is ~3600 lines and is the primary public reference for the library. Example READMEs (`examples/*/README.md`) and the CLI README (`forge-sql-orm-cli/README.md`) are secondary. This skill finds where docs have drifted from the actual source in `src/`.

## What counts as "drift"

Report in four buckets. Do not mix them.

### 1. Stale references (docs mention something that no longer exists)

Things to check in `README.md`:

- Method/function names in code blocks or prose that are no longer exported from `src/index.ts` (or its re-exports: `src/core`, `src/utils`, `src/webtriggers`, `src/lib`, `src/async`).
- Class names / type names that were renamed or removed.
- Config option names (e.g. `cacheEntityName`, `cacheTTL`, `logRawSqlQuery`) that no longer appear in `ForgeSqlOrmOptions` (search `src/` for the type definition).
- Example file paths referenced by relative link (`examples/forge-sql-orm-example-*/...`) that no longer exist on disk.
- CLI flags / commands mentioned under `## CLI Commands` that aren't in `forge-sql-orm-cli/src/`.

Detection approach:
1. Extract candidate symbols from README: grep for `` `\w+\(` ``, fenced code blocks, and explicit `ForgeSQL.<method>` or `forgeSQL.<method>` patterns.
2. For each candidate, grep `src/` and `forge-sql-orm-cli/src/` for the definition. If nothing matches, flag as stale.
3. Collapse exact duplicates in the final report — one entry per unique stale symbol, with all README line numbers where it appears.

### 2. Missing docs (public API with no README mention)

- Iterate exports of `src/index.ts` (and its star-re-exports). For each public function, class method on `ForgeSQLORM`, and public type, grep the README for any mention.
- Ignore: internal utilities, types whose name starts with `_`, test helpers, anything marked `@internal` in JSDoc.
- The "missing" bar is "not mentioned anywhere in README prose or code examples." A type being referenced by a method signature that IS documented does not count as missing — that would be noise.

Be conservative in this bucket: it is the noisiest. Prefer false negatives to false positives. If a method is a small overload or a minor variant (e.g. `selectCacheableFrom` when `selectFrom` is documented), note it as a lower-priority suggestion rather than a must-fix.

### 3. Broken internal anchors

- The README's Table of Contents uses `#fragment` links. Extract every `](#...)` reference and verify a matching `## Heading` or `### Heading` exists (compute the GitHub-flavored slug: lowercase, spaces → hyphens, strip punctuation except hyphens, collapse multiple hyphens).
- Report each broken anchor with source line number and what it points at.

### 4. Stale code blocks

- Inside fenced ```ts and ```typescript blocks in README, find every `import { X } from "forge-sql-orm"`.
- If `X` is not exported from `src/index.ts` (directly or via re-export), flag the block.
- Also scan for method chains in code blocks: if a chain like `forgeSQL.foo().bar()` uses a `foo` or `bar` not found on `ForgeSQLORM` in `src/core/ForgeSQLORM.ts`, flag it.
- Do NOT try to typecheck the snippets fully — that's out of scope. Signature changes (parameter renames, extra required args) belong in bucket 1 as stale references, not here.

## How to run this skill

Default workflow when invoked:

1. Start by listing the public export surface: read `src/index.ts` and follow the re-exports to enumerate public names. Cache this list mentally for all subsequent grep work.
2. Read `README.md` in full (it's long but one read is cheap vs. many partial reads).
3. For each bucket, do a focused pass with Grep, not a full re-read.
4. Produce the report in the format below. Keep it short — every false positive wastes the user's time.
5. Do NOT edit the README automatically. This skill is read-only by default. Only propose edits if the user explicitly asks for a follow-up fix.

## Scope flags

If the user narrows the scope, honor it:

- "just the root README" → skip example READMEs and CLI README.
- "just CLI docs" → only check `forge-sql-orm-cli/README.md` against `forge-sql-orm-cli/src/`.
- "just examples" → for each `examples/*/README.md` check that the resolvers/commands it describes exist in that example's `src/index.ts`.
- "after this refactor" (when the conversation already has a diff) → limit to symbols touched by the diff.

## Report format

Exactly this shape. Omit empty buckets entirely.

```
## Docs Sync Report

### Stale references (N)
- `methodName` — README line 1234 — not found in src/. Likely renamed or removed.
- `OldTypeName` — README lines 456, 789 — no definition in src/.

### Missing docs (N)
- `newMethod` (src/core/Foo.ts:42) — exported but never mentioned in README.

### Broken anchors (N)
- README:87 `](#old-section)` — no heading renders to slug `old-section`.

### Stale code blocks (N)
- README:1500-1520 — imports `removedHelper` which is not exported.
```

End with one sentence recommending the highest-impact fix (e.g. "Start with stale references — they actively mislead readers.").

## Guardrails

- Do not propose renaming code to match docs. Docs follow code, not the other way around.
- Do not rewrite the README to add missing docs unless the user explicitly asks. The report is the deliverable.
- Reject the temptation to "also clean up wording" — this skill is drift detection, not style editing.
- If you find zero drift in a bucket, say so. An empty report for a bucket is a signal too.
- `src/entities/index.ts` in examples has a `DO NOT EDIT THIS FILE MANUALLY` header — do not treat it as a drift target; it is CLI-generated.
