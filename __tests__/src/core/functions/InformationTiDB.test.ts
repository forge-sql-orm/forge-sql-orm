import { describe, expect, it } from "vitest";
import { sql as dsql } from "drizzle-orm";
import { CasingCache } from "drizzle-orm/casing";
import {
  connectionId,
  currentResourceGroup,
  currentUser,
  database,
  lastInsertId,
  schema,
  sqlBenchmark,
  tidbVersion,
  user,
  version,
} from "../../../../src/core/functions/InformationTiDB";

const mysqlQueryConfig = {
  casing: new CasingCache(undefined),
  escapeName: (name: string) => `\`${name.replace(/`/g, "``")}\``,
  escapeParam: (_num: number) => `?`,
  escapeString: (str: string) => `'${str.replace(/'/g, "''")}'`,
};

describe("InformationTiDB SQL fragments (toQuery)", () => {
  it("zero-argument session functions", () => {
    expect(connectionId().toQuery(mysqlQueryConfig).sql).toBe("CONNECTION_ID()");
    expect(currentUser().toQuery(mysqlQueryConfig).sql).toBe("CURRENT_USER()");
    expect(database().toQuery(mysqlQueryConfig).sql).toBe("DATABASE()");
    expect(schema().toQuery(mysqlQueryConfig).sql).toBe("SCHEMA()");
    expect(user().toQuery(mysqlQueryConfig).sql).toBe("USER()");
    expect(version().toQuery(mysqlQueryConfig).sql).toBe("VERSION()");
  });

  it("LAST_INSERT_ID optional expression", () => {
    expect(lastInsertId().toQuery(mysqlQueryConfig).sql).toBe("LAST_INSERT_ID()");
    expect(lastInsertId(1).toQuery(mysqlQueryConfig).sql).toBe("LAST_INSERT_ID(?)");
  });

  it("BENCHMARK embeds expression", () => {
    const q = sqlBenchmark(5, dsql`SLEEP(2)`).toQuery(mysqlQueryConfig);
    expect(q.sql).toBe("BENCHMARK(?, SLEEP(2))");
    expect(q.params).toEqual([5]);
  });

  it("TiDB-only functions", () => {
    expect(tidbVersion().toQuery(mysqlQueryConfig).sql).toBe("TIDB_VERSION()");
    expect(currentResourceGroup().toQuery(mysqlQueryConfig).sql).toBe("CURRENT_RESOURCE_GROUP()");
  });
});
