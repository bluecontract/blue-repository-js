export const CardTransactionMonitoringConsentRejected = {
  description:
    'The client rejected consent for the bank to monitor card transactions at the target merchant.',
  name: 'Card Transaction Monitoring Consent Rejected',
  reason: {
    description: 'Optional reason the client rejected consent.',
    type: {
      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
    },
  },
  rejectedAt: {
    description:
      'Timestamp (microseconds since epoch) when consent was rejected.',
    type: {
      blueId: '5WNMiV9Knz63B4dVY5JtMyh3FB4FSGqv7ceScvuapdE1',
    },
  },
  targetMerchantId: {
    description: 'External merchant identifier requested for monitoring.',
    type: {
      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
    },
  },
  type: {
    blueId: '36epvrpVHZLjapbeZsNodz2NDnm7XZeNZcnkWHgkP1pp',
  },
} as const;
