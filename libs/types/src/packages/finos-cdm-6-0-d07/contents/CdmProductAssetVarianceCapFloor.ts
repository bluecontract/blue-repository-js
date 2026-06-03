export const CdmProductAssetVarianceCapFloor: Record<string, unknown> = {
  boundedVariance: {
    description:
      'Conditions which bound variance. The contract specifies one or more boundary levels. These levels are expressed as prices for confirmation purposes Underlyer price must be equal to or higher than Lower Barrier is known as Up Conditional Swap Underlyer price must be equal to or lower than Upper Barrier is known as Down Conditional Swap Underlyer price must be equal to or higher than Lower Barrier and must be equal to or lower than Upper Barrier is known as Barrier Conditional Swap.\n',
    type: {
      blueId: 'DCKZsuug7AQ1eNWGKNHVPELUTjey85wne3B6xqsewUYF',
    },
  },
  name: 'cdm/product/asset/VarianceCapFloor',
  unadjustedVarianceCap: {
    description:
      'For use when varianceCap is applicable. Contains the scaling factor of the Variance Cap that can differ on a trade-by-trade basis in the European market. For example, a Variance Cap of 2.5^2 x Variance Strike Price has an unadjustedVarianceCap of 2.5.\n',
    type: {
      blueId: '9eWaHYz2vKrFofdHTHAizNNu8xP6QE3WQ5y7DGrGZvyJ',
    },
  },
  varianceCap: {
    description: 'If present and true, then variance cap is applicable.',
    schema: {
      required: true,
    },
    type: {
      blueId: 'AwvXD961fmnmqcSQhjMA7r15HpVh39cefb6ZTyUz2Fm2',
    },
  },
};
