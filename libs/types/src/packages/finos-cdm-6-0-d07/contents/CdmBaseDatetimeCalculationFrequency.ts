export const CdmBaseDatetimeCalculationFrequency: Record<string, unknown> = {
  businessCenter: {
    description:
      'Specifies the business center for adjustment of calculation period.',
    itemType: {
      blueId: 'Ftpos6LCMk31PB3e4E1siiMshU1M88BMeTNK4yRypXyL',
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
      blueId: '4Mi73c2rJbGTBeaTVi4xUgW33QBxsUyxSSV6ELoqnP4j',
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
      blueId: 'AYNVNBQsDmS46NA7kfw7jh6eh8DBspyMyDd1bzyBmDG5',
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
      blueId: 'G5BwzTWEaA14NoPKn8iSwCnmwnWuQegPHZwrpgagS6kY',
    },
  },
  weekOfMonth: {
    description: 'Specifies the week of the month if used.',
    type: {
      blueId: '9eWaHYz2vKrFofdHTHAizNNu8xP6QE3WQ5y7DGrGZvyJ',
    },
  },
};
