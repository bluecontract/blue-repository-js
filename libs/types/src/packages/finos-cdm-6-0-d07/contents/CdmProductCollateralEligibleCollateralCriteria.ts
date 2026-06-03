export const CdmProductCollateralEligibleCollateralCriteria: Record<
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
  collateralCriteria: {
    description:
      'The specific criteria that applies. It can be created using AND, OR and NOT logic, and both asset and issuer characteristics.\n',
    type: {
      blueId: 'HGtVL5zUGD9Z8S6VLuBSEyhaVDP2h8eWzt5te5sS8iTo#1',
    },
  },
  description:
    'Represents a set of criteria used to specify eligible collateral.',
  name: 'cdm/product/collateral/EligibleCollateralCriteria',
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
  treatment: {
    description:
      'Identifies the treatment of specified collateral, e.g., haircuts,holding limits or exclusions.',
    schema: {
      required: true,
    },
    type: {
      blueId: '3J8QUqU5781wEZ91F9Y7a1CUz2EihFL2b3SWBCB1FBth',
    },
  },
};
