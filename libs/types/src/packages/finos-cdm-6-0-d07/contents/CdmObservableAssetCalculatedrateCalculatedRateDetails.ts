export const CdmObservableAssetCalculatedrateCalculatedRateDetails = {
  aggregateValue: {
    description:
      'The total sum or product of all the individual terms that went into the calculated rate.',
    type: {
      blueId: '7pwXmXYCJtWnd348c2JQGBkm9C4renmZRwxbfaypsx5y',
    },
  },
  aggregateWeight: {
    description:
      'The total weight of all the terms that went into the calculated rate.',
    type: {
      blueId: '7pwXmXYCJtWnd348c2JQGBkm9C4renmZRwxbfaypsx5y',
    },
  },
  calculatedRate: {
    description: 'The resulting calculated weight.',
    type: {
      blueId: '7pwXmXYCJtWnd348c2JQGBkm9C4renmZRwxbfaypsx5y',
    },
  },
  compoundedGrowth: {
    description:
      'The compounding curve, showing how the initial value grew during the calculation period.',
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
  description:
    'Type for reporting details of calculated rates, including the observations that went into the final reported rate.\n',
  growthFactor: {
    description:
      'The daily growth factors, showing the weighted rates divided by the day count basis plus one, giving how much the value grows for each step in the calculation.\n',
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
  name: 'cdm/observable/asset/calculatedrate/CalculatedRateDetails',
  observations: {
    description: 'The observation dates and weights for each observation date.',
    type: {
      blueId: 'A3LiTUf3Z3kxSCVRG8KUG4b1N4trvuPs1rXWQ2wDLxTD',
    },
  },
  weightedRates: {
    description: 'The weighted value of each observation.',
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
