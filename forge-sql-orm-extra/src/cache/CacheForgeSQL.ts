import { AnyMySqlTable } from "drizzle-orm/mysql-core";

export interface CacheForgeSQL {
  evictCache(tables: string[]): Promise<void>;
  evictCacheEntities(tables: AnyMySqlTable[]): Promise<void>;
}
