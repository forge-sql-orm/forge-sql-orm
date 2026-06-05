// SPDX-FileCopyrightText: 2025-2026 Vasyl Zakharchenko
// SPDX-License-Identifier: MIT

import { testEntity } from "./TestEntity";
import { mysqlTable, int, varchar } from "drizzle-orm/mysql-core";

export class TestDataEntity {
  id!: number;
  data?: string;
}

export const testDataEntity = mysqlTable("test_data_entity", {
  id: int("id")
    .primaryKey()
    .autoincrement()
    .references(() => testEntity.id),
  data: varchar("data", { length: 255 }).notNull(),
});
