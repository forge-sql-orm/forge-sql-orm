import { applySchemaMigrations, dropSchemaMigrations, fetchSchemaWebTrigger } from "forge-sql-orm";
import migration from "./database/migration";

export { handler } from "./resolvers";

export const handlerMigration = async () => {
  return applySchemaMigrations(migration);
};

export const dropMigrations = () => {
  return dropSchemaMigrations();
};

export const fetchMigrations = () => {
  return fetchSchemaWebTrigger();
};
