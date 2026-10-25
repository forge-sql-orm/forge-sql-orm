// SPDX-FileCopyrightText: 2025-2026 Vasyl Zakharchenko
// SPDX-License-Identifier: MIT

import React from "react";
import DataTable from "./DataTable";
import { createColumns } from "../utils/TableUtils";
import { useRootStore } from "../store";
import { ClusterStatementRowCamelCase } from "../utils/Constants";

export default function HistoryTable() {
  const { usersStore, stateStore } = useRootStore();

  const columns = createColumns("HISTORY");
  const history: ClusterStatementRowCamelCase[] = usersStore.history;
  if (!history || history.length === 0) {
    return <div>Query history is EMPTY</div>;
  }
  return (
    <div>
      <div>
        <DataTable
          columns={columns}
          rows={history.map((d, index) => {
            const cells = {
              summaryBeginTime: d.summaryBeginTime,
              summaryEndTime: d.summaryEndTime,
              digestText: d.digestText,
              stmtType: d.stmtType,
              tableNames: d.tableNames,
              planHint: d.planHint,
              plan: !d.parsedPlan ? (
                <p></p>
              ) : (
                <>
                  <button
                    onClick={() => {
                      if (d.parsedPlan) {
                        usersStore.showPlan(d.parsedPlan, d.plan);
                        stateStore.saveState("PLAN");
                      }
                    }}
                  >
                    Show Plan
                  </button>
                </>
              ),
            };
            return { key: `row-${index}`, cells };
          })}
          rowsPerPage={10}
        />
        <br />
        <br />
      </div>
    </div>
  );
}
