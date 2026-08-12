export const CdmProductCollateralCollateralInterestCalculationParameters: Record<
  string,
  unknown
> = {
  compoundingBusinessCenter: {
    description: 'Specifies the applicable business centers for compounding.',
    itemType: {
      blueId: 'Gpw3zDUDENr9thYruxb1S1firzfQSgHYJs5W3zaBbAzN',
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
      blueId: 'AdYxmwMLQx4hWKa8Fggt5X4iX1ww5YD2xAy4ij5FccFt',
    },
  },
  dayCountFraction: {
    description: 'Specifies the day count fraction to use for that currency.',
    schema: {
      required: true,
    },
    type: {
      blueId: '7rLpateRXSy3RdPsPEUcip227zNh4gMbVPQ1GuqDksDz',
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
      blueId: 'AbLoQQNACxdzPtEMoK5PXcunDMtaotFMqR1uTyZb3s8n',
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
      blueId: '7fpTDBDMKH4SNXoiKP77e98Hh5vZkbVGXSEenFEztVuv',
    },
  },
  roundingFrequency: {
    description: 'Specifies when/how often is rounding applied?',
    type: {
      blueId: '5uKXCGmozs8beHQLK5giHsJTcGD627CoqZ66K9g4ovMs',
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
