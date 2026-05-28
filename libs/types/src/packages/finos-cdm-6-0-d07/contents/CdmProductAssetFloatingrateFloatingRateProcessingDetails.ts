export const CdmProductAssetFloatingrateFloatingRateProcessingDetails = {
  description:
    'Type for reporting the details of the rate treatment.  This could potentially be replaced by the existing FloatingRateDefinition type , but this is slightly more detailed.\n',
  name: 'cdm/product/asset/floatingrate/FloatingRateProcessingDetails',
  processedRate: {
    description: 'The value of the rate after processing.',
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
  processingParameters: {
    type: {
      blueId: '8qzg72AeYj2iiu6z9Le3h4TKysg4qnoMf4fda8wiSkPn',
    },
  },
  rawRate: {
    description:
      'The raw or untreated rate, prior to any of the rate treatments.',
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
  spreadExclusiveRate: {
    description:
      'The value of the processed rate without the spread applied, for subsequent compounding, etc.',
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
