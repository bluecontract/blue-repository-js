export const CdmProductTemplateExerciseFee: Record<string, unknown> = {
  description:
    'A class defining the fee payable on exercise of an option. This fee may be defined as an amount or a percentage of the notional exercised. As a difference with FpML, it extends the BuyerSeller class.\n',
  feeAmount: {
    description:
      'The amount of fee to be paid on exercise. The fee currency is that of the referenced notional.',
    type: {
      blueId: '9eWaHYz2vKrFofdHTHAizNNu8xP6QE3WQ5y7DGrGZvyJ',
    },
  },
  feePaymentDate: {
    description:
      'The date on which exercise fee(s) will be paid. It is specified as a relative date.',
    schema: {
      required: true,
    },
    type: {
      blueId: '4JvKSv6NGWh8hqfN6miPYiWwfE3g61v9yBhQuXc8tB8z',
    },
  },
  feeRate: {
    description:
      'A fee represented as a percentage of some referenced notional. A percentage of 5% would be represented as 0.05.\n',
    type: {
      blueId: '9eWaHYz2vKrFofdHTHAizNNu8xP6QE3WQ5y7DGrGZvyJ',
    },
  },
  name: 'cdm/product/template/ExerciseFee',
  notionalReference: {
    description:
      'A pointer style reference to the associated notional schedule defined elsewhere in the document.',
    schema: {
      required: true,
    },
    type: {
      blueId: 'EP1r4ouVVbfJhEazX6iBArCJYk3u6aP7hwxJSGLBFbet',
    },
  },
  payer: {
    description:
      'Specifies the counterparty responsible for making the payments defined by this structure.  The party is one of the two principal parties to the transaction.\n',
    type: {
      blueId: '6RRexSdxduLUUJjoAGhNuhXszw24mwyTFrHtwAqU2SDG',
    },
  },
  receiver: {
    description:
      'Specifies the party that receives the payments corresponding to this structure.  The party is one of the two counterparties to the transaction.\n',
    type: {
      blueId: '6RRexSdxduLUUJjoAGhNuhXszw24mwyTFrHtwAqU2SDG',
    },
  },
};
