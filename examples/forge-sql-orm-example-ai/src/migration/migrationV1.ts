import { MigrationRunner } from "@forge/sql/out/migration";

export default (migrationRunner: MigrationRunner): MigrationRunner => {
  return migrationRunner.enqueue(
    "v1_MIGRATION0",
    "CREATE TABLE `embedded_documents` ( `id` int AUTO_INCREMENT NOT NULL, `document` text NOT NULL, `title` VARCHAR(255) NOT NULL, `embedding` VECTOR(384) NOT NULL, CONSTRAINT `id` PRIMARY KEY(`id`) )",
  );
};
