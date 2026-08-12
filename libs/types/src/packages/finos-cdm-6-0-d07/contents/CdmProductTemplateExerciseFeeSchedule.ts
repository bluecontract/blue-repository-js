export const CdmProductTemplateExerciseFeeSchedule: Record<string, unknown> = {
  description:
    'A class to define a fee or schedule of fees to be payable on the exercise of an option. This fee may be defined as an amount or a percentage of the notional exercised. As a difference with FpML, it extends the BuyerSeller class.\n',
  feeAmountSchedule: {
    description:
      'The exercise fee amount schedule. The fees are expressed as currency amounts. The currency of the fee is assumed to be that of the notional schedule referenced.\n',
    type: {
      blueId: '5n3DU8PA11nxzet1RS4oAJMsF4SCnmNLz42y6Yi4LqYe',
    },
  },
  feePaymentDate: {
    description:
      'The date on which exercise fee(s) will be paid. It is specified as a relative date.',
    schema: {
      required: true,
    },
    type: {
      blueId: '9fGwsBbeyL5rQuLRmwyBtyjMjAcmhWfHf4bmyqAXmWtD',
    },
  },
  feeRateSchedule: {
    description:
      'The exercise free rate schedule. The fees are expressed as percentage rates of the notional being exercised. The currency of the fee is assumed to be that of the notional schedule referenced.\n',
    type: {
      blueId: '8swA6F2F6KHLgYRCBDKkg2HyrhQ2D7iumy7C99QJfKLy',
    },
  },
  name: 'cdm/product/template/ExerciseFeeSchedule',
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
      blueId: '7qRfgFBAefYQ37ztmK2dW9i4twZzBjKcQiHPeHrcRtYw',
    },
  },
  receiver: {
    description:
      'Specifies the party that receives the payments corresponding to this structure.  The party is one of the two counterparties to the transaction.\n',
    type: {
      blueId: '7qRfgFBAefYQ37ztmK2dW9i4twZzBjKcQiHPeHrcRtYw',
    },
  },
};
