export const CdmBaseDatetimeAdjustableDate = {
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
  dateAdjustmentsReference: {
    description:
      'A pointer style reference to date adjustments defined elsewhere in the document.',
    type: {
      blueId: '3LPKhzVGjkHFZMKRZJovvBn66KELQss6RiFVVDaqjC4c',
    },
  },
  description:
    'A class for defining a date that shall be subject to adjustment if it would otherwise fall on a day that is not a business day in the specified business centers, together with the convention for adjusting the date.\n',
  name: 'cdm/base/datetime/AdjustableDate',
  unadjustedDate: {
    description:
      'A date subject to adjustment. While in FpML this date is required, this cardinality constraint has been relaxed as part of the CDM in order to support the FRA representation, which effective and termination dates are specified in FpML as adjusted dates.\n',
    type: {
      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
    },
  },
} as const;
