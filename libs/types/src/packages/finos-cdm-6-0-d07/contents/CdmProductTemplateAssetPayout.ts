export const CdmProductTemplateAssetPayout = {
  assetLeg: {
    description:
      'Defines each asset movement as a buy/sell at different dates, typically 1 near leg and 1 far leg in a securities financing transaction.\n',
    itemType: {
      blueId: 'HXa76EzxhXAHLP3yM8iCLC171STC5PBQPhnX4ghaUW4g',
    },
    schema: {
      minItems: {
        type: {
          blueId: '5WNMiV9Knz63B4dVY5JtMyh3FB4FSGqv7ceScvuapdE1',
        },
        value: 1,
      },
    },
    type: {
      blueId: '6aehfNAxHLC1PHHoDr3tYtFH3RWNbiWdFancJ1bypXEY',
    },
  },
  description:
    'Security finance payout specification in case the product payout involves some form of security collateral, as in a securities financing transaction. Plus additional description for ICMA.\n',
  dividendTerms: {
    description:
      'Specifies the terms under which dividends received by the borrower are passed through to the lender.',
    type: {
      blueId: 'GWSnFb8ZSatiW9mUTcxJWEZCkQ5KmTdEqcJ45uRZ1P81',
    },
  },
  minimumFee: {
    description:
      'A contractual minimum amount which the borrower will pay, regardless of the duration of the loan. A mechanism for making sure that a trade generates enough income.\n',
    type: {
      blueId: '5RCy7NwpdTs7j96evsc93hof8nESXDM5u4q3ykG6dXvE',
    },
  },
  name: 'cdm/product/template/AssetPayout',
  payerReceiver: {
    description:
      'Canonical representation of the payer and receiver parties applicable to each payout leg.',
    type: {
      blueId: 'Cx2eHN58eqWKXnZwn6JDYBzAfG95QSEAWjQhbX1R5An3',
    },
  },
  priceQuantity: {
    description:
      "Each payout leg must implement the quantity concept as a 'resolvable' type, which allows for different payout legs to be linked to each other (e.g. in the case of cross-curreny products).\n",
    type: {
      blueId: 'F4ihqR7D44ZpGGutb98mpsdE6QNtkrVZM4oiK6Vuzcsy',
    },
  },
  principalPayment: {
    description:
      'The specification of the principal exchange. Optional as only applicable in the case of cross-currency or zero-coupon swaps with a final payment.\n',
    type: {
      blueId: '79fSZCgPXnnm5bsD9s4XCQXn5MaCb8UAVq6ybHFbLdpq',
    },
  },
  settlementTerms: {
    description:
      'Each payout leg must specifies its settlement terms, including the delivery type (i.e. cash vs physical, and their respective terms), the transfer type (DvP etc.) and settlement date, if any.\n',
    type: {
      blueId: '7zkmbj4175pTZ3exYCBnCyVdiSaAT2SEfkxhDTus8iLY',
    },
  },
  tradeType: {
    description: 'The trade type, eg repurchase transaction or buy/sell-back.',
    type: {
      blueId: 'H9K4V7vLZdWh8Vfqst6t9NiRAX6Ho6M8oZqFtojWhczK',
    },
  },
  underlier: {
    description: 'Specifies the Purchased Asset, usually a Security.',
    schema: {
      required: {
        type: {
          blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
        },
        value: true,
      },
    },
    type: {
      blueId: 'B3bsNNAr8QJpJA8r84kgZrHLE5PZREBGxXWYJdtaDRJ7',
    },
  },
} as const;
