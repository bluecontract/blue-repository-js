export const CdmBaseDatetimeAdjustableDates = {
  adjustedDate: {
    description:
      'The date(s) once the adjustment has been performed. (Note that this date may change if the business center holidays change).\n',
    itemType: {
      blueId: 'F5GfdsSNcjLAm9anbfMQqxdxAFonErhU5UXFbQzq1zXY',
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
  dateAdjustments: {
    description:
      'The business day convention and financial business centers used for adjusting the date if it would otherwise fall on a day that is not a business date in the specified business centers.\n',
    type: {
      blueId: 'FzKfYNd8fJo646njaxmU3TVbk5BD8txQXnt5NUm8V7sd',
    },
  },
  description:
    'A class for defining a series of dates that shall be subject to adjustment if they would otherwise fall on a day that is not a business day in the specified business centers, together with the convention for adjusting the dates.\n',
  name: 'cdm/base/datetime/AdjustableDates',
  unadjustedDate: {
    description: 'A date subject to adjustment.',
    itemType: {
      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
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
} as const;
