export const CustomerActionResponded = {
  actionLabel: {
    description: 'Label of the action selected by the user.',
    type: {
      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
    },
  },
  description:
    'Bank response event that reports a user decision for a previously requested pending action.',
  input: {
    description: 'Optional user-provided payload for the selected action.',
  },
  name: 'Customer Action Responded',
  respondedAt: {
    description: 'Timestamp when the user decision was recorded by the bank.',
    type: {
      blueId: 'GQaGqFxHDz64L1c9QkCbz52ths6bMVtpHnw4QDngzQYs',
    },
  },
  type: {
    blueId: '36epvrpVHZLjapbeZsNodz2NDnm7XZeNZcnkWHgkP1pp',
  },
} as const;
