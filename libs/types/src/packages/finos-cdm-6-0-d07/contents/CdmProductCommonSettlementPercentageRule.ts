export const CdmProductCommonSettlementPercentageRule: Record<string, unknown> =
  {
    description:
      'A class defining a content model for a calculation rule defined as percentage of the notional amount.',
    name: 'cdm/product/common/settlement/PercentageRule',
    notionalAmountReference: {
      description: 'A reference to the notional amount.',
      schema: {
        required: true,
      },
      type: {
        blueId: 'EP1r4ouVVbfJhEazX6iBArCJYk3u6aP7hwxJSGLBFbet',
      },
    },
    paymentPercent: {
      description: 'A percentage of the notional amount.',
      schema: {
        required: true,
      },
      type: {
        blueId: '9eWaHYz2vKrFofdHTHAizNNu8xP6QE3WQ5y7DGrGZvyJ',
      },
    },
  };
