export const CdmProductTemplateAveragingCalculation: Record<string, unknown> = {
  averagingMethod: {
    description:
      'Specifies enumerations for the type of averaging calculation.',
    schema: {
      required: true,
    },
    type: {
      blueId: 'DGXpeuMHKQid6AVaxTWqMtdjUToyiyct3kFynh4rLqD9',
    },
  },
  description:
    'Defines parameters for use in cases when a valuation or other term is based on an average of market observations.\n',
  name: 'cdm/product/template/AveragingCalculation',
  precision: {
    description: 'Rounding applied to the average calculation.',
    schema: {
      required: true,
    },
    type: {
      blueId: '7fpTDBDMKH4SNXoiKP77e98Hh5vZkbVGXSEenFEztVuv',
    },
  },
};
