# Forge SQL ORM nodenext example, JavaScript (#2865)

A Forge app written in plain JavaScript (ESM, `"type": "module"`, types via JSDoc) and type-checked
with `tsc` (`allowJs` + `checkJs`) under `"module": "nodenext"` / `"moduleResolution": "nodenext"`,
using both `forge-sql-orm` and `forge-sql-orm-extra`. See also the TypeScript variant:
[forge-sql-orm-example-nodenext-ts](../forge-sql-orm-example-nodenext-ts).

It guards against regressions in the `dist/esm/**/*.d.ts` declarations: relative imports there must
carry explicit extensions, otherwise named exports fail with `TS2614` and the default export
silently becomes `any`.

## Layout

- `src/entities`, `src/migration`, `src/resolvers`, `src/index.js` - the Forge backend. Relative
  imports carry explicit `.js` extensions (required by ESM/nodenext); they are real `.js` files, so
  the Forge webpack bundler resolves them.
- `src/frontend` - UI Kit global page (TSX) that lists, adds and deletes `users`. It has its own
  `tsconfig.json` with `bundler` resolution because `@forge/react` is CommonJS-only.

```bash
npm install
npm run build:ci        # tsc under nodenext, checkJs (also run in CI)
npm run check:node16
npm run check:bundler
```

## Setup

```bash
forge register          # put the generated app id into manifest.yml
forge deploy && forge install
```
