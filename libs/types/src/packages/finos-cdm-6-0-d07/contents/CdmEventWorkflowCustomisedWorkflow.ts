export const CdmEventWorkflowCustomisedWorkflow: Record<string, unknown> = {
  description:
    'In its initial iteration, this class is meant to support the DTCC TIW workflow information.',
  itemName: {
    description:
      'In this initial iteration, this corresponds to the DTCC TIW element name.',
    schema: {
      required: true,
    },
    type: {
      blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
    },
  },
  itemValue: {
    description:
      'In this initial iteration, this corresponds to the DTCC value.',
    schema: {
      required: true,
    },
    type: {
      blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
    },
  },
  name: 'cdm/event/workflow/CustomisedWorkflow',
};
