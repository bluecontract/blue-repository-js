export const CdmEventCommonTradeState = {
  description:
    'Defines the fundamental financial information that can be changed by a Primitive Event and by extension any business or life-cycle event. Each TradeState specifies where a Trade is in its life-cycle. TradeState is a root type and as such, can be created independently to any other CDM data type, but can also be used as part of the CDM Event Model.\n',
  name: 'cdm/event/common/TradeState',
  observationHistory: {
    description:
      'Represents the observed events related to a particular product or process, such as credit events or corporate actions.\n',
    itemType: {
      blueId: '4E5yCo7XYTiKuuHHwr5uzwASRLaQSQREJNNpmiGAGT3N',
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
  resetHistory: {
    description:
      'Represents the updated Trade attributes which can change as the result of a reset event. Only the changed values are captured, leaving the remaining data attributes empty. See Create_Reset function for further details on how TradeState is used in the Reset event. The TradeState data type is used to maintain backwards compatibility with the current Reset mechanism.\n',
    itemType: {
      blueId: '14sVVTzSacMzHornDaXpUxvVuwj3EZYsDLgepvsmbGW7',
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
  state: {
    description: 'Represents the State of the Trade through its life-cycle.',
    type: {
      blueId: 'AWNewCb8jDEbBUtfpqBitVftxPaEyRa5nkUc3446e8NA',
    },
  },
  trade: {
    description:
      'Represents the Trade that has been effected by a business or life-cycle event.',
    schema: {
      required: {
        type: {
          blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
        },
        value: true,
      },
    },
    type: {
      blueId: 'DMPg8sNY4NvsU9grh9o2Bbqy9F7wFkLkA74Z5g8pwNNk',
    },
  },
  transferHistory: {
    description:
      'Represents the updated Trade attributes which can change as the result of a transfer event.',
    itemType: {
      blueId: 'CFc6Qd17SJME5NRgGX5E2JvDaLCdH3FFGafnxKTvqrdw',
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
  valuationHistory: {
    itemType: {
      blueId: 'FsvHni5Yw2kgwi13MLfPDm1kxtkAxtwNuT3wJNMwYWjB',
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
