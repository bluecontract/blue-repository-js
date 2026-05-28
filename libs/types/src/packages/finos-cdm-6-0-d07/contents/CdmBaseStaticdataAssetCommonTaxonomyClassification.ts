export const CdmBaseStaticdataAssetCommonTaxonomyClassification = {
  className: {
    description:
      'The name defined by the classification system for a specific attribute in the taxonomy',
    type: {
      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
    },
  },
  name: 'cdm/base/staticdata/asset/common/TaxonomyClassification',
  ordinal: {
    description:
      'In the case of multi-layered hierarchical classification systems such as commodity classification, the layer the value and className occupy in the classification hierarchy, where 1 represents the top-layer.\n',
    type: {
      blueId: '5WNMiV9Knz63B4dVY5JtMyh3FB4FSGqv7ceScvuapdE1',
    },
  },
  val: {
    description:
      'The value set by the taxonomy that is specific to the className attribute.',
    schema: {
      required: {
        type: {
          blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
        },
        value: true,
      },
    },
    type: {
      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
    },
  },
} as const;
