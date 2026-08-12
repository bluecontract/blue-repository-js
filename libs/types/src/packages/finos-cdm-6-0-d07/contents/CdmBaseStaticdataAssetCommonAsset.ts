export const CdmBaseStaticdataAssetCommonAsset: Record<string, unknown> = {
  Cash: {
    description:
      'An Asset that consists solely of a monetary holding in a currency.',
    type: {
      blueId: 'Fp8kieXrgB8GUChsCNFFLB9bbPSRfh2sua3aPiz8Zp5u',
    },
  },
  Commodity: {
    description:
      'An Asset comprised of raw or refined materials or agricultural products, eg gold, oil or wheat.',
    type: {
      blueId: 'EMvkMQtTjt6kMvmoGwHz3VA8mzvuVNoPmcesVmG15Bui',
    },
  },
  description:
    'An Asset is defined as something that can be owned and transferred in the financial markets. As a choice data type, one and only one of the attributes must be used.\n',
  DigitalAsset: {
    description:
      'An Asset that exists only in digital form, eg Bitcoin or Ethereum; excludes the digital representation of other Assets.\n',
    type: {
      blueId: '9EtbWfrbv5eGk2HbMkGnnhU42gPKFB8rYd5pZyt23UZQ',
    },
  },
  Instrument: {
    description:
      'An asset that is issued by one party to one or more others; Instrument is also a choice data type.',
    type: {
      blueId: 'C1eJzacRV3YdWTiLScoqLS2Uv4KC4MEWVfb1ux4P9CeV',
    },
  },
  name: 'cdm/base/staticdata/asset/common/Asset',
};
