export const CdmBaseDatetimeCalculationFrequency: Record<string, unknown> = {
  businessCenter: {
    description:
      'Specifies the business center for adjustment of calculation period.',
    itemType: {
      blueId: 'Gpw3zDUDENr9thYruxb1S1firzfQSgHYJs5W3zaBbAzN',
    },
    schema: {
      minItems: 0,
    },
    type: {
      blueId: '8DSFoWG9MqRSUhStqoPLrwVQiYByRh18NWbDEarN8MKF',
    },
  },
  dateLocation: {
    description: 'Specifies where is the time measured.',
    schema: {
      required: true,
    },
    type: {
      blueId: '4muK6BKTZZzEij2eR3Dg7sQxj224LzRoyzr5n7UcAR3X',
    },
  },
  dayOfMonth: {
    description: 'Specifies the day of the month if used.',
    type: {
      blueId: '9eWaHYz2vKrFofdHTHAizNNu8xP6QE3WQ5y7DGrGZvyJ',
    },
  },
  dayOfWeek: {
    description: 'Specifies the day of the week if used.',
    type: {
      blueId: 'DmhfCUUAaa5kZ8Qsom8VwEsMN3qmGWaJX1pGtUCfbqRQ',
    },
  },
  description:
    'Represents the parameters for describing how often something (such as collateral interest) is to be calculated.\n',
  monthOfYear: {
    description: 'Specifies the month of the year if used.',
    type: {
      blueId: '9eWaHYz2vKrFofdHTHAizNNu8xP6QE3WQ5y7DGrGZvyJ',
    },
  },
  name: 'cdm/base/datetime/CalculationFrequency',
  offsetDays: {
    description:
      'Specifies how many days from the trigger event should the payment occur.',
    schema: {
      required: true,
    },
    type: {
      blueId: '9eWaHYz2vKrFofdHTHAizNNu8xP6QE3WQ5y7DGrGZvyJ',
    },
  },
  period: {
    description:
      'Specifies the time period at which calculation is performed, e.g. 1 month.',
    schema: {
      required: true,
    },
    type: {
      blueId: '2eRPMxKZ8upfUGCDqNY6xXko7GTGvozudp1i9wznQmXL',
    },
  },
  weekOfMonth: {
    description: 'Specifies the week of the month if used.',
    type: {
      blueId: '9eWaHYz2vKrFofdHTHAizNNu8xP6QE3WQ5y7DGrGZvyJ',
    },
  },
};
