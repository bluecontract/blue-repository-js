export const CdmBaseMathDatedValue: Record<string, unknown> = {
  date: {
    description:
      'The date on which the associated step value becomes effective. This day may be subject to adjustment in accordance with a business day convention.\n',
    schema: {
      required: true,
    },
    type: {
      blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
    },
  },
  description:
    'Defines a date and value pair. This definition is used for varying rate or amount schedules, e.g. a notional amortisation or a step-up coupon schedule.\n',
  name: 'cdm/base/math/DatedValue',
  val: {
    description:
      'The rate of amount which becomes effective on the associated step date. A rate of 5% would be represented as 0.05.\n',
    schema: {
      required: true,
    },
    type: {
      blueId: '9eWaHYz2vKrFofdHTHAizNNu8xP6QE3WQ5y7DGrGZvyJ',
    },
  },
};
