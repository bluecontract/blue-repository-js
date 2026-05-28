export const CdmProductCommonSettlementCashflow = {
  asset: {
    description:
      'Represents the object that is subject to the transfer, it could be an asset or a reference.',
    type: {
      blueId: 'B3bsNNAr8QJpJA8r84kgZrHLE5PZREBGxXWYJdtaDRJ7',
    },
  },
  cashflowType: {
    description:
      'The qualification of the type of cashflow, e.g. brokerage fee, premium, upfront fee etc. Particularly relevant when it cannot be inferred directly through lineage.\n',
    schema: {
      required: {
        type: {
          blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
        },
        value: true,
      },
    },
    type: {
      blueId: 'Ccm42B9pqHXvdGEKGXbippze1ftyBoJLzTcK6oXCTx1s',
    },
  },
  description:
    'Class to specify a cashflow, i.e. the outcome of either of computation (e.g. interest accrual) or an assessment of some sort (e.g. a fee). The cashflow can then be turned into a cash transfer, artefact to be used as the input to a payment system or the outcome of it. The associated globalKey denotes the ability to associate a hash value to the Cashflow instantiations for the purpose of model cross-referencing, in support of functionality such as the event effect and the lineage.\n',
  name: 'cdm/product/common/settlement/Cashflow',
  payerReceiver: {
    description:
      'Specifies who pays / receives the cashflow, though a normalised Party1 / Party2 enumerator.',
    schema: {
      required: {
        type: {
          blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
        },
        value: true,
      },
    },
    type: {
      blueId: 'Cx2eHN58eqWKXnZwn6JDYBzAfG95QSEAWjQhbX1R5An3',
    },
  },
  paymentDiscounting: {
    description:
      'FpML specifies the FpML PaymentDiscounting.model group for representing the discounting elements that can be associated with a payment.\n',
    type: {
      blueId: 'J8ZU2YWmzTrtbSkNs5DysuLN5tLJDjMJg7Ca32VEAQqW',
    },
  },
  quantity: {
    description:
      'Represents the amount of the asset to be transferred. The cashflow amount is always a positive number, as the cashflow direction is implied by the payer/receiver attribute.\n',
    type: {
      blueId: 'BbfKyr9mpdQ8cuNvCP78fS2o4Rc7gQZ1GdcbnyD6grzK',
    },
  },
  settlementDate: {
    description: 'Represents the date on which the transfer to due.',
    type: {
      blueId: 'BwTCpPFhSqEbgjkUmssmzp1ig5hb3QSdGhqroiTDsJvJ',
    },
  },
} as const;
