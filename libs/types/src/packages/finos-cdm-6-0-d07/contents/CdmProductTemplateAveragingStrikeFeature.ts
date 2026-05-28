export const CdmProductTemplateAveragingStrikeFeature = {
  averagingCalculation: {
    description:
      'Defines parameters for use in cases when a valuation or other term is based on an average of market observations.\n',
    schema: {
      required: {
        type: {
          blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
        },
        value: true,
      },
    },
    type: {
      blueId: 'DgMT9GvGPfVpoxATLX7UH2QtPrCD7csg3P5rdgiQxAUg',
    },
  },
  description:
    'Defines the terms required to calculate the average observations associated with an averaging strike.',
  name: 'cdm/product/template/AveragingStrikeFeature',
  observationTerms: {
    description:
      'Class containing terms that are associated with observing a price/benchmark/index across either single or multple observations.\n',
    schema: {
      required: {
        type: {
          blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
        },
        value: true,
      },
    },
    type: {
      blueId: '3wwdVKCEN7pSLG9mPnXFiizaAo59qz2yQnNHrzGhT59K',
    },
  },
} as const;
