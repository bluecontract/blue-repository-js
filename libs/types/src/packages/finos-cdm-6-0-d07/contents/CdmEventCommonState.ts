export const CdmEventCommonState = {
  closedState: {
    description:
      "Represents the qualification of what led to the trade's closure alongside the dates on which this closure took effect.\n",
    type: {
      blueId: '3FwnfmPe8axs9Sr2iFvR9Qg5tKQmQpQYDYFksE9EHFxF',
    },
  },
  description:
    "Defines the state of a trade at a point in the Trade's life cycle. Trades have many state dimensions, all of which are represented here. For example, states useful for position keeping are represented alongside those needed for regulatory reporting.\n",
  name: 'cdm/event/common/State',
  positionState: {
    description:
      'Identifies the state of the position, to distinguish if just executed, formed, already settled, closed, etc.',
    type: {
      blueId: 'H8eopTmsWExtp1LBnrmRgLseBswCZb7FcMX44dWKFNQd',
    },
  },
} as const;
