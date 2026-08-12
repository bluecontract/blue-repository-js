export const CdmBaseStaticdataAssetCommonCash: Record<string, unknown> = {
  description:
    'An Asset that consists solely of a monetary holding in a currency. The currency of the Cash asset is held in the string Identifier (from AssetBase) and the AssetIdTypeEnum must be set to define that a CurrencyCode is set.  The function SetCashCurrency can be used to create (or update) a Cash object and the function GetCashCurrency can be used to retrieve the currency of a Cash object.\n',
  exchange: {
    description:
      'If the Asset is listed, defines the public exchange of the listing.',
    type: {
      blueId: 'J5hsqA8x6vAprJRs7gFhvm5bsp5TZNBgEdhytAapat8y',
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
  isExchangeListed: {
    description: 'Defines whether the Asset is listed on a public exchange.',
    type: {
      blueId: 'AwvXD961fmnmqcSQhjMA7r15HpVh39cefb6ZTyUz2Fm2',
    },
  },
  name: 'cdm/base/staticdata/asset/common/Cash',
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
