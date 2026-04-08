import { int, mysqlTable, primaryKey, varchar } from "drizzle-orm/mysql-core";
import { vectorTiDBType } from "../../src";

export class TestEntity {
  id!: number;
  name?: string;
}

export const testEntityVector = mysqlTable(
  "test_entity_vector",
  {
    id: int("id").autoincrement(),
    name: varchar("name", { length: 255 }).notNull(),
    embedding: vectorTiDBType("embedding", { dimension: 10 }).notNull(),
  },
  (table) => [primaryKey({ columns: [table.id], name: "id" })],
);
