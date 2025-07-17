export const jsonPatchEntry = {
  name: 'Json Patch Entry',
  description:
    'Represents a single operation in a Json Patch, defining a specific change to be applied to a JSON document.',
  val: {
    description: 'The value to be used in the operation.',
  },
  op: {
    description: 'The operation to be performed on the target JSON document.',
    type: {
      blueId: 'F92yo19rCcbBoBSpUA5LRxpfDejJDAaP1PRxxbWAraVP',
    },
    constraints: {
      options: [
        {
          type: {
            blueId: 'F92yo19rCcbBoBSpUA5LRxpfDejJDAaP1PRxxbWAraVP',
          },
          value: 'add',
        },
        {
          type: {
            blueId: 'F92yo19rCcbBoBSpUA5LRxpfDejJDAaP1PRxxbWAraVP',
          },
          value: 'remove',
        },
        {
          type: {
            blueId: 'F92yo19rCcbBoBSpUA5LRxpfDejJDAaP1PRxxbWAraVP',
          },
          value: 'replace',
        },
        {
          type: {
            blueId: 'F92yo19rCcbBoBSpUA5LRxpfDejJDAaP1PRxxbWAraVP',
          },
          value: 'move',
        },
        {
          type: {
            blueId: 'F92yo19rCcbBoBSpUA5LRxpfDejJDAaP1PRxxbWAraVP',
          },
          value: 'copy',
        },
        {
          type: {
            blueId: 'F92yo19rCcbBoBSpUA5LRxpfDejJDAaP1PRxxbWAraVP',
          },
          value: 'test',
        },
      ],
    },
  },
  path: {
    description:
      'A JSON Pointer string indicating the location in the document where the operation should be applied. Must start with a forward slash (/).',
    type: {
      blueId: 'F92yo19rCcbBoBSpUA5LRxpfDejJDAaP1PRxxbWAraVP',
    },
  },
} as const;
