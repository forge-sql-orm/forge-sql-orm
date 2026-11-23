# Forge SQL ORM nodenext example (#2865)

A minimal Forge app compiled with `"module": "nodenext"` / `"moduleResolution": "nodenext"`
(ESM package, `"type": "module"`), using both `forge-sql-orm` and `forge-sql-orm-extra`.
It guards against regressions in the `dist/esm/**/*.d.ts` declarations: relative imports there
must carry explicit extensions, otherwise named exports fail with `TS2614` and the default
export silently becomes `any`.

```bash
npm install
npm run build:ci       # tsc under nodenext (also run in CI)
npm run check:node16
npm run check:bundler
```

## UI

A UI Kit `jira:globalPage` ("Forge SQL ORM nodenext example") lists, adds and deletes rows in the
`users` table through resolvers that run on the nodenext-compiled backend. The frontend
(`src/frontend`) is bundled by Forge and type-checked separately with `tsconfig.frontend.json`
(`bundler` resolution), because `@forge/react` is CommonJS-only.

## Setup

```bash
forge register          # put the generated app id into manifest.yml
forge deploy && forge install
```
