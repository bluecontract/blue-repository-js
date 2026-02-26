export const PaymentMandateSpendSettlementResponded = {
  amountCaptured: {
    description:
      'Current mandate amountCaptured after applying (or rejecting) settlement.',
    type: {
      blueId: '5WNMiV9Knz63B4dVY5JtMyh3FB4FSGqv7ceScvuapdE1',
    },
  },
  amountReserved: {
    description:
      'Current mandate amountReserved after applying (or rejecting) settlement.',
    type: {
      blueId: '5WNMiV9Knz63B4dVY5JtMyh3FB4FSGqv7ceScvuapdE1',
    },
  },
  chargeAttemptId: {
    description: 'Correlation key copied from Payment Mandate Spend Settled.',
    type: {
      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
    },
  },
  description:
    'Validation result emitted by Payment Mandate after processing a settlement update.',
  name: 'Payment Mandate Spend Settlement Responded',
  reason: {
    description: 'Optional rejection or informational reason.',
    type: {
      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
    },
  },
  respondedAt: {
    description: 'Timestamp when mandate emitted settlement processing result.',
    type: {
      blueId: 'GQaGqFxHDz64L1c9QkCbz52ths6bMVtpHnw4QDngzQYs',
    },
  },
  status: {
    description: 'Settlement processing status ("accepted" | "rejected").',
    type: {
      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
    },
  },
  type: {
    blueId: '36epvrpVHZLjapbeZsNodz2NDnm7XZeNZcnkWHgkP1pp',
  },
} as const;
