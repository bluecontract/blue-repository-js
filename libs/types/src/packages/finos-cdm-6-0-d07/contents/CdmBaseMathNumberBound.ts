export const CdmBaseMathNumberBound: Record<string, unknown> = {
  description:
    'The number bound is defined as a number and whether the bound is inclusive.',
  inclusive: {
    description:
      'Whether the number bound is inclusive, e.g. for a lower bound, false would indicate greater than, whereas true would indicate greater than or equal to.\n',
    schema: {
      required: true,
    },
    type: {
      blueId: 'AwvXD961fmnmqcSQhjMA7r15HpVh39cefb6ZTyUz2Fm2',
    },
  },
  name: 'cdm/base/math/NumberBound',
  number: {
    description: 'The number to be used as the bound, e.g. 5.',
    schema: {
      required: true,
    },
    type: {
      blueId: '9eWaHYz2vKrFofdHTHAizNNu8xP6QE3WQ5y7DGrGZvyJ',
    },
  },
};
