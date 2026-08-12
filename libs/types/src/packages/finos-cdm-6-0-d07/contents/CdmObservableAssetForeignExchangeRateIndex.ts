export const CdmObservableAssetForeignExchangeRateIndex: Record<
  string,
  unknown
> = {
  assetClass: {
    description: 'The Asset Class of the Index.',
    type: {
      blueId: '9yX6LE16R3vAK1CLiZg1CNCKs1R2z61AM6mkBEyi4wHf',
    },
  },
  description:
    'Specification of a rate based on the exchange of a pair of cash assets in specific currencies, e.g. USD versus GBP.\n',
  exchange: {
    description:
      'If the Asset is listed, defines the public exchange of the listing.',
    type: {
      blueId: 'J5hsqA8x6vAprJRs7gFhvm5bsp5TZNBgEdhytAapat8y',
    },
  },
  identifier: {
    description:
      'Asset Identifiers are used to uniquely identify an Asset, using a specified Asset Identifier Type.',
    itemType: {
      blueId: '4oFH9vehkWBHWWKWKPEPwytqoRKUA6mcVgrG7P1XtKRy',
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
      blueId: 'DBw7um9gNRcqAbnknhfeiUnCkzs6Q2yp3aFtBkKuZ8S5',
    },
  },
  provider: {
    description: 'The organisation that creates or maintains the Index.',
    type: {
      blueId: 'J5hsqA8x6vAprJRs7gFhvm5bsp5TZNBgEdhytAapat8y',
    },
  },
  quotedCurrencyPair: {
    description:
      'Describes the composition of a rate that has been quoted or is to be quoted.',
    schema: {
      required: true,
    },
    type: {
      blueId: 'BznnopwXUQBTNa94kd5o1WTRGz9fAEnw1k75ki6MRi9r',
    },
  },
  relatedExchange: {
    description: 'Provides the related Exchanges, if applicable.',
    itemType: {
      blueId: 'J5hsqA8x6vAprJRs7gFhvm5bsp5TZNBgEdhytAapat8y',
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
      blueId: 'DBw7um9gNRcqAbnknhfeiUnCkzs6Q2yp3aFtBkKuZ8S5',
    },
  },
  taxonomy: {
    description:
      'Defines the taxonomy of an object by combining a taxonomy source (i.e. the rules to classify the object) and a value (i.e. the output of those rules on the object.\n',
    itemType: {
      blueId: 'GXDxn2HwbWwWg9AFSHwfSi4zZ32a3uVojNQmBN96DUvU',
    },
    schema: {
      minItems: 0,
    },
    type: {
      blueId: '8DSFoWG9MqRSUhStqoPLrwVQiYByRh18NWbDEarN8MKF',
    },
  },
};
