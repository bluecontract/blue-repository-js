export const CdmBaseMathAveragingCalculationMethod = {
  calculationMethod: {
    description:
      'Identifies which of the Pythagorean means is being used to compute an average value.',
    schema: {
      required: {
        type: {
          blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
        },
        value: true,
      },
    },
    type: {
      blueId: '4W3FMfAf11hDkmCcU5z9e73aZtzoh9ZyM9gN7himsoy2',
    },
  },
  description:
    'Defines the ways in which multiple values can be aggregated into a single value.',
  isWeighted: {
    description:
      'Identifies whether the average values will be weighted or unweighted.',
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
  name: 'cdm/base/math/AveragingCalculationMethod',
} as const;
