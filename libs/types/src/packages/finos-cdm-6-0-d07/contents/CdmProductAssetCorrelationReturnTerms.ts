export const CdmProductAssetCorrelationReturnTerms: Record<string, unknown> = {
  annualizationFactor: {
    description:
      'This specifies the numerator of an annualization factor. Frequently this number is equal to the number of observations of prices in a year e.g. 252.\n',
    type: {
      blueId: 'E2LM6qgzWG9ttagq2xTmiZkgYEAgkYedFCmU9v7NnVEq',
    },
  },
  boundedCorrelation: {
    description:
      'Describes correlation bounds, which form a cap and a floor on the realized correlation.',
    type: {
      blueId: '6YPBFzb6J5zZWUx1H7SSeJNLQWwAzYsVjRxgdkFZMVrn',
    },
  },
  correlationStrikePrice: {
    description:
      'Correlation Strike Price in accordance with the ISDA 2011 Equity Derivatives Definitions.',
    schema: {
      required: true,
    },
    type: {
      blueId: 'GLmQaa2vVZKjaht1sNMcUL55xfAgWQxpj5ENxwvVRvsm',
    },
  },
  dividendApplicability: {
    description: 'The parameters which define whether dividends are applicable',
    type: {
      blueId: 'AfKweapaqsU79LG9ZWn4qFZmKFXJo7xvzr7cVxixP86u',
    },
  },
  equityUnderlierProvisions: {
    description:
      'Contains Equity Underlyer provisions regarding jurisdiction and fallbacks.',
    type: {
      blueId: 'G2uPrFU4uNeXsrT1Qauu3GMgFXeHpGU8yyPtUKRD4kr3',
    },
  },
  expectedN: {
    description: 'Expected number of trading days.',
    type: {
      blueId: 'E2LM6qgzWG9ttagq2xTmiZkgYEAgkYedFCmU9v7NnVEq',
    },
  },
  initialLevel: {
    description:
      'Contract will strike off this initial level. Providing just the initialLevel without initialLevelSource, infers that this is AgreedInitialPrice - a specified Initial Index Level.\n',
    type: {
      blueId: '9eWaHYz2vKrFofdHTHAizNNu8xP6QE3WQ5y7DGrGZvyJ',
    },
  },
  initialLevelSource: {
    description:
      'In this context, this is AgreedInitialPrice - a specified Initial Index Level.',
    type: {
      blueId: 'F2XKDuytcyrcyYVFazD7Tuqtk1J9p5rtwDxh9Y9PUUWH',
    },
  },
  meanAdjustment: {
    description:
      'Specifies whether Mean Adjustment is applicable or not in the calculation of the Realized Volatility, Variance or Correlation\n',
    type: {
      blueId: 'AwvXD961fmnmqcSQhjMA7r15HpVh39cefb6ZTyUz2Fm2',
    },
  },
  name: 'cdm/product/asset/CorrelationReturnTerms',
  numberOfDataSeries: {
    description:
      'Number of data series, normal market practice is that correlation data sets are drawn from geographic market areas, such as America, Europe and Asia Pacific, each of these geographic areas will have its own data series to avoid contagion.\n',
    type: {
      blueId: 'E2LM6qgzWG9ttagq2xTmiZkgYEAgkYedFCmU9v7NnVEq',
    },
  },
  performance: {
    description:
      "Performance calculation, in accordance with Part 1 Section 12 of the 2018 ISDA CDM Equity Confirmation for Security Equity Swap, Para 75. 'Equity Performance'. Cumulative performance is used as a notional multiplier factor on both legs of an Equity Swap.\n",
    type: {
      blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
    },
  },
  sharePriceDividendAdjustment: {
    description:
      'Indicates whether the price of shares is adjusted for dividends or not.',
    type: {
      blueId: 'AwvXD961fmnmqcSQhjMA7r15HpVh39cefb6ZTyUz2Fm2',
    },
  },
  valuationTerms: {
    description: 'Contains all non-date valuation information.',
    type: {
      blueId: '3RVpuPyLZTsRz9wSfRCjDrY84adxxkZBQaYM8p28MYpK',
    },
  },
};
