export const CdmObservableAssetRateObservation: Record<string, unknown> = {
  adjustedFixingDate: {
    description:
      'The adjusted fixing date, i.e. the actual date the rate is observed. The date should already be adjusted for any applicable business day convention.\n',
    type: {
      blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
    },
  },
  description:
    'A class defining parameters associated with an individual observation or fixing. This class forms part of the cashflow representation of a stream.\n',
  forecastRate: {
    description:
      'The value representing the forecast rate used to calculate the forecast future value of the accrual period.A value of 1% should be represented as 0.01.\n',
    type: {
      blueId: '9eWaHYz2vKrFofdHTHAizNNu8xP6QE3WQ5y7DGrGZvyJ',
    },
  },
  name: 'cdm/observable/asset/RateObservation',
  observationWeight: {
    description:
      'The number of days weighting to be associated with the rate observation, i.e. the number of days such rate is in effect. This is applicable in the case of a weighted average method of calculation where more than one reset date is established for a single calculation period.\n',
    type: {
      blueId: 'E2LM6qgzWG9ttagq2xTmiZkgYEAgkYedFCmU9v7NnVEq',
    },
  },
  observedRate: {
    description:
      'The actual observed rate before any required rate treatment is applied, e.g. before converting a rate quoted on a discount basis to an equivalent yield. An observed rate of 5% would be represented as 0.05.\n',
    type: {
      blueId: '9eWaHYz2vKrFofdHTHAizNNu8xP6QE3WQ5y7DGrGZvyJ',
    },
  },
  rateReference: {
    description:
      'A pointer style reference to a floating rate component defined as part of a stub calculation period amount component. It is only required when it is necessary to distinguish two rate observations for the same fixing date which could occur when linear interpolation of two different rates occurs for a stub calculation period.\n',
    type: {
      blueId: '5ELPXXGetNc7L1KzToiwonniwtgkJ3BHxxLYZiFDy22x',
    },
  },
  resetDate: {
    description: 'The reset date.',
    type: {
      blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
    },
  },
  treatedForecastRate: {
    description:
      'The value representing the forecast rate after applying rate treatment rules. A value of 1% should be represented as 0.01.\n',
    type: {
      blueId: '9eWaHYz2vKrFofdHTHAizNNu8xP6QE3WQ5y7DGrGZvyJ',
    },
  },
  treatedRate: {
    description:
      'The observed rate after any required rate treatment is applied. A treated rate of 5% would be represented as 0.05.\n',
    type: {
      blueId: '9eWaHYz2vKrFofdHTHAizNNu8xP6QE3WQ5y7DGrGZvyJ',
    },
  },
};
