export const CdmProductCollateralCollateralProvisions: Record<string, unknown> =
  {
    collateralType: {
      description:
        'Enumerates the collateral types which are accepted by the Seller.',
      schema: {
        required: true,
      },
      type: {
        blueId: 'GSjWmYnJWmuti33vdJxHGDSFHJugrsJ7cM3wCiay7Guc',
      },
    },
    description:
      'Contains collateral attributes which can also inherit information from a GMRA',
    eligibleCollateral: {
      description:
        'The eligible collateral as specified in relation to the transaction.',
      itemType: {
        blueId: 'Dd4QK5kmBzsGcmhcqxkLLPiH2fBmE3acTHCBGWUW5Buq',
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
        blueId: 'Dz3MiMnz2rTB4ZLx32vq9C8dXnxfvUTnX8brry1cDos8',
      },
    },
  };
