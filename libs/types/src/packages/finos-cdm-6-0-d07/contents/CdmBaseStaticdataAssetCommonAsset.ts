export const CdmBaseStaticdataAssetCommonAsset: Record<string, unknown> = {
  Cash: {
    description:
      'An Asset that consists solely of a monetary holding in a currency.',
    type: {
      blueId: 'G6NQsm1Wur914oo6eCsazG77Y4gjnkMAZw1cSEieEBTV',
    },
  },
  Commodity: {
    description:
      'An Asset comprised of raw or refined materials or agricultural products, eg gold, oil or wheat.',
    type: {
      blueId: 'VrWJzqq3ogdc8MhQ87P7nugRkiYR7sK4XS7wQzTvce3',
    },
  },
  description:
    'An Asset is defined as something that can be owned and transferred in the financial markets. As a choice data type, one and only one of the attributes must be used.\n',
  DigitalAsset: {
    description:
      'An Asset that exists only in digital form, eg Bitcoin or Ethereum; excludes the digital representation of other Assets.\n',
    type: {
      blueId: '7rybfxmxNUFUfZGaK3oX9W3kqCWh8zNvXJgUAjrfayPZ',
    },
  },
  Instrument: {
    description:
      'An asset that is issued by one party to one or more others; Instrument is also a choice data type.',
    type: {
      blueId: '6pomFByRysSRpLwQEWHeqiGU8sc3DrBMjCiuHEuQ1iPB',
    },
  },
  name: 'cdm/base/staticdata/asset/common/Asset',
};
