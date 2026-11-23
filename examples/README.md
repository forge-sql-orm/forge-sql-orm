# Forge SQL ORM Examples

This directory contains different examples demonstrating various ways to use Forge SQL ORM.

## Available Examples

### [forge-sql-orm-example-drizzle-driver-simple](forge-sql-orm-example-drizzle-driver-simple)

Minimal example showing how to use Drizzle ORM directly with Forge SQL using our custom driver. Perfect for projects that need only basic database operations without additional ORM features.

- Direct Drizzle ORM usage
- Custom Forge SQL driver
- Basic CRUD operations
- Type-safe queries

### [forge-sql-orm-example-simple](forge-sql-orm-example-simple)

Basic example demonstrating core Forge SQL ORM features. Good starting point for new projects.

- Full ORM functionality
- Basic CRUD operations
- Query builder usage
- Simple database operations

### [forge-sql-orm-example-ui-kit](forge-sql-orm-example-ui-kit)

Jira global page example using **Forge UI Kit** (`@forge/react`) with Forge SQL ORM and Drizzle. Demonstrates CRUD on a `users` table with native Forge components (no Custom UI).

- Forge UI Kit only (Form, DynamicTable, Textfield, Button, etc.)
- Create, list, and update users via resolvers
- Drizzle schema and migrations (apply on install and hourly)
- Resolvers: `createUser`, `fetchUsers`, `updateUsers`

### [forge-sql-orm-example-optimistic-locking](forge-sql-orm-example-optimistic-locking)

Demonstrates how to use optimistic locking to prevent data conflicts in concurrent operations.

- Optimistic locking implementation
- Version field handling
- Conflict prevention
- Safe data updates

### [forge-sql-orm-example-dynamic](forge-sql-orm-example-dynamic)

Shows how to work with dynamic queries and complex database operations.

- Dynamic query building
- Complex joins
- Advanced filtering
- Runtime query construction

### [forge-sql-orm-example-query-analyses](forge-sql-orm-example-query-analyses)

Demonstrates query analysis capabilities for performance optimization and debugging. This example shows how to analyze and optimize database queries using TiDB's system schemas.

- Query plan analysis
- Slow query analysis
- Query history tracking
- Performance optimization tools
- Experimental features for development and troubleshooting

### [forge-sql-orm-example-org-tracker](forge-sql-orm-example-org-tracker)

A practical example demonstrating how to work with complex database relationships and sequences. This example shows how to build an organization tracking system with user management.

- Joining tables with overlapping columns
- Using sequences for ID generation
- Complex queries with filtering
- User and organization management
- Search and filtering capabilities

### [forge-sql-orm-example-checklist](forge-sql-orm-example-checklist)

A practical example demonstrating optimistic locking implementation in a real-world scenario. This example shows how to handle concurrent modifications in a checklist feature for Jira issues.

- Optimistic locking in a real application
- Concurrent modification handling
- Automatic conflict resolution
- User-friendly conflict notifications
- Default checklist initialization
- Two update modes comparison (with/without locking)

### [forge-sql-orm-example-cache](forge-sql-orm-example-cache)

Advanced example demonstrating comprehensive caching capabilities and performance monitoring. This example showcases both local and global caching, automatic cache management, and detailed performance analysis.

- Query performance testing (cached vs non-cached)
- User & order management with automatic cache clearing
- Performance analysis with detailed monitoring
- Memory usage tracking and slow query detection
- Cache management and automatic invalidation
- Real-time performance metrics and execution plans
- Optional ID fields with auto-generation
- Modern React UI with detailed analytics

### [forge-sql-orm-example-vector](forge-sql-orm-example-vector)

Example for **TiDB `VECTOR`** columns and vector SQL helpers (`vecCosineDistance`, etc.) in Forge SQL ORM—storage and similarity search for **AI** workloads (embeddings), aligned with PingCAP’s [vector search SQL tutorial](https://docs.pingcap.com/tidb/stable/vector-search-get-started-using-sql).

- Drizzle schema with `vectorTiDBType({ dimension: n })`
- Migrations creating `embedded_documents` and seed data (`dog`, `fish`, `tree`)
- Resolvers: insert, fetch all, cosine-distance search
- Custom UI (Atlaskit) for 3D demo vectors

### [forge-sql-orm-example-ai](forge-sql-orm-example-ai)

Custom UI example for **AI semantic search** with embeddings computed **on the frontend** (Custom UI / browser) and vector search in Forge SQL/TiDB.

- **Embeddings on the frontend:** `@huggingface/transformers` (`all-MiniLM-L6-v2`) in the browser before `invoke`
- Store `title`, `document`, and vector embedding in `embedded_documents`
- Search by free-text query (query embedding is computed in the browser, then sent to the resolver)
- Cosine-distance ranking with similarity shown as percentage

### [forge-sql-orm-example-backend-ai](forge-sql-orm-example-backend-ai)

**Hybrid AI search** on the Forge backend: vector retrieve in Forge SQL/TiDB, then fulltext, cross-encoder rerank, and **RRF** fusion — embeddings and scoring run in the resolver, not in Custom UI.

- **Backend AI sidecar** in `ai-lib/` (see `manifest.yml` → `extraFiles`): `all-MiniLM-L6-v2` (embeddings) and `ms-marco-MiniLM-L6-v2` (rerank); Custom UI sends plain `title` / `document` / search `text` only
- **Hybrid pipeline:** cosine-distance shortlist → MiniSearch fulltext on candidates → cross-encoder rerank → reciprocal rank fusion (`hybridScore.ts` weights)
- **Fulltext in Node.js** (MiniSearch) — Forge SQL has no `FULLTEXT` / `MATCH AGAINST`; complements vector and rerank for exact phrases
- **No external AI APIs** — bundled models, RoA-eligible inference on Atlassian-hosted compute
- Requires a separate `ai-lib` build per target (`arm64` / `x86_64` for deploy, `build:tunnel` for `forge tunnel`)
- UI shows **Combined (%)** (final RRF rank) plus Vector, Fulltext, and Rerank breakdown per row

### [forge-sql-orm-example-atlascamp](forge-sql-orm-example-atlascamp)

**Atlas Camp 2026 - February 9, 2026**

Demonstration application showcasing advanced Forge SQL ORM capabilities for Atlas Camp presentation. Features complex ACL (Access Control List) system, query caching, performance optimization, error handling, and large-scale data operations.

- Complex ACL system with 12 interconnected tables (users, roles, permissions, documents, ACL)
- Query caching with `selectDistinctCacheable()` for permission lookups
- Performance monitoring with automatic slow query detection (>500ms)
- Error handling for timeout and Out of Memory scenarios
- Automatic schema migrations with async queue processing
- Database seeding (300 users, 30,000 documents, 300,000 ACL entries)
- Scheduled triggers for migrations, slow query analysis, and cache cleanup
- Async queues for degradation monitoring and long-running migrations
- React-based frontend with interactive query execution

### [forge-sql-orm-example-nodenext-js](forge-sql-orm-example-nodenext-js)

Jira global page example written in **plain JavaScript (ESM + JSDoc)** and type-checked with `tsc` (`checkJs`) under `module` / `moduleResolution` **`nodenext`**, using both `forge-sql-orm` and `forge-sql-orm-extra`. Regression guard for [#2865](https://github.com/forge-sql-orm/forge-sql-orm/issues/2865) (ESM type declarations under NodeNext).

- `"type": "module"` with explicit `.js` relative imports (`entities`, `migration`, `resolvers`)
- Types via JSDoc, verified by `tsc` under `nodenext`, `node16` and `bundler`
- Forge UI Kit global page (list, add and delete users)
- Fails to compile if the ESM declarations of the packages break (named exports or `any` default export)

### [forge-sql-orm-example-nodenext-ts](forge-sql-orm-example-nodenext-ts)

The **TypeScript** counterpart of the NodeNext example: a Forge app compiled with `module` / `moduleResolution` **`nodenext`** using both `forge-sql-orm` and `forge-sql-orm-extra` ([#2865](https://github.com/forge-sql-orm/forge-sql-orm/issues/2865)).

- Backend structured like the other examples (`entities`, `migration`, `resolvers`) with extensionless imports, because the Forge webpack bundler cannot resolve `./x.js` to `x.ts`
- `src/esm-check.mts`: an ES-module-only file (never bundled) that resolves the packages through their ESM declarations and fails the build if named exports or the `ForgeSQL` type regress
- Forge UI Kit global page (list, add and delete users)

Each example includes its own README with detailed setup instructions and usage examples.
