export const CdmObservableAssetValuationPostponement = {
  description:
    'Specifies how long to wait to get a quote from a settlement rate option upon a price source disruption.',
  maximumDaysOfPostponement: {
    description:
      'The maximum number of days to wait for a quote from the disrupted settlement rate option before proceeding to the next method.\n',
    schema: {
      required: {
        type: {
          blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
        },
        value: true,
      },
    },
    type: {
      blueId: '5WNMiV9Knz63B4dVY5JtMyh3FB4FSGqv7ceScvuapdE1',
    },
  },
  name: 'cdm/observable/asset/ValuationPostponement',
} as const;
