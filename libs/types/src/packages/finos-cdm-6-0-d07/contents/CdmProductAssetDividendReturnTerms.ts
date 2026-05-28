export const CdmProductAssetDividendReturnTerms = {
  description:
    'A class describing the conditions governing the payment of dividends to the receiver of the equity return, with the exception of the dividend payout ratio, which is defined for each of the underlying components.\n',
  dividendAmountType: {
    description:
      'Specifies whether the dividend is paid with respect to the Dividend Period.',
    type: {
      blueId: 'HKJnSoksJBRW2rZ8dJKqPrqMNKwbSMWak8yFAgbBniu6',
    },
  },
  dividendComposition: {
    description:
      'Specifies how the composition of Dividends is to be determined.',
    type: {
      blueId: 'ChCPF5QmbcAobXbvs9K4wvqSwzqR7kRvufRyresyq2Rj',
    },
  },
  dividendCurrency: {
    description:
      'Specifies the currency in which the dividend will be denominated, e.g. the dividend currency, or a specified currency. This class is not specified as such in FpML, which makes use of the CurrencyAndDeterminationMethod.model to specify such terms.\n',
    type: {
      blueId: 'HXFJiXPaDjND3jSjnioKon2K8cUjyf3aWi2kEsfB8FU4',
    },
  },
  dividendEntitlement: {
    description:
      'Defines the date on which the receiver of the equity return is entitled to the dividend.',
    type: {
      blueId: 'CVotzT95LfpnY2dTRZM7sgw142QseC5qSBhosJ1xtHbK',
    },
  },
  dividendPayoutRatio: {
    description:
      'Specifies the dividend payout ratio associated with each underlier. In FpML 5.10 the payout is positioned at the underlier level, although there is an intent to reconsider this approach and position it at the leg level. This is approach adopted by the CDM.\n',
    itemType: {
      blueId: 'KDqBQDTNYga8X7NLQ7JAEt4WfKWsizZQbLLCPtaLiAL',
    },
    schema: {
      minItems: {
        type: {
          blueId: '5WNMiV9Knz63B4dVY5JtMyh3FB4FSGqv7ceScvuapdE1',
        },
        value: 0,
      },
    },
    type: {
      blueId: '6aehfNAxHLC1PHHoDr3tYtFH3RWNbiWdFancJ1bypXEY',
    },
  },
  dividendPeriod: {
    description:
      'One to many time bounded dividend payment periods, each with a dividend payment date per period.',
    itemType: {
      blueId: '2nm92VnYrhXCMzyc33qGyg5j5Jyb1yNPyTfHecpCuyVE',
    },
    schema: {
      minItems: {
        type: {
          blueId: '5WNMiV9Knz63B4dVY5JtMyh3FB4FSGqv7ceScvuapdE1',
        },
        value: 0,
      },
    },
    type: {
      blueId: '6aehfNAxHLC1PHHoDr3tYtFH3RWNbiWdFancJ1bypXEY',
    },
  },
  dividendReinvestment: {
    description:
      'Boolean element that defines whether the dividend will be reinvested or not.',
    type: {
      blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
    },
  },
  excessDividendAmount: {
    description: 'Determination of Gross Cash Dividend per Share.',
    type: {
      blueId: 'HKJnSoksJBRW2rZ8dJKqPrqMNKwbSMWak8yFAgbBniu6',
    },
  },
  extraordinaryDividendsParty: {
    description:
      'Specifies the party which determines if dividends are extraordinary in relation to normal levels.',
    type: {
      blueId: '6Z3jsP3QVXumTdQMGZVcCDRNn3n62xjfZLNEHaZeDWmb',
    },
  },
  firstOrSecondPeriod: {
    description:
      '2002 ISDA Equity Derivatives Definitions: Dividend Period as either the First Period or the Second Period. |\n',
    type: {
      blueId: 'CUrYmDpSDF4EJz6dwV7Y4bsg12J8srR6T6zijqvRfZh3',
    },
  },
  materialDividend: {
    description:
      'If present and true, then material non cash dividends are applicable.',
    type: {
      blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
    },
  },
  name: 'cdm/product/asset/DividendReturnTerms',
  nonCashDividendTreatment: {
    description: 'Specifies the treatment of Non-Cash Dividends.',
    type: {
      blueId: 'Ac1dFPFVTVYmkEvcK2s53fVPu24ZEec5HFv1Sb43RD4t',
    },
  },
  performance: {
    description:
      "Performance calculation, in accordance with Part 1 Section 12 of the 2018 ISDA CDM Equity Confirmation for Security Equity Swap, Para 75. 'Equity Performance'. Cumulative performance is used as a notional multiplier factor on both legs of an Equity Swap.\n",
    type: {
      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
    },
  },
  specialDividends: {
    description:
      'Specifies the method according to which special dividends are determined.',
    type: {
      blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
    },
  },
} as const;
