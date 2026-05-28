export const CdmObservableAssetCalculatedrateObservationShiftCalculation = {
  additionalBusinessDays: {
    description: 'Any additional business days that be applicable.',
    type: {
      blueId: 'AaeaS3nBkqHVJTRb23iTwYjbMyikRz6mRz7L5FdHczSH',
    },
  },
  calculationBase: {
    description:
      'Whether the rate is calculated in advance, in arrears, or relative to a reset date.',
    type: {
      blueId: 'BNn2MDf54qJ4KLiE7sTpeS2BokqPqPz5hsVNwwRVfrwF',
    },
  },
  description:
    'Parameters to describe the observation shift for a daily compounded or averaged floating rate. This type is used to represent modular computed rates in interestRatePayouts.\n',
  name: 'cdm/observable/asset/calculatedrate/ObservationShiftCalculation',
  offsetDays: {
    description: 'The number of days of observation shift.',
    type: {
      blueId: '5WNMiV9Knz63B4dVY5JtMyh3FB4FSGqv7ceScvuapdE1',
    },
  },
} as const;
