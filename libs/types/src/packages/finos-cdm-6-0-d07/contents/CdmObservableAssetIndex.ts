export const CdmObservableAssetIndex: Record<string, unknown> = {
  CreditIndex: {
    description:
      'An index based on credit risk, typically composed using corporate debt instruments in a region or industry sector, e.g. the iTraxx indices.\n',
    type: {
      blueId: 'B9M4cKALDcyfwfopEL2hETJTezx4P3PypYFiJT7oP8PX',
    },
  },
  description:
    'An Index is an Observable which is computed based on the prices, rates or valuations of a number of assets that are tracked in a standardized way.  Examples include equity market indices as well as indices on interest rates, inflation and credit instruments.\n',
  EquityIndex: {
    description: 'An index based on equity securities, e.g. the S&P 500.',
    type: {
      blueId: 'F3XZKbaaetQAbq12wTkNqNj5yXt8i7fA9q39GUJdMzSG',
    },
  },
  ForeignExchangeRateIndex: {
    description:
      'A rate based on the exchange of a pair of cash assets in specific currencies, e.g. USD versus GBP.',
    type: {
      blueId: '5CRbxGnB3K2J3wdGYp38DrerJ9YD8boS2eP6L2iUbFM6',
    },
  },
  InterestRateIndex: {
    description:
      'An index based in interest rates or inflation rates in a certain market.',
    type: {
      blueId: 'BsnCbY3QHNpAikpriPmsdfVAKjXaEUdXGrL1jr9zybeu',
    },
  },
  name: 'cdm/observable/asset/Index',
  OtherIndex: {
    description:
      "An index created by a market participant which doesn't align with the other index types.",
    type: {
      blueId: '56BHaLr4BZUc1nZnJfgp1nRUBU27yYb9TF2wGHeqnR2u',
    },
  },
};
