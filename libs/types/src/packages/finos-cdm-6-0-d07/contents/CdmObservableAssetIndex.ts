export const CdmObservableAssetIndex = {
  CreditIndex: {
    description:
      'An index based on credit risk, typically composed using corporate debt instruments in a region or industry sector, e.g. the iTraxx indices.\n',
    type: {
      blueId: 'DEx8mELrNiMvJnmN1WRhZbyCiZRmtgBjuJXyfcSztf4h',
    },
  },
  description:
    'An Index is an Observable which is computed based on the prices, rates or valuations of a number of assets that are tracked in a standardized way.  Examples include equity market indices as well as indices on interest rates, inflation and credit instruments.\n',
  EquityIndex: {
    description: 'An index based on equity securities, e.g. the S&P 500.',
    type: {
      blueId: '69jx9rXicruZGKCBH22y3ssVo8rTB3rDWeNgDh7qhAET',
    },
  },
  ForeignExchangeRateIndex: {
    description:
      'A rate based on the exchange of a pair of cash assets in specific currencies, e.g. USD versus GBP.',
    type: {
      blueId: '9MJsMkavMQapBs1dYUW5H2rFfdgrUA78Ttyxc1G9yHkv',
    },
  },
  InterestRateIndex: {
    description:
      'An index based in interest rates or inflation rates in a certain market.',
    type: {
      blueId: '9NuX39eGBeGjQU9qFkJnqaMBLFBXyF3Qq2zwXtJKPvro',
    },
  },
  name: 'cdm/observable/asset/Index',
  OtherIndex: {
    description:
      "An index created by a market participant which doesn't align with the other index types.",
    type: {
      blueId: 'C1fmUXxsuQZKB9pnb77XYeC8nw26iYVpjkTRaG1dchYX',
    },
  },
} as const;
