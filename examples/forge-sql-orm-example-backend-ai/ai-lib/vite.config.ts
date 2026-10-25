// SPDX-FileCopyrightText: 2025-2026 Vasyl Zakharchenko
// SPDX-License-Identifier: MIT

import { defineConfig, type LibraryFormats, type Plugin, type SSROptions, UserConfig } from "vite";
import path from "path";
import copy from "rollup-plugin-copy";
import * as os from "node:os";

/**
 * transformers.js loads the native ONNX runtime with createRequire(...)("onnxruntime-node"), which
 * a bundler cannot follow, and a deployed Forge function has no node_modules. Turn it into a
 * static import so the runtime's JavaScript is bundled; its .node binary is loaded from
 * dist/bin/napi-v6/<platform>/<arch> (copied by rollup-plugin-copy below).
 */
const inlineOnnxRuntime: Plugin = {
  name: "inline-onnxruntime-node",
  enforce: "pre",
  transform(code, id) {
    const call = 'requireFromHere("onnxruntime-node")';
    if (!id.includes("transformers.node") || !code.includes(call)) return null;
    return {
      code:
        'import * as __ortNode from "onnxruntime-node";\n' +
        code.replace(call, "(__ortNode.default ?? __ortNode)"),
      map: null,
    };
  },
};

export default defineConfig((config: UserConfig) => {
  let arch;
  let isProduction = false;
  if (!config.mode) {
    throw new Error(
      'Missing Vite mode. Use one of: "production:arm64", "production:x86_64", or "tunnel".',
    );
  }
  const mode = config.mode.toLowerCase().trim();
  if (mode.startsWith("production")) {
    isProduction = true;
    const parts = config.mode.split(":");
    if (parts.length !== 2) {
      throw new Error(
        'Invalid production mode. Expected "production:arm64" or "production:x86_64" (exactly one colon).',
      );
    }
    const architecture = parts[1];
    if (architecture === "arm64") {
      arch = "arm64";
    } else if (architecture === "x86_64") {
      arch = "x64";
    } else {
      throw new Error(
        `Unknown architecture "${architecture}". Supported production modes: production:arm64, production:x86_64.`,
      );
    }
  } else if (mode === "tunnel") {
    const hostArch = os.arch();
    if (hostArch === "arm64") {
      arch = "arm64";
    } else if (hostArch === "x64") {
      arch = "x64";
    } else {
      throw new Error(
        `Tunnel build: unsupported host architecture "${hostArch}". Only arm64 and x64 are supported.`,
      );
    }
  } else {
    throw new Error(
      `Unknown mode "${config.mode}". Use "production:arm64", "production:x86_64", or "tunnel".`,
    );
  }

  const noExternal: SSROptions["noExternal"] = isProduction
    ? true
    : ["@huggingface/transformers", "@xenova/transformers", "onnxruntime-web"];

  return {
    plugins: [
      ...(isProduction ? [inlineOnnxRuntime] : []),
      copy({
        targets: [
          {
            src: `node_modules/onnxruntime-node/bin/napi-v6/linux/${arch}/*`,
            dest: `dist/bin/napi-v6/linux/${arch}`,
          },
        ],
        hook: "writeBundle",
        verbose: true,
        overwrite: true,
      }),
    ],
    resolve: {
      alias: {
        sharp: path.resolve(import.meta.dirname, "src/sharp-stub.ts"),
      },
    },
    ssr: {
      noExternal,
    },
    build: {
      lib: {
        entry: path.resolve(import.meta.dirname, "src/index.ts"),
        name: "ForgeAI",
        fileName: "index",
        formats: ["es"] as LibraryFormats[],
      },
      minify: "esbuild",
      rollupOptions: {
        external: [/^node:.*$/],
        output: {
          entryFileNames: `dist/index.mjs`,
          inlineDynamicImports: true,
        },
      },
      ssr: true,
      target: "node24",
    },
  };
});
