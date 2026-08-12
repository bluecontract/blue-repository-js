export const CdmProductCollateralCollateralCriteriaBase: Record<
  string,
  unknown
> = {
  appliesTo: {
    description:
      'Specifies which of the two counterparties the criteria applies to (either one or both counterparties). This attribute is optional, in case the applicable party is already specified elsewhere within a party election.\n',
    itemType: {
      blueId: '7qRfgFBAefYQ37ztmK2dW9i4twZzBjKcQiHPeHrcRtYw',
    },
    schema: {
      maxItems: 2,
      minItems: 0,
    },
    type: {
      blueId: '8DSFoWG9MqRSUhStqoPLrwVQiYByRh18NWbDEarN8MKF',
    },
  },
  collateralCriteria: {
    description:
      'The specific criteria that applies. It can be created using AND, OR and NOT logic, and both asset and issuer characteristics.\n',
    schema: {
      required: true,
    },
    type: {
      blueId: '5WkYngyEgPaS9dUTxxGMq3Lc9q4xBSngbTULcPneCHJX#0',
    },
  },
  description:
    'Represents a set of criteria used to specify and describe collateral.',
  name: 'cdm/product/collateral/CollateralCriteriaBase',
  ratingPriorityResolution: {
    description:
      'Denotes which Criteria has priority if more than one agency rating applies.',
    type: {
      blueId: 'AMBUQNHCXi6XdCd6ShsWvqydCwqyR1LjyMiUGZjzHvsu',
    },
  },
  restrictTo: {
    description:
      'Restrict the criteria to only apply to a specific type of margin, ie IM or VM.',
    type: {
      blueId: 'Ce3ciQcLKDEJNBNLKJ7ZQ1woFjqogy7nsbLP99TxETXf',
    },
  },
};
