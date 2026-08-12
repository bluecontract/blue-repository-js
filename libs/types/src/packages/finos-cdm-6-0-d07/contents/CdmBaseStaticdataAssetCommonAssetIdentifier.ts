export const CdmBaseStaticdataAssetCommonAssetIdentifier: Record<
  string,
  unknown
> = {
  description:
    'The unique identifier for an Asset, specified using an Asset Identifier Type enumerator.',
  identifier: {
    description: 'The identifier value.',
    schema: {
      required: true,
    },
    type: {
      blueId: 'HvrBWWRL9WzJPU9bs48T3Uf9CcUgCfqtEszZPN3tYS3n',
    },
  },
  identifierType: {
    description:
      'Defines the symbology source of the Asset Identifier, eg CUSIP, ISIN, etc.',
    schema: {
      required: true,
    },
    type: {
      blueId: 'DPpK6uSzRAk9eCFgyAjjWcEV4wMhTwxKHWRWiuXQqBQs',
    },
  },
  name: 'cdm/base/staticdata/asset/common/AssetIdentifier',
};
