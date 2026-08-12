export const CdmProductTemplateCancellationEvent: Record<string, unknown> = {
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
  description:
    'The adjusted dates for a specific cancellation date, including the adjusted exercise date and adjusted termination date.\n',
  name: 'cdm/product/template/CancellationEvent',
};
