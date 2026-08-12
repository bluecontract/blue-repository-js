export const CdmProductCommonSettlementCashflow: Record<string, unknown> = {
  asset: {
    description:
      'Represents the object that is subject to the transfer, it could be an asset or a reference.',
    type: {
      blueId: '8CTGmD55ifZ1AAAr4uYZHw9mUCiZ7foMLqYSEUbPVz3Q',
    },
  },
  cashflowType: {
    description:
      'The qualification of the type of cashflow, e.g. brokerage fee, premium, upfront fee etc. Particularly relevant when it cannot be inferred directly through lineage.\n',
    schema: {
      required: true,
    },
    type: {
      blueId: '8Rk9dMMLbwctvUy8uebWcQUmWJNuVMGzc3W5A22AC1Mq',
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
      blueId: 'JDAXkucJ2m4yHJZmHoTSjW5ZioDKLBu2dbM6gerfoyHn',
    },
  },
  paymentDiscounting: {
    description:
      'FpML specifies the FpML PaymentDiscounting.model group for representing the discounting elements that can be associated with a payment.\n',
    type: {
      blueId: 'AenWDxTzeQmT3js78fHeb2TnPgcgjQAJhaMcrbiorVwL',
    },
  },
  quantity: {
    description:
      'Represents the amount of the asset to be transferred. The cashflow amount is always a positive number, as the cashflow direction is implied by the payer/receiver attribute.\n',
    type: {
      blueId: '6jhJaMEanZrm8mpgb8YxWqCNs2c2UY9AoQigsG7hoNgw',
    },
  },
  settlementDate: {
    description: 'Represents the date on which the transfer to due.',
    type: {
      blueId: 'EsGmKpSwEv5rrzVy75nUtg6sXKYHCmZRDzkGMYyQ7zhX',
    },
  },
};
