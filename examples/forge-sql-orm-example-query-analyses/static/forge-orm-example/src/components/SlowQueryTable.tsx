// SPDX-FileCopyrightText: 2025-2026 Vasyl Zakharchenko
// SPDX-License-Identifier: MIT

import React from "react";
import DataTable from "./DataTable";
import { createColumns } from "../utils/TableUtils";
import { useRootStore } from "../store";
import { SlowQueryNormalized } from "../utils/Constants";

export default function SlowQueryTable() {
  const { usersStore, stateStore } = useRootStore();

  const columns = createColumns("SLOW_QUERY");
  const slowQueries: SlowQueryNormalized[] = usersStore.slowQueries;
  if (!slowQueries || slowQueries.length === 0) {
    return <div>SlowQuery is EMPTY</div>;
  }
  return (
    <div>
      <div>
        <DataTable
          columns={columns}
          rows={slowQueries.map((d, index) => {
            const cells = {
              time: d.time,
              query: d.query,
              queryTime: d.queryTime,
              resultRows: d.resultRows,
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
