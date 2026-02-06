# Forge SQL ORM Atlas Camp Demo

**Atlas Camp 2026 - February 9, 2026**

This demonstration application showcases advanced capabilities of Forge SQL ORM, including query caching, performance optimization, error handling, and complex ACL (Access Control List) system management. Built for Atlas Camp presentation to demonstrate real-world scenarios with large-scale data operations.

See the [Forge documentation](https://developer.atlassian.com/platform/forge/) for more details.

## 🎯 Features

### 1. **Query Performance & Caching**

- **Cached Queries**: Demonstrates global cache usage with `selectDistinctCacheable()` for permission lookups
- **Query Optimization**: Shows how cached permissions can be reused across multiple document queries
- **Performance Monitoring**: Automatic detection and logging of slow queries (>500ms) with execution plans
- **Cache Management**: Scheduled cache cleanup via `clearCacheSchedulerTrigger`

### 2. **Error Handling & Resilience**

- **Timeout Error Handling**: Demonstrates proper error handling for queries exceeding execution time limits
- **Out of Memory (OOM) Detection**: Shows how to handle complex queries that may exceed memory quotas
- **Error Context**: Detailed error messages with suggestions and debug information

### 3. **Complex ACL System**

The application implements a comprehensive Access Control List system with:

- **Users** (300 records): Jira account integration with display names
- **Roles** (30 records): Hierarchical role system
- **Permissions** (10 records): Granular permission management
- **Documents** (30,000 records): User-owned documents with ACL
- **Document ACL** (300,000 records): Permission-based access control
- **Groups** (50 records): Jira group integration
- **Comments** (30,000 records): Document comments with author tracking

### 4. **Schema Migrations**

- **Automatic Migrations**: Scheduled daily migrations via `scheduledTrigger`
- **Post-Install Migrations**: Automatic schema setup on app installation
- **Async Migration Queue**: Long-running migrations processed asynchronously (up to 15 minutes timeout)
- **Migration Versioning**: Tracks migration state to prevent duplicate executions

### 5. **Performance Analysis**

- **Slow Query Detection**: Scheduled trigger to identify slow queries from the last hour
- **Query Execution Plans**: Detailed analysis with EXPLAIN and EXPLAIN ANALYZE
- **Degradation Monitoring**: Async queue for processing performance degradation queries
- **Memory Quota Hints**: Demonstrates TiDB-specific query hints (`MEMORY_QUOTA`)

### 6. **Database Seeding**

Automatic seeding of test data on first migration:

- 10 permissions
- 30 roles
- 50 Jira groups
- 300 users
- 30,000 documents (100 per user)
- 30,000 comments (1 per document)
- 300,000 document ACL entries (10 per document)
- 200 role-permission mappings
- 200 user-role assignments
- 500 user-group memberships
- 50 group-role assignments
- 40 role hierarchy relationships

## 📋 Requirements

Before starting, ensure that your Forge environment is set up. Follow the [Forge setup guide](https://developer.atlassian.com/platform/forge/set-up-forge/) for instructions.

## 🚀 Quick Start

### Backend Setup

```sh
# Install dependencies
npm install

# Register your application on the Atlassian platform (only once)
forge register

# Deploy your app
forge deploy

# Install the app on an Atlassian site (only once)
forge install
# Follow the prompts to select your environment (Jira/Confluence)
```

### Frontend Build

```sh
# Navigate to frontend directory
cd static/forge-orm-example/

# Install frontend dependencies
npm install

# Build for production
npm run build
```

### Using the Application

This demo application provides several query types to demonstrate different scenarios:

1. **Timeout Error Query** (`getTimeOutError`):
   - Executes a query that may exceed execution time limits
   - Demonstrates proper error handling and user feedback

2. **OOM Error Query** (`getOOMError`):
   - Executes a complex query with subqueries that may cause Out of Memory errors
   - Shows how to handle memory-intensive operations

3. **Optimized Query** (`getQueryResult`):
   - Uses `executeWithMetadata()` for performance monitoring
   - Automatically logs slow queries (>500ms) with execution plans
   - Demonstrates async queue for degradation monitoring

4. **Cached Query** (`getQueryResultCache`):
   - Uses `selectDistinctCacheable()` to cache permission lookups
   - Reuses cached permissions in subsequent document queries
   - Shows significant performance improvement for repeated queries

## 🔧 Technical Details

### Resolvers

- `getTimeOutError`: Demonstrates timeout error handling
- `getOOMError`: Demonstrates Out of Memory error handling with complex subqueries
- `getQueryResult`: Optimized query with performance monitoring and async degradation queue
- `getQueryResultCache`: Cached query demonstrating permission caching

### Scheduled Triggers

- **`scheduled-schema-migration`**: Runs daily to apply schema migrations
- **`runSlowQuery`**: Runs daily to identify and log slow queries from the last hour
- **`clear-cache-trigger`**: Runs every 5 minutes to clean up expired cache entries

### Async Queues

- **`degradationQueue`**: Processes slow queries for detailed analysis
- **`migrationQueue`**: Handles long-running migrations (15-minute timeout)

### Web Triggers

- **`invoke-schema-migration`**: Manual trigger for schema migrations
- **`fetch-schema`**: Fetches current schema information

### Cache Configuration

```typescript
{
  cacheEntityName: "cache",
  cacheTTL: 180, // 3 minutes
  logRawSqlQuery: false
}
```

### Key SQL Patterns

**Cached Permission Lookup:**

```typescript
const perms = await FORGE_SQL_ORM.selectDistinctCacheable({
  permission_id: rolePermission.permissionId,
  userId: userRole.userId,
})
  .from(userRole)
  .innerJoin(rolePermission, and(eq(userRole.roleId, rolePermission.roleId)))
  .where(eq(userRole.userId, USER_ID));
```

**Performance Monitoring:**

```typescript
const result = await FORGE_SQL_ORM.executeWithMetadata(
  () => FORGE_SQL_ORM.execute(query),
  async (totalDbExecutionTime, totalResponseSize, printQueriesWithPlan) => {
    if (totalDbExecutionTime >= 500) {
      console.warn(`High execution time: ${totalDbExecutionTime}ms`);
      await printQueriesWithPlan();
    }
  },
  { asyncQueueName: DEGRADATION_QUEUE },
);
```

## 📊 Database Schema

The application uses a complex schema with 12 tables:

- `user`: User accounts with Jira integration
- `role`: Hierarchical role system
- `permission`: Granular permissions
- `role_permission`: Role-to-permission mappings
- `role_hierarchy`: Parent-child role relationships
- `jira_group`: Jira groups
- `user_group`: User-to-group memberships
- `user_role`: User-to-role assignments
- `group_role`: Group-to-role assignments
- `document`: User-owned documents
- `document_acl`: Permission-based document access control
- `comment`: Document comments

## 🎨 Frontend

The React-based frontend (`static/forge-orm-example/`) provides:

- Interactive query execution buttons
- Real-time results display
- Error handling and display
- Loading states
- Responsive design using Atlassian Design System colors

## 📝 Notes

- Use `forge deploy` to persist code changes
- Use `forge install` only when installing the app on a new site
- Once the app is installed, any new deployments will be automatically reflected without needing to reinstall
- The frontend must be built before deployment for the UI to work properly
- First-time migration will automatically seed the database with test data
- Cache entries expire after 3 minutes (180 seconds) but may persist in KVS for up to 48 hours due to Forge's asynchronous deletion
- Scheduled triggers run automatically but can be manually invoked via web triggers

## 🔍 Local Development

For local database testing, use the provided script:

```sh
./create-and-run-db.sh
```

This creates a MySQL 8.0 container with the complete schema pre-configured.

## 📚 Related Documentation

- [Forge SQL ORM Main README](../../README.md)
- [Forge Documentation](https://developer.atlassian.com/platform/forge/)
- [Drizzle ORM Documentation](https://orm.drizzle.team/)
