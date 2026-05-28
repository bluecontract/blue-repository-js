export const CdmProductAssetDividendPayoutRatio = {
  basketConstituent: {
    description:
      'In the case of a basket underlier, specifies to which component of the basket this particular set of dividend payout ratios correspond.\n',
    type: {
      blueId: '6tLPRxaKr8kikEkfnoFn5a6CqY61ckSNTb2NLzfWwRb7',
    },
  },
  cashRatio: {
    description:
      'Specifies the cash actual dividend payout ratio associated with the equity underlier. A ratio of 90% should be expressed at 0.90.\n',
    type: {
      blueId: '7pwXmXYCJtWnd348c2JQGBkm9C4renmZRwxbfaypsx5y',
    },
  },
  description:
    'A class describing the dividend payout ratio associated with an equity underlier. In certain cases the actual ratio is not known on trade inception, and only general conditions are then specified.\n',
  name: 'cdm/product/asset/DividendPayoutRatio',
  nonCashRatio: {
    description:
      'Specifies the non cash actual dividend payout ratio associated with the equity underlier. A ratio of 90% should be expressed at 0.90.\n',
    type: {
      blueId: '7pwXmXYCJtWnd348c2JQGBkm9C4renmZRwxbfaypsx5y',
    },
  },
  totalRatio: {
    description:
      'Specifies the total actual dividend payout ratio associated with the equity underlier. A ratio of 90% should be expressed at 0.90.\n',
    schema: {
      required: {
        type: {
          blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
        },
        value: true,
      },
    },
    type: {
      blueId: '7pwXmXYCJtWnd348c2JQGBkm9C4renmZRwxbfaypsx5y',
    },
  },
} as const;
