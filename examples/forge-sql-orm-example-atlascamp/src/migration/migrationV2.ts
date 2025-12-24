import { MigrationRunner } from "@forge/sql/out/migration";

export default (migrationRunner: MigrationRunner): MigrationRunner => {
  migrationRunner.enqueue(
    "v2_MIGRATION0",
    "CREATE INDEX if not exists `document_created_at_index` ON `document` (`created_at`);",
  );

  migrationRunner.enqueue(
    "v2_MIGRATION1",
    "CREATE INDEX if not exists `idx_document_acl_subject` ON `document_acl` (`subject_id`, `subject_type`);",
  );
  return migrationRunner;
};
