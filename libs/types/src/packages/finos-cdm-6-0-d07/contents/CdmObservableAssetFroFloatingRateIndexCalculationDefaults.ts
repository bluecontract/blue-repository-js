export const CdmObservableAssetFroFloatingRateIndexCalculationDefaults = {
  category: {
    description: 'The ISDA FRO category (e.g. screen rate or calculated rate).',
    type: {
      blueId: 'G9npdgFMDFvJBGT5mnkkLXcQPMFyryX9eZkBmAupDwzK',
    },
  },
  description:
    'This holds the rate calculation defaults applicable for a floating rate index.',
  indexStyle: {
    description: 'The ISDA FRO style (e.g. term rate, swap rate, etc).',
    type: {
      blueId: '9oK7sdYVedByaGENq67wFqNA3Nqzunehwby4acgNNce6',
    },
  },
  method: {
    description: 'The ISDA FRO calculation method (e.g. OIS Compounding).',
    type: {
      blueId: '4mpErrGaQgDKSpphXbwY9BbsiJ1pApWHTA8KfMbzQbbJ',
    },
  },
  name: 'cdm/observable/asset/fro/FloatingRateIndexCalculationDefaults',
} as const;
