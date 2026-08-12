export const CdmObservableAssetFxInformationSource: Record<string, unknown> = {
  description: 'Information source specific to Foreign Exchange products.',
  fixingTime: {
    description:
      'The time that the fixing will be taken along with a business center to define the time zone.',
    type: {
      blueId: '4muK6BKTZZzEij2eR3Dg7sQxj224LzRoyzr5n7UcAR3X',
    },
  },
  name: 'cdm/observable/asset/FxInformationSource',
  sourcePage: {
    description:
      'A specific page for the source for obtaining a market data point. In FpML, this is specified as a scheme, rateSourcePageScheme, for which no coding Scheme or URI is specified.\n',
    type: {
      blueId: 'HvrBWWRL9WzJPU9bs48T3Uf9CcUgCfqtEszZPN3tYS3n',
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
      blueId: 'GyHRCQjZiCev41ByZKVY3E3nnyf5EZ3DkPr6Fat2V2GL',
    },
  },
};
