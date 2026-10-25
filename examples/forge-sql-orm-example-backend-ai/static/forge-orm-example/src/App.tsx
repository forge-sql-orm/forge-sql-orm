// SPDX-FileCopyrightText: 2025-2026 Vasyl Zakharchenko
// SPDX-License-Identifier: MIT

import React, { useCallback, useEffect, useMemo, useState } from "react";
import { invoke } from "@forge/bridge";
import DataTable from "./components/DataTable";

type SearchResult = {
  id: number;
  title: string;
  document: string;
  distance: number;
  fulltextScore: number;
  fusedScore: number;
  score: number;
};

type DocumentRow = {
  id: number;
  title: string;
  document: string;
  embedding: number[];
};

/** 0–100 within the current result list (min–max of rerank logits). Not an absolute global %. */
function buildRelativeRerankFit(results: SearchResult[]): Map<number, number> {
  if (results.length === 0) {
    return new Map();
  }
  const scores = results.map((row) => row.score);
  const min = Math.min(...scores);
  const max = Math.max(...scores);
  return new Map(
    results.map((row) => [row.id, max === min ? 100 : ((row.score - min) / (max - min)) * 100]),
  );
}

function App() {
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
      const insertId = await invoke<number>("create", {
        data: {
          title: trimmedTitle,
          document: trimmedDocument,
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
      const data = await invoke<SearchResult[]>("search", { text: trimmedSearchText });
      setResults(data);
      setDocuments([]);
      setMessage(`Found ${data.length} result(s)`);
    } catch (error) {
      setMessage(`Search failed: ${error instanceof Error ? error.message : String(error)}`);
    } finally {
      setIsLoading(false);
    }
  };

  const rerankFitById = useMemo(() => buildRelativeRerankFit(results), [results]);

  const searchHead = [
    { key: "rank", title: "Final rank", width: 8 },
    { key: "id", title: "ID", width: 6 },
    { key: "title", title: "Title", width: 12 },
    { key: "document", title: "Document", width: 22 },
    { key: "combined", title: "Combined (%)", width: 10 },
    { key: "similarity", title: "Vector (%)", width: 9 },
    { key: "fulltext", title: "Fulltext (%)", width: 9 },
    { key: "rerankFit", title: "Rerank (%)", width: 9 },
  ];

  const searchRows = results.map((row, index) => ({
    key: `search-${row.id}`,
    cells: [
      {
        key: `rank-${row.id}`,
        content: index === 0 ? `#${index + 1} ★` : `#${index + 1}`,
      },
      { key: `id-${row.id}`, content: row.id },
      { key: `title-${row.id}`, content: row.title },
      {
        key: `document-${row.id}`,
        content: (
          <div className="stack">
            <div className="inline">
              <button
                onClick={() =>
                  setOpenSearchDocumentId((current) => (current === row.id ? null : row.id))
                }
              >
                {openSearchDocumentId === row.id ? "Hide document" : "Open document"}
              </button>
            </div>
            {openSearchDocumentId === row.id ? (
              <div className="content-cell">
                <strong>Document:</strong> {row.document}
              </div>
            ) : null}
          </div>
        ),
      },
      {
        key: `combined-${row.id}`,
        content: `${(row.fusedScore * 100).toFixed(0)}%`,
      },
      { key: `similarity-${row.id}`, content: `${((1 - row.distance) * 100).toFixed(2)}%` },
      {
        key: `fulltext-${row.id}`,
        content: `${(row.fulltextScore * 100).toFixed(0)}%`,
      },
      {
        key: `rerankFit-${row.id}`,
        content: `${rerankFitById.get(row.id)?.toFixed(0) ?? "—"}%`,
      },
    ],
  }));

  const documentsHead = [
    { key: "id", title: "ID", width: 10 },
    { key: "title", title: "Title", width: 25 },
    { key: "document", title: "Document", width: 30 },
    { key: "vector", title: "Vector", width: 35 },
  ];

  const documentRows = documents.map((row) => ({
    key: `fetch-${row.id}`,
    cells: [
      { key: `id-${row.id}`, content: row.id },
      { key: `title-${row.id}`, content: row.title },
      {
        key: `document-${row.id}`,
        content: (
          <div className="stack">
            <div className="inline">
              <button
                onClick={() => setOpenDocumentId((current) => (current === row.id ? null : row.id))}
              >
                {openDocumentId === row.id ? "Hide document" : "Open document"}
              </button>
            </div>
            {openDocumentId === row.id ? (
              <div className="content-cell">
                <strong>Document:</strong> {row.document}
              </div>
            ) : null}
          </div>
        ),
      },
      {
        key: `vector-${row.id}`,
        content: (
          <div className="stack">
            <div className="inline">
              <button
                onClick={() => setOpenVectorId((current) => (current === row.id ? null : row.id))}
              >
                {openVectorId === row.id ? "Hide vector" : "Open vector"}
              </button>
            </div>
            {openVectorId === row.id ? (
              <div className="content-cell">
                <strong>Vector:</strong> [{row.embedding.join(", ")}]
              </div>
            ) : null}
          </div>
        ),
      },
    ],
  }));

  return (
    <div className="page">
      <div className="stack stack-lg">
        <h2>TiDB Vector Example (backend embeddings)</h2>

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
            AI(Vector) search
          </button>
        </div>
        {activeTabIndex === 0 ? (
          <>
            <div className="form-block">
              <div className="stack">
                <h3>Insert document</h3>
                <input
                  type="text"
                  value={title}
                  maxLength={255}
                  placeholder="Title"
                  onChange={(e) => setTitle(e.target.value)}
                />
                <textarea
                  value={documentText}
                  maxLength={documentLimit}
                  rows={8}
                  placeholder="Document text"
                  onChange={(e) => setDocumentText(e.target.value)}
                />
                <small>
                  {documentText.length}/{documentLimit} chars
                </small>
                <small>Embedding is computed on the Forge backend from document text.</small>
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
                <h3>AI(Vector) search</h3>
                <textarea
                  value={searchText}
                  maxLength={documentLimit}
                  rows={6}
                  placeholder="Query text"
                  onChange={(e) => setSearchText(e.target.value)}
                />
                <small>
                  {searchText.length}/{documentLimit} chars
                </small>
                <small>
                  Pipeline: vector retrieve (Forge SQL) → MiniSearch fulltext → cross-encoder rerank
                  → RRF (see hybridScore.ts weights). Combined (%) drives Final rank.
                </small>
                <div className="inline">
                  <button className="primary" onClick={handleSearch} disabled={isLoading}>
                    Search
                  </button>
                </div>
              </div>
            </div>
          </>
        ) : null}

        {message ? (
          <div className="message">
            <p>{message}</p>
          </div>
        ) : null}

        <section>
          <h3>Results</h3>

          {results.length > 0 ? (
            <div className="stack">
              <div className="message">
                <p>
                  <strong>Final rank</strong> — order by <strong>Combined (%)</strong> (RRF of
                  vector, fulltext, rerank — weights in backend hybridScore.ts).{" "}
                  <strong>Vector</strong> — embedding similarity. <strong>Fulltext</strong> —
                  MiniSearch on title + document. <strong>Rerank</strong> — cross-encoder fit,
                  relative to other rows (100% = best rerank logit in this list).
                </p>
              </div>
              <DataTable columns={searchHead} rows={searchRows} />
            </div>
          ) : null}

          {documents.length > 0 ? <DataTable columns={documentsHead} rows={documentRows} /> : null}
        </section>
      </div>
    </div>
  );
}

export default App;
