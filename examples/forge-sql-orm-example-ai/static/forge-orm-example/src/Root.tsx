import React, { useEffect, useState } from "react";
import SectionMessage from "@atlaskit/section-message";
import Spinner from "@atlaskit/spinner";
import { Box, Inline, Stack } from "@atlaskit/primitives";
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
      <Box padding="space.300">
        <SectionMessage appearance="error">
          <p>Failed to load embedding model: {error}</p>
        </SectionMessage>
      </Box>
    );
  }

  if (!builder) {
    return (
      <Box padding="space.300">
        <Stack space="space.200">
          <SectionMessage appearance="information">
            <Stack space="space.150">
              <Inline space="space.150" alignBlock="center">
                <Spinner size="large" label="Loading embedding model" />
                <strong>Loading embedding model</strong>
              </Inline>
              <p>{formatModelLoadProgress(progressInfo)}</p>
            </Stack>
          </SectionMessage>
        </Stack>
      </Box>
    );
  }

  return (
    <VectorModelProvider value={builder}>
      <App />
    </VectorModelProvider>
  );
}
