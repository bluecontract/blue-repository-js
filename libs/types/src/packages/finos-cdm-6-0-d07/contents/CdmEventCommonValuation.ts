export const CdmEventCommonValuation: Record<string, unknown> = {
  amount: {
    description: 'Current value of the outstanding contract',
    schema: {
      required: true,
    },
    type: {
      blueId: 'A6JZXX4Rug3aj7cJh48V6FeziSECwFQzyrJ1xUwd9kii',
    },
  },
  delta: {
    description:
      'The ratio of the change in the price of a derivative transaction to the change in the price of the underlying. This field is applicable only to options and swaptions.\n',
    type: {
      blueId: '9eWaHYz2vKrFofdHTHAizNNu8xP6QE3WQ5y7DGrGZvyJ',
    },
  },
  description: 'Defines the value of an investment, asset, or security',
  method: {
    description:
      'Method used for the valuation of the transaction by the valuation party.',
    type: {
      blueId: 'AHvjpNMMjoT3rNUUPAq275wLaiz12u25bB1BzsfUpYCp',
    },
  },
  name: 'cdm/event/common/Valuation',
  priceComponent: {
    description: 'Denotes the price used to compute the valuation.',
    type: {
      blueId: 'D6pT9tDvB6nnaNaPVHodxcm2djqTNykgt6VJoD2uDq4M',
    },
  },
  source: {
    description:
      'Source of the valuation of the transaction by the valuation party.',
    type: {
      blueId: '6oZQoXTPQoBnfn28CJnvScCWpoMnEBPDvuP7fYwouN3Q',
    },
  },
  timestamp: {
    description:
      'Date and time of the last valuation marked to market, provided by the central counterparty (CCP) or calculated using the current or last available market price of the inputs.\n',
    schema: {
      required: true,
    },
    type: {
      blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
    },
  },
  valuationTiming: {
    description:
      'Denotes when the valuation was sourced during a business day.',
    type: {
      blueId: '9m7oFgSnUtNdoF8hut9kaWRqoPdi8Vr1jH1stL2LEuNS',
    },
  },
};
