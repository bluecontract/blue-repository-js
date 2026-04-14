export const PaymentTargetPrepared = {
  allowedPayer: {
    description:
      'Optional effective payer restriction echoed back to the caller.',
    type: {
      blueId: '6VqxRuWBPVJ8qTBPWxYKaSi5UB3zb8Y9vadtxbsL4vzJ',
    },
  },
  amount: {
    description:
      'Optional effective amount constraint echoed back to the caller.',
    type: {
      blueId: '5WNMiV9Knz63B4dVY5JtMyh3FB4FSGqv7ceScvuapdE1',
    },
  },
  context: {
    description: 'Optional business-context reference.',
    documentId: {
      description:
        'Blue document id identifying the business document this payment is for.',
      type: {
        blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
      },
    },
  },
  currency: {
    description:
      'Optional effective currency constraint echoed back to the caller.',
    type: {
      blueId: 'CBnZ7aaNetj9KEqXpUWj5jvjKbmviLivP98T2EiyxiYc',
    },
  },
  description:
    'Result emitted after MyOS Admin successfully prepares an opaque recipient payment target.',
  expectedPaynote: {
    description:
      'Optional effective PayNote matcher echoed back to the caller.',
  },
  expiresAt: {
    description: 'Optional expiry echoed back to the caller.',
    type: {
      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
    },
  },
  name: 'Payment Target Prepared',
  recipient: {
    description: 'Prepared recipient reference.',
    token: {
      description: 'Opaque prepared recipient token.',
      type: {
        blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
      },
    },
    type: {
      blueId: '3WA2ppJtUKib2upsEARBgCNJuHXSqHJjm38uLtZf6dNb',
    },
  },
  type: {
    blueId: '36epvrpVHZLjapbeZsNodz2NDnm7XZeNZcnkWHgkP1pp',
  },
} as const;
