import path from "node:path";

let aiInstance: any = null;

export const getVector = async (text: string): Promise<number[]> => {
  if (!aiInstance) {
    const sidecarPath = path.join(process.cwd(), "ai-lib/dist/dist/index.mjs");

    try {
      const importDynamic = new Function("modulePath", "return import(modulePath)");

      const module = await importDynamic(sidecarPath);
      const initAI = module.initAI;

      aiInstance = await initAI(process.cwd());
    } catch (err) {
      console.error("Failed to load AI sidecar bundle:", err);
      throw err;
    }
  }

  return await aiInstance.getVector(text);
};
