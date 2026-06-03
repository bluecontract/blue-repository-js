export const CdmProductCollateralCollateralProvisions: Record<string, unknown> =
  {
    collateralType: {
      description:
        'Enumerates the collateral types which are accepted by the Seller.',
      schema: {
        required: true,
      },
      type: {
        blueId: 'HNcaEBRQkyoWFVGH1rA32NFXn4vu5wVaftRYmaKr4FMa',
      },
    },
    description:
      'Contains collateral attributes which can also inherit information from a GMRA',
    eligibleCollateral: {
      description:
        'The eligible collateral as specified in relation to the transaction.',
      itemType: {
        blueId: '3GcdhwSwCmcXjxmxraErSqcv6hktXM5krtm5PeusABq6',
      },
      schema: {
        minItems: 0,
      },
      type: {
        blueId: '8DSFoWG9MqRSUhStqoPLrwVQiYByRh18NWbDEarN8MKF',
      },
    },
    name: 'cdm/product/collateral/CollateralProvisions',
    substitutionProvisions: {
      description:
        'The provisions for collateral substitutions such as how many and when they are allowed.',
      type: {
        blueId: 'G6wTgdqazh3P4ppaphmfLKqmekudYnsS5TDSKnzhiCYi',
      },
    },
  };
