export const CdmObservableAssetCalculatedrateCalculatedRateObservationDatesAndWeights =
  {
    description:
      'Type for reporting the observations dates and the corresponding weights going into a daily calculated rate',
    name: 'cdm/observable/asset/calculatedrate/CalculatedRateObservationDatesAndWeights',
    observationDates: {
      description: 'The observation date upon which the rate is observed.',
      itemType: {
        blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
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
    weights: {
      description: 'The corresponding weight for each date.',
      itemType: {
        blueId: '7pwXmXYCJtWnd348c2JQGBkm9C4renmZRwxbfaypsx5y',
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
