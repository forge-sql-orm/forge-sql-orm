// SPDX-FileCopyrightText: 2025-2026 Vasyl Zakharchenko
// SPDX-License-Identifier: MIT

import React, { ReactNode, useState } from "react";

export interface Column {
  key: string;
  title: string;
}

export interface Row {
  key: string;
  cells: Record<string, ReactNode>;
}

interface DataTableProps {
  columns: Column[];
  rows: Row[];
  rowsPerPage?: number;
}

const compare = (a: ReactNode, b: ReactNode) => {
  if (typeof a === "number" && typeof b === "number") return a - b;
  return String(a ?? "").localeCompare(String(b ?? ""));
};

export default function DataTable({ columns, rows, rowsPerPage = 10 }: DataTableProps) {
  const [page, setPage] = useState(1);
  const [sort, setSort] = useState<{ key: string; asc: boolean } | undefined>();
  const sorted = sort
    ? [...rows].sort((a, b) => (sort.asc ? 1 : -1) * compare(a.cells[sort.key], b.cells[sort.key]))
    : rows;
  const pageCount = Math.max(1, Math.ceil(sorted.length / rowsPerPage));
  const current = Math.min(page, pageCount);
  const visible = sorted.slice((current - 1) * rowsPerPage, current * rowsPerPage);

  return (
    <div>
      <table>
        <thead>
          <tr>
            {columns.map((c) => (
              <th
                key={c.key}
                className="sortable"
                onClick={() => setSort({ key: c.key, asc: sort?.key === c.key ? !sort.asc : true })}
              >
                {c.title}
                {sort?.key === c.key && (sort.asc ? " ▲" : " ▼")}
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
