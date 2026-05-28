export const CdmProductCollateralCollateralProvisions = {
  collateralType: {
    description:
      'Enumerates the collateral types which are accepted by the Seller.',
    schema: {
      required: {
        type: {
          blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
        },
        value: true,
      },
    },
    type: {
      blueId: 'DZPehsWDuPxFb1C3cSpumhHsTjexDKRzrbgBgFDfYLKH',
    },
  },
  description:
    'Contains collateral attributes which can also inherit information from a GMRA',
  eligibleCollateral: {
    description:
      'The eligible collateral as specified in relation to the transaction.',
    itemType: {
      blueId: '4wYLbmNHssjvkRwDS66pb73SsDArUAfMW2BHtj2dZEkZ',
    },
    schema: {
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
  name: 'cdm/product/collateral/CollateralProvisions',
  substitutionProvisions: {
    description:
      'The provisions for collateral substitutions such as how many and when they are allowed.',
    type: {
      blueId: '5jNLBK4JBUbp17MKjC98nsw6G8uvTkkc3hMW1Ao1P8Kw',
    },
  },
} as const;
