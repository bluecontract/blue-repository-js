export const CdmObservableAssetReferenceSwapCurve: Record<string, unknown> = {
  description:
    'A complex type used to specify the option and convertible bond option strike when expressed in reference to a swap curve.\n',
  makeWholeAmount: {
    description:
      'Amount to be paid by the buyer of the option if the option is exercised prior to the Early Call Date. (The market practice in the convertible bond option space being that the buyer should be penalised if he/she exercises the option early on.)\n',
    type: {
      blueId: '6N1AurVNznLiPSNtTZrotPgf8jAaq1J95ySoT4Zutx4a',
    },
  },
  name: 'cdm/observable/asset/ReferenceSwapCurve',
  swapUnwindValue: {
    schema: {
      required: true,
    },
    type: {
      blueId: '2JLGXcZi3fP9Ln588TvZV6ae9QJRPFiYEWwPpva9UREc',
    },
  },
};
