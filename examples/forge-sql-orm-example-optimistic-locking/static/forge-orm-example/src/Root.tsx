// SPDX-FileCopyrightText: 2025-2026 Vasyl Zakharchenko
// SPDX-License-Identifier: MIT

import React, { ReactNode, useState } from "react";
import { invoke } from "@forge/bridge";
import { useRootStore } from "./store";
import VersionTable from "./components/VersionTable";
import { UPDATE_TYPE, UPDATE_TYPES } from "./utils/Constants";

export const Panel = ({ children, testId }: { children: ReactNode; testId?: string }) => (
  <div
    style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
      flexGrow: 1,
      backgroundColor: "#f1f2f4",
      borderRadius: "3px",
      color: "#626f86",
      marginBlockEnd: "8px",
      marginBlockStart: "16px",
      padding: "32px",
    }}
    data-testid={testId}
  >
    {children}
  </div>
);

const TAB_TITLES: Record<UPDATE_TYPE, string> = {
  WITHOUT_VERSIONING: "Entity Without Version Column (No Locking)",
  OPTIMISTIC_NUMBER: "Entity with Numeric Version Column",
  OPTIMISTIC_DATE: "Entity with Datetime-Based Version Column",
  OPTIMISTIC_TIMESTAMP: "Entity with Timestamp-BasedVersion Column",
};

function Root() {
  const { stateStore } = useRootStore();
  const [selected, setSelected] = useState<UPDATE_TYPE>(UPDATE_TYPES[0]);

  if (stateStore.isLoading) {
    return "loading....";
  }

  return (
    <div>
      <div className="reset-section">
        <h2>Reset All</h2>
        <p>
          Click the button below to revert all test entities to their initial state. This removes
          any changes you've made during testing.
        </p>
        <br />
        <button
          className="btn-danger"
          onClick={async () => {
            try {
              stateStore.loading("Clear ...");
              await invoke<string>("clearAll", {
                testDataId: stateStore.testData?.id,
                testDataOptimisticNumberId: stateStore.testDataOptimisticNumber?.id,
                testDataOptimisticDateId: stateStore.testDataOptimisticDateId?.id,
                testDataOptimisticTimeStampId: stateStore.testDataOptimisticTimeStampId?.id,
              });
            } finally {
              stateStore.stopLoading();
            }
            window.location.reload();
          }}
        >
          {" "}
          Reset All
        </button>
      </div>
      <br />
      <p>
        Use the tabs below to navigate between different examples of optimistic locking. Each tab
        demonstrates a different versioning approach, along with instructions on how to test the
        locking behavior.
      </p>
      <br />
      <div className="tabs" role="tablist">
        {UPDATE_TYPES.map((e) => (
          <button
            key={e}
            role="tab"
            aria-selected={selected === e}
            className={selected === e ? "tab selected" : "tab"}
            onClick={() => setSelected(e)}
          >
            {TAB_TITLES[e]}
          </button>
        ))}
      </div>
      {selected === "WITHOUT_VERSIONING" && (
        <Panel>
          <div>
            <h2>Entity Without Version Column (No Locking)</h2>
            <p>
              This entity does not use any versioning or optimistic locking mechanism. When two
              users open the same record in different browser tabs and both make changes, the last
              update simply overwrites the previous changes. There is no conflict detection in
              place.
            </p>
            <h3>How to Test</h3>
            <ol>
              <li>Open this entity's update form in two separate browser tabs.</li>
              <li>
                In the first tab, change any field and click <strong>Update</strong>.
              </li>
              <li>
                In the second tab, also change a field and click <strong>Update</strong>.
              </li>
              <li>
                Both updates will succeed, and the second update will overwrite the first one.
              </li>
            </ol>
            <br />
            <VersionTable type={"WITHOUT_VERSIONING"} />
          </div>
        </Panel>
      )}
      {selected === "OPTIMISTIC_NUMBER" && (
        <Panel>
          <div className="entity-section">
            <h2>Entity with Numeric Version Column</h2>
            <p>
              This entity uses an integer field for optimistic locking. When a user updates the
              record, the version number increments. A second user with an outdated version will
              encounter an error upon saving.
            </p>
            <h3>How to Test</h3>
            <ol>
              <li>Open this entity's update form in two separate browser tabs.</li>
              <li>
                In the first tab, change any field and click <strong>Update</strong>. This succeeds
                and increments the version number.
              </li>
              <li>In the second tab, attempt to update the record without refreshing.</li>
              <li>
                The update will fail with an optimistic locking error, indicating the record was
                modified elsewhere.
              </li>
            </ol>
            <br />
            <VersionTable type={"OPTIMISTIC_NUMBER"} />
          </div>
        </Panel>
      )}
      {selected === "OPTIMISTIC_DATE" && (
        <Panel>
          <div className="entity-section">
            <h2>Entity with DateTime-Based Version Column</h2>
            <p>
              This entity uses a datetime field for optimistic locking. Whenever the record is
              updated, the date-based version changes. Any subsequent update with the old date value
              will fail.
            </p>
            <h3>How to Test</h3>
            <ol>
              <li>Open this entity's update form in two separate browser tabs.</li>
              <li>
                In the first tab, change any field and click <strong>Update</strong>. This sets or
                updates the date-based version.
              </li>
              <li>In the second tab, try to update the record without refreshing.</li>
              <li>
                The second update will fail with an optimistic locking error because the version
                date has changed.
              </li>
            </ol>
            <br />
            <VersionTable type={"OPTIMISTIC_DATE"} />
          </div>
        </Panel>
      )}
      {selected === "OPTIMISTIC_TIMESTAMP" && (
        <Panel>
          <div className="entity-section">
            <h2>Entity with Timestamp-Based Version Column</h2>
            <p>
              This entity uses a timestamp column for optimistic locking. Whenever the record is
              updated, the timestamp is refreshed. Any subsequent update attempts with an outdated
              timestamp will fail.
            </p>
            <h3>How to Test</h3>
            <ol>
              <li>Open this entity's update form in two separate browser tabs.</li>
              <li>
                In the first tab, modify any field and click <strong>Update</strong>. This refreshes
                the timestamp.
              </li>
              <li>In the second tab, try to update the record without reloading the page.</li>
              <li>
                The second update will fail, indicating that another process has already changed the
                record.
              </li>
            </ol>
            <br />
            <VersionTable type={"OPTIMISTIC_TIMESTAMP"} />
          </div>
        </Panel>
      )}
    </div>
  );
}

export default Root;
