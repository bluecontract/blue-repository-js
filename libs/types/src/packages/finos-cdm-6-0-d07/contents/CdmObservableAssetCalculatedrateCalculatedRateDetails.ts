export const CdmObservableAssetCalculatedrateCalculatedRateDetails: Record<
  string,
  unknown
> = {
  aggregateValue: {
    description:
      'The total sum or product of all the individual terms that went into the calculated rate.',
    type: {
      blueId: '9eWaHYz2vKrFofdHTHAizNNu8xP6QE3WQ5y7DGrGZvyJ',
    },
  },
  aggregateWeight: {
    description:
      'The total weight of all the terms that went into the calculated rate.',
    type: {
      blueId: '9eWaHYz2vKrFofdHTHAizNNu8xP6QE3WQ5y7DGrGZvyJ',
    },
  },
  calculatedRate: {
    description: 'The resulting calculated weight.',
    type: {
      blueId: '9eWaHYz2vKrFofdHTHAizNNu8xP6QE3WQ5y7DGrGZvyJ',
    },
  },
  compoundedGrowth: {
    description:
      'The compounding curve, showing how the initial value grew during the calculation period.',
    itemType: {
      blueId: '9eWaHYz2vKrFofdHTHAizNNu8xP6QE3WQ5y7DGrGZvyJ',
    },
    schema: {
      minItems: 0,
    },
    type: {
      blueId: '8DSFoWG9MqRSUhStqoPLrwVQiYByRh18NWbDEarN8MKF',
    },
  },
  description:
    'Type for reporting details of calculated rates, including the observations that went into the final reported rate.\n',
  growthFactor: {
    description:
      'The daily growth factors, showing the weighted rates divided by the day count basis plus one, giving how much the value grows for each step in the calculation.\n',
    itemType: {
      blueId: '9eWaHYz2vKrFofdHTHAizNNu8xP6QE3WQ5y7DGrGZvyJ',
    },
    schema: {
      minItems: 0,
    },
    type: {
      blueId: '8DSFoWG9MqRSUhStqoPLrwVQiYByRh18NWbDEarN8MKF',
    },
  },
  name: 'cdm/observable/asset/calculatedrate/CalculatedRateDetails',
  observations: {
    description: 'The observation dates and weights for each observation date.',
    type: {
      blueId: '7Kqgo4RtJQZGhk5UdaMbXdKzqsfxFftZELqoLU9FoXyE',
    },
  },
  weightedRates: {
    description: 'The weighted value of each observation.',
    itemType: {
      blueId: '9eWaHYz2vKrFofdHTHAizNNu8xP6QE3WQ5y7DGrGZvyJ',
    },
    schema: {
      minItems: 0,
    },
    type: {
      blueId: '8DSFoWG9MqRSUhStqoPLrwVQiYByRh18NWbDEarN8MKF',
    },
  },
};
