# Forge SQL ORM

[![npm version](https://img.shields.io/npm/v/forge-sql-orm)](https://www.npmjs.com/package/forge-sql-orm)
[![npm downloads](https://img.shields.io/npm/dm/forge-sql-orm)](https://www.npmjs.com/package/forge-sql-orm)
[![npm version (CLI)](https://img.shields.io/npm/v/forge-sql-orm-cli?label=cli)](https://www.npmjs.com/package/forge-sql-orm-cli)
[![npm downloads (CLI)](https://img.shields.io/npm/dm/forge-sql-orm-cli?label=cli%20downloads)](https://www.npmjs.com/package/forge-sql-orm-cli)

[![Coverage](https://sonarcloud.io/api/project_badges/measure?project=forge-sql-orm_forge-sql-orm&metric=coverage)](https://sonarcloud.io/summary/new_code?id=forge-sql-orm_forge-sql-orm)

[![LoC (full)](https://raw.githubusercontent.com/forge-sql-orm/forge-sql-orm/badges/loc-full.svg)](https://github.com/forge-sql-orm/forge-sql-orm/actions/workflows/badge.yml)
[![LoC (src)](https://raw.githubusercontent.com/forge-sql-orm/forge-sql-orm/badges/loc-src.svg)](https://github.com/forge-sql-orm/forge-sql-orm/actions/workflows/badge.yml)

[![License](https://img.shields.io/github/license/forge-sql-orm/forge-sql-orm)](https://github.com/forge-sql-orm/forge-sql-orm/blob/master/LICENSE)
[![REUSE status](https://api.reuse.software/badge/github.com/forge-sql-orm/forge-sql-orm)](https://api.reuse.software/info/github.com/forge-sql-orm/forge-sql-orm)
[![License compliance](https://raw.githubusercontent.com/forge-sql-orm/forge-sql-orm/badges/license-compliance.svg)](https://github.com/forge-sql-orm/forge-sql-orm/actions/workflows/badge.yml)

[![forge-sql-orm CI](https://github.com/forge-sql-orm/forge-sql-orm/actions/workflows/node.js.yml/badge.svg)](https://github.com/forge-sql-orm/forge-sql-orm/actions/workflows/node.js.yml)
[![DeepScan grade](https://deepscan.io/api/teams/26652/projects/30920/branches/997203/badge/grade.svg)](https://deepscan.io/dashboard#view=project&tid=26652&pid=30920&bid=997203)
[![Codacy Badge](https://app.codacy.com/project/badge/Grade/5a850fba74734c658a5f88822cff4fd0)](https://app.codacy.com/gh/forge-sql-orm/forge-sql-orm/dashboard?utm_source=gh&utm_medium=referral&utm_content=&utm_campaign=Badge_grade)
[![Snyk Vulnerabilities](https://snyk.io/test/github/forge-sql-orm/forge-sql-orm/badge.svg)](https://snyk.io/test/github/forge-sql-orm/forge-sql-orm)
[![Security Rating](https://sonarcloud.io/api/project_badges/measure?project=forge-sql-orm_forge-sql-orm&metric=security_rating)](https://sonarcloud.io/summary/new_code?id=forge-sql-orm_forge-sql-orm)
[![Maintainability Rating](https://sonarcloud.io/api/project_badges/measure?project=forge-sql-orm_forge-sql-orm&metric=sqale_rating)](https://sonarcloud.io/summary/new_code?id=forge-sql-orm_forge-sql-orm)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=forge-sql-orm_forge-sql-orm&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=forge-sql-orm_forge-sql-orm)

[![Bugs](https://sonarcloud.io/api/project_badges/measure?project=forge-sql-orm_forge-sql-orm&metric=bugs)](https://sonarcloud.io/summary/new_code?id=forge-sql-orm_forge-sql-orm)
[![Code Smells](https://sonarcloud.io/api/project_badges/measure?project=forge-sql-orm_forge-sql-orm&metric=code_smells)](https://sonarcloud.io/summary/new_code?id=forge-sql-orm_forge-sql-orm)
[![Vulnerabilities](https://sonarcloud.io/api/project_badges/measure?project=forge-sql-orm_forge-sql-orm&metric=vulnerabilities)](https://sonarcloud.io/summary/new_code?id=forge-sql-orm_forge-sql-orm)
[![Maintainability](https://qlty.sh/gh/forge-sql-orm/projects/forge-sql-orm/maintainability.svg)](https://qlty.sh/gh/forge-sql-orm/projects/forge-sql-orm)

**Forge-SQL-ORM** is an ORM designed for working with [@forge/sql](https://developer.atlassian.com/platform/forge/storage-reference/sql-tutorial/) in **Atlassian Forge**. It is built on top of [Drizzle ORM](https://orm.drizzle.team) and provides advanced capabilities for working with relational databases inside Forge.

## Key Features

- ✅ **Custom Drizzle Driver** for direct integration with @forge/sql
- ✅ **Local Cache System (Level 1)** for in-memory query optimization within single resolver invocation scope
- ✅ **Performance Monitoring**: Query execution metrics and analysis capabilities with automatic error analysis for timeout and OOM errors, scheduled slow query monitoring with execution plans, and async query degradation analysis for non-blocking performance monitoring
- ✅ **Type-Safe Query Building**: Write SQL queries with full TypeScript support
- ✅ **Supports complex SQL queries** with joins and filtering using Drizzle ORM
- ✅ **Advanced Query Methods**: `selectFrom()`, `selectDistinctFrom()` for all-column queries with field aliasing ([`selectCacheableFrom()` / global cache](forge-sql-orm-extra/README.md) in **forge-sql-orm-extra**)
- ✅ **Query Execution with Metadata**: `executeWithMetadata()` method for capturing detailed execution metrics including database execution time, response size, and query analysis capabilities with performance monitoring. Supports two modes for query plan printing: TopSlowest mode (default) and SummaryTable mode
- ✅ **Raw SQL Execution**: `execute()`, `executeDDL()`, and `executeDDLActions()` for direct SQL (local caching; [`executeCacheable()`](forge-sql-orm-extra/README.md) in **forge-sql-orm-extra**)
- ✅ **Common Table Expressions (CTEs)**: `with()` method for complex queries with subqueries
- ✅ **Schema migration support**, allowing automatic schema evolution
- ✅ **Automatic entity generation** from MySQL/tidb databases
- ✅ **Automatic migration generation** from MySQL/tidb databases
- ✅ **Drop Migrations** Generate a migration to drop all tables and clear migrations history for subsequent schema recreation
- ✅ **Schema Fetching** Development-only web trigger to retrieve current database schema and generate SQL statements for schema recreation
- ✅ **Ready-to-use Migration Triggers** Built-in web triggers for applying migrations, dropping tables (development-only), and fetching schema (development-only) with proper error handling and security controls
- ✅ **Optimistic Locking** Ensures data consistency by preventing conflicts when multiple users update the same record
- ✅ **Query Plan Analysis**: Detailed execution plan analysis and optimization insights
- ✅ **Level 2 (global KVS) cache & Rovo** via [**forge-sql-orm-extra**](forge-sql-orm-extra/README.md); **Level 1 local cache** stays in core
- ✅ **TiDB `VECTOR` type & vector SQL helpers** — Drizzle column type `vectorTiDBType` plus `vecCosineDistance`, `vecL2Distance`, `vecDims`, and related helpers for **SQL with AI** (embeddings storage and similarity search)
- ✅ **Binary custom types (`BINARY` / `VARBINARY` / `BLOB`)** — built-in `forgeBinary`, `forgeVarBinary`, `forgeBLOB`, `forgeTinyBLOB`, `forgeMediumBLOB`, and `uuidBinary` for compact binary storage in Atlassian Forge
- ✅ **AI semantic search examples for Forge** — embeddings in [Custom UI (frontend)](examples/forge-sql-orm-example-ai) or on the [Forge backend](examples/forge-sql-orm-example-backend-ai) via an `ai-lib` sidecar; both use vector search in SQL

## Table of Contents

### 🚀 Getting Started

- [Key Features](#key-features)
- [Usage Approaches](#usage-approaches)
- [Installation](#installation)
- [CLI Commands](#cli-commands) | [CLI Documentation](forge-sql-orm-cli/README.md)
- [Quick Start](#quick-start)

### 📖 Core Features

- [Field Name Collision Prevention](#field-name-collision-prevention-in-complex-queries)
- [Drizzle Usage with forge-sql-orm](#drizzle-usage-with-forge-sql-orm)
- [Direct Drizzle Usage with Custom Driver](#direct-drizzle-usage-with-custom-driver)

### 🗄️ Database Operations

- [Fetch Data](#fetch-data)
- [Modify Operations](#modify-operations)
- [SQL Utilities](#sql-utilities)

### ⚡ Caching & Rovo ([forge-sql-orm-extra](forge-sql-orm-extra/README.md))

- **Level 2 (global KVS)** — [forge-sql-orm-extra](forge-sql-orm-extra/README.md) only
- **Level 1 (local cache)** — [core](#usage-approaches) (`executeWithLocalContext`, `selectFrom`, `execute`, …); same in extra, L2 not required

### 🔒 Advanced Features

- [Optimistic Locking](#optimistic-locking)
- [Rovo Integration](forge-sql-orm-extra/README.md#rovo-integration) — in **forge-sql-orm-extra**
- [Query Analysis and Performance Optimization](#query-analysis-and-performance-optimization)
- [Automatic Error Analysis](#automatic-error-analysis) - Automatic timeout and OOM error detection with execution plans
- [Slow Query Monitoring](#slow-query-monitoring) - Scheduled monitoring of slow queries with execution plans
- [Date and Time Types](#date-and-time-types)
- [TiDB vector types (AI / similarity search)](#tidb-vector-types-ai--similarity-search)
- [Custom types for binary and UUID data](#custom-types-for-binary-and-uuid-data)
- [TiDB SQL function helpers](#tidb-sql-function-helpers)

### 🛠️ Development Tools

- [CLI Commands](#cli-commands) | [CLI Documentation](forge-sql-orm-cli/README.md)
- [Web Triggers for Migrations](#web-triggers-for-migrations)
- [Step-by-Step Migration Workflow](#step-by-step-migration-workflow)
- [Drop Migrations](#drop-migrations)

### 📚 Examples

- [Simple Example](examples/forge-sql-orm-example-simple)
- [Drizzle Driver Example](examples/forge-sql-orm-example-drizzle-driver-simple)
- [Optimistic Locking Example](examples/forge-sql-orm-example-optimistic-locking)
- [Dynamic Queries Example](examples/forge-sql-orm-example-dynamic)
- [Query Analysis Example](examples/forge-sql-orm-example-query-analyses)
- [Organization Tracker Example](examples/forge-sql-orm-example-org-tracker)
- [Checklist Example](examples/forge-sql-orm-example-checklist)
- [Cache Example](examples/forge-sql-orm-example-cache) — uses **forge-sql-orm-extra** ([docs](forge-sql-orm-extra/README.md))
- [Vector / AI SQL Example](examples/forge-sql-orm-example-vector) - `VECTOR` columns, embeddings, cosine-distance search (TiDB-compatible)
- [AI Semantic Search (frontend embeddings)](examples/forge-sql-orm-example-ai) - Custom UI computes embeddings in the browser; resolvers store vectors and run cosine search
- [AI Semantic Search (backend embeddings)](examples/forge-sql-orm-example-backend-ai) - Resolvers compute embeddings server-side (`ai-lib` sidecar); Custom UI sends text only
- [Rovo Integration Example](https://github.com/vzakharchenko/Forge-Secure-Notes-for-Jira) - Real-world Rovo AI agent implementation with secure natural-language analytics

### 📚 Reference

- [Product requirements](REQUIREMENTS.md) — scope, platform limits (Forge SQL / KVS), traceability
- [ForgeSqlOrmOptions](#forgesqlormoptions)
- [Migration Guide](#migration-guide)
  - [Migrating from 2.0.x to 2.1.x](#migrating-from-20x-to-21x)
  - [Migrating from 2.1.x to 2.2.x](#migrating-from-21x-to-22x)

## 🚀 Quick Navigation

**New to Forge-SQL-ORM?** Start here:

- [Quick Start](#quick-start) - Get up and running in 5 minutes
- [Installation](#installation) - Complete setup guide
- [Basic Usage Examples](#fetch-data) - Simple query examples

**Looking for specific features?**

- [Global cache & Rovo](forge-sql-orm-extra/README.md) — **forge-sql-orm-extra**
- [Local Cache (Level 1)](#usage-approaches) - In-memory invocation caching (core)
- [Optimistic Locking](#optimistic-locking) - Data consistency
- [Rovo Integration](forge-sql-orm-extra/README.md#rovo-integration) - In **forge-sql-orm-extra**
- [Migration Tools](#web-triggers-for-migrations) - Database migrations
- [Query Analysis](#query-analysis-and-performance-optimization) - Performance optimization

**Looking for practical examples?**

- [Simple Example](examples/forge-sql-orm-example-simple) - Basic ORM usage
- [Optimistic Locking Example](examples/forge-sql-orm-example-optimistic-locking) - Real-world conflict handling
- [Organization Tracker Example](examples/forge-sql-orm-example-org-tracker) - Complex relationships
- [Checklist Example](examples/forge-sql-orm-example-checklist) - Jira integration
- [Cache Example](examples/forge-sql-orm-example-cache) - Advanced caching capabilities
- [AI Semantic Search (frontend embeddings)](examples/forge-sql-orm-example-ai) - Embeddings in the browser; Forge SQL stores `title`/`document`/`embedding` and runs vector search
- [AI Semantic Search (backend embeddings)](examples/forge-sql-orm-example-backend-ai) - Embeddings in Forge functions; UI sends `title`/`document` and search text only
- [Rovo Integration Example](https://github.com/vzakharchenko/Forge-Secure-Notes-for-Jira) - Real-world Rovo AI agent with secure analytics

## Usage Approaches

### 1. Full Forge-SQL-ORM Usage

```typescript
import ForgeSQL from "forge-sql-orm";
const forgeSQL = new ForgeSQL();
```

Best for: Advanced features like optimistic locking, automatic versioning, and automatic field name collision prevention in complex queries.

### 2. Direct Drizzle Usage

```typescript
import { drizzle } from "drizzle-orm/mysql-proxy";
import { forgeDriver } from "forge-sql-orm";
const db = drizzle(forgeDriver);
```

Best for: Simple Modify operations without optimistic locking. Note that you need to manually patch drizzle `patchDbWithSelectAliased` for select fields to prevent field name collisions in Atlassian Forge SQL.

### 3. Local Cache Optimization

```typescript
import ForgeSQL from "forge-sql-orm";
const forgeSQL = new ForgeSQL();

// Optimize repeated queries within a single invocation
await forgeSQL.executeWithLocalContext(async () => {
  // Multiple queries here will benefit from local caching
  const users = await forgeSQL
    .select({ id: users.id, name: users.name })
    .from(users)
    .where(eq(users.active, true));

  // This query will use local cache (no database call)
  const cachedUsers = await forgeSQL
    .select({ id: users.id, name: users.name })
    .from(users)
    .where(eq(users.active, true));

  // Using new methods for better performance
  const usersFrom = await forgeSQL.selectFrom(users).where(eq(users.active, true));

  // This will use local cache (no database call)
  const cachedUsersFrom = await forgeSQL.selectFrom(users).where(eq(users.active, true));

  // Raw SQL with local caching
  const rawUsers = await forgeSQL.execute("SELECT id, name FROM users WHERE active = ?", [true]);
});
```

Best for: Performance optimization of repeated queries within a single resolver invocation (**Level 1**). Available in **forge-sql-orm**; unchanged in 2.2.x (only **Level 2** moved to extra).

## Field Name Collision Prevention in Complex Queries

When working with complex queries involving multiple tables (joins, inner joins, etc.), Atlassian Forge SQL has a specific behavior where fields with the same name from different tables get collapsed into a single field with a null value. This is not a Drizzle ORM issue but rather a characteristic of Atlassian Forge SQL's behavior.

Forge-SQL-ORM provides two ways to handle this:

### Using Forge-SQL-ORM

```typescript
import ForgeSQL from "forge-sql-orm";

const forgeSQL = new ForgeSQL();

// Automatic field name collision prevention
await forgeSQL
  .select({ user: users, order: orders })
  .from(orders)
  .innerJoin(users, eq(orders.userId, users.id));
```

### Using Direct Drizzle

```typescript
import { drizzle } from "drizzle-orm/mysql-proxy";
import { forgeDriver, patchDbWithSelectAliased } from "forge-sql-orm";

const db = patchDbWithSelectAliased(drizzle(forgeDriver));

// Manual field name collision prevention
await db
  .selectAliased({ user: users, order: orders })
  .from(orders)
  .innerJoin(users, eq(orders.userId, users.id));
```

### Important Notes

- This is a specific behavior of Atlassian Forge SQL, not Drizzle ORM
- For complex queries involving multiple tables, it's recommended to always specify select fields and avoid using `select()` without field selection
- The solution automatically creates unique aliases for each field by prefixing them with the table name
- This ensures that fields with the same name from different tables remain distinct in the query results

## Installation

Forge-SQL-ORM is designed to work with [@forge/sql](https://developer.atlassian.com/platform/forge/storage-reference/sql-tutorial/) and [Drizzle ORM](https://orm.drizzle.team).

```sh
npm install forge-sql-orm @forge/sql drizzle-orm -S
```

For **global cache** ([@forge/kvs](https://developer.atlassian.com/platform/forge/storage-reference/storage-api-custom-entities/)) and **Rovo**, use [**forge-sql-orm-extra**](forge-sql-orm-extra/README.md):

```sh
npm install forge-sql-orm-extra @forge/kvs -S
```

(You still need the core dependencies above.)

## forge-sql-orm-extra

[**forge-sql-orm-extra**](forge-sql-orm-extra/README.md) adds **Level 2 (global KVS) cache** and **Rovo** on top of core. **Level 1 (local cache)** remains in **forge-sql-orm** and works unchanged with either import.

- **Level 2** — `@forge/kvs`, `selectCacheable*`, `*AndEvictCache`, cache contexts, scheduler cleanup
- **Rovo** — secure dynamic SQL for AI / natural-language analytics

Install: `npm install forge-sql-orm-extra @forge/kvs -S`. Import: `import ForgeSQL from "forge-sql-orm-extra"` and pass `cacheEntityName` / `cacheTTL` as in the [extra README](forge-sql-orm-extra/README.md).

## Quick Start

### 1. Basic Setup

```typescript
import ForgeSQL from "forge-sql-orm";

// Initialize ForgeSQL
const forgeSQL = new ForgeSQL();

// Simple query
const users = await forgeSQL.select().from(users);
```

### 2. With global cache ([forge-sql-orm-extra](forge-sql-orm-extra/README.md))

Install `forge-sql-orm-extra` and `@forge/kvs` (see [extra README](forge-sql-orm-extra/README.md#installation)). Same API, different import:

```typescript
import ForgeSQL from "forge-sql-orm-extra";

const forgeSQL = new ForgeSQL({
  cacheEntityName: "cache",
  cacheTTL: 300,
});

const users = await forgeSQL
  .selectCacheable({ id: users.id, name: users.name })
  .from(users)
  .where(eq(users.active, true));
```

### 3. Local Cache Optimization

```typescript
// Optimize repeated queries within a single invocation
await forgeSQL.executeWithLocalContext(async () => {
  const users = await forgeSQL
    .select({ id: users.id, name: users.name })
    .from(users)
    .where(eq(users.active, true));

  // This query will use local cache (no database call)
  const cachedUsers = await forgeSQL
    .select({ id: users.id, name: users.name })
    .from(users)
    .where(eq(users.active, true));

  // Using new methods for better performance
  const usersFrom = await forgeSQL.selectFrom(users).where(eq(users.active, true));

  // Raw SQL with local caching
  const rawUsers = await forgeSQL.execute("SELECT id, name FROM users WHERE active = ?", [true]);
});
```

### 4. Resolver Performance Monitoring

```typescript
// Resolver with performance monitoring
resolver.define("fetch", async (req: Request) => {
  try {
    return await forgeSQL.executeWithMetadata(
      async () => {
        // Resolver logic with multiple queries
        const users = await forgeSQL.selectFrom(demoUsers);
        const orders = await forgeSQL
          .selectFrom(demoOrders)
          .where(eq(demoOrders.userId, demoUsers.id));
        return { users, orders };
      },
      async (totalDbExecutionTime, totalResponseSize, printQueriesWithPlan) => {
        const threshold = 500; // ms baseline for this resolver

        if (totalDbExecutionTime > threshold * 1.5) {
          console.warn(
            `[Performance Warning fetch] Resolver exceeded DB time: ${totalDbExecutionTime} ms`,
          );
          await printQueriesWithPlan(); // Optionally log or capture diagnostics for further analysis
        } else if (totalDbExecutionTime > threshold) {
          console.debug(`[Performance Debug fetch] High DB time: ${totalDbExecutionTime} ms`);
        }
      },
      {
        // Optional: Configure query plan printing behavior
        mode: "TopSlowest", // Print top slowest queries (default)
        topQueries: 3, // Print top 3 slowest queries
      },
    );
  } catch (e) {
    const error = e?.cause?.debug?.sqlMessage ?? e?.cause;
    console.error(error, e);
    throw error;
  }
});
```

**Query Plan Printing Options:**

The `printQueriesWithPlan` function supports two modes:

1. **TopSlowest Mode (default)**: Prints execution plans for the slowest queries from the current resolver invocation
   - `mode`: Set to `'TopSlowest'` (default)
   - `topQueries`: Number of top slowest queries to analyze (default: 1)

2. **SummaryTable Mode**: Uses `CLUSTER_STATEMENTS_SUMMARY` for query analysis
   - `mode`: Set to `'SummaryTable'`
   - `summaryTableWindowTime`: Time window in milliseconds (default: 15000ms)
   - Only works if queries are executed within the specified time window

### 5. Rovo (forge-sql-orm-extra)

Secure dynamic SQL for natural-language analytics: [**forge-sql-orm-extra**](forge-sql-orm-extra/README.md#rovo-integration) (`import ForgeSQL from "forge-sql-orm-extra"`, `forgeSQL.rovo()`).

### 6. Next Steps

- [Full Installation Guide](#installation) - Complete setup instructions
- [Core Features](#core-features) - Learn about key capabilities
- [Global cache & Rovo](forge-sql-orm-extra/README.md) — extension package
- [Local Cache](#usage-approaches) - In-memory caching (core)
- [Rovo Integration](forge-sql-orm-extra/README.md#rovo-integration) - In **forge-sql-orm-extra**
- [API Reference](#reference) - Complete API documentation

## Drizzle Usage with forge-sql-orm

If you prefer to use Drizzle ORM with the additional features of Forge-SQL-ORM (like optimistic locking and caching), you can use the enhanced API:

```typescript
import ForgeSQL from "forge-sql-orm";
const forgeSQL = new ForgeSQL();

// Versioned operations (recommended)
await forgeSQL.modifyWithVersioning().insert(Users, [userData]);
await forgeSQL.modifyWithVersioning().updateById(updateData, Users);

// Basic Drizzle operations
await forgeSQL.insert(Users).values(userData);
await forgeSQL.update(Users).set(updateData).where(eq(Users.id, 1));

// Direct Drizzle access
const db = forgeSQL.getDrizzleQueryBuilder();
const users = await db.select().from(users);

// Using new methods for enhanced functionality
const usersFrom = await forgeSQL.selectFrom(users).where(eq(users.active, true));

const usersDistinct = await forgeSQL.selectDistinctFrom(users).where(eq(users.active, true));

// Raw SQL execution
const rawUsers = await forgeSQL.execute("SELECT * FROM users WHERE active = ?", [true]);

// Raw SQL with execution metadata and performance monitoring
const usersWithMetadata = await forgeSQL.executeWithMetadata(
  async () => {
    const users = await forgeSQL.selectFrom(usersTable);
    const orders = await forgeSQL
      .selectFrom(ordersTable)
      .where(eq(ordersTable.userId, usersTable.id));
    return { users, orders };
  },
  (totalDbExecutionTime, totalResponseSize, printQueriesWithPlan) => {
    const threshold = 500; // ms baseline for this resolver

    if (totalDbExecutionTime > threshold * 1.5) {
      console.warn(`[Performance Warning] Resolver exceeded DB time: ${totalDbExecutionTime} ms`);
      await printQueriesWithPlan(); // Analyze and print query execution plans
    } else if (totalDbExecutionTime > threshold) {
      console.debug(`[Performance Debug] High DB time: ${totalDbExecutionTime} ms`);
    }

    console.log(`DB response size: ${totalResponseSize} bytes`);
  },
  {
    // Optional: Configure query plan printing
    mode: "TopSlowest", // Print top slowest queries (default)
    topQueries: 2, // Print top 2 slowest queries
  },
);

// DDL operations for schema modifications
await forgeSQL.executeDDL(`
  CREATE TABLE users (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE
  )
`);

// Execute regular SQL queries in DDL context for performance monitoring
await forgeSQL.executeDDLActions(async () => {
  // Execute regular SQL queries in DDL context for monitoring
  const slowQueries = await forgeSQL.execute(`
    SELECT * FROM INFORMATION_SCHEMA.STATEMENTS_SUMMARY 
    WHERE AVG_LATENCY > 1000000
  `);

  // Execute complex analysis queries in DDL context
  const performanceData = await forgeSQL.execute(`
    SELECT * FROM INFORMATION_SCHEMA.CLUSTER_STATEMENTS_SUMMARY_HISTORY
    WHERE SUMMARY_END_TIME > DATE_SUB(NOW(), INTERVAL 1 HOUR)
  `);

  return { slowQueries, performanceData };
});

// Common Table Expressions (CTEs)
const userStats = await forgeSQL
  .with(
    forgeSQL.selectFrom(users).where(eq(users.active, true)).as("activeUsers"),
    forgeSQL.selectFrom(orders).where(eq(orders.status, "completed")).as("completedOrders"),
  )
  .select({
    totalActiveUsers: sql`COUNT(au.id)`,
    totalCompletedOrders: sql`COUNT(co.id)`,
  })
  .from(sql`activeUsers au`)
  .leftJoin(sql`completedOrders co`, eq(sql`au.id`, sql`co.userId`));

// Global cache, cache eviction, and Rovo: see forge-sql-orm-extra/README.md
```

This approach gives you direct access to all Drizzle ORM features while still using the @forge/sql backend with optimistic locking and local caching. For KVS global cache and Rovo, use [forge-sql-orm-extra](forge-sql-orm-extra/README.md).

## Direct Drizzle Usage with Custom Driver

If you prefer to use Drizzle ORM directly without the additional features of Forge-SQL-ORM (like optimistic locking), you can use the custom driver:

```typescript
import { drizzle } from "drizzle-orm/mysql-proxy";
import { forgeDriver, patchDbWithSelectAliased } from "forge-sql-orm";

// Initialize drizzle with the custom driver and patch it for aliased selects
const db = patchDbWithSelectAliased(drizzle(forgeDriver));

// Use drizzle directly
const users = await db.select().from(users);
const users = await db.selectAliased(getTableColumns(users)).from(users);
const users = await db.selectAliasedDistinct(getTableColumns(users)).from(users);
await db.insert(users)...;
await db.update(users)...;
await db.delete(users)...;
// Using new methods with direct drizzle
const usersFrom = await forgeSQL.selectFrom(users)
  .where(eq(users.active, true));

const usersDistinct = await forgeSQL.selectDistinctFrom(users)
  .where(eq(users.active, true));

// Raw SQL execution
const rawUsers = await forgeSQL.execute(
  "SELECT * FROM users WHERE active = ?",
  [true]
);

// Raw SQL with execution metadata and performance monitoring
const usersWithMetadata = await forgeSQL.executeWithMetadata(
  async () => {
    const users = await forgeSQL.selectFrom(usersTable);
    const orders = await forgeSQL.selectFrom(ordersTable).where(eq(ordersTable.userId, usersTable.id));
    return { users, orders };
  },
  (totalDbExecutionTime, totalResponseSize, printQueriesWithPlan) => {
    const threshold = 500; // ms baseline for this resolver

    if (totalDbExecutionTime > threshold * 1.5) {
      console.warn(`[Performance Warning] Resolver exceeded DB time: ${totalDbExecutionTime} ms`);
      await printQueriesWithPlan(); // Analyze and print query execution plans
    } else if (totalDbExecutionTime > threshold) {
      console.debug(`[Performance Debug] High DB time: ${totalDbExecutionTime} ms`);
    }

    console.log(`DB response size: ${totalResponseSize} bytes`);
  },
  {
    // Optional: Configure query plan printing
    mode: 'TopSlowest', // Print top slowest queries (default)
    topQueries: 1, // Print top slowest query
  },
);
```

## Step-by-Step Migration Workflow

1. **Install CLI and setup scripts**

   ```bash
   npm install forge-sql-orm-cli -D
   npm pkg set scripts.models:create="forge-sql-orm-cli generate:model --output src/entities --saveEnv"
   npm pkg set scripts.migration:create="forge-sql-orm-cli migrations:create --force --output src/migration --entitiesPath src/entities"
   npm pkg set scripts.migration:update="forge-sql-orm-cli migrations:update --entitiesPath src/entities --output src/migration"
   npm pkg set scripts.schema:create="forge-sql-orm-cli schema:create --entitiesPath src/entities"
   ```

   _(This is done only once when setting up the project)_

2. **Generate initial schema from an existing database**

   ```sh
   npm run models:create
   ```

   _(This will prompt for database credentials on first run and save them to `.env` file)_

3. **Create the first migration**

   ```sh
   npm run migration:create
   ```

   _(This initializes the database migration structure, also done once)_

4. **Deploy to Forge and verify that migrations work**
   - Deploy your **Forge app** with migrations.
   - Run migrations using a **Forge web trigger** or **Forge scheduler**.

5. **Modify the database (e.g., add a new column, index, etc.)**
   - Use **DbSchema** or manually alter the database schema.

6. **Update the migration**

   ```sh
   npm run migration:update
   ```

   - ⚠️ **Do NOT update schema before this step!**
   - If schema is updated first, the migration will be empty!

7. **Deploy to Forge and verify that the migration runs without issues**
   - Run the updated migration on Forge.

8. **Update the schema**

   ```sh
   npm run models:create
   ```

9. **Repeat steps 5-8 as needed**

**⚠️ WARNING:**

- **Do NOT swap steps 7 and 5!** If you update schema before generating a migration, the migration will be empty!
- Always generate the **migration first**, then update the **schema**.

## Drop Migrations

The Drop Migrations feature allows you to completely reset your database schema in Atlassian Forge SQL. This is useful when you need to:

- Start fresh with a new schema
- Reset all tables and their data
- Clear migration history
- Ensure your local schema matches the deployed database

### Important Requirements

Before using Drop Migrations, ensure that:

1. Your local schema exactly matches the current database schema deployed in Atlassian Forge SQL
2. You have a backup of your data if needed
3. You understand that this operation will delete all tables and data

### Usage

1. First, ensure your local schema matches the deployed database:

   ```bash
   npm run models:create
   ```

2. Generate the drop migration:

   ```bash
   npm run migration:drop
   ```

   _(Add this script to your package.json: `npm pkg set scripts.migration:drop="forge-sql-orm-cli migrations:drop --entitiesPath src/entities --output src/migration"`)_

3. Deploy and run the migration in your Forge app:

   ```js
   import migrationRunner from "./database/migration";
   import { MigrationRunner } from "@forge/sql/out/migration";

   const runner = new MigrationRunner();
   await migrationRunner(runner);
   await runner.run();
   ```

4. After dropping all tables, you can create a new migration to recreate the schema:
   ```bash
   npm run migration:create
   ```
   The `--force` parameter is already included in the script to allow creating migrations after dropping all tables.

### Example Migration Output

The generated drop migration will look like this:

```js
import { MigrationRunner } from "@forge/sql/out/migration";

export default (migrationRunner: MigrationRunner): MigrationRunner => {
    return migrationRunner
        .enqueue("v1_MIGRATION0", "ALTER TABLE `orders` DROP FOREIGN KEY `fk_orders_users`")
        .enqueue("v1_MIGRATION1", "DROP INDEX `idx_orders_user_id` ON `orders`")
        .enqueue("v1_MIGRATION2", "DROP TABLE IF EXISTS `orders`")
        .enqueue("v1_MIGRATION3", "DROP TABLE IF EXISTS `users`")
        .enqueue("MIGRATION_V1_1234567890", "DELETE FROM __migrations");
};
```

### ⚠️ Important Notes

- This operation is **irreversible** - all data will be lost
- Make sure your local schema is up-to-date with the deployed database
- Consider backing up your data before running drop migrations
- The migration will clear the `__migrations` table to allow for fresh migration history
- Drop operations are performed in the correct order: first foreign keys, then indexes, then tables

---

## Date and Time Types

When working with date and time fields in your models, you should use the custom types provided by Forge-SQL-ORM to ensure proper handling of date/time values. This is necessary because Forge SQL has specific format requirements for date/time values:

| Date type | Required Format                | Example                    |
| --------- | ------------------------------ | -------------------------- |
| DATE      | YYYY-MM-DD                     | 2024-09-19                 |
| TIME      | HH:MM:SS[.fraction]            | 06:40:34                   |
| TIMESTAMP | YYYY-MM-DD HH:MM:SS[.fraction] | 2024-09-19 06:40:34.999999 |

```typescript
// ❌ Don't use standard Drizzle date/time types
export const testEntityTimeStampVersion = mysqlTable("test_entity", {
  id: int("id").primaryKey().autoincrement(),
  time_stamp: timestamp("times_tamp").notNull(),
  date_time: datetime("date_time").notNull(),
  time: time("time").notNull(),
  date: date("date").notNull(),
});

// ✅ Use Forge-SQL-ORM custom types instead
import {
  forgeDateTimeString,
  forgeDateString,
  forgeTimestampString,
  forgeTimeString,
} from "forge-sql-orm";

export const testEntityTimeStampVersion = mysqlTable("test_entity", {
  id: int("id").primaryKey().autoincrement(),
  time_stamp: forgeTimestampString("times_tamp").notNull(),
  date_time: forgeDateTimeString("date_time").notNull(),
  time: forgeTimeString("time").notNull(),
  date: forgeDateString("date").notNull(),
});
```

### Why Custom Types?

The custom types in Forge-SQL-ORM handle the conversion between JavaScript Date objects and Forge SQL's required string formats automatically. Without these custom types, you would need to manually format dates like this:

```typescript
// Without custom types, you'd need to do this manually:
const date = moment().format("YYYY-MM-DD");
const time = moment().format("HH:mm:ss.SSS");
const timestamp = moment().format("YYYY-MM-DDTHH:mm:ss.SSS");
```

Our custom types provide:

- Automatic conversion between JavaScript Date objects and Forge SQL's required string formats
- Consistent date/time handling across your application
- Type safety for date/time fields
- Proper handling of timezone conversions
- Support for all Forge SQL date/time types (datetime, timestamp, date, time)

### Available Custom Types

- `forgeDateTimeString` - For datetime fields (YYYY-MM-DD HH:MM:SS[.fraction])
- `forgeTimestampString` - For timestamp fields (YYYY-MM-DD HH:MM:SS[.fraction])
- `forgeDateString` - For date fields (YYYY-MM-DD)
- `forgeTimeString` - For time fields (HH:MM:SS[.fraction])

Each type ensures that the data is properly formatted according to Forge SQL's requirements while providing a clean, type-safe interface for your application code.

---

## TiDB vector types (AI / similarity search)

Forge SQL ORM exposes **TiDB-compatible** `VECTOR` columns and vector functions so you can store **embeddings** and run **similarity search** in SQL—typical for **AI** features (semantic search, RAG-style retrieval) built on Forge SQL.

### Schema: `vectorTiDBType`

Use the Drizzle custom column type from `forge-sql-orm`. With a fixed dimension, DDL becomes `VECTOR(n)`; without it, `VECTOR`.

```typescript
import { int, mysqlTable, primaryKey, text } from "drizzle-orm/mysql-core";
import { vectorTiDBType } from "forge-sql-orm";

export const documents = mysqlTable(
  "documents",
  {
    id: int().autoincrement().notNull(),
    body: text().notNull(),
    embedding: vectorTiDBType("embedding", { dimension: 1536 }).notNull(),
  },
  (table) => [primaryKey({ columns: [table.id], name: "id" })],
);
```

Values in application code are **`number[]`**; the driver maps them to the textual form TiDB expects.

### Queries: distance helpers

Helpers build the same expressions as TiDB’s vector functions (e.g. `VEC_COSINE_DISTANCE`). Use them inside `forgeSQL.select()`, `where()`, `orderBy()`, etc.

```typescript
import { asc, sql } from "drizzle-orm";
import { vecCosineDistance } from "forge-sql-orm";
import { documents } from "./schema";

const queryVector = [0.1, 0.2, 0.3];

const distanceAlias = sql.raw("distance");
const distance = sql<number>`${vecCosineDistance(documents.embedding, queryVector)} AS \`${distanceAlias}\``;

const nearest = await forgeSQL
  .select({
    id: documents.id,
    body: documents.body,
    distance,
  })
  .from(documents)
  .orderBy(asc(distanceAlias))
  .limit(10);
```

Also available (see `src/core/VectorTiDB.ts`): `vecFromText`, `vecAsText`, `vecDims`, `vecL2Norm`, `vecL2Distance`, `vecL1Distance`, `vecNegativeInnerProduct`.

### Example app

See **[examples/forge-sql-orm-example-vector](examples/forge-sql-orm-example-vector)** for a full Forge app (migrations, resolvers, UI) aligned with [Get Started with Vector Search via SQL](https://docs.pingcap.com/tidb/stable/vector-search-get-started-using-sql).

For **semantic search** with learned embeddings, use **[examples/forge-sql-orm-example-ai](examples/forge-sql-orm-example-ai)** (embeddings in Custom UI) or **[examples/forge-sql-orm-example-backend-ai](examples/forge-sql-orm-example-backend-ai)** (embeddings in Forge resolvers via `ai-lib`).

## Custom types for binary and UUID data

Forge SQL ORM provides custom types from `src/core/customTypes.ts` for compact binary storage and UUID primary keys.

| Type              | SQL type        | Use case                                                                                                  |
| ----------------- | --------------- | --------------------------------------------------------------------------------------------------------- |
| `uuidBinary`      | `VARBINARY(16)` | Store UUID primary keys in compact binary form; writes use `UUID_TO_BIN(...)`, reads return UUID strings. |
| `forgeVarBinary`  | `VARBINARY(n)`  | Variable-length binary payloads (e.g., small encrypted payloads or protocol bytes).                       |
| `forgeBinary`     | `BINARY(n)`     | Fixed-length binary values (e.g., hashes, signatures, fixed-size binary tokens).                          |
| `forgeBLOB`       | `BLOB`          | General-purpose binary files/content.                                                                     |
| `forgeTinyBLOB`   | `TINYBLOB`      | Small binary payloads.                                                                                    |
| `forgeMediumBLOB` | `MEDIUMBLOB`    | Medium-size binary payloads.                                                                              |

Binary custom types encode data to Base64 in JS and write through `FROM_BASE64(...)`, which keeps SQL safe and works well with Forge SQL payload constraints.

### Example (with BLOB)

```typescript
import { int, mysqlTable, text } from "drizzle-orm/mysql-core";
import { forgeBLOB, uuidBinary } from "forge-sql-orm";

export const files = mysqlTable("files", {
  id: uuidBinary("id").primaryKey().notNull(),
  name: text("name").notNull(),
  content: forgeBLOB("content").notNull(),
});

await forgeSQL.insert(files).values({
  id: "00112233-4455-6677-8899-aabbccddeeff",
  name: "avatar.png",
  content: Buffer.from([137, 80, 78, 71]), // PNG signature bytes (example)
});
```

## TiDB SQL function helpers

`forge-sql-orm` also includes ready-to-use TiDB/MySQL SQL helper modules in `src/core/functions`. They return Drizzle `sql` fragments, so you can compose them inside `select`, `where`, `orderBy`, `groupBy`, computed columns, and other query builders.

| Module              | What it does                                                                                                                          |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| `VectorTiDB`        | Vector search helpers such as cosine distance, L1/L2 distance, dimensions, and vector text conversion.                                |
| `StringTiDB`        | String manipulation helpers such as concatenation, substring, replace, trim, case conversion, and pattern-oriented string operations. |
| `NumericTiDB`       | Arithmetic and numeric helpers such as addition/subtraction operators, rounding, powers, logarithms, trigonometry, and random values. |
| `DateTiDB`          | Date/time helpers such as `DATE_ADD`, `DATE_SUB`, formatting, extraction, timestamp conversion, and calendar calculations.            |
| `BitTiDB`           | Bitwise operators and bit functions such as AND/OR/XOR, shifts, negation, and bit counting.                                           |
| `CastTiDB`          | SQL casting helpers for `CAST`, `CONVERT`, binary conversion, and reusable cast target builders.                                      |
| `EncryptTiDB`       | Encryption, hashing, compression, and password-strength helpers such as AES, SHA, MD5, and compression functions.                     |
| `InformationTiDB`   | Metadata helpers such as current database/user, connection id, version, row count, and TiDB environment info.                         |
| `JsonTiDB`          | JSON creation, extraction, search, mutation, validation, schema checking, and storage inspection helpers.                             |
| `AggregateTiDB`     | Extra aggregate helpers not already covered by Drizzle, such as percentile/approximation and specialized aggregate expressions.       |
| `WindowTiDB`        | Window function call helpers such as `rowNumber`, `rank`, `denseRank`, `lag`, `lead`, and `firstValue` for use with `OVER (...)`.     |
| `SequenceTiDB`      | Sequence helpers such as `NEXTVAL`, `LASTVAL`, and `SETVAL` for working with TiDB sequences.                                          |
| `UtilityTiDB`       | Small utility helpers such as byte and nanosecond formatting functions.                                                               |
| `MiscellaneousTiDB` | Miscellaneous helpers such as UUID/IP utilities, `sleep`, `default`, and compatibility helpers.                                       |
| `TiDBSpecificTiDB`  | TiDB-specific helpers such as TSO parsing, resource-group helpers, SQL digest helpers, MVCC inspection, and key encoding helpers.     |

### Example

```typescript
import { sql } from "drizzle-orm";
import { concat } from "forge-sql-orm";
import { users } from "./schema";

const rows = await forgeSQL
  .select({
    label: sql<string>`${concat(users.firstName, sql`' '`, users.lastName)}`,
  })
  .from(users);
```

In this example, `concat(...)` builds a safe SQL fragment that Drizzle can embed into the final query.

# Connection to ORM

```js
import ForgeSQL from "forge-sql-orm";

const forgeSQL = new ForgeSQL();
```

or

```typescript
import { drizzle } from "drizzle-orm/mysql-proxy";
import { forgeDriver } from "forge-sql-orm";

// Initialize drizzle with the custom driver
const db = drizzle(forgeDriver);

// Use drizzle directly
const users = await db.select().from(users);
```

## Fetch Data

### Basic Fetch Operations

```js
// Using forgeSQL.select()
const user = await forgeSQL.select({ user: users }).from(users);

// Using forgeSQL.selectDistinct()
const user = await forgeSQL.selectDistinct({ user: users }).from(users);

// Using forgeSQL.selectFrom() - Select all columns with field aliasing
const user = await forgeSQL.selectFrom(users).where(eq(users.id, 1));

// Using forgeSQL.selectDistinctFrom() - Select distinct all columns with field aliasing
const user = await forgeSQL.selectDistinctFrom(users).where(eq(users.id, 1));

// Using forgeSQL.execute() - Execute raw SQL with local caching
const user = await forgeSQL.execute("SELECT * FROM users WHERE id = ?", [1]);

// Using forgeSQL.getDrizzleQueryBuilder()
const user = await forgeSQL.getDrizzleQueryBuilder().select().from(Users).where(eq(Users.id, 1));

// OR using direct drizzle with custom driver
const db = drizzle(forgeDriver);
const user = await db.select().from(Users).where(eq(Users.id, 1));
// Returns: { id: 1, name: "John Doe" }

// Using executeQueryOnlyOne for single result with error handling
const user = await forgeSQL
  .fetch()
  .executeQueryOnlyOne(
    forgeSQL.getDrizzleQueryBuilder().select().from(Users).where(eq(Users.id, 1)),
  );
// Returns: { id: 1, name: "John Doe" }
// Throws error if multiple records found
// Returns undefined if no records found

// Using with aliases
// With forgeSQL
const usersAlias = alias(Users, "u");
const result = await forgeSQL
  .getDrizzleQueryBuilder()
  .select({
    userId: sql < string > `${usersAlias.id} as \`userId\``,
    userName: sql < string > `${usersAlias.name} as \`userName\``,
  })
  .from(usersAlias);

// OR with direct drizzle
const db = drizzle(forgeDriver);
const result = await db
  .select({
    userId: sql < string > `${usersAlias.id} as \`userId\``,
    userName: sql < string > `${usersAlias.name} as \`userName\``,
  })
  .from(usersAlias);
// Returns: { userId: 1, userName: "John Doe" }
```

### Complex Queries

```js
// Using joins with automatic field name collision prevention
// With forgeSQL
const orderWithUser = await forgeSQL
  .select({ user: users, order: orders })
  .from(orders)
  .innerJoin(users, eq(orders.userId, users.id));

// Using new selectFrom methods with joins
const orderWithUser = await forgeSQL
  .selectFrom(orders)
  .innerJoin(users, eq(orders.userId, users.id))
  .where(eq(orders.id, 1));

// Using with() for Common Table Expressions (CTEs)
const userStats = await forgeSQL
  .with(
    forgeSQL.selectFrom(users).where(eq(users.active, true)).as("activeUsers"),
    forgeSQL.selectFrom(orders).where(eq(orders.status, "completed")).as("completedOrders"),
  )
  .select({
    totalActiveUsers: sql`COUNT(au.id)`,
    totalCompletedOrders: sql`COUNT(co.id)`,
  })
  .from(sql`activeUsers au`)
  .leftJoin(sql`completedOrders co`, eq(sql`au.id`, sql`co.userId`));

// OR with direct drizzle
const db = patchDbWithSelectAliased(drizzle(forgeDriver));
const orderWithUser = await db
  .selectAliased({ user: users, order: orders })
  .from(orders)
  .innerJoin(users, eq(orders.userId, users.id));
// Returns: {
//   user_id: 1,
//   user_name: "John Doe",
//   order_id: 1,
//   order_product: "Product 1"
// }

// Using distinct with aliases
const uniqueUsers = await db.selectAliasedDistinct({ user: users }).from(users);
// Returns unique users with aliased fields

// Using executeQueryOnlyOne for unique results
const userStats = await forgeSQL.fetch().executeQueryOnlyOne(
  forgeSQL
    .getDrizzleQueryBuilder()
    .select({
      totalUsers: sql`COUNT(*) as \`totalUsers\``,
      uniqueNames: sql`COUNT(DISTINCT name) as \`uniqueNames\``,
    })
    .from(Users),
);
// Returns: { totalUsers: 100, uniqueNames: 80 }
// Throws error if multiple records found
```

### Raw SQL Queries

```js
// Using executeRawSQL for direct SQL queries
const users = await forgeSQL
  .fetch()
  .executeRawSQL<Users>("SELECT * FROM users");

// Using execute() for raw SQL with local caching
const users = await forgeSQL
  .execute("SELECT * FROM users WHERE active = ?", [true]);

// Using executeWithMetadata() for capturing execution metrics and performance monitoring
const usersWithMetadata = await forgeSQL.executeWithMetadata(
  async () => {
    const users = await forgeSQL.selectFrom(usersTable);
    const orders = await forgeSQL.selectFrom(ordersTable).where(eq(ordersTable.userId, usersTable.id));
    return { users, orders };
  },
  (totalDbExecutionTime, totalResponseSize, printQueriesWithPlan) => {
    const threshold = 500; // ms baseline for this resolver

    if (totalDbExecutionTime > threshold * 1.5) {
      console.warn(`[Performance Warning] Resolver exceeded DB time: ${totalDbExecutionTime} ms`);
      await printQueriesWithPlan(); // Analyze and print query execution plans
    } else if (totalDbExecutionTime > threshold) {
      console.debug(`[Performance Debug] High DB time: ${totalDbExecutionTime} ms`);
    }

    console.log(`DB response size: ${totalResponseSize} bytes`);
  },
  {
    // Optional: Configure query plan printing
    mode: 'TopSlowest', // Print top slowest queries (default)
    topQueries: 1, // Print top slowest query
  },
);

// Using executeDDL() for DDL operations (CREATE, ALTER, DROP, etc.)
await forgeSQL.executeDDL(`
  CREATE TABLE users (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE
  )
`);

await forgeSQL.executeDDL(sql`
  ALTER TABLE users
  ADD COLUMN created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
`);

await forgeSQL.executeDDL("DROP TABLE IF EXISTS old_users");

// Using executeDDLActions() for executing regular SQL queries in DDL context
// This method executes a series of actions within a DDL operation context for monitoring
await forgeSQL.executeDDLActions(async () => {
  // Execute regular SQL queries in DDL context for performance monitoring
  const slowQueries = await forgeSQL.execute(`
    SELECT * FROM INFORMATION_SCHEMA.STATEMENTS_SUMMARY
    WHERE AVG_LATENCY > 1000000
  `);

  // Execute complex analysis queries in DDL context
  const performanceData = await forgeSQL.execute(`
    SELECT * FROM INFORMATION_SCHEMA.CLUSTER_STATEMENTS_SUMMARY_HISTORY
    WHERE SUMMARY_END_TIME > DATE_SUB(NOW(), INTERVAL 1 HOUR)
  `);

  return { slowQueries, performanceData };
});

// Using execute() with complex queries
const userStats = await forgeSQL
  .execute(`
    SELECT
      u.id,
      u.name,
      COUNT(o.id) as order_count,
      SUM(o.amount) as total_amount
    FROM users u
    LEFT JOIN orders o ON u.id = o.user_id
    WHERE u.active = ?
    GROUP BY u.id, u.name
  `, [true]);
```

## Modify Operations

Forge-SQL-ORM provides multiple approaches for Modify operations, each with different characteristics:

### 1. Basic Drizzle Operations

```js
await forgeSQL.insert(Users).values({ id: 1, name: "Smith" });
await forgeSQL.update(Users).set({ name: "Smith Updated" }).where(eq(Users.id, 1));
await forgeSQL.delete(Users).where(eq(Users.id, 1));
```

> Cache-aware variants (`insertAndEvictCache`, `modifyWithVersioningAndEvictCache`, `executeWithCacheContext`, …) are in [**forge-sql-orm-extra**](forge-sql-orm-extra/README.md).

### 2. Versioned Operations (recommended)

```js
// Insert with versioning only (no cache management)
const userId = await forgeSQL.modifyWithVersioning().insert(Users, [{ id: 1, name: "Smith" }]);

// Update with versioning only
await forgeSQL.modifyWithVersioning().updateById({ id: 1, name: "Smith Updated" }, Users);

// Delete with versioning only
await forgeSQL.modifyWithVersioning().deleteById(1, Users);
```

### 5. Legacy Modify Operations (Removed in 2.1.x)

⚠️ **BREAKING CHANGE**: The `crud()` and `modify()` methods have been completely removed in version 2.1.x.

```js
// ❌ These methods no longer exist in 2.1.x
// const userId = await forgeSQL.crud().insert(Users, [{ id: 1, name: "Smith" }]);
// await forgeSQL.crud().updateById({ id: 1, name: "Smith Updated" }, Users);
// await forgeSQL.crud().deleteById(1, Users);

// ✅ Use the new methods instead
const userId = await forgeSQL.modifyWithVersioning().insert(Users, [{ id: 1, name: "Smith" }]);
await forgeSQL.modifyWithVersioning().updateById({ id: 1, name: "Smith Updated" }, Users);
await forgeSQL.modifyWithVersioning().deleteById(1, Users);
```

### Advanced Operations

```js
// Insert with sequence (nextVal)
import { nextVal } from "forge-sql-orm";

const user = {
  id: nextVal("user_id_seq"),
  name: "user test",
  organization_id: 1,
};
const id = await forgeSQL.modifyWithVersioning().insert(appUser, [user]);

// Update with custom WHERE condition
await forgeSQL
  .modifyWithVersioning()
  .updateFields({ name: "New Name", age: 35 }, Users, eq(Users.email, "smith@example.com"));

// Insert with duplicate handling
await forgeSQL.modifyWithVersioning().insert(
  Users,
  [
    { id: 4, name: "Smith" },
    { id: 4, name: "Vasyl" },
  ],
  true,
);
```

## SQL Utilities

### formatLimitOffset

The `formatLimitOffset` utility function is used to safely insert numeric values directly into SQL queries for LIMIT and OFFSET clauses. This is necessary because Atlassian Forge SQL doesn't support parameterized queries for these clauses.

```typescript
import { formatLimitOffset } from "forge-sql-orm";

// Example usage in a query
const result = await forgeSQL
  .select()
  .from(orderItem)
  .orderBy(asc(orderItem.createdAt))
  .limit(formatLimitOffset(10))
  .offset(formatLimitOffset(350000));

// The generated SQL will be:
// SELECT * FROM order_item
// ORDER BY created_at ASC
// LIMIT 10
// OFFSET 350000
```

**Important Notes:**

- The function performs type checking to prevent SQL injection
- It throws an error if the input is not a valid number
- Use this function instead of direct parameter binding for LIMIT and OFFSET clauses
- The function is specifically designed to work with Atlassian Forge SQL's limitations

**Security Considerations:**

- The function includes validation to ensure the input is a valid number
- This prevents SQL injection by ensuring only numeric values are inserted
- Always use this function instead of string concatenation for LIMIT and OFFSET values

## Optimistic Locking

[↑ Back to Top](#table-of-contents)

Optimistic locking is a concurrency control mechanism that prevents data conflicts when multiple transactions attempt to update the same record concurrently. Instead of using locks, this technique relies on a version field in your entity models.

### Supported Version Field Types

- `datetime` - Timestamp-based versioning
- `timestamp` - Timestamp-based versioning
- `integer` - Numeric version increment
- `decimal` - Numeric version increment

### Configuration

```typescript
const options = {
  additionalMetadata: {
    users: {
      tableName: "users",
      versionField: {
        fieldName: "updatedAt",
      },
    },
  },
};

const forgeSQL = new ForgeSQL(options);
```

### Example Usage

```typescript
// The version field will be automatically handled
await forgeSQL.modifyWithVersioning().updateById(
  {
    id: 1,
    name: "Updated Name",
    updatedAt: new Date(), // Will be automatically set if not provided
  },
  Users,
);
```

With global cache, use `modifyWithVersioningAndEvictCache()` from [**forge-sql-orm-extra**](forge-sql-orm-extra/README.md).

## ForgeSqlOrmOptions

The `ForgeSqlOrmOptions` object allows customization of ORM behavior (core). Global cache options (`cacheEntityName`, `cacheTTL`, …) are documented in [**forge-sql-orm-extra**](forge-sql-orm-extra/README.md#forgesqlormoptions-cache).

| Option                     | Type      | Description                                                                                                                                                                                                                                                                    |
| -------------------------- | --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `logRawSqlQuery`           | `boolean` | Enables logging of raw SQL queries in the Atlassian Forge Developer Console. Useful for debugging and monitoring. Defaults to `false`.                                                                                                                                         |
| `disableOptimisticLocking` | `boolean` | Disables optimistic locking. When set to `true`, no additional condition (e.g., a version check) is added during record updates, which can improve performance. However, this may lead to conflicts when multiple transactions attempt to update the same record concurrently. |
| `additionalMetadata`       | `object`  | Allows adding custom metadata to all entities. This is useful for tracking common fields across all tables (e.g., `createdAt`, `updatedAt`, `createdBy`, etc.). The metadata will be automatically added to all generated entities.                                            |
| `hints`                    | `object`  | SQL hints for query optimization. Optional configuration for advanced query tuning.                                                                                                                                                                                            |

## CLI Commands

Forge-SQL-ORM provides a command-line interface for managing database migrations and model generation.

**📖 [Full CLI Documentation](forge-sql-orm-cli/README.md)** - Complete CLI reference with all commands and options.

### Quick CLI Reference

The CLI tool provides the following main commands:

- `generate:model` - Generate Drizzle ORM models from your database schema
- `migrations:create` - Create new migration files
- `migrations:update` - Update existing migrations with schema changes
- `migrations:drop` - Create migration to drop tables
- `schema:create` - Apply schema directly from Drizzle models to database

### Installation

The CLI tool must be installed as a local dependency and used via npm scripts in your `package.json`:

```bash
npm install forge-sql-orm-cli -D
```

### Setup npm Scripts

Add the following scripts to your `package.json`:

```bash
npm pkg set scripts.models:create="forge-sql-orm-cli generate:model --output src/entities --saveEnv"
npm pkg set scripts.migration:create="forge-sql-orm-cli migrations:create --force --output src/migration --entitiesPath src/entities"
npm pkg set scripts.migration:update="forge-sql-orm-cli migrations:update --entitiesPath src/entities --output src/migration"
npm pkg set scripts.schema:create="forge-sql-orm-cli schema:create --entitiesPath src/entities"
```

### Basic Usage

After setting up the scripts, use them via npm:

```bash
# Generate models from database
npm run models:create

# Create migration
npm run migration:create

# Update migration
npm run migration:update

# Apply schema directly from Drizzle models
npm run schema:create
```

**Note:** The CLI tool is designed to work as a local dependency through npm scripts. Configuration is saved to `.env` file using the `--saveEnv` flag, so you only need to provide database credentials once.

For detailed information about all available options and advanced usage, see the [Full CLI Documentation](forge-sql-orm-cli/README.md).

## Web Triggers for Migrations

Forge-SQL-ORM provides web triggers for managing database migrations in Atlassian Forge:

### 1. Apply Migrations Trigger

This trigger allows you to apply database migrations through a web endpoint. It's useful for:

- Manually triggering migrations
- Running migrations as part of your deployment process
- Testing migrations in different environments

```typescript
// Example usage in your Forge app
import { applySchemaMigrations } from "forge-sql-orm";
import migration from "./migration";

export const handlerMigration = async () => {
  return applySchemaMigrations(migration);
};
```

Configure in `manifest.yml`:

```yaml
webtrigger:
  - key: invoke-schema-migration
    function: runSchemaMigration
    security:
      egress:
        allowDataEgress: false
        allowedResponses:
          - statusCode: 200
            body: '{"body": "Migrations successfully executed"}'
sql:
  - key: main
    engine: mysql
function:
  - key: runSchemaMigration
    handler: index.handlerMigration
```

### 2. Drop Migrations Trigger

⚠️ **WARNING**: This trigger will permanently delete all data in the specified tables and clear the migrations history. This operation cannot be undone!

This trigger allows you to completely reset your database schema. It's useful for:

- Development environments where you need to start fresh
- Testing scenarios requiring a clean database
- Resetting the database before applying new migrations

**Important**: The trigger will drop all tables including migration.

```typescript
// Example usage in your Forge app
import { dropSchemaMigrations } from "forge-sql-orm";

export const dropMigrations = () => {
  return dropSchemaMigrations();
};
```

Configure in `manifest.yml`:

```yaml
webtrigger:
  - key: drop-schema-migration
    function: dropMigrations
sql:
  - key: main
    engine: mysql
function:
  - key: dropMigrations
    handler: index.dropMigrations
```

### 3. Fetch Schema Trigger

⚠️ **DEVELOPMENT ONLY**: This trigger is designed for development environments only and should not be used in production.

This trigger retrieves the current database schema from Atlassian Forge SQL and generates SQL statements that can be used to recreate the database structure. It's useful for:

- Development environment setup
- Schema documentation
- Database structure verification
- Creating backup scripts

**Security Considerations**:

- This trigger exposes your database structure
- It temporarily disables foreign key checks
- It may expose sensitive table names and structures
- Should only be used in development environments

```typescript
// Example usage in your Forge app
import { fetchSchemaWebTrigger } from "forge-sql-orm";

export const fetchSchema = async () => {
  return fetchSchemaWebTrigger();
};
```

Configure in `manifest.yml`:

```yaml
webtrigger:
  - key: fetch-schema
    function: fetchSchema
sql:
  - key: main
    engine: mysql
function:
  - key: fetchSchema
    handler: index.fetchSchema
```

The response will contain SQL statements like:

```sql
SET foreign_key_checks = 0;
CREATE TABLE IF NOT EXISTS users (...);
CREATE TABLE IF NOT EXISTS orders (...);
SET foreign_key_checks = 1;
```

### 4. Clear Cache Scheduler Trigger

Requires [**forge-sql-orm-extra**](forge-sql-orm-extra/README.md) and `@forge/kvs`. See [Setting Up Caching](forge-sql-orm-extra/README.md#setting-up-caching-with-forgekvs) for `clearCacheSchedulerTrigger`, manifest configuration, and when to enable the scheduler.

### 5. Slow Query Scheduler Trigger

This scheduler trigger automatically monitors and analyzes slow queries on a scheduled basis. For detailed information, see the [Slow Query Monitoring](#slow-query-monitoring) section.

**Quick Setup:**

```typescript
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

> **💡 Note**: For complete documentation, examples, and configuration options, see the [Slow Query Monitoring](#slow-query-monitoring) section.

### Important Notes

**Security Considerations**:

- The drop migrations trigger should be restricted to development environments
- The fetch schema trigger should only be used in development
- Consider implementing additional authentication for these endpoints

**Best Practices**:

- Always backup your data before using the drop migrations trigger
- Test migrations in a development environment first
- Use these triggers as part of your deployment pipeline
- Monitor the execution logs in the Forge Developer Console

## Query Analysis and Performance Optimization

[↑ Back to Top](#table-of-contents)

Forge-SQL-ORM provides comprehensive query analysis tools to help you optimize your database queries and identify performance bottlenecks.

### About Atlassian's Built-in Analysis Tools

Atlassian provides comprehensive query analysis tools in the development console, including:

- Basic query performance metrics
- Slow query tracking (queries over 500ms)
- Basic execution statistics
- Query history and patterns

Our analysis tools complement these built-in features by providing additional insights directly from TiDB's system schemas.

### Automatic Error Analysis

Forge-SQL-ORM automatically intercepts and analyzes critical query errors to help you diagnose performance issues. When a query fails due to **timeout** or **out-of-memory** errors, the library automatically:

1. **Detects the error type** (SQL_QUERY_TIMEOUT or Out of Memory)
2. **Logs detailed error information** to the Forge Developer Console
3. **Waits for system tables to populate** (200ms delay)
4. **Retrieves and logs the execution plan** for the failed query
5. **Provides performance metrics** including memory usage, execution time, and query details

This automatic analysis happens transparently - no additional code is required on your part.

#### Supported Error Types

- **SQL_QUERY_TIMEOUT**: Queries that exceed the execution time limit
- **Out of Memory (OOM)**: Queries that exceed the 16 MiB memory limit (errno: 8175)

#### Example Console Output

When a query fails, you'll see output like this in the Forge Developer Console:

```
❌ TIMEOUT detected - Query exceeded time limit
⏳ Waiting 200ms for CLUSTER_STATEMENTS_SUMMARY to populate...
📊 Analyzing query performance and execution plan...
⏱️  Query duration: 10500ms

SQL: SELECT * FROM users u INNER JOIN orders o ON u.id = o.user_id WHERE u.active = ? | Memory: 12.45 MB | Time: 10500.00 ms | stmtType: Select | Executions: 1
 Plan:
id task estRows operator info actRows execution info memory disk
Projection_7 root 1000.00 forge_38dd1c6156b94bb59c2c9a45582bbfc7.users.id, ... 1000 time:10.5s, loops:1 12.45 MB N/A
└─IndexHashJoin_14 root 1000.00 inner join, ... 1000 time:10.2s, loops:1 11.98 MB N/A
```

#### How It Works

The error analysis mechanism:

1. **Error Detection**: When a query fails, the driver proxy checks the error code/errno
2. **Error Logging**: Logs the specific error type to console.error
3. **Data Population Wait**: Waits 200ms for TiDB's `CLUSTER_STATEMENTS_SUMMARY` table to be populated with the failed query's metadata
4. **Query Analysis**: Automatically calls `printQueriesWithPlan()` to retrieve and display:
   - SQL query text
   - Memory consumption (average and max in MB)
   - Execution time (average in ms)
   - Statement type
   - Number of executions
   - Detailed execution plan

#### Benefits

- **Zero Configuration**: Works automatically - no setup required
- **Immediate Insights**: Get execution plans for failed queries instantly
- **Performance Debugging**: Identify bottlenecks without manual investigation
- **Development Console Integration**: All logs appear in Atlassian Forge Developer Console
- **No Code Changes**: Existing code automatically benefits from error analysis

> **💡 Tip**: The automatic error analysis only triggers for timeout and OOM errors. Other errors are logged normally without plan analysis.

### Resolver-Level Performance Monitoring

The `executeWithMetadata()` method provides resolver-level profiling with configurable query plan printing. It aggregates metrics across all database operations within a resolver and supports two modes for query plan analysis.

#### Basic Usage

```typescript
const result = await forgeSQL.executeWithMetadata(
  async () => {
    const users = await forgeSQL.selectFrom(usersTable);
    const orders = await forgeSQL
      .selectFrom(ordersTable)
      .where(eq(ordersTable.userId, usersTable.id));
    return { users, orders };
  },
  async (totalDbExecutionTime, totalResponseSize, printQueriesWithPlan) => {
    const threshold = 500; // ms baseline for this resolver

    if (totalDbExecutionTime > threshold * 1.5) {
      console.warn(`[Performance Warning] Resolver exceeded DB time: ${totalDbExecutionTime} ms`);
      await printQueriesWithPlan(); // Analyze and print query execution plans
    } else if (totalDbExecutionTime > threshold) {
      console.debug(`[Performance Debug] High DB time: ${totalDbExecutionTime} ms`);
    }

    console.log(`DB response size: ${totalResponseSize} bytes`);
  },
);
```

#### Query Plan Printing Options

The `printQueriesWithPlan` function supports two modes, configurable via the optional `options` parameter:

**1. TopSlowest Mode (default)**: Prints execution plans for the slowest queries from the current resolver invocation

```typescript
// Full configuration example
const result = await forgeSQL.executeWithMetadata(
  async () => {
    const users = await forgeSQL.selectFrom(usersTable);
    return users;
  },
  async (totalDbExecutionTime, totalResponseSize, printQueriesWithPlan) => {
    if (totalDbExecutionTime > 1000) {
      await printQueriesWithPlan(); // Will print top 3 slowest queries with execution plans
    }
  },
  {
    mode: "TopSlowest", // Print top slowest queries (default)
    topQueries: 3, // Number of top slowest queries to analyze (default: 1)
    showSlowestPlans: true, // Show execution plans (default: true)
  },
);

// Minimal configuration - only specify what you need
const result2 = await forgeSQL.executeWithMetadata(
  async () => {
    const users = await forgeSQL.selectFrom(usersTable);
    return users;
  },
  async (totalDbExecutionTime, totalResponseSize, printQueriesWithPlan) => {
    if (totalDbExecutionTime > 1000) {
      await printQueriesWithPlan(); // Will print top 3 slowest queries (all other options use defaults)
    }
  },
  {
    topQueries: 3, // Only specify topQueries, mode and showSlowestPlans use defaults
  },
);

// Disable execution plans - only show SQL and execution time
const result3 = await forgeSQL.executeWithMetadata(
  async () => {
    const users = await forgeSQL.selectFrom(usersTable);
    return users;
  },
  async (totalDbExecutionTime, totalResponseSize, printQueriesWithPlan) => {
    if (totalDbExecutionTime > 1000) {
      await printQueriesWithPlan(); // Will print SQL and time only, no execution plans
    }
  },
  {
    showSlowestPlans: false, // Disable execution plan printing
  },
);

// Use all defaults - pass empty object or omit options parameter
const result4 = await forgeSQL.executeWithMetadata(
  async () => {
    const users = await forgeSQL.selectFrom(usersTable);
    return users;
  },
  async (totalDbExecutionTime, totalResponseSize, printQueriesWithPlan) => {
    if (totalDbExecutionTime > 1000) {
      await printQueriesWithPlan(); // Uses all defaults: TopSlowest mode, topQueries: 1, showSlowestPlans: true
    }
  },
  {}, // Empty object - all options use defaults
);
```

<｜tool▁calls▁begin｜><｜tool▁call▁begin｜>
read_file

**2. SummaryTable Mode**: Uses `CLUSTER_STATEMENTS_SUMMARY` for query analysis

```typescript
const result = await forgeSQL.executeWithMetadata(
  async () => {
    const users = await forgeSQL.selectFrom(usersTable);
    return users;
  },
  async (totalDbExecutionTime, totalResponseSize, printQueriesWithPlan) => {
    if (totalDbExecutionTime > 1000) {
      await printQueriesWithPlan(); // Will use CLUSTER_STATEMENTS_SUMMARY if within time window
    }
  },
  {
    mode: "SummaryTable", // Use SummaryTable mode
    summaryTableWindowTime: 10000, // Time window in milliseconds (default: 15000ms)
  },
);
```

#### Configuration Options

All options are **optional**. If not specified, default values are used. You can pass only the options you need to customize.

| Option                   | Type                             | Default        | Description                                                                                                                                                                                   |
| ------------------------ | -------------------------------- | -------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `mode`                   | `'TopSlowest' \| 'SummaryTable'` | `'TopSlowest'` | Query plan printing mode. `'TopSlowest'` prints execution plans for the slowest queries from the current resolver. `'SummaryTable'` uses `CLUSTER_STATEMENTS_SUMMARY` when within time window |
| `summaryTableWindowTime` | `number`                         | `15000`        | Time window in milliseconds for summary table queries. Only used when `mode` is `'SummaryTable'`                                                                                              |
| `topQueries`             | `number`                         | `1`            | Number of top slowest queries to analyze when `mode` is `'TopSlowest'`                                                                                                                        |
| `showSlowestPlans`       | `boolean`                        | `true`         | Whether to show execution plans for slowest queries in TopSlowest mode. If `false`, only SQL and execution time are printed                                                                   |
| `normalizeQuery`         | `boolean`                        | `true`         | When `true`, slow-query output uses `normalizationSQL()` (regex-based in core). Set to `false` to log raw SQL if normalization causes issues with complex queries                             |
| `asyncQueueName`         | `string`                         | `""`           | Queue name for async processing. If provided, query analysis will be queued for background processing instead of running synchronously. Requires consumer configuration in `manifest.yml`     |

**Examples:**

```typescript
// Use all defaults - omit options or pass empty object
await forgeSQL.executeWithMetadata(queryFn, onMetadataFn); // or { }

// Customize only what you need
await forgeSQL.executeWithMetadata(queryFn, onMetadataFn, { topQueries: 3 });
await forgeSQL.executeWithMetadata(queryFn, onMetadataFn, { mode: "SummaryTable" });
await forgeSQL.executeWithMetadata(queryFn, onMetadataFn, { showSlowestPlans: false });
await forgeSQL.executeWithMetadata(queryFn, onMetadataFn, { normalizeQuery: false }); // Disable query normalization

// Combine multiple options
await forgeSQL.executeWithMetadata(queryFn, onMetadataFn, {
  mode: "TopSlowest",
  topQueries: 5,
  showSlowestPlans: false,
  normalizeQuery: true, // Enable query normalization (default)
});
```

#### How It Works

1. **TopSlowest Mode** (default):
   - Collects all queries executed within the resolver
   - Sorts them by execution time (slowest first)
   - Prints execution plans for the top N queries (configurable via `topQueries`)
   - If `showSlowestPlans` is `false`, only prints SQL and execution time without plans
   - Works immediately after query execution

2. **SummaryTable Mode**:
   - Attempts to use `CLUSTER_STATEMENTS_SUMMARY` for query analysis
   - Only works if queries are executed within the specified time window (`summaryTableWindowTime`)
   - If the time window expires, falls back to TopSlowest mode
   - Provides aggregated statistics from TiDB's system tables

#### SQL normalization (`normalizationSQL`)

When `normalizeQuery` is `true` (default), SQL printed by `printQueriesWithPlan()` is passed through `forgeSQL.normalizationSQL(sql)` so queries with different literal values collapse to the same shape (for example `WHERE id = 42` and `WHERE id = 7` both become `WHERE id = ?`).

**Core (`forge-sql-orm`)** — regex-based normalization (`normalizeSqlForLoggingRegex`):

- Lightweight, no extra dependencies
- Replaces string, numeric, boolean, and `NULL` literals with `?`
- Does not handle escaped quotes inside string literals (`''`); use `normalizeQuery: false` for those edge cases

```typescript
forgeSQL.normalizationSQL("SELECT * FROM users WHERE id = 42 AND name = 'Alice'");
// SELECT * FROM users WHERE id = ? AND name = ?
```

You can call `normalizationSQL` directly for custom logging or metrics:

```typescript
const key = forgeSQL.normalizationSQL(rawSql);
```

**With `forge-sql-orm-extra`**, the same method uses `node-sql-parser` to canonicalize SQL structure first, then applies regex for literals — better for complex queries. See [forge-sql-orm-extra README](./forge-sql-orm-extra/README.md#sql-normalization-normalizationsql).

#### Example: Real-World Resolver

```typescript
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
        const threshold = 500; // ms baseline for this resolver

        if (totalDbExecutionTime > threshold * 1.5) {
          console.warn(
            `[Performance Warning fetch] Resolver exceeded DB time: ${totalDbExecutionTime} ms`,
          );
          await printQueriesWithPlan(); // Analyze and print query execution plans
        } else if (totalDbExecutionTime > threshold) {
          console.debug(`[Performance Debug] High DB time: ${totalDbExecutionTime} ms`);
        }
      },
      {
        mode: "TopSlowest", // Print top slowest queries (default)
        topQueries: 2, // Print top 2 slowest queries
      },
    );
  } catch (e) {
    const error = e?.cause?.debug?.sqlMessage ?? e?.cause;
    console.error(error, e);
    throw error;
  }
});
```

#### Benefits

- **Resolver-Level Profiling**: Aggregates metrics across all database operations in a resolver
- **Configurable Analysis**: Choose between TopSlowest mode or SummaryTable mode
- **Automatic Plan Formatting**: Execution plans are formatted in a readable format
- **Performance Thresholds**: Set custom thresholds for performance warnings
- **Zero Configuration**: Works out of the box with sensible defaults

> **💡 Tip**: When multiple resolvers are running concurrently, their query data may also appear in `printQueriesWithPlan()` analysis when using SummaryTable mode, as it queries the global `CLUSTER_STATEMENTS_SUMMARY` table.

### Async Query Degradation Analysis

Forge-SQL-ORM supports asynchronous processing of query degradation analysis, allowing you to offload performance analysis to a background queue. This is particularly useful for production environments where you want to avoid blocking resolver responses while still capturing detailed performance metrics.

#### Key Features

- **Non-Blocking Analysis**: Query analysis runs asynchronously without blocking resolver responses
- **Automatic Fallback**: Falls back to synchronous execution if async queue fails
- **Log Correlation**: Job IDs help correlate resolver logs with consumer logs
- **Queue-Based Processing**: Uses Forge's event queue system for reliable processing
- **Configurable Timeout**: Customizable timeout for event queuing (default: 1200ms)

#### Basic Setup

**1. Configure consumer in `manifest.yml`:**

```yaml
modules:
  consumer:
    - key: print-degradation-queries
      queue: degradationQueue
      function: handlerAsyncDegradation

  function:
    - key: handlerAsyncDegradation
      handler: index.handlerAsyncDegradation
```

**2. Create the handler function:**

```typescript
import { AsyncEvent } from "@forge/events";
import { printDegradationQueriesConsumer } from "forge-sql-orm";
import { FORGE_SQL_ORM } from "./utils/forgeSqlOrmUtils";

export const handlerAsyncDegradation = (event: AsyncEvent) => {
  return printDegradationQueriesConsumer(FORGE_SQL_ORM, event);
};
```

**3. Enable async processing in resolver:**

```typescript
resolver.define("fetch", async (req: Request) => {
  return await FORGE_SQL_ORM.executeWithMetadata(
    async () => {
      // ... your queries ...
      return await SQL_QUERY;
    },
    async (totalDbExecutionTime, totalResponseSize, printQueries) => {
      if (totalDbExecutionTime > 800) {
        await printQueries(); // Will queue for async processing
      }
    },
    { asyncQueueName: "degradationQueue" }, // Enable async processing
  );
});
```

#### Configuration Options

The `asyncQueueName` option enables async processing:

| Option           | Type     | Default | Description                                                                                                                                                |
| ---------------- | -------- | ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `asyncQueueName` | `string` | `""`    | Queue name for async processing. If provided, query analysis will be queued instead of running synchronously. If empty or not provided, runs synchronously |

#### How It Works

1. **Resolver Execution**: When `printQueriesWithPlan()` is called with `asyncQueueName` configured:
   - Creates an event payload with query statistics and metadata
   - Sends event to the specified queue with a timeout (default: 1200ms)
   - Logs a warning message with Job ID for correlation
   - Returns immediately without waiting for analysis

2. **Async Processing**: The consumer function (`handlerAsyncDegradation`):
   - Receives the event from the queue
   - Logs processing start with Job ID
   - Executes query analysis (TopSlowest or SummaryTable mode)
   - Prints execution plans and performance metrics

3. **Fallback Behavior**: If queue push fails or times out:
   - Falls back to synchronous execution automatically
   - Logs a warning message
   - Analysis still completes, just synchronously

#### Log Correlation

Both resolver and consumer logs include Job IDs to help you correlate related events:

**Resolver log (when event is queued):**

```
WARN [Performance Analysis] Query degradation event queued for async processing | Job ID: abc-123 | Total DB time: 3531ms | Queries: 3 | Look for consumer log with jobId: abc-123
```

**Consumer log (when event is processed):**

```
WARN [Performance Analysis] Processing query degradation event | Job ID: abc-123 | Total DB time: 3531ms | Queries: 3 | Started: 2025-12-15T18:12:34.251Z
WARN SQL: SELECT ... | Time: 3514 ms
 Plan:
 Projection_7 | task:root | ...
```

**To find all related logs:**

- Search logs for: `"Job ID: abc-123"`
- This will show both the queuing event and the processing event

#### Example: Complete Setup

**manifest.yml:**

```yaml
modules:
  consumer:
    - key: print-degradation-queries
      queue: degradationQueue
      function: handlerAsyncDegradation

  function:
    - key: handlerAsyncDegradation
      handler: index.handlerAsyncDegradation
```

**index.ts:**

```typescript
import { AsyncEvent } from "@forge/events";
import { printDegradationQueriesConsumer } from "forge-sql-orm";
import { FORGE_SQL_ORM } from "./utils/forgeSqlOrmUtils";

// Consumer handler
export const handlerAsyncDegradation = (event: AsyncEvent) => {
  return printDegradationQueriesConsumer(FORGE_SQL_ORM, event);
};

// Resolver with async analysis
resolver.define("fetch", async (req: Request) => {
  return await FORGE_SQL_ORM.executeWithMetadata(
    async () => {
      const users = await FORGE_SQL_ORM.selectFrom(demoUsers);
      const orders = await FORGE_SQL_ORM.selectFrom(demoOrders);
      return { users, orders };
    },
    async (totalDbExecutionTime, totalResponseSize, printQueries) => {
      const threshold = 800; // ms baseline

      if (totalDbExecutionTime > threshold) {
        console.warn(`[Performance Warning] Resolver exceeded DB time: ${totalDbExecutionTime} ms`);
        await printQueries(); // Queued for async processing
      }
    },
    {
      asyncQueueName: "degradationQueue", // Enable async processing
      mode: "TopSlowest",
      topQueries: 1,
    },
  );
});
```

#### Benefits

- **Non-Blocking**: Resolver responses are not delayed by query analysis
- **Production Ready**: Suitable for production environments where performance is critical
- **Reliable**: Automatic fallback ensures analysis always completes
- **Traceable**: Job IDs enable easy log correlation
- **Scalable**: Queue-based processing handles high load scenarios

#### When to Use Async Processing

**Use async processing when:**

- You're in a production environment
- Resolver response time is critical
- You want to avoid blocking user requests
- You need detailed analysis but can process it later

**Use synchronous processing when:**

- You're in development/debugging
- You need immediate analysis results
- You want simpler setup (no queue configuration)

> **💡 Tip**: The async queue name must match the queue name configured in your `manifest.yml` consumer section. If the queue doesn't exist or the event fails to send, the system automatically falls back to synchronous execution.

### Slow Query Monitoring

Forge-SQL-ORM provides a scheduler trigger (`slowQuerySchedulerTrigger`) that automatically monitors and analyzes slow queries on an hourly basis. This trigger queries TiDB's slow query log system table and provides detailed performance information including SQL query text, memory usage, execution time, and execution plans.

#### Key Features

- **Automatic Monitoring**: Runs on a scheduled interval (recommended: hourly)
- **Detailed Performance Metrics**: Memory usage, execution time, and execution plans
- **Console Logging**: Results are automatically logged to the Forge Developer Console
- **Configurable Time Window**: Analyze queries from the last N hours (default: 1 hour)
- **Automatic Plan Retrieval**: Execution plans are included for all slow queries

#### Basic Setup

**1. Create the trigger function:**

```typescript
import ForgeSQL, { slowQuerySchedulerTrigger } from "forge-sql-orm";

const forgeSQL = new ForgeSQL();

// Monitor slow queries from the last hour (recommended for hourly schedule)
export const slowQueryTrigger = () =>
  slowQuerySchedulerTrigger(forgeSQL, { hours: 1, timeout: 3000 });
```

**2. Configure in `manifest.yml`:**

```yaml
modules:
  scheduledTrigger:
    - key: slow-query-trigger
      function: slowQueryTrigger
      interval: hour # Run every hour

  function:
    - key: slowQueryTrigger
      handler: index.slowQueryTrigger
```

#### Configuration Options

| Option    | Type     | Default | Description                                                |
| --------- | -------- | ------- | ---------------------------------------------------------- |
| `hours`   | `number` | `1`     | Number of hours to look back for slow queries              |
| `timeout` | `number` | `3000`  | Timeout in milliseconds for the diagnostic query execution |

#### Example Console Output

When slow queries are detected, you'll see output like this in the Forge Developer Console:

```
Found SlowQuery SQL: SELECT * FROM users u INNER JOIN orders o ON u.id = o.user_id WHERE u.active = ? | Memory: 8.50 MB | Time: 2500.00 ms
 Plan:
id task estRows operator info actRows execution info memory disk
Projection_7 root 1000.00 forge_38dd1c6156b94bb59c2c9a45582bbfc7.users.id, ... 1000 time:2.5s, loops:1 8.50 MB N/A
└─IndexHashJoin_14 root 1000.00 inner join, ... 1000 time:2.2s, loops:1 7.98 MB N/A

Found SlowQuery SQL: SELECT * FROM products WHERE category = ? ORDER BY created_at DESC | Memory: 6.25 MB | Time: 1800.00 ms
 Plan:
...
```

#### Advanced Configuration

```typescript
import ForgeSQL, { slowQuerySchedulerTrigger } from "forge-sql-orm";

const forgeSQL = new ForgeSQL();

// Monitor queries from the last 6 hours (for less frequent checks)
export const sixHourSlowQueryTrigger = () =>
  slowQuerySchedulerTrigger(forgeSQL, { hours: 6, timeout: 5000 });

// Monitor queries from the last 24 hours (daily monitoring)
export const dailySlowQueryTrigger = () =>
  slowQuerySchedulerTrigger(forgeSQL, { hours: 24, timeout: 3000 });
```

#### How It Works

1. **Scheduled Execution**: The trigger runs automatically on the configured interval (hourly recommended)
2. **Query Analysis**: Queries TiDB's slow query log system table for queries executed within the specified time window
3. **Performance Metrics**: Extracts and logs:
   - SQL query text (sanitized for readability)
   - Maximum memory usage (in MB)
   - Query execution time (in ms)
   - Detailed execution plan
4. **Console Logging**: Results are logged to the Forge Developer Console via `console.warn()` for easy monitoring

#### Best Practices

- **Hourly Intervals**: Use `interval: hour` for timely detection of slow queries
- **Default Time Window**: 1 hour is recommended for hourly schedules to avoid overlap
- **Monitor Regularly**: Check console logs regularly to identify patterns in slow queries

#### Benefits

- **Proactive Monitoring**: Catch slow queries before they become critical issues
- **Performance Trends**: Track query performance over time
- **Optimization Insights**: Execution plans help identify optimization opportunities
- **Zero Manual Intervention**: Fully automated monitoring with scheduled execution
- **Production Safe**: Works silently in the background, only logs when slow queries are found

> **💡 Tip**: The trigger queries up to 50 slow queries to prevent excessive logging. Transient timeouts are usually fine; repeated timeouts indicate the diagnostic query itself is slow and should be investigated.

### Available Analysis Tools

```typescript
import ForgeSQL from "forge-sql-orm";

const forgeSQL = new ForgeSQL();
const analyzeForgeSql = forgeSQL.analyze();
```

#### Query Plan Analysis

Query plan analysis helps you understand how your queries are executed and identify optimization opportunities.

```typescript
// Example usage for analyzing a specific query
const forgeSQL = new ForgeSQL();
const analyzeForgeSql = forgeSQL.analyze();

// Analyze a Drizzle query
const plan = await analyzeForgeSql.explain(
  forgeSQL
    .select({
      table1: testEntityJoin1,
      table2: { name: testEntityJoin2.name, email: testEntityJoin2.email },
      count: rawSql<number>`COUNT(*)`,
      table3: {
        table12: testEntityJoin1.name,
        table22: testEntityJoin2.email,
        table32: testEntity.id,
      },
    })
    .from(testEntityJoin1)
    .innerJoin(testEntityJoin2, eq(testEntityJoin1.id, testEntityJoin2.id)),
);

// Analyze a raw SQL query
const rawPlan = await analyzeForgeSql.explainRaw("SELECT * FROM users WHERE id = ?", [1]);

// Analyze new methods
const usersFromPlan = await analyzeForgeSql.explain(
  forgeSQL.selectFrom(users).where(eq(users.active, true)),
);

// Analyze Common Table Expressions (CTEs)
const ctePlan = await analyzeForgeSql.explain(
  forgeSQL
    .with(
      forgeSQL.selectFrom(users).where(eq(users.active, true)).as("activeUsers"),
      forgeSQL.selectFrom(orders).where(eq(orders.status, "completed")).as("completedOrders"),
    )
    .select({
      totalActiveUsers: sql`COUNT(au.id)`,
      totalCompletedOrders: sql`COUNT(co.id)`,
    })
    .from(sql`activeUsers au`)
    .leftJoin(sql`completedOrders co`, eq(sql`au.id`, sql`co.userId`)),
);
```

This analysis provides insights into:

- How the database executes your query
- Which indexes are being used
- Estimated vs actual row counts
- Resource usage at each step
- Performance optimization opportunities

## Migration Guide

### Migrating from 2.0.x to 2.1.x

This section covers the breaking changes introduced in version 2.1.x and how to migrate your existing code.

#### 1. Method Renaming (BREAKING CHANGES)

**Removed Methods:**

- `forgeSQL.modify()` → **REMOVED** (use `forgeSQL.modifyWithVersioning()`)
- `forgeSQL.crud()` → **REMOVED** (use `forgeSQL.modifyWithVersioning()`)

**Migration Steps:**

1. **Replace `modify()` calls:**

   ```typescript
   // ❌ Old (2.0.x) - NO LONGER WORKS
   await forgeSQL.modify().insert(Users, [userData]);
   await forgeSQL.modify().updateById(updateData, Users);
   await forgeSQL.modify().deleteById(1, Users);

   // ✅ New (2.1.x) - REQUIRED
   await forgeSQL.modifyWithVersioning().insert(Users, [userData]);
   await forgeSQL.modifyWithVersioning().updateById(updateData, Users);
   await forgeSQL.modifyWithVersioning().deleteById(1, Users);
   ```

2. **Replace `crud()` calls:**

   ```typescript
   // ❌ Old (2.0.x) - NO LONGER WORKS
   await forgeSQL.crud().insert(Users, [userData]);
   await forgeSQL.crud().updateById(updateData, Users);
   await forgeSQL.crud().deleteById(1, Users);

   // ✅ New (2.1.x) - REQUIRED
   await forgeSQL.modifyWithVersioning().insert(Users, [userData]);
   await forgeSQL.modifyWithVersioning().updateById(updateData, Users);
   await forgeSQL.modifyWithVersioning().deleteById(1, Users);
   ```

#### 2. New API Methods

**New Methods Available:**

- `forgeSQL.insert()` - Basic Drizzle operations
- `forgeSQL.update()` - Basic Drizzle operations
- `forgeSQL.delete()` - Basic Drizzle operations
- `forgeSQL.selectFrom()` - All-column queries with field aliasing
- `forgeSQL.selectDistinctFrom()` - Distinct all-column queries with field aliasing
- `forgeSQL.execute()` - Raw SQL queries with local caching
- Global cache methods (`insertAndEvictCache`, `selectCacheableFrom`, `executeCacheable`, …) — [**forge-sql-orm-extra**](forge-sql-orm-extra/README.md)
- `forgeSQL.executeDDL()` - DDL operations (CREATE, ALTER, DROP, etc.)
- `forgeSQL.executeDDLActions()` - Execute actions within DDL operation context
- `forgeSQL.with()` - Common Table Expressions (CTEs)

**Optional Migration:**
You can optionally migrate to the new API methods for better performance and cache management:

```typescript
// ❌ Old approach (still works)
await forgeSQL.modifyWithVersioning().insert(Users, [userData]);

// ✅ New approach (recommended for new code)
await forgeSQL.insert(Users).values(userData);
// ✅ New query methods for better performance
const users = await forgeSQL.selectFrom(Users).where(eq(Users.active, true));

const usersDistinct = await forgeSQL.selectDistinctFrom(Users).where(eq(Users.active, true));

// ✅ Raw SQL execution with local caching
const rawUsers = await forgeSQL.execute("SELECT * FROM users WHERE active = ?", [true]);

// Global cache: use forge-sql-orm-extra — see forge-sql-orm-extra/README.md

// ✅ Raw SQL execution with metadata capture and performance monitoring
const usersWithMetadata = await forgeSQL.executeWithMetadata(
  async () => {
    const users = await forgeSQL.selectFrom(usersTable);
    const orders = await forgeSQL
      .selectFrom(ordersTable)
      .where(eq(ordersTable.userId, usersTable.id));
    return { users, orders };
  },
  (totalDbExecutionTime, totalResponseSize, printQueriesWithPlan) => {
    const threshold = 500; // ms baseline for this resolver

    if (totalDbExecutionTime > threshold * 1.5) {
      console.warn(`[Performance Warning] Resolver exceeded DB time: ${totalDbExecutionTime} ms`);
      await printQueriesWithPlan(); // Analyze and print query execution plans
    } else if (totalDbExecutionTime > threshold) {
      console.debug(`[Performance Debug] High DB time: ${totalDbExecutionTime} ms`);
    }

    console.log(`DB response size: ${totalResponseSize} bytes`);
  },
  {
    // Optional: Configure query plan printing
    mode: "TopSlowest", // Print top slowest queries (default)
    topQueries: 1, // Print top slowest query
  },
);

// ✅ DDL operations for schema modifications
await forgeSQL.executeDDL(`
  CREATE TABLE users (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE
  )
`);

await forgeSQL.executeDDL(sql`
  ALTER TABLE users 
  ADD COLUMN created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
`);

// ✅ Execute regular SQL queries in DDL context for performance monitoring
await forgeSQL.executeDDLActions(async () => {
  // Execute regular SQL queries in DDL context for monitoring
  const slowQueries = await forgeSQL.execute(`
    SELECT * FROM INFORMATION_SCHEMA.STATEMENTS_SUMMARY 
    WHERE AVG_LATENCY > 1000000
  `);

  // Execute complex analysis queries in DDL context
  const performanceData = await forgeSQL.execute(`
    SELECT * FROM INFORMATION_SCHEMA.CLUSTER_STATEMENTS_SUMMARY_HISTORY
    WHERE SUMMARY_END_TIME > DATE_SUB(NOW(), INTERVAL 1 HOUR)
  `);

  return { slowQueries, performanceData };
});

// ✅ Common Table Expressions (CTEs)
const userStats = await forgeSQL
  .with(
    forgeSQL.selectFrom(users).where(eq(users.active, true)).as("activeUsers"),
    forgeSQL.selectFrom(orders).where(eq(orders.status, "completed")).as("completedOrders"),
  )
  .select({
    totalActiveUsers: sql`COUNT(au.id)`,
    totalCompletedOrders: sql`COUNT(co.id)`,
  })
  .from(sql`activeUsers au`)
  .leftJoin(sql`completedOrders co`, eq(sql`au.id`, sql`co.userId`));
```

#### 3. Automatic Migration Script

You can use a simple find-and-replace to migrate your code:

```bash
# Replace modify() calls
find . -name "*.ts" -o -name "*.js" | xargs sed -i 's/forgeSQL\.modify()/forgeSQL.modifyWithVersioning()/g'

# Replace crud() calls
find . -name "*.ts" -o -name "*.js" | xargs sed -i 's/forgeSQL\.crud()/forgeSQL.modifyWithVersioning()/g'
```

### Migrating from 2.1.x to 2.2.x

Starting with **2.2.x**, the library is split into two packages to keep the core smaller and reduce dependencies for apps that do not need global cache or Rovo.

#### 1. Understand the package split

| Package                 | Install                                               | Use when                                                                                                   |
| ----------------------- | ----------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| **forge-sql-orm**       | `npm install forge-sql-orm @forge/sql drizzle-orm -S` | Drizzle + `@forge/sql`, **Level 1 local cache**, migrations, optimistic locking (no L2 KVS)                |
| **forge-sql-orm-extra** | `npm install forge-sql-orm-extra @forge/kvs -S`       | **Level 2** global KVS cache, Rovo — L1 still from core; see [extra README](forge-sql-orm-extra/README.md) |

#### 2. Stay on core if you do not use L2 or Rovo

**If you did not use global cache (L2) or Rovo:** nothing changes. Keep:

```typescript
import ForgeSQL from "forge-sql-orm";
```

Local cache (`executeWithLocalCacheContext`, `selectFrom`, `execute`, …) stays on core.

#### 3. Add the extension package (L2 cache or Rovo only)

**If you used Level 2 global cache** (`cacheEntityName`, `selectCacheable*`, `executeCacheable`, `*AndEvictCache`, `executeWithCacheContext`, …) **or Rovo** (`forgeSQL.rovo()`):

```bash
npm install forge-sql-orm-extra @forge/kvs -S
```

Core dependencies (`forge-sql-orm`, `@forge/sql`, `drizzle-orm`) stay as before. Level 1 local cache alone does **not** require extra.

#### 4. Change the import

```typescript
// ❌ Before (2.1.x monolith)
import ForgeSQL from "forge-sql-orm";

// ✅ After (2.2.x with cache or Rovo)
import ForgeSQL from "forge-sql-orm-extra";
```

The rest of your logic stays the same — options, method names, and call patterns are unchanged.

#### 5. Keep existing options and calls

```typescript
const forgeSQL = new ForgeSQL({
  cacheEntityName: "cache",
  cacheTTL: 300,
});

const users = await forgeSQL
  .selectCacheable({ id: users.id, name: users.name })
  .from(users)
  .where(eq(users.active, true));
```

#### 6. Update imports for helpers that moved with cache

If you use web triggers or utilities that moved to the extension package, update their import path, for example:

```typescript
// ❌ Before
import { clearCacheSchedulerTrigger } from "forge-sql-orm";

// ✅ After
import { clearCacheSchedulerTrigger } from "forge-sql-orm-extra";
```

See [forge-sql-orm-extra README](forge-sql-orm-extra/README.md) for the full list of cache and Rovo APIs.

## License

This project is licensed under the **MIT License**.  
Feel free to use it for commercial and personal projects.
