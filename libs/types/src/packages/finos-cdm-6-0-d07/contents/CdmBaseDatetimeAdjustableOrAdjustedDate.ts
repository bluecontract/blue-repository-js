export const CdmBaseDatetimeAdjustableOrAdjustedDate = {
  adjustedDate: {
    description:
      'The date once the adjustment has been performed. (Note that this date may change if the business center holidays change).\n',
    type: {
      blueId: 'F5GfdsSNcjLAm9anbfMQqxdxAFonErhU5UXFbQzq1zXY',
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
    'A class for defining a date that shall be subject to adjustment if it would otherwise fall on a day that is not a business day in the specified business centers, together with the convention for adjusting the date.\n',
  name: 'cdm/base/datetime/AdjustableOrAdjustedDate',
  unadjustedDate: {
    description: 'A date subject to adjustment.',
    type: {
      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
    },
  },
} as const;
