export const CdmProductTemplatePortfolioReturnTerms = {
  correlationReturnTerms: {
    description:
      'Return terms based upon the observed correlation between the components of the underlying basket.',
    type: {
      blueId: 'HqY3kSqV1NfLvT5YLvitQ5Nq1sktFe6oA5AqyQC1j9jT',
    },
  },
  description:
    'Specifies an individual type of return of a Performance Payout, when such individual return is part of an aggregation of multiple similar returns, at Performance Payout level.\n',
  dividendReturnTerms: {
    description:
      'Return terms based upon dividend payments associated to the underlier.',
    type: {
      blueId: '7h8FScnN4pQLHjNkSJKae9Pz8U5rCRfseiLcscSpZTss',
    },
  },
  finalValuationPrice: {
    description:
      '2018 ISDA CDM Equity Confirmation for Security Equity Swap: Final Price | Specifies the final valuation price of the underlier. This price can be expressed either as an actual amount/currency, as a determination method, or by reference to another value specified in the swap document.\n',
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
  initialValuationPrice: {
    description:
      'Specifies the initial valuation price(s) of the underlier. This price can be expressed either as an actual amount/currency, as a determination method, or by reference to another value specified in the swap document.\n',
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
      'Specifies the initial valuation price(s) of the underlier. This price can be expressed either as an actual amount/currency, as a determination method, or by reference to another value specified in the swap document.\n',
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
  name: 'cdm/product/template/PortfolioReturnTerms',
  payerReceiver: {
    description:
      'Canonical representation of the payer and receiver parties applicable to each individual return leg.',
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
  priceReturnTerms: {
    description: "Return terms based upon the underlier's observed price.",
    type: {
      blueId: '7YFwQGbWnfaZ3YgwzGGgdBhyDppvFGTH2LibSGzdhSnH',
    },
  },
  quantity: {
    description:
      'Specifies a quantity schedule for the underlier, which applies to each individual return leg.',
    type: {
      blueId: 'aox7Y6mfMBx71DQngCd45QQNaCFw5yiNGb7U3XJD7r2',
    },
  },
  underlier: {
    description:
      'Defines the product that is the subject of a tradable product definition, an underlying product definition, a physical exercise, a position, or other purposes.\n',
    schema: {
      required: {
        type: {
          blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
        },
        value: true,
      },
    },
    type: {
      blueId: '7Ezn98bzTDBSzbTRQf8yvx7zNsbGwp4w3rfb12fsiBwz',
    },
  },
  varianceReturnTerms: {
    description:
      "Return terms based upon the observed variance of the underlier's price.",
    type: {
      blueId: 'DyvMnYXfQRGwqfP9Kybg1qYNhMuFyGyMpw3x1vAopkmX',
    },
  },
  volatilityReturnTerms: {
    description:
      "Return terms based upon the observed volatility of the underlier's price.",
    type: {
      blueId: '3e4M5cnE53HFtp4uJHoNYZeL1Vwo4xTDK6XJh5tNRiGb',
    },
  },
} as const;
