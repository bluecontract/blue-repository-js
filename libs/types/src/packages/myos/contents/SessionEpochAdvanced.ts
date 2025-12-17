export const SessionEpochAdvanced = {
  description: 'Snapshot captured from a target session epoch emission.',
  document: {
    description: 'Document state after the emission.',
  },
  epoch: {
    description: 'Epoch number.',
    type: {
      blueId: '5WNMiV9Knz63B4dVY5JtMyh3FB4FSGqv7ceScvuapdE1',
    },
  },
  name: 'Session Epoch Advanced',
  sessionId: {
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
  type: {
    blueId: '5Wz4G9qcnBJnntYRkz4dgLK5bSuoMpYJZj4j5M59z4we',
  },
} as const;
