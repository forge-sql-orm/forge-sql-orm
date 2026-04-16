import { describe, expect, it } from "vitest";
import { getTableColumns } from "drizzle-orm";
import { CasingCache } from "drizzle-orm/casing";
import { int, mysqlTable, timestamp } from "drizzle-orm/mysql-core";
import {
  addDate,
  curdate,
  dateAdd,
  dateFormat,
  extract,
  now,
  strToDate,
  subDate,
  timestampAdd,
  timestampDiff,
  timestampExpr,
  unixTimestamp,
} from "../../../../src/core/functions/DateTiDB";

const t = mysqlTable("date_t", {
  id: int("id").primaryKey(),
  created: timestamp("created"),
});

const cols = getTableColumns(t);

const mysqlQueryConfig = {
  casing: new CasingCache(undefined),
  escapeName: (name: string) => `\`${name.replace(/`/g, "``")}\``,
  escapeParam: (_num: number) => `?`,
  escapeString: (str: string) => `'${str.replace(/'/g, "''")}'`,
};

describe("DateTiDB SQL fragments (toQuery)", () => {
  it("no-arg and optional-fsp datetime functions", () => {
    expect(curdate().toQuery(mysqlQueryConfig).sql).toBe("CURDATE()");
    expect(now().toQuery(mysqlQueryConfig).sql).toBe("NOW()");
    expect(now(3).toQuery(mysqlQueryConfig).sql).toBe("NOW(?)");
    expect(unixTimestamp().toQuery(mysqlQueryConfig).sql).toBe("UNIX_TIMESTAMP()");
  });

  it("DATE_ADD / ADDDATE / SUBDATE overloads", () => {
    const da = dateAdd(cols.created, 1, "DAY").toQuery(mysqlQueryConfig);
    expect(da.sql).toBe("DATE_ADD(`date_t`.`created`, INTERVAL ? DAY)");
    expect(da.params).toEqual([1]);

    const ad = addDate(cols.created, 7).toQuery(mysqlQueryConfig);
    expect(ad.sql).toBe("ADDDATE(`date_t`.`created`, ?)");
    expect(ad.params).toEqual([7]);

    const adi = addDate(cols.created, 2, "HOUR").toQuery(mysqlQueryConfig);
    expect(adi.sql).toBe("ADDDATE(`date_t`.`created`, INTERVAL ? HOUR)");

    const sd = subDate(cols.created, 1, "MONTH").toQuery(mysqlQueryConfig);
    expect(sd.sql).toBe("SUBDATE(`date_t`.`created`, INTERVAL ? MONTH)");
  });

  it("TIMESTAMPADD / TIMESTAMPDIFF / EXTRACT", () => {
    expect(
      timestampAdd("DAY", 1, cols.created).toQuery(mysqlQueryConfig).sql.replace(/\s+/g, " "),
    ).toBe("TIMESTAMPADD(DAY, ?, `date_t`.`created`)");

    expect(timestampDiff("HOUR", cols.created, cols.created).toQuery(mysqlQueryConfig).sql).toMatch(
      /TIMESTAMPDIFF\(HOUR/,
    );

    const ex = extract("YEAR", cols.created).toQuery(mysqlQueryConfig);
    expect(ex.sql).toBe("EXTRACT(YEAR FROM `date_t`.`created`)");
  });

  it("TIMESTAMP one and two arguments", () => {
    expect(timestampExpr("2024-01-01").toQuery(mysqlQueryConfig).sql).toBe("TIMESTAMP(?)");
    expect(timestampExpr("2024-01-01", "12:00:00").toQuery(mysqlQueryConfig).sql).toBe(
      "TIMESTAMP(?, ?)",
    );
  });

  it("STR_TO_DATE / DATE_FORMAT", () => {
    expect(strToDate("2024-01-15", "%Y-%m-%d").toQuery(mysqlQueryConfig).sql).toBe(
      "STR_TO_DATE(?, ?)",
    );
    expect(dateFormat(cols.created, "%Y").toQuery(mysqlQueryConfig).sql).toBe(
      "DATE_FORMAT(`date_t`.`created`, ?)",
    );
  });
});
