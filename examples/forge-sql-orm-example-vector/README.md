# Forge SQL ORM — TiDB Vector Search example

This example shows how to use [Forge SQL ORM](https://github.com/forge-sql-orm/forge-sql-orm) with **TiDB-compatible vector types** and **cosine-distance search**, following the same flow as PingCAP’s tutorial [**Get Started with Vector Search via SQL**](https://docs.pingcap.com/tidb/stable/vector-search-get-started-using-sql) (vector table, embeddings, `vec_cosine_distance`).

## Vector type & SQL helpers (AI / similarity search)

The library exposes a Drizzle column type and TiDB vector functions for **SQL with AI** use cases (embedding storage, nearest-neighbor style queries).

| Piece                                                                                 | Role                                                                                                                                                                     |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `vectorTiDBType('fieldName', { dimension: n })` or `vectorTiDBType({ dimension: n })` | Column mapped to `VECTOR(n)`; read/write as `number[]` (same shapes as other Drizzle MySQL builders).                                                                    |
| `vecCosineDistance(a, b)`                                                             | Builds `VEC_COSINE_DISTANCE` for ordering / selecting distance.                                                                                                          |
| `vecL2Distance`, `vecL1Distance`, `vecNegativeInnerProduct`, …                        | Other TiDB distance metrics (see main repo [`README.md`](https://github.com/forge-sql-orm/forge-sql-orm/blob/master/README.md#tidb-vector-types-ai--similarity-search)). |

**Schema** ([`src/entities/schema.ts`](./src/entities/schema.ts)):

```typescript
import { int, mysqlTable, primaryKey, text } from "drizzle-orm/mysql-core";
import { vectorTiDBType } from "forge-sql-orm";

export const embeddedDocuments = mysqlTable(
  "embedded_documents",
  {
    id: int().autoincrement().notNull(),
    document: text().notNull(),
    embedding: vectorTiDBType("embedding", { dimension: 3 }).notNull(),
  },
  (table) => [primaryKey({ columns: [table.id], name: "id" })],
);
```

**Search by query vector** ([`src/index.ts`](./src/index.ts)) — cosine distance, ascending (smaller = closer):

```typescript
import { asc, sql } from "drizzle-orm";
import { vecCosineDistance } from "forge-sql-orm";
import { embeddedDocuments } from "./entities";

const queryVector: number[] = [1, 2, 3]; // e.g. embedding from your model

const fieldAlias = sql.raw("distance");
const distance = sql<number>`${vecCosineDistance(embeddedDocuments.embedding, queryVector)} AS \`${fieldAlias}\``;

return await forgeSQL
  .select({
    id: embeddedDocuments.id,
    document: embeddedDocuments.document,
    distance,
  })
  .from(embeddedDocuments)
  .orderBy(asc(fieldAlias));
```

Full API details: root [**TiDB vector types (AI / similarity search)**](https://github.com/forge-sql-orm/forge-sql-orm/blob/master/README.md#tidb-vector-types-ai--similarity-search).

## How this maps to “Get Started with TiDB + AI via SQL”

| Step in TiDB docs         | What this example does                                                                                                                                                                                                                    |
| ------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Connect**               | You do not use the MySQL CLI here; the app connects via **Forge SQL** (`manifest.yml` → `sql` module).                                                                                                                                    |
| **Create a vector table** | Table `embedded_documents` with `VECTOR(3)` — defined in Drizzle ([`src/entities/schema.ts`](./src/entities/schema.ts)) and created by **migrations** ([`src/migration/migrationV1.ts`](./src/migration/migrationV1.ts)).                 |
| **Insert embeddings**     | Initial rows match the doc sample (`dog`, `fish`, `tree` with 3D vectors). The UI can **insert** more rows; `id` is **auto-increment**.                                                                                                   |
| **Query the table**       | Resolver **`fetch`** loads all rows (like `SELECT * FROM embedded_documents`).                                                                                                                                                            |
| **Vector search**         | Resolver **`search`** runs an ordering by **cosine distance**, equivalent in spirit to: `ORDER BY vec_cosine_distance(embedding, '[…]')` (implemented with `vecCosineDistance` from `forge-sql-orm` in [`src/index.ts`](./src/index.ts)). |

The bundled UI under [`static/forge-orm-example/`](./static/forge-orm-example/) lets you insert rows, **fetch all** documents, and run a vector search with a query vector (the docs use `[1,2,3]` as the example search embedding).

## Requirements

- [Forge](https://developer.atlassian.com/platform/forge/) CLI and an Atlassian site for `forge install`.
- Node.js compatible with the app runtime (see `manifest.yml`).

## Quick start

### 1. Install backend dependencies

```sh
cd examples/forge-sql-orm-example-vector
npm install
```

### 2. Install and build the static UI

```sh
cd static/forge-orm-example
npm install
npm run build
```

The built assets are loaded from `static/forge-orm-example/build-static` (see `manifest.yml` → `resources`).

### 3. Register, deploy, install (once per app / site)

```sh
forge register   # only once
forge deploy
forge install --site <your-site>.atlassian.net
```

Schema migrations can run via the configured triggers / webhooks / scheduled job (see `manifest.yml`). Adjust as needed for your workflow.

## What you can try in the UI

- **Add documents** — insert `document` + 3D `embedding`; after a successful insert the list is refreshed.
- **Vector search** — supply a 3-number query vector; results are ordered by cosine distance (smaller distance ⇒ closer match), consistent with the TiDB SQL tutorial behavior.

## See also (TiDB documentation)

- [Vector Search overview](https://docs.pingcap.com/ai/vector-search-overview/)
- [Vector data types](https://docs.pingcap.com/ai/vector-search-data-types/)
- [Vector functions and operators](https://docs.pingcap.com/ai/vector-search-functions-and-operators/)
- [Get Started with Vector Search via SQL](https://docs.pingcap.com/ai/quickstart-via-sql/) — SQL tutorial this example mirrors (table `embedded_documents`, sample rows, `vec_cosine_distance` ordering).

## Atlassian Forge

See the [Forge documentation](https://developer.atlassian.com/platform/forge/) for CLI, deployment, and app configuration.
