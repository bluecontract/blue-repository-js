export const CdmProductAssetBoundedVariance = {
  daysInRangeAdjustment: {
    description:
      'The contract specifies whether the notional should be scaled by the Number of Days in Range divided by the Expected N. The number of Days in Ranges refers to the number of returns that contribute to the realized volatility.\n',
    schema: {
      required: {
        type: {
          blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
        },
        value: true,
      },
    },
    type: {
      blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
    },
  },
  lowerBarrier: {
    description:
      'All observations below this price level will be excluded from the variance calculation.',
    type: {
      blueId: '7pwXmXYCJtWnd348c2JQGBkm9C4renmZRwxbfaypsx5y',
    },
  },
  name: 'cdm/product/asset/BoundedVariance',
  realisedVarianceMethod: {
    description:
      'The contract specifies which price must satisfy the boundary condition.',
    schema: {
      required: {
        type: {
          blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
        },
        value: true,
      },
    },
    type: {
      blueId: 'E6NzqHc6ART6mrFaiHBHZQdpeKND6nhvC8RWNuBEmiqc',
    },
  },
  upperBarrier: {
    description:
      'All observations above this price level will be excluded from the variance calculation.',
    type: {
      blueId: '7pwXmXYCJtWnd348c2JQGBkm9C4renmZRwxbfaypsx5y',
    },
  },
} as const;
