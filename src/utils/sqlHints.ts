/**
 * Interface for SQL hints configuration
 */
export interface SqlHints {
  /** SQL hints for SELECT queries */
  select?: string[];
  /** SQL hints for INSERT queries */
  insert?: string[];
  /** SQL hints for UPDATE queries */
  update?: string[];
  /** SQL hints for DELETE queries */
  delete?: string[];
}

/**
 * Detects the type of SQL query and injects appropriate hints
 * @param query - The SQL query to analyze
 * @param hints - The hints configuration
 * @returns The modified query with injected hints
 */
export function injectSqlHints(query: string, hints?: SqlHints): string {
  if (!hints) {
    return query;
  }

  // Normalize the query for easier matching
  const normalizedQuery = query.trim().toUpperCase();

  // Map query types to their hints
  const queryTypeMap: Record<string, string[] | undefined> = {
    SELECT: hints.select,
    INSERT: hints.insert,
    UPDATE: hints.update,
    DELETE: hints.delete,
  };

  // Find matching query type and get hints
  let queryHints: string[] | undefined;
  let queryPrefix: string | null = null;

  for (const [type, typeHints] of Object.entries(queryTypeMap)) {
    if (normalizedQuery.startsWith(type)) {
      queryPrefix = type;
      queryHints = typeHints;
      break;
    }
  }

  // If no hints for this query type, return original query
  if (!queryHints || queryHints.length === 0 || !queryPrefix) {
    return query;
  }

  // Join all hints with spaces and inject into query
  const hintsString = queryHints.join(" ");
  const prefixLength = queryPrefix.length;
  return `${queryPrefix} /*+ ${hintsString} */ ${query.substring(prefixLength)}`;
}
