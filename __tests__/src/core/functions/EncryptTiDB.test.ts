import { describe, expect, it } from "vitest";
import { getTableColumns } from "drizzle-orm";
import { CasingCache } from "drizzle-orm/casing";
import { int, mysqlTable, text } from "drizzle-orm/mysql-core";
import {
  aesDecrypt,
  aesEncrypt,
  compress,
  md5,
  randomBytes,
  sha1,
  sha2,
  sm3,
  uncompress,
  uncompressedLength,
  validatePasswordStrength,
} from "../../../../src/core/functions/EncryptTiDB";

const t = mysqlTable("enc_t", {
  id: int("id").primaryKey(),
  blob: text("blob_col"),
});

const cols = getTableColumns(t);

const mysqlQueryConfig = {
  casing: new CasingCache(undefined),
  escapeName: (name: string) => `\`${name.replace(/`/g, "``")}\``,
  escapeParam: (_num: number) => `?`,
  escapeString: (str: string) => `'${str.replace(/'/g, "''")}'`,
};

describe("EncryptTiDB SQL fragments (toQuery)", () => {
  it("AES_ENCRYPT / AES_DECRYPT with optional iv", () => {
    const enc2 = aesEncrypt(0x616263, "secret").toQuery(mysqlQueryConfig);
    expect(enc2.sql).toBe("AES_ENCRYPT(?, ?)");

    const enc3 = aesEncrypt(0x616263, "secret", 0).toQuery(mysqlQueryConfig);
    expect(enc3.sql).toBe("AES_ENCRYPT(?, ?, ?)");

    const dec = aesDecrypt(cols.blob, "k").toQuery(mysqlQueryConfig);
    expect(dec.sql).toBe("AES_DECRYPT(`enc_t`.`blob_col`, ?)");
  });

  it("hash and digest functions", () => {
    expect(md5("abc").toQuery(mysqlQueryConfig).sql).toBe("MD5(?)");
    expect(sha1("abc").toQuery(mysqlQueryConfig).sql).toBe("SHA1(?)");
    expect(sha2("abc", 256).toQuery(mysqlQueryConfig).sql).toBe("SHA2(?, ?)");
    expect(sm3("abc").toQuery(mysqlQueryConfig).sql).toBe("SM3(?)");
  });

  it("compress helpers", () => {
    expect(compress("x").toQuery(mysqlQueryConfig).sql).toBe("COMPRESS(?)");
    expect(uncompress(cols.blob).toQuery(mysqlQueryConfig).sql).toBe(
      "UNCOMPRESS(`enc_t`.`blob_col`)",
    );
    expect(uncompressedLength(cols.blob).toQuery(mysqlQueryConfig).sql).toBe(
      "UNCOMPRESSED_LENGTH(`enc_t`.`blob_col`)",
    );
  });

  it("RANDOM_BYTES and VALIDATE_PASSWORD_STRENGTH", () => {
    expect(randomBytes(16).toQuery(mysqlQueryConfig).sql).toBe("RANDOM_BYTES(?)");
    expect(validatePasswordStrength("x").toQuery(mysqlQueryConfig).sql).toBe(
      "VALIDATE_PASSWORD_STRENGTH(?)",
    );
  });
});
