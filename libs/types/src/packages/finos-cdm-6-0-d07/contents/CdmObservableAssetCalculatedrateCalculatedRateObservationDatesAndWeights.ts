export const CdmObservableAssetCalculatedrateCalculatedRateObservationDatesAndWeights: Record<
  string,
  unknown
> = {
  description:
    'Type for reporting the observations dates and the corresponding weights going into a daily calculated rate',
  name: 'cdm/observable/asset/calculatedrate/CalculatedRateObservationDatesAndWeights',
  observationDates: {
    description: 'The observation date upon which the rate is observed.',
    itemType: {
      blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
    },
    schema: {
      minItems: 0,
    },
    type: {
      blueId: '8DSFoWG9MqRSUhStqoPLrwVQiYByRh18NWbDEarN8MKF',
    },
  },
  weights: {
    description: 'The corresponding weight for each date.',
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
