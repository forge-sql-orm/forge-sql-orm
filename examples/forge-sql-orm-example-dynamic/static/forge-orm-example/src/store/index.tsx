// SPDX-FileCopyrightText: 2025-2026 Vasyl Zakharchenko
// SPDX-License-Identifier: MIT

import React, { createContext, ReactNode, useContext, useState } from "react";
import { DuplicateResponse, DynamicResponse, Metadata } from "../utils/Constants";

type SortType = { name: string; sortType: "DESC" | "ASC" } | undefined;
type APP_STATE = "ROOT" | "ADD_USER" | "DUPLICATE";

interface UsersStoreApi {
  isLoading: boolean;
  users: DynamicResponse[];
  duplicates: DuplicateResponse[];
  sort?: SortType;
  saveUsers: (users: DynamicResponse[]) => void;
  saveSort: (sort: SortType) => void;
  saveDuplicates: (duplicates: DuplicateResponse[]) => void;
  loading: () => void;
  stopLoading: () => void;
}

interface MetadataStoreApi {
  isLoading: boolean;
  metadata?: Metadata;
  saveMetadata: (metadata: Metadata) => void;
  stopLoading: () => void;
}

interface StateStoreApi {
  state: APP_STATE;
  saveState: (state: APP_STATE) => void;
}

interface RootStoreApi {
  usersStore: UsersStoreApi;
  usersMetadata: MetadataStoreApi;
  stateStore: StateStoreApi;
}

const RootStoreContext = createContext<RootStoreApi | null>(null);

export const RootStoreProvider = ({ children }: { children: ReactNode }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [users, setUsers] = useState<DynamicResponse[]>([]);
  const [duplicates, setDuplicates] = useState<DuplicateResponse[]>([]);
  const [sort, setSort] = useState<SortType>(undefined);
  const [isMetadataLoading, setIsMetadataLoading] = useState(true);
  const [metadata, setMetadata] = useState<Metadata | undefined>(undefined);
  const [state, setState] = useState<APP_STATE>("ROOT");

  const usersStore: UsersStoreApi = {
    isLoading,
    users,
    duplicates,
    sort,
    saveUsers: (newUsers) => {
      setUsers(newUsers);
      setIsLoading(false);
    },
    saveSort: setSort,
    saveDuplicates: setDuplicates,
    loading: () => setIsLoading(true),
    stopLoading: () => setIsLoading(false),
  };

  const usersMetadata: MetadataStoreApi = {
    isLoading: isMetadataLoading,
    metadata,
    saveMetadata: (newMetadata) => {
      setMetadata(newMetadata);
      setIsMetadataLoading(false);
    },
    stopLoading: () => setIsMetadataLoading(false),
  };

  const stateStore: StateStoreApi = {
    state,
    saveState: setState,
  };

  return (
    <RootStoreContext.Provider value={{ usersStore, usersMetadata, stateStore }}>
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
