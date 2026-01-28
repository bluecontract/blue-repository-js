export const CardTransactionMonitoringConsentRequested = {
  description:
    'The document requests the client to grant consent for card transaction monitoring.',
  name: 'Card Transaction Monitoring Consent Requested',
  requestedAt: {
    description:
      'Timestamp (microseconds since epoch) when consent was requested.',
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
    blueId: '8f9UhHMbRe62sFgzQVheToaJPYi7t7HPNVvpQTbqfL5n',
  },
} as const;
