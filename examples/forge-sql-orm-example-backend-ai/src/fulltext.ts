// SPDX-FileCopyrightText: 2025-2026 Vasyl Zakharchenko
// SPDX-License-Identifier: MIT

import MiniSearch from "minisearch";

export type FulltextDocument = {
  id: number;
  title: string;
  document: string;
};

/**
 * BM25-style fulltext scores for a candidate set via MiniSearch.
 * Scores are normalized to [0, 1] relative to the best match in this batch.
 */
export function scoreFulltextBatch<T extends FulltextDocument>(
  query: string,
  candidates: T[],
): Array<T & { fulltextScore: number }> {
  const trimmedQuery = query.trim();
  if (!trimmedQuery || candidates.length === 0) {
    return candidates.map((candidate) => ({ ...candidate, fulltextScore: 0 }));
  }

  const miniSearch = new MiniSearch({
    idField: "id",
    fields: ["title", "document"],
    storeFields: ["id"],
  });

  miniSearch.addAll(
    candidates.map((candidate) => ({
      id: candidate.id,
      title: candidate.title,
      document: candidate.document,
    })),
  );

  const hits = miniSearch.search(trimmedQuery, {
    prefix: true,
    fuzzy: 0.2,
    boost: { title: 2 },
  });

  const rawScoreById = new Map(hits.map((hit) => [Number(hit.id), hit.score]));
  const maxRawScore = hits.length > 0 ? Math.max(...hits.map((hit) => hit.score)) : 0;

  return candidates.map((candidate) => {
    const rawScore = rawScoreById.get(candidate.id) ?? 0;
    const fulltextScore = maxRawScore > 0 ? rawScore / maxRawScore : 0;
    return { ...candidate, fulltextScore };
  });
}
