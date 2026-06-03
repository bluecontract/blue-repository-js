export const CdmObservableAssetValuationPostponement: Record<string, unknown> =
  {
    description:
      'Specifies how long to wait to get a quote from a settlement rate option upon a price source disruption.',
    maximumDaysOfPostponement: {
      description:
        'The maximum number of days to wait for a quote from the disrupted settlement rate option before proceeding to the next method.\n',
      schema: {
        required: true,
      },
      type: {
        blueId: 'E2LM6qgzWG9ttagq2xTmiZkgYEAgkYedFCmU9v7NnVEq',
      },
    },
    name: 'cdm/observable/asset/ValuationPostponement',
  };
