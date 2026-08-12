export const CdmBaseStaticdataAssetCommonCommodityReferenceFramework: Record<
  string,
  unknown
> = {
  capacityUnit: {
    description:
      'Provides an enumerated value for a capacity unit, generally used in the context of defining quantities for commodities.\n',
    type: {
      blueId: 'CWSVzp2Q44fquiPqREdwPG58ajzi9BWEUvtYAMNDyDaM',
    },
  },
  commodityName: {
    description:
      'Identifies the commodity more specifically. Where possible, this should follow the naming convention used in the 2005 ISDA Commodity Definitions SubAnnex A, including the subCommodity and additional qualifiers, but should be limited to 256 characters or less.\n',
    schema: {
      required: true,
    },
    type: {
      blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
    },
  },
  currency: {
    description: 'Defines the currency in which the commodity is priced.',
    schema: {
      required: true,
    },
    type: {
      blueId: 'HvrBWWRL9WzJPU9bs48T3Uf9CcUgCfqtEszZPN3tYS3n',
    },
  },
  description: 'Specifies the type of commodity.',
  name: 'cdm/base/staticdata/asset/common/CommodityReferenceFramework',
  weatherUnit: {
    description:
      'Provides an enumerated values for a weather unit, generally used in the context of defining quantities for commodities.\n',
    type: {
      blueId: '3RrCehQPhj94WCGJynzHZHuGPw5Vr6EeghnSE82NtFS6',
    },
  },
};
