export const CdmObservableAssetForeignExchangeRateIndex: Record<
  string,
  unknown
> = {
  assetClass: {
    description: 'The Asset Class of the Index.',
    type: {
      blueId: '7TQnexn6ZGhptp1EP3RxiJM3434J7VHgDn7cvqXRvfvh',
    },
  },
  description:
    'Specification of a rate based on the exchange of a pair of cash assets in specific currencies, e.g. USD versus GBP.\n',
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
  isExchangeListed: {
    description: 'Defines whether the Asset is listed on a public exchange.',
    type: {
      blueId: 'AwvXD961fmnmqcSQhjMA7r15HpVh39cefb6ZTyUz2Fm2',
    },
  },
  name: 'cdm/observable/asset/ForeignExchangeRateIndex',
  primaryFxSpotRateSource: {
    description:
      'Specifies the primary source from which a rate should be observed.',
    schema: {
      required: true,
    },
    type: {
      blueId: '5x9dr8ixBaX8QXWdiNGeuyFn1GS9wN5xkpfrxHhKLC2y',
    },
  },
  provider: {
    description: 'The organisation that creates or maintains the Index.',
    type: {
      blueId: '6LRw3aCeJHKD7qGzs2HvJDoQiMs8QddUf5wSr4oagtuS',
    },
  },
  quotedCurrencyPair: {
    description:
      'Describes the composition of a rate that has been quoted or is to be quoted.',
    schema: {
      required: true,
    },
    type: {
      blueId: '7gVW4FqUTJb8Nv4aMbSXumbRtc7MKhNqxdk3LPMZx6Qh',
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
  secondaryFxSpotRateSource: {
    description:
      'Specifies an alternative, or secondary, source from which a rate should be observed.',
    type: {
      blueId: '5x9dr8ixBaX8QXWdiNGeuyFn1GS9wN5xkpfrxHhKLC2y',
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
