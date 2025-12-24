import { MigrationRunner } from "@forge/sql/out/migration";
import migrationV1 from "./migrationV1";
import migrationV2 from "./migrationV2";
import migrationV3 from "./migrationV3";

export type MigrationType = (migrationRunner: MigrationRunner) => MigrationRunner;

export default (migrationRunner: MigrationRunner): MigrationRunner => {
  migrationV1(migrationRunner);
  migrationV2(migrationRunner);
  migrationV3(migrationRunner);
  return migrationRunner;
};
