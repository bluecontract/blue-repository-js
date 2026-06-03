export const CdmObservableAssetReferenceSwapCurve: Record<string, unknown> = {
  description:
    'A complex type used to specify the option and convertible bond option strike when expressed in reference to a swap curve.\n',
  makeWholeAmount: {
    description:
      'Amount to be paid by the buyer of the option if the option is exercised prior to the Early Call Date. (The market practice in the convertible bond option space being that the buyer should be penalised if he/she exercises the option early on.)\n',
    type: {
      blueId: '9cFYfvN7xbbc43QhKiCviJrNrMQbUP3XZPyc3x2B7CFB',
    },
  },
  name: 'cdm/observable/asset/ReferenceSwapCurve',
  swapUnwindValue: {
    schema: {
      required: true,
    },
    type: {
      blueId: 'TuUaQmwiwbNnpZ2No6iRHWhHTr63186fYNv8REBGMWB',
    },
  },
};
