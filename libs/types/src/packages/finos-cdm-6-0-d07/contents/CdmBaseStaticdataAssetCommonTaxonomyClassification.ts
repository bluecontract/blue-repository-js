export const CdmBaseStaticdataAssetCommonTaxonomyClassification: Record<
  string,
  unknown
> = {
  className: {
    description:
      'The name defined by the classification system for a specific attribute in the taxonomy',
    type: {
      blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
    },
  },
  name: 'cdm/base/staticdata/asset/common/TaxonomyClassification',
  ordinal: {
    description:
      'In the case of multi-layered hierarchical classification systems such as commodity classification, the layer the value and className occupy in the classification hierarchy, where 1 represents the top-layer.\n',
    type: {
      blueId: 'E2LM6qgzWG9ttagq2xTmiZkgYEAgkYedFCmU9v7NnVEq',
    },
  },
  val: {
    description:
      'The value set by the taxonomy that is specific to the className attribute.',
    schema: {
      required: true,
    },
    type: {
      blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
    },
  },
};
