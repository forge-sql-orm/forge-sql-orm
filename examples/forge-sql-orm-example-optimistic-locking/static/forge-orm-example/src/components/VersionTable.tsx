// SPDX-FileCopyrightText: 2025-2026 Vasyl Zakharchenko
// SPDX-License-Identifier: MIT

import { CreatedResponseDataType, UPDATE_TYPE } from "../utils/Constants";
import { columns } from "../utils/TableUtils";
import { useRootStore } from "../store";

export default function VersionTable(props: { type: UPDATE_TYPE }) {
  const { stateStore } = useRootStore();
  let data: CreatedResponseDataType | undefined;
  switch (props.type) {
    case "WITHOUT_VERSIONING": {
      data = stateStore.testData;
      break;
    }
    case "OPTIMISTIC_NUMBER": {
      data = stateStore.testDataOptimisticNumber;
      break;
    }
    case "OPTIMISTIC_DATE": {
      data = stateStore.testDataOptimisticDateId;
      break;
    }
    case "OPTIMISTIC_TIMESTAMP": {
      data = stateStore.testDataOptimisticTimeStampId;
      break;
    }
    default: {
      return <div>Unsupported ${props.type}</div>;
    }
  }
  if (!data) {
    return <div>Try update first</div>;
  }
  return (
    <div>
      <table>
        <thead>
          <tr>
            {columns.map((c) => (
              <th key={c.key}>{c.title}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{data.id}</td>
            <td>{String(data.testDateColumn)}</td>
            <td>{data.testNameColumn}</td>
            <td>{data.version !== undefined ? String(data.version) : "EMPTY"}</td>
            <td>
              <button className="btn-warning" onClick={() => stateStore.saveState(props.type)}>
                update
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      <br />
      <br />
    </div>
  );
}
