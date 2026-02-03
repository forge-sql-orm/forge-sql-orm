# Forge SQL ORM example (UI Kit)

This application demonstrates CRUD operations using Forge SQL ORM and **Forge UI Kit** (`@forge/react`). It runs as a Jira global page and uses a `users` table (id, name, email) in Forge SQL (MySQL) with Drizzle ORM.

See the [Forge documentation](https://developer.atlassian.com/platform/forge/) for more details.

## Requirements

Before starting, ensure that your Forge environment is set up. Follow the [Forge setup guide](https://developer.atlassian.com/platform/forge/set-up-forge/) for instructions.

## Quick Start

### Install dependencies

```sh
npm install
```

### Register your application on the Atlassian platform (only once)

```sh
forge register
```

### Deploy your app

```sh
forge deploy
```

### Install the app on an Atlassian site (only once)

```sh
forge install -s <your-site>.atlassian.net
```

### Using the application

This example allows you to:

- **Add users** — Form with Name and Email; data is stored in the `users` table.
- **View all users** — DynamicTable with ID, Name, Email (pagination, loading state).
- **Update users** — Enter user ID and optionally new Name and/or Email to update that row.

Resolvers: `createUser`, `fetchUsers`, `updateUsers`. Schema and migrations: `src/database/entities/schema.ts`; migrations run on install and hourly.

### Notes

- Use `forge deploy` to persist code changes.
- Use `forge install` only when installing the app on a new site.
- Once the app is installed, new deployments are reflected without reinstalling.
- If you change `manifest.yml` (e.g. modules, triggers, egress), run `forge deploy` again and `forge install --upgrade` if needed.
