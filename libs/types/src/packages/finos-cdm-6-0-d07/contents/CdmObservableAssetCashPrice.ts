export const CdmObservableAssetCashPrice = {
  cashPriceType: {
    description: 'Specifies the type of Cash Price.',
    schema: {
      required: {
        type: {
          blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
        },
        value: true,
      },
    },
    type: {
      blueId: 'H2xVoXBmfUbQs6cNWFyDcyfWSDbZB2kUQU4av2ty95u8',
    },
  },
  description:
    'Specifies the nature of a cash price either as a fee type, cash price type, or premium expression.',
  feeType: {
    description: 'Specifies the event type associated with a fee.',
    type: {
      blueId: 'CEYV9kEtFbGQ1TN5ZdT4jXMZfSQUVyhphKVVYFHwQ1uq',
    },
  },
  name: 'cdm/observable/asset/CashPrice',
  premiumExpression: {
    description:
      'Specifies a premium when expressed in a way other than an amount, and any required forward starting price definition.\n',
    type: {
      blueId: '9so5mJWR9jvdKWfaAnMyj5WMAv2TaLmZrmBZxGyLWqMf',
    },
  },
} as const;
