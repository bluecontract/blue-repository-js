export const CdmBaseStaticdataAssetCommonAssetType: Record<string, unknown> = {
  assetType: {
    description: 'Represents a filter based on the type of collateral asset.',
    schema: {
      required: true,
    },
    type: {
      blueId: '7FL7vGvhvZLCWZZPR1Eyoc1iJ69A3jcSF95meBVxT4Qe',
    },
  },
  debtType: {
    description: 'Represents a filter based on the type of bond.',
    type: {
      blueId: '9vqkkCNnmKd3FB5tMAKKYenwq2i3mYyHmgYdPKKqkZ8U',
    },
  },
  description:
    'Represents a class to allow specification of the asset product type.',
  equityType: {
    description: 'Represents a filter based on the type of equity.',
    type: {
      blueId: 'DZstXEXxF1iHJunLqdgbypWWK6H28QwVCtxJRbMUDpza',
    },
  },
  fundType: {
    description: 'Represents a filter based on the type of fund.',
    type: {
      blueId: 'As4LSyzdsEDrcBhhNCQ78eXDcY41rjgBoZJZenTJ2J7F',
    },
  },
  name: 'cdm/base/staticdata/asset/common/AssetType',
  otherAssetType: {
    description: 'Specifies the eligible asset type when not enumerated.',
    itemType: {
      blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
    },
    schema: {
      minItems: 0,
    },
    type: {
      blueId: '8DSFoWG9MqRSUhStqoPLrwVQiYByRh18NWbDEarN8MKF',
    },
  },
  securityType: {
    description: 'Represents a filter based on the type of security.',
    type: {
      blueId: 'EmkPx4XLJeffJqq9EbwZicZCxqAhVBpDz1vu6eP1oTYj',
    },
  },
};
