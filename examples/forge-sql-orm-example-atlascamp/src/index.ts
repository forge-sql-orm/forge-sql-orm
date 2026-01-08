import Resolver from "@forge/resolver";
import { AsyncEvent, Queue } from "@forge/events";
import {
  applySchemaMigrations,
  clearCacheSchedulerTrigger,
  dropSchemaMigrations,
  fetchSchemaWebTrigger,
  formatLimitOffset,
  printDegradationQueriesConsumer,
  slowQuerySchedulerTrigger,
} from "forge-sql-orm";
import migration from "./migration";
import { FORGE_SQL_ORM } from "./utils/forgeSqlOrmUtils";
import { and, desc, eq, getTableColumns, inArray, or, sql } from "drizzle-orm";
// import { NewUserOrder, UserOrderRow } from "./utils/Constants";
import { MigrationRunner } from "@forge/sql/out/migration";
import {
  comment,
  document,
  documentAcl,
  groupRole,
  jiraGroup,
  permission,
  role,
  roleHierarchy,
  rolePermission,
  user,
  userGroup,
  userRole,
} from "./entities";
import kvs from "@forge/kvs";
import { MIGRATION_VERSION } from "./migration/migrationCount";
import { ColumnDataType } from "drizzle-orm/column-builder";
import type { ColumnBaseConfig } from "drizzle-orm/column";
import { AnyMySqlColumn } from "drizzle-orm/mysql-core/columns/common";

const DEGRADATION_QUEUE = "degradationQueue";
const MIGRATION_QUEUE = "migrationQueue";
const migrationQueue = new Queue({ key: MIGRATION_QUEUE });

//const USER_ID = "fce59721-2149-46da-ac36-ad9aede46235";
const USER_ID = "7e212a62-f6de-4715-8a86-2406c29c42e3";

const query1 =
  "SELECT d.id, d.owner_user_id as userId, d.created_at as createdAt, d.id as documentId , d.title, d.body \n" +
  "FROM document d\n" +
  "JOIN (\n" +
  "  SELECT d2.id\n" +
  "  FROM document d2\n" +
  "  WHERE\n" +
  "    d2.owner_user_id = 'ef758625-1f8d-461b-ac5c-e43444b94273'\n" +
  "    \n" +
  "  ORDER BY d2.created_at DESC\n" +
  "  LIMIT 10 OFFSET 0\n" +
  ") x ON x.id = d.id\n" +
  "ORDER BY d.created_at DESC;";
const query =
  "SELECT /*+ MEMORY_QUOTA(1024 MB) */ d.id, d.owner_user_id, d.created_at, d.title, d.body\n" +
  "FROM document d\n" +
  "WHERE d.id IN (\n" +
  "    SELECT a.document_id\n" +
  "    FROM document_acl a\n" +
  "    WHERE a.permission_id IN (\n" +
  "        SELECT rp.permission_id\n" +
  "        FROM user_role ur\n" +
  "        JOIN role_permission rp ON ur.role_id = rp.role_id\n" +
  "        WHERE ur.user_id = '7e212a62-f6de-4715-8a86-2406c29c42e3'\n" +
  "    )\n" +
  ")\n" +
  "ORDER BY d.created_at DESC\n" +
  "LIMIT 10 OFFSET 0;";

// const SQL_CACHE_QUERY = FORGE_SQL_ORM.selectCacheable({
//   userId: demoUsers.id,
//   userName: demoUsers.name,
//   product: demoOrders.product,
//   productId: demoOrders.id,
//   sleep: sql<number>`SLEEP(0.5)`,
// })
//   .from(demoUsers)
//   .leftJoin(demoOrders, eq(demoOrders.userId, demoUsers.id));
//
// const SQL_QUERY = FORGE_SQL_ORM.select({
//   userId: demoUsers.id,
//   userName: demoUsers.name,
//   product: demoOrders.product,
//   productId: demoOrders.id,
//   sleep: sql<number>`SLEEP(0.5)`,
// })
//   .from(demoUsers)
//   .innerJoin(demoOrders, eq(demoOrders.userId, demoUsers.id));
//
// const SQL_QUERY_TIMEOUT = FORGE_SQL_ORM.select({
//   userId: demoUsers.id,
//   userName: demoUsers.name,
//   product: demoOrders.product,
//   productId: demoOrders.id,
//   sleep: sql<number>`SLEEP(10)`,
// })
//   .from(demoUsers)
//   .innerJoin(demoOrders, eq(demoOrders.userId, demoUsers.id));
export function withTidbHint<
  TDataType extends ColumnDataType,
  TPartial extends Partial<ColumnBaseConfig<TDataType, string>>,
>(column: AnyMySqlColumn<TPartial>): AnyMySqlColumn<TPartial> {
  // We lie a bit to TypeScript here: at runtime this is a new SQL fragment,
  // but returning TExpr keeps the column type info in downstream inference.
  return sql`/*+ MEMORY_QUOTA(1024 MB) */ ${column}` as unknown as AnyMySqlColumn<TPartial>;
}
const resolver = new Resolver();
//
export const handler = resolver.getDefinitions();
//
resolver.define("getTimeOutError", async () => {
  try {
    await FORGE_SQL_ORM.select({
      ...getTableColumns(document),
    })
      .from(document)
      .where(eq(document.ownerUserId, USER_ID));
  } catch (e) {
    throw new Error(e.cause.suggestion ?? e.cause.message, e.cause.context.debug);
  }
});

resolver.define("getOOMError", async () => {
  try {
    const permissionSubquery = FORGE_SQL_ORM.select({ permissionId: rolePermission.permissionId })
      .from(userRole)
      .innerJoin(rolePermission, eq(rolePermission.roleId, userRole.roleId))
      .where(eq(userRole.userId, USER_ID));

    return FORGE_SQL_ORM.select({
      id: document.id,
      userId: document.ownerUserId,
      createdAt: document.createdAt,
      title: document.title,
      documentId: documentAcl.documentId,
      permissionId: documentAcl.permissionId,
      body: document.body,
    })
      .from(document)
      .innerJoin(documentAcl, eq(documentAcl.documentId, document.id))
      .where(inArray(documentAcl.permissionId, permissionSubquery))
      .orderBy(desc(document.createdAt))
      .limit(formatLimitOffset(10))
      .offset(formatLimitOffset(0));
  } catch (e) {
    throw new Error(e.cause.context.debug.message ?? e.cause.message, e.cause.context.debug);
  }
});

resolver.define("getQueryResultCache", async () => {
  const perms = await FORGE_SQL_ORM.selectDistinctCacheable({
    permission_id: rolePermission.permissionId,
    userId: userRole.userId,
  })
    .from(userRole)
    .innerJoin(rolePermission, and(eq(userRole.roleId, rolePermission.roleId)))
    .where(eq(userRole.userId, USER_ID));

  return (
    await FORGE_SQL_ORM.executeWithMetadata(
      () =>
        FORGE_SQL_ORM.execute(
          "SELECT d.id, d.owner_user_id as userId, d.created_at as createdAt, d.title, d.body\n" +
            "FROM document d\n" +
            "WHERE d.id IN (\n" +
            "    SELECT a.document_id\n" +
            "    FROM document_acl a\n" +
            "    WHERE a.permission_id IN (" +
            perms.map((p) => `'${p.permission_id}'`).join(",") +
            " )\n" +
            "ORDER BY d.created_at DESC\n" +
            "LIMIT 10 OFFSET 999" +
            ");\n",
        ),
      async (totalDbExecutionTime, totalResponseSize, printQueriesWithPlan) => {
        await printQueriesWithPlan();
      },
    )
  )[0];
  // return FORGE_SQL_ORM.executeWithMetadata(()=> FORGE_SQL_ORM.select({
  //   id: document.id,
  //   userId: document.ownerUserId,
  //   createdAt: document.createdAt,
  //   title: document.title,
  //   documentId: documentAcl.documentId,
  //   permissionId: documentAcl.permissionId,
  //   body: document.body,
  // })
  //   .from(document)
  //   .innerJoin(documentAcl, eq(documentAcl.documentId, document.id))
  //   .where(
  //     or(
  //       inArray(
  //         documentAcl.permissionId,
  //         perms.map((p) => p.permission_id),
  //       ),
  //       // eq(document.ownerUserId, USER_ID),
  //     ),
  //   )
  //   .orderBy(desc(document.createdAt))
  //   .limit(formatLimitOffset(10))
  //   .offset(formatLimitOffset(999)),
  //     async (totalDbExecutionTime, totalResponseSize, printQueriesWithPlan)=>{
  //         await printQueriesWithPlan()
  //     });
});

resolver.define("getQueryResult", async () => {
  const handleQueryPerformance = async (
    totalDbExecutionTime: number,
    totalResponseSize: number,
    printQueriesWithPlan: () => Promise<void>,
  ) => {
    if (totalDbExecutionTime >= 500) {
      console.warn(
        `Resolver getQueryResult has high database execution time: ${totalDbExecutionTime}ms`,
      );
      await printQueriesWithPlan();
      return;
    }
  };

  const result = await FORGE_SQL_ORM.executeWithMetadata(
    () => FORGE_SQL_ORM.execute(query),
    handleQueryPerformance,
    { asyncQueueName: DEGRADATION_QUEUE },
  );

  return result[0];
});

export const handlerMigration = async () => {
  // const explainAnalyzeRows = await FORGE_SQL_ORM.analyze().explain(FORGE_SQL_ORM.selectFrom(document).where(eq(document.ownerUserId, "ef758625-1f8d-461b-ac5c-e43444b94273")));
  // console.log(JSON.stringify(explainAnalyzeRows))
  // const explainAnalyzeRows2 = await FORGE_SQL_ORM.analyze().explainAnalyze(FORGE_SQL_ORM.selectFrom(document).where(eq(document.ownerUserId, "ef758625-1f8d-461b-ac5c-e43444b94273")));
  // console.log(JSON.stringify(explainAnalyzeRows2))

  //     const query1 = "SELECT DISTINCT rp.permission_id\n" +
  //         "FROM user_role eur\n" +
  //         "JOIN role_permission rp ON rp.role_id = eur.role_id\n" +
  //         "WHERE eur.user_id = 'ef758625-1f8d-461b-ac5c-e43444b94273';"
  //
  //
  //     const perms = await FORGE_SQL_ORM.select({
  //         permission_id: rolePermission.permissionId
  //     }).from(userRole).innerJoin(rolePermission, and(eq(userRole.roleId, rolePermission.roleId)))
  //         .where(eq(userRole.userId, USER_ID))
  //
  //     console.log(perms);
  //     const permList = perms.map(p => `'${String(p.permission_id).replace(/'/g, "''")}'`).join(',');
  //     const result = await FORGE_SQL_ORM
  //         .select({
  //             id: document.id,
  //             userId: document.ownerUserId,
  //             createdAt: document.createdAt,
  //             title: document.title,
  //             documentId: documentAcl.documentId,
  //             permissionId: documentAcl.permissionId,
  //             body: document.body,
  //         })
  //         .from(document)
  //         .innerJoin(documentAcl, eq(documentAcl.documentId, document.id))
  //         .where(
  //             or(
  //                 inArray(documentAcl.permissionId, perms.map(p => p.permission_id)),
  //                 eq(document.ownerUserId, USER_ID),
  //             ),
  //         )
  //         .orderBy(desc(document.createdAt))
  //         .limit(formatLimitOffset(10))
  //         .offset(formatLimitOffset(0));
  //     console.log(JSON.stringify(result));
  // // Если perms пустой — IN () будет синтаксической ошибкой, поэтому подставим NULL
  //     const inList = permList.length ? permList : 'NULL';
  //
  //     const query2 = `
  //         SELECT *
  //         FROM document d
  //                  INNER JOIN document_acl a ON a.document_id = d.id
  //         WHERE (a.permission_id IN (${inList}) or d.owner_user_id = '${USER_ID}')
  //         ORDER BY d.created_at DESC LIMIT 10
  //         OFFSET 0;
  //     `;
  //     const query = "SELECT d.id, d.owner_user_id, d.created_at, d.title, d.body\n" +
  //         "FROM document d\n" +
  //         "JOIN (\n" +
  //         "  SELECT d2.id\n" +
  //         "  FROM document d2\n" +
  //         "  WHERE\n" +
  //         "    d2.owner_user_id = 'ef758625-1f8d-461b-ac5c-e43444b94273'\n" +
  //         "    OR EXISTS (\n" +
  //         "      SELECT 1\n" +
  //         "      FROM document_acl a\n" +
  //         "      WHERE a.document_id = d2.id\n" +
  //         "        AND a.permission_id IN (\n" +
  //         "          SELECT rp.permission_id\n" +
  //         "          FROM user_role ur\n" +
  //         "          JOIN role_permission rp ON rp.role_id = ur.role_id\n" +
  //         "          WHERE ur.user_id = 'ef758625-1f8d-461b-ac5c-e43444b94273'\n" +
  //         "        )\n" +
  //         "    )\n" +
  //         "  ORDER BY d2.created_at DESC\n" +
  //         "  LIMIT 10 OFFSET 0\n" +
  //         ") x ON x.id = d.id\n" +
  //         "ORDER BY d.created_at DESC;";
  //     const query3 = "SELECT\n" +
  //         "  d.id,\n" +
  //         "  d.owner_user_id,\n" +
  //         "  d.created_at,\n" +
  //         "  d.body,\n" +
  //         "  d.title\n" +
  //         "FROM document d\n" +
  //         "WHERE\n" +
  //         "  d.owner_user_id = 'ef758625-1f8d-461b-ac5c-e43444b94273'\n" +
  //         "  OR EXISTS (\n" +
  //         "    SELECT 1\n" +
  //         "    FROM document_acl a\n" +
  //         "    WHERE a.document_id = d.id\n" +
  //         "      AND a.permission_id IN (\n" +
  //         "        SELECT rp.permission_id\n" +
  //         "        FROM user_role ur\n" +
  //         "        JOIN role_permission rp\n" +
  //         "          ON rp.role_id = ur.role_id\n" +
  //         "        WHERE ur.user_id = 'ef758625-1f8d-461b-ac5c-e43444b94273'\n" +
  //         "      )\n" +
  //         "  )\n" +
  //         "ORDER BY d.created_at DESC\n" +
  //         "LIMIT 10 OFFSET 0;";
  //
  //     try {
  //         const explainAnalyzeRows3 = await FORGE_SQL_ORM.analyze().explainAnalyzeRaw(query, []);
  //         console.log(JSON.stringify(explainAnalyzeRows3))
  //     } catch (e) {
  //         console.log('analyze')
  //     }
  //     await FORGE_SQL_ORM.execute(
  //         query,
  //     );
  console.debug("prepare job");
  const jobId = await kvs.get<string>("MIGRATION_STATUS");
  if (jobId) {
    const jobProgress = migrationQueue.getJob(jobId || "");
    const jobStats = await jobProgress.getStats();
    if (jobStats.inProgress) {
      console.log("Migration In Progress");
      return;
    }
  }
  console.log("job triggers");
  const pushResult = await migrationQueue.push({
    body: {},
    concurrency: { key: MIGRATION_QUEUE, limit: 1 },
  });
  await kvs.set("MIGRATION_STATUS", pushResult.jobId);
};

export const dropMigrations = () => {
  return dropSchemaMigrations();
};

export const fetchMigrations = async () => {
  return fetchSchemaWebTrigger();
};

export const runSlowQuery = async () => {
  return slowQuerySchedulerTrigger(FORGE_SQL_ORM, { hours: 1, timeout: 3000 });
};

export const clearCache = () => {
  return clearCacheSchedulerTrigger({ cacheEntityName: "cache", logRawSqlQuery: true });
};

export const handlerAsyncDegradation = (event: AsyncEvent) => {
  return printDegradationQueriesConsumer(FORGE_SQL_ORM, event);
};

/**
 * Generates a UUID v4
 */
function generateUUID(): string {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0;
    const v = c === "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

/**
 * Generates a string of approximately 1KB
 */
function generate1KBString(): string {
  return "x".repeat(1024);
}

/**
 * Splits array into chunks
 */
function chunk<T>(array: T[], size: number): T[][] {
  const chunks: T[][] = [];
  for (let i = 0; i < array.length; i += size) {
    chunks.push(array.slice(i, i + size));
  }
  return chunks;
}

/**
 * Seeds the database with test data
 */
async function seedDatabase(): Promise<void> {
  console.log("Starting database seeding...");

  // 1. Permission - 10 records
  console.log("Inserting permissions...");
  const permissions = Array.from({ length: 10 }, (_, i) => ({
    id: generateUUID(),
    code: `permission_${i + 1}`,
    description: `Permission description ${i + 1}`,
  }));
  const permissionChunks = chunk(permissions, 10);
  for (const chunk of permissionChunks) {
    await FORGE_SQL_ORM.insert(permission).values(chunk);
  }
  console.log(`✅ Inserted ${permissions.length} permissions`);

  // 2. Role - 30 records
  console.log("Inserting roles...");
  const roles = Array.from({ length: 30 }, (_, i) => ({
    id: generateUUID(),
    code: `role_${i + 1}`,
    name: `Role ${i + 1}`,
  }));
  const roleChunks = chunk(roles, 30);
  for (const chunk of roleChunks) {
    await FORGE_SQL_ORM.insert(role).values(chunk);
  }
  console.log(`✅ Inserted ${roles.length} roles`);

  // 3. JiraGroup - 50 records
  console.log("Inserting jira groups...");
  const jiraGroups = Array.from({ length: 50 }, (_, i) => ({
    id: generateUUID(),
    name: `Group ${i + 1}`,
  }));
  const jiraGroupChunks = chunk(jiraGroups, 50);
  for (const chunk of jiraGroupChunks) {
    await FORGE_SQL_ORM.insert(jiraGroup).values(chunk);
  }
  console.log(`✅ Inserted ${jiraGroups.length} jira groups`);

  // 4. User - 300 records
  console.log("Inserting users...");
  const users = Array.from({ length: 300 }, (_, i) => ({
    id: generateUUID(),
    jiraAccountId: `jira_account_${i + 1}`,
    displayName: `User ${i + 1}`,
  }));
  const userChunks = chunk(users, 100);
  for (const chunk of userChunks) {
    await FORGE_SQL_ORM.insert(user).values(chunk);
  }
  console.log(`✅ Inserted ${users.length} users`);

  // 5. Document - 100 per user (300 * 100 = 30000)
  console.log("Inserting documents...");
  const documents: Array<{
    id: string;
    ownerUserId: string;
    title: string;
    body: string;
  }> = [];
  for (const userRecord of users) {
    for (let i = 0; i < 100; i++) {
      documents.push({
        id: generateUUID(),
        ownerUserId: userRecord.id,
        title: `Document ${i + 1} for User ${userRecord.displayName}`,
        body: generate1KBString(),
      });
    }
  }
  const documentChunks = chunk(documents, 500);
  let docBatchNum = 0;
  for (const chunk of documentChunks) {
    docBatchNum++;
    await FORGE_SQL_ORM.insert(document).values(chunk);
    if (docBatchNum % 10 === 0) {
      console.log(`  Inserted ${docBatchNum * 500} / ${documents.length} documents...`);
    }
  }
  console.log(`✅ Inserted ${documents.length} documents`);

  // 6. Comment - 1 per document (30000)
  console.log("Inserting comments...");
  const comments: Array<{
    id: string;
    documentId: string;
    authorUserId: string;
    body: string;
  }> = [];
  for (const doc of documents) {
    // Random user as author
    const author = users[Math.floor(Math.random() * users.length)];
    comments.push({
      id: generateUUID(),
      documentId: doc.id,
      authorUserId: author.id,
      body: `Comment for document ${doc.title}`,
    });
  }
  const commentChunks = chunk(comments, 500);
  let commentBatchNum = 0;
  for (const chunk of commentChunks) {
    commentBatchNum++;
    await FORGE_SQL_ORM.insert(comment).values(chunk);
    if (commentBatchNum % 10 === 0) {
      console.log(`  Inserted ${commentBatchNum * 500} / ${comments.length} comments...`);
    }
  }
  console.log(`✅ Inserted ${comments.length} comments`);

  // 7. DocumentAcl - 10 per document (30000 * 10 = 300000)
  console.log("Inserting document ACLs...");
  const documentAcls: Array<{
    documentId: string;
    permissionId: string;
    subjectType: string;
    subjectId: string;
  }> = [];
  for (const doc of documents) {
    // Select 10 random permissions
    const selectedPermissions = permissions.sort(() => Math.random() - 0.5).slice(0, 10);
    for (const perm of selectedPermissions) {
      // Random user or group as subject
      const subjectType = Math.random() > 0.5 ? "user" : "group";
      const subjectId =
        subjectType === "user"
          ? users[Math.floor(Math.random() * users.length)].id
          : jiraGroups[Math.floor(Math.random() * jiraGroups.length)].id;
      documentAcls.push({
        documentId: doc.id,
        permissionId: perm.id,
        subjectType,
        subjectId,
      });
    }
  }
  const documentAclChunks = chunk(documentAcls, 1000);
  let aclBatchNum = 0;
  for (const chunk of documentAclChunks) {
    aclBatchNum++;
    await FORGE_SQL_ORM.insert(documentAcl).values(chunk);
    if (aclBatchNum % 50 === 0) {
      console.log(`  Inserted ${aclBatchNum * 1000} / ${documentAcls.length} document ACLs...`);
    }
  }
  console.log(`✅ Inserted ${documentAcls.length} document ACLs`);

  // 8. GroupRole - 50 records
  console.log("Inserting group roles...");
  const groupRoles: Array<{
    groupId: string;
    roleId: string;
  }> = [];
  const usedGroupRolePairs = new Set<string>();
  while (groupRoles.length < 50) {
    const group = jiraGroups[Math.floor(Math.random() * jiraGroups.length)];
    const roleItem = roles[Math.floor(Math.random() * roles.length)];
    const pairKey = `${group.id}-${roleItem.id}`;
    if (!usedGroupRolePairs.has(pairKey)) {
      usedGroupRolePairs.add(pairKey);
      groupRoles.push({
        groupId: group.id,
        roleId: roleItem.id,
      });
    }
  }
  await FORGE_SQL_ORM.insert(groupRole).values(groupRoles);
  console.log(`✅ Inserted ${groupRoles.length} group roles`);

  // 9. RoleHierarchy - 40 records
  console.log("Inserting role hierarchies...");
  const roleHierarchies: Array<{
    parentRoleId: string;
    childRoleId: string;
  }> = [];
  const usedHierarchyPairs = new Set<string>();
  while (roleHierarchies.length < 40) {
    const parent = roles[Math.floor(Math.random() * roles.length)];
    const child = roles[Math.floor(Math.random() * roles.length)];
    if (parent.id !== child.id) {
      const pairKey = `${parent.id}-${child.id}`;
      if (!usedHierarchyPairs.has(pairKey)) {
        usedHierarchyPairs.add(pairKey);
        roleHierarchies.push({
          parentRoleId: parent.id,
          childRoleId: child.id,
        });
      }
    }
  }
  await FORGE_SQL_ORM.insert(roleHierarchy).values(roleHierarchies);
  console.log(`✅ Inserted ${roleHierarchies.length} role hierarchies`);

  // 10. RolePermission - 200 records
  console.log("Inserting role permissions...");
  const rolePermissions: Array<{
    roleId: string;
    permissionId: string;
  }> = [];
  const usedRolePermissionPairs = new Set<string>();
  while (rolePermissions.length < 200) {
    const roleItem = roles[Math.floor(Math.random() * roles.length)];
    const perm = permissions[Math.floor(Math.random() * permissions.length)];
    const pairKey = `${roleItem.id}-${perm.id}`;
    if (!usedRolePermissionPairs.has(pairKey)) {
      usedRolePermissionPairs.add(pairKey);
      rolePermissions.push({
        roleId: roleItem.id,
        permissionId: perm.id,
      });
    }
  }
  const rolePermissionChunks = chunk(rolePermissions, 200);
  for (const chunk of rolePermissionChunks) {
    await FORGE_SQL_ORM.insert(rolePermission).values(chunk);
  }
  console.log(`✅ Inserted ${rolePermissions.length} role permissions`);

  // 11. UserGroup - 500 records
  console.log("Inserting user groups...");
  const userGroups: Array<{
    userId: string;
    groupId: string;
  }> = [];
  const usedUserGroupPairs = new Set<string>();
  while (userGroups.length < 500) {
    const userRecord = users[Math.floor(Math.random() * users.length)];
    const group = jiraGroups[Math.floor(Math.random() * jiraGroups.length)];
    const pairKey = `${userRecord.id}-${group.id}`;
    if (!usedUserGroupPairs.has(pairKey)) {
      usedUserGroupPairs.add(pairKey);
      userGroups.push({
        userId: userRecord.id,
        groupId: group.id,
      });
    }
  }
  const userGroupChunks = chunk(userGroups, 500);
  for (const chunk of userGroupChunks) {
    await FORGE_SQL_ORM.insert(userGroup).values(chunk);
  }
  console.log(`✅ Inserted ${userGroups.length} user groups`);

  // 12. UserRole - 200 records
  console.log("Inserting user roles...");
  const userRoles: Array<{
    userId: string;
    roleId: string;
  }> = [];
  const usedUserRolePairs = new Set<string>();
  while (userRoles.length < 200) {
    const userRecord = users[Math.floor(Math.random() * users.length)];
    const roleItem = roles[Math.floor(Math.random() * roles.length)];
    const pairKey = `${userRecord.id}-${roleItem.id}`;
    if (!usedUserRolePairs.has(pairKey)) {
      usedUserRolePairs.add(pairKey);
      userRoles.push({
        userId: userRecord.id,
        roleId: roleItem.id,
      });
    }
  }
  const userRoleChunks = chunk(userRoles, 200);
  for (const chunk of userRoleChunks) {
    await FORGE_SQL_ORM.insert(userRole).values(chunk);
  }
  console.log(`✅ Inserted ${userRoles.length} user roles`);

  console.log("✅ Database seeding completed!");
}

export const handlerAsyncMigration = async (event: AsyncEvent) => {
  const migrationVersion = await kvs.get<string>("MIGRATION_VERSION");
  if (migrationVersion === String(MIGRATION_VERSION)) {
    console.debug("Migration Skipped");
    return;
  }
  const migrationR = await applySchemaMigrations(async (migrationRunner: MigrationRunner) => {
    const mr = await migration(migrationRunner);
    return mr;
  });
  if (migrationVersion === undefined) {
    await seedDatabase();
  }
  await kvs.set("MIGRATION_VERSION", String(MIGRATION_VERSION));

  return migrationR;
};
