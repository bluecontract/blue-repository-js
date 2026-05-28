export const CdmProductTemplateOptionPayout = {
  buyerSeller: {
    schema: {
      required: {
        type: {
          blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
        },
        value: true,
      },
    },
    type: {
      blueId: 'ATD4mngyB7ULwUSU6DbEMVcLMyFeZxXRKDJrTsFAJ1dx',
    },
  },
  delivery: {
    description:
      'Contains the information relative to the delivery of the asset.',
    type: {
      blueId: 'DFCwxwyJL859yeqbrr3oY7vncLWeadysD9VJGA6LGJgK',
    },
  },
  description:
    'The option payout specification terms. The associated globalKey denotes the ability to associate a hash value to the respective OptionPayout instantiation for the purpose of model cross-referencing, in support of functionality such as the event effect and the lineage.\n',
  exerciseTerms: {
    description:
      'The terms for exercising the option, which include the option style (e.g. American style option), the exercise procedure (e.g. manual exercise) and the settlement terms (e.g. physical vs. cash).\n',
    schema: {
      required: {
        type: {
          blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
        },
        value: true,
      },
    },
    type: {
      blueId: 'Chheuq1dPEWCj7bsdGkRo52qY4nscUb7oURn3FKrqFtS',
    },
  },
  feature: {
    description: 'The option feature, such as quanto, Asian, barrier, knock.',
    type: {
      blueId: 'JDGRPFj4wNXyhxtXXFrhaCacWSCaiZeP3YHSLDZxPpj1',
    },
  },
  name: 'cdm/product/template/OptionPayout',
  observationTerms: {
    description:
      'Class containing terms that are associated with observing a price/benchmark/index across either single or multple observations. To be used for option contracts that reference a benchmark price.\n',
    type: {
      blueId: '3wwdVKCEN7pSLG9mPnXFiizaAo59qz2yQnNHrzGhT59K',
    },
  },
  optionType: {
    description:
      'The type of option transaction. From a usage standpoint, put/call is the default option type, while payer/receiver indicator is used for options on index credit default swaps, consistently with the industry practice. Straddle is used for the case of straddle strategy, that combine a call and a put with the same strike.\n',
    type: {
      blueId: 'J4ZdDBZPY9VTNearpD8S9gntq7sM6egJXSCgbUSuBopC',
    },
  },
  payerReceiver: {
    description:
      'Canonical representation of the payer and receiver parties applicable to each payout leg.',
    type: {
      blueId: 'Cx2eHN58eqWKXnZwn6JDYBzAfG95QSEAWjQhbX1R5An3',
    },
  },
  priceQuantity: {
    description:
      "Each payout leg must implement the quantity concept as a 'resolvable' type, which allows for different payout legs to be linked to each other (e.g. in the case of cross-curreny products).\n",
    type: {
      blueId: 'F4ihqR7D44ZpGGutb98mpsdE6QNtkrVZM4oiK6Vuzcsy',
    },
  },
  principalPayment: {
    description:
      'The specification of the principal exchange. Optional as only applicable in the case of cross-currency or zero-coupon swaps with a final payment.\n',
    type: {
      blueId: '79fSZCgPXnnm5bsD9s4XCQXn5MaCb8UAVq6ybHFbLdpq',
    },
  },
  schedule: {
    description:
      'Allows the full representation of a payout by defining a set of schedule periods. It supports standard schedule customization by expressing all the dates, quantities, and pricing data in a non-parametric way.\n',
    type: {
      blueId: '4W1R4RHyg7dDwmQXUBPtdq2118vcYaxmhXXpAsyJ45iG',
    },
  },
  settlementTerms: {
    description:
      'Each payout leg must specifies its settlement terms, including the delivery type (i.e. cash vs physical, and their respective terms), the transfer type (DvP etc.) and settlement date, if any.\n',
    type: {
      blueId: '7zkmbj4175pTZ3exYCBnCyVdiSaAT2SEfkxhDTus8iLY',
    },
  },
  strike: {
    description: 'Specifies the strike of the option',
    type: {
      blueId: 'Ah265ohZqxFXsWTp62UC3yWMvZAwGymx5y9Hu55yG4MN',
    },
  },
  underlier: {
    description:
      'The financial product underlying the option, which can be of any type including an Asset, Basket, Index or a NonTransferableProduct.\n',
    schema: {
      required: {
        type: {
          blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
        },
        value: true,
      },
    },
    type: {
      blueId: 'this#5',
    },
  },
} as const;
