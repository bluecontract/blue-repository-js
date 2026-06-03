export const CdmBaseDatetimePeriodBound: Record<string, unknown> = {
  description:
    'Indicator to specify if the period bound is defined as a period and whether the bound is inclusive.',
  inclusive: {
    description:
      'Specifies whether the period bound is inclusive, e.g. for a lower bound, false would indicate greater than, whereas true would indicate greater than or equal to.\n',
    schema: {
      required: true,
    },
    type: {
      blueId: 'AwvXD961fmnmqcSQhjMA7r15HpVh39cefb6ZTyUz2Fm2',
    },
  },
  name: 'cdm/base/datetime/PeriodBound',
  period: {
    description: 'Specifies the period is to be used as the bound, e.g. 5Y.',
    schema: {
      required: true,
    },
    type: {
      blueId: 'G5BwzTWEaA14NoPKn8iSwCnmwnWuQegPHZwrpgagS6kY',
    },
  },
};
