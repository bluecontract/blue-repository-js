export const callOperationRequested = {
  name: 'Call Operation Requested',
  description:
    'Document asks MyOS Admin to invoke an operation on a target session.',
  type: {
    blueId: '3gtD3i9bgfhDat3VB53vrQpchWFn1McYe2ngSc3YLjar',
  },
  onBehalfOf: {
    description: 'Channel whose binding provides the requester account.',
    type: {
      blueId: 'F92yo19rCcbBoBSpUA5LRxpfDejJDAaP1PRxxbWAraVP',
    },
  },
  request: {
    description: 'Payload forwarded to the target operation.',
  },
  operation: {
    description: 'Operation name to invoke.',
    type: {
      blueId: 'F92yo19rCcbBoBSpUA5LRxpfDejJDAaP1PRxxbWAraVP',
    },
  },
  targetSessionId: {
    description: 'Target document session to invoke.',
    type: {
      blueId: 'F92yo19rCcbBoBSpUA5LRxpfDejJDAaP1PRxxbWAraVP',
    },
  },
} as const;
