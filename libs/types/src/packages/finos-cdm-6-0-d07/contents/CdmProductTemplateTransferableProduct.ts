export const CdmProductTemplateTransferableProduct: Record<string, unknown> = {
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
    'A TransferableProduct is a type of financial product which can be held or transferred, represented as an Asset with the addition of specific EconomicTerms.\n',
  DigitalAsset: {
    description:
      'An Asset that exists only in digital form, eg Bitcoin or Ethereum; excludes the digital representation of other Assets.\n',
    type: {
      blueId: '9EtbWfrbv5eGk2HbMkGnnhU42gPKFB8rYd5pZyt23UZQ',
    },
  },
  economicTerms: {
    description:
      'The price forming features, including payouts and provisions.',
    schema: {
      required: true,
    },
    type: {
      blueId: 'this#9',
    },
  },
  Instrument: {
    description:
      'An asset that is issued by one party to one or more others; Instrument is also a choice data type.',
    type: {
      blueId: 'C1eJzacRV3YdWTiLScoqLS2Uv4KC4MEWVfb1ux4P9CeV',
    },
  },
  name: 'cdm/product/template/TransferableProduct',
};
