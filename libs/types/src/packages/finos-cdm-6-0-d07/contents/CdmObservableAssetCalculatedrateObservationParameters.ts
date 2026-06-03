export const CdmObservableAssetCalculatedrateObservationParameters: Record<
  string,
  unknown
> = {
  description:
    'Parameters on daily observed computed rates, specifically daily caps and floors. This type is used to represent modular computed rates in interestRatePayouts.\n',
  name: 'cdm/observable/asset/calculatedrate/ObservationParameters',
  observationCapRate: {
    description: 'A daily observation cap rate.',
    type: {
      blueId: '9eWaHYz2vKrFofdHTHAizNNu8xP6QE3WQ5y7DGrGZvyJ',
    },
  },
  observationFloorRate: {
    description: 'A daily observation floor rate.',
    type: {
      blueId: '9eWaHYz2vKrFofdHTHAizNNu8xP6QE3WQ5y7DGrGZvyJ',
    },
  },
};
