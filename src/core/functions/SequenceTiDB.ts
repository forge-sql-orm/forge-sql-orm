import { sql, type SQL } from "drizzle-orm";

/**
 * TiDB sequence function helpers.
 * @see https://docs.pingcap.com/tidb/stable/sequence-functions
 *
 * MySQL does not support these sequence functions.
 */
export type SequenceRef = SQL | string;

function sequenceExpr(sequence: SequenceRef): SQL {
  if (typeof sequence === "string") {
    // Sequence name is emitted as SQL identifier/expression; pass trusted names only.
    return sql.raw(sequence);
  }
  return sequence;
}

/** `NEXTVAL(sequence)` */
export function nextVal(sequence: SequenceRef): SQL {
  return sql`NEXTVAL(${sequenceExpr(sequence)})`;
}

/** `NEXT VALUE FOR sequence` (alias of `NEXTVAL`) */
export function nextValueFor(sequence: SequenceRef): SQL {
  return sql`NEXT VALUE FOR ${sequenceExpr(sequence)}`;
}

/** `SETVAL(sequence, value)` */
export function setVal(sequence: SequenceRef, value: number): SQL {
  return sql`SETVAL(${sequenceExpr(sequence)}, ${value})`;
}

/** `LASTVAL(sequence)` */
export function lastVal(sequence: SequenceRef): SQL {
  return sql`LASTVAL(${sequenceExpr(sequence)})`;
}
