export const CdmObservableAssetFxInformationSource = {
  description: 'Information source specific to Foreign Exchange products.',
  fixingTime: {
    description:
      'The time that the fixing will be taken along with a business center to define the time zone.',
    type: {
      blueId: 'AYcPv3zXSTKojz4MpYi8KWL5Z9TVBuzNzHmzsZe3cYcC',
    },
  },
  name: 'cdm/observable/asset/FxInformationSource',
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
    type: {
      blueId: '4XRAbTxyhpi3g9jM47PSnx6GCzjXS7KbDW8rWLRyKGjA',
    },
  },
} as const;
