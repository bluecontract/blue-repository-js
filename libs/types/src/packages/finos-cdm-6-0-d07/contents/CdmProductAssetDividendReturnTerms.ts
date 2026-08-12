export const CdmProductAssetDividendReturnTerms: Record<string, unknown> = {
  description:
    'A class describing the conditions governing the payment of dividends to the receiver of the equity return, with the exception of the dividend payout ratio, which is defined for each of the underlying components.\n',
  dividendAmountType: {
    description:
      'Specifies whether the dividend is paid with respect to the Dividend Period.',
    type: {
      blueId: 'BseM57TwJnsZJpg73zrJ7kGx8XvjH6ufZPiazs47DUTQ',
    },
  },
  dividendComposition: {
    description:
      'Specifies how the composition of Dividends is to be determined.',
    type: {
      blueId: '3QHiAmrDLD9f7nbwCya9NpkEQw8ybmPNzHz8rZUYMgGX',
    },
  },
  dividendCurrency: {
    description:
      'Specifies the currency in which the dividend will be denominated, e.g. the dividend currency, or a specified currency. This class is not specified as such in FpML, which makes use of the CurrencyAndDeterminationMethod.model to specify such terms.\n',
    type: {
      blueId: '2cPndt4fpDpzVEUw3SaL2dat9i3qSRnuWwUjzfd7YEDX',
    },
  },
  dividendEntitlement: {
    description:
      'Defines the date on which the receiver of the equity return is entitled to the dividend.',
    type: {
      blueId: 'CjxtggSJUeokfEBLy1LH5RuozcoZiFPdboPbkGnfaQ1L',
    },
  },
  dividendPayoutRatio: {
    description:
      'Specifies the dividend payout ratio associated with each underlier. In FpML 5.10 the payout is positioned at the underlier level, although there is an intent to reconsider this approach and position it at the leg level. This is approach adopted by the CDM.\n',
    itemType: {
      blueId: 'G4dRtYHi6XSLg4caxcfJcag7cDcQqTHo18B5pymZAFSP',
    },
    schema: {
      minItems: 0,
    },
    type: {
      blueId: '8DSFoWG9MqRSUhStqoPLrwVQiYByRh18NWbDEarN8MKF',
    },
  },
  dividendPeriod: {
    description:
      'One to many time bounded dividend payment periods, each with a dividend payment date per period.',
    itemType: {
      blueId: '5GWb11CvK2e4hjYE5b3bbzLuVwDyWcC3natfgX4Ay43i',
    },
    schema: {
      minItems: 0,
    },
    type: {
      blueId: '8DSFoWG9MqRSUhStqoPLrwVQiYByRh18NWbDEarN8MKF',
    },
  },
  dividendReinvestment: {
    description:
      'Boolean element that defines whether the dividend will be reinvested or not.',
    type: {
      blueId: 'AwvXD961fmnmqcSQhjMA7r15HpVh39cefb6ZTyUz2Fm2',
    },
  },
  excessDividendAmount: {
    description: 'Determination of Gross Cash Dividend per Share.',
    type: {
      blueId: 'BseM57TwJnsZJpg73zrJ7kGx8XvjH6ufZPiazs47DUTQ',
    },
  },
  extraordinaryDividendsParty: {
    description:
      'Specifies the party which determines if dividends are extraordinary in relation to normal levels.',
    type: {
      blueId: '5UenXSd178j4ogWvtPBmvmYtMB2vnBUbSZpAKNkbGcuf',
    },
  },
  firstOrSecondPeriod: {
    description:
      '2002 ISDA Equity Derivatives Definitions: Dividend Period as either the First Period or the Second Period. |\n',
    type: {
      blueId: 'B2dTvQ6nN6jhgZbrXxvHNDxu4jeZ9ixuiSyWScidvJYi',
    },
  },
  materialDividend: {
    description:
      'If present and true, then material non cash dividends are applicable.',
    type: {
      blueId: 'AwvXD961fmnmqcSQhjMA7r15HpVh39cefb6ZTyUz2Fm2',
    },
  },
  name: 'cdm/product/asset/DividendReturnTerms',
  nonCashDividendTreatment: {
    description: 'Specifies the treatment of Non-Cash Dividends.',
    type: {
      blueId: '6kffco33fj474CxLdCMkkTbajx4JJDtE7zJHkyQX9Bop',
    },
  },
  performance: {
    description:
      "Performance calculation, in accordance with Part 1 Section 12 of the 2018 ISDA CDM Equity Confirmation for Security Equity Swap, Para 75. 'Equity Performance'. Cumulative performance is used as a notional multiplier factor on both legs of an Equity Swap.\n",
    type: {
      blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
    },
  },
  specialDividends: {
    description:
      'Specifies the method according to which special dividends are determined.',
    type: {
      blueId: 'AwvXD961fmnmqcSQhjMA7r15HpVh39cefb6ZTyUz2Fm2',
    },
  },
};
