export const CdmProductTemplateFixedPricePayout: Record<string, unknown> = {
  description:
    'Represents a fixed price payout. There is no underlier associated with this payout type and is based on fixed pricing per a given unit (e.g. in commodities price per barrel)\n',
  fixedPrice: {
    description:
      'Specifies the fixed price on which fixed forward payments are based.',
    schema: {
      required: true,
    },
    type: {
      blueId: '3WvaxijQwR1ELLMK9QtedoyNZ1wy9YZrGnGe2wvdpVWk',
    },
  },
  name: 'cdm/product/template/FixedPricePayout',
  payerReceiver: {
    description:
      'Canonical representation of the payer and receiver parties applicable to each payout leg.',
    type: {
      blueId: 'JDAXkucJ2m4yHJZmHoTSjW5ZioDKLBu2dbM6gerfoyHn',
    },
  },
  paymentDates: {
    description:
      'Specifies the parameters to generate the payment date schedule, either through a parametric representation or by reference to specified dates.\n',
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
};
