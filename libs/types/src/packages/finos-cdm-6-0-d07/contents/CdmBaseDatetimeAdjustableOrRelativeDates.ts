export const CdmBaseDatetimeAdjustableOrRelativeDates = {
  adjustableDates: {
    description:
      'A series of dates that shall be subject to adjustment if they would otherwise fall on a day that is not a business day in the specified business centers, together with the convention for adjusting the date.\n',
    type: {
      blueId: '3UQyaunu7noHsnkXtFNJHuwdv1AH6Uq6MZ1bZSHN9hYW',
    },
  },
  description:
    'A class giving the choice between defining a series of dates as an explicit list of dates together with applicable adjustments or as relative to some other series of (anchor) dates.\n',
  name: 'cdm/base/datetime/AdjustableOrRelativeDates',
  relativeDates: {
    description:
      'A series of dates specified as some offset to another series of dates (the anchor dates).',
    type: {
      blueId: '2B96QnMxNfXMKPboSVa6Jpe7kf5J5A31gxoB2B9cNLjJ',
    },
  },
} as const;
