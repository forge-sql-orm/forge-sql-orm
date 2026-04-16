import { describe, expect, it } from "vitest";
import { getTableColumns } from "drizzle-orm";
import { CasingCache } from "drizzle-orm/casing";
import { int, mysqlTable } from "drizzle-orm/mysql-core";
import {
  ceil,
  logBase,
  numDiv,
  numDivInt,
  pi,
  pow,
  rand,
  round,
  truncateTo,
} from "../../../../src/core/functions/NumericTiDB";

const t = mysqlTable("num_t", {
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

describe("NumericTiDB SQL fragments (toQuery)", () => {
  it("arithmetic helpers compile", () => {
    const d = numDiv(cols.n, 2).toQuery(mysqlQueryConfig);
    expect(d.sql).toBe("(`num_t`.`n` / ?)");
    expect(d.params).toEqual([2]);

    const di = numDivInt(cols.n, 2).toQuery(mysqlQueryConfig);
    expect(di.sql).toBe("(`num_t`.`n` DIV ?)");
  });

  it("pi / rand / round / truncate", () => {
    expect(pi().toQuery(mysqlQueryConfig).sql).toBe("PI()");
    expect(rand().toQuery(mysqlQueryConfig).sql).toBe("RAND()");
    expect(rand(42).toQuery(mysqlQueryConfig).sql).toBe("RAND(?)");
    expect(rand(42).toQuery(mysqlQueryConfig).params).toEqual([42]);

    expect(round(1.234, 2).toQuery(mysqlQueryConfig).sql).toBe("ROUND(?, ?)");
    expect(round(cols.n).toQuery(mysqlQueryConfig).sql).toBe("ROUND(`num_t`.`n`)");

    expect(truncateTo(1.239, 2).toQuery(mysqlQueryConfig).sql).toBe("TRUNCATE(?, ?)");
  });

  it("logBase and pow", () => {
    expect(logBase(2, 8).toQuery(mysqlQueryConfig).sql).toBe("LOG(?, ?)");
    expect(logBase(2, 8).toQuery(mysqlQueryConfig).params).toEqual([2, 8]);
    expect(pow(cols.n, 3).toQuery(mysqlQueryConfig).sql).toBe("POW(`num_t`.`n`, ?)");
  });

  it("ceil", () => {
    expect(ceil(-1.23).toQuery(mysqlQueryConfig).sql).toBe("CEIL(?)");
  });
});
