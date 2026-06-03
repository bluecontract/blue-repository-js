export const CdmProductTemplateOptionPayout: Record<string, unknown> = {
  buyerSeller: {
    schema: {
      required: true,
    },
    type: {
      blueId: 'HA8fmtXcNJxs3hXa88H9PHchDg6hgAFvto4VVdW1aZmf',
    },
  },
  delivery: {
    description:
      'Contains the information relative to the delivery of the asset.',
    type: {
      blueId: '78abSDet2v5nbbeXAmoFZG2ZcMhk4674b2vrAKGT3yiu',
    },
  },
  description:
    'The option payout specification terms. The associated globalKey denotes the ability to associate a hash value to the respective OptionPayout instantiation for the purpose of model cross-referencing, in support of functionality such as the event effect and the lineage.\n',
  exerciseTerms: {
    description:
      'The terms for exercising the option, which include the option style (e.g. American style option), the exercise procedure (e.g. manual exercise) and the settlement terms (e.g. physical vs. cash).\n',
    schema: {
      required: true,
    },
    type: {
      blueId: 'J1G2hQLDGZ1gu2re4Z6NCNRA3Ze9S9LM51pbnxyzozLq',
    },
  },
  feature: {
    description: 'The option feature, such as quanto, Asian, barrier, knock.',
    type: {
      blueId: 'iFRGjqPC6ijQF491otn9biLkPW4na25mmZ7gGtFn2Fj',
    },
  },
  name: 'cdm/product/template/OptionPayout',
  observationTerms: {
    description:
      'Class containing terms that are associated with observing a price/benchmark/index across either single or multple observations. To be used for option contracts that reference a benchmark price.\n',
    type: {
      blueId: '9pJEidhmAUQebdR3uTioauH2mNHR8RLS9r7xaB9vxpRd',
    },
  },
  optionType: {
    description:
      'The type of option transaction. From a usage standpoint, put/call is the default option type, while payer/receiver indicator is used for options on index credit default swaps, consistently with the industry practice. Straddle is used for the case of straddle strategy, that combine a call and a put with the same strike.\n',
    type: {
      blueId: '8ErhA2L9qAVdWjMVzZuXRSZDWRC2HdhAZCUsa4qbaya4',
    },
  },
  payerReceiver: {
    description:
      'Canonical representation of the payer and receiver parties applicable to each payout leg.',
    type: {
      blueId: '3xPof2WJyFXisFtvaxpSGddTxHyGioazbsMJjuUucbzT',
    },
  },
  priceQuantity: {
    description:
      "Each payout leg must implement the quantity concept as a 'resolvable' type, which allows for different payout legs to be linked to each other (e.g. in the case of cross-curreny products).\n",
    type: {
      blueId: '7nSxNdghnPkGBbyqzqUELC5UcBMNfLdrCr4oXbav2d3J',
    },
  },
  principalPayment: {
    description:
      'The specification of the principal exchange. Optional as only applicable in the case of cross-currency or zero-coupon swaps with a final payment.\n',
    type: {
      blueId: '8VsQE5PSzyWWApw5Ykfum97vLPNoa36BemLUMHimzMb5',
    },
  },
  schedule: {
    description:
      'Allows the full representation of a payout by defining a set of schedule periods. It supports standard schedule customization by expressing all the dates, quantities, and pricing data in a non-parametric way.\n',
    type: {
      blueId: 'GbAmo8bxznHkBwFWFP6JMXCQEsWMyu9iKFV2KtBqH1rP',
    },
  },
  settlementTerms: {
    description:
      'Each payout leg must specifies its settlement terms, including the delivery type (i.e. cash vs physical, and their respective terms), the transfer type (DvP etc.) and settlement date, if any.\n',
    type: {
      blueId: '2qfdfn8VYJmiXxmTj9Vwfu1pB3jFJQK9WAShnf8n1r1m',
    },
  },
  strike: {
    description: 'Specifies the strike of the option',
    type: {
      blueId: '2dSkgwb8hLPVxQFwzcY81Rz3doMpbjGnxxouhx3k8wJ2',
    },
  },
  underlier: {
    description:
      'The financial product underlying the option, which can be of any type including an Asset, Basket, Index or a NonTransferableProduct.\n',
    schema: {
      required: true,
    },
    type: {
      blueId: 'this#3',
    },
  },
};
