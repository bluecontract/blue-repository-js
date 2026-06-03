export const CdmProductTemplateAveragingCalculation: Record<string, unknown> = {
  averagingMethod: {
    description:
      'Specifies enumerations for the type of averaging calculation.',
    schema: {
      required: true,
    },
    type: {
      blueId: '2EzRuguKzzQR2u8dtQqTXe7ATvUruro1jyD4Hc8MHaJk',
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
      blueId: 'BYetgNwutc7xjHHx9g7ZhsdKgyGYMd1UR4jDoHHafJHj',
    },
  },
};
