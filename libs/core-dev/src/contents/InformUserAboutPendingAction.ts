export const informUserAboutPendingAction = {
  channel: {
    description:
      'The channel defined in the document from which a timeline entry is expected, and which will trigger the required operation.',
    type: {
      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
    },
  },
  description:
    'Notifies that a required action must be performed by running a specific operation defined in the document. Provides details and the expected request payload.',
  expectedRequest: {
    description:
      'The expected request payload or structure that should be provided to complete the required operation.',
  },
  message: {
    description:
      'A detailed message explaining what action is needed and any relevant context for the user.',
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
} as const;
