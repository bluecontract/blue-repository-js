export const CdmProductCommonScheduleDateRelativeToValuationDates = {
  description:
    'A data to:  provide the ability to point to multiple payment nodes in the document through the unbounded paymentDatesReference.\n',
  name: 'cdm/product/common/schedule/DateRelativeToValuationDates',
  valuationDatesReference: {
    description:
      'A set of href pointers to valuation period dates defined somewhere else in the document.',
    itemType: {
      blueId: 'DQP2qi6gwFxKtKMataRY4XdJdpe3v4MNCv43aURbDBPn',
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
