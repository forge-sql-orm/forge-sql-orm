// SPDX-FileCopyrightText: 2025-2026 Vasyl Zakharchenko
// SPDX-License-Identifier: MIT

import {
  AutoModelForSequenceClassification,
  AutoTokenizer,
  env,
  pipeline,
} from "@huggingface/transformers";
import path from "node:path";

const MODEL_NAME = "all-MiniLM-L6-v2";
const MODEL_RERANKER_NAME = "ms-marco-MiniLM-L6-v2";

export type RerankInput<T = unknown> = {
  text: string;
  item?: T;
};

export type RerankResult<T = unknown> = {
  text: string;
  item?: T;
  score: number;
  index: number;
};

export const initAI = async (basePath: string) => {
  env.allowLocalModels = true;
  env.allowRemoteModels = false;
  env.localModelPath = path.join(basePath, "models/");

  const extractor = await pipeline("feature-extraction", MODEL_NAME, {
    device: "cpu",
  });

  const rerankerTokenizer = await AutoTokenizer.from_pretrained(MODEL_RERANKER_NAME);
  const rerankerModel = await AutoModelForSequenceClassification.from_pretrained(
    MODEL_RERANKER_NAME,
    {
      device: "cpu",
    },
  );

  return {
    async getVector(text: string): Promise<number[]> {
      const output = await extractor(text, {
        pooling: "mean",
        normalize: true,
      });

      return Array.from(output.data) as number[];
    },

    async rerank<T = unknown>(
      query: string,
      documents: Array<string | RerankInput<T>>,
      options?: {
        limit?: number;
      },
    ): Promise<Array<RerankResult<T>>> {
      const normalizedDocuments = documents.map((document, index) => {
        if (typeof document === "string") {
          return {
            text: document,
            item: undefined,
            index,
          };
        }

        return {
          text: document.text,
          item: document.item,
          index,
        };
      });

      if (normalizedDocuments.length === 0) {
        return [];
      }

      const ranked: Array<RerankResult<T>> = [];

      for (const document of normalizedDocuments) {
        const inputs = await rerankerTokenizer(query, {
          text_pair: document.text,
          padding: true,
          truncation: true,
        });

        const output = await rerankerModel(inputs);
        const score = Number(output.logits.data[0]);

        ranked.push({
          text: document.text,
          item: document.item,
          index: document.index,
          score,
        });
      }

      ranked.sort((a, b) => b.score - a.score);

      return typeof options?.limit === "number" ? ranked.slice(0, options.limit) : ranked;
    },
  };
};
