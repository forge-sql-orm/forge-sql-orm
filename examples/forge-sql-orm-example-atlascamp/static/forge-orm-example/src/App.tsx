import React, { useState } from "react";
import { invoke } from "@forge/bridge";

interface DocumentResult {
  id: string;
  userId: string;
  createdAt: Date | string;
  title: string;
  documentId: string;
  permissionId: string;
  body: string;
}

const App: React.FC = () => {
  const [queryResult, setQueryResult] = useState<DocumentResult[] | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [activeButton, setActiveButton] = useState<string | null>(null);

  const executeQuery = async (
    resolverName: "getTimeOutError" | "getOOMError" | "getQueryResult" | "getQueryResultCache",
  ) => {
    setLoading(true);
    setError(null);
    setQueryResult(null);
    setActiveButton(resolverName);

    try {
      const result = await invoke<DocumentResult[]>(resolverName);
      setQueryResult(result || []);
      setError(null);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "Unknown error occurred";
      setError(errorMessage);
      setQueryResult(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        padding: "20px",
        fontFamily: "Arial, sans-serif",
        maxWidth: "1200px",
        margin: "0 auto",
      }}
    >
      <h1 style={{ color: "#0052CC", marginBottom: "30px" }}>🚀 Forge SQL ORM Query Demo</h1>

      {/* Info Section */}
      <div
        style={{
          padding: "20px",
          backgroundColor: "#F4F5F7",
          borderRadius: "8px",
          marginBottom: "30px",
        }}
      >
        <h3 style={{ color: "#172B4D", marginBottom: "15px" }}>Query Types:</h3>
        <ul style={{ color: "#6B778C", lineHeight: "1.6" }}>
          <li>
            <strong>Timeout Error:</strong> Executes a query with SLEEP(10) to test timeout behavior
          </li>
          <li>
            <strong>OOM Error:</strong> Executes a complex query with subquery that may cause Out of
            Memory
          </li>
          <li>
            <strong>Optimized Query:</strong> Uses cached permissions for better performance
          </li>
          <li>
            <strong>Cached Query:</strong> Uses cached permissions with optimized query structure
          </li>
        </ul>
      </div>

      <div
        style={{
          marginBottom: "40px",
          padding: "20px",
          border: "1px solid #ddd",
          borderRadius: "8px",
        }}
      >
        <h2 style={{ color: "#172B4D", marginBottom: "20px" }}>Execute Queries</h2>
        <p style={{ color: "#6B778C", marginBottom: "20px" }}>
          Click on a button to execute the corresponding query and see the results or errors.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "15px",
            marginBottom: "20px",
          }}
        >
          <button
            onClick={() => executeQuery("getTimeOutError")}
            disabled={loading}
            style={{
              padding: "15px 24px",
              backgroundColor: activeButton === "getTimeOutError" ? "#FF8B00" : "#FF5630",
              color: "white",
              border: "none",
              borderRadius: "4px",
              cursor: loading ? "not-allowed" : "pointer",
              opacity: loading && activeButton !== "getTimeOutError" ? 0.6 : 1,
              fontSize: "16px",
              fontWeight: "bold",
              transition: "all 0.3s ease",
            }}
          >
            {loading && activeButton === "getTimeOutError" ? "Loading..." : "⏱️ Timeout Error"}
          </button>

          <button
            onClick={() => executeQuery("getOOMError")}
            disabled={loading}
            style={{
              padding: "15px 24px",
              backgroundColor: activeButton === "getOOMError" ? "#C43E37" : "#FF5630",
              color: "white",
              border: "none",
              borderRadius: "4px",
              cursor: loading ? "not-allowed" : "pointer",
              opacity: loading && activeButton !== "getOOMError" ? 0.6 : 1,
              fontSize: "16px",
              fontWeight: "bold",
              transition: "all 0.3s ease",
            }}
          >
            {loading && activeButton === "getOOMError" ? "Loading..." : "💥 OOM Error"}
          </button>

          <button
            onClick={() => executeQuery("getQueryResult")}
            disabled={loading}
            style={{
              padding: "15px 24px",
              backgroundColor: activeButton === "getQueryResult" ? "#36B37E" : "#0052CC",
              color: "white",
              border: "none",
              borderRadius: "4px",
              cursor: loading ? "not-allowed" : "pointer",
              opacity: loading && activeButton !== "getQueryResult" ? 0.6 : 1,
              fontSize: "16px",
              fontWeight: "bold",
              transition: "all 0.3s ease",
            }}
          >
            {loading && activeButton === "getQueryResult" ? "Loading..." : "✅ Optimized Query"}
          </button>

          <button
            onClick={() => executeQuery("getQueryResultCache")}
            disabled={loading}
            style={{
              padding: "15px 24px",
              backgroundColor: activeButton === "getQueryResultCache" ? "#36B37E" : "#0052CC",
              color: "white",
              border: "none",
              borderRadius: "4px",
              cursor: loading ? "not-allowed" : "pointer",
              opacity: loading && activeButton !== "getQueryResultCache" ? 0.6 : 1,
              fontSize: "16px",
              fontWeight: "bold",
              transition: "all 0.3s ease",
            }}
          >
            {loading && activeButton === "getQueryResultCache" ? "Loading..." : "💾 Cached Query"}
          </button>
        </div>

        {error && (
          <div
            style={{
              padding: "15px",
              backgroundColor: "#FFEBEE",
              border: "1px solid #FFCDD2",
              borderRadius: "4px",
              color: "#C62828",
              marginBottom: "20px",
            }}
          >
            <strong>Error:</strong> {error}
          </div>
        )}

        {queryResult && !error && (
          <div
            style={{
              padding: "15px",
              backgroundColor: "#F4F5F7",
              borderRadius: "4px",
              marginTop: "10px",
            }}
          >
            <h3 style={{ margin: "0 0 10px 0", color: "#172B4D" }}>Query Results</h3>
            <div style={{ fontSize: "14px", color: "#6B778C", marginBottom: "10px" }}>
              Found {queryResult.length} record(s)
            </div>
            <div style={{ maxHeight: "400px", overflowY: "auto" }}>
              <table style={{ width: "100%", borderCollapse: "collapse" }}>
                <thead>
                  <tr style={{ backgroundColor: "#E9ECF0" }}>
                    <th style={{ padding: "8px", textAlign: "left", border: "1px solid #ddd" }}>
                      ID
                    </th>
                    <th style={{ padding: "8px", textAlign: "left", border: "1px solid #ddd" }}>
                      User ID
                    </th>
                    <th style={{ padding: "8px", textAlign: "left", border: "1px solid #ddd" }}>
                      Title
                    </th>
                    <th style={{ padding: "8px", textAlign: "left", border: "1px solid #ddd" }}>
                      Created At
                    </th>
                    <th style={{ padding: "8px", textAlign: "left", border: "1px solid #ddd" }}>
                      Document ID
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {queryResult.map((row, index) => (
                    <tr key={index}>
                      <td style={{ padding: "8px", border: "1px solid #ddd", fontSize: "12px" }}>
                        {String(row.id).substring(0, 8)}...
                      </td>
                      <td style={{ padding: "8px", border: "1px solid #ddd", fontSize: "12px" }}>
                        {String(row.userId).substring(0, 8)}...
                      </td>
                      <td style={{ padding: "8px", border: "1px solid #ddd" }}>
                        {row.title.length > 50 ? `${row.title.substring(0, 50)}...` : row.title}
                      </td>
                      <td style={{ padding: "8px", border: "1px solid #ddd", fontSize: "12px" }}>
                        {new Date(row.createdAt).toLocaleString()}
                      </td>
                      <td style={{ padding: "8px", border: "1px solid #ddd", fontSize: "12px" }}>
                        {String(row.documentId).substring(0, 8)}...
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
