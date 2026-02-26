export const PaymentMandateSpendSettled = {
  capturedDeltaMinor: {
    description:
      'Net change to amountCaptured in minor units. Positive for successful capture.\n',
    type: {
      blueId: '5WNMiV9Knz63B4dVY5JtMyh3FB4FSGqv7ceScvuapdE1',
    },
  },
  chargeAttemptId: {
    description:
      'Correlation key copied from Payment Mandate Spend Authorization Requested.',
    type: {
      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
    },
  },
  description:
    'Settlement update sent by bank to Payment Mandate after charge execution, used to apply deterministic reserved/captured deltas in mandate state. For approved authorizations, mandate may already reserve capacity at authorize step. Deltas should express net post-execution adjustment from current mandate state.\n',
  holdId: {
    description: 'Optional hold id produced by banking execution.',
    type: {
      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
    },
  },
  name: 'Payment Mandate Spend Settled',
  reason: {
    description: 'Optional failure reason.',
    type: {
      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
    },
  },
  reservedDeltaMinor: {
    description:
      'Net change to amountReserved in minor units. Positive for new reserve, negative for release/capture settlement. For authorize-only success this is typically 0 when authorization already reserved capacity.\n',
    type: {
      blueId: '5WNMiV9Knz63B4dVY5JtMyh3FB4FSGqv7ceScvuapdE1',
    },
  },
  settledAt: {
    description: 'Timestamp when settlement result was emitted.',
    type: {
      blueId: 'GQaGqFxHDz64L1c9QkCbz52ths6bMVtpHnw4QDngzQYs',
    },
  },
  status: {
    description: 'Settlement status ("succeeded" | "failed").',
    type: {
      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
    },
  },
  transactionId: {
    description: 'Optional transaction id produced by banking execution.',
    type: {
      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
    },
  },
  type: {
    blueId: '36epvrpVHZLjapbeZsNodz2NDnm7XZeNZcnkWHgkP1pp',
  },
} as const;
