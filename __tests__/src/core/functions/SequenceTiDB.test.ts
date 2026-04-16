import { describe, expect, it } from "vitest";
import { sql as dsql } from "drizzle-orm";
import { CasingCache } from "drizzle-orm/casing";
import {
  lastVal,
  nextVal,
  nextValueFor,
  setVal,
} from "../../../../src/core/functions/SequenceTiDB";

const mysqlQueryConfig = {
  casing: new CasingCache(undefined),
  escapeName: (name: string) => `\`${name.replace(/`/g, "``")}\``,
  escapeParam: (_num: number) => `?`,
  escapeString: (str: string) => `'${str.replace(/'/g, "''")}'`,
};

describe("SequenceTiDB SQL fragments (toQuery)", () => {
  it("NEXTVAL / LASTVAL with sequence name", () => {
    expect(nextVal("s1").toQuery(mysqlQueryConfig).sql).toBe("NEXTVAL(s1)");
    expect(lastVal("s1").toQuery(mysqlQueryConfig).sql).toBe("LASTVAL(s1)");
  });

  it("NEXT VALUE FOR alias", () => {
    expect(nextValueFor("s1").toQuery(mysqlQueryConfig).sql).toBe("NEXT VALUE FOR s1");
  });

  it("SETVAL binds numeric value", () => {
    const q = setVal("s1", 10).toQuery(mysqlQueryConfig);
    expect(q.sql).toBe("SETVAL(s1, ?)");
    expect(q.params).toEqual([10]);
  });

  it("supports SQL expression for sequence argument", () => {
    expect(nextVal(dsql`my_seq`).toQuery(mysqlQueryConfig).sql).toBe("NEXTVAL(my_seq)");
  });
});
