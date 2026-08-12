export const CdmBaseMathAveragingCalculationMethod: Record<string, unknown> = {
  calculationMethod: {
    description:
      'Identifies which of the Pythagorean means is being used to compute an average value.',
    schema: {
      required: true,
    },
    type: {
      blueId: '518mz1k7ayS8Y3S4y9HauLqAQMigdB4Vf2r7XcVSwyuJ',
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
