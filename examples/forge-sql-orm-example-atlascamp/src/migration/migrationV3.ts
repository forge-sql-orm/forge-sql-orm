import { MigrationRunner } from "@forge/sql/out/migration";

export default (migrationRunner: MigrationRunner): MigrationRunner => {
  migrationRunner.enqueue(
    "v3_MIGRATION0",
    "CREATE INDEX if not exists `document_acl_document_id_permission_id_index` ON `document_acl` (`document_id`, `permission_id`);",
  );
  migrationRunner.enqueue(
    "v3_MIGRATION1",
    "ALTER TABLE document_acl ADD INDEX idx_doc_perm (document_id, permission_id);",
  );
  migrationRunner.enqueue("v3_MIGRATION2", "CREATE INDEX idx_created_at ON document (created_at);");
  migrationRunner.enqueue(
    "v3_MIGRATION3",
    "CREATE INDEX idx_document_created_at_id ON document(created_at, id);",
  );
  migrationRunner.enqueue("v3_MIGRATION4", "ANALYZE TABLE document;");
  migrationRunner.enqueue("v3_MIGRATION5", "ANALYZE TABLE document_acl;");
  return migrationRunner;
};
