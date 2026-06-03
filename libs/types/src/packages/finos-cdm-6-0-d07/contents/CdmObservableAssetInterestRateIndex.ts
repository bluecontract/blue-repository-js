export const CdmObservableAssetInterestRateIndex: Record<string, unknown> = {
  description:
    'An index based in interest rates or inflation rates in a certain market.',
  FloatingRateIndex: {
    description:
      'An interest rate index which can change over time, e.g. the SONIA (Sterling Overnight Index Average) in the UK.\n',
    type: {
      blueId: '5HGCdXL7A44CctEHzdmFoxAvfxHpCB2myr1mHPM1b72K',
    },
  },
  InflationIndex: {
    description:
      'An index that measures inflation in a specific market, e.g. the US Consumer Price Index.',
    type: {
      blueId: '3PW2wc587i1dSwdY8mw99sh8auYBiNqWChG6tCKiMGS6',
    },
  },
  name: 'cdm/observable/asset/InterestRateIndex',
};
