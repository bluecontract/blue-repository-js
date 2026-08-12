export const CdmObservableAssetCashPrice: Record<string, unknown> = {
  cashPriceType: {
    description: 'Specifies the type of Cash Price.',
    schema: {
      required: true,
    },
    type: {
      blueId: 'AEfb65Lx9dVtpQ5JJu3BiLoUgJ6PUYM3ojouNVFV4CAm',
    },
  },
  description:
    'Specifies the nature of a cash price either as a fee type, cash price type, or premium expression.',
  feeType: {
    description: 'Specifies the event type associated with a fee.',
    type: {
      blueId: '8YbneMZREtyf98o78oZSMwLcZ4UyCjeQ14dkVVURpo8v',
    },
  },
  name: 'cdm/observable/asset/CashPrice',
  premiumExpression: {
    description:
      'Specifies a premium when expressed in a way other than an amount, and any required forward starting price definition.\n',
    type: {
      blueId: 'CF9TCm7gsGv48fg55ri8oWuzJnJp6Cg8rQ1v3YadozR9',
    },
  },
};
