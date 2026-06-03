export const CdmProductCommonSettlementPayoutBase: Record<string, unknown> = {
  description:
    'A data type that contains the common attributes (e.g. payer and receiver parties) and validation conditions that apply across all payout types\n',
  name: 'cdm/product/common/settlement/PayoutBase',
  payerReceiver: {
    description:
      'Canonical representation of the payer and receiver parties applicable to each payout leg.',
    schema: {
      required: true,
    },
    type: {
      blueId: '3xPof2WJyFXisFtvaxpSGddTxHyGioazbsMJjuUucbzT',
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
  settlementTerms: {
    description:
      'Each payout leg must specifies its settlement terms, including the delivery type (i.e. cash vs physical, and their respective terms), the transfer type (DvP etc.) and settlement date, if any.\n',
    type: {
      blueId: '2qfdfn8VYJmiXxmTj9Vwfu1pB3jFJQK9WAShnf8n1r1m',
    },
  },
};
