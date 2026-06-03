export const CdmProductAssetGeneralTerms: Record<string, unknown> = {
  additionalTerm: {
    description:
      'This attribute is used for representing information contained in the Additional Terms field of the 2003 Master Credit Derivatives confirm.\n',
    itemType: {
      blueId: 'HTDqFgte5VF88dLHnCZMjvyetfxfTAKxf9r8ciErE7Vg',
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
      blueId: 'axuXmPNwYdajJqoyfRBqGLYdVR7pu272ceY2KqBq9nB',
    },
  },
  description:
    'A class specifying a set of non-monetary terms for the Credit Derivative Transaction, including the buyer and seller and selected items from the ISDA 2014 Credit Definition article II, such as the reference obligation and related terms. The CDM GeneralTerms class corresponds to the FpML GeneralTerms complex type, except that the effectiveDate and scheduledTerminationDate have been positioned as part of the InterestRatePayout class in the CDM instead of in GeneralTerms.\n',
  indexReferenceInformation: {
    description:
      'This attribute contains all the terms relevant to the underlying Index.',
    type: {
      blueId: 'EXhnZXqvEcgXZrY2VK9WqgZz87y5NwxZ4axscyrAeSBv',
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
      blueId: '3eDfhc11LMfKiQsRKqD5mkN3csaNKJ4Yay8qPTE3sM5f',
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
