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
      blueId: '3xPof2WJyFXisFtvaxpSGddTxHyGioazbsMJjuUucbzT',
    },
  },
  paymentDates: {
    description:
      'Specifies the parameters to generate the payment date schedule, either through a parametric representation or by reference to specified dates.\n',
    schema: {
      required: true,
    },
    type: {
      blueId: '23fb9HBYcZQ8enTm83iVQjixyTrHqNc5G1ANtAbB1ixz',
    },
  },
  priceQuantity: {
    description:
      "Each payout leg must implement the quantity concept as a 'resolvable' type, which allows for different payout legs to be linked to each other (e.g. in the case of cross-curreny products).\n",
    type: {
      blueId: '7nSxNdghnPkGBbyqzqUELC5UcBMNfLdrCr4oXbav2d3J',
    },
  },
  principalPayment: {
    description:
      'The specification of the principal exchange. Optional as only applicable in the case of cross-currency or zero-coupon swaps with a final payment.\n',
    type: {
      blueId: '8VsQE5PSzyWWApw5Ykfum97vLPNoa36BemLUMHimzMb5',
    },
  },
  schedule: {
    description:
      'Allows the full representation of a payout by defining a set of schedule periods. It supports standard schedule customization by expressing all the dates, quantities, and pricing data in a non-parametric way.\n',
    type: {
      blueId: 'GbAmo8bxznHkBwFWFP6JMXCQEsWMyu9iKFV2KtBqH1rP',
    },
  },
  settlementTerms: {
    description:
      'Each payout leg must specifies its settlement terms, including the delivery type (i.e. cash vs physical, and their respective terms), the transfer type (DvP etc.) and settlement date, if any.\n',
    type: {
      blueId: '2qfdfn8VYJmiXxmTj9Vwfu1pB3jFJQK9WAShnf8n1r1m',
    },
  },
};
