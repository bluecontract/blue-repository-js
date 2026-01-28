export const CardTransactionMonitoringConsentGranted = {
  description:
    'The client granted consent for the bank to monitor card transactions at the target merchant and report them into this document.',
  grantedAt: {
    description:
      'Timestamp (microseconds since epoch) when consent was granted.',
    type: {
      blueId: '5WNMiV9Knz63B4dVY5JtMyh3FB4FSGqv7ceScvuapdE1',
    },
  },
  name: 'Card Transaction Monitoring Consent Granted',
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
