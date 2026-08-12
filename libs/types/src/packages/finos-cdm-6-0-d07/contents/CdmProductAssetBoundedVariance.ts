export const CdmProductAssetBoundedVariance: Record<string, unknown> = {
  daysInRangeAdjustment: {
    description:
      'The contract specifies whether the notional should be scaled by the Number of Days in Range divided by the Expected N. The number of Days in Ranges refers to the number of returns that contribute to the realized volatility.\n',
    schema: {
      required: true,
    },
    type: {
      blueId: 'AwvXD961fmnmqcSQhjMA7r15HpVh39cefb6ZTyUz2Fm2',
    },
  },
  lowerBarrier: {
    description:
      'All observations below this price level will be excluded from the variance calculation.',
    type: {
      blueId: '9eWaHYz2vKrFofdHTHAizNNu8xP6QE3WQ5y7DGrGZvyJ',
    },
  },
  name: 'cdm/product/asset/BoundedVariance',
  realisedVarianceMethod: {
    description:
      'The contract specifies which price must satisfy the boundary condition.',
    schema: {
      required: true,
    },
    type: {
      blueId: '8WUdqYEhbVAAmUh8SvvCpySEJZcWCkdb5xN8ZGfavwQW',
    },
  },
  upperBarrier: {
    description:
      'All observations above this price level will be excluded from the variance calculation.',
    type: {
      blueId: '9eWaHYz2vKrFofdHTHAizNNu8xP6QE3WQ5y7DGrGZvyJ',
    },
  },
};
