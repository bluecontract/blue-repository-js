export const CdmObservableAssetInformationSource = {
  description:
    'A class defining the source for a piece of information (e.g. a rate fix or an FX fixing). The attribute names have been adjusted from FpML to address the fact that the information is not limited to rates.\n',
  name: 'cdm/observable/asset/InformationSource',
  sourcePage: {
    description:
      'A specific page for the source for obtaining a market data point. In FpML, this is specified as a scheme, rateSourcePageScheme, for which no coding Scheme or URI is specified.\n',
    type: {
      blueId: 'F5GfdsSNcjLAm9anbfMQqxdxAFonErhU5UXFbQzq1zXY',
    },
  },
  sourcePageHeading: {
    description: 'The heading for the source on a given source page.',
    type: {
      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
    },
  },
  sourceProvider: {
    description:
      'An information source for obtaining a market data point. For example Bloomberg, Reuters, Telerate, etc.',
    schema: {
      required: {
        type: {
          blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
        },
        value: true,
      },
    },
    type: {
      blueId: '4XRAbTxyhpi3g9jM47PSnx6GCzjXS7KbDW8rWLRyKGjA',
    },
  },
} as const;
