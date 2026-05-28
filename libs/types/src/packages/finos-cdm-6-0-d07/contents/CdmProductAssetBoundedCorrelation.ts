export const CdmProductAssetBoundedCorrelation = {
  description:
    'Describes correlation bounds, which form a cap and a floor on the realized correlation.',
  maximumBoundaryPercent: {
    description: 'Maximum Boundary as a percentage of the Strike Price.',
    type: {
      blueId: '7pwXmXYCJtWnd348c2JQGBkm9C4renmZRwxbfaypsx5y',
    },
  },
  minimumBoundaryPercent: {
    description: 'Minimum Boundary as a percentage of the Strike Price.',
    type: {
      blueId: '7pwXmXYCJtWnd348c2JQGBkm9C4renmZRwxbfaypsx5y',
    },
  },
  name: 'cdm/product/asset/BoundedCorrelation',
} as const;
