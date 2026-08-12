export const CdmObservableAssetCreditIndex: Record<string, unknown> = {
  assetClass: {
    description: 'The Asset Class of the Index.',
    type: {
      blueId: '9yX6LE16R3vAK1CLiZg1CNCKs1R2z61AM6mkBEyi4wHf',
    },
  },
  description:
    'Specification of an index based on credit risk, typically composed using corporate debt instruments in a region or industry sector, e.g. the iTraxx indices.\n',
  exchange: {
    description:
      'If the Asset is listed, defines the public exchange of the listing.',
    type: {
      blueId: 'J5hsqA8x6vAprJRs7gFhvm5bsp5TZNBgEdhytAapat8y',
    },
  },
  excludedReferenceEntity: {
    description: 'Excluded reference entity.',
    itemType: {
      blueId: 'Aogoj2sCUGRvYLZhVJNntPd3rKjX5XU82C9NYKGNG6EH',
    },
    schema: {
      minItems: 0,
    },
    type: {
      blueId: '8DSFoWG9MqRSUhStqoPLrwVQiYByRh18NWbDEarN8MKF',
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
  indexAnnexDate: {
    description: 'A CDS index series annex date.',
    type: {
      blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
    },
  },
  indexAnnexSource: {
    description: 'A CDS index series annex source.',
    type: {
      blueId: '5m3SsxkRsmH9rTCbqfUv6Zd2wqx6w5yi6EUA3MtvMuAF',
    },
  },
  indexAnnexVersion: {
    description: 'A CDS index series version identifier, e.g. 1, 2, 3 etc.',
    type: {
      blueId: 'E2LM6qgzWG9ttagq2xTmiZkgYEAgkYedFCmU9v7NnVEq',
    },
  },
  indexFactor: {
    description:
      'Index Factor is the index version factor or percent, expressed as an absolute decimal value between 0 and 1, that multiplied by the original notional amount yields the notional amount covered by the seller of protection.\n',
    type: {
      blueId: '9eWaHYz2vKrFofdHTHAizNNu8xP6QE3WQ5y7DGrGZvyJ',
    },
  },
  indexSeries: {
    description: 'A CDS index series identifier, e.g. 1, 2, 3 etc.',
    type: {
      blueId: 'E2LM6qgzWG9ttagq2xTmiZkgYEAgkYedFCmU9v7NnVEq',
    },
  },
  isExchangeListed: {
    description: 'Defines whether the Asset is listed on a public exchange.',
    type: {
      blueId: 'AwvXD961fmnmqcSQhjMA7r15HpVh39cefb6ZTyUz2Fm2',
    },
  },
  name: 'cdm/observable/asset/CreditIndex',
  provider: {
    description: 'The organisation that creates or maintains the Index.',
    type: {
      blueId: 'J5hsqA8x6vAprJRs7gFhvm5bsp5TZNBgEdhytAapat8y',
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
  seniority: {
    description: 'Seniority of debt instruments comprising the index.',
    type: {
      blueId: 'FHNjuCAWRmsyRgbGQq5VFBDJvVVW4DCZs384cMHvtLKw',
    },
  },
  settledEntityMatrix: {
    description:
      'Used to specify the Relevant Settled Entity Matrix when there are settled entities at the time of the trade.',
    type: {
      blueId: 'Btov1TSH13XcQmYFbUEQ1y8Fjxf5J824rRWZnp4ykQPE',
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
  tranche: {
    description: 'This element contains CDS tranche terms.',
    type: {
      blueId: '2kqSEBf4QHUaZoidcqZix27rUgz9zA4zq7QJaUj5s5Mh',
    },
  },
};
