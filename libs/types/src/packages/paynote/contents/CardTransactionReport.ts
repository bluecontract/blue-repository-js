export const CardTransactionReport = {
  amountMinor: {
    description: 'Purchase amount in minor currency units.',
    type: {
      blueId: '5WNMiV9Knz63B4dVY5JtMyh3FB4FSGqv7ceScvuapdE1',
    },
  },
  cardTransactionDetails: {
    type: {
      blueId: 'GZLRe2fEsvs1v7dVcg9kEnCrWEdM3cUZYhFH4XqN5jQT',
    },
  },
  currency: {
    description: 'ISO 4217 currency code.',
    type: {
      blueId: 'CBnZ7aaNetj9KEqXpUWj5jvjKbmviLivP98T2EiyxiYc',
    },
  },
  description:
    'Bank reports a posted card transaction into the requesting contract timeline.',
  merchantId: {
    description: 'External merchant identifier for the purchase.',
    type: {
      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
    },
  },
  name: 'Card Transaction Report',
  occurredAt: {
    description: 'Timestamp when the transaction occurred.',
    type: {
      blueId: 'GQaGqFxHDz64L1c9QkCbz52ths6bMVtpHnw4QDngzQYs',
    },
  },
  transactionId: {
    description: 'Unique transaction identifier used for idempotency.',
    type: {
      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
    },
  },
  type: {
    blueId: '5Wz4G9qcnBJnntYRkz4dgLK5bSuoMpYJZj4j5M59z4we',
  },
} as const;
