export const documentStatus = {
  name: 'Document Status',
  description: 'The base type for all document status indicators.',
  mode: {
    description:
      "Defines the high-level phase of the document's lifecycle. Must be one of:\n  pending: The document is waiting for a pre-condition before its core logic begins.\n  active: The document is in its main operational phase, actively processing events.\n  terminated: The document has reached a final, conclusive state.",
    type: {
      blueId: 'F92yo19rCcbBoBSpUA5LRxpfDejJDAaP1PRxxbWAraVP',
    },
  },
} as const;
