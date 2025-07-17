export const documentUpdate = {
  name: 'Document Update',
  description: 'Describes a single operation that was applied to a document.',
  type: {
    blueId: '3gtD3i9bgfhDat3VB53vrQpchWFn1McYe2ngSc3YLjar',
  },
  val: {
    description:
      'The value to be added or used as a replacement. Required for "add" and "replace" ops.',
  },
  op: {
    description:
      'The operation to perform. One of: "add", "remove", "replace", "move", "copy".',
    type: {
      blueId: 'F92yo19rCcbBoBSpUA5LRxpfDejJDAaP1PRxxbWAraVP',
    },
  },
  path: {
    description:
      'A JSON Pointer string that references a location within the target document.',
    type: {
      blueId: 'F92yo19rCcbBoBSpUA5LRxpfDejJDAaP1PRxxbWAraVP',
    },
  },
  from: {
    description:
      'A JSON Pointer string referencing the location in the source document to move or copy from. Required for "move" and "copy" ops.',
    type: {
      blueId: 'F92yo19rCcbBoBSpUA5LRxpfDejJDAaP1PRxxbWAraVP',
    },
  },
} as const;
