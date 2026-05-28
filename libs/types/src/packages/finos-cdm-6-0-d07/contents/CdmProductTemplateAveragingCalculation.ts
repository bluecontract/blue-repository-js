export const CdmProductTemplateAveragingCalculation = {
  averagingMethod: {
    description:
      'Specifies enumerations for the type of averaging calculation.',
    schema: {
      required: {
        type: {
          blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
        },
        value: true,
      },
    },
    type: {
      blueId: 'AhJDsRsjAqd5ThJefWvZsh3Zp5VREyt5SvAhpzMNhZMz',
    },
  },
  description:
    'Defines parameters for use in cases when a valuation or other term is based on an average of market observations.\n',
  name: 'cdm/product/template/AveragingCalculation',
  precision: {
    description: 'Rounding applied to the average calculation.',
    schema: {
      required: {
        type: {
          blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
        },
        value: true,
      },
    },
    type: {
      blueId: 'ArfQ58kSzN4QkRNkhhMYbmgBrEGPrnnSSA4sgC1Stoho',
    },
  },
} as const;
