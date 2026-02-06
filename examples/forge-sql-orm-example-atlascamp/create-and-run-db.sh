#!/usr/bin/env bash
set -euo pipefail

# -------- configurable ----------
CONTAINER_NAME="forge-sql-orm-mysql"
IMAGE="mysql:8.0"
HOST_PORT="3366"
MYSQL_ROOT_PASSWORD="admin"
MYSQL_DATABASE="sqlforgesqlorm"
# if you want a persistent named volume; set to "" to use an anonymous one
VOLUME_NAME="forge_sql_orm_mysql_data"
# --------------------------------

echo "==> Stop & remove previous container (if exists)"
if docker ps -a --format '{{.Names}}' | grep -q "^${CONTAINER_NAME}\$"; then
  docker rm -f -v "${CONTAINER_NAME}" >/dev/null || true
  echo "   removed ${CONTAINER_NAME} (+anonymous volumes)"
fi


docker run -d \
  --name "${CONTAINER_NAME}" \
  -e MYSQL_ROOT_PASSWORD="${MYSQL_ROOT_PASSWORD}" \
  -e MYSQL_DATABASE="${MYSQL_DATABASE}" \
  -p "${HOST_PORT}:3306" \
  --restart always \
  "${IMAGE}" >/dev/null

echo "==> Waiting for MySQL to be ready on port ${HOST_PORT} ..."
# health-check loop
for i in {1..60}; do
  if docker exec "${CONTAINER_NAME}" mysqladmin ping -proot -p"${MYSQL_ROOT_PASSWORD}" --silent >/dev/null 2>&1; then
    break
  fi
  sleep 2
done

# extra sanity check
docker exec -e MYSQL_PWD="${MYSQL_ROOT_PASSWORD}" -i "${CONTAINER_NAME}" \
  mysql -uroot -e "SELECT VERSION();" >/dev/null

echo "==> Ensure database '${MYSQL_DATABASE}' exists"
docker exec -e MYSQL_PWD="${MYSQL_ROOT_PASSWORD}" -i "${CONTAINER_NAME}" \
  mysql -uroot -e "CREATE DATABASE IF NOT EXISTS \`${MYSQL_DATABASE}\` CHARACTER SET utf8mb4 COLLATE utf8mb4_bin;"


# Double-check by a trivial query
docker exec -i "${CONTAINER_NAME}" \
  mysql -uroot -p"${MYSQL_ROOT_PASSWORD}" -e "SELECT 1;" >/dev/null

echo "==> Creating table 'users' in database '${MYSQL_DATABASE}'"
docker exec -i "${CONTAINER_NAME}" \
  mysql -uroot -p"${MYSQL_ROOT_PASSWORD}" "${MYSQL_DATABASE}" <<'SQL'
SET foreign_key_checks = 0;
CREATE TABLE IF NOT EXISTS comment (
  id varchar(36) COLLATE utf8mb4_0900_ai_ci NOT NULL,
  document_id varchar(36) COLLATE utf8mb4_0900_ai_ci NOT NULL,
  author_user_id varchar(36) COLLATE utf8mb4_0900_ai_ci NOT NULL,
  body text COLLATE utf8mb4_0900_ai_ci NOT NULL,
  created_at datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id) /*T![clustered_index] CLUSTERED */,
  KEY idx_comment_document_id (document_id),
  KEY idx_comment_author_user_id (author_user_id),
  CONSTRAINT comment_author_user_id_user_id_fk FOREIGN KEY (author_user_id) REFERENCES user (id) ON DELETE RESTRICT ON UPDATE CASCADE,
  CONSTRAINT comment_document_id_document_id_fk FOREIGN KEY (document_id) REFERENCES document (id) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
CREATE TABLE IF NOT EXISTS document (
  id varchar(36) COLLATE utf8mb4_0900_ai_ci NOT NULL,
  owner_user_id varchar(36) COLLATE utf8mb4_0900_ai_ci NOT NULL,
  title varchar(255) COLLATE utf8mb4_0900_ai_ci NOT NULL,
  body text COLLATE utf8mb4_0900_ai_ci NOT NULL,
  created_at datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id) /*T![clustered_index] CLUSTERED */,
  KEY idx_document_owner_user_id (owner_user_id),
  KEY document_created_at_index (created_at),
  KEY idx_created_at (created_at),
  KEY idx_document_created_at_id (created_at,id),
  CONSTRAINT document_owner_user_id_user_id_fk FOREIGN KEY (owner_user_id) REFERENCES user (id) ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
CREATE TABLE IF NOT EXISTS document_acl (
  document_id varchar(36) COLLATE utf8mb4_0900_ai_ci NOT NULL,
  permission_id varchar(36) COLLATE utf8mb4_0900_ai_ci NOT NULL,
  subject_type varchar(16) COLLATE utf8mb4_0900_ai_ci NOT NULL,
  subject_id varchar(36) COLLATE utf8mb4_0900_ai_ci NOT NULL,
  PRIMARY KEY (document_id,permission_id,subject_type,subject_id) /*T![clustered_index] CLUSTERED */,
  KEY idx_document_acl_permission_id (permission_id),
  KEY idx_document_acl_subject (subject_type,subject_id),
  KEY document_acl_document_id_permission_id_index (document_id,permission_id),
  KEY idx_doc_perm (document_id,permission_id),
  CONSTRAINT document_acl_document_id_fk FOREIGN KEY (document_id) REFERENCES document (id) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT document_acl_permission_id_fk FOREIGN KEY (permission_id) REFERENCES permission (id) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
CREATE TABLE IF NOT EXISTS group_role (
  group_id varchar(36) COLLATE utf8mb4_0900_ai_ci NOT NULL,
  role_id varchar(36) COLLATE utf8mb4_0900_ai_ci NOT NULL,
  PRIMARY KEY (group_id,role_id) /*T![clustered_index] CLUSTERED */,
  KEY idx_group_role_role_id (role_id),
  CONSTRAINT group_role_group_id_fk FOREIGN KEY (group_id) REFERENCES jira_group (id) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT group_role_role_id_fk FOREIGN KEY (role_id) REFERENCES role (id) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
CREATE TABLE IF NOT EXISTS jira_group (
  id varchar(36) COLLATE utf8mb4_0900_ai_ci NOT NULL,
  name varchar(255) COLLATE utf8mb4_0900_ai_ci NOT NULL,
  created_at datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id) /*T![clustered_index] CLUSTERED */,
  UNIQUE KEY uq_jira_group_name (name)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
CREATE TABLE IF NOT EXISTS permission (
  id varchar(36) COLLATE utf8mb4_0900_ai_ci NOT NULL,
  code varchar(64) COLLATE utf8mb4_0900_ai_ci NOT NULL,
  description varchar(1024) COLLATE utf8mb4_0900_ai_ci NOT NULL,
  PRIMARY KEY (id) /*T![clustered_index] CLUSTERED */,
  UNIQUE KEY uq_permission_code (code)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
CREATE TABLE IF NOT EXISTS role (
  id varchar(36) COLLATE utf8mb4_0900_ai_ci NOT NULL,
  code varchar(64) COLLATE utf8mb4_0900_ai_ci NOT NULL,
  name varchar(255) COLLATE utf8mb4_0900_ai_ci NOT NULL,
  created_at datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id) /*T![clustered_index] CLUSTERED */,
  UNIQUE KEY uq_role_code (code)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
CREATE TABLE IF NOT EXISTS role_hierarchy (
  parent_role_id varchar(36) COLLATE utf8mb4_0900_ai_ci NOT NULL,
  child_role_id varchar(36) COLLATE utf8mb4_0900_ai_ci NOT NULL,
  PRIMARY KEY (parent_role_id,child_role_id) /*T![clustered_index] CLUSTERED */,
  KEY idx_role_hierarchy_child_role_id (child_role_id),
  CONSTRAINT role_hierarchy_child_fk FOREIGN KEY (child_role_id) REFERENCES role (id) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT role_hierarchy_parent_fk FOREIGN KEY (parent_role_id) REFERENCES role (id) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
CREATE TABLE IF NOT EXISTS role_permission (
  role_id varchar(36) COLLATE utf8mb4_0900_ai_ci NOT NULL,
  permission_id varchar(36) COLLATE utf8mb4_0900_ai_ci NOT NULL,
  PRIMARY KEY (role_id,permission_id) /*T![clustered_index] CLUSTERED */,
  KEY idx_role_permission_permission_id (permission_id),
  CONSTRAINT role_permission_permission_id_fk FOREIGN KEY (permission_id) REFERENCES permission (id) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT role_permission_role_id_fk FOREIGN KEY (role_id) REFERENCES role (id) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
CREATE TABLE IF NOT EXISTS user (
  id varchar(36) COLLATE utf8mb4_0900_ai_ci NOT NULL,
  jira_account_id varchar(128) COLLATE utf8mb4_0900_ai_ci NOT NULL,
  display_name varchar(255) COLLATE utf8mb4_0900_ai_ci NOT NULL,
  created_at datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  update_at datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id) /*T![clustered_index] CLUSTERED */,
  UNIQUE KEY uq_user_jira_account_id (jira_account_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
CREATE TABLE IF NOT EXISTS user_group (
  user_id varchar(36) COLLATE utf8mb4_0900_ai_ci NOT NULL,
  group_id varchar(36) COLLATE utf8mb4_0900_ai_ci NOT NULL,
  PRIMARY KEY (user_id,group_id) /*T![clustered_index] CLUSTERED */,
  KEY idx_user_group_group_id (group_id),
  CONSTRAINT user_group_group_id_fk FOREIGN KEY (group_id) REFERENCES jira_group (id) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT user_group_user_id_fk FOREIGN KEY (user_id) REFERENCES user (id) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
CREATE TABLE IF NOT EXISTS user_role (
  user_id varchar(36) COLLATE utf8mb4_0900_ai_ci NOT NULL,
  role_id varchar(36) COLLATE utf8mb4_0900_ai_ci NOT NULL,
  PRIMARY KEY (user_id,role_id) /*T![clustered_index] CLUSTERED */,
  KEY idx_user_role_role_id (role_id),
  CONSTRAINT user_role_role_id_fk FOREIGN KEY (role_id) REFERENCES role (id) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT user_role_user_id_fk FOREIGN KEY (user_id) REFERENCES user (id) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
SET foreign_key_checks = 1
SQL

echo "==> Done. MySQL is running on 127.0.0.1:${HOST_PORT}, DB=${MYSQL_DATABASE}"