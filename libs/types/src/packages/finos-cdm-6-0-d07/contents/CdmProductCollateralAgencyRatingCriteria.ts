export const CdmProductCollateralAgencyRatingCriteria: Record<string, unknown> =
  {
    boundary: {
      description:
        'Indicates the boundary of a credit agency rating i.e minimum or maximum.',
      type: {
        blueId: 'D2oJ9QPeiZWktpNjjfSdXqVURAMCL8SdSfCjyMWBeTjs',
      },
    },
    creditNotation: {
      description:
        'Indicates the agency rating criteria specified for the asset or issuer.',
      schema: {
        required: true,
      },
      type: {
        blueId: '6DvMxWSu8NPPjxcsnCkgPnNoAfxF9WCaA14A1Gd6fLG6',
      },
    },
    description: 'Represents a class to specify a credit notation.',
    mismatchResolution: {
      description:
        'Indicator for options to be used if several agency ratings (>1) are specified and its necessary to identify specific charateristics. i.e (lowest or highest).\n',
      type: {
        blueId: '3xGR5MinWeBBiGacxvPvEYBQ4EV4NjiAp6xvgENeLDVe',
      },
    },
    name: 'cdm/product/collateral/AgencyRatingCriteria',
    referenceAgency: {
      description:
        'identifies the dominant reference agency if there is a missmatch and several reference agencies exsist.',
      type: {
        blueId: '21xGvoNnChKXaDXVNTEgYY1eJr849T5okU3aXsrCK2PB',
      },
    },
  };
