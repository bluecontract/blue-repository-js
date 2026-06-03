export const CdmObservableAssetFxInformationSource: Record<string, unknown> = {
  description: 'Information source specific to Foreign Exchange products.',
  fixingTime: {
    description:
      'The time that the fixing will be taken along with a business center to define the time zone.',
    type: {
      blueId: '4Mi73c2rJbGTBeaTVi4xUgW33QBxsUyxSSV6ELoqnP4j',
    },
  },
  name: 'cdm/observable/asset/FxInformationSource',
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
    type: {
      blueId: 'JMdjF7BkL7hgbzHsPDqk4D7tgaZ98wirqwFPWCQBuvs',
    },
  },
};
