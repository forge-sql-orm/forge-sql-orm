// SPDX-FileCopyrightText: 2025-2026 Vasyl Zakharchenko
// SPDX-License-Identifier: MIT

import { DuplicateResponse, UserResponse } from "../utils/Constants";
import DataTable from "./DataTable";
import { createColumns } from "../utils/TableUtils";
import { useRootStore } from "../store";
import { invoke } from "@forge/bridge";

export default function UserTable() {
  const { usersStore, stateStore } = useRootStore();
  const columns = createColumns(true, "USER");
  const users: UserResponse[] = usersStore.users;
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
              const users = await invoke<UserResponse[]>("fetch", { sortType: sortType });
              usersStore.saveUsers(users);
              usersStore.saveSort(sortType);
            } finally {
              usersStore.stopLoading();
            }
          }}
          rows={users.map((d, index) => {
            const cells = {
              id: d.id,
              name: d.name,
              email: d.email,
              delete: (
                <div>
                  <button
                    onClick={async () => {
                      try {
                        usersStore.loading();
                        await invoke("delete", { id: d.id });
                        const users = await invoke<UserResponse[]>("fetch", {
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
              ),
            };
            return { key: `row-${index}-${d.id}`, cells };
          })}
        />
        <br />
        <br />
        <button
          onClick={async () => {
            usersStore.loading();
            try {
              const dynamicResponses = await invoke<DuplicateResponse[]>("duplicate", {
                sortType: usersStore.sort,
              });
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
