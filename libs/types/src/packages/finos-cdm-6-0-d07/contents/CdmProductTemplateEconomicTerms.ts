export const CdmProductTemplateEconomicTerms: Record<string, unknown> = {
  calculationAgent: {
    description:
      'The ISDA calculation agent responsible for performing duties as defined in the applicable product definitions.',
    type: {
      blueId: 'BmkE3R86Mi5VSgGXWARzCmJ1FbnwnZDnHtccZ6MSGnRQ',
    },
  },
  collateral: {
    description: 'Represents the collateral obligations of a party.',
    type: {
      blueId: 'CMbZdR1wHnpwviTkU9fmf4tki9sWinxrSZWks1aEdhJu',
    },
  },
  dateAdjustments: {
    description:
      'The business day adjustment convention when it applies across all the payout components. This specification of the business day convention and financial business centers is used for adjusting any calculation period date if it would otherwise fall on a day that is not a business day in the specified business center.\n',
    type: {
      blueId: 'AKAczd79wtoD2Vt7VjdFdnWeacw86mQTVeLcyS9SWFZz',
    },
  },
  description:
    'This class represents the full set of price-forming features associated with a contractual product: the payout component, the notional/quantity, the effective and termination date and the date adjustment provisions when applying uniformily across the payout components. This class also includes the legal provisions which have valuation implications: cancelable provision, extendible provision, early termination provision and extraordinary events specification.\n',
  effectiveDate: {
    description:
      'The first day of the terms of the trade. This day may be subject to adjustment in accordance with a business day convention.\n',
    type: {
      blueId: 'GW4fUG5i4g68v2eQEznuefGCSUPiwaHXpoVmU4ASwx29',
    },
  },
  name: 'cdm/product/template/EconomicTerms',
  nonStandardisedTerms: {
    description:
      'Specifies, when boolean value is True, that additional economic terms exist that have not been included in the product representation.\n',
    type: {
      blueId: 'AwvXD961fmnmqcSQhjMA7r15HpVh39cefb6ZTyUz2Fm2',
    },
  },
  payout: {
    description:
      'The payout specifies the future cashflow computation methodology which characterizes a financial product.',
    itemType: {
      blueId: 'this#8',
    },
    schema: {
      minItems: 1,
    },
    type: {
      blueId: '8DSFoWG9MqRSUhStqoPLrwVQiYByRh18NWbDEarN8MKF',
    },
  },
  terminationDate: {
    description:
      'The last day of the terms of the trade. This date may be subject to adjustments in accordance with the business day convention. It can also be specified in relation to another scheduled date (e.g. the last payment date).\n',
    type: {
      blueId: 'GW4fUG5i4g68v2eQEznuefGCSUPiwaHXpoVmU4ASwx29',
    },
  },
  terminationProvision: {
    description:
      'Contains optional provisions pertaining to the termination characteristics of a contract.',
    type: {
      blueId: '3doqr3EiMTivS3UTJcEVyjxNAVfAULrMtrVVvpoMSQW6',
    },
  },
};
