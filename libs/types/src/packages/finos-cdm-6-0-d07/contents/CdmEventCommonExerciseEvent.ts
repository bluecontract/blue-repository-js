export const CdmEventCommonExerciseEvent = {
  adjustedCashSettlementPaymentDate: {
    description:
      'The date on which the cash settlement amount is paid. This date should already be adjusted for any applicable business day convention.\n',
    type: {
      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
    },
  },
  adjustedCashSettlementValuationDate: {
    description:
      'The date by which the cash settlement amount must be agreed. This date should already be adjusted for any applicable business day convention.\n',
    type: {
      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
    },
  },
  adjustedExerciseDate: {
    description:
      'The date on which the option exercise takes place. This date should already be adjusted for any applicable business day convention.\n',
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
  adjustedRelevantSwapEffectiveDate: {
    description:
      'The effective date of the underlying swap associated with a given exercise date. This date should already be adjusted for any applicable business day convention.\n',
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
    'A data defining:  the adjusted dates associated with a particular exercise event.\n',
  name: 'cdm/event/common/ExerciseEvent',
} as const;
