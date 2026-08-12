export const PaymentMandateSpendAuthorizationResponded: Record<
  string,
  unknown
> = {
  authorizationId: {
    description:
      'Correlation key copied from Payment Mandate Spend Authorization Requested.',
    type: {
      blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
    },
  },
  description:
    'Decision from Payment Mandate for a spend authorization request.',
  name: 'Payment Mandate Spend Authorization Responded',
  reason: {
    description: 'Optional rejection reason.',
    type: {
      blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
    },
  },
  remainingAmountMinor: {
    description:
      'Optional remaining mandate capacity in minor currency units after decision.',
    type: {
      blueId: 'E2LM6qgzWG9ttagq2xTmiZkgYEAgkYedFCmU9v7NnVEq',
    },
  },
  respondedAt: {
    description: 'Timestamp when the decision was emitted.',
    type: {
      blueId: '47EN5A1B1ZXXdXMEoURVJquMSjdDuKFNDjMrkvVxoVJk',
    },
  },
  status: {
    description: 'Decision status ("approved" | "rejected").',
    type: {
      blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
    },
  },
  type: {
    blueId: '283zu1pu97gXBs4mquE3MSjwRYTzZSXZhnRSemCH8mZr',
  },
};
