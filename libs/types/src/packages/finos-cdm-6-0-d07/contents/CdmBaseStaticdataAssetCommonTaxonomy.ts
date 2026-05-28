export const CdmBaseStaticdataAssetCommonTaxonomy = {
  description:
    'Defines the taxonomy of an object by combining a taxonomy source (i.e. the rules to classify the object) and a value (i.e. the output of those rules on the object).\n',
  name: 'cdm/base/staticdata/asset/common/Taxonomy',
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
