import { int, mysqlTable, primaryKey } from "drizzle-orm/mysql-core";
import { forgeBinary, forgeBLOB, forgeMediumBLOB, forgeTinyBLOB, forgeVarBinary } from "../../src";

export const customTypeEntity = mysqlTable(
  "custom_Type_Entity",
  {
    id: int("id").autoincrement(),
    blob: forgeBLOB("blob", { length: 255 }).notNull(),
    tinyBlob: forgeTinyBLOB("tinyBlob").notNull(),
    mediumBlob: forgeMediumBLOB("mediumBlob", { length: 255 }).notNull(),
    binary: forgeBinary("binary", { length: 1024 }).notNull(),
    varBinary: forgeVarBinary("varBinary").notNull(),
  },
  (table) => [primaryKey({ columns: [table.id], name: "users_id" })],
);
