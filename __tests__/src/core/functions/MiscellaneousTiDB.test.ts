import { describe, expect, it } from "vitest";
import { getTableColumns } from "drizzle-orm";
import { CasingCache } from "drizzle-orm/casing";
import { int, mysqlTable, varchar } from "drizzle-orm/mysql-core";
import {
  anyValue,
  binToUuid,
  defaultValue,
  grouping,
  inet6Aton,
  inet6Ntoa,
  inetAton,
  inetNtoa,
  isIpv4,
  isIpv4Compat,
  isIpv4Mapped,
  isIpv6,
  isUuid,
  nameConst,
  sleep,
  uuid,
  uuidToBin,
  valuesFn,
} from "../../../../src/core/functions/MiscellaneousTiDB";

const t = mysqlTable("misc_t", {
  id: int("id").primaryKey(),
  c1: int("c1"),
  s: varchar("s", { length: 64 }),
});
const cols = getTableColumns(t);

const mysqlQueryConfig = {
  casing: new CasingCache(undefined),
  escapeName: (name: string) => `\`${name.replace(/`/g, "``")}\``,
  escapeParam: (_num: number) => `?`,
  escapeString: (str: string) => `'${str.replace(/'/g, "''")}'`,
};

describe("MiscellaneousTiDB SQL fragments (toQuery)", () => {
  it("uuid/bin conversion functions", () => {
    expect(uuid().toQuery(mysqlQueryConfig).sql).toBe("UUID()");
    expect(uuidToBin("a").toQuery(mysqlQueryConfig).sql).toBe("UUID_TO_BIN(?)");
    expect(uuidToBin("a", 1).toQuery(mysqlQueryConfig).sql).toBe("UUID_TO_BIN(?, ?)");
    expect(binToUuid(cols.s).toQuery(mysqlQueryConfig).sql).toBe("BIN_TO_UUID(`misc_t`.`s`)");
  });

  it("IP helper functions", () => {
    expect(inetAton("127.0.0.1").toQuery(mysqlQueryConfig).sql).toBe("INET_ATON(?)");
    expect(inetNtoa(2130706433).toQuery(mysqlQueryConfig).sql).toBe("INET_NTOA(?)");
    expect(inet6Aton("::1").toQuery(mysqlQueryConfig).sql).toBe("INET6_ATON(?)");
    expect(inet6Ntoa("x").toQuery(mysqlQueryConfig).sql).toBe("INET6_NTOA(?)");
    expect(isIpv4("127.0.0.1").toQuery(mysqlQueryConfig).sql).toBe("IS_IPV4(?)");
    expect(isIpv4Compat(cols.s).toQuery(mysqlQueryConfig).sql).toBe("IS_IPV4_COMPAT(`misc_t`.`s`)");
    expect(isIpv4Mapped(cols.s).toQuery(mysqlQueryConfig).sql).toBe("IS_IPV4_MAPPED(`misc_t`.`s`)");
    expect(isIpv6("::1").toQuery(mysqlQueryConfig).sql).toBe("IS_IPV6(?)");
    expect(isUuid("u").toQuery(mysqlQueryConfig).sql).toBe("IS_UUID(?)");
  });

  it("other miscellaneous functions", () => {
    expect(anyValue(cols.c1).toQuery(mysqlQueryConfig).sql).toBe("ANY_VALUE(`misc_t`.`c1`)");
    expect(defaultValue(cols.c1).toQuery(mysqlQueryConfig).sql).toBe("DEFAULT(`misc_t`.`c1`)");
    expect(grouping(cols.c1, cols.id).toQuery(mysqlQueryConfig).sql).toBe(
      "GROUPING(`misc_t`.`c1`, `misc_t`.`id`)",
    );
    expect(nameConst("column", "value").toQuery(mysqlQueryConfig).sql).toBe("NAME_CONST(?, ?)");
    expect(sleep(1.5).toQuery(mysqlQueryConfig).sql).toBe("SLEEP(?)");
    expect(valuesFn(cols.id).toQuery(mysqlQueryConfig).sql).toBe("VALUES(`misc_t`.`id`)");
  });
});
