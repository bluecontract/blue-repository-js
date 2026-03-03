export const CustomerActionResponded = {
  description:
    'Bank response event that reports a user decision for a previously requested pending action.',
  input: {
    description:
      'User-provided decision payload. For mode=options this should be a selected option label. For mode=input this should match the requested input schema.',
  },
  mode: {
    description: 'Pending action mode. Supported values: options | input.',
    type: {
      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
    },
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
