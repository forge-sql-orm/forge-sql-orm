// SPDX-FileCopyrightText: 2025-2026 Vasyl Zakharchenko
// SPDX-License-Identifier: MIT

/**
 * RRF smoothing constants per signal. Lower k = stronger influence when a document
 * ranks #1 on that signal (larger 1/(k+1) contribution).
 *
 * Tuning rationale (see README):
 * - Vector: weakest — fast semantic retrieve; rerank refines the same signal on candidates.
 * - Rerank: strong — cross-encoder reads query + document together (primary meaning).
 * - Fulltext: moderate-high — keyword boost via MiniSearch; not dominant over semantics.
 */
export const RRF_K_VECTOR = 70;
export const RRF_K_FULLTEXT = 40;
export const RRF_K_RERANK = 50;

type RankedItem = {
  id: number;
};

function buildRankMap<T extends RankedItem>(
  items: T[],
  score: (item: T) => number,
  higherIsBetter: boolean,
): Map<number, number> {
  const sorted = [...items].sort((a, b) => {
    const diff = score(b) - score(a);
    return higherIsBetter ? diff : -diff;
  });

  return new Map(sorted.map((item, index) => [item.id, index + 1]));
}

export type HybridSignals = {
  id: number;
  distance: number;
  fulltextScore: number;
  rerankScore: number;
};

/**
 * Reciprocal Rank Fusion across vector, fulltext, and rerank orderings.
 * Final rank uses the fused score (normalized to Combined % in the UI).
 */
export function reciprocalRankFusion(signals: HybridSignals[]): Map<number, number> {
  if (signals.length === 0) {
    return new Map();
  }

  const vectorRanks = buildRankMap(signals, (item) => item.distance, false);
  const fulltextRanks = buildRankMap(signals, (item) => item.fulltextScore, true);
  const rerankRanks = buildRankMap(signals, (item) => item.rerankScore, true);

  return new Map(
    signals.map((item) => {
      const fused =
        1 / (RRF_K_VECTOR + vectorRanks.get(item.id)!) +
        1 / (RRF_K_FULLTEXT + fulltextRanks.get(item.id)!) +
        1 / (RRF_K_RERANK + rerankRanks.get(item.id)!);

      return [item.id, fused] as const;
    }),
  );
}

export function normalizeScores(scores: Map<number, number>): Map<number, number> {
  if (scores.size === 0) {
    return new Map();
  }

  const values = [...scores.values()];
  const max = Math.max(...values);
  const min = Math.min(...values);

  if (max === min) {
    return new Map([...scores.keys()].map((id) => [id, 1]));
  }

  return new Map(
    [...scores.entries()].map(([id, value]) => [id, (value - min) / (max - min)] as const),
  );
}
