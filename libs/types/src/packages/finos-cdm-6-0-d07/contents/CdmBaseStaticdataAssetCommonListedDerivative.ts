export const CdmBaseStaticdataAssetCommonListedDerivative: Record<
  string,
  unknown
> = {
  deliveryTerm: {
    description:
      "Also called contract month or delivery month. However, it's not always a month. It is usually expressed using a code, e.g. Z23 would be the Dec 2023 contract, (Z = December). For crude oil, the corresponding contract might be called CLZ23. Optional as this can be uniquely identified in the identifier.\n",
    type: {
      blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
    },
  },
  description: 'A securitized derivative on another asset.',
  exchange: {
    description:
      'If the Asset is listed, defines the public exchange of the listing.',
    type: {
      blueId: '6LRw3aCeJHKD7qGzs2HvJDoQiMs8QddUf5wSr4oagtuS',
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
  name: 'cdm/base/staticdata/asset/common/ListedDerivative',
  optionType: {
    description:
      'The type of option, ie Put or Call. Left empty if it is a Future.',
    type: {
      blueId: '4fBHTQQgpt7zfCdmZdM8xKEqaXQv24aeBbn7p8bid744',
    },
  },
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
  strike: {
    description: 'Specifies the strike of the option.',
    type: {
      blueId: '9eWaHYz2vKrFofdHTHAizNNu8xP6QE3WQ5y7DGrGZvyJ',
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
};
