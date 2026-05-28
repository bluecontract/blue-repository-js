export const CdmObservableEventObservation = {
  description:
    "Defines a single, numerical value that was observed in the marketplace. Observations of market data are made independently to business events or trade life-cycle events, so data instances of Observation can be created independently of any other model type, hence it is annotated as a root type. Observations will be broadly reused in many situations, so references to Observation are supported via the 'key' annotation.\n",
  name: 'cdm/observable/event/Observation',
  observationIdentifier: {
    description:
      'Represents the observation was made i.e. how to uniquely identify the observed value among the population of all available market data.\n',
    schema: {
      required: {
        type: {
          blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
        },
        value: true,
      },
    },
    type: {
      blueId: '9KXvG7maDiQ34ZWLG3PFbh8mX8zubdxajYg63XxeMUHa',
    },
  },
  observedValue: {
    description: 'Specifies the observed value as a number.',
    schema: {
      required: {
        type: {
          blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
        },
        value: true,
      },
    },
    type: {
      blueId: 'wuC3RHpv6ahucWwxTgdeQyeUP8ecWQQqgMvSpx3Z543',
    },
  },
} as const;
