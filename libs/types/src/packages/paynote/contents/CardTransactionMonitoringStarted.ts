export const CardTransactionMonitoringStarted = {
  description: 'Confirmation that card transaction monitoring has started.',
  name: 'Card Transaction Monitoring Started',
  startedAt: {
    description:
      'Timestamp (microseconds since epoch) when monitoring started.',
    type: {
      blueId: '5WNMiV9Knz63B4dVY5JtMyh3FB4FSGqv7ceScvuapdE1',
    },
  },
  targetMerchantId: {
    description: 'External merchant identifier being monitored.',
    type: {
      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
    },
  },
  type: {
    blueId: '36epvrpVHZLjapbeZsNodz2NDnm7XZeNZcnkWHgkP1pp',
  },
} as const;
