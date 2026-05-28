export const CdmProductCollateralCheckEligibilityResult = {
  description:
    'Result for the CheckEligibilityByDetails and CheckEligibilityForProduct functions',
  eligibilityQuery: {
    description:
      'a copy of the input query that was checked against the eligible collateral specification',
    schema: {
      required: {
        type: {
          blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
        },
        value: true,
      },
    },
    type: {
      blueId: 'BnjZSXrPHPuuzDKnKtzYoNPSNR9RwaZyNpnHHx1MnsY8',
    },
  },
  isEligible: {
    description:
      'a simple boolean which is set to true if the asset described in the EligibilityQuery input is eligible',
    schema: {
      required: {
        type: {
          blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
        },
        value: true,
      },
    },
    type: {
      blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
    },
  },
  matchingEligibleCriteria: {
    description:
      'if there was a match, this will be the one or more criteria that were supplied in the EligbilityCollateralSpecification which matched with the query input\n',
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
  name: 'cdm/product/collateral/CheckEligibilityResult',
  specification: {
    description:
      'a copy of the input EligbilityCollateralSpecification that was checked against the query',
    schema: {
      required: {
        type: {
          blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
        },
        value: true,
      },
    },
    type: {
      blueId: '3L89wYhXf68oUZTeBkXQnsfBZCox4PN1dZWV9BcQzfdu',
    },
  },
} as const;
