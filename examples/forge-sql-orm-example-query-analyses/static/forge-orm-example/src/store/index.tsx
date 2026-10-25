// SPDX-FileCopyrightText: 2025-2026 Vasyl Zakharchenko
// SPDX-License-Identifier: MIT

import React, { createContext, ReactNode, useContext, useState } from "react";
import {
  ClusterStatementRowCamelCase,
  ExplainAnalyzeRow,
  SlowQueryNormalized,
} from "../utils/Constants";

type APP_STATE = "ROOT" | "SLOW_QUERY" | "HISTORY" | "PLAN";

interface UsersStoreApi {
  isLoading: boolean;
  plan: ExplainAnalyzeRow[];
  planString: string;
  slowQueries: SlowQueryNormalized[];
  history: ClusterStatementRowCamelCase[];
  showPlan: (plan: ExplainAnalyzeRow[], planString: string) => void;
  saveSlowQuery: (slowQueries: SlowQueryNormalized[]) => void;
  saveHistory: (history: ClusterStatementRowCamelCase[]) => void;
  loading: () => void;
  stopLoading: () => void;
}

interface StateStoreApi {
  state: APP_STATE;
  lastState: APP_STATE;
  saveState: (state: APP_STATE) => void;
}

interface RootStoreApi {
  usersStore: UsersStoreApi;
  stateStore: StateStoreApi;
}

const RootStoreContext = createContext<RootStoreApi | null>(null);

export const RootStoreProvider = ({ children }: { children: ReactNode }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [plan, setPlan] = useState<ExplainAnalyzeRow[]>([]);
  const [planString, setPlanString] = useState("");
  const [slowQueries, setSlowQueries] = useState<SlowQueryNormalized[]>([]);
  const [history, setHistory] = useState<ClusterStatementRowCamelCase[]>([]);
  const [states, setStates] = useState<{ state: APP_STATE; lastState: APP_STATE }>({
    state: "ROOT",
    lastState: "ROOT",
  });

  const usersStore: UsersStoreApi = {
    isLoading,
    plan,
    planString,
    slowQueries,
    history,
    showPlan: (newPlan, newPlanString) => {
      setPlan(newPlan);
      setPlanString(newPlanString);
      setIsLoading(false);
    },
    saveSlowQuery: setSlowQueries,
    saveHistory: setHistory,
    loading: () => setIsLoading(true),
    stopLoading: () => setIsLoading(false),
  };

  const stateStore: StateStoreApi = {
    state: states.state,
    lastState: states.lastState,
    saveState: (state) => setStates((prev) => ({ state, lastState: prev.state })),
  };

  return (
    <RootStoreContext.Provider value={{ usersStore, stateStore }}>
      {children}
    </RootStoreContext.Provider>
  );
};

export const useRootStore = (): RootStoreApi => {
  const ctx = useContext(RootStoreContext);
  if (!ctx) {
    throw new Error("useRootStore must be used within a RootStoreProvider");
  }
  return ctx;
};
