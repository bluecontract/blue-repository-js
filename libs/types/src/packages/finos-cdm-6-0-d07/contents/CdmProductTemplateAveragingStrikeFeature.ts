export const CdmProductTemplateAveragingStrikeFeature: Record<string, unknown> =
  {
    averagingCalculation: {
      description:
        'Defines parameters for use in cases when a valuation or other term is based on an average of market observations.\n',
      schema: {
        required: true,
      },
      type: {
        blueId: 'Dm6X9rfSBnx7WqRtQ4eeZ3yyCpGqTHJWsE6vycZx4yix',
      },
    },
    description:
      'Defines the terms required to calculate the average observations associated with an averaging strike.',
    name: 'cdm/product/template/AveragingStrikeFeature',
    observationTerms: {
      description:
        'Class containing terms that are associated with observing a price/benchmark/index across either single or multple observations.\n',
      schema: {
        required: true,
      },
      type: {
        blueId: '5hoFwtCWywpjW2iVxqcevJ5qtXxE46qvSVAb8NxpJke',
      },
    },
  };
