// SPDX-FileCopyrightText: 2025-2026 Vasyl Zakharchenko
// SPDX-License-Identifier: MIT

import { ReactNode } from "react";
import { DuplicateResponse, DynamicResponse } from "../utils/Constants";
import DataTable from "./DataTable";
import { createColumns } from "../utils/TableUtils";
import { useRootStore } from "../store";
import { invoke } from "@forge/bridge";

export default function UserTable() {
  const { usersStore, usersMetadata, stateStore } = useRootStore();
  const columns = createColumns(true, true, usersMetadata.metadata!.user.properties);
  const users: DynamicResponse[] = usersStore.users;
  if (!users || users.length === 0) {
    return <div>User Table is EMPTY</div>;
  }
  return (
    <div>
      <div>
        <DataTable
          columns={columns}
          onSort={async (key, sortOrder) => {
            const sortType = { name: key, sortType: sortOrder };
            usersStore.loading();
            try {
              const users = await invoke<DynamicResponse[]>("fetch", { sortType: sortType });
              usersStore.saveUsers(users);
              usersStore.saveSort(sortType);
            } finally {
              usersStore.stopLoading();
            }
          }}
          rows={users.map((d, index) => {
            const cells: Record<string, ReactNode> = { ...d.fields };
            cells.delete = (
              <div>
                <button
                  onClick={async () => {
                    try {
                      usersStore.loading();
                      await invoke("delete", { id: d.id });
                      const users = await invoke<DynamicResponse[]>("fetch", {
                        sortType: usersStore.sort,
                      });
                      usersStore.saveUsers(users);
                    } finally {
                      usersStore.stopLoading();
                    }
                  }}
                >
                  delete
                </button>
              </div>
            );
            return { key: `row-${index}-${d.id}`, cells };
          })}
        />
        <br />
        <br />
        <button
          onClick={async () => {
            usersStore.loading();
            try {
              const dynamicResponses = await invoke<DuplicateResponse[]>("duplicate");
              usersStore.saveDuplicates(dynamicResponses);
              stateStore.saveState("DUPLICATE");
            } finally {
              usersStore.stopLoading();
            }
          }}
        >
          Search Duplicates
        </button>
      </div>
    </div>
  );
}
