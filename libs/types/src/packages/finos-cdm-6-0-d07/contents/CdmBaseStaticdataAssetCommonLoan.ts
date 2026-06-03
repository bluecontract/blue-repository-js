export const CdmBaseStaticdataAssetCommonLoan: Record<string, unknown> = {
  borrower: {
    description:
      "Specifies the borrower. There can be more than one borrower. It is meant to be used in the event that there is no Bloomberg Id or the Secured List isn't applicable.\n",
    itemType: {
      blueId: '6LRw3aCeJHKD7qGzs2HvJDoQiMs8QddUf5wSr4oagtuS',
    },
    schema: {
      minItems: 0,
    },
    type: {
      blueId: '8DSFoWG9MqRSUhStqoPLrwVQiYByRh18NWbDEarN8MKF',
    },
  },
  creditAgreementDate: {
    description:
      "Specifies the credit agreement date is the closing date (the date where the agreement has been signed) for the loans in the credit agreement. Funding of the facilities occurs on (or sometimes a little after) the Credit Agreement date. This underlier attribute is used to help identify which of the company's outstanding loans are being referenced by knowing to which credit agreement it belongs. ISDA Standards Terms Supplement term: Date of Original Credit Agreement.\n",
    type: {
      blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
    },
  },
  description:
    'Identifies a loan by referencing an asset identifier and through an optional set of attributes.',
  exchange: {
    description:
      'If the Asset is listed, defines the public exchange of the listing.',
    type: {
      blueId: '6LRw3aCeJHKD7qGzs2HvJDoQiMs8QddUf5wSr4oagtuS',
    },
  },
  facilityType: {
    description:
      'Specifies the type of loan facility (letter of credit, revolving, ...).',
    type: {
      blueId: 'HTDqFgte5VF88dLHnCZMjvyetfxfTAKxf9r8ciErE7Vg',
    },
  },
  identifier: {
    description:
      'Asset Identifiers are used to uniquely identify an Asset, using a specified Asset Identifier Type.',
    itemType: {
      blueId: 'B4oXDUH9jELDatvZSw3oWXtJefJ4ixYawEjxBMqSerth',
    },
    schema: {
      minItems: 1,
    },
    type: {
      blueId: '8DSFoWG9MqRSUhStqoPLrwVQiYByRh18NWbDEarN8MKF',
    },
  },
  instrumentType: {
    description:
      'Identifies the type of an instrument using an enumerated list.',
    type: {
      blueId: 'EmkPx4XLJeffJqq9EbwZicZCxqAhVBpDz1vu6eP1oTYj',
    },
  },
  isExchangeListed: {
    description: 'Defines whether the Asset is listed on a public exchange.',
    type: {
      blueId: 'AwvXD961fmnmqcSQhjMA7r15HpVh39cefb6ZTyUz2Fm2',
    },
  },
  lien: {
    description: 'Specifies the seniority level of the lien.',
    type: {
      blueId: 'HTDqFgte5VF88dLHnCZMjvyetfxfTAKxf9r8ciErE7Vg',
    },
  },
  name: 'cdm/base/staticdata/asset/common/Loan',
  relatedExchange: {
    description: 'Provides the related Exchanges, if applicable.',
    itemType: {
      blueId: '6LRw3aCeJHKD7qGzs2HvJDoQiMs8QddUf5wSr4oagtuS',
    },
    schema: {
      minItems: 0,
    },
    type: {
      blueId: '8DSFoWG9MqRSUhStqoPLrwVQiYByRh18NWbDEarN8MKF',
    },
  },
  taxonomy: {
    description:
      'Defines the taxonomy of an object by combining a taxonomy source (i.e. the rules to classify the object) and a value (i.e. the output of those rules on the object.\n',
    itemType: {
      blueId: '9MYk7MRYjbMWPHe7v3WexZqePowTL8eRrW8TmNNEtzQJ',
    },
    schema: {
      minItems: 0,
    },
    type: {
      blueId: '8DSFoWG9MqRSUhStqoPLrwVQiYByRh18NWbDEarN8MKF',
    },
  },
  tranche: {
    description:
      'Denotes the loan tranche that is subject to the derivative transaction. It will typically be referenced as the Bloomberg tranche number. ISDA Standards Terms Supplement term: Bloomberg Tranche Number.\n',
    type: {
      blueId: 'HTDqFgte5VF88dLHnCZMjvyetfxfTAKxf9r8ciErE7Vg',
    },
  },
};
