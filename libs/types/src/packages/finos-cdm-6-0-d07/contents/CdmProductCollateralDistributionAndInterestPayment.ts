export const CdmProductCollateralDistributionAndInterestPayment = {
  description:
    'A class to specify the Distributions and Interest Payment provisions applicable to the collateral agreement.',
  interestParameters: {
    description:
      'Represents the interest parameters for the various currencies, margin types, posting parties.',
    itemType: {
      blueId: '5rPzzyeLok543pSmRaRgtJQh7E6qcVWqmPgrgji6Avv2',
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
  name: 'cdm/product/collateral/DistributionAndInterestPayment',
} as const;
