// SPDX-FileCopyrightText: 2025-2026 Vasyl Zakharchenko
// SPDX-License-Identifier: MIT

import Resolver, { Request } from "@forge/resolver";
import ForgeSQL from "forge-sql-orm";
import { dropSchemaMigrations, applySchemaMigrations, fetchSchemaWebTrigger } from "forge-sql-orm";
import migration from "./migration";
import { DuplicateResponse, SortType, UserResponse } from "./utils/Constants";
import { asc, desc, eq, InferInsertModel, sql as rawSql } from "drizzle-orm";
import { users } from "./entities";
import { MySqlColumn } from "drizzle-orm/mysql-core/columns";

const resolver = new Resolver();
const forgeSQL = new ForgeSQL({ logRawSqlQuery: true });

resolver.define(
  "create",
  async (req: Request<{ data: Partial<InferInsertModel<typeof users>> }>): Promise<number> => {
    const payload = req.payload.data;
    const res = await forgeSQL.insert(users).values([payload]);
    return res[0].insertId;
  },
);

resolver.define("delete", async (req: Request<{ id: number }>): Promise<void> => {
  const id = req.payload.id;
  await forgeSQL.delete(users).where(eq(users.id, id));
});

resolver.define("duplicate", async (req): Promise<DuplicateResponse[]> => {
  const duplicateResult = await forgeSQL
    .select({
      name: users.name,
      email: users.email,
      count: rawSql`COUNT(*) as \`count\``,
    })
    .from(users)
    .groupBy(users.name, users.email)
    .having(rawSql`COUNT(*) > 1`);

  return duplicateResult.map((d): DuplicateResponse => ({
    count: d.count as number,
    name: d.name as string,
    email: d.email as string,
  }));
});

resolver.define("fetch", async (req: Request<{ sortType?: SortType }>): Promise<UserResponse[]> => {
  const sortType = req.payload.sortType;
  const baseQuery = forgeSQL.getDrizzleQueryBuilder().select().from(users);

  // Apply sorting if specified
  const query = sortType?.name
    ? baseQuery.orderBy(
        sortType.sortType === "ASC"
          ? asc(users[sortType.name as keyof typeof users] as MySqlColumn)
          : desc(users[sortType.name as keyof typeof users] as MySqlColumn),
      )
    : baseQuery;

  const result = await query;
  return result.map((r): UserResponse => ({
    id: r.id,
    name: r.name,
    email: r.email,
  }));
});

export const handler = resolver.getDefinitions();

export const handlerMigration = async () => {
  return applySchemaMigrations(migration);
};

export const dropMigrations = () => {
  return dropSchemaMigrations();
};

export const fetchMigrations = () => {
  return fetchSchemaWebTrigger();
};

export const proxyWebTrigger = async (request: {
  headers: Record<string, string[]>;
  path: string;
  method: string;
  userPath: string;
  body: string;
  queryParameters: Record<string, string[]>;
}) => {
  console.log("proxyWebTrigger", request.userPath);
  console.log("proxyWebTrigger", request.path);
  return {
    headers: { "Content-Type": ["application/atom+xml;charset=utf-8"] },
    statusCode: 200,
    statusText: "OK",
    body:
      '{<?xml version="1.0" encoding="UTF-8"?>\n' +
      "<magazin>\n" +
      '    <produkt id="101" наличност="да">\n' +
      "        <ime>Лаптоп</ime>\n" +
      '        <cena valuta="BGN">1899.00</cena>\n' +
      "        <proizvoditel>TechBrand</proizvoditel>\n" +
      "    </produkt>\n" +
      '    <produkt id="102" наличност="не">\n' +
      "        <ime>Смартфон</ime>\n" +
      '        <cena valuta="BGN">999.00</cena>\n' +
      "        <proizvoditel>PhoneMaker</proizvoditel>\n" +
      "    </produkt>\n" +
      "</magazin>}",
    contentType: "xml",
  };
};
