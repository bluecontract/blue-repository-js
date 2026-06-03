export const CdmProductTemplateAveragingStrikeFeature: Record<string, unknown> =
  {
    averagingCalculation: {
      description:
        'Defines parameters for use in cases when a valuation or other term is based on an average of market observations.\n',
      schema: {
        required: true,
      },
      type: {
        blueId: 'G81eqYsDuMYSpYk1hESW7JLhMtsEbDs8dVTux7zmXLUZ',
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
        blueId: '9pJEidhmAUQebdR3uTioauH2mNHR8RLS9r7xaB9vxpRd',
      },
    },
  };
