export const CdmProductTemplateAssetPayout: Record<string, unknown> = {
  assetLeg: {
    description:
      'Defines each asset movement as a buy/sell at different dates, typically 1 near leg and 1 far leg in a securities financing transaction.\n',
    itemType: {
      blueId: 'FEmGevRHj9rp16wVgHUNFerrfjRqr2ApZ9pjc5Z2V257',
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
      blueId: '2usZ27jDqNX8tocgcBm2aUtxwXsoxeBkCJ2eBKpUwPsz',
    },
  },
  minimumFee: {
    description:
      'A contractual minimum amount which the borrower will pay, regardless of the duration of the loan. A mechanism for making sure that a trade generates enough income.\n',
    type: {
      blueId: 'A6JZXX4Rug3aj7cJh48V6FeziSECwFQzyrJ1xUwd9kii',
    },
  },
  name: 'cdm/product/template/AssetPayout',
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
  settlementTerms: {
    description:
      'Each payout leg must specifies its settlement terms, including the delivery type (i.e. cash vs physical, and their respective terms), the transfer type (DvP etc.) and settlement date, if any.\n',
    type: {
      blueId: 'BRJ2J4zKmK8CLQta8gGcSboyer9Sby49nV8HopjaFM7g',
    },
  },
  tradeType: {
    description: 'The trade type, eg repurchase transaction or buy/sell-back.',
    type: {
      blueId: '7Cth9WrMG4PgVPHsC1qhKMqwFeBhAEQSz6QfPtxqVQFR',
    },
  },
  underlier: {
    description: 'Specifies the Purchased Asset, usually a Security.',
    schema: {
      required: true,
    },
    type: {
      blueId: '8CTGmD55ifZ1AAAr4uYZHw9mUCiZ7foMLqYSEUbPVz3Q',
    },
  },
};
