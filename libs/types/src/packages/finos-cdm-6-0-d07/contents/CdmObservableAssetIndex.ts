export const CdmObservableAssetIndex: Record<string, unknown> = {
  CreditIndex: {
    description:
      'An index based on credit risk, typically composed using corporate debt instruments in a region or industry sector, e.g. the iTraxx indices.\n',
    type: {
      blueId: 'EXhnZXqvEcgXZrY2VK9WqgZz87y5NwxZ4axscyrAeSBv',
    },
  },
  description:
    'An Index is an Observable which is computed based on the prices, rates or valuations of a number of assets that are tracked in a standardized way.  Examples include equity market indices as well as indices on interest rates, inflation and credit instruments.\n',
  EquityIndex: {
    description: 'An index based on equity securities, e.g. the S&P 500.',
    type: {
      blueId: 'EArWxvBkePDwUEtKBhh6BFEHXRgqmUAiHbHAVCW9EWu4',
    },
  },
  ForeignExchangeRateIndex: {
    description:
      'A rate based on the exchange of a pair of cash assets in specific currencies, e.g. USD versus GBP.',
    type: {
      blueId: '3r42QBCBADZWzkxMBCQkvH3c6M3c1raWTFgLjoCsjZoe',
    },
  },
  InterestRateIndex: {
    description:
      'An index based in interest rates or inflation rates in a certain market.',
    type: {
      blueId: '9QkWzeLcgPCCJUappiHJdN2AEyj6ZnCAsxX668fGGgG5',
    },
  },
  name: 'cdm/observable/asset/Index',
  OtherIndex: {
    description:
      "An index created by a market participant which doesn't align with the other index types.",
    type: {
      blueId: 'GXtabg3erarMspr34yVya2Ybpw1LUGLXNHdWCkovVNAA',
    },
  },
};
