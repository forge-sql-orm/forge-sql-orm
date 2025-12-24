import { relations } from "drizzle-orm/relations";
import {
  user,
  comment,
  document,
  documentAcl,
  permission,
  jiraGroup,
  groupRole,
  role,
  roleHierarchy,
  rolePermission,
  userGroup,
  userRole,
} from "./schema";

export const commentRelations = relations(comment, ({ one }) => ({
  user: one(user, {
    fields: [comment.authorUserId],
    references: [user.id],
  }),
  document: one(document, {
    fields: [comment.documentId],
    references: [document.id],
  }),
}));

export const userRelations = relations(user, ({ many }) => ({
  comments: many(comment),
  documents: many(document),
  userGroups: many(userGroup),
  userRoles: many(userRole),
}));

export const documentRelations = relations(document, ({ one, many }) => ({
  comments: many(comment),
  user: one(user, {
    fields: [document.ownerUserId],
    references: [user.id],
  }),
  documentAcls: many(documentAcl),
}));

export const documentAclRelations = relations(documentAcl, ({ one }) => ({
  document: one(document, {
    fields: [documentAcl.documentId],
    references: [document.id],
  }),
  permission: one(permission, {
    fields: [documentAcl.permissionId],
    references: [permission.id],
  }),
}));

export const permissionRelations = relations(permission, ({ many }) => ({
  documentAcls: many(documentAcl),
  rolePermissions: many(rolePermission),
}));

export const groupRoleRelations = relations(groupRole, ({ one }) => ({
  jiraGroup: one(jiraGroup, {
    fields: [groupRole.groupId],
    references: [jiraGroup.id],
  }),
  role: one(role, {
    fields: [groupRole.roleId],
    references: [role.id],
  }),
}));

export const jiraGroupRelations = relations(jiraGroup, ({ many }) => ({
  groupRoles: many(groupRole),
  userGroups: many(userGroup),
}));

export const roleRelations = relations(role, ({ many }) => ({
  groupRoles: many(groupRole),
  roleHierarchies_childRoleId: many(roleHierarchy, {
    relationName: "roleHierarchy_childRoleId_role_id",
  }),
  roleHierarchies_parentRoleId: many(roleHierarchy, {
    relationName: "roleHierarchy_parentRoleId_role_id",
  }),
  rolePermissions: many(rolePermission),
  userRoles: many(userRole),
}));

export const roleHierarchyRelations = relations(roleHierarchy, ({ one }) => ({
  role_childRoleId: one(role, {
    fields: [roleHierarchy.childRoleId],
    references: [role.id],
    relationName: "roleHierarchy_childRoleId_role_id",
  }),
  role_parentRoleId: one(role, {
    fields: [roleHierarchy.parentRoleId],
    references: [role.id],
    relationName: "roleHierarchy_parentRoleId_role_id",
  }),
}));

export const rolePermissionRelations = relations(rolePermission, ({ one }) => ({
  permission: one(permission, {
    fields: [rolePermission.permissionId],
    references: [permission.id],
  }),
  role: one(role, {
    fields: [rolePermission.roleId],
    references: [role.id],
  }),
}));

export const userGroupRelations = relations(userGroup, ({ one }) => ({
  jiraGroup: one(jiraGroup, {
    fields: [userGroup.groupId],
    references: [jiraGroup.id],
  }),
  user: one(user, {
    fields: [userGroup.userId],
    references: [user.id],
  }),
}));

export const userRoleRelations = relations(userRole, ({ one }) => ({
  role: one(role, {
    fields: [userRole.roleId],
    references: [role.id],
  }),
  user: one(user, {
    fields: [userRole.userId],
    references: [user.id],
  }),
}));
