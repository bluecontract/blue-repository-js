export const CdmObservableAssetQuotedCurrencyPair = {
  currency1: {
    description:
      'The first currency specified when a pair of currencies is to be evaluated.',
    schema: {
      required: {
        type: {
          blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
        },
        value: true,
      },
    },
    type: {
      blueId: 'F5GfdsSNcjLAm9anbfMQqxdxAFonErhU5UXFbQzq1zXY',
    },
  },
  currency2: {
    description:
      'The second currency specified when a pair of currencies is to be evaluated.',
    schema: {
      required: {
        type: {
          blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
        },
        value: true,
      },
    },
    type: {
      blueId: 'F5GfdsSNcjLAm9anbfMQqxdxAFonErhU5UXFbQzq1zXY',
    },
  },
  description:
    'A class that describes the composition of a rate that has been quoted or is to be quoted. This includes the two currencies and the quotation relationship between the two currencies and is used as a building block throughout the FX specification.\n',
  name: 'cdm/observable/asset/QuotedCurrencyPair',
  quoteBasis: {
    description: 'The method by which the exchange rate is quoted.',
    schema: {
      required: {
        type: {
          blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
        },
        value: true,
      },
    },
    type: {
      blueId: 'DYuwgUPfQXXLvHYN9CkQCk14eheznpsJXzEVZupjdJdD',
    },
  },
} as const;
