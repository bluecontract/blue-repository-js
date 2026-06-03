export const CdmBaseDatetimeDateRange: Record<string, unknown> = {
  description:
    'A class defining a contiguous series of calendar dates. The date range is defined as all the dates between and including the start and the end date. The start date must fall on or before the end date.\n',
  endDate: {
    description: 'The last date of a date range.',
    schema: {
      required: true,
    },
    type: {
      blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
    },
  },
  name: 'cdm/base/datetime/DateRange',
  startDate: {
    description: 'The first date of a date range.',
    schema: {
      required: true,
    },
    type: {
      blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
    },
  },
};
