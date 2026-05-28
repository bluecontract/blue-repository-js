export const CdmEventCommonReturnInstruction = {
  description:
    'Specifies the information required to create the return of a Security Finance Transaction.',
  name: 'cdm/event/common/ReturnInstruction',
  quantity: {
    description:
      'Specifies the quantity of shares and cash to be returned in a partial return event.',
    itemType: {
      blueId: '2uPPgn1ZsbovDfjRb1d8M9YmmgEnNo9UeG1VEz2wceY3',
    },
    schema: {
      minItems: {
        type: {
          blueId: '5WNMiV9Knz63B4dVY5JtMyh3FB4FSGqv7ceScvuapdE1',
        },
        value: 1,
      },
    },
    type: {
      blueId: '6aehfNAxHLC1PHHoDr3tYtFH3RWNbiWdFancJ1bypXEY',
    },
  },
} as const;
