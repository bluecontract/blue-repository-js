export const CdmObservableAssetCalculatedrateFallbackRateParameters: Record<
  string,
  unknown
> = {
  calculationParameters: {
    description:
      'Support for modular calculated rates, such such as lockout compound calculations.',
    type: {
      blueId: 'BzAmRPH81HKGy6cSBQMksdVVxBpKtdVhJKSbFqKiErQP',
    },
  },
  description:
    'Defines the structure needed to represent fallback rate parameters. This type is used to represent modular computed rates in interestRatePayouts.\n',
  effectiveDate: {
    description: 'The date the fallback rate takes effect.',
    type: {
      blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
    },
  },
  floatingRateIndex: {
    description:
      'The floating rate index that is used as the basis of the fallback rate.',
    schema: {
      required: true,
    },
    type: {
      blueId: 'Ffp3NGGHva1Wh7c62eqGBrQTxEzCeASMFJ6PAmoSuCXF',
    },
  },
  name: 'cdm/observable/asset/calculatedrate/FallbackRateParameters',
  spreadAdjustment: {
    description:
      'The economic spread applied to the underlying fallback rate to replicate the original risky rate.',
    type: {
      blueId: '9eWaHYz2vKrFofdHTHAizNNu8xP6QE3WQ5y7DGrGZvyJ',
    },
  },
};
