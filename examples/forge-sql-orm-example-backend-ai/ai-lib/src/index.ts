import { env, pipeline } from "@huggingface/transformers";
import path from "node:path";

const MODEL_NAME = "all-MiniLM-L6-v2";

export const initAI = async (basePath: string) => {
  env.allowLocalModels = true;
  env.allowRemoteModels = false;

  env.localModelPath = path.join(basePath, "models/");

  const extractor = await pipeline("feature-extraction", MODEL_NAME, {
    device: "cpu",
  });

  return {
    async getVector(text: string): Promise<number[]> {
      const output = await extractor(text, { pooling: "mean", normalize: true });
      return Array.from(output.data) as number[];
    },
  };
};
