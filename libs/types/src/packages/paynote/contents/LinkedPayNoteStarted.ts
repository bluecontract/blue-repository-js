export const LinkedPayNoteStarted = {
  description:
    'Confirmation that linked PayNote startup was requested successfully.',
  name: 'Linked PayNote Started',
  payNoteDocumentId: {
    description:
      'Document id of the bootstrapped linked PayNote when available.',
    type: {
      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
    },
  },
  payNoteSessionId: {
    description: 'Session id of the bootstrapped linked PayNote document.',
    type: {
      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
    },
  },
  type: {
    blueId: '36epvrpVHZLjapbeZsNodz2NDnm7XZeNZcnkWHgkP1pp',
  },
} as const;
