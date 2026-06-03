export const CdmBaseStaticdataAssetCommonCommodityReferenceFramework: Record<
  string,
  unknown
> = {
  capacityUnit: {
    description:
      'Provides an enumerated value for a capacity unit, generally used in the context of defining quantities for commodities.\n',
    type: {
      blueId: 'g4vkocaqQK6FYK1ys61BBsp11Y2Daj3aPCffWwm5Egq',
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
      blueId: 'HTDqFgte5VF88dLHnCZMjvyetfxfTAKxf9r8ciErE7Vg',
    },
  },
  description: 'Specifies the type of commodity.',
  name: 'cdm/base/staticdata/asset/common/CommodityReferenceFramework',
  weatherUnit: {
    description:
      'Provides an enumerated values for a weather unit, generally used in the context of defining quantities for commodities.\n',
    type: {
      blueId: 'DePEyNHqpBtxPVrPYXSKuWt1ugb339xn92ZXP2uKKUgY',
    },
  },
};
