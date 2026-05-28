export const CdmProductAssetCommodityPayout = {
  averagingFeature: {
    description:
      'Indicates if the averaging calculation, when applicable, is weighted or unweighted.',
    type: {
      blueId: 'DgMT9GvGPfVpoxATLX7UH2QtPrCD7csg3P5rdgiQxAUg',
    },
  },
  calculationPeriodDates: {
    description: 'Defines the calculation period dates schedule.',
    type: {
      blueId: 'HNqe2eLHMNHdTJAqM3zJLo9SBP9LgZu1vfSbhQ9KX51v',
    },
  },
  commodityPriceReturnTerms: {
    description: 'Defines parameters in which the commodity price is assessed.',
    type: {
      blueId: '5x1sDH43jpfnxCpn7SxGocGurJQPFSuhA9VqKTEj3p4y',
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
    'Payout based on the averaged price of a referenced underlier. (e.g. Commodities). Can represent both average (average of many) & bullet (average of 1) pricing\n',
  fxFeature: {
    description:
      'Defines quanto or composite FX features that are included in the swap leg.',
    type: {
      blueId: '4vFVJ5RzFY4D7trKTFXSjcQJv9vQk2V1fzpSsA4MHF3u',
    },
  },
  name: 'cdm/product/asset/CommodityPayout',
  payerReceiver: {
    description:
      'Canonical representation of the payer and receiver parties applicable to each payout leg.',
    type: {
      blueId: 'Cx2eHN58eqWKXnZwn6JDYBzAfG95QSEAWjQhbX1R5An3',
    },
  },
  paymentDates: {
    description:
      'Defines the payment date schedule, as defined by the parameters that are needed to specify it, either in a parametric way or by reference to another schedule of dates (e.g. the valuation dates).\n',
    schema: {
      required: {
        type: {
          blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
        },
        value: true,
      },
    },
    type: {
      blueId: '913TgdFLeMHEAXnndV1KuUqmoxUtRjXn8X8JRX4n632b',
    },
  },
  priceQuantity: {
    description:
      "Each payout leg must implement the quantity concept as a 'resolvable' type, which allows for different payout legs to be linked to each other (e.g. in the case of cross-curreny products).\n",
    type: {
      blueId: 'F4ihqR7D44ZpGGutb98mpsdE6QNtkrVZM4oiK6Vuzcsy',
    },
  },
  pricingDates: {
    description:
      'Specifies specific dates or parametric rules for the dates on which the price will be determined.',
    schema: {
      required: {
        type: {
          blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
        },
        value: true,
      },
    },
    type: {
      blueId: 'ENR8ZMb3BXhAA9nevcEyKgFFFrZ2fgr7kuxCniYTsx1w',
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
  underlier: {
    description:
      "Identifies the underlying product that is referenced for pricing of the applicable leg in a swap. Referenced in the '2018 ISDA CDM Equity Confirmation for Security Equity Swap' as Security.\n",
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
