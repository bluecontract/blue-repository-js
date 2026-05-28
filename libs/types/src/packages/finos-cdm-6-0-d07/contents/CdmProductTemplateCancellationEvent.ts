export const CdmProductTemplateCancellationEvent = {
  adjustedEarlyTerminationDate: {
    description:
      'The early termination date that is applicable if an early termination provision is exercised. This date should already be adjusted for any applicable business day convention.\n',
    schema: {
      required: {
        type: {
          blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
        },
        value: true,
      },
    },
    type: {
      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
    },
  },
  adjustedExerciseDate: {
    description:
      'The date on which option exercise takes place. This date should already be adjusted for any applicable business day convention.\n',
    schema: {
      required: {
        type: {
          blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
        },
        value: true,
      },
    },
    type: {
      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
    },
  },
  description:
    'The adjusted dates for a specific cancellation date, including the adjusted exercise date and adjusted termination date.\n',
  name: 'cdm/product/template/CancellationEvent',
} as const;
