export const CardTransactionMonitoringRequestRejected = {
  description: 'Notification that card transaction monitoring was rejected.',
  name: 'Card Transaction Monitoring Request Rejected',
  reason: {
    description: 'Reason monitoring was rejected.',
    type: {
      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
    },
  },
  rejectedAt: {
    description:
      'Timestamp (microseconds since epoch) when monitoring was rejected.',
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
