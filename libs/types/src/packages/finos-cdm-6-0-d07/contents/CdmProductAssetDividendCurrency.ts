export const CdmProductAssetDividendCurrency = {
  currency: {
    description:
      'The currency in which the dividend is denominated. The list of valid currencies is not presently positioned as an enumeration as part of the CDM because that scope is limited to the values specified by ISDA and FpML. As a result, implementers have to make reference to the relevant standard, such as the ISO 4217 standard for currency codes.\n',
    type: {
      blueId: 'F5GfdsSNcjLAm9anbfMQqxdxAFonErhU5UXFbQzq1zXY',
    },
  },
  currencyReference: {
    description: 'Reference to a currency specified elsewhere in the document',
    type: {
      blueId: '2NmzfUpHRVGHJtBNJodPdDCxDTwixoJpKAWSpVNE9ema',
    },
  },
  description:
    'A class to specify the currency in which the dividends will be denominated, i.e. either in the dividend currency or in a currency specified as part of the contract.\n',
  determinationMethod: {
    description:
      'Specifies the method according to which the dividend is determined, e.g. the dividend currency.',
    type: {
      blueId: '3y75YW3Xvg26b63Etnyf7EmxBfhFMUEgAhimCGQ2jyab',
    },
  },
  name: 'cdm/product/asset/DividendCurrency',
} as const;
