export const CdmObservableAssetFroFloatingRateIndexCalculationDefaults: Record<
  string,
  unknown
> = {
  category: {
    description: 'The ISDA FRO category (e.g. screen rate or calculated rate).',
    type: {
      blueId: 'uyCbFUtyiur98B8jKgwwDdT7g5AQzSgfK77hjbHKgXm',
    },
  },
  description:
    'This holds the rate calculation defaults applicable for a floating rate index.',
  indexStyle: {
    description: 'The ISDA FRO style (e.g. term rate, swap rate, etc).',
    type: {
      blueId: '98SyBWL9ENVd5hF1HHdCKz8RG35SmSdrNx9Dh2tPj9AK',
    },
  },
  method: {
    description: 'The ISDA FRO calculation method (e.g. OIS Compounding).',
    type: {
      blueId: 'Ef7JSbybnYTf6DGe3sD3EoBBngjeauFZcUey5CPfgotg',
    },
  },
  name: 'cdm/observable/asset/fro/FloatingRateIndexCalculationDefaults',
};
