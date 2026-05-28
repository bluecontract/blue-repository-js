export const CdmProductCollateralConcentrationLimitCriteria = {
  appliesTo: {
    description:
      'Specifies which of the two counterparties the criteria applies to (either one or both counterparties). This attribute is optional, in case the applicable party is already specified elsewhere within a party election.\n',
    itemType: {
      blueId: '6x12g8enT8MoRfSx5A65GDeBhgNsaewRCdXG5hsioGmL',
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
  averageTradingVolume: {
    description:
      'Specifies an average trading volume on an exchange in relation to Equity products.',
    type: {
      blueId: '58o5oEHw5suowY8qW1qPwFwvjEWhvEosaggAnTkfqHUm',
    },
  },
  collateralCriteria: {
    description:
      'The specific criteria that applies. It can be created using AND, OR and NOT logic, and both asset and issuer characteristics.\n',
    type: {
      blueId: 'FriZV1WqZYyqDSVgQuWAWwgxAjAcBjGrzBtX5z1e7ZFZ#0',
    },
  },
  concentrationLimitType: {
    description: 'Specifies the type of concentration limit to be applied.',
    type: {
      blueId: '12eAkteKQP3QRJHzFcoKpMYpGiRWkbuRMJSY7ZSMmsBi',
    },
  },
  description:
    'Respresents a class to describe a set of criteria to describe specific assets that the concentration limits apply to.\n',
  name: 'cdm/product/collateral/ConcentrationLimitCriteria',
  ratingPriorityResolution: {
    description:
      'Denotes which Criteria has priority if more than one agency rating applies.',
    type: {
      blueId: 'EM2cuboURhKvNDFYAA6NaucjpnUHYb2s4CKVEyrAt3nK',
    },
  },
  restrictTo: {
    description:
      'Restrict the criteria to only apply to a specific type of margin, ie IM or VM.',
    type: {
      blueId: 'S4kLcw9up81q3TNVMZRCthznJz71LuEpiPLPWh1MJ87',
    },
  },
} as const;
