export const CdmProductCommonScheduleCalculationPeriodBase: Record<
  string,
  unknown
> = {
  adjustedEndDate: {
    description:
      'The calculation period end date, adjusted according to any relevant business day convention.',
    type: {
      blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
    },
  },
  adjustedStartDate: {
    description:
      'The calculation period start date, adjusted according to any relevant business day convention.',
    type: {
      blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
    },
  },
  description:
    'The calculation period adjusted start and end dates, which are the baseline arguments needed to compute an interest accrual calculation.\n',
  name: 'cdm/product/common/schedule/CalculationPeriodBase',
};
