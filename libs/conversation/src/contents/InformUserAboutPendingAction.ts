export const informUserAboutPendingAction = {
  channel: {
    description:
      'Contracts-map key of the channel in this scope expected to receive the follow-up that triggers the required operation.\n',
    type: {
      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
    },
  },
  description:
    'Conversation event notifying that a required user action must be performed by running a specific operation defined in the document. Provides the operation name, user-facing text, the channel to watch, and the expected request shape.\n',
  expectedRequest: {
    description:
      'The expected request payload structure for the operation’s request.',
  },
  message: {
    description:
      'Human-readable explanation of what is needed and relevant context.',
    type: {
      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
    },
  },
  name: 'Inform User About Pending Action',
  operation: {
    description:
      'The name of the operation defined in the document that the user is required to run to fulfill the pending action.',
    type: {
      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
    },
  },
  title: {
    description:
      'A short, user-facing title describing the required action (e.g., "Payment Setup Required", "Agreement Required").',
    type: {
      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
    },
  },
  type: {
    blueId: '5Wz4G9qcnBJnntYRkz4dgLK5bSuoMpYJZj4j5M59z4we',
  },
} as const;
