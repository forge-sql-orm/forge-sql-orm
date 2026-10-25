// SPDX-FileCopyrightText: 2025-2026 Vasyl Zakharchenko
// SPDX-License-Identifier: MIT

import { Column } from "../components/DataTable";

export const createColumns = (deleteCell: boolean, type: "USER" | "DUPLICATE"): Column[] => {
  const columns: Column[] =
    type === "USER"
      ? [
          { key: "id", title: "ID", isSortable: true },
          { key: "name", title: "NAME", isSortable: true },
          { key: "email", title: "EMAIL", isSortable: true },
        ]
      : [
          { key: "name", title: "NAME", isSortable: true },
          { key: "email", title: "EMAIL", isSortable: true },
          { key: "count", title: "COUNT", isSortable: true },
        ];
  if (deleteCell) {
    columns.push({ key: "delete", title: "Delete", isSortable: false });
  }
  return columns;
};
