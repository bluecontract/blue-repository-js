export const CdmProductCollateralCheckEligibilityResult: Record<
  string,
  unknown
> = {
  description:
    'Result for the CheckEligibilityByDetails and CheckEligibilityForProduct functions',
  eligibilityQuery: {
    description:
      'a copy of the input query that was checked against the eligible collateral specification',
    schema: {
      required: true,
    },
    type: {
      blueId: 'EqeLySr1GukguPVVt5XqDUVQFVenWZYySiuo6qQbQ3pT',
    },
  },
  isEligible: {
    description:
      'a simple boolean which is set to true if the asset described in the EligibilityQuery input is eligible',
    schema: {
      required: true,
    },
    type: {
      blueId: 'AwvXD961fmnmqcSQhjMA7r15HpVh39cefb6ZTyUz2Fm2',
    },
  },
  matchingEligibleCriteria: {
    description:
      'if there was a match, this will be the one or more criteria that were supplied in the EligbilityCollateralSpecification which matched with the query input\n',
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
  name: 'cdm/product/collateral/CheckEligibilityResult',
  specification: {
    description:
      'a copy of the input EligbilityCollateralSpecification that was checked against the query',
    schema: {
      required: true,
    },
    type: {
      blueId: '95Kqzip4NxUfKxtGutCfDtBUDLMZhWmnm6jhQZJtfzXj',
    },
  },
};
