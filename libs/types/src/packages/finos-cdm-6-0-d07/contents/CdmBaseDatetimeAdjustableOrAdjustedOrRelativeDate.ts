export const CdmBaseDatetimeAdjustableOrAdjustedOrRelativeDate = {
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
    'This Rosetta class specifies the date as either an unadjusted, adjusted or relative date. It supplements the features of the AdjustableOrAdjustedDate to support the credit default swap option premium, which uses the relative date construct.\n',
  name: 'cdm/base/datetime/AdjustableOrAdjustedOrRelativeDate',
  relativeDate: {
    description:
      'A date specified as some offset to another date (the anchor date).',
    type: {
      blueId: '2wAd2mDukRH6r2YEZ4kU9e1fcUYpGHT8ZJEwFZFkKaCL',
    },
  },
  unadjustedDate: {
    description: 'A date subject to adjustment.',
    type: {
      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
    },
  },
} as const;
