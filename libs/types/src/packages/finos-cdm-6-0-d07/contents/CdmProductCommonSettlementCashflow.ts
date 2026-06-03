export const CdmProductCommonSettlementCashflow: Record<string, unknown> = {
  asset: {
    description:
      'Represents the object that is subject to the transfer, it could be an asset or a reference.',
    type: {
      blueId: '5UGws2rghMXJPsBC2YMTqJQgztQ8nTZm1XTaGkvxheXo',
    },
  },
  cashflowType: {
    description:
      'The qualification of the type of cashflow, e.g. brokerage fee, premium, upfront fee etc. Particularly relevant when it cannot be inferred directly through lineage.\n',
    schema: {
      required: true,
    },
    type: {
      blueId: 'GArm2fDK1vopaSHjgRguRRS1k6GiHBGUifjuhdbJEfg',
    },
  },
  description:
    'Class to specify a cashflow, i.e. the outcome of either of computation (e.g. interest accrual) or an assessment of some sort (e.g. a fee). The cashflow can then be turned into a cash transfer, artefact to be used as the input to a payment system or the outcome of it. The associated globalKey denotes the ability to associate a hash value to the Cashflow instantiations for the purpose of model cross-referencing, in support of functionality such as the event effect and the lineage.\n',
  name: 'cdm/product/common/settlement/Cashflow',
  payerReceiver: {
    description:
      'Specifies who pays / receives the cashflow, though a normalised Party1 / Party2 enumerator.',
    schema: {
      required: true,
    },
    type: {
      blueId: '3xPof2WJyFXisFtvaxpSGddTxHyGioazbsMJjuUucbzT',
    },
  },
  paymentDiscounting: {
    description:
      'FpML specifies the FpML PaymentDiscounting.model group for representing the discounting elements that can be associated with a payment.\n',
    type: {
      blueId: '9dkTzBV6xqQ9LmULZCPBAZi5Afj3tZytwUtqXc1iccwt',
    },
  },
  quantity: {
    description:
      'Represents the amount of the asset to be transferred. The cashflow amount is always a positive number, as the cashflow direction is implied by the payer/receiver attribute.\n',
    type: {
      blueId: 'BoLMyAuLAegX9RWR7trQbdmp7pB2tAfkPhDoTzbu8acd',
    },
  },
  settlementDate: {
    description: 'Represents the date on which the transfer to due.',
    type: {
      blueId: '8VijgDyT9t9CiNbNQYVbdE1whbL9Q9DTRMZpCocVhSxF',
    },
  },
};
