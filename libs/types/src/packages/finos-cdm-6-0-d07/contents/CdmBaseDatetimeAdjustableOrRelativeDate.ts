export const CdmBaseDatetimeAdjustableOrRelativeDate: Record<string, unknown> =
  {
    adjustableDate: {
      description:
        'A date that shall be subject to adjustment if it would otherwise fall on a day that is not a business day in the specified business centers, together with the convention for adjusting the date.\n',
      type: {
        blueId: 'J1kGTdAb67L1bPgvuKZ86jTR9UZJomnkgA6hcnVfnwfD',
      },
    },
    description:
      'A class giving the choice between defining a date as an explicit date together with applicable adjustments or as relative to some other (anchor) date.\n',
    name: 'cdm/base/datetime/AdjustableOrRelativeDate',
    relativeDate: {
      description:
        'A date specified as some offset to another date (the anchor date).',
      type: {
        blueId: '3F5SJZugXTpBEsr5jpbKnam1yzQE7tb7m7ULNAqRK1TT',
      },
    },
  };
