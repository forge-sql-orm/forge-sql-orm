import { MigrationRunner } from "@forge/sql/out/migration";

export default (migrationRunner: MigrationRunner): MigrationRunner => {
  return migrationRunner
    .enqueue(
      "v1_MIGRATION0",
      "CREATE TABLE `embedded_documents` ( `id` int AUTO_INCREMENT NOT NULL, `document` text NOT NULL, `embedding` VECTOR(3) NOT NULL, CONSTRAINT `id` PRIMARY KEY(`id`) )",
    )
    .enqueue(
      "v1_MIGRATION1",
      "INSERT INTO embedded_documents(document, embedding )\n" +
        "VALUES\n" +
        "    ('dog', '[1,2,1]'),\n" +
        "    ('fish', '[1,2,4]'),\n" +
        "    ('tree', '[1,0,0]');",
    );
};
