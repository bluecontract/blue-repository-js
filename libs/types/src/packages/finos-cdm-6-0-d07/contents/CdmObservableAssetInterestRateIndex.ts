export const CdmObservableAssetInterestRateIndex = {
  description:
    'An index based in interest rates or inflation rates in a certain market.',
  FloatingRateIndex: {
    description:
      'An interest rate index which can change over time, e.g. the SONIA (Sterling Overnight Index Average) in the UK.\n',
    type: {
      blueId: '5wT2z1zzPQuYcm3mfixA2omkencs18E7UbtVshA7VV91',
    },
  },
  InflationIndex: {
    description:
      'An index that measures inflation in a specific market, e.g. the US Consumer Price Index.',
    type: {
      blueId: '2K2y4HCSe3GYtg8okRPpYgcJdTtQXHQ25mihbE8Paa6u',
    },
  },
  name: 'cdm/observable/asset/InterestRateIndex',
} as const;
