export const CdmProductCollateralAgencyRatingCriteria: Record<string, unknown> =
  {
    boundary: {
      description:
        'Indicates the boundary of a credit agency rating i.e minimum or maximum.',
      type: {
        blueId: 'EGpvPDYUy6WpBH4kNy693iBCzvTxxufSoJNuPsWaeJnc',
      },
    },
    creditNotation: {
      description:
        'Indicates the agency rating criteria specified for the asset or issuer.',
      schema: {
        required: true,
      },
      type: {
        blueId: 'EQxsMYMc9VvECVVKm2ZJuGuMzgL8yDytdszpjwY14Yy1',
      },
    },
    description: 'Represents a class to specify a credit notation.',
    mismatchResolution: {
      description:
        'Indicator for options to be used if several agency ratings (>1) are specified and its necessary to identify specific charateristics. i.e (lowest or highest).\n',
      type: {
        blueId: 'DRzBA7DNKGx3x57DdS7v8C2BBHL55ia9a7Sqzx7r5Qr7',
      },
    },
    name: 'cdm/product/collateral/AgencyRatingCriteria',
    referenceAgency: {
      description:
        'identifies the dominant reference agency if there is a missmatch and several reference agencies exsist.',
      type: {
        blueId: 'D1H3C3xAMJv2XQNBYfethSUKDH7kngUkefwbzLwVLW1i',
      },
    },
  };
