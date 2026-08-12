export const CdmObservableAssetInterestRateIndex: Record<string, unknown> = {
  description:
    'An index based in interest rates or inflation rates in a certain market.',
  FloatingRateIndex: {
    description:
      'An interest rate index which can change over time, e.g. the SONIA (Sterling Overnight Index Average) in the UK.\n',
    type: {
      blueId: 'FEciYgwDPBCoe3t5CbhmZgzFsYGjaDrE4MC6fMssK8kS',
    },
  },
  InflationIndex: {
    description:
      'An index that measures inflation in a specific market, e.g. the US Consumer Price Index.',
    type: {
      blueId: 'ALcifh12oA5VR8MK7Yvmj7vNGwxB51YSHriX5fLRoB7d',
    },
  },
  name: 'cdm/observable/asset/InterestRateIndex',
};
