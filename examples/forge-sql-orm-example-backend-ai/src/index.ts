import Resolver, { Request } from "@forge/resolver";
import ForgeSQL, {
  applySchemaMigrations,
  dropSchemaMigrations,
  fetchSchemaWebTrigger,
  formatLimitOffset,
  vecCosineDistance,
} from "forge-sql-orm";
import migration from "./migration";
import { asc, InferInsertModel, InferSelectModel, sql } from "drizzle-orm";
import { embeddedDocuments } from "./entities";
import { getVector } from "./ai";

const resolver = new Resolver();
const forgeSQL = new ForgeSQL({ logRawSqlQuery: false });

type CreateDocumentInput = Pick<InferInsertModel<typeof embeddedDocuments>, "title" | "document">;

resolver.define("create", async (req: Request<{ data: CreateDocumentInput }>): Promise<number> => {
  const { title, document } = req.payload.data;
  const embedding = await getVector(document);
  const res = await forgeSQL.insert(embeddedDocuments).values([{ title, document, embedding }]);
  return res[0].insertId;
});

resolver.define("fetch", async (): Promise<InferSelectModel<typeof embeddedDocuments>[]> => {
  return await forgeSQL.selectFrom(embeddedDocuments);
});

resolver.define(
  "search",
  async (
    req: Request<{ text: string }>,
  ): Promise<{ id: number; title: string; document: string; distance: number }[]> => {
    const text = req.payload.text;
    const vector = await getVector(text);
    const fieldAlias = sql.raw("distance");
    const distance = sql<number>`${vecCosineDistance(embeddedDocuments.embedding, vector)} as \`${fieldAlias}\``;
    return forgeSQL
      .select({
        id: embeddedDocuments.id,
        document: embeddedDocuments.document,
        title: embeddedDocuments.title,
        distance: distance,
      })
      .from(embeddedDocuments)
      .orderBy(asc(fieldAlias))
      .limit(formatLimitOffset(5));
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
