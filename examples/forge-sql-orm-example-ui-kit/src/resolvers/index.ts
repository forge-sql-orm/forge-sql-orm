import Resolver, { Request } from "@forge/resolver";
import { eq } from "drizzle-orm";
import ForgeSQL from "forge-sql-orm";
import { users } from "../database/entities";

const forgeSQL = new ForgeSQL({ logRawSqlQuery: true });

const resolver = new Resolver();

resolver.define("createUser", async (req: Request<{ name: string; email: string }>) => {
  const payload = req.payload;
  const result = await forgeSQL.insert(users).values(payload);
  return { ...payload, id: result[0].insertId };
});

resolver.define("fetchUsers", async () => {
  return forgeSQL.selectFrom(users);
});

resolver.define(
  "updateUsers",
  async (req: Request<{ id: number; name?: string; email?: string }>) => {
    if (req.payload?.id == null) {
      throw new Error("id is required");
    }
    const setData: { name?: string; email?: string } = {};
    if (req.payload.name !== undefined) setData.name = req.payload.name;
    if (req.payload.email !== undefined) setData.email = req.payload.email;
    if (Object.keys(setData).length === 0) {
      return { affectedRows: 0 };
    }
    const result = await forgeSQL.update(users).set(setData).where(eq(users.id, req.payload.id));
    return { affectedRows: result[0].affectedRows };
  },
);

export const handler = resolver.getDefinitions();
