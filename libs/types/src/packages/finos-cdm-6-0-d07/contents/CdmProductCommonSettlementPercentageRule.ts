export const CdmProductCommonSettlementPercentageRule = {
  description:
    'A class defining a content model for a calculation rule defined as percentage of the notional amount.',
  name: 'cdm/product/common/settlement/PercentageRule',
  notionalAmountReference: {
    description: 'A reference to the notional amount.',
    schema: {
      required: {
        type: {
          blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
        },
        value: true,
      },
    },
    type: {
      blueId: 'B6z4sPE6mbrDKZ212dEzdy8bC6F5DNgR8Eh4KK623JA',
    },
  },
  paymentPercent: {
    description: 'A percentage of the notional amount.',
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
