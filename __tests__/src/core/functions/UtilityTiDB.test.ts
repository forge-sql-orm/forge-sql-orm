import { describe, expect, it } from "vitest";
import { CasingCache } from "drizzle-orm/casing";
import { formatBytes, formatNanoTime } from "../../../../src/core/functions/UtilityTiDB";

const mysqlQueryConfig = {
  casing: new CasingCache(undefined),
  escapeName: (name: string) => `\`${name.replace(/`/g, "``")}\``,
  escapeParam: (_num: number) => `?`,
  escapeString: (str: string) => `'${str.replace(/'/g, "''")}'`,
};

describe("UtilityTiDB SQL fragments (toQuery)", () => {
  it("FORMAT_BYTES", () => {
    const q = formatBytes(10 * 1024 * 1024).toQuery(mysqlQueryConfig);
    expect(q.sql).toBe("FORMAT_BYTES(?)");
    expect(q.params).toEqual([10 * 1024 * 1024]);
  });

  it("FORMAT_NANO_TIME", () => {
    const q = formatNanoTime(1_000_000).toQuery(mysqlQueryConfig);
    expect(q.sql).toBe("FORMAT_NANO_TIME(?)");
    expect(q.params).toEqual([1_000_000]);
  });
});
