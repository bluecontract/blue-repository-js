export const CdmBaseDatetimeAdjustableOrRelativeDate = {
  adjustableDate: {
    description:
      'A date that shall be subject to adjustment if it would otherwise fall on a day that is not a business day in the specified business centers, together with the convention for adjusting the date.\n',
    type: {
      blueId: '4Ro4tKrST2yaBWNytCjLJMhx3DMoAXwqU1W6HBKrnfRn',
    },
  },
  description:
    'A class giving the choice between defining a date as an explicit date together with applicable adjustments or as relative to some other (anchor) date.\n',
  name: 'cdm/base/datetime/AdjustableOrRelativeDate',
  relativeDate: {
    description:
      'A date specified as some offset to another date (the anchor date).',
    type: {
      blueId: 'DMeQ9ECaWbb3DdSYMpZmd7xvFu5cGC4dptRizNCch8D2',
    },
  },
} as const;
