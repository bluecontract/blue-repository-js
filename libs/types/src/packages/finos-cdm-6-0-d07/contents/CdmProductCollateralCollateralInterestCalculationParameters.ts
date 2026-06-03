export const CdmProductCollateralCollateralInterestCalculationParameters: Record<
  string,
  unknown
> = {
  compoundingBusinessCenter: {
    description: 'Specifies the applicable business centers for compounding.',
    itemType: {
      blueId: 'Ftpos6LCMk31PB3e4E1siiMshU1M88BMeTNK4yRypXyL',
    },
    schema: {
      minItems: 0,
    },
    type: {
      blueId: '8DSFoWG9MqRSUhStqoPLrwVQiYByRh18NWbDEarN8MKF',
    },
  },
  compoundingType: {
    description:
      'Specifies the type of compounding to be applied (None, Business, Calendar).',
    type: {
      blueId: 'GvNXAYyGbJwhZ1D7jxhPLtLsKVTeAZor6SgFatG9UvMa',
    },
  },
  dayCountFraction: {
    description: 'Specifies the day count fraction to use for that currency.',
    schema: {
      required: true,
    },
    type: {
      blueId: 'G5reDMTj2A64oDwXZBaNeRgFEhAtZMkWvkJcte51qHiJ',
    },
  },
  description:
    'Represents parameters for calculating the amount the floating interest calculation, e.g.  for a single currency or defaults for all currencies.\n',
  fixedRate: {
    description: 'Specifies the applicable fixed rate  if used.',
    type: {
      blueId: '9eWaHYz2vKrFofdHTHAizNNu8xP6QE3WQ5y7DGrGZvyJ',
    },
  },
  floatingRate: {
    description: 'Specifies the floating interest rate to be used.',
    type: {
      blueId: '9je4gdfYWh5s9PxZCf36xymmiBGd59PHPrBapq7pnGVf',
    },
  },
  inBaseCurrency: {
    description:
      'If True, specifies that the interest transfers should be converted to base currency equivalent, or if False specifies that the transfer should be in the currency of the collateral.\n',
    schema: {
      required: true,
    },
    type: {
      blueId: 'AwvXD961fmnmqcSQhjMA7r15HpVh39cefb6ZTyUz2Fm2',
    },
  },
  name: 'cdm/product/collateral/CollateralInterestCalculationParameters',
  rounding: {
    description: 'Specifies the rounding rules for settling in that currency.',
    type: {
      blueId: 'BYetgNwutc7xjHHx9g7ZhsdKgyGYMd1UR4jDoHHafJHj',
    },
  },
  roundingFrequency: {
    description: 'Specifies when/how often is rounding applied?',
    type: {
      blueId: 'Fw3wLbrcadtqbe88BTTnN3TZSgcXPzyHjjPvsic6NY2P',
    },
  },
  withholdingTaxRate: {
    description:
      'Specifies the withholding tax rate if a withholding tax is applicable.',
    type: {
      blueId: '9eWaHYz2vKrFofdHTHAizNNu8xP6QE3WQ5y7DGrGZvyJ',
    },
  },
};
