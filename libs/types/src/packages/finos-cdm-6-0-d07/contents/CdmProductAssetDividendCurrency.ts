export const CdmProductAssetDividendCurrency: Record<string, unknown> = {
  currency: {
    description:
      'The currency in which the dividend is denominated. The list of valid currencies is not presently positioned as an enumeration as part of the CDM because that scope is limited to the values specified by ISDA and FpML. As a result, implementers have to make reference to the relevant standard, such as the ISO 4217 standard for currency codes.\n',
    type: {
      blueId: 'HTDqFgte5VF88dLHnCZMjvyetfxfTAKxf9r8ciErE7Vg',
    },
  },
  currencyReference: {
    description: 'Reference to a currency specified elsewhere in the document',
    type: {
      blueId: '6r7X1t4mk8pzhtyij1QDYaoMrseQxsRdHuJTw8dJaEk2',
    },
  },
  description:
    'A class to specify the currency in which the dividends will be denominated, i.e. either in the dividend currency or in a currency specified as part of the contract.\n',
  determinationMethod: {
    description:
      'Specifies the method according to which the dividend is determined, e.g. the dividend currency.',
    type: {
      blueId: 'F2XKDuytcyrcyYVFazD7Tuqtk1J9p5rtwDxh9Y9PUUWH',
    },
  },
  name: 'cdm/product/asset/DividendCurrency',
};
