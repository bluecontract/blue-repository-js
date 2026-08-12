export const CdmBaseDatetimeAdjustableRelativeOrPeriodicDates: Record<
  string,
  unknown
> = {
  adjustableDates: {
    description:
      'A series of dates that shall be subject to adjustment if they would otherwise fall on a day that is not a business day in the specified business centers, together with the convention for adjusting the date.\n',
    type: {
      blueId: 'ATwFe4A6KM2pwcq5ezVugmeREzNVytoPxpU4UgV8Nhdt',
    },
  },
  description:
    'A class giving the choice between defining a series of dates as an explicit list of dates together with applicable adjustments or as relative to some other series of (anchor) dates, or as a calculation period schedule.\n',
  name: 'cdm/base/datetime/AdjustableRelativeOrPeriodicDates',
  periodicDates: {
    description: 'A calculation period schedule.',
    type: {
      blueId: 'BzeLMQ2szfXctEZbXkHo6YK8X9oAyGG7RMSQ8DefBrFB',
    },
  },
  relativeDates: {
    description:
      'A series of dates specified as some offset to another series of dates (the anchor dates).',
    type: {
      blueId: 'EKfLs9rHaB8brKCyK3GJJ921tVXYtjAM9Err32UYpwXp',
    },
  },
};
