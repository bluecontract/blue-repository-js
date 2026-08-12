export const CdmProductAssetFloatingrateFloatingRateProcessingDetails: Record<
  string,
  unknown
> = {
  description:
    'Type for reporting the details of the rate treatment.  This could potentially be replaced by the existing FloatingRateDefinition type , but this is slightly more detailed.\n',
  name: 'cdm/product/asset/floatingrate/FloatingRateProcessingDetails',
  processedRate: {
    description: 'The value of the rate after processing.',
    schema: {
      required: true,
    },
    type: {
      blueId: '9eWaHYz2vKrFofdHTHAizNNu8xP6QE3WQ5y7DGrGZvyJ',
    },
  },
  processingParameters: {
    type: {
      blueId: 'PFuvPDjyVXw6NBBWr4bCzfHdZAhzniSg3LE8zBNGqLW',
    },
  },
  rawRate: {
    description:
      'The raw or untreated rate, prior to any of the rate treatments.',
    schema: {
      required: true,
    },
    type: {
      blueId: '9eWaHYz2vKrFofdHTHAizNNu8xP6QE3WQ5y7DGrGZvyJ',
    },
  },
  spreadExclusiveRate: {
    description:
      'The value of the processed rate without the spread applied, for subsequent compounding, etc.',
    schema: {
      required: true,
    },
    type: {
      blueId: '9eWaHYz2vKrFofdHTHAizNNu8xP6QE3WQ5y7DGrGZvyJ',
    },
  },
};
