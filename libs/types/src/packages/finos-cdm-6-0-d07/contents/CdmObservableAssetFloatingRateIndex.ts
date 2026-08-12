export const CdmObservableAssetFloatingRateIndex: Record<string, unknown> = {
  assetClass: {
    description: 'The Asset Class of the Index.',
    type: {
      blueId: '9yX6LE16R3vAK1CLiZg1CNCKs1R2z61AM6mkBEyi4wHf',
    },
  },
  description:
    'Specification of an interest rate index which can change over time, e.g. the SONIA (Sterling Overnight Index Average) in the UK.\n',
  exchange: {
    description:
      'If the Asset is listed, defines the public exchange of the listing.',
    type: {
      blueId: 'J5hsqA8x6vAprJRs7gFhvm5bsp5TZNBgEdhytAapat8y',
    },
  },
  floatingRateIndex: {
    description:
      'The reference index that is used to specify the floating interest rate.',
    schema: {
      required: true,
    },
    type: {
      blueId: '9MWTLbKLsUSiaShABSSuHxaeJZ2aErzYPTqc28XefGr3',
    },
  },
  identifier: {
    description:
      'Asset Identifiers are used to uniquely identify an Asset, using a specified Asset Identifier Type.',
    itemType: {
      blueId: '4oFH9vehkWBHWWKWKPEPwytqoRKUA6mcVgrG7P1XtKRy',
    },
    schema: {
      minItems: 1,
    },
    type: {
      blueId: '8DSFoWG9MqRSUhStqoPLrwVQiYByRh18NWbDEarN8MKF',
    },
  },
  indexTenor: {
    description: 'The ISDA Designated Maturity, i.e. the floating rate tenor.',
    type: {
      blueId: '2eRPMxKZ8upfUGCDqNY6xXko7GTGvozudp1i9wznQmXL',
    },
  },
  isExchangeListed: {
    description: 'Defines whether the Asset is listed on a public exchange.',
    type: {
      blueId: 'AwvXD961fmnmqcSQhjMA7r15HpVh39cefb6ZTyUz2Fm2',
    },
  },
  name: 'cdm/observable/asset/FloatingRateIndex',
  provider: {
    description: 'The organisation that creates or maintains the Index.',
    type: {
      blueId: 'J5hsqA8x6vAprJRs7gFhvm5bsp5TZNBgEdhytAapat8y',
    },
  },
  relatedExchange: {
    description: 'Provides the related Exchanges, if applicable.',
    itemType: {
      blueId: 'J5hsqA8x6vAprJRs7gFhvm5bsp5TZNBgEdhytAapat8y',
    },
    schema: {
      minItems: 0,
    },
    type: {
      blueId: '8DSFoWG9MqRSUhStqoPLrwVQiYByRh18NWbDEarN8MKF',
    },
  },
  taxonomy: {
    description:
      'Defines the taxonomy of an object by combining a taxonomy source (i.e. the rules to classify the object) and a value (i.e. the output of those rules on the object.\n',
    itemType: {
      blueId: 'GXDxn2HwbWwWg9AFSHwfSi4zZ32a3uVojNQmBN96DUvU',
    },
    schema: {
      minItems: 0,
    },
    type: {
      blueId: '8DSFoWG9MqRSUhStqoPLrwVQiYByRh18NWbDEarN8MKF',
    },
  },
};
