export const CdmProductTemplatePortfolioReturnTerms: Record<string, unknown> = {
  correlationReturnTerms: {
    description:
      'Return terms based upon the observed correlation between the components of the underlying basket.',
    type: {
      blueId: 'BMNQDcRPQNEEWkrvZpkzRanWfemGtKAjs6LMhRrJfFTv',
    },
  },
  description:
    'Specifies an individual type of return of a Performance Payout, when such individual return is part of an aggregation of multiple similar returns, at Performance Payout level.\n',
  dividendReturnTerms: {
    description:
      'Return terms based upon dividend payments associated to the underlier.',
    type: {
      blueId: 'm8Bj1PPr1ayweQMJ1XTSJLFPwYpd3HcwBL9Qixvds1T',
    },
  },
  finalValuationPrice: {
    description:
      '2018 ISDA CDM Equity Confirmation for Security Equity Swap: Final Price | Specifies the final valuation price of the underlier. This price can be expressed either as an actual amount/currency, as a determination method, or by reference to another value specified in the swap document.\n',
    itemType: {
      blueId: '2Uog2mdWokkHVaMVWG2ZhXCKPdQtauRk7oxemYRLn9hy',
    },
    schema: {
      minItems: 0,
    },
    type: {
      blueId: '8DSFoWG9MqRSUhStqoPLrwVQiYByRh18NWbDEarN8MKF',
    },
  },
  initialValuationPrice: {
    description:
      'Specifies the initial valuation price(s) of the underlier. This price can be expressed either as an actual amount/currency, as a determination method, or by reference to another value specified in the swap document.\n',
    itemType: {
      blueId: '2Uog2mdWokkHVaMVWG2ZhXCKPdQtauRk7oxemYRLn9hy',
    },
    schema: {
      minItems: 0,
    },
    type: {
      blueId: '8DSFoWG9MqRSUhStqoPLrwVQiYByRh18NWbDEarN8MKF',
    },
  },
  interimValuationPrice: {
    description:
      'Specifies the initial valuation price(s) of the underlier. This price can be expressed either as an actual amount/currency, as a determination method, or by reference to another value specified in the swap document.\n',
    itemType: {
      blueId: '2Uog2mdWokkHVaMVWG2ZhXCKPdQtauRk7oxemYRLn9hy',
    },
    schema: {
      minItems: 0,
    },
    type: {
      blueId: '8DSFoWG9MqRSUhStqoPLrwVQiYByRh18NWbDEarN8MKF',
    },
  },
  name: 'cdm/product/template/PortfolioReturnTerms',
  payerReceiver: {
    description:
      'Canonical representation of the payer and receiver parties applicable to each individual return leg.',
    schema: {
      required: true,
    },
    type: {
      blueId: 'JDAXkucJ2m4yHJZmHoTSjW5ZioDKLBu2dbM6gerfoyHn',
    },
  },
  priceReturnTerms: {
    description: "Return terms based upon the underlier's observed price.",
    type: {
      blueId: 'AoPSpWFPQFM3y5utQVWc87pnUqdSxGdfQopZXvv1hzoB',
    },
  },
  quantity: {
    description:
      'Specifies a quantity schedule for the underlier, which applies to each individual return leg.',
    type: {
      blueId: '3QpANvMr6891ZuV6c8Yze7qcCyqbKRhy9zqwHuMkw8FP',
    },
  },
  underlier: {
    description:
      'Defines the product that is the subject of a tradable product definition, an underlying product definition, a physical exercise, a position, or other purposes.\n',
    schema: {
      required: true,
    },
    type: {
      blueId: '29tRf6HKyJ5PZ7qSgJmiEnuDwSx7xXy8vHzP4X2PfJU8',
    },
  },
  varianceReturnTerms: {
    description:
      "Return terms based upon the observed variance of the underlier's price.",
    type: {
      blueId: '2ueL7HMXMciBNmYPVL1oTvUu988fWWURLxwhzzyDCvUG',
    },
  },
  volatilityReturnTerms: {
    description:
      "Return terms based upon the observed volatility of the underlier's price.",
    type: {
      blueId: 'GZ44neabTiXqC9Y2cR2Z5qRSeXvWtVZTVMTzc8gFcNkM',
    },
  },
};
