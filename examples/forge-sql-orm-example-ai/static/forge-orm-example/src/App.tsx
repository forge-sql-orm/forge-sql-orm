import React, { useCallback, useEffect, useState } from "react";
import { invoke } from "@forge/bridge";
import Button from "@atlaskit/button";
import DynamicTable from "@atlaskit/dynamic-table";
import TextArea from "@atlaskit/textarea";
import Textfield from "@atlaskit/textfield";
import Tabs, { Tab, TabList, TabPanel } from "@atlaskit/tabs";
import SectionMessage from "@atlaskit/section-message";
import { Box, Inline, Stack, xcss } from "@atlaskit/primitives";
import { useVectorModel } from "./vectorModelContext";

type SearchResult = {
  id: number;
  title: string;
  document: string;
  distance: number;
};

type DocumentRow = {
  id: number;
  title: string;
  document: string;
  embedding: number[];
};

const pageContainerStyles = xcss({
  width: "100%",
});

const formBlockStyles = xcss({
  width: "100%",
  maxWidth: "100%",
});

const contentCellStyles = xcss({
  whiteSpace: "normal",
  overflowWrap: "anywhere",
});

function App() {
  const vectorModel = useVectorModel();
  const [activeTabIndex, setActiveTabIndex] = useState(1);
  const [title, setTitle] = useState("");
  const [documentText, setDocumentText] = useState("");
  const [searchText, setSearchText] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const [documents, setDocuments] = useState<DocumentRow[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [openDocumentId, setOpenDocumentId] = useState<number | null>(null);
  const [openVectorId, setOpenVectorId] = useState<number | null>(null);
  const [openSearchDocumentId, setOpenSearchDocumentId] = useState<number | null>(null);
  const documentLimit = 2048;

  const fetchDocumentsFromApi = useCallback(async (): Promise<DocumentRow[]> => {
    const data = await invoke<DocumentRow[]>("fetch");
    setDocuments(data);
    setResults([]);
    return data;
  }, []);

  const handleFetchAll = useCallback(async () => {
    setIsLoading(true);
    setMessage("");
    try {
      const data = await fetchDocumentsFromApi();
      setMessage(`Loaded ${data.length} document(s)`);
    } catch (error) {
      setMessage(`Fetch failed: ${error instanceof Error ? error.message : String(error)}`);
    } finally {
      setIsLoading(false);
    }
  }, [fetchDocumentsFromApi]);

  useEffect(() => {
    if (activeTabIndex !== 0) return;
    void handleFetchAll();
  }, [activeTabIndex, handleFetchAll]);

  const handleCreate = async () => {
    const trimmedTitle = title.trim();
    const trimmedDocument = documentText.trim();
    if (!trimmedTitle) {
      setMessage("Title is required");
      return;
    }
    if (!trimmedDocument) {
      setMessage("Document is required");
      return;
    }
    if (trimmedDocument.length > documentLimit) {
      setMessage(`Document must be at most ${documentLimit} characters`);
      return;
    }

    setIsLoading(true);
    setMessage("");
    try {
      const vector = await vectorModel.getVector(trimmedDocument);
      const insertId = await invoke<number>("create", {
        data: {
          title: trimmedTitle,
          document: trimmedDocument,
          embedding: vector,
        },
      });
      try {
        const rows = await fetchDocumentsFromApi();
        setMessage(`Document created. insertId: ${insertId}. Showing ${rows.length} document(s).`);
      } catch (fetchError) {
        setMessage(
          `Document created. insertId: ${insertId}. Could not refresh list: ${fetchError instanceof Error ? fetchError.message : String(fetchError)}`,
        );
      }
    } catch (error) {
      setMessage(`Create failed: ${error instanceof Error ? error.message : String(error)}`);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSearch = async () => {
    const trimmedSearchText = searchText.trim();
    if (!trimmedSearchText) {
      setMessage("Search text is required");
      return;
    }
    if (trimmedSearchText.length > documentLimit) {
      setMessage(`Search text must be at most ${documentLimit} characters`);
      return;
    }

    setIsLoading(true);
    setMessage("");
    try {
      const vector = await vectorModel.getVector(trimmedSearchText);
      const data = await invoke<SearchResult[]>("search", { vector });
      setResults(data);
      setDocuments([]);
      setMessage(`Found ${data.length} result(s)`);
    } catch (error) {
      setMessage(`Search failed: ${error instanceof Error ? error.message : String(error)}`);
    } finally {
      setIsLoading(false);
    }
  };

  const searchHead = {
    cells: [
      { key: "id", content: "ID", width: 10 },
      { key: "title", content: "Title", width: 25 },
      { key: "document", content: "Document", width: 45 },
      { key: "similarity", content: "Similarity (%)", width: 20 },
    ],
  };

  const searchRows = results.map((row) => ({
    key: `search-${row.id}`,
    cells: [
      { key: `id-${row.id}`, content: row.id },
      { key: `title-${row.id}`, content: row.title },
      {
        key: `document-${row.id}`,
        content: (
          <Stack space="space.100">
            <Inline>
              <Button
                onClick={() =>
                  setOpenSearchDocumentId((current) => (current === row.id ? null : row.id))
                }
              >
                {openSearchDocumentId === row.id ? "Hide document" : "Open document"}
              </Button>
            </Inline>
            {openSearchDocumentId === row.id ? (
              <Box xcss={contentCellStyles}>
                <strong>Document:</strong> {row.document}
              </Box>
            ) : null}
          </Stack>
        ),
      },
      { key: `similarity-${row.id}`, content: `${((1 - row.distance) * 100).toFixed(2)}%` },
    ],
  }));

  const documentsHead = {
    cells: [
      { key: "id", content: "ID", width: 10 },
      { key: "title", content: "Title", width: 25 },
      { key: "document", content: "Document", width: 30 },
      { key: "vector", content: "Vector", width: 35 },
    ],
  };

  const documentRows = documents.map((row) => ({
    key: `fetch-${row.id}`,
    cells: [
      { key: `id-${row.id}`, content: row.id },
      { key: `title-${row.id}`, content: row.title },
      {
        key: `document-${row.id}`,
        content: (
          <Stack space="space.100">
            <Inline>
              <Button
                onClick={() => setOpenDocumentId((current) => (current === row.id ? null : row.id))}
              >
                {openDocumentId === row.id ? "Hide document" : "Open document"}
              </Button>
            </Inline>
            {openDocumentId === row.id ? (
              <Box xcss={contentCellStyles}>
                <strong>Document:</strong> {row.document}
              </Box>
            ) : null}
          </Stack>
        ),
      },
      {
        key: `vector-${row.id}`,
        content: (
          <Stack space="space.100">
            <Inline>
              <Button
                onClick={() => setOpenVectorId((current) => (current === row.id ? null : row.id))}
              >
                {openVectorId === row.id ? "Hide vector" : "Open vector"}
              </Button>
            </Inline>
            {openVectorId === row.id ? (
              <Box xcss={contentCellStyles}>
                <strong>Vector:</strong> [{row.embedding.join(", ")}]
              </Box>
            ) : null}
          </Stack>
        ),
      },
    ],
  }));

  return (
    <Box padding="space.300" xcss={pageContainerStyles}>
      <Stack space="space.300">
        <h2>TiDB Vector Example (3D)</h2>

        <Tabs
          id="vector-tabs"
          selected={activeTabIndex}
          onChange={(index) => setActiveTabIndex(index)}
        >
          <TabList>
            <Tab>Add documents</Tab>
            <Tab>AI(Vector) search</Tab>
          </TabList>
          <TabPanel>
            <Box padding="space.200" xcss={formBlockStyles}>
              <Stack space="space.150">
                <h3>Insert document</h3>
                <Textfield
                  value={title}
                  maxLength={255}
                  placeholder="Title"
                  onChange={(e) => setTitle((e.target as HTMLInputElement).value)}
                />
                <TextArea
                  value={documentText}
                  maxLength={documentLimit}
                  minimumRows={8}
                  resize="vertical"
                  placeholder="Document text"
                  onChange={(e) => setDocumentText((e.target as HTMLTextAreaElement).value)}
                />
                <Box as="small">
                  {documentText.length}/{documentLimit} chars
                </Box>
                <Box as="small">Embedding is generated automatically from document text.</Box>
                <Inline space="space.100">
                  <Button appearance="primary" onClick={handleCreate} isDisabled={isLoading}>
                    Insert
                  </Button>
                  <Button onClick={handleFetchAll} isDisabled={isLoading}>
                    Fetch all
                  </Button>
                </Inline>
              </Stack>
            </Box>
          </TabPanel>
          <TabPanel>
            <Box padding="space.200" xcss={formBlockStyles}>
              <Stack space="space.150">
                <h3>AI(Vector) search</h3>
                <TextArea
                  value={searchText}
                  maxLength={documentLimit}
                  minimumRows={6}
                  resize="vertical"
                  placeholder="Query text"
                  onChange={(e) => setSearchText((e.target as HTMLTextAreaElement).value)}
                />
                <Box as="small">
                  {searchText.length}/{documentLimit} chars
                </Box>
                <Box as="small">Search vector is generated automatically from query text.</Box>
                <Inline space="space.100">
                  <Button appearance="primary" onClick={handleSearch} isDisabled={isLoading}>
                    Search
                  </Button>
                </Inline>
              </Stack>
            </Box>
          </TabPanel>
        </Tabs>

        {message ? (
          <SectionMessage appearance="information">
            <p>{message}</p>
          </SectionMessage>
        ) : null}

        <Box as="section">
          <h3>Results</h3>

          {results.length > 0 ? (
            <DynamicTable head={searchHead} rows={searchRows} rowsPerPage={10} defaultPage={1} />
          ) : null}

          {documents.length > 0 ? (
            <DynamicTable
              head={documentsHead}
              rows={documentRows}
              rowsPerPage={10}
              defaultPage={1}
            />
          ) : null}
        </Box>
      </Stack>
    </Box>
  );
}

export default App;
