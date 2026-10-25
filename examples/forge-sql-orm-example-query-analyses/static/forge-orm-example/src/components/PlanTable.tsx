// SPDX-FileCopyrightText: 2025-2026 Vasyl Zakharchenko
// SPDX-License-Identifier: MIT

import React from "react";
import DataTable from "./DataTable";
import { createColumns } from "../utils/TableUtils";
import { useRootStore } from "../store";
import { ExplainAnalyzeRow } from "../utils/Constants";

export default function PlanTable() {
  const { usersStore } = useRootStore();

  const columns = createColumns("PLAN");
  const plan: ExplainAnalyzeRow[] = usersStore.plan;
  if (!plan || plan.length === 0) {
    return <div>${usersStore.planString}</div>;
  }
  return (
    <div>
      <div>
        <DataTable
          columns={columns}
          rows={plan.map((d, index) => {
            const cells = {
              id: d.id,
              estRows: d.estRows,
              estCost: d.estCost,
              actRows: d.actRows,
              task: d.task,
              accessObject: d.accessObject,
              executionInfo: d.executionInfo,
              operatorInfo: d.operatorInfo,
              memory: d.memory,
              disk: d.disk,
            };
            return { key: `row-${index}`, cells };
          })}
          rowsPerPage={200}
        />
        <br />
        <br />
      </div>
    </div>
  );
}
