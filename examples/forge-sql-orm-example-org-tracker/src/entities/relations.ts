// SPDX-FileCopyrightText: 2025-2026 Vasyl Zakharchenko
// SPDX-License-Identifier: MIT

import { defineRelations } from "drizzle-orm";
import * as schema from "./schema";

export const relations = defineRelations(schema, (r) => ({
  appUser: {
    organization: r.one.organization({
      from: r.appUser.organizationId,
      to: r.organization.id,
    }),
  },
  organization: {
    appUsers: r.many.appUser({
      from: r.organization.id,
      to: r.appUser.organizationId,
    }),
  },
}));
