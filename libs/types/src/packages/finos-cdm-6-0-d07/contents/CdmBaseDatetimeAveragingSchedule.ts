export const CdmBaseDatetimeAveragingSchedule: Record<string, unknown> = {
  averagingPeriodFrequency: {
    description:
      'The frequency at which averaging period occurs with the regular part of the valuation schedule and their roll date convention.\n',
    schema: {
      required: true,
    },
    type: {
      blueId: '9F3YEUELa9MSY4ykUnh7PrK9r3EBLoFcHS5v18N9rRrb',
    },
  },
  description:
    'Class to representing a method for generating a series of dates.',
  endDate: {
    description: 'Date on which this period ends.',
    schema: {
      required: true,
    },
    type: {
      blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
    },
  },
  name: 'cdm/base/datetime/AveragingSchedule',
  startDate: {
    description: 'Date on which this period begins.',
    schema: {
      required: true,
    },
    type: {
      blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
    },
  },
};
