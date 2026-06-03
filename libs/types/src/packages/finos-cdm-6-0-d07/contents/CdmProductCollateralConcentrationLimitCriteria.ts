export const CdmProductCollateralConcentrationLimitCriteria: Record<
  string,
  unknown
> = {
  appliesTo: {
    description:
      'Specifies which of the two counterparties the criteria applies to (either one or both counterparties). This attribute is optional, in case the applicable party is already specified elsewhere within a party election.\n',
    itemType: {
      blueId: '6RRexSdxduLUUJjoAGhNuhXszw24mwyTFrHtwAqU2SDG',
    },
    schema: {
      maxItems: 2,
      minItems: 0,
    },
    type: {
      blueId: '8DSFoWG9MqRSUhStqoPLrwVQiYByRh18NWbDEarN8MKF',
    },
  },
  averageTradingVolume: {
    description:
      'Specifies an average trading volume on an exchange in relation to Equity products.',
    type: {
      blueId: '6fscFVW5aHmtMRKjEQ93zMSWd6uq8CvM8i8Zkvtjbm5d',
    },
  },
  collateralCriteria: {
    description:
      'The specific criteria that applies. It can be created using AND, OR and NOT logic, and both asset and issuer characteristics.\n',
    type: {
      blueId: 'HGtVL5zUGD9Z8S6VLuBSEyhaVDP2h8eWzt5te5sS8iTo#1',
    },
  },
  concentrationLimitType: {
    description: 'Specifies the type of concentration limit to be applied.',
    type: {
      blueId: '97mmS2fJNEvvd9MB3p3a9VwsSgF8QN5MXMCg3hQhQ9EG',
    },
  },
  description:
    'Respresents a class to describe a set of criteria to describe specific assets that the concentration limits apply to.\n',
  name: 'cdm/product/collateral/ConcentrationLimitCriteria',
  ratingPriorityResolution: {
    description:
      'Denotes which Criteria has priority if more than one agency rating applies.',
    type: {
      blueId: 'HN2xCyqgWdVYt6ta4R5o6we7NmT9i49Jn2V5R4V9BoCD',
    },
  },
  restrictTo: {
    description:
      'Restrict the criteria to only apply to a specific type of margin, ie IM or VM.',
    type: {
      blueId: '9z1L9Ava1wYq6jxK5Q25w3DTwEhKhZHbY9XE9NZCutvJ',
    },
  },
};
