export const PaymentMandateSpendAuthorizationResponded = {
  chargeAttemptId: {
    description:
      'Correlation key copied from Payment Mandate Spend Authorization Requested.',
    type: {
      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
    },
  },
  description:
    'Decision from Payment Mandate for a spend authorization request.',
  name: 'Payment Mandate Spend Authorization Responded',
  reason: {
    description: 'Optional rejection reason.',
    type: {
      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
    },
  },
  remainingAmountMinor: {
    description:
      'Optional remaining mandate capacity in minor currency units after decision.',
    type: {
      blueId: '5WNMiV9Knz63B4dVY5JtMyh3FB4FSGqv7ceScvuapdE1',
    },
  },
  respondedAt: {
    description: 'Timestamp when the decision was emitted.',
    type: {
      blueId: 'GQaGqFxHDz64L1c9QkCbz52ths6bMVtpHnw4QDngzQYs',
    },
  },
  status: {
    description: 'Decision status ("approved" | "rejected").',
    type: {
      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
    },
  },
  type: {
    blueId: '36epvrpVHZLjapbeZsNodz2NDnm7XZeNZcnkWHgkP1pp',
  },
} as const;
