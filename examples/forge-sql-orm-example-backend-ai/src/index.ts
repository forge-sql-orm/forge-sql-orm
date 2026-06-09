// SPDX-FileCopyrightText: 2025-2026 Vasyl Zakharchenko
// SPDX-License-Identifier: MIT

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
import { getVector, rerank } from "./ai";
import { scoreFulltextBatch } from "./fulltext";
import { normalizeScores, reciprocalRankFusion } from "./hybridScore";

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

const VECTOR_CANDIDATE_LIMIT = 20;
const FINAL_RESULT_LIMIT = 5;

resolver.define(
  "search",
  async (
    req: Request<{ text: string }>,
  ): Promise<
    {
      id: number;
      title: string;
      document: string;
      distance: number;
      fulltextScore: number;
      fusedScore: number;
      score: number;
    }[]
  > => {
    const text = req.payload.text;
    const vector = await getVector(text);
    const fieldAlias = sql.raw("distance");
    const distance = sql<number>`${vecCosineDistance(embeddedDocuments.embedding, vector)} as \`${fieldAlias}\``;

    const candidates = await forgeSQL
      .select({
        id: embeddedDocuments.id,
        document: embeddedDocuments.document,
        title: embeddedDocuments.title,
        distance: distance,
      })
      .from(embeddedDocuments)
      .orderBy(asc(fieldAlias))
      .limit(formatLimitOffset(VECTOR_CANDIDATE_LIMIT));

    if (candidates.length === 0) {
      return [];
    }

    const fulltextScored = scoreFulltextBatch(text, candidates);

    const reranked = await rerank(
      text,
      fulltextScored.map((row) => ({
        text: row.document,
        item: row,
      })),
    );

    const rerankScoreById = new Map(reranked.map((result) => [result.item!.id, result.score]));

    const hybridSignals = fulltextScored.map((row) => ({
      id: row.id,
      distance: row.distance,
      fulltextScore: row.fulltextScore,
      rerankScore: rerankScoreById.get(row.id) ?? Number.NEGATIVE_INFINITY,
    }));

    const fusedById = reciprocalRankFusion(hybridSignals);
    const normalizedFusedById = normalizeScores(fusedById);

    const fusedResults = fulltextScored
      .map((row) => ({
        ...row,
        rerankScore: rerankScoreById.get(row.id) ?? Number.NEGATIVE_INFINITY,
        fusedScore: normalizedFusedById.get(row.id) ?? 0,
      }))
      .sort((a, b) => b.fusedScore - a.fusedScore)
      .slice(0, FINAL_RESULT_LIMIT);

    return fusedResults.map((row) => ({
      id: row.id,
      title: row.title,
      document: row.document,
      distance: row.distance,
      fulltextScore: row.fulltextScore,
      fusedScore: row.fusedScore,
      score: row.rerankScore,
    }));
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
