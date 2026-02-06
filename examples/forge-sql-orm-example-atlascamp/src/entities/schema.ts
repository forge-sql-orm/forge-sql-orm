import { forgeDateTimeString } from "forge-sql-orm";

import { mysqlTable, index, primaryKey, varchar, text, unique } from "drizzle-orm/mysql-core";
import { sql } from "drizzle-orm";

export const comment = mysqlTable(
  "comment",
  {
    id: varchar({ length: 36 }).notNull(),
    documentId: varchar("document_id", { length: 36 })
      .notNull()
      .references(() => document.id, { onDelete: "cascade", onUpdate: "cascade" }),
    authorUserId: varchar("author_user_id", { length: 36 })
      .notNull()
      .references(() => user.id, { onDelete: "restrict", onUpdate: "cascade" }),
    body: text().notNull(),
    createdAt: forgeDateTimeString("created_at")
      .default(sql`(CURRENT_TIMESTAMP)`)
      .notNull(),
  },
  (table) => [
    index("idx_comment_author_user_id").on(table.authorUserId),
    index("idx_comment_document_id").on(table.documentId),
    primaryKey({ columns: [table.id], name: "comment_id" }),
  ],
);

export const document = mysqlTable(
  "document",
  {
    id: varchar({ length: 36 }).notNull(),
    ownerUserId: varchar("owner_user_id", { length: 36 })
      .notNull()
      .references(() => user.id, { onDelete: "restrict", onUpdate: "cascade" }),
    title: varchar({ length: 255 }).notNull(),
    body: text().notNull(),
    createdAt: forgeDateTimeString("created_at")
      .default(sql`(CURRENT_TIMESTAMP)`)
      .notNull(),
    updatedAt: forgeDateTimeString("updated_at")
      .default(sql`(CURRENT_TIMESTAMP)`)
      .notNull(),
  },
  (table) => [
    index("document_created_at_index").on(table.createdAt),
    index("idx_created_at").on(table.createdAt),
    index("idx_document_created_at_id").on(table.createdAt, table.id),
    index("idx_document_owner_user_id").on(table.ownerUserId),
    primaryKey({ columns: [table.id], name: "document_id" }),
  ],
);

export const documentAcl = mysqlTable(
  "document_acl",
  {
    documentId: varchar("document_id", { length: 36 })
      .notNull()
      .references(() => document.id, { onDelete: "cascade", onUpdate: "cascade" }),
    permissionId: varchar("permission_id", { length: 36 })
      .notNull()
      .references(() => permission.id, { onDelete: "cascade", onUpdate: "cascade" }),
    subjectType: varchar("subject_type", { length: 16 }).notNull(),
    subjectId: varchar("subject_id", { length: 36 }).notNull(),
  },
  (table) => [
    index("document_acl_document_id_permission_id_index").on(table.documentId, table.permissionId),
    index("idx_doc_perm").on(table.documentId, table.permissionId),
    index("idx_document_acl_permission_id").on(table.permissionId),
    index("idx_document_acl_subject").on(table.subjectType, table.subjectId),
    primaryKey({
      columns: [table.documentId, table.permissionId, table.subjectType, table.subjectId],
      name: "document_acl_document_id_permission_id_subject_type_subject_id",
    }),
  ],
);

export const groupRole = mysqlTable(
  "group_role",
  {
    groupId: varchar("group_id", { length: 36 })
      .notNull()
      .references(() => jiraGroup.id, { onDelete: "cascade", onUpdate: "cascade" }),
    roleId: varchar("role_id", { length: 36 })
      .notNull()
      .references(() => role.id, { onDelete: "cascade", onUpdate: "cascade" }),
  },
  (table) => [
    index("idx_group_role_role_id").on(table.roleId),
    primaryKey({ columns: [table.groupId, table.roleId], name: "group_role_group_id_role_id" }),
  ],
);

export const jiraGroup = mysqlTable(
  "jira_group",
  {
    id: varchar({ length: 36 }).notNull(),
    name: varchar({ length: 255 }).notNull(),
    createdAt: forgeDateTimeString("created_at")
      .default(sql`(CURRENT_TIMESTAMP)`)
      .notNull(),
  },
  (table) => [
    primaryKey({ columns: [table.id], name: "jira_group_id" }),
    unique("uq_jira_group_name").on(table.name),
  ],
);

export const permission = mysqlTable(
  "permission",
  {
    id: varchar({ length: 36 }).notNull(),
    code: varchar({ length: 64 }).notNull(),
    description: varchar({ length: 1024 }).notNull(),
  },
  (table) => [
    primaryKey({ columns: [table.id], name: "permission_id" }),
    unique("uq_permission_code").on(table.code),
  ],
);

export const role = mysqlTable(
  "role",
  {
    id: varchar({ length: 36 }).notNull(),
    code: varchar({ length: 64 }).notNull(),
    name: varchar({ length: 255 }).notNull(),
    createdAt: forgeDateTimeString("created_at")
      .default(sql`(CURRENT_TIMESTAMP)`)
      .notNull(),
  },
  (table) => [
    primaryKey({ columns: [table.id], name: "role_id" }),
    unique("uq_role_code").on(table.code),
  ],
);

export const roleHierarchy = mysqlTable(
  "role_hierarchy",
  {
    parentRoleId: varchar("parent_role_id", { length: 36 })
      .notNull()
      .references(() => role.id, { onDelete: "cascade", onUpdate: "cascade" }),
    childRoleId: varchar("child_role_id", { length: 36 })
      .notNull()
      .references(() => role.id, { onDelete: "cascade", onUpdate: "cascade" }),
  },
  (table) => [
    index("idx_role_hierarchy_child_role_id").on(table.childRoleId),
    primaryKey({
      columns: [table.parentRoleId, table.childRoleId],
      name: "role_hierarchy_parent_role_id_child_role_id",
    }),
  ],
);

export const rolePermission = mysqlTable(
  "role_permission",
  {
    roleId: varchar("role_id", { length: 36 })
      .notNull()
      .references(() => role.id, { onDelete: "cascade", onUpdate: "cascade" }),
    permissionId: varchar("permission_id", { length: 36 })
      .notNull()
      .references(() => permission.id, { onDelete: "cascade", onUpdate: "cascade" }),
  },
  (table) => [
    index("idx_role_permission_permission_id").on(table.permissionId),
    primaryKey({
      columns: [table.roleId, table.permissionId],
      name: "role_permission_role_id_permission_id",
    }),
  ],
);

export const user = mysqlTable(
  "user",
  {
    id: varchar({ length: 36 }).notNull(),
    jiraAccountId: varchar("jira_account_id", { length: 128 }).notNull(),
    displayName: varchar("display_name", { length: 255 }).notNull(),
    createdAt: forgeDateTimeString("created_at")
      .default(sql`(CURRENT_TIMESTAMP)`)
      .notNull(),
    updateAt: forgeDateTimeString("update_at").default(sql`(CURRENT_TIMESTAMP)`),
  },
  (table) => [
    primaryKey({ columns: [table.id], name: "user_id" }),
    unique("uq_user_jira_account_id").on(table.jiraAccountId),
  ],
);

export const userGroup = mysqlTable(
  "user_group",
  {
    userId: varchar("user_id", { length: 36 })
      .notNull()
      .references(() => user.id, { onDelete: "cascade", onUpdate: "cascade" }),
    groupId: varchar("group_id", { length: 36 })
      .notNull()
      .references(() => jiraGroup.id, { onDelete: "cascade", onUpdate: "cascade" }),
  },
  (table) => [
    index("idx_user_group_group_id").on(table.groupId),
    primaryKey({ columns: [table.userId, table.groupId], name: "user_group_user_id_group_id" }),
  ],
);

export const userRole = mysqlTable(
  "user_role",
  {
    userId: varchar("user_id", { length: 36 })
      .notNull()
      .references(() => user.id, { onDelete: "cascade", onUpdate: "cascade" }),
    roleId: varchar("role_id", { length: 36 })
      .notNull()
      .references(() => role.id, { onDelete: "cascade", onUpdate: "cascade" }),
  },
  (table) => [
    index("idx_user_role_role_id").on(table.roleId),
    primaryKey({ columns: [table.userId, table.roleId], name: "user_role_user_id_role_id" }),
  ],
);
