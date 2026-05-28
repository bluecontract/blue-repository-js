export const CdmProductCollateralEligibleCollateralCriteria = {
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
  collateralCriteria: {
    description:
      'The specific criteria that applies. It can be created using AND, OR and NOT logic, and both asset and issuer characteristics.\n',
    type: {
      blueId: 'FriZV1WqZYyqDSVgQuWAWwgxAjAcBjGrzBtX5z1e7ZFZ#0',
    },
  },
  description:
    'Represents a set of criteria used to specify eligible collateral.',
  name: 'cdm/product/collateral/EligibleCollateralCriteria',
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
  treatment: {
    description:
      'Identifies the treatment of specified collateral, e.g., haircuts,holding limits or exclusions.',
    schema: {
      required: {
        type: {
          blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
        },
        value: true,
      },
    },
    type: {
      blueId: 'BL9z4RShUcNi4oWpkU2pgnaKF2vGwrxjpJBWWMAUruzN',
    },
  },
} as const;
