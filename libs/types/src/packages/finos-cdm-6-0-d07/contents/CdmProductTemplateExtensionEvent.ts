export const CdmProductTemplateExtensionEvent = {
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
  adjustedExtendedTerminationDate: {
    description:
      'The termination date if an extendible provision is exercised. This date should already be adjusted for any applicable business day convention.\n',
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
    'A data to:  define the adjusted dates associated with an individual extension event.\n',
  name: 'cdm/product/template/ExtensionEvent',
} as const;
