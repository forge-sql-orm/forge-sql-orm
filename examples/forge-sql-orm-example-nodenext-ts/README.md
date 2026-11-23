# Forge SQL ORM nodenext example, TypeScript (#2865)

See also the JavaScript (ESM + JSDoc) variant: [forge-sql-orm-example-nodenext-js](../forge-sql-orm-example-nodenext-js).

A Forge app (UI Kit global page + resolvers + SQL migration) type-checked with
`"module": "nodenext"` / `"moduleResolution": "nodenext"`, using both `forge-sql-orm` and
`forge-sql-orm-extra`. It guards against regressions in the `dist/esm/**/*.d.ts` declarations:
relative imports there must carry explicit extensions, otherwise named exports fail with
`TS2614` and the default export silently becomes `any`.

## Layout

- `src/entities`, `src/migration`, `src/resolvers`, `src/index.ts` — the Forge backend, structured
  like the other examples. It uses extensionless relative imports because the Forge webpack bundler
  cannot resolve `./x.js` to `x.ts`; the package is not `"type": "module"`, so nodenext treats these
  files as CommonJS.
- `src/esm-check.mts` — the actual regression guard. A `.mts` file is always an ES module, so it is
  resolved through the `import` condition (ESM declarations) of both packages. It is never bundled by
  Forge, only type-checked. `@ts-expect-error` lines fail the build if `ForgeSQL` degrades to `any`.
- `src/frontend` — UI Kit global page that lists, adds and deletes `users`.

```bash
npm install
npm run build:ci        # tsc --noEmit under nodenext (also run in CI)
npm run check:node16
npm run check:bundler
```

## Setup

```bash
forge register          # put the generated app id into manifest.yml
forge deploy && forge install
```
