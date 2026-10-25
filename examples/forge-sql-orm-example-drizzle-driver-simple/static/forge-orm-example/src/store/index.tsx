// SPDX-FileCopyrightText: 2025-2026 Vasyl Zakharchenko
// SPDX-License-Identifier: MIT

import React, { createContext, ReactNode, useContext, useState } from "react";
import { DuplicateResponse, UserResponse } from "../utils/Constants";

type SortType = { name: string; sortType: "DESC" | "ASC" } | undefined;
type APP_STATE = "ROOT" | "ADD_USER" | "DUPLICATE";

interface UsersStoreApi {
  isLoading: boolean;
  users: UserResponse[];
  duplicates: DuplicateResponse[];
  sort?: SortType;
  saveUsers: (users: UserResponse[]) => void;
  saveSort: (sort: SortType) => void;
  saveDuplicates: (duplicates: DuplicateResponse[]) => void;
  loading: () => void;
  stopLoading: () => void;
}

interface StateStoreApi {
  state: APP_STATE;
  saveState: (state: APP_STATE) => void;
}

interface RootStoreApi {
  usersStore: UsersStoreApi;
  stateStore: StateStoreApi;
}

const RootStoreContext = createContext<RootStoreApi | null>(null);

export const RootStoreProvider = ({ children }: { children: ReactNode }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [users, setUsers] = useState<UserResponse[]>([]);
  const [duplicates, setDuplicates] = useState<DuplicateResponse[]>([]);
  const [sort, setSort] = useState<SortType>(undefined);
  const [state, setState] = useState<APP_STATE>("ROOT");

  const usersStore: UsersStoreApi = {
    isLoading,
    users,
    duplicates,
    sort,
    saveUsers: setUsers,
    saveSort: setSort,
    saveDuplicates: setDuplicates,
    loading: () => setIsLoading(true),
    stopLoading: () => setIsLoading(false),
  };

  const stateStore: StateStoreApi = {
    state,
    saveState: setState,
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
