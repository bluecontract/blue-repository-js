export const CdmObservableAssetCalculatedrateObservationShiftCalculation: Record<
  string,
  unknown
> = {
  additionalBusinessDays: {
    description: 'Any additional business days that be applicable.',
    type: {
      blueId: 'H53mV1d8rMzhefLZH8WzGchozyQA28cbwNpBHGmVA9ti',
    },
  },
  calculationBase: {
    description:
      'Whether the rate is calculated in advance, in arrears, or relative to a reset date.',
    type: {
      blueId: '2W3rHTz4L7GBmVkiESoY8puS9uU1rTGL2SfpTGJy2kse',
    },
  },
  description:
    'Parameters to describe the observation shift for a daily compounded or averaged floating rate. This type is used to represent modular computed rates in interestRatePayouts.\n',
  name: 'cdm/observable/asset/calculatedrate/ObservationShiftCalculation',
  offsetDays: {
    description: 'The number of days of observation shift.',
    type: {
      blueId: 'E2LM6qgzWG9ttagq2xTmiZkgYEAgkYedFCmU9v7NnVEq',
    },
  },
};
