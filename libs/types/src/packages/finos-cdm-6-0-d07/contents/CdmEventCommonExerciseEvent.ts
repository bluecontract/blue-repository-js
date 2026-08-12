export const CdmEventCommonExerciseEvent: Record<string, unknown> = {
  adjustedCashSettlementPaymentDate: {
    description:
      'The date on which the cash settlement amount is paid. This date should already be adjusted for any applicable business day convention.\n',
    type: {
      blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
    },
  },
  adjustedCashSettlementValuationDate: {
    description:
      'The date by which the cash settlement amount must be agreed. This date should already be adjusted for any applicable business day convention.\n',
    type: {
      blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
    },
  },
  adjustedExerciseDate: {
    description:
      'The date on which the option exercise takes place. This date should already be adjusted for any applicable business day convention.\n',
    schema: {
      required: true,
    },
    type: {
      blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
    },
  },
  adjustedExerciseFeePaymentDate: {
    description:
      'The date on which the exercise fee amount is paid. This date should already be adjusted for any applicable business day convention.\n',
    type: {
      blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
    },
  },
  adjustedRelevantSwapEffectiveDate: {
    description:
      'The effective date of the underlying swap associated with a given exercise date. This date should already be adjusted for any applicable business day convention.\n',
    schema: {
      required: true,
    },
    type: {
      blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
    },
  },
  description:
    'A data defining:  the adjusted dates associated with a particular exercise event.\n',
  name: 'cdm/event/common/ExerciseEvent',
};
