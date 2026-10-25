// SPDX-FileCopyrightText: 2025-2026 Vasyl Zakharchenko
// SPDX-License-Identifier: MIT

import React, { createContext, ReactNode, useContext, useState } from "react";
import { CreatedResponse, CreatedResponseDataType, UPDATE_TYPE } from "../utils/Constants";

type APP_STATE = "ROOT" | UPDATE_TYPE;

const DEFAULT_MESSAGE = "Loading ...";

interface StateStoreApi {
  state: APP_STATE;
  isLoading: boolean;
  message: string;
  testData?: CreatedResponseDataType;
  testDataOptimisticNumber?: CreatedResponseDataType;
  testDataOptimisticDateId?: CreatedResponseDataType;
  testDataOptimisticTimeStampId?: CreatedResponseDataType;
  saveState: (state: APP_STATE) => void;
  saveResponse: (response: CreatedResponse) => void;
  loading: (message?: string) => void;
  stopLoading: () => void;
}

interface RootStoreApi {
  stateStore: StateStoreApi;
}

const RootStoreContext = createContext<RootStoreApi | null>(null);

export const RootStoreProvider = ({ children }: { children: ReactNode }) => {
  const [state, setState] = useState<APP_STATE>("ROOT");
  const [isLoading, setIsLoading] = useState(true);
  const [message, setMessage] = useState(DEFAULT_MESSAGE);
  const [response, setResponse] = useState<CreatedResponse | undefined>();

  const stateStore: StateStoreApi = {
    state,
    isLoading,
    message,
    testData: response?.testDataId,
    testDataOptimisticNumber: response?.testDataOptimisticNumberId,
    testDataOptimisticDateId: response?.testDataOptimisticDateId,
    testDataOptimisticTimeStampId: response?.testDataOptimisticTimeStampId,
    saveState: setState,
    saveResponse: setResponse,
    loading: (msg) => {
      setIsLoading(true);
      setMessage(msg ?? DEFAULT_MESSAGE);
    },
    stopLoading: () => {
      setIsLoading(false);
      setMessage(DEFAULT_MESSAGE);
    },
  };

  return <RootStoreContext.Provider value={{ stateStore }}>{children}</RootStoreContext.Provider>;
};

export const useRootStore = (): RootStoreApi => {
  const ctx = useContext(RootStoreContext);
  if (!ctx) {
    throw new Error("useRootStore must be used within a RootStoreProvider");
  }
  return ctx;
};
