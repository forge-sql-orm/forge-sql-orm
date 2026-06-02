#!/usr/bin/env node
// SPDX-FileCopyrightText: 2025-2026 Vasyl Zakharchenko
// SPDX-License-Identifier: MIT

import { Command } from "commander";
import dotenv from "dotenv";
import inquirer from "inquirer";
import fs from "fs";
import path from "path";
import { generateModels, type GenerateModelsOptions } from "./actions/generate-models";
import { createMigration, type CreateMigrationOptions } from "./actions/migrations-create";
import { updateMigration, type UpdateMigrationOptions } from "./actions/migrations-update";
import { dropMigration, type DropMigrationOptions } from "./actions/migrations-drops";
import { createSchema, type CreateSchemaOptions } from "./actions/schema-create";

const ENV_PATH = path.resolve(process.cwd(), ".env");
// 🔄 Load environment variables from `.env` file
dotenv.config({ path: ENV_PATH });

/**
 * Resolved configuration shared across all CLI commands.
 */
interface CliConfig {
  host?: string;
  port?: number;
  user?: string;
  password?: string;
  dbName?: string;
  output?: string;
  versionField?: string;
  entitiesPath?: string;
  force?: boolean;
}

/**
 * Raw options object provided by Commander to each command action.
 * All values arrive as strings (or booleans for flags) from the CLI.
 */
interface CommandOptions {
  host?: string;
  port?: string;
  user?: string;
  password?: string;
  dbName?: string;
  output?: string;
  versionField?: string;
  entitiesPath?: string;
  force?: boolean;
  saveEnv?: boolean;
}

const saveEnvFile = (config: CliConfig) => {
  let envContent = "";
  const envFilePath = ENV_PATH;

  if (fs.existsSync(envFilePath)) {
    envContent = fs.readFileSync(envFilePath, "utf8");
  }

  const envVars = envContent
    .split("\n")
    .filter((line) => line.trim() !== "" && !line.startsWith("#"))
    .reduce<Record<string, string>>((acc, line) => {
      const [key, ...value] = line.split("=");
      acc[key] = value.join("=");
      return acc;
    }, {});

  Object.entries(config).forEach(([key, value]) => {
    envVars[`FORGE_SQL_ORM_${key.toUpperCase()}`] = String(value);
  });

  const updatedEnvContent = Object.entries(envVars)
    .map(([key, value]) => `${key}=${value}`)
    .join("\n");

  fs.writeFileSync(envFilePath, updatedEnvContent, { encoding: "utf8" });

  console.log("✅ Configuration saved to .env without overwriting other variables.");
};

/**
 * Prompts the user for missing parameters using Inquirer.js.
 * @param config - The current configuration object.
 * @param defaultOutput - Default output path.
 * @param customAskMissingParams - Optional function for additional prompts.
 * @returns Updated configuration with user input.
 */
const askMissingParams = async (
  config: CliConfig,
  defaultOutput: string,
  customAskMissingParams?: (cfg: CliConfig, questions: unknown[]) => void,
): Promise<CliConfig> => {
  const questions: unknown[] = [];

  if (!config.host)
    questions.push({
      type: "input",
      name: "host",
      message: "Enter database host:",
      default: "localhost",
    });

  if (!config.port)
    questions.push({
      type: "input",
      name: "port",
      message: "Enter database port:",
      default: "3306",
      validate: (input: string) => !isNaN(parseInt(input, 10)),
    });

  if (!config.user)
    questions.push({
      type: "input",
      name: "user",
      message: "Enter database user:",
      default: "root",
    });

  if (!config.password)
    questions.push({
      type: "password",
      name: "password",
      message: "Enter database password:",
      mask: "*",
    });

  if (!config.dbName)
    questions.push({
      type: "input",
      name: "dbName",
      message: "Enter database name:",
    });

  if (!config.output)
    questions.push({
      type: "input",
      name: "output",
      message: "Enter output path:",
      default: defaultOutput,
    });

  // Allow additional questions from the caller
  if (customAskMissingParams) {
    customAskMissingParams(config, questions);
  }

  // If there are missing parameters, prompt the user
  if (questions.length > 0) {
    // @ts-ignore - Ignore TypeScript warning for dynamic question type
    const answers = (await inquirer.prompt(questions)) as Partial<CliConfig>;
    return { ...config, ...answers, port: parseInt(String(config.port ?? answers.port), 10) };
  }

  return config;
};

/**
 * Retrieves configuration parameters from command-line arguments and environment variables.
 * If any required parameters are missing, prompts the user for input.
 * @param cmd - The command object containing CLI options.
 * @param defaultOutput - Default output directory.
 * @param customConfig - Optional function for additional configuration parameters.
 * @param customAskMissingParams - Optional function for additional prompts.
 * @returns A fully resolved configuration object.
 */
const getConfig = async (
  cmd: CommandOptions,
  defaultOutput: string,
  customConfig?: () => Partial<CliConfig>,
  customAskMissingParams?: (cfg: CliConfig, questions: unknown[]) => void,
): Promise<CliConfig> => {
  let config = {
    host: cmd.host || process.env.FORGE_SQL_ORM_HOST,
    port: cmd.port
      ? parseInt(cmd.port, 10)
      : process.env.FORGE_SQL_ORM_PORT
        ? parseInt(process.env.FORGE_SQL_ORM_PORT, 10)
        : undefined,
    user: cmd.user || process.env.FORGE_SQL_ORM_USER,
    password: cmd.password || process.env.FORGE_SQL_ORM_PASSWORD,
    dbName: cmd.dbName || process.env.FORGE_SQL_ORM_DBNAME,
    output: cmd.output || process.env.FORGE_SQL_ORM_OUTPUT,
  };

  // Merge additional configurations if provided
  if (customConfig) {
    config = { ...config, ...customConfig() };
  }

  const conf = await askMissingParams(config, defaultOutput, customAskMissingParams);
  if (cmd.saveEnv) {
    saveEnvFile(conf);
  }
  return conf;
};

// 📌 Initialize CLI
export const program = new Command();
program.version("1.0.0");

// ✅ Command: Generate database models (Entities)
program
  .command("generate:model")
  .description("Generate Drizzle models from the database.")
  .option("--host <string>", "Database host")
  .option("--port <number>", "Database port")
  .option("--user <string>", "Database user")
  .option("--password <string>", "Database password")
  .option("--dbName <string>", "Database name")
  .option("--output <string>", "Output path for entities")
  .option("--versionField <string>", "Field name for versioning")
  .option("--saveEnv", "Save configuration to .env file")
  .action(async (cmd) => {
    const config = await getConfig(
      cmd,
      "./database/entities",
      () => ({
        versionField: cmd.versionField || process.env.FORGE_SQL_ORM_VERSIONFIELD,
      }),
      (cfg, questions: unknown[]) => {
        if (!cfg.versionField) {
          questions.push({
            type: "input",
            name: "versionField",
            message: "Enter the field name for versioning (leave empty to skip):",
            default: "",
          });
        }
      },
    );
    await generateModels(config as GenerateModelsOptions);
  });

// ✅ Command: Create initial database migration
program
  .command("migrations:create")
  .description("Generate an initial migration for the entire database.")
  .option("--host <string>", "Database host")
  .option("--port <number>", "Database port")
  .option("--user <string>", "Database user")
  .option("--password <string>", "Database password")
  .option("--dbName <string>", "Database name")
  .option("--output <string>", "Output path for migrations")
  .option("--force", "Force creation even if migrations exist")
  .option("--saveEnv", "Save configuration to .env file")
  .action(async (cmd) => {
    const config = await getConfig(cmd, "./database/migration", () => ({
      force: cmd.force || false,
    }));
    await createMigration(config as CreateMigrationOptions);
  });

// ✅ Command: Update migration for schema changes
program
  .command("migrations:update")
  .description("Generate a migration to update the database schema.")
  .option("--host <string>", "Database host")
  .option("--port <number>", "Database port")
  .option("--user <string>", "Database user")
  .option("--password <string>", "Database password")
  .option("--dbName <string>", "Database name")
  .option("--output <string>", "Output path for migrations")
  .option("--entitiesPath <string>", "Path to the folder containing entities")
  .option("--saveEnv", "Save configuration to .env file")
  .action(async (cmd) => {
    const config = await getConfig(
      cmd,
      "./database/migration",
      () => ({
        entitiesPath: cmd.entitiesPath || process.env.FORGE_SQL_ORM_ENTITIESPATH,
      }),
      (cfg, questions: unknown[]) => {
        if (!cfg.entitiesPath)
          questions.push({
            type: "input",
            name: "entitiesPath",
            message: "Enter the path to entities:",
            default: "./database/entities",
          });
      },
    );
    await updateMigration(config as UpdateMigrationOptions);
  });

// ✅ Command: Drop all migrations
program
  .command("migrations:drop")
  .description("Generate a migration to drop all tables and clear migrations history.")
  .option("--host <string>", "Database host")
  .option("--port <number>", "Database port")
  .option("--user <string>", "Database user")
  .option("--password <string>", "Database password")
  .option("--dbName <string>", "Database name")
  .option("--output <string>", "Output path for migrations")
  .option("--entitiesPath <string>", "Path to the folder containing entities")
  .option("--saveEnv", "Save configuration to .env file")
  .action(async (cmd) => {
    const config = await getConfig(
      cmd,
      "./database/migration",
      () => ({
        entitiesPath: cmd.entitiesPath || process.env.FORGE_SQL_ORM_ENTITIESPATH,
      }),
      (cfg, questions: unknown[]) => {
        if (!cfg.entitiesPath)
          questions.push({
            type: "input",
            name: "entitiesPath",
            message: "Enter the path to entities:",
            default: "./database/entities",
          });
      },
    );
    await dropMigration(config as DropMigrationOptions);
  });

// ✅ Command: Apply DB schema directly from Drizzle models
program
  .command("schema:create")
  .description("Create/update database schema directly from Drizzle models.")
  .option("--host <string>", "Database host")
  .option("--port <number>", "Database port")
  .option("--user <string>", "Database user")
  .option("--password <string>", "Database password")
  .option("--dbName <string>", "Database name")
  .option("--entitiesPath <string>", "Path to the folder containing entities")
  .option("--saveEnv", "Save configuration to .env file")
  .action(async (cmd) => {
    const config = await getConfig(
      cmd,
      "./database/entities",
      () => ({
        entitiesPath: cmd.entitiesPath || process.env.FORGE_SQL_ORM_ENTITIESPATH,
      }),
      (cfg, questions: unknown[]) => {
        if (!cfg.entitiesPath)
          questions.push({
            type: "input",
            name: "entitiesPath",
            message: "Enter the path to entities:",
            default: "./database/entities",
          });
      },
    );
    await createSchema(config as CreateSchemaOptions);
  });

// 🔥 Execute CLI
program.parse(process.argv);
