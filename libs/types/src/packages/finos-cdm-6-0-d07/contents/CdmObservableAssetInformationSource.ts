export const CdmObservableAssetInformationSource: Record<string, unknown> = {
  description:
    'A class defining the source for a piece of information (e.g. a rate fix or an FX fixing). The attribute names have been adjusted from FpML to address the fact that the information is not limited to rates.\n',
  name: 'cdm/observable/asset/InformationSource',
  sourcePage: {
    description:
      'A specific page for the source for obtaining a market data point. In FpML, this is specified as a scheme, rateSourcePageScheme, for which no coding Scheme or URI is specified.\n',
    type: {
      blueId: 'HTDqFgte5VF88dLHnCZMjvyetfxfTAKxf9r8ciErE7Vg',
    },
  },
  sourcePageHeading: {
    description: 'The heading for the source on a given source page.',
    type: {
      blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
    },
  },
  sourceProvider: {
    description:
      'An information source for obtaining a market data point. For example Bloomberg, Reuters, Telerate, etc.',
    schema: {
      required: true,
    },
    type: {
      blueId: 'JMdjF7BkL7hgbzHsPDqk4D7tgaZ98wirqwFPWCQBuvs',
    },
  },
};
