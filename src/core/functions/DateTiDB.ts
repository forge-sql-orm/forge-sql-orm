import { sql, type SQL, type AnyColumn } from "drizzle-orm";

/**
 * TiDB / MySQL date and time expressions for Drizzle `sql` fragments.
 * @see https://docs.pingcap.com/tidb/stable/date-and-time-functions
 *
 * TiDB does not implement every `STR_TO_DATE` / `DATE_FORMAT` pattern from MySQL (for example some week/day specifiers); see TiDB docs and issue #30082.
 */
export type DateSqlInput = SQL | AnyColumn | string | number | boolean;

/** `INTERVAL expr unit` — `unit` is emitted as a SQL keyword (trusted, not user input). */
export type MysqlIntervalUnit =
  | "MICROSECOND"
  | "SECOND"
  | "MINUTE"
  | "HOUR"
  | "DAY"
  | "WEEK"
  | "MONTH"
  | "QUARTER"
  | "YEAR"
  | "SECOND_MICROSECOND"
  | "MINUTE_MICROSECOND"
  | "MINUTE_SECOND"
  | "HOUR_MICROSECOND"
  | "HOUR_SECOND"
  | "HOUR_MINUTE"
  | "DAY_MICROSECOND"
  | "DAY_SECOND"
  | "DAY_MINUTE"
  | "DAY_HOUR"
  | "YEAR_MONTH";

/** First argument to `TIMESTAMPADD` / `TIMESTAMPDIFF` (keyword). */
export type TimestampUnit =
  | "MICROSECOND"
  | "SECOND"
  | "MINUTE"
  | "HOUR"
  | "DAY"
  | "WEEK"
  | "MONTH"
  | "QUARTER"
  | "YEAR";

export type GetFormatLocale = "USA" | "JIS" | "ISO" | "EUR" | "INTERNAL";
export type GetFormatType = "DATE" | "DATETIME" | "TIME";

/** `INTERVAL expr unit` fragment for use inside `DATE_ADD` / raw SQL. */
export function interval(value: DateSqlInput, unit: MysqlIntervalUnit): SQL {
  return sql`INTERVAL ${value} ${sql.raw(unit)}`;
}

/** `ADDDATE(date, days)` or `ADDDATE(date, INTERVAL expr unit)` */
export function addDate(date: DateSqlInput, a: DateSqlInput, b?: MysqlIntervalUnit): SQL {
  if (b !== undefined) {
    return sql`ADDDATE(${date}, INTERVAL ${a} ${sql.raw(b)})`;
  }
  return sql`ADDDATE(${date}, ${a})`;
}

/** `ADDTIME(expr1, expr2)` */
export function addTime(expr1: DateSqlInput, expr2: DateSqlInput): SQL {
  return sql`ADDTIME(${expr1}, ${expr2})`;
}

/** `CONVERT_TZ(dt, from_tz, to_tz)` */
export function convertTz(dt: DateSqlInput, fromTz: DateSqlInput, toTz: DateSqlInput): SQL {
  return sql`CONVERT_TZ(${dt}, ${fromTz}, ${toTz})`;
}

/** `CURDATE()` */
export function curdate(): SQL {
  return sql`CURDATE()`;
}

/** `CURRENT_DATE()` — synonym for `CURDATE()` */
export function currentDate(): SQL {
  return sql`CURRENT_DATE()`;
}

/** `CURRENT_TIME([fsp])` */
export function currentTime(fsp?: DateSqlInput): SQL {
  if (fsp !== undefined) {
    return sql`CURRENT_TIME(${fsp})`;
  }
  return sql`CURRENT_TIME()`;
}

/** `CURRENT_TIMESTAMP([fsp])` — synonym for `NOW()` */
export function currentTimestamp(fsp?: DateSqlInput): SQL {
  if (fsp !== undefined) {
    return sql`CURRENT_TIMESTAMP(${fsp})`;
  }
  return sql`CURRENT_TIMESTAMP()`;
}

/** `CURTIME([fsp])` */
export function curtime(fsp?: DateSqlInput): SQL {
  if (fsp !== undefined) {
    return sql`CURTIME(${fsp})`;
  }
  return sql`CURTIME()`;
}

/** `DATE(expr)` */
export function dateOf(expr: DateSqlInput): SQL {
  return sql`DATE(${expr})`;
}

/** `DATE_ADD(date, INTERVAL expr unit)` */
export function dateAdd(date: DateSqlInput, value: DateSqlInput, unit: MysqlIntervalUnit): SQL {
  return sql`DATE_ADD(${date}, INTERVAL ${value} ${sql.raw(unit)})`;
}

/** `DATE_FORMAT(date, format)` */
export function dateFormat(date: DateSqlInput, format: DateSqlInput): SQL {
  return sql`DATE_FORMAT(${date}, ${format})`;
}

/** `DATE_SUB(date, INTERVAL expr unit)` */
export function dateSub(date: DateSqlInput, value: DateSqlInput, unit: MysqlIntervalUnit): SQL {
  return sql`DATE_SUB(${date}, INTERVAL ${value} ${sql.raw(unit)})`;
}

/** `DATEDIFF(expr1, expr2)` */
export function dateDiff(expr1: DateSqlInput, expr2: DateSqlInput): SQL {
  return sql`DATEDIFF(${expr1}, ${expr2})`;
}

/** `DAY(expr)` — synonym for `DAYOFMONTH()` */
export function day(expr: DateSqlInput): SQL {
  return sql`DAY(${expr})`;
}

/** `DAYNAME(expr)` */
export function dayName(expr: DateSqlInput): SQL {
  return sql`DAYNAME(${expr})`;
}

/** `DAYOFMONTH(expr)` */
export function dayOfMonth(expr: DateSqlInput): SQL {
  return sql`DAYOFMONTH(${expr})`;
}

/** `DAYOFWEEK(expr)` */
export function dayOfWeek(expr: DateSqlInput): SQL {
  return sql`DAYOFWEEK(${expr})`;
}

/** `DAYOFYEAR(expr)` */
export function dayOfYear(expr: DateSqlInput): SQL {
  return sql`DAYOFYEAR(${expr})`;
}

/** `EXTRACT(unit FROM expr)` */
export function extract(unit: MysqlIntervalUnit, expr: DateSqlInput): SQL {
  return sql`EXTRACT(${sql.raw(unit)} FROM ${expr})`;
}

/** `FROM_DAYS(days)` */
export function fromDays(days: DateSqlInput): SQL {
  return sql`FROM_DAYS(${days})`;
}

/** `FROM_UNIXTIME(unix_timestamp [, format])` */
export function fromUnixtime(ts: DateSqlInput, format?: DateSqlInput): SQL {
  if (format !== undefined) {
    return sql`FROM_UNIXTIME(${ts}, ${format})`;
  }
  return sql`FROM_UNIXTIME(${ts})`;
}

/** `GET_FORMAT(locale, type)` */
export function getFormat(locale: GetFormatLocale, type: GetFormatType): SQL {
  return sql`GET_FORMAT(${sql.raw(locale)}, ${sql.raw(type)})`;
}

/** `HOUR(expr)` */
export function hour(expr: DateSqlInput): SQL {
  return sql`HOUR(${expr})`;
}

/** `LAST_DAY(expr)` */
export function lastDay(expr: DateSqlInput): SQL {
  return sql`LAST_DAY(${expr})`;
}

/** `LOCALTIME([fsp])` — synonym for `NOW()` */
export function localTime(fsp?: DateSqlInput): SQL {
  if (fsp !== undefined) {
    return sql`LOCALTIME(${fsp})`;
  }
  return sql`LOCALTIME()`;
}

/** `LOCALTIMESTAMP([fsp])` — synonym for `NOW()` */
export function localTimestamp(fsp?: DateSqlInput): SQL {
  if (fsp !== undefined) {
    return sql`LOCALTIMESTAMP(${fsp})`;
  }
  return sql`LOCALTIMESTAMP()`;
}

/** `MAKEDATE(year, dayofyear)` */
export function makeDate(year: DateSqlInput, dayOfYear: DateSqlInput): SQL {
  return sql`MAKEDATE(${year}, ${dayOfYear})`;
}

/** `MAKETIME(hour, minute, second)` */
export function makeTime(hour: DateSqlInput, minute: DateSqlInput, second: DateSqlInput): SQL {
  return sql`MAKETIME(${hour}, ${minute}, ${second})`;
}

/** `MICROSECOND(expr)` */
export function microsecond(expr: DateSqlInput): SQL {
  return sql`MICROSECOND(${expr})`;
}

/** `MINUTE(expr)` */
export function minute(expr: DateSqlInput): SQL {
  return sql`MINUTE(${expr})`;
}

/** `MONTH(expr)` */
export function month(expr: DateSqlInput): SQL {
  return sql`MONTH(${expr})`;
}

/** `MONTHNAME(expr)` */
export function monthName(expr: DateSqlInput): SQL {
  return sql`MONTHNAME(${expr})`;
}

/** `NOW([fsp])` */
export function now(fsp?: DateSqlInput): SQL {
  if (fsp !== undefined) {
    return sql`NOW(${fsp})`;
  }
  return sql`NOW()`;
}

/** `PERIOD_ADD(period, months)` */
export function periodAdd(period: DateSqlInput, months: DateSqlInput): SQL {
  return sql`PERIOD_ADD(${period}, ${months})`;
}

/** `PERIOD_DIFF(p1, p2)` */
export function periodDiff(p1: DateSqlInput, p2: DateSqlInput): SQL {
  return sql`PERIOD_DIFF(${p1}, ${p2})`;
}

/** `QUARTER(expr)` */
export function quarter(expr: DateSqlInput): SQL {
  return sql`QUARTER(${expr})`;
}

/** `SEC_TO_TIME(seconds)` */
export function secToTime(seconds: DateSqlInput): SQL {
  return sql`SEC_TO_TIME(${seconds})`;
}

/** `SECOND(expr)` */
export function second(expr: DateSqlInput): SQL {
  return sql`SECOND(${expr})`;
}

/** `STR_TO_DATE(str, format)` */
export function strToDate(str: DateSqlInput, format: DateSqlInput): SQL {
  return sql`STR_TO_DATE(${str}, ${format})`;
}

/** `SUBDATE(date, days)` or `SUBDATE(date, INTERVAL expr unit)` */
export function subDate(date: DateSqlInput, a: DateSqlInput, b?: MysqlIntervalUnit): SQL {
  if (b !== undefined) {
    return sql`SUBDATE(${date}, INTERVAL ${a} ${sql.raw(b)})`;
  }
  return sql`SUBDATE(${date}, ${a})`;
}

/** `SUBTIME(expr1, expr2)` */
export function subTime(expr1: DateSqlInput, expr2: DateSqlInput): SQL {
  return sql`SUBTIME(${expr1}, ${expr2})`;
}

/** `SYSDATE([fsp])` */
export function sysdate(fsp?: DateSqlInput): SQL {
  if (fsp !== undefined) {
    return sql`SYSDATE(${fsp})`;
  }
  return sql`SYSDATE()`;
}

/** `TIME(expr)` */
export function timeOf(expr: DateSqlInput): SQL {
  return sql`TIME(${expr})`;
}

/** `TIME_FORMAT(time, format)` */
export function timeFormat(time: DateSqlInput, format: DateSqlInput): SQL {
  return sql`TIME_FORMAT(${time}, ${format})`;
}

/** `TIME_TO_SEC(time)` */
export function timeToSec(time: DateSqlInput): SQL {
  return sql`TIME_TO_SEC(${time})`;
}

/** `TIMEDIFF(expr1, expr2)` */
export function timeDiff(expr1: DateSqlInput, expr2: DateSqlInput): SQL {
  return sql`TIMEDIFF(${expr1}, ${expr2})`;
}

/** `TIMESTAMP(expr)` or `TIMESTAMP(expr1, expr2)` */
export function timestampExpr(a: DateSqlInput, b?: DateSqlInput): SQL {
  if (b !== undefined) {
    return sql`TIMESTAMP(${a}, ${b})`;
  }
  return sql`TIMESTAMP(${a})`;
}

/** `TIMESTAMPADD(unit, interval, datetime_expr)` */
export function timestampAdd(
  unit: TimestampUnit,
  interval: DateSqlInput,
  datetimeExpr: DateSqlInput,
): SQL {
  return sql`TIMESTAMPADD(${sql.raw(unit)}, ${interval}, ${datetimeExpr})`;
}

/** `TIMESTAMPDIFF(unit, expr1, expr2)` */
export function timestampDiff(unit: TimestampUnit, expr1: DateSqlInput, expr2: DateSqlInput): SQL {
  return sql`TIMESTAMPDIFF(${sql.raw(unit)}, ${expr1}, ${expr2})`;
}

/** `TO_DAYS(date)` */
export function toDays(date: DateSqlInput): SQL {
  return sql`TO_DAYS(${date})`;
}

/** `TO_SECONDS(expr)` */
export function toSeconds(expr: DateSqlInput): SQL {
  return sql`TO_SECONDS(${expr})`;
}

/** `UNIX_TIMESTAMP([date])` */
export function unixTimestamp(date?: DateSqlInput): SQL {
  if (date !== undefined) {
    return sql`UNIX_TIMESTAMP(${date})`;
  }
  return sql`UNIX_TIMESTAMP()`;
}

/** `UTC_DATE()` */
export function utcDate(): SQL {
  return sql`UTC_DATE()`;
}

/** `UTC_TIME([fsp])` */
export function utcTime(fsp?: DateSqlInput): SQL {
  if (fsp !== undefined) {
    return sql`UTC_TIME(${fsp})`;
  }
  return sql`UTC_TIME()`;
}

/** `UTC_TIMESTAMP([fsp])` */
export function utcTimestamp(fsp?: DateSqlInput): SQL {
  if (fsp !== undefined) {
    return sql`UTC_TIMESTAMP(${fsp})`;
  }
  return sql`UTC_TIMESTAMP()`;
}

/** `WEEK(date [, mode])` */
export function week(date: DateSqlInput, mode?: DateSqlInput): SQL {
  if (mode !== undefined) {
    return sql`WEEK(${date}, ${mode})`;
  }
  return sql`WEEK(${date})`;
}

/** `WEEKDAY(date)` */
export function weekDay(date: DateSqlInput): SQL {
  return sql`WEEKDAY(${date})`;
}

/** `WEEKOFYEAR(date)` */
export function weekOfYear(date: DateSqlInput): SQL {
  return sql`WEEKOFYEAR(${date})`;
}

/** `YEAR(date)` */
export function year(date: DateSqlInput): SQL {
  return sql`YEAR(${date})`;
}

/** `YEARWEEK(date [, mode])` */
export function yearWeek(date: DateSqlInput, mode?: DateSqlInput): SQL {
  if (mode !== undefined) {
    return sql`YEARWEEK(${date}, ${mode})`;
  }
  return sql`YEARWEEK(${date})`;
}
