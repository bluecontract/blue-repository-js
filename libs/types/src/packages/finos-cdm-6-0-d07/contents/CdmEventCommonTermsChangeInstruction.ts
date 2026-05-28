export const CdmEventCommonTermsChangeInstruction = {
  adjustment: {
    type: {
      blueId: 'FP5233evs7ZPmt4TtJViFwDZ7XUgyXmKmP7WGgjrSKtp',
    },
  },
  ancillaryParty: {
    description: 'ancillary party to be changed',
    itemType: {
      blueId: 'gyjCjxW6qhXCC455CPDLkx4ccUz75HgdRL21KfMsdMs',
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
    'Specifies instructions for terms change consisting of the new transaction terms, and the renegotiation fee.',
  name: 'cdm/event/common/TermsChangeInstruction',
  product: {
    description: 'product to be changed',
    type: {
      blueId: 'DQtAbxe1tLy9aRaawabAsHzDGXiQUiSvjt76ym1myncb#2',
    },
  },
} as const;
