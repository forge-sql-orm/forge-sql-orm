import { describe, expect, it } from "vitest";
import { getTableColumns, type SQL } from "drizzle-orm";
import { CasingCache } from "drizzle-orm/casing";
import { int, mysqlTable } from "drizzle-orm/mysql-core";
import {
  abs,
  acos,
  asin,
  atan,
  atan2,
  ceil,
  ceiling,
  conv,
  cos,
  cot,
  crc32,
  degrees,
  exp,
  floor,
  ln,
  log,
  log10,
  logBase,
  logBase2,
  mod,
  numAdd,
  numDiv,
  numDivInt,
  numModOp,
  numMul,
  numNeg,
  numSub,
  pi,
  pow,
  power,
  radians,
  rand,
  round,
  sign,
  sin,
  sqrt,
  tan,
  truncateTo,
} from "../../../../src";

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

  it("smoke: invokes each NumericTiDB export for coverage", () => {
    const n = cols.n;
    const q = mysqlQueryConfig;
    const run = (s: SQL) => expect(s.toQuery(q).sql.length).toBeGreaterThan(0);

    run(numAdd(n, 1));
    run(numSub(n, 1));
    run(numMul(n, 2));
    run(numModOp(n, 3));
    run(numNeg(n));
    run(abs(-1));
    run(acos(0));
    run(asin(0));
    run(atan(0));
    run(atan2(1, 2));
    run(ceiling(1.1));
    run(conv(10, 10, 16));
    run(cos(0));
    run(cot(1));
    run(crc32("x"));
    run(degrees(3.14));
    run(exp(1));
    run(floor(1.9));
    run(ln(2));
    run(log(2));
    run(log10(100));
    run(logBase2(8));
    run(mod(7, 3));
    run(power(n, 2));
    run(radians(180));
    run(sign(-3));
    run(sin(0));
    run(sqrt(4));
    run(tan(0));
  });
});
