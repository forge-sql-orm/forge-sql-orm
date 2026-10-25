// SPDX-FileCopyrightText: 2025-2026 Vasyl Zakharchenko
// SPDX-License-Identifier: MIT

import { Column } from "../components/DataTable";
import { MetadataProperties } from "./Constants";

export const createColumns = (
  sortable: boolean,
  deleteCell: boolean,
  tableMetadata: MetadataProperties,
): Column[] => {
  const columns: Column[] = Object.keys(tableMetadata).map((key) => ({
    key,
    title: key,
    isSortable: sortable,
  }));
  if (deleteCell) {
    columns.push({ key: "delete", title: "Delete", isSortable: false });
  }
  return columns;
};
