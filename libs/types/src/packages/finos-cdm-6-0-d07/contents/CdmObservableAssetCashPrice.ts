export const CdmObservableAssetCashPrice: Record<string, unknown> = {
  cashPriceType: {
    description: 'Specifies the type of Cash Price.',
    schema: {
      required: true,
    },
    type: {
      blueId: '8AJje6F3LQBvFYx4iuQMLA7qkEW1m2oeGabyMjZSLuFU',
    },
  },
  description:
    'Specifies the nature of a cash price either as a fee type, cash price type, or premium expression.',
  feeType: {
    description: 'Specifies the event type associated with a fee.',
    type: {
      blueId: '2GtrN4UDxwH4P5TqQ8bNcVwjwcdDhjkNovEAYuhpAhJQ',
    },
  },
  name: 'cdm/observable/asset/CashPrice',
  premiumExpression: {
    description:
      'Specifies a premium when expressed in a way other than an amount, and any required forward starting price definition.\n',
    type: {
      blueId: 'BnX8YWGNQEemBPGhMwg9Dn7EZKXy7TKV3Pdoa8bijM8K',
    },
  },
};
