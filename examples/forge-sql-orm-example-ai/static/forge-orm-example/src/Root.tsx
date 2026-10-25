// SPDX-FileCopyrightText: 2025-2026 Vasyl Zakharchenko
// SPDX-License-Identifier: MIT

import React, { useEffect, useState } from "react";
import App from "./App";
import { miniLLM, VectorBuilder } from "./ai";
import { VectorModelProvider } from "./vectorModelContext";
import { ProgressInfo } from "@huggingface/transformers";

export function formatModelLoadProgress(info: ProgressInfo | null): string {
  if (!info) {
    return "Preparing model…";
  }
  switch (info.status) {
    case "initiate":
      return `Starting: ${info.file}`;
    case "download":
      return `Downloading: ${info.file}`;
    case "progress":
      return `${info.file} — ${info.progress.toFixed(1)}%`;
    case "progress_total":
      return `Overall — ${info.progress.toFixed(1)}%`;
    case "done":
      return `Finished: ${info.file}`;
    case "ready":
      return `Ready: ${info.model}`;
    default:
      return "Loading model…";
  }
}

export default function Root() {
  const [builder, setBuilder] = useState<VectorBuilder | null>(null);
  const [progressInfo, setProgressInfo] = useState<ProgressInfo | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    const onProgress: (info: ProgressInfo) => void = (info) => {
      if (!cancelled) setProgressInfo(info);
    };
    void miniLLM
      .init(onProgress)
      .then((b) => {
        if (!cancelled) setBuilder(b);
      })
      .catch((err) => {
        if (!cancelled) setError(err instanceof Error ? err.message : String(err));
      });
    return () => {
      cancelled = true;
    };
  }, []);

  if (error) {
    return (
      <div className="page">
        <div className="message error">
          <p>Failed to load embedding model: {error}</p>
        </div>
      </div>
    );
  }

  if (!builder) {
    return (
      <div className="page">
        <div className="stack">
          <div className="message">
            <div className="stack">
              <div className="inline">
                <div className="spinner" role="status" aria-label="Loading embedding model" />
                <strong>Loading embedding model</strong>
              </div>
              <p>{formatModelLoadProgress(progressInfo)}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <VectorModelProvider value={builder}>
      <App />
    </VectorModelProvider>
  );
}
