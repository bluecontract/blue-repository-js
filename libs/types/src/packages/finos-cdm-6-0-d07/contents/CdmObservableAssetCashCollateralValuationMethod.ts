export const CdmObservableAssetCashCollateralValuationMethod = {
  agreedDiscountRate: {
    description:
      'This may be used to indicate the discount rate to be used for cash collateral for cash settlement purposes.',
    type: {
      blueId: 'F5GfdsSNcjLAm9anbfMQqxdxAFonErhU5UXFbQzq1zXY',
    },
  },
  applicableCsa: {
    description:
      'This may be used to specify what type of CSA (credit support annex/agreement) is to be used for cash settlement purposes.\n',
    type: {
      blueId: '6aL4Uv72Kn3HLmR96RGbWs3RSBXaDcEwYRYpCFoCFJ1s',
    },
  },
  cashCollateralCurrency: {
    description:
      'This may be used to indicate the currency of cash collateral for cash settlement purposes.',
    type: {
      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
    },
  },
  cashCollateralInterestRate: {
    description:
      'This may be used to indicate the interest rate to be used for cash collateral for cash settlement purposes.',
    type: {
      blueId: 'F5GfdsSNcjLAm9anbfMQqxdxAFonErhU5UXFbQzq1zXY',
    },
  },
  description:
    'This type is a generic structure that can represent the parameters of several mid-market valuation and replacement value methods described in the 2021 ISDA Definitions.\n',
  name: 'cdm/observable/asset/CashCollateralValuationMethod',
  prescribedDocumentationAdjustment: {
    description:
      "This may be used to indicate that 'prescribed documentation adjustment' is applicable.",
    type: {
      blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
    },
  },
  protectedParty: {
    description:
      'This may be used to specify which party is protected (e.g. under Replacement Value cash settlement methods).',
    itemType: {
      blueId: 'Gx6tnCEperfB7Xg7wHbZx5dSuf9AEGb5zk5PdoPPbSKQ',
    },
    schema: {
      maxItems: {
        type: {
          blueId: '5WNMiV9Knz63B4dVY5JtMyh3FB4FSGqv7ceScvuapdE1',
        },
        value: 2,
      },
      minItems: {
        type: {
          blueId: '5WNMiV9Knz63B4dVY5JtMyh3FB4FSGqv7ceScvuapdE1',
        },
        value: 0,
      },
    },
    type: {
      blueId: '6aehfNAxHLC1PHHoDr3tYtFH3RWNbiWdFancJ1bypXEY',
    },
  },
} as const;
