export const CdmProductCollateralSpecificAsset = {
  Cash: {
    description:
      'An Asset that consists solely of a monetary holding in a currency.',
    type: {
      blueId: 'DHpHHdiJGEagTPm7Y9Vz6cdsbKwjXg8HjJkoUjpRra2Y',
    },
  },
  Commodity: {
    description:
      'An Asset comprised of raw or refined materials or agricultural products, eg gold, oil or wheat.',
    type: {
      blueId: 'H5njvRER8CjtGtwUC4FooQuqnXpt8hpw2oZAAAuCW8Dn',
    },
  },
  description:
    'A single, specifically identified Asset chosen from the Asset data type',
  DigitalAsset: {
    description:
      'An Asset that exists only in digital form, eg Bitcoin or Ethereum; excludes the digital representation of other Assets.\n',
    type: {
      blueId: 'GekwBuYCVfkr4sCyWTFmw8QtYrXx7zDE8G5YwHkaRVL',
    },
  },
  Instrument: {
    description:
      'An asset that is issued by one party to one or more others; Instrument is also a choice data type.',
    type: {
      blueId: 'J1Lgg2ajU8Qy4mgpL5ELeryh9L63Mk2B9paZPCz5bsp8',
    },
  },
  name: 'cdm/product/collateral/SpecificAsset',
} as const;
