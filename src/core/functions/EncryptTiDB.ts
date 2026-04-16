import { sql, type SQL, type AnyColumn } from "drizzle-orm";

/**
 * TiDB / MySQL encryption and compression expressions for Drizzle `sql` fragments.
 * @see https://docs.pingcap.com/tidb/stable/encryption-and-compression-functions
 *
 * TiDB does not support the `kdf_name`, `salt`, and `iterations` arguments for `AES_ENCRYPT` /
 * `AES_DECRYPT` that MySQL 8.0.30+ added. `SM3()` is a TiDB extension (not in MySQL).
 */
export type EncryptSqlInput = SQL | AnyColumn | string | number | boolean;

/** `AES_DECRYPT(data, key [, iv])` */
export function aesDecrypt(data: EncryptSqlInput, key: EncryptSqlInput, iv?: EncryptSqlInput): SQL {
  if (iv !== undefined) {
    return sql`AES_DECRYPT(${data}, ${key}, ${iv})`;
  }
  return sql`AES_DECRYPT(${data}, ${key})`;
}

/** `AES_ENCRYPT(data, key [, iv])` */
export function aesEncrypt(data: EncryptSqlInput, key: EncryptSqlInput, iv?: EncryptSqlInput): SQL {
  if (iv !== undefined) {
    return sql`AES_ENCRYPT(${data}, ${key}, ${iv})`;
  }
  return sql`AES_ENCRYPT(${data}, ${key})`;
}

/** `COMPRESS(expr)` */
export function compress(expr: EncryptSqlInput): SQL {
  return sql`COMPRESS(${expr})`;
}

/** `MD5(expr)` */
export function md5(expr: EncryptSqlInput): SQL {
  return sql`MD5(${expr})`;
}

/**
 * `PASSWORD(str)` — deprecated; prefer proper key derivation outside SQL.
 * @deprecated In MySQL 8.0 removed; deprecated in TiDB.
 */
export function sqlPassword(str: EncryptSqlInput): SQL {
  return sql`PASSWORD(${str})`;
}

/** `RANDOM_BYTES(n)` */
export function randomBytes(n: EncryptSqlInput): SQL {
  return sql`RANDOM_BYTES(${n})`;
}

/** `SHA(expr)` — alias of `SHA1` */
export function sha(expr: EncryptSqlInput): SQL {
  return sql`SHA(${expr})`;
}

/** `SHA1(expr)` */
export function sha1(expr: EncryptSqlInput): SQL {
  return sql`SHA1(${expr})`;
}

/** Second argument to `SHA2(str, n)` per TiDB / MySQL. */
export type Sha2Bits = 0 | 224 | 256 | 384 | 512;

/** `SHA2(str, n)` */
export function sha2(str: EncryptSqlInput, n: Sha2Bits): SQL {
  return sql`SHA2(${str}, ${n})`;
}

/** `SM3(str)` — TiDB extension (SM3-256 digest as hex string). */
export function sm3(str: EncryptSqlInput): SQL {
  return sql`SM3(${str})`;
}

/** `UNCOMPRESS(data)` */
export function uncompress(data: EncryptSqlInput): SQL {
  return sql`UNCOMPRESS(${data})`;
}

/** `UNCOMPRESSED_LENGTH(data)` */
export function uncompressedLength(data: EncryptSqlInput): SQL {
  return sql`UNCOMPRESSED_LENGTH(${data})`;
}

/** `VALIDATE_PASSWORD_STRENGTH(str)` — depends on `validate_password.*` system variables. */
export function validatePasswordStrength(str: EncryptSqlInput): SQL {
  return sql`VALIDATE_PASSWORD_STRENGTH(${str})`;
}
