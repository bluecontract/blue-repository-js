export const CdmProductTemplateEarlyTerminationEvent: Record<string, unknown> =
  {
    adjustedCashSettlementPaymentDate: {
      description:
        'The date on which the cash settlement amount is paid. This date should already be adjusted for any applicable business date convention.\n',
      schema: {
        required: true,
      },
      type: {
        blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
      },
    },
    adjustedCashSettlementValuationDate: {
      description:
        'The date by which the cash settlement amount must be agreed. This date should already be adjusted for any applicable business day convention.\n',
      schema: {
        required: true,
      },
      type: {
        blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
      },
    },
    adjustedEarlyTerminationDate: {
      description:
        'The early termination date that is applicable if an early termination provision is exercised. This date should already be adjusted for any applicable business day convention.\n',
      schema: {
        required: true,
      },
      type: {
        blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
      },
    },
    adjustedExerciseDate: {
      description:
        'The date on which option exercise takes place. This date should already be adjusted for any applicable business day convention.\n',
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
    description:
      'A data to:  define the adjusted dates associated with an early termination provision.\n',
    name: 'cdm/product/template/EarlyTerminationEvent',
  };
