/// <reference types="vite/client" />
import { env, FeatureExtractionPipeline, pipeline } from "@huggingface/transformers";

env.localModelPath = `./models/`;

env.allowLocalModels = true;
env.allowRemoteModels = false;
env.useBrowserCache = false;

const isDevMode = import.meta.env.DEV;
env.backends.onnx.wasm!.wasmPaths = isDevMode ? `${window.location.origin}/wasm/` : `../wasm/`;

const MODEL_NAME = `all-MiniLM-L6-v2`;

interface VectorBuilder {
  getVector(text: string): Promise<number[]>;
}

interface MiniLLM {
  init(): Promise<VectorBuilder>;
}

class VectorBuilderImpl implements VectorBuilder {
  private readonly extractor: FeatureExtractionPipeline;

  constructor(extractor: FeatureExtractionPipeline) {
    this.extractor = extractor;
  }

  async getVector(text: string): Promise<number[]> {
    const output = await this.extractor(text, {
      pooling: "mean",
      normalize: true,
    });
    return Array.from(output.data) as number[];
  }
}

class MiniLLMImpl implements MiniLLM {
  async init(): Promise<VectorBuilder> {
    const extractor = await pipeline("feature-extraction", MODEL_NAME);
    return new VectorBuilderImpl(extractor);
  }
}

export const miniLLM: MiniLLM = new MiniLLMImpl();
