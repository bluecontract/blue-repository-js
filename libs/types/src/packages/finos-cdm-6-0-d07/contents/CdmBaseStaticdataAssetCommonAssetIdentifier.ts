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
      blueId: 'HTDqFgte5VF88dLHnCZMjvyetfxfTAKxf9r8ciErE7Vg',
    },
  },
  identifierType: {
    description:
      'Defines the symbology source of the Asset Identifier, eg CUSIP, ISIN, etc.',
    schema: {
      required: true,
    },
    type: {
      blueId: '5mbfUkBFTEYhKyTf1DNksGFTiyJzZooRyUog7hBoYzHC',
    },
  },
  name: 'cdm/base/staticdata/asset/common/AssetIdentifier',
};
