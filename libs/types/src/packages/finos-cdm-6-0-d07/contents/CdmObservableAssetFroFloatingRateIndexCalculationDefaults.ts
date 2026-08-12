export const CdmObservableAssetFroFloatingRateIndexCalculationDefaults: Record<
  string,
  unknown
> = {
  category: {
    description: 'The ISDA FRO category (e.g. screen rate or calculated rate).',
    type: {
      blueId: '4zB6e1AuSAmpxEYJVBg43uYddvMaX9bdWPpZJ5R2dR5b',
    },
  },
  description:
    'This holds the rate calculation defaults applicable for a floating rate index.',
  indexStyle: {
    description: 'The ISDA FRO style (e.g. term rate, swap rate, etc).',
    type: {
      blueId: 'EHeB5nPPmZvVyFWfk53aC5LX5MjkebqhRqVH3VABHGcV',
    },
  },
  method: {
    description: 'The ISDA FRO calculation method (e.g. OIS Compounding).',
    type: {
      blueId: '993FmQYp1qquePHed4gzqEGk6TiscurtZ7ryZqKvXoov',
    },
  },
  name: 'cdm/observable/asset/fro/FloatingRateIndexCalculationDefaults',
};
