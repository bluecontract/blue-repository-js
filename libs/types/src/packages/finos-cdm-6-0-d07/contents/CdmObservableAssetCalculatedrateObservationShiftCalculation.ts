export const CdmObservableAssetCalculatedrateObservationShiftCalculation: Record<
  string,
  unknown
> = {
  additionalBusinessDays: {
    description: 'Any additional business days that be applicable.',
    type: {
      blueId: 'Ds5a9bChKossVgHEM7Z2TQTCxDXdB2SZhtM9v9Y3mYmM',
    },
  },
  calculationBase: {
    description:
      'Whether the rate is calculated in advance, in arrears, or relative to a reset date.',
    type: {
      blueId: '3A76x7tYhpq8Af8NL5GDk9T6MBnu3QovLsjcNFgnYpMb',
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
