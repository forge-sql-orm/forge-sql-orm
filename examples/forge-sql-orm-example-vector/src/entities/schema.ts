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
