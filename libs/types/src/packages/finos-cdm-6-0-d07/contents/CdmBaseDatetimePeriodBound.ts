export const CdmBaseDatetimePeriodBound = {
  description:
    'Indicator to specify if the period bound is defined as a period and whether the bound is inclusive.',
  inclusive: {
    description:
      'Specifies whether the period bound is inclusive, e.g. for a lower bound, false would indicate greater than, whereas true would indicate greater than or equal to.\n',
    schema: {
      required: {
        type: {
          blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
        },
        value: true,
      },
    },
    type: {
      blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
    },
  },
  name: 'cdm/base/datetime/PeriodBound',
  period: {
    description: 'Specifies the period is to be used as the bound, e.g. 5Y.',
    schema: {
      required: {
        type: {
          blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
        },
        value: true,
      },
    },
    type: {
      blueId: '5rdYwkwGdndCoYmQi9MNzw9SKQZsr68igDgyYFgvNzmh',
    },
  },
} as const;
