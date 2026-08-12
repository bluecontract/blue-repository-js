export const CdmProductAssetCommodityPayout: Record<string, unknown> = {
  averagingFeature: {
    description:
      'Indicates if the averaging calculation, when applicable, is weighted or unweighted.',
    type: {
      blueId: 'Dm6X9rfSBnx7WqRtQ4eeZ3yyCpGqTHJWsE6vycZx4yix',
    },
  },
  calculationPeriodDates: {
    description: 'Defines the calculation period dates schedule.',
    type: {
      blueId: 'DfcGaXUQetcXghmMMauh7ikEza42JbwqRdRdyWcm1C6N',
    },
  },
  commodityPriceReturnTerms: {
    description: 'Defines parameters in which the commodity price is assessed.',
    type: {
      blueId: 'E3H3DKjGJFhkYXRWqcd2cAUNArjh5GQ68X2os3cTkLHo',
    },
  },
  delivery: {
    description:
      'Contains the information relative to the delivery of the asset.',
    type: {
      blueId: 'ErtJ5jBytJJ7W2hSqXGSdmAd65mCExkRtBpifkecnhVT',
    },
  },
  description:
    'Payout based on the averaged price of a referenced underlier. (e.g. Commodities). Can represent both average (average of many) & bullet (average of 1) pricing\n',
  fxFeature: {
    description:
      'Defines quanto or composite FX features that are included in the swap leg.',
    type: {
      blueId: '4Evx6ctCQA9KW4zWZBuRVzGni9eknk1oQDCWfhxNfdg9',
    },
  },
  name: 'cdm/product/asset/CommodityPayout',
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
  priceQuantity: {
    description:
      "Each payout leg must implement the quantity concept as a 'resolvable' type, which allows for different payout legs to be linked to each other (e.g. in the case of cross-curreny products).\n",
    type: {
      blueId: '9H3s5nDTov6DTnnVBM5XaiAV2vZvPEep33DWccdc6mXq',
    },
  },
  pricingDates: {
    description:
      'Specifies specific dates or parametric rules for the dates on which the price will be determined.',
    schema: {
      required: true,
    },
    type: {
      blueId: '51vGBKkgLH3NUCqwFpjmFLCT15MZshriveqeJPUJvZVZ',
    },
  },
  principalPayment: {
    description:
      'The specification of the principal exchange. Optional as only applicable in the case of cross-currency or zero-coupon swaps with a final payment.\n',
    type: {
      blueId: '6ZdgPDgDd1WfACEQNiQTurhX1xdBtsoPkMNjRhDD9Myo',
    },
  },
  schedule: {
    description:
      'Allows the full representation of a payout by defining a set of schedule periods. It supports standard schedule customization by expressing all the dates, quantities, and pricing data in a non-parametric way.\n',
    type: {
      blueId: 'D9dLMq3bj6XLYoxFZUFfChf74VUAg1Lso4BteJXuB47B',
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
      "Identifies the underlying product that is referenced for pricing of the applicable leg in a swap. Referenced in the '2018 ISDA CDM Equity Confirmation for Security Equity Swap' as Security.\n",
    schema: {
      required: true,
    },
    type: {
      blueId: 'this#2',
    },
  },
};
