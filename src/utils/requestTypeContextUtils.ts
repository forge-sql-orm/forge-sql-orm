// SPDX-FileCopyrightText: 2025-2026 Vasyl Zakharchenko
// SPDX-License-Identifier: MIT

import { AsyncLocalStorage } from "node:async_hooks";
export type OperationType = "DML" | "DDL";

export type OperationTypeQueryContext = {
  operationType: OperationType;
};
export const operationTypeQueryContext = new AsyncLocalStorage<OperationTypeQueryContext>();

export function getOperationType(): Promise<OperationType> {
  return Promise.resolve(operationTypeQueryContext.getStore()?.operationType ?? "DML");
}
