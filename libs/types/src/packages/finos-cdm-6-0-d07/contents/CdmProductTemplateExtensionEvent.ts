export const CdmProductTemplateExtensionEvent: Record<string, unknown> = {
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
  adjustedExtendedTerminationDate: {
    description:
      'The termination date if an extendible provision is exercised. This date should already be adjusted for any applicable business day convention.\n',
    schema: {
      required: true,
    },
    type: {
      blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
    },
  },
  description:
    'A data to:  define the adjusted dates associated with an individual extension event.\n',
  name: 'cdm/product/template/ExtensionEvent',
};
