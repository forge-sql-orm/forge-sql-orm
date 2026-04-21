import { describe, expect, it } from "vitest";
import { getTableColumns } from "drizzle-orm";
import { CasingCache } from "drizzle-orm/casing";
import { int, mysqlTable } from "drizzle-orm/mysql-core";
import {
  forgeBinary,
  forgeBLOB,
  forgeMediumBLOB,
  forgeTinyBLOB,
  forgeVarBinary,
  uuidBinary,
  vectorTiDBType,
} from "../../../src";

const t = mysqlTable("custom_types_t", {
  id: int("id").primaryKey(),
  uuid: uuidBinary("uuid_col"),
  vec3: vectorTiDBType("vec3", { dimension: 3 }),
  vb: forgeVarBinary("vb", { length: 32 }),
  b: forgeBinary("b", { length: 8 }),
  blob: forgeBLOB("blob"),
  tiny: forgeTinyBLOB("tiny"),
  medium: forgeMediumBLOB("medium"),
});

const cols = getTableColumns(t);

const mysqlQueryConfig = {
  casing: new CasingCache(undefined),
  escapeName: (name: string) => `\`${name.replace(/`/g, "``")}\``,
  escapeParam: (_num: number) => `?`,
  escapeString: (str: string) => `'${str.replace(/'/g, "''")}'`,
};

describe("customTypes", () => {
  describe("uuidBinary", () => {
    it("uses varbinary(16) and UUID_TO_BIN on write", () => {
      expect(cols.uuid.getSQLType()).toBe("varbinary(16)");
      const built = cols.uuid
        .mapToDriverValue("00112233-4455-6677-8899-aabbccddeeff")
        .toQuery(mysqlQueryConfig);
      expect(built.sql).toBe("UUID_TO_BIN(?)");
      expect(built.params).toEqual(["00112233-4455-6677-8899-aabbccddeeff"]);
    });

    it("converts 16-byte driver buffer back to UUID string", () => {
      const value = cols.uuid.mapFromDriverValue({
        type: "Buffer",
        data: Array.from(Buffer.from("00112233445566778899aabbccddeeff", "hex")),
      });
      expect(value).toBe("00112233-4455-6677-8899-aabbccddeeff");
    });

    it("throws on invalid UUID buffer length", () => {
      expect(() =>
        cols.uuid.mapFromDriverValue({
          type: "Buffer",
          data: [1, 2, 3],
        } as any),
      ).toThrow("Invalid UUID buffer length: 3");
    });
  });

  describe("vectorTiDBType", () => {
    it("builds VECTOR ddl and serializes arrays", () => {
      expect(cols.vec3.getSQLType()).toBe("vector(3)");
      expect(cols.vec3.mapToDriverValue([1, 2, 3])).toBe("[1,2,3]");
    });

    it("parses vector text and passes nullish values through", () => {
      expect(cols.vec3.mapFromDriverValue("[1,2,3]")).toEqual([1, 2, 3]);
      expect(cols.vec3.mapFromDriverValue(null as any)).toBeNull();
      expect(cols.vec3.mapFromDriverValue(undefined as any)).toBeUndefined();
    });

    it("rejects invalid vector values", () => {
      expect(() => cols.vec3.mapToDriverValue([1, Number.NaN, 3])).toThrow(
        "TiDB vector contains invalid number",
      );
      expect(() => cols.vec3.mapFromDriverValue(42 as any)).toThrow(
        "Invalid TiDB vector driver value type: number",
      );
      expect(() => cols.vec3.mapFromDriverValue("{}" as any)).toThrow("Invalid TiDB vector text");
    });
  });

  describe("forge binary/blob types", () => {
    it("build correct SQL types", () => {
      expect(cols.vb.getSQLType()).toBe("varbinary(32)");
      expect(cols.b.getSQLType()).toBe("binary(8)");
      expect(cols.blob.getSQLType()).toBe("BLOB");
      expect(cols.tiny.getSQLType()).toBe("TINYBLOB");
      expect(cols.medium.getSQLType()).toBe("MEDIUMBLOB");
    });

    it("writes Buffer / Uint8Array / string via FROM_BASE64", () => {
      const bufferBuilt = cols.vb
        .mapToDriverValue(Buffer.from([1, 2, 3]))
        .toQuery(mysqlQueryConfig);
      expect(bufferBuilt.sql).toBe("FROM_BASE64(?)");
      expect(bufferBuilt.params).toEqual([Buffer.from([1, 2, 3]).toString("base64")]);

      const uint8Built = cols.b
        .mapToDriverValue(new Uint8Array([4, 5]) as any)
        .toQuery(mysqlQueryConfig);
      expect(uint8Built.sql).toBe("FROM_BASE64(?)");
      expect(uint8Built.params).toEqual([Buffer.from([4, 5]).toString("base64")]);

      const stringBuilt = cols.blob.mapToDriverValue("hello" as any).toQuery(mysqlQueryConfig);
      expect(stringBuilt.sql).toBe("FROM_BASE64(?)");
      expect(stringBuilt.params).toEqual([Buffer.from("hello").toString("base64")]);
    });

    it("serializes object/number with JSON.stringify before FROM_BASE64", () => {
      const objectBuilt = cols.tiny.mapToDriverValue({ a: 1 } as any).toQuery(mysqlQueryConfig);
      expect(objectBuilt.sql).toBe("FROM_BASE64(?)");
      expect(objectBuilt.params).toEqual([
        Buffer.from(JSON.stringify({ a: 1 })).toString("base64"),
      ]);

      const numberBuilt = cols.medium.mapToDriverValue(123 as any).toQuery(mysqlQueryConfig);
      expect(numberBuilt.sql).toBe("FROM_BASE64(?)");
      expect(numberBuilt.params).toEqual([Buffer.from(JSON.stringify(123)).toString("base64")]);
    });

    it("handles nullish writes and empty-buffer reads", () => {
      expect(cols.vb.mapToDriverValue(null as any).toQuery(mysqlQueryConfig).sql).toBe("null");
      expect(cols.vb.mapToDriverValue(undefined as any).toQuery(mysqlQueryConfig).sql).toBe("null");
      expect(cols.vb.mapFromDriverValue(null as any)).toEqual(Buffer.from([]));
      expect(cols.vb.mapFromDriverValue(undefined as any)).toEqual(Buffer.from([]));
    });

    it("restores Buffer from driver buffer object", () => {
      expect(cols.vb.mapFromDriverValue({ type: "Buffer", data: [9, 8, 7] } as any)).toEqual(
        Buffer.from([9, 8, 7]),
      );
    });
  });
});
