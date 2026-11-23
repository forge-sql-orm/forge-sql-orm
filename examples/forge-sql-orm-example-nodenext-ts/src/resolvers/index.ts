// SPDX-FileCopyrightText: 2025-2026 Vasyl Zakharchenko
// SPDX-License-Identifier: MIT

import { makeResolver } from "@forge/resolver";
import ForgeSQL from "forge-sql-orm-extra";
import { eq } from "drizzle-orm";
import { users, type User } from "../entities";

type ResolverDefinitions = {
  fetchUsers: () => User[];
  createUser: (input: { name?: string }) => number;
  deleteUser: (input: { id: number }) => void;
};

const forgeSQL = new ForgeSQL({ logRawSqlQuery: true });

export const handler = makeResolver<ResolverDefinitions>({
  fetchUsers: async () => forgeSQL.selectFrom(users),

  createUser: async ({ payload }) => {
    const name = String(payload.name ?? "").trim();
    if (!name) {
      throw new Error("Name is required");
    }
    const result = await forgeSQL.insert(users).values({ name });
    return result[0].insertId;
  },

  deleteUser: async ({ payload }) => {
    await forgeSQL.delete(users).where(eq(users.id, Number(payload.id)));
  },
});
