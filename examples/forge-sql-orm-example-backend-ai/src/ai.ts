// SPDX-FileCopyrightText: 2025-2026 Vasyl Zakharchenko
// SPDX-License-Identifier: MIT

import path from "node:path";

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

type AiInstance = {
  getVector: (text: string) => Promise<number[]>;
  rerank: <T>(
    query: string,
    documents: Array<string | RerankInput<T>>,
    options?: { limit?: number },
  ) => Promise<Array<RerankResult<T>>>;
};

let aiInstance: AiInstance | null = null;

async function getAiInstance(): Promise<AiInstance> {
  if (aiInstance) {
    return aiInstance;
  }

  const sidecarPath = path.join(process.cwd(), "ai-lib/dist/dist/index.mjs");

  try {
    const importDynamic = new Function("modulePath", "return import(modulePath)");
    const module = await importDynamic(sidecarPath);
    const initAI = module.initAI as (basePath: string) => Promise<AiInstance>;
    aiInstance = await initAI(process.cwd());
    return aiInstance;
  } catch (err) {
    console.error("Failed to load AI sidecar bundle:", err);
    throw err;
  }
}

export const getVector = async (text: string): Promise<number[]> => {
  const ai = await getAiInstance();
  return ai.getVector(text);
};

export const rerank = async <T>(
  query: string,
  documents: Array<string | RerankInput<T>>,
  options?: { limit?: number },
): Promise<Array<RerankResult<T>>> => {
  const ai = await getAiInstance();
  return ai.rerank(query, documents, options);
};
