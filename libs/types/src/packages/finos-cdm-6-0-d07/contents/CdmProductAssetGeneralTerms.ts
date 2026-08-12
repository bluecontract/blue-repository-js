export const CdmProductAssetGeneralTerms: Record<string, unknown> = {
  additionalTerm: {
    description:
      'This attribute is used for representing information contained in the Additional Terms field of the 2003 Master Credit Derivatives confirm.\n',
    itemType: {
      blueId: 'HvrBWWRL9WzJPU9bs48T3Uf9CcUgCfqtEszZPN3tYS3n',
    },
    schema: {
      minItems: 0,
    },
    type: {
      blueId: '8DSFoWG9MqRSUhStqoPLrwVQiYByRh18NWbDEarN8MKF',
    },
  },
  basketReferenceInformation: {
    description:
      'This attribute contains all the terms relevant to defining the Credit Default Swap Basket.',
    type: {
      blueId: 'FwJbaG1Nf59WekW7F1zPr4niKBtDp8hYgwiM6JE7zaDr',
    },
  },
  description:
    'A class specifying a set of non-monetary terms for the Credit Derivative Transaction, including the buyer and seller and selected items from the ISDA 2014 Credit Definition article II, such as the reference obligation and related terms. The CDM GeneralTerms class corresponds to the FpML GeneralTerms complex type, except that the effectiveDate and scheduledTerminationDate have been positioned as part of the InterestRatePayout class in the CDM instead of in GeneralTerms.\n',
  indexReferenceInformation: {
    description:
      'This attribute contains all the terms relevant to the underlying Index.',
    type: {
      blueId: 'B9M4cKALDcyfwfopEL2hETJTezx4P3PypYFiJT7oP8PX',
    },
  },
  modifiedEquityDelivery: {
    description:
      "Value of this attribute set to 'true' indicates that modified equity delivery is applicable.",
    type: {
      blueId: 'AwvXD961fmnmqcSQhjMA7r15HpVh39cefb6ZTyUz2Fm2',
    },
  },
  name: 'cdm/product/asset/GeneralTerms',
  referenceInformation: {
    description:
      'This attribute contains all the terms relevant to defining the reference entity and reference obligation(s).',
    type: {
      blueId: 'Aogoj2sCUGRvYLZhVJNntPd3rKjX5XU82C9NYKGNG6EH',
    },
  },
  substitution: {
    description:
      "Value of this attribute set to 'true' indicates that substitution is applicable.",
    type: {
      blueId: 'AwvXD961fmnmqcSQhjMA7r15HpVh39cefb6ZTyUz2Fm2',
    },
  },
};
