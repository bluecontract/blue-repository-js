export const CdmProductCollateralAgencyRatingCriteria = {
  boundary: {
    description:
      'Indicates the boundary of a credit agency rating i.e minimum or maximum.',
    type: {
      blueId: '3tMLCZ3MJxBYvVqoBVK5jgsre5azRP9dXQk3ek6NGhQE',
    },
  },
  creditNotation: {
    description:
      'Indicates the agency rating criteria specified for the asset or issuer.',
    schema: {
      required: {
        type: {
          blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
        },
        value: true,
      },
    },
    type: {
      blueId: '32asBc8ZWx9istLdot48ciBYnh6kd2GHf6nLVWkjkA8Z',
    },
  },
  description: 'Represents a class to specify a credit notation.',
  mismatchResolution: {
    description:
      'Indicator for options to be used if several agency ratings (>1) are specified and its necessary to identify specific charateristics. i.e (lowest or highest).\n',
    type: {
      blueId: '8jUUnEg4y5rth3zGXqPDihqz397GjFwaQQYfvUR7VVKU',
    },
  },
  name: 'cdm/product/collateral/AgencyRatingCriteria',
  referenceAgency: {
    description:
      'identifies the dominant reference agency if there is a missmatch and several reference agencies exsist.',
    type: {
      blueId: 'BFNEhsfLPvMSawMY6Q3SUpNzPsjYgQEKYmUQrD92UE4r',
    },
  },
} as const;
