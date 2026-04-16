import { describe, expect, it } from "vitest";
import { getTableColumns } from "drizzle-orm";
import { CasingCache } from "drizzle-orm/casing";
import { int, mysqlTable } from "drizzle-orm/mysql-core";
import {
  cumeDist,
  denseRank,
  firstValue,
  lag,
  lastValue,
  lead,
  nthValue,
  ntile,
  percentRank,
  rank,
  rowNumber,
} from "../../../../src/core/functions/WindowTiDB";

const t = mysqlTable("win_t", {
  id: int("id").primaryKey(),
  n: int("n"),
});

const cols = getTableColumns(t);

const mysqlQueryConfig = {
  casing: new CasingCache(undefined),
  escapeName: (name: string) => `\`${name.replace(/`/g, "``")}\``,
  escapeParam: (_num: number) => `?`,
  escapeString: (str: string) => `'${str.replace(/'/g, "''")}'`,
};

describe("WindowTiDB SQL fragments (toQuery)", () => {
  it("rank-like functions", () => {
    expect(cumeDist().toQuery(mysqlQueryConfig).sql).toBe("CUME_DIST()");
    expect(denseRank().toQuery(mysqlQueryConfig).sql).toBe("DENSE_RANK()");
    expect(percentRank().toQuery(mysqlQueryConfig).sql).toBe("PERCENT_RANK()");
    expect(rank().toQuery(mysqlQueryConfig).sql).toBe("RANK()");
    expect(rowNumber().toQuery(mysqlQueryConfig).sql).toBe("ROW_NUMBER()");
  });

  it("value functions", () => {
    expect(firstValue(cols.n).toQuery(mysqlQueryConfig).sql).toBe("FIRST_VALUE(`win_t`.`n`)");
    expect(lastValue(cols.n).toQuery(mysqlQueryConfig).sql).toBe("LAST_VALUE(`win_t`.`n`)");
    expect(nthValue(cols.n, 2).toQuery(mysqlQueryConfig).sql).toBe("NTH_VALUE(`win_t`.`n`, ?)");
    expect(ntile(5).toQuery(mysqlQueryConfig).sql).toBe("NTILE(?)");
  });

  it("lag/lead optional arguments", () => {
    expect(lag(cols.n).toQuery(mysqlQueryConfig).sql).toBe("LAG(`win_t`.`n`)");
    expect(lag(cols.n, 2).toQuery(mysqlQueryConfig).sql).toBe("LAG(`win_t`.`n`, ?)");
    expect(lag(cols.n, 2, 0).toQuery(mysqlQueryConfig).sql).toBe("LAG(`win_t`.`n`, ?, ?)");

    expect(lead(cols.n).toQuery(mysqlQueryConfig).sql).toBe("LEAD(`win_t`.`n`)");
    expect(lead(cols.n, 3).toQuery(mysqlQueryConfig).sql).toBe("LEAD(`win_t`.`n`, ?)");
    expect(lead(cols.n, 3, -1).toQuery(mysqlQueryConfig).sql).toBe("LEAD(`win_t`.`n`, ?, ?)");
  });
});
