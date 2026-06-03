export const CdmProductTemplateAssetPayout: Record<string, unknown> = {
  assetLeg: {
    description:
      'Defines each asset movement as a buy/sell at different dates, typically 1 near leg and 1 far leg in a securities financing transaction.\n',
    itemType: {
      blueId: '4xmZ7ro4SjPB1Qqi1VDv8EsMmJHKedpeQsvvYum9u8Sn',
    },
    schema: {
      minItems: 1,
    },
    type: {
      blueId: '8DSFoWG9MqRSUhStqoPLrwVQiYByRh18NWbDEarN8MKF',
    },
  },
  description:
    'Security finance payout specification in case the product payout involves some form of security collateral, as in a securities financing transaction. Plus additional description for ICMA.\n',
  dividendTerms: {
    description:
      'Specifies the terms under which dividends received by the borrower are passed through to the lender.',
    type: {
      blueId: 'J4xjdbvJ317WkqdXSfzxaATEcgGQkHQ7btViXDULfhK5',
    },
  },
  minimumFee: {
    description:
      'A contractual minimum amount which the borrower will pay, regardless of the duration of the loan. A mechanism for making sure that a trade generates enough income.\n',
    type: {
      blueId: '7eyr2kXubNSHtLXpHJ9G8NqtmDXLfmDmHQZSkLa9qkyy',
    },
  },
  name: 'cdm/product/template/AssetPayout',
  payerReceiver: {
    description:
      'Canonical representation of the payer and receiver parties applicable to each payout leg.',
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
  tradeType: {
    description: 'The trade type, eg repurchase transaction or buy/sell-back.',
    type: {
      blueId: '8X2WFbGTFXVbc8c7DytjqFNpyyEVGtXoNV8b14t6tRsk',
    },
  },
  underlier: {
    description: 'Specifies the Purchased Asset, usually a Security.',
    schema: {
      required: true,
    },
    type: {
      blueId: '5UGws2rghMXJPsBC2YMTqJQgztQ8nTZm1XTaGkvxheXo',
    },
  },
};
