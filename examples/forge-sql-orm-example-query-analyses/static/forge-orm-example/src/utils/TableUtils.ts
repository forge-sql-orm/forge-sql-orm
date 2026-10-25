// SPDX-FileCopyrightText: 2025-2026 Vasyl Zakharchenko
// SPDX-License-Identifier: MIT

import { Column } from "../components/DataTable";

const columnsByType: Record<"SLOW_QUERY" | "PLAN" | "HISTORY", Column[]> = {
  SLOW_QUERY: [
    { key: "time", title: "Time" },
    { key: "query", title: "QUERY" },
    { key: "queryTime", title: "TIME" },
    { key: "resultRows", title: "ROWS" },
    { key: "plan", title: "PLAN" },
  ],
  HISTORY: [
    { key: "summaryBeginTime", title: "summaryBeginTime" },
    { key: "summaryEndTime", title: "summaryEndTime" },
    { key: "stmtType", title: "stmtType" },
    { key: "digestText", title: "digestText" },
    { key: "tableNames", title: "tableNames" },
    { key: "planHint", title: "planHint" },
    { key: "plan", title: "PLAN" },
  ],
  PLAN: [
    { key: "id", title: "Id" },
    { key: "estRows", title: "estRows" },
    { key: "estCost", title: "estCost" },
    { key: "actRows", title: "actRows" },
    { key: "task", title: "task" },
    { key: "accessObject", title: "accessObject" },
    { key: "executionInfo", title: "executionInfo" },
    { key: "operatorInfo", title: "operatorInfo" },
    { key: "memory", title: "memory" },
    { key: "disk", title: "disk" },
  ],
};

export const createColumns = (type: "SLOW_QUERY" | "PLAN" | "HISTORY"): Column[] =>
  columnsByType[type];
