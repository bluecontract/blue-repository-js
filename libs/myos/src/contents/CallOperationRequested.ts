export const callOperationRequested = {
  description:
    'Document asks MyOS Admin to invoke an operation on a target session.',
  name: 'Call Operation Requested',
  onBehalfOf: {
    description: 'Channel whose binding provides the requester account.',
    type: {
      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
    },
  },
  operation: {
    description: 'Operation name to invoke.',
    type: {
      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
    },
  },
  request: {
    description: 'Payload forwarded to the target operation.',
  },
  targetSessionId: {
    description: 'Target document session to invoke.',
    type: {
      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
    },
  },
  type: {
    blueId: '5Wz4G9qcnBJnntYRkz4dgLK5bSuoMpYJZj4j5M59z4we',
  },
} as const;
