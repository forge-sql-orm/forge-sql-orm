import Resolver, { Request } from "@forge/resolver";
import ForgeSQL from "forge-sql-orm";
import { dropSchemaMigrations, applySchemaMigrations, fetchSchemaWebTrigger } from "forge-sql-orm";
import migration from "./migration";
import { asc, InferInsertModel, InferSelectModel, sql } from "drizzle-orm";
import { embeddedDocuments } from "./entities";
import { vecCosineDistance } from "forge-sql-orm";

const resolver = new Resolver();
const forgeSQL = new ForgeSQL({ logRawSqlQuery: true });

resolver.define(
  "create",
  async (req: Request<{ data: InferInsertModel<typeof embeddedDocuments> }>): Promise<number> => {
    const payload = req.payload.data;
    const res = await forgeSQL.insert(embeddedDocuments).values([payload]);
    return res[0].insertId;
  },
);

resolver.define("fetch", async (): Promise<InferSelectModel<typeof embeddedDocuments>[]> => {
  return await forgeSQL.selectFrom(embeddedDocuments);
});

resolver.define(
  "search",
  async (
    req: Request<{ vector: number[] }>,
  ): Promise<{ id: number; document: string; distance: number }[]> => {
    const vector = req.payload.vector;
    const fieldAlias = sql.raw("distance");
    const distance = sql<number>`${vecCosineDistance(embeddedDocuments.embedding, vector)} as \`${fieldAlias}\``;
    return await forgeSQL
      .select({
        id: embeddedDocuments.id,
        document: embeddedDocuments.document,
        distance: distance,
      })
      .from(embeddedDocuments)
      .orderBy(asc(fieldAlias));
  },
);

export const handler = resolver.getDefinitions();

export const handlerMigration = async () => {
  return applySchemaMigrations(migration);
};

export const dropMigrations = () => {
  return dropSchemaMigrations();
};

export const fetchMigrations = () => {
  return fetchSchemaWebTrigger();
};
