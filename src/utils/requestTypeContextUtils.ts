import { AsyncLocalStorage } from "async_hooks";
export type OperationType = "DML" | "DDL";

export type OperationTypeQueryContext = {
  operationType: OperationType;
};
export const operationTypeQueryContext = new AsyncLocalStorage<OperationTypeQueryContext>();

export async function getOperationType(): Promise<OperationType> {
  return operationTypeQueryContext.getStore()?.operationType ?? "DML";
}
