export const CdmBaseDatetimePeriodicDates = {
  dayType: {
    description:
      'Denotes the enumerated values to specify the day type classification used in counting the number of days between two dates.\n',
    type: {
      blueId: '5TzmGki42MGuPUhmSXFrfufu3WDLpyQMvv91eWXoxniX',
    },
  },
  description: 'A class for specifying a calculation period schedule.',
  endDate: {
    description:
      'The end date of the calculation period. FpML specifies that for interest rate swaps this date must only be specified if it is not equal to the termination date. It is always specified in the case of equity swaps with periodic payments. This date may be subject to adjustment in accordance with a business day convention.\n',
    type: {
      blueId: '2tGygxV5BThuWavpJ3T6K3Atw5u4bJZT1Wb2Nxk798dd',
    },
  },
  name: 'cdm/base/datetime/PeriodicDates',
  periodDatesAdjustments: {
    description:
      'The specification of the business day convention and financial business centers used for adjusting any calculation period date if it would otherwise fall on a day that is not a business day in the specified business center.\n',
    type: {
      blueId: 'FzKfYNd8fJo646njaxmU3TVbk5BD8txQXnt5NUm8V7sd',
    },
  },
  periodFrequency: {
    description:
      'The frequency at which calculation period end dates occur with the regular part of the calculation period schedule and their roll date convention.\n',
    type: {
      blueId: 'DVb1fCp6T4qAajXVrhWU73Yx25sFe7MdqmytdKoz9LuJ',
    },
  },
  startDate: {
    description:
      'The start date of the calculation period. FpML specifies that for interest rate swaps this date must only be specified if it is not equal to the effective date. It is always specified in the case of equity swaps and credit default swaps with periodic payments. This date may be subject to adjustment in accordance with a business day convention.\n',
    type: {
      blueId: '2tGygxV5BThuWavpJ3T6K3Atw5u4bJZT1Wb2Nxk798dd',
    },
  },
} as const;
