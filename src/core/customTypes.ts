import { customType } from "drizzle-orm/mysql-core";
import { fromBase64, uuidToBin } from "./functions";
import { sql } from "drizzle-orm";

type BinaryConfig = {
  length?: number;
};

type VectorConfig = {
  dimension?: number;
};

function validateVectorValue(value: number[]): void {
  if (!Array.isArray(value)) {
    throw new Error("TiDB vector value must be an array of numbers");
  }

  for (const item of value) {
    if (typeof item !== "number" || !Number.isFinite(item)) {
      throw new Error("TiDB vector contains invalid number");
    }
  }
}

function parseVectorText(value: string): number[] {
  const trimmed = value.trim();
  if (!trimmed.startsWith("[") || !trimmed.endsWith("]")) {
    throw new Error(`Invalid TiDB vector text: ${value}`);
  }

  const parsed = JSON.parse(trimmed) as unknown;
  if (!Array.isArray(parsed)) {
    throw new Error(`Invalid TiDB vector text: ${value}`);
  }

  const result = parsed.map((item) => {
    if (typeof item !== "number" || !Number.isFinite(item)) {
      throw new Error(`Invalid TiDB vector element: ${String(item)}`);
    }
    return item;
  });

  return result;
}

function binaryToDriver(value: Buffer | Uint8Array | string | undefined | null) {
  if (!value) {
    return sql`null`;
  }

  const buffer = Buffer.isBuffer(value)
    ? value
    : value instanceof Uint8Array
      ? Buffer.from(value)
      : typeof value === "string"
        ? Buffer.from(value)
        : Buffer.from(JSON.stringify(value));
  return fromBase64(buffer.toString("base64"));
}

function binaryFromDriver(value: { type: "Buffer"; data: number[] } | null | undefined): Buffer {
  return value ? Buffer.from(value.data) : Buffer.from([]);
}

function createForgeBinaryType(sqlType: string) {
  return customType<{
    data: Buffer;
    driverData: {
      type: "Buffer";
      data: number[];
    };
    config: BinaryConfig;
  }>({
    dataType(config) {
      const length = config?.length;
      return length ? `${sqlType}(${length})` : sqlType;
    },
    toDriver(value) {
      return binaryToDriver(value);
    },
    fromDriver(value) {
      return binaryFromDriver(value);
    },
  });
}

/**
 * Stores UUID values in TiDB as `VARBINARY(16)` while exposing them as strings in application code.
 *
 * Why use it:
 * - TiDB recommends UUID-style identifiers for distributed systems.
 * - Binary UUIDs use less space than textual UUIDs.
 * - Smaller primary/secondary indexes generally perform better.
 *
 * How it works:
 * - Input app type: UUID string (`xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx`)
 * - Stored type: `VARBINARY(16)`
 * - Write conversion: `UUID_TO_BIN(...)`
 * - Read conversion: binary 16-byte value back to UUID string
 *
 * Example:
 * ```ts
 * const users = mysqlTable("users", {
 *   id: uuidBinary().primaryKey().notNull(),
 * });
 * ```
 */
export const uuidBinary = customType<{
  data: string;
  driverData: {
    type: "Buffer";
    data: number[];
  };
  config: [];
}>({
  dataType() {
    return "varbinary(16)";
  },
  toDriver(value) {
    return uuidToBin(value);
  },
  fromDriver(value) {
    const buffer = Buffer.from(value.data);
    if (buffer.length !== 16) {
      throw new Error(`Invalid UUID buffer length: ${buffer.length}`);
    }

    const hex = buffer.toString("hex");
    return `${hex.slice(0, 8)}-${hex.slice(8, 12)}-${hex.slice(12, 16)}-${hex.slice(16, 20)}-${hex.slice(20, 32)}`;
  },
});

/**
 * TiDB `VECTOR` column type (same call shapes as other Drizzle MySQL builders).
 *
 * - `vectorTiDBType("embedding", { dimension: 1536 })` -> `VECTOR(1536)`
 * - `vectorTiDBType({ dimension: 1536 })` -> config-only usage in `mysqlTable`
 * - `vectorTiDBType("embedding")` or `vectorTiDBType()` -> unbounded `VECTOR`
 *
 * Values are exposed as `number[]` in application code and stored using TiDB's textual vector form.
 */
export const vectorTiDBType = customType<{
  data: number[];
  driverData: string;
  config: VectorConfig;
}>({
  dataType(config) {
    const dim = config?.dimension;
    return dim ? `vector(${dim})` : "vector";
  },
  toDriver(value: number[]) {
    validateVectorValue(value);
    return `[${value.join(",")}]`;
  },
  fromDriver(value: unknown) {
    if (value === null || value === undefined) {
      return value as unknown as number[];
    }
    if (typeof value !== "string") {
      throw new Error(`Invalid TiDB vector driver value type: ${typeof value}`);
    }
    return parseVectorText(value);
  },
});

/**
 * `VARBINARY` custom type for Forge/TiDB binary payloads represented as `Buffer` in Node.js.
 *
 * To reduce SQL text size and safely pass binary content through SQL helpers, values are encoded
 * to Base64 in JavaScript and converted back inside SQL via `FROM_BASE64(...)`.
 *
 * Example:
 * ```ts
 * const files = mysqlTable("files", {
 *   payload: forgeVarBinary({ length: 1024 }),
 * });
 * ```
 */
export const forgeVarBinary = createForgeBinaryType("varbinary");

/**
 * `BINARY` custom type for fixed-length binary values represented as `Buffer`.
 *
 * Like the other Forge binary helpers, this type writes data using `FROM_BASE64(...)` to keep the
 * SQL payload compact while preserving binary content.
 */
export const forgeBinary = createForgeBinaryType("binary");

/**
 * `BLOB` custom type for binary data represented as `Buffer`.
 *
 * Uses `FROM_BASE64(...)` during writes so binary values can be transported as compact Base64 text
 * and reconstructed by TiDB.
 */
export const forgeBLOB = createForgeBinaryType("BLOB");

/**
 * `TINYBLOB` custom type for small binary payloads represented as `Buffer`.
 *
 * Values are converted with `FROM_BASE64(...)` on writes and decoded back to `Buffer` on reads.
 */
export const forgeTinyBLOB = createForgeBinaryType("TINYBLOB");

/**
 * `MEDIUMBLOB` custom type for medium-size binary payloads represented as `Buffer`.
 *
 * Values are encoded to Base64 in JavaScript and restored in TiDB via `FROM_BASE64(...)`.
 */
export const forgeMediumBLOB = createForgeBinaryType("MEDIUMBLOB");
