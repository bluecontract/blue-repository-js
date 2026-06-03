export const CdmProductCommonSettlementPhysicalSettlementPeriod: Record<
  string,
  unknown
> = {
  businessDays: {
    description:
      'A number of business days. Its precise meaning is dependant on the context in which this element is used. ISDA 2003 Term: Business Day.\n',
    type: {
      blueId: 'E2LM6qgzWG9ttagq2xTmiZkgYEAgkYedFCmU9v7NnVEq',
    },
  },
  businessDaysNotSpecified: {
    description:
      'An explicit indication that a number of business days are not specified and therefore ISDA fallback provisions should apply.\n',
    type: {
      blueId: 'AwvXD961fmnmqcSQhjMA7r15HpVh39cefb6ZTyUz2Fm2',
    },
  },
  maximumBusinessDays: {
    description:
      'A maximum number of business days. Its precise meaning is dependant on the context in which this element is used. Intended to be used to limit a particular ISDA fallback provision.\n',
    type: {
      blueId: 'E2LM6qgzWG9ttagq2xTmiZkgYEAgkYedFCmU9v7NnVEq',
    },
  },
  name: 'cdm/product/common/settlement/PhysicalSettlementPeriod',
};
