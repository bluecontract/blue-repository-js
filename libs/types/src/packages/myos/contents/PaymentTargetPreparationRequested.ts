export const PaymentTargetPreparationRequested = {
  allowedPayer: {
    description: 'Optional payer identity restriction.',
    type: {
      blueId: '6VqxRuWBPVJ8qTBPWxYKaSi5UB3zb8Y9vadtxbsL4vzJ',
    },
  },
  amount: {
    description: 'Optional expected payment amount in minor units.',
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
    description: 'Optional expected ISO 4217 currency code.',
    type: {
      blueId: 'CBnZ7aaNetj9KEqXpUWj5jvjKbmviLivP98T2EiyxiYc',
    },
  },
  description:
    'Request emitted from a MyOS Balance Account document when its owner asks MyOS Admin to prepare an opaque recipient payment target.',
  expectedPaynote: {
    description:
      'Optional matcher over the PayNote bootstrap input that will be accepted for this target.',
  },
  expiresAt: {
    description: 'Optional ISO-8601 expiry timestamp for the prepared target.',
    type: {
      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
    },
  },
  name: 'Payment Target Preparation Requested',
  type: {
    blueId: '8f9UhHMbRe62sFgzQVheToaJPYi7t7HPNVvpQTbqfL5n',
  },
} as const;
