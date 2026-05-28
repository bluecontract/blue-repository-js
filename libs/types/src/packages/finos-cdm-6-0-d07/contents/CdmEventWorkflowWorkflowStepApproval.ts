export const CdmEventWorkflowWorkflowStepApproval = {
  approved: {
    description: 'Flag denoting whether the workflow step is approved or not',
    schema: {
      required: {
        type: {
          blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
        },
        value: true,
      },
    },
    type: {
      blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
    },
  },
  description: 'Party approvals associated to the current WorkflowStep.',
  name: 'cdm/event/workflow/WorkflowStepApproval',
  party: {
    description:
      'Reference to the Party who is approving/rejecting this workflow step',
    schema: {
      required: {
        type: {
          blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
        },
        value: true,
      },
    },
    type: {
      blueId: 'GnY3garuhYiHPrATUwY5JKQmZJPACHzjobkgXbmNJCik',
    },
  },
  rejectedReason: {
    description: 'Optional reason for rejecting the workflow step',
    type: {
      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
    },
  },
  timestamp: {
    description: 'Timestamp of the approval',
    schema: {
      required: {
        type: {
          blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
        },
        value: true,
      },
    },
    type: {
      blueId: '29Bam3D6qfaY6wWG9a8BVSCbVzvz6r97xkbk4nU7aU7U',
    },
  },
} as const;
