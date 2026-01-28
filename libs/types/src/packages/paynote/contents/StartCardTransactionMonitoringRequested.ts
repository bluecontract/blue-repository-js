export const StartCardTransactionMonitoringRequested = {
  description:
    'Request to start monitoring card transactions for a target merchant and report them into a document.',
  name: 'Start Card Transaction Monitoring Requested',
  reportOperationName: {
    description:
      'Operation name to call with PayNote/Card Transaction Report payloads.',
    type: {
      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
    },
  },
  requestedAt: {
    description:
      'Timestamp (microseconds since epoch) when monitoring was requested.',
    type: {
      blueId: '5WNMiV9Knz63B4dVY5JtMyh3FB4FSGqv7ceScvuapdE1',
    },
  },
  targetMerchantId: {
    description:
      'External merchant identifier to monitor for card transactions.',
    type: {
      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
    },
  },
  type: {
    blueId: '8f9UhHMbRe62sFgzQVheToaJPYi7t7HPNVvpQTbqfL5n',
  },
} as const;
