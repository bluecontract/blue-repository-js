export const CdmEventWorkflowWorkflowStepApproval: Record<string, unknown> = {
  approved: {
    description: 'Flag denoting whether the workflow step is approved or not',
    schema: {
      required: true,
    },
    type: {
      blueId: 'AwvXD961fmnmqcSQhjMA7r15HpVh39cefb6ZTyUz2Fm2',
    },
  },
  description: 'Party approvals associated to the current WorkflowStep.',
  name: 'cdm/event/workflow/WorkflowStepApproval',
  party: {
    description:
      'Reference to the Party who is approving/rejecting this workflow step',
    schema: {
      required: true,
    },
    type: {
      blueId: 'Doqu2fdYiHUWbSaMDHL5YoyEeuzbTrSjqbT1ZLqmB1Cr',
    },
  },
  rejectedReason: {
    description: 'Optional reason for rejecting the workflow step',
    type: {
      blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
    },
  },
  timestamp: {
    description: 'Timestamp of the approval',
    schema: {
      required: true,
    },
    type: {
      blueId: 'DSJDCMX9fWnAZqseXHzuc3NWEvtct9Ay1D8XqV7Cz8sb',
    },
  },
};
