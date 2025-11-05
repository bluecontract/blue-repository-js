export const sessionEpochAdvanced = {
  description:
    'Snapshot and correlated events captured from a target session emission.',
  name: 'Session Epoch Advanced',
  type: {
    blueId: '5Wz4G9qcnBJnntYRkz4dgLK5bSuoMpYJZj4j5M59z4we',
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
