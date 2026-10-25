// SPDX-FileCopyrightText: 2025-2026 Vasyl Zakharchenko
// SPDX-License-Identifier: MIT

import { DuplicateResponse } from "../utils/Constants";
import DataTable from "./DataTable";
import { createColumns } from "../utils/TableUtils";
import { useRootStore } from "../store";
import { invoke } from "@forge/bridge";

export default function DuplicateTable() {
  const { usersStore } = useRootStore();
  const columns = createColumns(false, "DUPLICATE");
  const users: DuplicateResponse[] = usersStore.duplicates;
  if (!users || users.length === 0) {
    return <div>Duplicate Table is EMPTY</div>;
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
              const users = await invoke<DuplicateResponse[]>("duplicate", { sortType: sortType });
              usersStore.saveDuplicates(users);
            } finally {
              usersStore.stopLoading();
            }
          }}
          rows={users.map((d, index) => ({
            key: `row-${index}`,
            cells: { name: d.name, email: d.email, count: d.count },
          }))}
        />
        <br />
        <br />
      </div>
    </div>
  );
}
