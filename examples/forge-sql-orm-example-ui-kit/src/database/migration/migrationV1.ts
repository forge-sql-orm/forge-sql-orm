import { MigrationRunner } from "@forge/sql/out/migration";

export default (migrationRunner: MigrationRunner): MigrationRunner => {
  return migrationRunner.enqueue(
    "v1_MIGRATION0",
    "CREATE TABLE IF NOT EXISTS `users` ( `id` int NOT NULL AUTO_INCREMENT, `name` varchar(200) COLLATE utf8mb4_bin DEFAULT NULL, `email` varchar(200) COLLATE utf8mb4_bin DEFAULT NULL, PRIMARY KEY (`id`) ) ENGINE=InnoDB AUTO_INCREMENT=30001 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin",
  );
};
