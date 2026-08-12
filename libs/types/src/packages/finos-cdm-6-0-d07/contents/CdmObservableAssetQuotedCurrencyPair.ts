export const CdmObservableAssetQuotedCurrencyPair: Record<string, unknown> = {
  currency1: {
    description:
      'The first currency specified when a pair of currencies is to be evaluated.',
    schema: {
      required: true,
    },
    type: {
      blueId: 'HvrBWWRL9WzJPU9bs48T3Uf9CcUgCfqtEszZPN3tYS3n',
    },
  },
  currency2: {
    description:
      'The second currency specified when a pair of currencies is to be evaluated.',
    schema: {
      required: true,
    },
    type: {
      blueId: 'HvrBWWRL9WzJPU9bs48T3Uf9CcUgCfqtEszZPN3tYS3n',
    },
  },
  description:
    'A class that describes the composition of a rate that has been quoted or is to be quoted. This includes the two currencies and the quotation relationship between the two currencies and is used as a building block throughout the FX specification.\n',
  name: 'cdm/observable/asset/QuotedCurrencyPair',
  quoteBasis: {
    description: 'The method by which the exchange rate is quoted.',
    schema: {
      required: true,
    },
    type: {
      blueId: '7noJvZuGSSZMHSRZXsAQU8dhSdJ1hDT7Mitbfx7oDwGW',
    },
  },
};
