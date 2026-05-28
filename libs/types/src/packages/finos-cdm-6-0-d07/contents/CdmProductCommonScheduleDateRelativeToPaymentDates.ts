export const CdmProductCommonScheduleDateRelativeToPaymentDates = {
  description:
    'A data to:  provide the ability to point to multiple payment nodes in the document through the unbounded paymentDatesReference.\n',
  name: 'cdm/product/common/schedule/DateRelativeToPaymentDates',
  paymentDatesReference: {
    description:
      'A set of href pointers to payment dates defined somewhere else in the document.',
    itemType: {
      blueId: '8NNNz18sSETdae4uM2DzFCgUaZuSYVrut2KQHj6E2q46',
    },
    schema: {
      minItems: {
        type: {
          blueId: '5WNMiV9Knz63B4dVY5JtMyh3FB4FSGqv7ceScvuapdE1',
        },
        value: 1,
      },
    },
    type: {
      blueId: '6aehfNAxHLC1PHHoDr3tYtFH3RWNbiWdFancJ1bypXEY',
    },
  },
} as const;
