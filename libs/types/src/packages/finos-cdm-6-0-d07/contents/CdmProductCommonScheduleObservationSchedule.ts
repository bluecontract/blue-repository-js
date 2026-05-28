export const CdmProductCommonScheduleObservationSchedule = {
  dateAdjustments: {
    description:
      'The business day convention and financial business centers used for adjusting the date if it would otherwise fall on a day that is not a business date in the specified business centers.\n',
    type: {
      blueId: 'FzKfYNd8fJo646njaxmU3TVbk5BD8txQXnt5NUm8V7sd',
    },
  },
  description:
    'Specifies a single date on which market observations take place and specifies optional associated weighting.',
  name: 'cdm/product/common/schedule/ObservationSchedule',
  observationDate: {
    description:
      'Specifies an adjusted or unadjusted date for a market observation.',
    itemType: {
      blueId: '2jeU259hBuPLHL5wYMHnutcujA2porimr9ETLQNUcyCc',
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
