export const CdmEventCommonValuationInstruction = {
  description: 'Specifies inputs needed to process a valuation.',
  name: 'cdm/event/common/ValuationInstruction',
  replace: {
    description:
      'Specifies whether the previous valuation tracks in the valuation history are removed (True) or kept (False).',
    schema: {
      required: {
        type: {
          blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
        },
        value: true,
      },
    },
    type: {
      blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
    },
  },
  valuation: {
    description: 'Contains all information related to a valuation.',
    itemType: {
      blueId: 'FsvHni5Yw2kgwi13MLfPDm1kxtkAxtwNuT3wJNMwYWjB',
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
