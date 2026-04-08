import "reflect-metadata";
import fs from "fs";
import path from "path";
import { execSync } from "child_process";

/**
 * Options for direct schema creation from Drizzle models.
 */
export interface CreateSchemaOptions {
  host?: string;
  port?: number;
  user?: string;
  password?: string;
  dbName?: string;
  entitiesPath: string;
}

/**
 * Creates/updates DB schema directly from Drizzle models.
 * Uses drizzle-kit push to apply DDL immediately.
 */
export const createSchema = async (options: CreateSchemaOptions) => {
  try {
    if (!options.host || !options.port || !options.user || !options.password || !options.dbName) {
      console.error(
        "❌ Error: Database connection parameters are required (host, port, user, password, dbName)",
      );
      process.exit(1);
    }

    const schemaPath = path.resolve(options.entitiesPath, "schema.ts");
    if (!fs.existsSync(schemaPath)) {
      throw new Error(`Schema file not found at: ${schemaPath}`);
    }

    const encodedUser = encodeURIComponent(options.user);
    const encodedPassword = encodeURIComponent(options.password);
    const encodedHost = encodeURIComponent(options.host);
    const encodedDbName = encodeURIComponent(options.dbName);

    const dbUrl = `mysql://${encodedUser}:${encodedPassword}@${encodedHost}:${options.port}/${encodedDbName}`;

    console.log(`📦 Applying schema from: ${schemaPath}`);
    console.log(`🗄️  Target database: ${options.dbName} (${options.host}:${options.port})`);

    execSync(`npx drizzle-kit push --dialect mysql --schema "${schemaPath}" --url "${dbUrl}"`, {
      stdio: "inherit",
    });

    console.log("✅ Schema successfully applied from Drizzle models.");
    process.exit(0);
  } catch (error) {
    console.error("❌ Error during schema creation:", error);
    process.exit(1);
  }
};
