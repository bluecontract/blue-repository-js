export const sessionEpochAdvanced = {
  name: 'Session Epoch Advanced',
  description:
    'Snapshot and correlated events captured from a target session emission.',
  type: {
    blueId: '3gtD3i9bgfhDat3VB53vrQpchWFn1McYe2ngSc3YLjar',
  },
  update: {
    description: 'Latest state snapshot packaged with the emission batch.',
    targetSessionId: {
      description: 'Session whose state advanced.',
      type: {
        blueId: 'F92yo19rCcbBoBSpUA5LRxpfDejJDAaP1PRxxbWAraVP',
      },
    },
    document: {
      description: 'Document state after the emission.',
    },
    timestamp: {
      description: 'ISO 8601 timestamp for the emission.',
      type: {
        blueId: 'F92yo19rCcbBoBSpUA5LRxpfDejJDAaP1PRxxbWAraVP',
      },
    },
  },
} as const;
