import { customType } from "drizzle-orm/mysql-core";
import { sql, type SQL, type AnyColumn } from "drizzle-orm";

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

  // TiDB stores vectors as textual representation, e.g. "[0.3,0.5,-0.1]".
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

function vectorToText(value: number[]): string {
  validateVectorValue(value);
  return `[${value.join(",")}]`;
}

/**
 * Input accepted by TiDB vector SQL helpers.
 *
 * - `number[]`: converted to `VEC_FROM_TEXT('[...]')`
 * - `string`: treated as raw SQL vector expression, for example:
 *   `CAST('[0.3, 0.5, -0.1]' AS VECTOR)`
 * - `SQL` / `AnyColumn`: passed through as-is
 */
type VectorInput = string | number[] | SQL | AnyColumn;

function vectorExpr(value: VectorInput): SQL {
  if (Array.isArray(value)) {
    return sql`VEC_FROM_TEXT(${vectorToText(value)})`;
  }
  if (typeof value === "string") {
    return sql.raw(value);
  }
  return sql`${value}`;
}

/**
 * TiDB `VECTOR` column type (same call shapes as other Drizzle MySQL builders).
 *
 * - `vectorTiDBType('embedding', { dimension: 1536 })` — SQL column name + fixed dimension (`VECTOR(1536)`).
 * - `vectorTiDBType({ dimension: 1536 })` — config only; column name comes from the object key in `mysqlTable`.
 * - `vectorTiDBType('embedding')` or `vectorTiDBType()` — `VECTOR` without a fixed size in DDL.
 *
 * Values are `number[]` in application code; the driver maps to TiDB’s text form.
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
 * Converts a text representation of a vector into a TiDB VECTOR expression.
 *
 * TiDB function: `VEC_FROM_TEXT(string)`.
 *
 * @example
 * vecFromText("[1, 2, 3]")
 */
export function vecFromText(text: string): SQL {
  return sql`VEC_FROM_TEXT(${text})`;
}

/**
 * Converts a vector value/expression to its normalized string representation.
 *
 * TiDB function: `VEC_AS_TEXT(vector)`.
 *
 * @example
 * vecAsText(table.embedding)
 */
export function vecAsText(vector: VectorInput): SQL<string> {
  return sql<string>`VEC_AS_TEXT(${vectorExpr(vector)})`;
}

/**
 * Returns the dimension (number of elements) of a vector.
 *
 * TiDB function: `VEC_DIMS(vector)`.
 *
 * Accepts vector column/expression, `sql.raw(...)`, raw SQL string expression,
 * or `number[]`.
 *
 * @example
 * vecDims(table.embedding)
 * vecDims(sql.raw("CAST('[0.3, 0.5, -0.1]' AS VECTOR)"))
 * vecDims("CAST('[0.3, 0.5, -0.1]' AS VECTOR)")
 */
export function vecDims(vector: VectorInput): SQL<number> {
  return sql<number>`VEC_DIMS(${vectorExpr(vector)})`;
}

/**
 * Calculates L2 norm (Euclidean norm) of a vector.
 *
 * TiDB function: `VEC_L2_NORM(vector)`.
 */
export function vecL2Norm(vector: VectorInput): SQL<number> {
  return sql`VEC_L2_NORM(${vectorExpr(vector)})`;
}

/**
 * Calculates L2 distance (Euclidean distance) between two vectors.
 *
 * TiDB function: `VEC_L2_DISTANCE(vector1, vector2)`.
 *
 * Both vectors must have the same dimensions.
 */
export function vecL2Distance(left: VectorInput, right: VectorInput): SQL<number> {
  return sql<number>`VEC_L2_DISTANCE(${vectorExpr(left)}, ${vectorExpr(right)})`;
}

/**
 * Calculates cosine distance between two vectors.
 *
 * TiDB function: `VEC_COSINE_DISTANCE(vector1, vector2)`.
 *
 * Both vectors must have the same dimensions.
 */
export function vecCosineDistance(left: VectorInput, right: VectorInput): SQL<number> {
  return sql<number>`VEC_COSINE_DISTANCE(${vectorExpr(left)}, ${vectorExpr(right)})`;
}

/**
 * Calculates negative inner product distance between two vectors.
 *
 * TiDB function: `VEC_NEGATIVE_INNER_PRODUCT(vector1, vector2)`.
 *
 * Both vectors must have the same dimensions.
 */
export function vecNegativeInnerProduct(left: VectorInput, right: VectorInput): SQL<number> {
  return sql<number>`VEC_NEGATIVE_INNER_PRODUCT(${vectorExpr(left)}, ${vectorExpr(right)})`;
}

/**
 * Calculates L1 distance (Manhattan distance) between two vectors.
 *
 * TiDB function: `VEC_L1_DISTANCE(vector1, vector2)`.
 *
 * Both vectors must have the same dimensions.
 */
export function vecL1Distance(left: VectorInput, right: VectorInput): SQL<number> {
  return sql<number>`VEC_L1_DISTANCE(${vectorExpr(left)}, ${vectorExpr(right)})`;
}
