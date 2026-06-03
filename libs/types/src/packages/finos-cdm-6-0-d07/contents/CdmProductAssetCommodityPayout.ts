export const CdmProductAssetCommodityPayout: Record<string, unknown> = {
  averagingFeature: {
    description:
      'Indicates if the averaging calculation, when applicable, is weighted or unweighted.',
    type: {
      blueId: 'G81eqYsDuMYSpYk1hESW7JLhMtsEbDs8dVTux7zmXLUZ',
    },
  },
  calculationPeriodDates: {
    description: 'Defines the calculation period dates schedule.',
    type: {
      blueId: '7dK86pbyNfhuuigQR5bQueaqH68Sqze66Qwad2m64rxg',
    },
  },
  commodityPriceReturnTerms: {
    description: 'Defines parameters in which the commodity price is assessed.',
    type: {
      blueId: '14FV7tMj4HrFn5mGMxp1ip6AhhhvTsLR6FH1eXyL6Ts9',
    },
  },
  delivery: {
    description:
      'Contains the information relative to the delivery of the asset.',
    type: {
      blueId: '78abSDet2v5nbbeXAmoFZG2ZcMhk4674b2vrAKGT3yiu',
    },
  },
  description:
    'Payout based on the averaged price of a referenced underlier. (e.g. Commodities). Can represent both average (average of many) & bullet (average of 1) pricing\n',
  fxFeature: {
    description:
      'Defines quanto or composite FX features that are included in the swap leg.',
    type: {
      blueId: 'HPRsaReKQuhsZQyFweRGJshuiWo9hd1r6CsmkM6iPQnN',
    },
  },
  name: 'cdm/product/asset/CommodityPayout',
  payerReceiver: {
    description:
      'Canonical representation of the payer and receiver parties applicable to each payout leg.',
    type: {
      blueId: '3xPof2WJyFXisFtvaxpSGddTxHyGioazbsMJjuUucbzT',
    },
  },
  paymentDates: {
    description:
      'Defines the payment date schedule, as defined by the parameters that are needed to specify it, either in a parametric way or by reference to another schedule of dates (e.g. the valuation dates).\n',
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
  pricingDates: {
    description:
      'Specifies specific dates or parametric rules for the dates on which the price will be determined.',
    schema: {
      required: true,
    },
    type: {
      blueId: '2MAF9GVz5RtZKjkk4so3hxRXrU2WZSs92BQ1bUeT9CDa',
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
  underlier: {
    description:
      "Identifies the underlying product that is referenced for pricing of the applicable leg in a swap. Referenced in the '2018 ISDA CDM Equity Confirmation for Security Equity Swap' as Security.\n",
    schema: {
      required: true,
    },
    type: {
      blueId: 'this#3',
    },
  },
};
