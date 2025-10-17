export const callOperationAccepted = {
  name: 'Call Operation Accepted',
  description:
    'MyOS Admin accepted the call and submitted the operation request.',
  type: {
    blueId: '3gtD3i9bgfhDat3VB53vrQpchWFn1McYe2ngSc3YLjar',
  },
  operation: {
    description: 'Operation name that was invoked.',
    type: {
      blueId: 'F92yo19rCcbBoBSpUA5LRxpfDejJDAaP1PRxxbWAraVP',
    },
  },
  targetSessionId: {
    description: 'Target document session that received the request.',
    type: {
      blueId: 'F92yo19rCcbBoBSpUA5LRxpfDejJDAaP1PRxxbWAraVP',
    },
  },
} as const;
