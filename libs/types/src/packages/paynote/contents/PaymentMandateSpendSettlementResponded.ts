export const PaymentMandateSpendSettlementResponded: Record<string, unknown> = {
  amountCaptured: {
    description:
      'Current mandate amountCaptured after applying (or rejecting) settlement.',
    type: {
      blueId: 'E2LM6qgzWG9ttagq2xTmiZkgYEAgkYedFCmU9v7NnVEq',
    },
  },
  amountReserved: {
    description:
      'Current mandate amountReserved after applying (or rejecting) settlement.',
    type: {
      blueId: 'E2LM6qgzWG9ttagq2xTmiZkgYEAgkYedFCmU9v7NnVEq',
    },
  },
  authorizationId: {
    description: 'Correlation key copied from Payment Mandate Spend Settled.',
    type: {
      blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
    },
  },
  description:
    'Validation result emitted by Payment Mandate after processing a settlement update.',
  name: 'Payment Mandate Spend Settlement Responded',
  reason: {
    description: 'Optional rejection or informational reason.',
    type: {
      blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
    },
  },
  respondedAt: {
    description: 'Timestamp when mandate emitted settlement processing result.',
    type: {
      blueId: '47EN5A1B1ZXXdXMEoURVJquMSjdDuKFNDjMrkvVxoVJk',
    },
  },
  settlementId: {
    description:
      'Optional settlement correlation id copied from settlement request.',
    type: {
      blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
    },
  },
  status: {
    description: 'Settlement processing status ("accepted" | "rejected").',
    type: {
      blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
    },
  },
  type: {
    blueId: 'AQqdPmtKmB5VNH4rEbeKcRxsVStTTbJhS4fVF8wiTZrk',
  },
};
