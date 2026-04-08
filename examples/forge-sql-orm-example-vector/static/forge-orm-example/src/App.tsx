import React, { useCallback, useEffect, useState } from "react";
import { invoke } from "@forge/bridge";
import Button from "@atlaskit/button";
import Textfield from "@atlaskit/textfield";
import Tabs, { Tab, TabList, TabPanel } from "@atlaskit/tabs";
import SectionMessage from "@atlaskit/section-message";
import { Box, Inline, Stack } from "@atlaskit/primitives";
import "./vectorTabsFrame.css";

type SearchResult = {
  id: number;
  document: string;
  distance: number;
};

type DocumentRow = {
  id: number;
  document: string;
  embedding: number[];
};

function App() {
  const [activeTabIndex, setActiveTabIndex] = useState(1);
  const [documentText, setDocumentText] = useState("dog");
  const [embedding, setEmbedding] = useState(["1", "2", "1"]);

  const [searchVector, setSearchVector] = useState(["1", "2", "3"]);
  const [results, setResults] = useState<SearchResult[]>([]);
  const [documents, setDocuments] = useState<DocumentRow[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");

  const parseVector = (values: string[]): number[] => values.map((v) => Number(v.trim()));

  const validateVector = (values: number[]): string | null => {
    if (values.length !== 3) {
      return "Vector must contain exactly 3 numbers";
    }
    if (values.some((v) => Number.isNaN(v))) {
      return "Vector values must be valid numbers";
    }
    return null;
  };

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
    const vector = parseVector(embedding);
    const vectorError = validateVector(vector);
    if (vectorError) {
      setMessage(vectorError);
      return;
    }

    setIsLoading(true);
    setMessage("");
    try {
      const insertId = await invoke<number>("create", {
        data: {
          document: documentText,
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
    const vector = parseVector(searchVector);
    const vectorError = validateVector(vector);
    if (vectorError) {
      setMessage(vectorError);
      return;
    }

    setIsLoading(true);
    setMessage("");
    try {
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

  return (
    <Box padding="space.300">
      <Stack space="space.300">
        <h2>TiDB Vector Example (3D)</h2>

        <div className="vector-tabs-frame">
          <Tabs
            id="vector-tabs"
            selected={activeTabIndex}
            onChange={(index) => setActiveTabIndex(index)}
          >
            <TabList>
              <Tab>Add documents</Tab>
              <Tab>Vector search</Tab>
            </TabList>
            <TabPanel>
              <Box padding="space.200">
                <Stack space="space.150">
                  <h3>Insert document</h3>
                  <label>Document</label>
                  <Textfield
                    value={documentText}
                    onChange={(e) => setDocumentText((e.target as HTMLInputElement).value)}
                  />

                  <label>Embedding vector (3 numbers)</label>
                  {embedding.map((value, index) => (
                    <Textfield
                      key={index}
                      value={value}
                      placeholder={`v${index + 1}`}
                      onChange={(e) => {
                        const next = [...embedding];
                        next[index] = (e.target as HTMLInputElement).value;
                        setEmbedding(next);
                      }}
                    />
                  ))}
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
              <Box padding="space.200">
                <Stack space="space.150">
                  <h3>Vector search</h3>
                  <label>Query vector (3 numbers)</label>
                  {searchVector.map((value, index) => (
                    <Textfield
                      key={index}
                      value={value}
                      placeholder={`q${index + 1}`}
                      onChange={(e) => {
                        const next = [...searchVector];
                        next[index] = (e.target as HTMLInputElement).value;
                        setSearchVector(next);
                      }}
                    />
                  ))}
                  <Inline space="space.100">
                    <Button appearance="primary" onClick={handleSearch} isDisabled={isLoading}>
                      Search
                    </Button>
                  </Inline>
                </Stack>
              </Box>
            </TabPanel>
          </Tabs>
        </div>

        {message ? (
          <SectionMessage appearance="information">
            <p>{message}</p>
          </SectionMessage>
        ) : null}

        <section>
          <h3>Results</h3>

          {results.length > 0 ? (
            <table>
              <thead>
                <tr>
                  <th style={{ textAlign: "left", paddingRight: 16 }}>ID</th>
                  <th style={{ textAlign: "left", paddingRight: 16 }}>Document</th>
                  <th style={{ textAlign: "left" }}>Distance</th>
                </tr>
              </thead>
              <tbody>
                {results.map((row) => (
                  <tr key={`${row.id}-${row.document}`}>
                    <td>{row.id}</td>
                    <td>{row.document}</td>
                    <td>{row.distance}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : null}

          {documents.length > 0 ? (
            <table>
              <thead>
                <tr>
                  <th style={{ textAlign: "left", paddingRight: 16 }}>ID</th>
                  <th style={{ textAlign: "left", paddingRight: 16 }}>Document</th>
                  <th style={{ textAlign: "left" }}>Embedding</th>
                </tr>
              </thead>
              <tbody>
                {documents.map((row) => (
                  <tr key={`${row.id}-${row.document}`}>
                    <td>{row.id}</td>
                    <td>{row.document}</td>
                    <td>[{row.embedding.join(", ")}]</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : null}
        </section>
      </Stack>
    </Box>
  );
}

export default App;
