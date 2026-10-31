// SPDX-FileCopyrightText: 2025-2026 Vasyl Zakharchenko
// SPDX-License-Identifier: MIT

import { defineRelations } from "drizzle-orm";
import * as schema from "./schema";

export const relations = defineRelations(schema, (r) => ({
  demoOrders: {
    demoUser: r.one.demoUsers({
      from: r.demoOrders.userId,
      to: r.demoUsers.id,
    }),
  },
  demoUsers: {
    demoOrders: r.many.demoOrders({
      from: r.demoUsers.id,
      to: r.demoOrders.userId,
    }),
  },
}));
