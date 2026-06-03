export const CdmProductCommonScheduleAveragingPeriod: Record<string, unknown> =
  {
    averagingDateTimes: {
      description:
        'An unweighted list of averaging observation date and times.',
      type: {
        blueId: 'H5D8BrpdPx4G3A74ypfsUrC27hh6pjWVeJD3s6bkSu7e',
      },
    },
    averagingObservations: {
      description: 'A weighted list of averaging observation date and times.',
      type: {
        blueId: 'GVFbbaLLLxVnRS8pEFt4Pwr3VMsXjMm2nM6PdGfDenD3',
      },
    },
    description: 'Period over which an average value is taken.',
    marketDisruption: {
      description:
        'The market disruption event as defined by ISDA 2002 Definitions.',
      type: {
        blueId: 'FjySLYZUdztPrBskVvWtnCvGs6KZVkZWrLsrrLpotMYG',
      },
    },
    name: 'cdm/product/common/schedule/AveragingPeriod',
    schedule: {
      description: 'A schedule for generating averaging observation dates.',
      itemType: {
        blueId: 'CR9L4SVmKAvSmKh2xUfY6RvyAg4XL3BwDYCeqWk8ejn8',
      },
      schema: {
        minItems: 0,
      },
      type: {
        blueId: '8DSFoWG9MqRSUhStqoPLrwVQiYByRh18NWbDEarN8MKF',
      },
    },
  };
