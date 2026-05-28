export const CdmProductCommonScheduleAveragingPeriod = {
  averagingDateTimes: {
    description: 'An unweighted list of averaging observation date and times.',
    type: {
      blueId: '6geCuQi9d7Zffp3p3nxFjJBawUz6oUHKH19RmptB9h3H',
    },
  },
  averagingObservations: {
    description: 'A weighted list of averaging observation date and times.',
    type: {
      blueId: 'BXbBNHYXNsAs17oYsKYnKjD8RK186gXxjiPPnFzNiVVU',
    },
  },
  description: 'Period over which an average value is taken.',
  marketDisruption: {
    description:
      'The market disruption event as defined by ISDA 2002 Definitions.',
    type: {
      blueId: 'EuGpRedX58TPU3i5qZ6LxsNcbEJmKoGSNL6ivqwkFYgj',
    },
  },
  name: 'cdm/product/common/schedule/AveragingPeriod',
  schedule: {
    description: 'A schedule for generating averaging observation dates.',
    itemType: {
      blueId: '4gPZWnb1vTp42ssUQer9eA7aUVRjtisHDCL1LhrNuH44',
    },
    schema: {
      minItems: {
        type: {
          blueId: '5WNMiV9Knz63B4dVY5JtMyh3FB4FSGqv7ceScvuapdE1',
        },
        value: 0,
      },
    },
    type: {
      blueId: '6aehfNAxHLC1PHHoDr3tYtFH3RWNbiWdFancJ1bypXEY',
    },
  },
} as const;
