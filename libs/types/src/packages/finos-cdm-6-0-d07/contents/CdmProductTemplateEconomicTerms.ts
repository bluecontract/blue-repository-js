export const CdmProductTemplateEconomicTerms = {
  calculationAgent: {
    description:
      'The ISDA calculation agent responsible for performing duties as defined in the applicable product definitions.',
    type: {
      blueId: '5j3wvfjXc4HawVrDneYuxTD3C2At3QwdvEBK7LxSw24q',
    },
  },
  collateral: {
    description: 'Represents the collateral obligations of a party.',
    type: {
      blueId: '4TmMsyAdoN2Np4C6v3ypajqNSQXAgmDT7v2FYpcc7DY7',
    },
  },
  dateAdjustments: {
    description:
      'The business day adjustment convention when it applies across all the payout components. This specification of the business day convention and financial business centers is used for adjusting any calculation period date if it would otherwise fall on a day that is not a business day in the specified business center.\n',
    type: {
      blueId: 'FzKfYNd8fJo646njaxmU3TVbk5BD8txQXnt5NUm8V7sd',
    },
  },
  description:
    'This class represents the full set of price-forming features associated with a contractual product: the payout component, the notional/quantity, the effective and termination date and the date adjustment provisions when applying uniformily across the payout components. This class also includes the legal provisions which have valuation implications: cancelable provision, extendible provision, early termination provision and extraordinary events specification.\n',
  effectiveDate: {
    description:
      'The first day of the terms of the trade. This day may be subject to adjustment in accordance with a business day convention.\n',
    type: {
      blueId: '2tGygxV5BThuWavpJ3T6K3Atw5u4bJZT1Wb2Nxk798dd',
    },
  },
  name: 'cdm/product/template/EconomicTerms',
  nonStandardisedTerms: {
    description:
      'Specifies, when boolean value is True, that additional economic terms exist that have not been included in the product representation.\n',
    type: {
      blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
    },
  },
  payout: {
    description:
      'The payout specifies the future cashflow computation methodology which characterizes a financial product.',
    itemType: {
      blueId: 'this#3',
    },
    schema: {
      minItems: {
        type: {
          blueId: '5WNMiV9Knz63B4dVY5JtMyh3FB4FSGqv7ceScvuapdE1',
        },
        value: 1,
      },
    },
    type: {
      blueId: '6aehfNAxHLC1PHHoDr3tYtFH3RWNbiWdFancJ1bypXEY',
    },
  },
  terminationDate: {
    description:
      'The last day of the terms of the trade. This date may be subject to adjustments in accordance with the business day convention. It can also be specified in relation to another scheduled date (e.g. the last payment date).\n',
    type: {
      blueId: '2tGygxV5BThuWavpJ3T6K3Atw5u4bJZT1Wb2Nxk798dd',
    },
  },
  terminationProvision: {
    description:
      'Contains optional provisions pertaining to the termination characteristics of a contract.',
    type: {
      blueId: '9TkgobVuFAyf4FySwjWfMwU2Vem42ccyJHArhuMETnvE',
    },
  },
} as const;
