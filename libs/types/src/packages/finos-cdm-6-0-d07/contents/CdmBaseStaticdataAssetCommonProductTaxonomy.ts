export const CdmBaseStaticdataAssetCommonProductTaxonomy: Record<
  string,
  unknown
> = {
  description:
    'Specifies the product taxonomy, which is composed of a taxonomy value and a taxonomy source.',
  name: 'cdm/base/staticdata/asset/common/ProductTaxonomy',
  primaryAssetClass: {
    description: 'Classifies the most important risk class of the trade.',
    type: {
      blueId: 'DvnafttCVMzGEcQC34ARZkLMZfgEVv5CcjPrtA2b5f3L',
    },
  },
  productQualifier: {
    description:
      'Derived from the product payout features using a CDM product qualification function that determines the product type based on the product payout features.\n',
    type: {
      blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
    },
  },
  secondaryAssetClass: {
    description: 'Classifies additional risk classes of the trade, if any.',
    itemType: {
      blueId: 'DvnafttCVMzGEcQC34ARZkLMZfgEVv5CcjPrtA2b5f3L',
    },
    schema: {
      minItems: 0,
    },
    type: {
      blueId: '8DSFoWG9MqRSUhStqoPLrwVQiYByRh18NWbDEarN8MKF',
    },
  },
  source: {
    description:
      'The source of the taxonomy that defines the rules for classifying the object. The taxonomy source is taken from a enumerated list of taxonomy names. Optional as the taxonomy source may not be provided.\n',
    type: {
      blueId: 'CUzMUxNcMqZb1GuDaw2n29RnNcaPce9HrpKAyz8gT2m8',
    },
  },
  val: {
    description:
      'The value according to that taxonomy. Optional as it may not be possible to classify the object in that taxonomy.\n',
    type: {
      blueId: 'EnoVKrrGFyBuE513RQdZXz4EPFgLMoR13a5djKi32gB9',
    },
  },
};
