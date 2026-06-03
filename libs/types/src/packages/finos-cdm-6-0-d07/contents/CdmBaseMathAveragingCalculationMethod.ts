export const CdmBaseMathAveragingCalculationMethod: Record<string, unknown> = {
  calculationMethod: {
    description:
      'Identifies which of the Pythagorean means is being used to compute an average value.',
    schema: {
      required: true,
    },
    type: {
      blueId: 'D8BAM3Ef8YgktLMNJZg82NyQjEWkwYXQ2pZYpzsXPtnQ',
    },
  },
  description:
    'Defines the ways in which multiple values can be aggregated into a single value.',
  isWeighted: {
    description:
      'Identifies whether the average values will be weighted or unweighted.',
    schema: {
      required: true,
    },
    type: {
      blueId: 'AwvXD961fmnmqcSQhjMA7r15HpVh39cefb6ZTyUz2Fm2',
    },
  },
  name: 'cdm/base/math/AveragingCalculationMethod',
};
