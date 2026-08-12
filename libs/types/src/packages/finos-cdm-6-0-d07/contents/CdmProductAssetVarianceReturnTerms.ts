export const CdmProductAssetVarianceReturnTerms: Record<string, unknown> = {
  annualizationFactor: {
    description:
      'This specifies the numerator of an annualization factor. Frequently this number is equal to the number of observations of prices in a year e.g. 252.\n',
    type: {
      blueId: 'E2LM6qgzWG9ttagq2xTmiZkgYEAgkYedFCmU9v7NnVEq',
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
      blueId: 'hBX9rQeKFtms3vxhq7NqDejchRZkpoUMqyHH7qF88rQ',
    },
  },
  exchangeTradedContractNearest: {
    description: 'Specification of the exchange traded contract nearest.',
    type: {
      blueId: '29tRf6HKyJ5PZ7qSgJmiEnuDwSx7xXy8vHzP4X2PfJU8',
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
      blueId: '5jqv11pA6a3Nrtm11SrFfbQvRZZ6ukyLt7PkNLq82wy1',
    },
  },
  meanAdjustment: {
    description:
      'Specifies whether Mean Adjustment is applicable or not in the calculation of the Realized Volatility, Variance or Correlation\n',
    type: {
      blueId: 'AwvXD961fmnmqcSQhjMA7r15HpVh39cefb6ZTyUz2Fm2',
    },
  },
  name: 'cdm/product/asset/VarianceReturnTerms',
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
      blueId: '3RV4JPXGMLbdEEtEMdNSG3rPva1V96fHc2XFGnK9o2r5',
    },
  },
  varianceCapFloor: {
    description:
      'Contains possible barriers for variance products, both variance-based and underlier price based',
    type: {
      blueId: '2AZnHgoS5afFQfp3F6cunWcHpUAiCzpYycF5ZE35ZBad',
    },
  },
  varianceStrikePrice: {
    description:
      'Variance Strike Price in accordance with the ISDA 2011 Equity Derivatives Definitions.',
    type: {
      blueId: 'D6pT9tDvB6nnaNaPVHodxcm2djqTNykgt6VJoD2uDq4M',
    },
  },
  vegaNotionalAmount: {
    description:
      'Vega Notional represents the approximate gain/loss at maturity for a 1% difference between RVol (realised vol) and KVol (strike vol). It does not necessarily represent the Vega Risk of the trade.\n',
    type: {
      blueId: 'DABeUA2VSfKoewn5RTb24nVAxHReN4yfRq2Ud8chTJq2',
    },
  },
  volatilityCapFloor: {
    description: 'Contains containing volatility-based barriers',
    type: {
      blueId: '3hhGezhEJkdjitC4RY5pTQv9HvHRzqiC8cfqQsEpGZz7',
    },
  },
  volatilityStrikePrice: {
    description:
      'Volatility Strike Price in accordance with the ISDA 2011 Equity Derivatives Definitions.',
    type: {
      blueId: 'D6pT9tDvB6nnaNaPVHodxcm2djqTNykgt6VJoD2uDq4M',
    },
  },
};
