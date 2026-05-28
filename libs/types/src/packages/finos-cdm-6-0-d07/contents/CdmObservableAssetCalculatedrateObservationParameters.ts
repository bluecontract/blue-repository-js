export const CdmObservableAssetCalculatedrateObservationParameters = {
  description:
    'Parameters on daily observed computed rates, specifically daily caps and floors. This type is used to represent modular computed rates in interestRatePayouts.\n',
  name: 'cdm/observable/asset/calculatedrate/ObservationParameters',
  observationCapRate: {
    description: 'A daily observation cap rate.',
    type: {
      blueId: '7pwXmXYCJtWnd348c2JQGBkm9C4renmZRwxbfaypsx5y',
    },
  },
  observationFloorRate: {
    description: 'A daily observation floor rate.',
    type: {
      blueId: '7pwXmXYCJtWnd348c2JQGBkm9C4renmZRwxbfaypsx5y',
    },
  },
} as const;
