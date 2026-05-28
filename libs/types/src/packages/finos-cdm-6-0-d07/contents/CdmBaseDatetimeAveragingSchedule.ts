export const CdmBaseDatetimeAveragingSchedule = {
  averagingPeriodFrequency: {
    description:
      'The frequency at which averaging period occurs with the regular part of the valuation schedule and their roll date convention.\n',
    schema: {
      required: {
        type: {
          blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
        },
        value: true,
      },
    },
    type: {
      blueId: 'DVb1fCp6T4qAajXVrhWU73Yx25sFe7MdqmytdKoz9LuJ',
    },
  },
  description:
    'Class to representing a method for generating a series of dates.',
  endDate: {
    description: 'Date on which this period ends.',
    schema: {
      required: {
        type: {
          blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
        },
        value: true,
      },
    },
    type: {
      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
    },
  },
  name: 'cdm/base/datetime/AveragingSchedule',
  startDate: {
    description: 'Date on which this period begins.',
    schema: {
      required: {
        type: {
          blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
        },
        value: true,
      },
    },
    type: {
      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
    },
  },
} as const;
