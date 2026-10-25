// SPDX-FileCopyrightText: 2025-2026 Vasyl Zakharchenko
// SPDX-License-Identifier: MIT

import React, { ReactNode, useState } from "react";

export interface Column {
  key: string;
  title: string;
  width?: number;
}

export interface Row {
  key: string;
  cells: { key: string; content: ReactNode }[];
}

interface DataTableProps {
  columns: Column[];
  rows: Row[];
  rowsPerPage?: number;
}

export default function DataTable({ columns, rows, rowsPerPage = 10 }: DataTableProps) {
  const [page, setPage] = useState(1);
  const pageCount = Math.max(1, Math.ceil(rows.length / rowsPerPage));
  const current = Math.min(page, pageCount);
  const visible = rows.slice((current - 1) * rowsPerPage, current * rowsPerPage);

  return (
    <div>
      <table>
        <thead>
          <tr>
            {columns.map((c) => (
              <th key={c.key} style={c.width ? { width: `${c.width}%` } : undefined}>
                {c.title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {visible.map((r) => (
            <tr key={r.key}>
              {r.cells.map((c) => (
                <td key={c.key}>{c.content}</td>
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
