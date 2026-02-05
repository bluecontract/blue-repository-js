export const TransactionStatus = {
  authorizedAmountMinor: {
    type: {
      blueId: '5WNMiV9Knz63B4dVY5JtMyh3FB4FSGqv7ceScvuapdE1',
    },
  },
  capturedAmountMinor: {
    type: {
      blueId: '5WNMiV9Knz63B4dVY5JtMyh3FB4FSGqv7ceScvuapdE1',
    },
  },
  currency: {
    type: {
      blueId: 'CBnZ7aaNetj9KEqXpUWj5jvjKbmviLivP98T2EiyxiYc',
    },
  },
  description: 'Status snapshot of the referenced card transaction.',
  name: 'Transaction Status',
  status: {
    description: 'authorized | captured | partiallyCaptured',
    type: {
      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
    },
  },
} as const;
