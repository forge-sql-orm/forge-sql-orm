// SPDX-FileCopyrightText: 2025-2026 Vasyl Zakharchenko
// SPDX-License-Identifier: MIT

import React, { ReactNode, useState } from "react";

export type SortOrder = "ASC" | "DESC";

export interface Column {
  key: string;
  title: string;
  isSortable: boolean;
}

export interface Row {
  key: string;
  cells: Record<string, ReactNode>;
}

interface DataTableProps {
  columns: Column[];
  rows: Row[];
  rowsPerPage?: number;
  onSort: (key: string, sortOrder: SortOrder) => void;
}

export default function DataTable({ columns, rows, rowsPerPage = 5, onSort }: DataTableProps) {
  const [page, setPage] = useState(1);
  const [sort, setSort] = useState<{ key: string; sortOrder: SortOrder } | undefined>();
  const pageCount = Math.max(1, Math.ceil(rows.length / rowsPerPage));
  const current = Math.min(page, pageCount);
  const visible = rows.slice((current - 1) * rowsPerPage, current * rowsPerPage);

  const handleSort = (key: string) => {
    const sortOrder: SortOrder = sort?.key === key && sort.sortOrder === "ASC" ? "DESC" : "ASC";
    setSort({ key, sortOrder });
    onSort(key, sortOrder);
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            {columns.map((c) => (
              <th
                key={c.key}
                className={c.isSortable ? "sortable" : undefined}
                onClick={c.isSortable ? () => handleSort(c.key) : undefined}
              >
                {c.title}
                {sort?.key === c.key && (sort.sortOrder === "ASC" ? " ▲" : " ▼")}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {visible.map((r) => (
            <tr key={r.key}>
              {columns.map((c) => (
                <td key={c.key}>{r.cells[c.key]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      {pageCount > 1 && (
        <div className="pager">
          <button disabled={current <= 1} onClick={() => setPage(current - 1)}>
            prev
          </button>
          <span>
            {current} / {pageCount}
          </span>
          <button disabled={current >= pageCount} onClick={() => setPage(current + 1)}>
            next
          </button>
        </div>
      )}
    </div>
  );
}
