export const CdmProductTemplatePerformancePayout: Record<string, unknown> = {
  description:
    'Contains the necessary specifications for all performance payouts, encompassing equity return, dividend, variance, volatility and correlation products.\n',
  finalValuationPrice: {
    description:
      'Specifies the net final valuation price(s) of the underlier at Performance Payout level. This price can be expressed either as an actual amount/currency, as a determination method, or by reference to another value specified in the swap document.\n',
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
  fxFeature: {
    description:
      'Defines quanto or composite FX features that are included in the swap leg.',
    itemType: {
      blueId: '4Evx6ctCQA9KW4zWZBuRVzGni9eknk1oQDCWfhxNfdg9',
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
      'Specifies the net initial valuation price(s) of the underlier at Performance Payout level. This price can be expressed either as an actual amount/currency, as a determination method, or by reference to another value specified in the swap document.\n',
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
      'Specifies the net initial valuation price(s) of the underlier at Performance Payout level. This price can be expressed either as an actual amount/currency, as a determination method, or by reference to another value specified in the swap document.\n',
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
  name: 'cdm/product/template/PerformancePayout',
  observationTerms: {
    description:
      'Defines how and when a performance type option or performance type swap is to be observed.',
    type: {
      blueId: '5hoFwtCWywpjW2iVxqcevJ5qtXxE46qvSVAb8NxpJke',
    },
  },
  payerReceiver: {
    description:
      'Canonical representation of the payer and receiver parties applicable to each payout leg.',
    type: {
      blueId: 'JDAXkucJ2m4yHJZmHoTSjW5ZioDKLBu2dbM6gerfoyHn',
    },
  },
  paymentDates: {
    description:
      'Defines the payment date schedule, as defined by the parameters that are needed to specify it, either in a parametric way or by reference to another schedule of dates (e.g. the valuation dates).\n',
    schema: {
      required: true,
    },
    type: {
      blueId: '53mGNaWEbqDyzs1WnqizJcci5WSeG5YDV6e97svgRLve',
    },
  },
  portfolioReturnTerms: {
    description:
      'Specifies an individual type of return of a Performance Payout, when such individual return is part of an aggregation of multiple similar returns, at Performance Payout level\n',
    itemType: {
      blueId: '8YJvz5QvRRm82xb6wUCFzmm93hyr1TqxCZEbxmws5P2k',
    },
    schema: {
      minItems: 0,
    },
    type: {
      blueId: '8DSFoWG9MqRSUhStqoPLrwVQiYByRh18NWbDEarN8MKF',
    },
  },
  priceQuantity: {
    description:
      "Each payout leg must implement the quantity concept as a 'resolvable' type, which allows for different payout legs to be linked to each other (e.g. in the case of cross-curreny products).\n",
    type: {
      blueId: '9H3s5nDTov6DTnnVBM5XaiAV2vZvPEep33DWccdc6mXq',
    },
  },
  principalPayment: {
    description:
      'The specification of the principal exchange. Optional as only applicable in the case of cross-currency or zero-coupon swaps with a final payment.\n',
    type: {
      blueId: '6ZdgPDgDd1WfACEQNiQTurhX1xdBtsoPkMNjRhDD9Myo',
    },
  },
  returnTerms: {
    description: 'Specifies the type of return of a performance payout.',
    type: {
      blueId: 'D3rQtJTo4bzbc48Z32EpDkkaMQ8P2EPJj4jYVkFW9mv4',
    },
  },
  settlementTerms: {
    description:
      'Each payout leg must specifies its settlement terms, including the delivery type (i.e. cash vs physical, and their respective terms), the transfer type (DvP etc.) and settlement date, if any.\n',
    type: {
      blueId: 'BRJ2J4zKmK8CLQta8gGcSboyer9Sby49nV8HopjaFM7g',
    },
  },
  underlier: {
    description:
      "Identifies the underlying product that is referenced for pricing of the applicable leg in a swap.  Referenced in the '2018 ISDA CDM Equity Confirmation for Security Equity Swap' as Security.\n",
    type: {
      blueId: 'this#2',
    },
  },
  valuationDates: {
    description:
      'Defines how and when a performance type option or performance type swap is to be valued, including both interim and final valuation.\n',
    schema: {
      required: true,
    },
    type: {
      blueId: '52VT1GJKNMa3wBqNqgE8GhUTMvm8KG1p7teYbHA7oz8D',
    },
  },
};
