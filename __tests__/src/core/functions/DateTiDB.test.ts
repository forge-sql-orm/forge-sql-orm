import { describe, expect, it } from "vitest";
import { getTableColumns, type SQL } from "drizzle-orm";
import { CasingCache } from "drizzle-orm/casing";
import { int, mysqlTable, timestamp } from "drizzle-orm/mysql-core";
import {
  addDate,
  addTime,
  convertTz,
  curdate,
  currentDate,
  currentTime,
  currentTimestamp,
  curtime,
  dateAdd,
  dateDiff,
  dateFormat,
  dateOf,
  dateSub,
  day,
  dayName,
  dayOfMonth,
  dayOfWeek,
  dayOfYear,
  extract,
  fromDays,
  fromUnixtime,
  getFormat,
  hour,
  interval,
  lastDay,
  localTime,
  localTimestamp,
  makeDate,
  makeTime,
  microsecond,
  minute,
  month,
  monthName,
  now,
  periodAdd,
  periodDiff,
  quarter,
  secToTime,
  second,
  strToDate,
  subDate,
  subTime,
  sysdate,
  timeDiff,
  timeFormat,
  timeOf,
  timeToSec,
  timestampAdd,
  timestampDiff,
  timestampExpr,
  toDays,
  toSeconds,
  unixTimestamp,
  utcDate,
  utcTime,
  utcTimestamp,
  week,
  weekDay,
  weekOfYear,
  year,
  yearWeek,
} from "../../../../src";

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

  it("smoke: invokes each DateTiDB export for coverage", () => {
    const d = cols.created;
    const q = mysqlQueryConfig;
    const run = (s: SQL) => expect(s.toQuery(q).sql.length).toBeGreaterThan(0);

    run(interval(1, "DAY"));
    run(addTime(d, "01:00:00"));
    run(convertTz(d, "UTC", "+00:00"));
    run(currentDate());
    run(currentTime());
    run(currentTime(3));
    run(currentTimestamp());
    run(currentTimestamp(3));
    run(curtime());
    run(curtime(3));
    run(dateOf(d));
    run(dateSub(d, 1, "DAY"));
    run(dateDiff(d, d));
    run(day(d));
    run(dayName(d));
    run(dayOfMonth(d));
    run(dayOfWeek(d));
    run(dayOfYear(d));
    run(fromDays(738156));
    run(fromUnixtime(1));
    run(fromUnixtime(1, "%Y"));
    run(getFormat("USA", "DATE"));
    run(hour(d));
    run(lastDay(d));
    run(localTime());
    run(localTime(3));
    run(localTimestamp());
    run(localTimestamp(3));
    run(makeDate(2024, 32));
    run(makeTime(12, 30, 45));
    run(microsecond(d));
    run(minute(d));
    run(month(d));
    run(monthName(d));
    run(periodAdd(202401, 1));
    run(periodDiff(202401, 202402));
    run(quarter(d));
    run(secToTime(3600));
    run(second(d));
    run(subTime(d, "01:00:00"));
    run(sysdate());
    run(sysdate(3));
    run(timeOf(d));
    run(timeFormat(d, "%H"));
    run(timeToSec(d));
    run(timeDiff(d, d));
    run(toDays(d));
    run(toSeconds(d));
    run(utcDate());
    run(utcTime());
    run(utcTime(3));
    run(utcTimestamp());
    run(utcTimestamp(3));
    run(week(d));
    run(week(d, 0));
    run(weekDay(d));
    run(weekOfYear(d));
    run(year(d));
    run(yearWeek(d));
    run(yearWeek(d, 0));
  });
});
