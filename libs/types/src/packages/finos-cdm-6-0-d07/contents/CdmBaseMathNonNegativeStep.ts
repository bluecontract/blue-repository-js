export const CdmBaseMathNonNegativeStep: Record<string, unknown> = {
  description:
    'A class defining a step date and non-negative step value pair. This step definitions are used to define varying rate or amount schedules, e.g. a notional amortisation or a step-up coupon schedule.\n',
  name: 'cdm/base/math/NonNegativeStep',
  stepDate: {
    description:
      'The date on which the associated stepValue becomes effective. This day may be subject to adjustment in accordance with a business day convention.\n',
    schema: {
      required: true,
    },
    type: {
      blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
    },
  },
  stepValue: {
    description:
      'The non-negative rate or amount which becomes effective on the associated stepDate. A rate of 5% would be represented as 0.05.\n',
    schema: {
      required: true,
    },
    type: {
      blueId: '9eWaHYz2vKrFofdHTHAizNNu8xP6QE3WQ5y7DGrGZvyJ',
    },
  },
};
