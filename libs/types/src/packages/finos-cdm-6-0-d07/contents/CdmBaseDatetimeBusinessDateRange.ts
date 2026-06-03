export const CdmBaseDatetimeBusinessDateRange: Record<string, unknown> = {
  businessCenters: {
    description:
      'The business center(s), specified either explicitly or by reference to those specified somewhere else in the instance document.\n',
    type: {
      blueId: 'H53mV1d8rMzhefLZH8WzGchozyQA28cbwNpBHGmVA9ti',
    },
  },
  businessDayConvention: {
    description:
      'The convention for adjusting a date if it would otherwise fall on a day that is not a business day, as specified by an ISDA convention (e.g. Following, Precedent).\n',
    schema: {
      required: true,
    },
    type: {
      blueId: 'UEYhmdmBmLhrdtL1ThGtACP6Ljtvao5EVBeQdbiB2XJ',
    },
  },
  description:
    'A class defining a range of contiguous business days by defining an unadjusted first date, an unadjusted last date and a business day convention and business centers for adjusting the first and last dates if they would otherwise fall on a non business day in the specified business centers. The days between the first and last date must also be good business days in the specified centers to be counted in the range.\n',
  endDate: {
    description: 'The last date of a date range.',
    type: {
      blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
    },
  },
  name: 'cdm/base/datetime/BusinessDateRange',
  startDate: {
    description: 'The first date of a date range.',
    type: {
      blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
    },
  },
};
