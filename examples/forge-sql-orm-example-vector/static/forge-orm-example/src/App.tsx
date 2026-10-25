// SPDX-FileCopyrightText: 2025-2026 Vasyl Zakharchenko
// SPDX-License-Identifier: MIT

import React, { useCallback, useEffect, useState } from "react";
import { invoke } from "@forge/bridge";

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
    <div className="page">
      <div className="stack stack-lg">
        <h2>TiDB Vector Example (3D)</h2>

        <div>
          <div className="tabs">
            <button
              className={activeTabIndex === 0 ? "active" : undefined}
              onClick={() => setActiveTabIndex(0)}
            >
              Add documents
            </button>
            <button
              className={activeTabIndex === 1 ? "active" : undefined}
              onClick={() => setActiveTabIndex(1)}
            >
              Vector search
            </button>
          </div>
          {activeTabIndex === 0 ? (
            <>
              <div className="form-block">
                <div className="stack">
                  <h3>Insert document</h3>
                  <label>Document</label>
                  <input
                    type="text"
                    value={documentText}
                    onChange={(e) => setDocumentText(e.target.value)}
                  />

                  <label>Embedding vector (3 numbers)</label>
                  {embedding.map((value, index) => (
                    <input
                      type="text"
                      key={index}
                      value={value}
                      placeholder={`v${index + 1}`}
                      onChange={(e) => {
                        const next = [...embedding];
                        next[index] = e.target.value;
                        setEmbedding(next);
                      }}
                    />
                  ))}
                  <div className="inline">
                    <button className="primary" onClick={handleCreate} disabled={isLoading}>
                      Insert
                    </button>
                    <button onClick={handleFetchAll} disabled={isLoading}>
                      Fetch all
                    </button>
                  </div>
                </div>
              </div>
            </>
          ) : null}
          {activeTabIndex === 1 ? (
            <>
              <div className="form-block">
                <div className="stack">
                  <h3>Vector search</h3>
                  <label>Query vector (3 numbers)</label>
                  {searchVector.map((value, index) => (
                    <input
                      type="text"
                      key={index}
                      value={value}
                      placeholder={`q${index + 1}`}
                      onChange={(e) => {
                        const next = [...searchVector];
                        next[index] = e.target.value;
                        setSearchVector(next);
                      }}
                    />
                  ))}
                  <div className="inline">
                    <button className="primary" onClick={handleSearch} disabled={isLoading}>
                      Search
                    </button>
                  </div>
                </div>
              </div>
            </>
          ) : null}
        </div>

        {message ? (
          <div className="message">
            <p>{message}</p>
          </div>
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
      </div>
    </div>
  );
}

export default App;
