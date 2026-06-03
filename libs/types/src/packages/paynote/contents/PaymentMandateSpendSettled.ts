export const PaymentMandateSpendSettled: Record<string, unknown> = {
  authorizationId: {
    description:
      'Correlation key copied from Payment Mandate Spend Authorization Requested.',
    type: {
      blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
    },
  },
  capturedDeltaMinor: {
    description:
      'Net change to amountCaptured in minor units. Positive for successful capture.\n',
    type: {
      blueId: 'E2LM6qgzWG9ttagq2xTmiZkgYEAgkYedFCmU9v7NnVEq',
    },
  },
  description:
    'Settlement update sent by bank to Payment Mandate after charge execution, used to apply deterministic reserved/captured deltas in mandate state. For approved authorizations, mandate may already reserve capacity at authorize step. Deltas should express net post-execution adjustment from current mandate state.\n',
  holdId: {
    description: 'Optional hold id produced by banking execution.',
    type: {
      blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
    },
  },
  name: 'Payment Mandate Spend Settled',
  reason: {
    description: 'Optional failure reason.',
    type: {
      blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
    },
  },
  reservedDeltaMinor: {
    description:
      'Net change to amountReserved in minor units. Positive for new reserve, negative for release/capture settlement. For authorize-only success this is typically 0 when authorization already reserved capacity.\n',
    type: {
      blueId: 'E2LM6qgzWG9ttagq2xTmiZkgYEAgkYedFCmU9v7NnVEq',
    },
  },
  settledAt: {
    description: 'Timestamp when settlement result was emitted.',
    type: {
      blueId: '47EN5A1B1ZXXdXMEoURVJquMSjdDuKFNDjMrkvVxoVJk',
    },
  },
  settlementId: {
    description:
      'Optional settlement correlation id for idempotent settlement updates.',
    type: {
      blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
    },
  },
  status: {
    description: 'Settlement status ("succeeded" | "failed").',
    type: {
      blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
    },
  },
  transactionId: {
    description: 'Optional transaction id produced by banking execution.',
    type: {
      blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
    },
  },
  type: {
    blueId: 'AQqdPmtKmB5VNH4rEbeKcRxsVStTTbJhS4fVF8wiTZrk',
  },
};
