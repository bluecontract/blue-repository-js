export const CdmProductCommonScheduleAveragingPeriod: Record<string, unknown> =
  {
    averagingDateTimes: {
      description:
        'An unweighted list of averaging observation date and times.',
      type: {
        blueId: 'pyxT9DcFhciMsTbfdSBW4nzkWrgN85S2H95X4k21814',
      },
    },
    averagingObservations: {
      description: 'A weighted list of averaging observation date and times.',
      type: {
        blueId: '9VuZT1q9y8HMV24KTiHrvnnkNBznHmHcHeoX9QgJSuw6',
      },
    },
    description: 'Period over which an average value is taken.',
    marketDisruption: {
      description:
        'The market disruption event as defined by ISDA 2002 Definitions.',
      type: {
        blueId: '2mUG6yVN1o4wufU3eqD46MgJ7jFsjjB6XVZAGeFU8AAM',
      },
    },
    name: 'cdm/product/common/schedule/AveragingPeriod',
    schedule: {
      description: 'A schedule for generating averaging observation dates.',
      itemType: {
        blueId: 'hjVS7GrE9QqNFk61XTvTkP6ktQxzv96UUaGK74mg9YK',
      },
      schema: {
        minItems: 0,
      },
      type: {
        blueId: '8DSFoWG9MqRSUhStqoPLrwVQiYByRh18NWbDEarN8MKF',
      },
    },
  };
