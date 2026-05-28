export const CdmProductTemplateEarlyTerminationEvent = {
  adjustedCashSettlementPaymentDate: {
    description:
      'The date on which the cash settlement amount is paid. This date should already be adjusted for any applicable business date convention.\n',
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
  adjustedCashSettlementValuationDate: {
    description:
      'The date by which the cash settlement amount must be agreed. This date should already be adjusted for any applicable business day convention.\n',
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
  adjustedExerciseFeePaymentDate: {
    description:
      'The date on which the exercise fee amount is paid. This date should already be adjusted for any applicable business day convention.\n',
    type: {
      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
    },
  },
  description:
    'A data to:  define the adjusted dates associated with an early termination provision.\n',
  name: 'cdm/product/template/EarlyTerminationEvent',
} as const;
