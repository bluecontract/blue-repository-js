export const CdmProductAssetReferenceInformation: Record<string, unknown> = {
  allGuarantees: {
    description:
      'Indicates whether an obligation of the Reference Entity, guaranteed by the Reference Entity on behalf of a non-Affiliate, is to be considered an Obligation for the purpose of the transaction. It will be considered an obligation if allGuarantees is applicable (true) and not if allGuarantees is inapplicable (false). ISDA 2003 Term: All Guarantees.\n',
    type: {
      blueId: 'AwvXD961fmnmqcSQhjMA7r15HpVh39cefb6ZTyUz2Fm2',
    },
  },
  description:
    'A class specifying the Credit Default Swap Reference Information.',
  name: 'cdm/product/asset/ReferenceInformation',
  noReferenceObligation: {
    description:
      'Used to indicate that there is no Reference Obligation associated with this Credit Default Swap and that there will never be one.\n',
    type: {
      blueId: 'AwvXD961fmnmqcSQhjMA7r15HpVh39cefb6ZTyUz2Fm2',
    },
  },
  referenceEntity: {
    description:
      'The corporate or sovereign entity which is subject to the swap transaction and any successor that assumes all or substantially all of its contractual and other obligations. Reference Entities cannot be senior or subordinated. It is the obligations of the Reference Entities that can be senior or subordinated. ISDA 2014 Credit definitions article II section 2.1: `Reference Entity` means the entity specified as such in the related Confirmation.\n',
    schema: {
      required: true,
    },
    type: {
      blueId: '6LRw3aCeJHKD7qGzs2HvJDoQiMs8QddUf5wSr4oagtuS',
    },
  },
  referenceObligation: {
    description:
      'The Reference Obligation is a financial instrument that is either issued or guaranteed by the reference entity. It serves to clarify the precise reference entity protection is being offered upon, and its legal position with regard to other related firms (parents/subsidiaries). Furthermore the Reference Obligation is ALWAYS deliverable and establishes the Pari Passu ranking (as the deliverable bonds must rank equal to the reference obligation). ISDA 2003 Term: Reference Obligation.\n',
    itemType: {
      blueId: 'Bv5sBf6gMTS32hBro1iBzhNmGnSuqD84Wfc4EqRV4Whg',
    },
    schema: {
      minItems: 0,
    },
    type: {
      blueId: '8DSFoWG9MqRSUhStqoPLrwVQiYByRh18NWbDEarN8MKF',
    },
  },
  referencePolicy: {
    description:
      "Applicable to the transactions on mortgage-backed security, which can make use of a reference policy. Presence of the element with value set to 'true' indicates that the reference policy is applicable; absence implies that it is not.\n",
    type: {
      blueId: 'AwvXD961fmnmqcSQhjMA7r15HpVh39cefb6ZTyUz2Fm2',
    },
  },
  referencePrice: {
    description:
      'Used to determine (a) for physically settled trades, the Physical Settlement Amount, which equals the Floating Rate Payer Calculation Amount times the Reference Price and (b) for cash settled trades, the Cash Settlement Amount, which equals the greater of (i) the difference between the Reference Price and the Final Price and (ii) zero. ISDA 2003 Term: Reference Price.\n',
    type: {
      blueId: 'GLmQaa2vVZKjaht1sNMcUL55xfAgWQxpj5ENxwvVRvsm',
    },
  },
  securedList: {
    description:
      "With respect to any day, the list of Syndicated Secured Obligations of the Designated Priority of the Reference Entity published by Markit Group Limited or any successor thereto appointed by the Specified Dealers (the 'Secured List Publisher') on or most recently before such day, which list is currently available at [http://www.markit.com]. ISDA 2003 Term: Relevant Secured List.\n",
    type: {
      blueId: 'AwvXD961fmnmqcSQhjMA7r15HpVh39cefb6ZTyUz2Fm2',
    },
  },
  unknownReferenceObligation: {
    description:
      'Used to indicate that the Reference obligation associated with the Credit Default Swap is currently not known. This is not valid for Legal Confirmation purposes, but is valid for earlier stages in the trade life cycle (e.g. Broker Confirmation).\n',
    type: {
      blueId: 'AwvXD961fmnmqcSQhjMA7r15HpVh39cefb6ZTyUz2Fm2',
    },
  },
};
