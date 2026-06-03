export const CdmEventCommonValuation: Record<string, unknown> = {
  amount: {
    description: 'Current value of the outstanding contract',
    schema: {
      required: true,
    },
    type: {
      blueId: '7eyr2kXubNSHtLXpHJ9G8NqtmDXLfmDmHQZSkLa9qkyy',
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
      blueId: 'HsG4xRp4HQZoXBBj6gQLY1cHS5gQpBY9GJeaUjGbd97Z',
    },
  },
  name: 'cdm/event/common/Valuation',
  priceComponent: {
    description: 'Denotes the price used to compute the valuation.',
    type: {
      blueId: 'GLmQaa2vVZKjaht1sNMcUL55xfAgWQxpj5ENxwvVRvsm',
    },
  },
  source: {
    description:
      'Source of the valuation of the transaction by the valuation party.',
    type: {
      blueId: 'GV6VzVBrD9mNeCdw21SuF8iXDvMQGY5KsZFTLB9dh5aZ',
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
      blueId: 'AKxcCwdA28GyqV4bAANz5gwr1mkuBEft7TkK7FwJkEew',
    },
  },
};
