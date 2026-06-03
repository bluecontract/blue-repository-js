export const CdmProductAssetBoundedCorrelation: Record<string, unknown> = {
  description:
    'Describes correlation bounds, which form a cap and a floor on the realized correlation.',
  maximumBoundaryPercent: {
    description: 'Maximum Boundary as a percentage of the Strike Price.',
    type: {
      blueId: '9eWaHYz2vKrFofdHTHAizNNu8xP6QE3WQ5y7DGrGZvyJ',
    },
  },
  minimumBoundaryPercent: {
    description: 'Minimum Boundary as a percentage of the Strike Price.',
    type: {
      blueId: '9eWaHYz2vKrFofdHTHAizNNu8xP6QE3WQ5y7DGrGZvyJ',
    },
  },
  name: 'cdm/product/asset/BoundedCorrelation',
};
