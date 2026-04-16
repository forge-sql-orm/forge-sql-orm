import { describe, expect, it } from "vitest";
import { getTableColumns } from "drizzle-orm";
import { CasingCache } from "drizzle-orm/casing";
import { int, mysqlTable, varchar } from "drizzle-orm/mysql-core";
import {
  approxCountDistinct,
  approxPercentile,
  groupConcat,
  groupConcatDistinct,
  std,
  stddev,
  stddevPop,
  stddevSamp,
  varPop,
  varSamp,
  variance,
} from "../../../../src/core/functions/AggregateTiDB";

const t = mysqlTable("agg_t", {
  id: int("id").primaryKey(),
  n: int("n"),
  s: varchar("s", { length: 64 }),
});

const cols = getTableColumns(t);

const mysqlQueryConfig = {
  casing: new CasingCache(undefined),
  escapeName: (name: string) => `\`${name.replace(/`/g, "``")}\``,
  escapeParam: (_num: number) => `?`,
  escapeString: (str: string) => `'${str.replace(/'/g, "''")}'`,
};

describe("AggregateTiDB SQL fragments (toQuery)", () => {
  it("GROUP_CONCAT variants", () => {
    expect(groupConcat(cols.s).toQuery(mysqlQueryConfig).sql).toBe("GROUP_CONCAT(`agg_t`.`s`)");
    expect(groupConcat(cols.s, "|").toQuery(mysqlQueryConfig).sql).toBe(
      "GROUP_CONCAT(`agg_t`.`s` SEPARATOR ?)",
    );
    expect(groupConcatDistinct(cols.s).toQuery(mysqlQueryConfig).sql).toBe(
      "GROUP_CONCAT(DISTINCT `agg_t`.`s`)",
    );
  });

  it("variance/stddev family", () => {
    expect(variance(cols.n).toQuery(mysqlQueryConfig).sql).toBe("VARIANCE(`agg_t`.`n`)");
    expect(varPop(cols.n).toQuery(mysqlQueryConfig).sql).toBe("VAR_POP(`agg_t`.`n`)");
    expect(std(cols.n).toQuery(mysqlQueryConfig).sql).toBe("STD(`agg_t`.`n`)");
    expect(stddev(cols.n).toQuery(mysqlQueryConfig).sql).toBe("STDDEV(`agg_t`.`n`)");
    expect(stddevPop(cols.n).toQuery(mysqlQueryConfig).sql).toBe("STDDEV_POP(`agg_t`.`n`)");
    expect(varSamp(cols.n).toQuery(mysqlQueryConfig).sql).toBe("VAR_SAMP(`agg_t`.`n`)");
    expect(stddevSamp(cols.n).toQuery(mysqlQueryConfig).sql).toBe("STDDEV_SAMP(`agg_t`.`n`)");
  });

  it("TiDB approximate aggregates", () => {
    const p = approxPercentile(cols.n, 50).toQuery(mysqlQueryConfig);
    expect(p.sql).toBe("APPROX_PERCENTILE(`agg_t`.`n`, ?)");
    expect(p.params).toEqual([50]);

    const c = approxCountDistinct(cols.n, cols.s).toQuery(mysqlQueryConfig);
    expect(c.sql).toBe("APPROX_COUNT_DISTINCT(`agg_t`.`n`, `agg_t`.`s`)");
  });
});
