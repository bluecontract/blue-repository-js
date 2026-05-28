export const CdmProductCommonScheduleCalculationPeriodBase = {
  adjustedEndDate: {
    description:
      'The calculation period end date, adjusted according to any relevant business day convention.',
    type: {
      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
    },
  },
  adjustedStartDate: {
    description:
      'The calculation period start date, adjusted according to any relevant business day convention.',
    type: {
      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
    },
  },
  description:
    'The calculation period adjusted start and end dates, which are the baseline arguments needed to compute an interest accrual calculation.\n',
  name: 'cdm/product/common/schedule/CalculationPeriodBase',
} as const;
