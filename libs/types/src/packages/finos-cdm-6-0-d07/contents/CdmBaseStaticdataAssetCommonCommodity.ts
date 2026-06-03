export const CdmBaseStaticdataAssetCommonCommodity: Record<string, unknown> = {
  commodityProductDefinition: {
    description:
      'Specifies the commodity underlier in the event that no ISDA Commodity Reference Benchmark exists.',
    type: {
      blueId: '42E8LjfyrvfiY3rzFn9ktgxtEHdG6eXmK5CyYGHUkotU',
    },
  },
  deliveryDateReference: {
    description:
      'Specifies the parameters for identifying the relevant contract date when the commodity reference price is a futures contract.\n',
    type: {
      blueId: '4ZskTzTzcVURodZiz2Xe1cU3ryAzGu9uwsf7Nc5DU4tA',
    },
  },
  description:
    'Identifies a specific commodity by referencing a product identifier or by a product definition.',
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
  name: 'cdm/base/staticdata/asset/common/Commodity',
  priceQuoteType: {
    description:
      "Describes the required quote type of the underlying price that will be observed. Example values include 'Bid, 'Ask', 'Settlement' (for a futures contract) and 'WeightedAverage' (for some published prices and indices).\n",
    schema: {
      required: true,
    },
    type: {
      blueId: 'AH1BY9EazwZmuZ6LcxCKPZSzsejRaRpRinAqLmVsFTgc',
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
