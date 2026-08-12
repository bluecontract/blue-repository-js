export const CdmEventCommonExecutionDetails: Record<string, unknown> = {
  description: 'Defines specific attributes that relate to trade executions.',
  executionType: {
    description:
      'Identifies the type of execution, e.g. via voice, electronically...',
    schema: {
      required: true,
    },
    type: {
      blueId: '4mQsL7gRkfuFjMThjus8p2hZu4HkKCynkES1Y63Ykmib',
    },
  },
  executionVenue: {
    description: 'Represents the venue on which a trade was executed.',
    type: {
      blueId: 'J5hsqA8x6vAprJRs7gFhvm5bsp5TZNBgEdhytAapat8y',
    },
  },
  name: 'cdm/event/common/ExecutionDetails',
  packageReference: {
    description:
      'A reference to the package linking the trade with other trades, in case the trade was executed as part of a package (hence this attribute is optional).\n',
    type: {
      blueId: '9KV48b6Fb2r3WJ1DyeqrYTjD1WUuExEj2cDwLdCGQHmu',
    },
  },
};
