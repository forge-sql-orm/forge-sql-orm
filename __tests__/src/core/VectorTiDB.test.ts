import { describe, expect, it } from "vitest";
import { getTableColumns } from "drizzle-orm";
import { sql as dsql } from "drizzle-orm";
import { CasingCache } from "drizzle-orm/casing";
import { int, mysqlTable } from "drizzle-orm/mysql-core";
import {
  vecAsText,
  vecCosineDistance,
  vecDims,
  vecFromText,
  vecL1Distance,
  vecL2Distance,
  vecL2Norm,
  vecNegativeInnerProduct,
  vectorTiDBType,
} from "../../../src/core/VectorTiDB";

const vectorTable = mysqlTable("vector_test_t", {
  id: int("id").primaryKey(),
  v3: vectorTiDBType("emb", { dimension: 3 }),
  vAny: vectorTiDBType("loose"),
});

const cols = getTableColumns(vectorTable);

const mysqlQueryConfig = {
  casing: new CasingCache(undefined),
  escapeName: (name: string) => `\`${name.replace(/`/g, "``")}\``,
  escapeParam: (_num: number) => `?`,
  escapeString: (str: string) => `'${str.replace(/'/g, "''")}'`,
};

describe("VectorTiDB vectorTiDBType (driver mapping)", () => {
  it("getSQLType: VECTOR(n) and unbounded VECTOR", () => {
    expect(cols.v3.getSQLType()).toBe("vector(3)");
    expect(cols.vAny.getSQLType()).toBe("vector");
  });

  it("mapToDriverValue serializes number[]", () => {
    expect(cols.v3.mapToDriverValue([1, 2, 3])).toBe("[1,2,3]");
  });

  it("mapToDriverValue throws when value is not an array", () => {
    expect(() => cols.v3.mapToDriverValue(null as unknown as number[])).toThrow(
      "TiDB vector value must be an array of numbers",
    );
  });

  it("mapToDriverValue throws on non-finite number", () => {
    expect(() => cols.v3.mapToDriverValue([1, Number.NaN, 3])).toThrow(
      "TiDB vector contains invalid number",
    );
    expect(() => cols.v3.mapToDriverValue([1, Number.POSITIVE_INFINITY, 3])).toThrow(
      "TiDB vector contains invalid number",
    );
  });

  it("mapFromDriverValue returns null and undefined as-is", () => {
    expect(cols.v3.mapFromDriverValue(null)).toBeNull();
    expect(cols.v3.mapFromDriverValue(undefined)).toBeUndefined();
  });

  it("mapFromDriverValue parses TiDB vector text", () => {
    expect(cols.v3.mapFromDriverValue("[1,2,3]")).toEqual([1, 2, 3]);
  });

  it("mapFromDriverValue throws on non-string driver value", () => {
    expect(() => cols.v3.mapFromDriverValue(42 as unknown as string)).toThrow(
      "Invalid TiDB vector driver value type: number",
    );
  });

  it("mapFromDriverValue throws when text is not bracketed like a vector", () => {
    expect(() => cols.v3.mapFromDriverValue("1,2,3")).toThrow("Invalid TiDB vector text");
  });

  it("mapFromDriverValue throws when JSON is not an array", () => {
    expect(() => cols.v3.mapFromDriverValue("{}")).toThrow("Invalid TiDB vector text");
  });

  it("mapFromDriverValue throws on invalid vector element after JSON parse", () => {
    expect(() => cols.v3.mapFromDriverValue('["x",2,3]')).toThrow("Invalid TiDB vector element");
  });
});

describe("VectorTiDB SQL fragments (toQuery)", () => {
  it("vecFromText uses placeholder and passes raw text as bind param (no SQL escaping)", () => {
    const q = vecFromText("a'b");
    const built = q.toQuery(mysqlQueryConfig);
    expect(built.sql).toMatch(/VEC_FROM_TEXT\('\?'\)/);
    expect(built.params).toContain("a'b");
  });

  it("vecFromText preserves backslashes in param value", () => {
    const q = vecFromText("a\\b");
    const built = q.toQuery(mysqlQueryConfig);
    expect(built.params?.[0]).toBe("a\\b");
  });

  it("vecAsText / vecDims / vecL2Norm / distance helpers compile", () => {
    const v = cols.v3;
    const qVec = [1, 2, 3];
    expect(vecAsText(v).toQuery(mysqlQueryConfig).sql).toContain("VEC_AS_TEXT");
    expect(vecDims(v).toQuery(mysqlQueryConfig).sql).toContain("VEC_DIMS");
    expect(vecDims(qVec).toQuery(mysqlQueryConfig).sql).toContain("VEC_FROM_TEXT('[1,2,3]')");
    expect(vecL2Norm(v).toQuery(mysqlQueryConfig).sql).toContain("VEC_L2_NORM");
    expect(vecL2Distance(v, qVec).toQuery(mysqlQueryConfig).sql).toContain("VEC_L2_DISTANCE");
    expect(vecCosineDistance(v, qVec).toQuery(mysqlQueryConfig).sql).toContain(
      "VEC_COSINE_DISTANCE",
    );
    expect(vecNegativeInnerProduct(v, qVec).toQuery(mysqlQueryConfig).sql).toContain(
      "VEC_NEGATIVE_INNER_PRODUCT",
    );
    expect(vecL1Distance(v, qVec).toQuery(mysqlQueryConfig).sql).toContain("VEC_L1_DISTANCE");
  });

  it("vectorExpr: raw SQL string is passed through (vecDims)", () => {
    const raw = "CAST('[1,2,3]' AS VECTOR)";
    const { sql: text } = vecDims(raw).toQuery(mysqlQueryConfig);
    expect(text).toBe(`VEC_DIMS(${raw})`);
  });

  it("vectorExpr: SQL template is embedded (vecDims)", () => {
    const expr = dsql`CAST('[1,2,3]' AS VECTOR)`;
    const { sql: text } = vecDims(expr).toQuery(mysqlQueryConfig);
    expect(text).toContain("VEC_DIMS");
    expect(text).toContain("CAST");
  });
});
