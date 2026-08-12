export const CdmProductTemplateSettlementPayout: Record<string, unknown> = {
  delivery: {
    description:
      'Contains the information relative to the delivery of the asset.',
    type: {
      blueId: 'ErtJ5jBytJJ7W2hSqXGSdmAd65mCExkRtBpifkecnhVT',
    },
  },
  deliveryTerm: {
    description:
      "Also called contract month or delivery month. However, it's not always a month. It is usually expressed using a code, e.g. Z23 would be the Dec 2023 contract, (Z = December). For crude oil, the corresponding contract might be called CLZ23.\n",
    type: {
      blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
    },
  },
  description:
    'Represents a forward settling payout. The underlier attribute captures the underlying payout, which is settled according to the settlementTerms attribute (which is part of PayoutBase). Both FX Spot and FX Forward should use this component.\n',
  name: 'cdm/product/template/SettlementPayout',
  payerReceiver: {
    description:
      'Canonical representation of the payer and receiver parties applicable to each payout leg.',
    type: {
      blueId: 'JDAXkucJ2m4yHJZmHoTSjW5ZioDKLBu2dbM6gerfoyHn',
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
      'The underlying financial product that will be physically or cash settled, which can be of any type, eg an asset such as cash or a security, or the cash settlement of an index rate.\n',
    schema: {
      required: true,
    },
    type: {
      blueId: 'this#2',
    },
  },
};
