export const CardTransactionReport: Record<string, unknown> = {
  amountMinor: {
    description: 'Purchase amount in minor currency units.',
    type: {
      blueId: 'E2LM6qgzWG9ttagq2xTmiZkgYEAgkYedFCmU9v7NnVEq',
    },
  },
  cardTransactionDetails: {
    type: {
      blueId: 'DVykYmmbhDsjsNQCjETGqumKJW5doNkkk6K6R4xeFWTV',
    },
  },
  currency: {
    description: 'ISO 4217 currency code.',
    type: {
      blueId: 'rdiMJ9tNu3geCKLDwXxCCjVQzKvCyaFXHiZTFAkRsCJ',
    },
  },
  description:
    'Bank reports a posted card transaction into the requesting contract timeline.',
  merchantId: {
    description: 'External merchant identifier for the purchase.',
    type: {
      blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
    },
  },
  name: 'Card Transaction Report',
  occurredAt: {
    description: 'Timestamp when the transaction occurred.',
    type: {
      blueId: '47EN5A1B1ZXXdXMEoURVJquMSjdDuKFNDjMrkvVxoVJk',
    },
  },
  status: {
    description:
      'Transaction status ("authorized" | "partially captured" | "captured").',
    type: {
      blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
    },
  },
  transactionId: {
    description: 'Unique transaction identifier used for idempotency.',
    type: {
      blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
    },
  },
  type: {
    blueId: 'ENRQ621TbJpLg2cGyYkgTmPRLGKZkPqCzkBgm4yEXKF5',
  },
};
