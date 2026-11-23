// SPDX-FileCopyrightText: 2025-2026 Vasyl Zakharchenko
// SPDX-License-Identifier: MIT

import React, { useCallback, useEffect, useState } from "react";
import ForgeReconciler, {
  Button,
  DynamicTable,
  Form,
  FormFooter,
  Heading,
  Label,
  Stack,
  Text,
  Textfield,
  useForm,
} from "@forge/react";
import { invoke } from "@forge/bridge";

type User = { id: number; name: string | null };

const head = {
  cells: [
    { key: "id", content: "ID" },
    { key: "name", content: "Name" },
    { key: "actions", content: "" },
  ],
};

const App = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState<string | null>(null);
  const { handleSubmit, register, getFieldId } = useForm();
  const [formKey, setFormKey] = useState(0);

  const load = useCallback(async () => {
    try {
      setError(null);
      const data = await invoke<User[]>("fetchUsers");
      setUsers(Array.isArray(data) ? data : []);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Failed to load users");
    }
  }, []);

  useEffect(() => {
    void load();
  }, [load]);

  const onCreate = async (data: { name?: string }) => {
    try {
      setError(null);
      await invoke("createUser", { name: data.name ?? "" });
      setFormKey((k) => k + 1);
      await load();
    } catch (e) {
      setError(e instanceof Error ? e.message : "Failed to create user");
    }
  };

  const onDelete = async (id: number) => {
    await invoke("deleteUser", { id });
    await load();
  };

  const rows = users.map((u) => ({
    key: `user-${u.id}`,
    cells: [
      { key: `id-${u.id}`, content: String(u.id) },
      { key: `name-${u.id}`, content: u.name ?? "" },
      {
        key: `del-${u.id}`,
        content: <Button onClick={() => onDelete(u.id)}>Delete</Button>,
      },
    ],
  }));

  return (
    <Stack space="space.200">
      <Heading as="h2">forge-sql-orm under nodenext</Heading>
      <Text>
        Backend compiled with module/moduleResolution nodenext, using forge-sql-orm and
        forge-sql-orm-extra (issue #2865).
      </Text>
      {error && <Text>Error: {error}</Text>}
      <Form key={formKey} onSubmit={handleSubmit(onCreate)}>
        <Label labelFor={getFieldId("name")}>Name</Label>
        <Textfield {...register("name")} />
        <FormFooter>
          <Button appearance="primary" type="submit">
            Add user
          </Button>
        </FormFooter>
      </Form>
      <DynamicTable head={head} rows={rows} emptyView={<Text>No users yet</Text>} />
    </Stack>
  );
};

ForgeReconciler.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
