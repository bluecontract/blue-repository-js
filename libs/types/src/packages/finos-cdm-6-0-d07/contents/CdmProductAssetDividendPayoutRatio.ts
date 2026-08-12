export const CdmProductAssetDividendPayoutRatio: Record<string, unknown> = {
  basketConstituent: {
    description:
      'In the case of a basket underlier, specifies to which component of the basket this particular set of dividend payout ratios correspond.\n',
    type: {
      blueId: '9TCszX7p3useiqzNm9UPp1AMdorfkHLknXYXqEVsE2N8',
    },
  },
  cashRatio: {
    description:
      'Specifies the cash actual dividend payout ratio associated with the equity underlier. A ratio of 90% should be expressed at 0.90.\n',
    type: {
      blueId: '9eWaHYz2vKrFofdHTHAizNNu8xP6QE3WQ5y7DGrGZvyJ',
    },
  },
  description:
    'A class describing the dividend payout ratio associated with an equity underlier. In certain cases the actual ratio is not known on trade inception, and only general conditions are then specified.\n',
  name: 'cdm/product/asset/DividendPayoutRatio',
  nonCashRatio: {
    description:
      'Specifies the non cash actual dividend payout ratio associated with the equity underlier. A ratio of 90% should be expressed at 0.90.\n',
    type: {
      blueId: '9eWaHYz2vKrFofdHTHAizNNu8xP6QE3WQ5y7DGrGZvyJ',
    },
  },
  totalRatio: {
    description:
      'Specifies the total actual dividend payout ratio associated with the equity underlier. A ratio of 90% should be expressed at 0.90.\n',
    schema: {
      required: true,
    },
    type: {
      blueId: '9eWaHYz2vKrFofdHTHAizNNu8xP6QE3WQ5y7DGrGZvyJ',
    },
  },
};
