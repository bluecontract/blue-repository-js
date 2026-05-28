export const CdmBaseStaticdataAssetCommonProductTaxonomy = {
  description:
    'Specifies the product taxonomy, which is composed of a taxonomy value and a taxonomy source.',
  name: 'cdm/base/staticdata/asset/common/ProductTaxonomy',
  primaryAssetClass: {
    description: 'Classifies the most important risk class of the trade.',
    type: {
      blueId: '4jGK1XJ5V4ZC8QhCScrxssdJY2ocrqSf5He7TPL6E6sE',
    },
  },
  productQualifier: {
    description:
      'Derived from the product payout features using a CDM product qualification function that determines the product type based on the product payout features.\n',
    type: {
      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
    },
  },
  secondaryAssetClass: {
    description: 'Classifies additional risk classes of the trade, if any.',
    itemType: {
      blueId: '4jGK1XJ5V4ZC8QhCScrxssdJY2ocrqSf5He7TPL6E6sE',
    },
    schema: {
      minItems: {
        type: {
          blueId: '5WNMiV9Knz63B4dVY5JtMyh3FB4FSGqv7ceScvuapdE1',
        },
        value: 0,
      },
    },
    type: {
      blueId: '6aehfNAxHLC1PHHoDr3tYtFH3RWNbiWdFancJ1bypXEY',
    },
  },
  source: {
    description:
      'The source of the taxonomy that defines the rules for classifying the object. The taxonomy source is taken from a enumerated list of taxonomy names. Optional as the taxonomy source may not be provided.\n',
    type: {
      blueId: 'JCJ9MNesX9TGLQYptUpXZV8MhajfmB9tBsCwmJAg1q3K',
    },
  },
  val: {
    description:
      'The value according to that taxonomy. Optional as it may not be possible to classify the object in that taxonomy.\n',
    type: {
      blueId: '2JHuzDshr7hYFEXcgPfEiDuNuEyzHXv79pWqZqYa5FCQ',
    },
  },
} as const;
