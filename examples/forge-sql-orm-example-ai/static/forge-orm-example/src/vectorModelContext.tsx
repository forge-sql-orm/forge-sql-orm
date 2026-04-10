import React, { createContext, useContext } from "react";
import type { VectorBuilder } from "./ai";

const VectorModelContext = createContext<VectorBuilder | null>(null);

export function VectorModelProvider({
  value,
  children,
}: {
  value: VectorBuilder;
  children: React.ReactNode;
}) {
  return <VectorModelContext.Provider value={value}>{children}</VectorModelContext.Provider>;
}

export function useVectorModel(): VectorBuilder {
  const builder = useContext(VectorModelContext);
  if (!builder) {
    throw new Error("VectorModelProvider is missing or model is not ready");
  }
  return builder;
}
