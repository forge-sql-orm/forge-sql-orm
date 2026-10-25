// SPDX-FileCopyrightText: 2025-2026 Vasyl Zakharchenko
// SPDX-License-Identifier: MIT

import { DuplicateResponse } from "../utils/Constants";
import DataTable from "./DataTable";
import { createColumns } from "../utils/TableUtils";
import { useRootStore } from "../store";

export default function DuplicateTable() {
  const { usersStore, usersMetadata } = useRootStore();
  const columns = createColumns(false, false, usersMetadata.metadata!.duplicate.properties);
  const users: DuplicateResponse[] = usersStore.duplicates;
  if (!users || users.length === 0) {
    return <div>Duplicate Table is EMPTY</div>;
  }
  return (
    <div>
      <div>
        <DataTable
          columns={columns}
          onSort={() => {}}
          rows={users.map((d, index) => ({
            key: `row-${index}-1`,
            cells: { ...d.fields },
          }))}
        />
        <br />
        <br />
      </div>
    </div>
  );
}
