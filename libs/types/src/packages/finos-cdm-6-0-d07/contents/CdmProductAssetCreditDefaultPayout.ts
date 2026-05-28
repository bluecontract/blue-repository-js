export const CdmProductAssetCreditDefaultPayout = {
  description:
    'The credit default payout specification provides the details necessary for determining when a credit payout will be triggered as well as the parameters for calculating the payout and the settlement terms. The associated globalKey denotes the ability to associate a hash value to the CreditDefaultPayout instantiations for the purpose of model cross-referencing, in support of functionality such as the event effect and the lineage.\n',
  generalTerms: {
    description:
      'The specification of the non-monetary terms for the Credit Derivative Transaction, including the buyer and seller and selected items from the ISDA 2014 Credit Definition article II, such as the reference obligation and related terms.\n',
    schema: {
      required: {
        type: {
          blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
        },
        value: true,
      },
    },
    type: {
      blueId: '8688b9SPeJc34d4CJykTKUnQpiSqJQDX6zUE4m6DiHh3',
    },
  },
  name: 'cdm/product/asset/CreditDefaultPayout',
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
  protectionTerms: {
    description:
      'Specifies the terms for calculating a payout to protect the buyer of the swap in the case of a qualified credit event. These terms include the applicable credit events, the reference obligation, and in the case of a CDS on mortgage-backed securities, the floatingAmountEvents.\n',
    itemType: {
      blueId: 'C6peWW2cNzfWSj33MN1qibTwdFUkKrMXLu4XCNZwRqLv',
    },
    schema: {
      minItems: {
        type: {
          blueId: '5WNMiV9Knz63B4dVY5JtMyh3FB4FSGqv7ceScvuapdE1',
        },
        value: 0,
      },
    },
    type: {
      blueId: '6aehfNAxHLC1PHHoDr3tYtFH3RWNbiWdFancJ1bypXEY',
    },
  },
  settlementTerms: {
    description:
      'Each payout leg must specifies its settlement terms, including the delivery type (i.e. cash vs physical, and their respective terms), the transfer type (DvP etc.) and settlement date, if any.\n',
    type: {
      blueId: '7zkmbj4175pTZ3exYCBnCyVdiSaAT2SEfkxhDTus8iLY',
    },
  },
  transactedPrice: {
    description:
      'The qualification of the price at which the contract has been transacted, in terms of market fixed rate, initial points, market price and/or quotation style. In FpML, those attributes are positioned as part of the fee leg.\n',
    type: {
      blueId: '65FKmZoG2ihwTo3rzTDNSxkKZagb2Cf5Yd4XZz9V9hRT',
    },
  },
} as const;
