export const sessionEpochAdvanced = {
  description:
    'Snapshot and correlated events captured from a target session emission.',
  name: 'Session Epoch Advanced',
  type: {
    blueId: '3gtD3i9bgfhDat3VB53vrQpchWFn1McYe2ngSc3YLjar',
  },
  update: {
    description: 'Latest state snapshot packaged with the emission batch.',
    document: {
      description: 'Document state after the emission.',
    },
    targetSessionId: {
      description: 'Session whose state advanced.',
      type: {
        blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
      },
    },
    timestamp: {
      description: 'ISO 8601 timestamp for the emission.',
      type: {
        blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
      },
    },
  },
} as const;
