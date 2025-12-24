import { MigrationRunner } from "@forge/sql/out/migration";

export default (migrationRunner: MigrationRunner): MigrationRunner => {
  return migrationRunner
    .enqueue(
      "v1_MIGRATION0",
      "CREATE TABLE IF NOT EXISTS `comment` ( `id` varchar(36) NOT NULL, `document_id` varchar(36) NOT NULL, `author_user_id` varchar(36) NOT NULL, `body` text NOT NULL, `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP, PRIMARY KEY (`id`), KEY `idx_comment_document_id` (`document_id`), KEY `idx_comment_author_user_id` (`author_user_id`), CONSTRAINT `comment_author_user_id_user_id_fk` FOREIGN KEY (`author_user_id`) REFERENCES `user` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE, CONSTRAINT `comment_document_id_document_id_fk` FOREIGN KEY (`document_id`) REFERENCES `document` (`id`) ON DELETE CASCADE ON UPDATE CASCADE ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci",
    )
    .enqueue(
      "v1_MIGRATION1",
      "CREATE TABLE IF NOT EXISTS `document` ( `id` varchar(36) NOT NULL, `owner_user_id` varchar(36) NOT NULL, `title` varchar(255) NOT NULL, `body` text NOT NULL, `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP, `updated_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP, PRIMARY KEY (`id`), KEY `idx_document_owner_user_id` (`owner_user_id`), CONSTRAINT `document_owner_user_id_user_id_fk` FOREIGN KEY (`owner_user_id`) REFERENCES `user` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci",
    )
    .enqueue(
      "v1_MIGRATION2",
      "CREATE TABLE IF NOT EXISTS `document_acl` ( `document_id` varchar(36) NOT NULL, `permission_id` varchar(36) NOT NULL, `subject_type` varchar(16) NOT NULL, `subject_id` varchar(36) NOT NULL, PRIMARY KEY (`document_id`,`permission_id`,`subject_type`,`subject_id`), KEY `idx_document_acl_permission_id` (`permission_id`), KEY `idx_document_acl_subject` (`subject_type`,`subject_id`), CONSTRAINT `document_acl_document_id_fk` FOREIGN KEY (`document_id`) REFERENCES `document` (`id`) ON DELETE CASCADE ON UPDATE CASCADE, CONSTRAINT `document_acl_permission_id_fk` FOREIGN KEY (`permission_id`) REFERENCES `permission` (`id`) ON DELETE CASCADE ON UPDATE CASCADE ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci",
    )
    .enqueue(
      "v1_MIGRATION3",
      "CREATE TABLE IF NOT EXISTS `group_role` ( `group_id` varchar(36) NOT NULL, `role_id` varchar(36) NOT NULL, PRIMARY KEY (`group_id`,`role_id`), KEY `idx_group_role_role_id` (`role_id`), CONSTRAINT `group_role_group_id_fk` FOREIGN KEY (`group_id`) REFERENCES `jira_group` (`id`) ON DELETE CASCADE ON UPDATE CASCADE, CONSTRAINT `group_role_role_id_fk` FOREIGN KEY (`role_id`) REFERENCES `role` (`id`) ON DELETE CASCADE ON UPDATE CASCADE ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci",
    )
    .enqueue(
      "v1_MIGRATION4",
      "CREATE TABLE IF NOT EXISTS `jira_group` ( `id` varchar(36) NOT NULL, `name` varchar(255) NOT NULL, `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP, PRIMARY KEY (`id`), UNIQUE KEY `uq_jira_group_name` (`name`) ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci",
    )
    .enqueue(
      "v1_MIGRATION5",
      "CREATE TABLE IF NOT EXISTS `permission` ( `id` varchar(36) NOT NULL, `code` varchar(64) NOT NULL, `description` varchar(1024) NOT NULL, PRIMARY KEY (`id`), UNIQUE KEY `uq_permission_code` (`code`) ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci",
    )
    .enqueue(
      "v1_MIGRATION6",
      "CREATE TABLE IF NOT EXISTS `role` ( `id` varchar(36) NOT NULL, `code` varchar(64) NOT NULL, `name` varchar(255) NOT NULL, `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP, PRIMARY KEY (`id`), UNIQUE KEY `uq_role_code` (`code`) ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci",
    )
    .enqueue(
      "v1_MIGRATION7",
      "CREATE TABLE IF NOT EXISTS `role_hierarchy` ( `parent_role_id` varchar(36) NOT NULL, `child_role_id` varchar(36) NOT NULL, PRIMARY KEY (`parent_role_id`,`child_role_id`), KEY `idx_role_hierarchy_child_role_id` (`child_role_id`), CONSTRAINT `role_hierarchy_child_fk` FOREIGN KEY (`child_role_id`) REFERENCES `role` (`id`) ON DELETE CASCADE ON UPDATE CASCADE, CONSTRAINT `role_hierarchy_parent_fk` FOREIGN KEY (`parent_role_id`) REFERENCES `role` (`id`) ON DELETE CASCADE ON UPDATE CASCADE ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci",
    )
    .enqueue(
      "v1_MIGRATION8",
      "CREATE TABLE IF NOT EXISTS `role_permission` ( `role_id` varchar(36) NOT NULL, `permission_id` varchar(36) NOT NULL, PRIMARY KEY (`role_id`,`permission_id`), KEY `idx_role_permission_permission_id` (`permission_id`), CONSTRAINT `role_permission_permission_id_fk` FOREIGN KEY (`permission_id`) REFERENCES `permission` (`id`) ON DELETE CASCADE ON UPDATE CASCADE, CONSTRAINT `role_permission_role_id_fk` FOREIGN KEY (`role_id`) REFERENCES `role` (`id`) ON DELETE CASCADE ON UPDATE CASCADE ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci",
    )
    .enqueue(
      "v1_MIGRATION9",
      "CREATE TABLE IF NOT EXISTS `user` ( `id` varchar(36) NOT NULL, `jira_account_id` varchar(128) NOT NULL, `display_name` varchar(255) NOT NULL, `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP, `update_at` datetime DEFAULT CURRENT_TIMESTAMP, PRIMARY KEY (`id`), UNIQUE KEY `uq_user_jira_account_id` (`jira_account_id`) ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci",
    )
    .enqueue(
      "v1_MIGRATION10",
      "CREATE TABLE IF NOT EXISTS `user_group` ( `user_id` varchar(36) NOT NULL, `group_id` varchar(36) NOT NULL, PRIMARY KEY (`user_id`,`group_id`), KEY `idx_user_group_group_id` (`group_id`), CONSTRAINT `user_group_group_id_fk` FOREIGN KEY (`group_id`) REFERENCES `jira_group` (`id`) ON DELETE CASCADE ON UPDATE CASCADE, CONSTRAINT `user_group_user_id_fk` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci",
    )
    .enqueue(
      "v1_MIGRATION11",
      "CREATE TABLE IF NOT EXISTS `user_role` ( `user_id` varchar(36) NOT NULL, `role_id` varchar(36) NOT NULL, PRIMARY KEY (`user_id`,`role_id`), KEY `idx_user_role_role_id` (`role_id`), CONSTRAINT `user_role_role_id_fk` FOREIGN KEY (`role_id`) REFERENCES `role` (`id`) ON DELETE CASCADE ON UPDATE CASCADE, CONSTRAINT `user_role_user_id_fk` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci",
    );
};
