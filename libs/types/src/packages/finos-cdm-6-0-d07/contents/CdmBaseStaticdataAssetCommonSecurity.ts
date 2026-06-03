export const CdmBaseStaticdataAssetCommonSecurity: Record<string, unknown> = {
  debtType: {
    description: 'Identifies the type of debt and selected debt economics.',
    type: {
      blueId: '9vqkkCNnmKd3FB5tMAKKYenwq2i3mYyHmgYdPKKqkZ8U',
    },
  },
  description:
    'Identifies a security by referencing an identifier and by specifying the sector.',
  equityType: {
    description: 'Identifies the type of equity.',
    type: {
      blueId: 'DZstXEXxF1iHJunLqdgbypWWK6H28QwVCtxJRbMUDpza',
    },
  },
  exchange: {
    description:
      'If the Asset is listed, defines the public exchange of the listing.',
    type: {
      blueId: '6LRw3aCeJHKD7qGzs2HvJDoQiMs8QddUf5wSr4oagtuS',
    },
  },
  fundType: {
    description: 'Identifies the type of fund.',
    type: {
      blueId: 'As4LSyzdsEDrcBhhNCQ78eXDcY41rjgBoZJZenTJ2J7F',
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
  name: 'cdm/base/staticdata/asset/common/Security',
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
};
