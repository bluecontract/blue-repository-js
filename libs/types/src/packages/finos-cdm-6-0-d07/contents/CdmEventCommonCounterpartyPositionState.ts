export const CdmEventCommonCounterpartyPositionState = {
  counterpartyPosition: {
    description:
      'Represents the Position that has been effected by a business or life-cycle event.',
    schema: {
      required: {
        type: {
          blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
        },
        value: true,
      },
    },
    type: {
      blueId: '4pkLwzBQctB2qVDMb1UAtQuhPbBpChuWnEEdq4AQcznd',
    },
  },
  description:
    'Defines the fundamental financial information that can be changed by a Primitive Event and by extension any business or life-cycle event. Each PositionState specifies where a Position is in its life-cycle. PositionState is a root type and as such, can be created independently to any other CDM data type, but can also be used as part of the CDM Event Model.\n',
  name: 'cdm/event/common/CounterpartyPositionState',
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
  state: {
    description: 'Represents the State of the Position through its life-cycle.',
    type: {
      blueId: 'AWNewCb8jDEbBUtfpqBitVftxPaEyRa5nkUc3446e8NA',
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
