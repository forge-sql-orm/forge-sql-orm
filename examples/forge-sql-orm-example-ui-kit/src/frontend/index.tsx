import React, { useCallback, useEffect, useState } from "react";
import ForgeReconciler, {
  Box,
  Button,
  DynamicTable,
  Form,
  FormFooter,
  FormHeader,
  FormSection,
  Heading,
  Label,
  Stack,
  Text,
  Textfield,
  useForm,
} from "@forge/react";
import { invoke } from "@forge/bridge";

type User = { id: number; name: string | null; email: string | null };

const usersHead = {
  cells: [
    { key: "id", content: "ID", isSortable: true },
    { key: "name", content: "Name", isSortable: true },
    { key: "email", content: "Email", isSortable: true },
  ],
};

function usersToRows(users: User[]) {
  return users.map((u, i) => ({
    key: `row-${u.id}-${i}`,
    cells: [
      { key: u.id, content: String(u.id) },
      { key: `name-${u.id}`, content: u.name ?? "" },
      { key: `email-${u.id}`, content: u.email ?? "" },
    ],
  }));
}

const App = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [editId, setEditId] = useState<string>("");
  const [editName, setEditName] = useState("");
  const [editEmail, setEditEmail] = useState("");

  const loadUsers = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await invoke<User[]>("fetchUsers");
      setUsers(Array.isArray(data) ? data : []);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Failed to load users");
      setUsers([]);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadUsers();
  }, [loadUsers]);

  const { handleSubmit, register, getFieldId } = useForm();

  const onCreateUser = useCallback(
    async (data: { name?: string; email?: string }) => {
      setError(null);
      try {
        await invoke("createUser", {
          name: data.name ?? "",
          email: data.email ?? "",
        });
        await loadUsers();
      } catch (e) {
        setError(e instanceof Error ? e.message : "Failed to create user");
      }
    },
    [loadUsers],
  );

  const onUpdateUser = useCallback(async () => {
    const id = Number(editId);
    if (!Number.isFinite(id)) {
      setError("Enter a valid user ID");
      return;
    }
    setError(null);
    try {
      await invoke("updateUsers", {
        id,
        ...(editName !== undefined && editName !== "" && { name: editName }),
        ...(editEmail !== undefined && editEmail !== "" && { email: editEmail }),
      });
      setEditId("");
      setEditName("");
      setEditEmail("");
      await loadUsers();
    } catch (e) {
      setError(e instanceof Error ? e.message : "Failed to update user");
    }
  }, [editId, editName, editEmail, loadUsers]);

  return (
    <Stack space="space.200">
      <Heading size="medium">Users (Forge SQL ORM + UI Kit)</Heading>

      {error && (
        <Box>
          <Text>{error}</Text>
        </Box>
      )}

      <Form onSubmit={handleSubmit(onCreateUser)}>
        <FormHeader title="Add user" />
        <FormSection title="New user">
          <Stack space="space.100">
            <Box>
              <Label labelFor={getFieldId("name")}>Name</Label>
              <Textfield {...register("name")} />
            </Box>
            <Box>
              <Label labelFor={getFieldId("email")}>Email</Label>
              <Textfield {...register("email")} />
            </Box>
          </Stack>
        </FormSection>
        <FormFooter>
          <Button type="submit" appearance="primary">
            Create user
          </Button>
        </FormFooter>
      </Form>

      <Box>
        <Heading size="small">Update user</Heading>
        <Stack space="space.100">
          <Box>
            <Label labelFor="edit-id">User ID</Label>
            <Textfield
              id="edit-id"
              value={editId}
              onChange={(e) => setEditId(String(e.target?.value ?? ""))}
              placeholder="e.g. 1"
            />
          </Box>
          <Box>
            <Label labelFor="edit-name">Name</Label>
            <Textfield
              id="edit-name"
              value={editName}
              onChange={(e) => setEditName(String(e.target?.value ?? ""))}
              placeholder="New name"
            />
          </Box>
          <Box>
            <Label labelFor="edit-email">Email</Label>
            <Textfield
              id="edit-email"
              value={editEmail}
              onChange={(e) => setEditEmail(String(e.target?.value ?? ""))}
              placeholder="New email"
            />
          </Box>
          <Button appearance="primary" onClick={onUpdateUser}>
            Update user
          </Button>
        </Stack>
      </Box>

      <Box>
        <Heading size="small">All users</Heading>
        <DynamicTable
          caption="Users list"
          head={usersHead}
          rows={usersToRows(users)}
          rowsPerPage={10}
          isLoading={loading}
          emptyView={<Text>No users yet. Create one above.</Text>}
        />
      </Box>
    </Stack>
  );
};

ForgeReconciler.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
