export const CdmProductAssetVolatilityReturnTerms = {
  annualizationFactor: {
    description:
      'This specifies the numerator of an annualization factor. Frequently this number is equal to the number of observations of prices in a year e.g. 252.\n',
    type: {
      blueId: '5WNMiV9Knz63B4dVY5JtMyh3FB4FSGqv7ceScvuapdE1',
    },
  },
  dividendApplicability: {
    description: 'The parameters which define whether dividends are applicable',
    type: {
      blueId: 'JDNuetaPzRJ1YcnfGUCcHqTorc5byg7A9rwtFg9X6MZg',
    },
  },
  equityUnderlierProvisions: {
    description:
      'Contains Equity Underlyer provisions regarding jurisdiction and fallbacks.',
    type: {
      blueId: 'Jo6daPzLZmva9P2h4WZUsuU1uvgGPFixiCYarEPe9ts',
    },
  },
  exchangeTradedContractNearest: {
    description: 'Specification of the exchange traded contract nearest.',
    type: {
      blueId: '6QXysvk5wKooQQckLijtFXwzL8JzYBViFzRCkYPNJnSX',
    },
  },
  expectedN: {
    description: 'Expected number of trading days.',
    type: {
      blueId: '5WNMiV9Knz63B4dVY5JtMyh3FB4FSGqv7ceScvuapdE1',
    },
  },
  initialLevel: {
    description:
      'Contract will strike off this initial level. Providing just the initialLevel without initialLevelSource, infers that this is AgreedInitialPrice - a specified Initial Index Level.\n',
    type: {
      blueId: '7pwXmXYCJtWnd348c2JQGBkm9C4renmZRwxbfaypsx5y',
    },
  },
  initialLevelSource: {
    description:
      'In this context, this is AgreedInitialPrice - a specified Initial Index Level.',
    type: {
      blueId: '3y75YW3Xvg26b63Etnyf7EmxBfhFMUEgAhimCGQ2jyab',
    },
  },
  meanAdjustment: {
    description:
      'Specifies whether Mean Adjustment is applicable or not in the calculation of the Realized Volatility, Variance or Correlation\n',
    type: {
      blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
    },
  },
  name: 'cdm/product/asset/VolatilityReturnTerms',
  performance: {
    description:
      "Performance calculation, in accordance with Part 1 Section 12 of the 2018 ISDA CDM Equity Confirmation for Security Equity Swap, Para 75. 'Equity Performance'. Cumulative performance is used as a notional multiplier factor on both legs of an Equity Swap.\n",
    type: {
      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
    },
  },
  sharePriceDividendAdjustment: {
    description:
      'Indicates whether the price of shares is adjusted for dividends or not.',
    type: {
      blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
    },
  },
  valuationTerms: {
    description: 'Contains all non-date valuation information.',
    type: {
      blueId: '4mhmBno4oM75kHALfSudGb7kWTYN5GN8J5C6WqRoX6fv',
    },
  },
  volatilityCapFloor: {
    description: 'Contains volatility-based barriers',
    type: {
      blueId: '2FArPnEgeydac33KBUck7sDiK4rQpun7wismexFXyRmD',
    },
  },
  volatilityStrikePrice: {
    description:
      'Volatility Strike Price in accordance with the ISDA 2011 Equity Derivatives Definitions.',
    schema: {
      required: {
        type: {
          blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
        },
        value: true,
      },
    },
    type: {
      blueId: 'wuC3RHpv6ahucWwxTgdeQyeUP8ecWQQqgMvSpx3Z543',
    },
  },
} as const;
