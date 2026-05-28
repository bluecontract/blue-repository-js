export const CdmBaseDatetimeCalculationFrequency = {
  businessCenter: {
    description:
      'Specifies the business center for adjustment of calculation period.',
    itemType: {
      blueId: 'T68z84ntdBb19juBApDyMAndAVUzzmotTGUTuJnHV3D',
    },
    schema: {
      minItems: {
        type: {
          blueId: '5WNMiV9Knz63B4dVY5JtMyh3FB4FSGqv7ceScvuapdE1',
        },
        value: 0,
      },
    },
    type: {
      blueId: '6aehfNAxHLC1PHHoDr3tYtFH3RWNbiWdFancJ1bypXEY',
    },
  },
  dateLocation: {
    description: 'Specifies where is the time measured.',
    schema: {
      required: {
        type: {
          blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
        },
        value: true,
      },
    },
    type: {
      blueId: 'AYcPv3zXSTKojz4MpYi8KWL5Z9TVBuzNzHmzsZe3cYcC',
    },
  },
  dayOfMonth: {
    description: 'Specifies the day of the month if used.',
    type: {
      blueId: '7pwXmXYCJtWnd348c2JQGBkm9C4renmZRwxbfaypsx5y',
    },
  },
  dayOfWeek: {
    description: 'Specifies the day of the week if used.',
    type: {
      blueId: 'HF3CKQiKCRyZGK1Um3jMYPpiothNepYg5tDmY7KzPphK',
    },
  },
  description:
    'Represents the parameters for describing how often something (such as collateral interest) is to be calculated.\n',
  monthOfYear: {
    description: 'Specifies the month of the year if used.',
    type: {
      blueId: '7pwXmXYCJtWnd348c2JQGBkm9C4renmZRwxbfaypsx5y',
    },
  },
  name: 'cdm/base/datetime/CalculationFrequency',
  offsetDays: {
    description:
      'Specifies how many days from the trigger event should the payment occur.',
    schema: {
      required: {
        type: {
          blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
        },
        value: true,
      },
    },
    type: {
      blueId: '7pwXmXYCJtWnd348c2JQGBkm9C4renmZRwxbfaypsx5y',
    },
  },
  period: {
    description:
      'Specifies the time period at which calculation is performed, e.g. 1 month.',
    schema: {
      required: {
        type: {
          blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
        },
        value: true,
      },
    },
    type: {
      blueId: '5rdYwkwGdndCoYmQi9MNzw9SKQZsr68igDgyYFgvNzmh',
    },
  },
  weekOfMonth: {
    description: 'Specifies the week of the month if used.',
    type: {
      blueId: '7pwXmXYCJtWnd348c2JQGBkm9C4renmZRwxbfaypsx5y',
    },
  },
} as const;
