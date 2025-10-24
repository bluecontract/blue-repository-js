export const documentUpdate = {
  description: 'Describes a single operation that was applied to a document.',
  from: {
    description:
      'A JSON Pointer string referencing the location in the source document to move or copy from. Required for "move" and "copy" ops.',
    type: {
      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
    },
  },
  name: 'Document Update',
  op: {
    description:
      'The operation to perform. One of: "add", "remove", "replace", "move", "copy".',
    type: {
      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
    },
  },
  path: {
    description:
      'A JSON Pointer string that references a location within the target document.',
    type: {
      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
    },
  },
  type: {
    blueId: '3gtD3i9bgfhDat3VB53vrQpchWFn1McYe2ngSc3YLjar',
  },
  val: {
    description:
      'The value to be added or used as a replacement. Required for "add" and "replace" ops.',
  },
} as const;
