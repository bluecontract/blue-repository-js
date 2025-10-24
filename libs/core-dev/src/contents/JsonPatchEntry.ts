export const jsonPatchEntry = {
  description:
    'Represents a single operation in a Json Patch, defining a specific change to be applied to a JSON document.',
  name: 'Json Patch Entry',
  op: {
    description: 'The operation to be performed on the target JSON document.',
    type: {
      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
    },
  },
  path: {
    description:
      'A JSON Pointer string indicating the location in the document where the operation should be applied. Must start with a forward slash (/).',
    type: {
      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
    },
  },
  val: {
    description: 'The value to be used in the operation',
  },
} as const;
