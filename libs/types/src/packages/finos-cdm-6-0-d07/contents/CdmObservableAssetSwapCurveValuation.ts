export const CdmObservableAssetSwapCurveValuation = {
  description:
    'A class to specify a valuation swap curve, which is used as part of the strike construct for the bond and convertible bond options.\n',
  floatingRateIndex: {
    schema: {
      required: {
        type: {
          blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
        },
        value: true,
      },
    },
    type: {
      blueId: 'AygoLHtsrgUkWFxjVtQsDYzEn5EbXUEt8avHzLQsUUVZ',
    },
  },
  indexTenor: {
    description:
      'The ISDA Designated Maturity, i.e. the tenor of the floating rate.',
    type: {
      blueId: '5rdYwkwGdndCoYmQi9MNzw9SKQZsr68igDgyYFgvNzmh',
    },
  },
  name: 'cdm/observable/asset/SwapCurveValuation',
  side: {
    description: 'The side (bid/mid/ask) of the measure.',
    type: {
      blueId: '8rvM94HuSxVEjNh7NmWuk8pKTjeiV7uTrwNqUX9zsDaU',
    },
  },
  spread: {
    description: 'Spread in basis points over the floating rate index.',
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
