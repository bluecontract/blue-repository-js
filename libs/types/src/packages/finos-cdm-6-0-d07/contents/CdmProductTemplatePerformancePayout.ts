export const CdmProductTemplatePerformancePayout = {
  description:
    'Contains the necessary specifications for all performance payouts, encompassing equity return, dividend, variance, volatility and correlation products.\n',
  finalValuationPrice: {
    description:
      'Specifies the net final valuation price(s) of the underlier at Performance Payout level. This price can be expressed either as an actual amount/currency, as a determination method, or by reference to another value specified in the swap document.\n',
    itemType: {
      blueId: 'BwqVRaSdNEfKjjtV8yGLCFuEEKSyzFJGiBUyEEVkD25',
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
  fxFeature: {
    description:
      'Defines quanto or composite FX features that are included in the swap leg.',
    itemType: {
      blueId: '4vFVJ5RzFY4D7trKTFXSjcQJv9vQk2V1fzpSsA4MHF3u',
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
  initialValuationPrice: {
    description:
      'Specifies the net initial valuation price(s) of the underlier at Performance Payout level. This price can be expressed either as an actual amount/currency, as a determination method, or by reference to another value specified in the swap document.\n',
    itemType: {
      blueId: 'BwqVRaSdNEfKjjtV8yGLCFuEEKSyzFJGiBUyEEVkD25',
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
  interimValuationPrice: {
    description:
      'Specifies the net initial valuation price(s) of the underlier at Performance Payout level. This price can be expressed either as an actual amount/currency, as a determination method, or by reference to another value specified in the swap document.\n',
    itemType: {
      blueId: 'BwqVRaSdNEfKjjtV8yGLCFuEEKSyzFJGiBUyEEVkD25',
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
  name: 'cdm/product/template/PerformancePayout',
  observationTerms: {
    description:
      'Defines how and when a performance type option or performance type swap is to be observed.',
    type: {
      blueId: '3wwdVKCEN7pSLG9mPnXFiizaAo59qz2yQnNHrzGhT59K',
    },
  },
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
  portfolioReturnTerms: {
    description:
      'Specifies an individual type of return of a Performance Payout, when such individual return is part of an aggregation of multiple similar returns, at Performance Payout level\n',
    itemType: {
      blueId: 'C2yrjwk7TcgoNvD5fnRnG7esNmaqnM1fKRrGAGhNBewD',
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
  returnTerms: {
    description: 'Specifies the type of return of a performance payout.',
    type: {
      blueId: 'H4YFmRdPDQurJuk9z7qEXdhRpcSgEWjT8SA5CmHuzJvC',
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
      "Identifies the underlying product that is referenced for pricing of the applicable leg in a swap.  Referenced in the '2018 ISDA CDM Equity Confirmation for Security Equity Swap' as Security.\n",
    type: {
      blueId: 'this#5',
    },
  },
  valuationDates: {
    description:
      'Defines how and when a performance type option or performance type swap is to be valued, including both interim and final valuation.\n',
    schema: {
      required: {
        type: {
          blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
        },
        value: true,
      },
    },
    type: {
      blueId: '66zVckdam9PFW8teq1v55hAb2SjzvqkkKJKB5VKKrrkT',
    },
  },
} as const;
