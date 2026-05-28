export const CdmEventCommonQuantityChangeInstruction = {
  change: {
    description:
      'Quantity by which the trade is being increased, decreased or replaced, and the price at which such quantity change is agreed. The quantity change should always be specified as a positive number, with the direction (increase/decrease/replacement) being specified by the direction enumeration. A fee can also be associated to the quantity change by specifying a Price component of type CashPrice, including the corresponding settlement date and direction.\n',
    itemType: {
      blueId: '3M3Dq9Mg9Eq1zojVRM5ZJVz9nV2VfXFeSLB6TnvKozYs',
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
  description:
    "Instructions required to create a Quantity Change Primitive Event, which can be either an increase, a decrease or a replacement. An increase adds a new trade lot to the original trade, whereas a decrease subtracts from an existing trade lot's quantity. A replacement updates the quantity of an existing trade lot to the new value.\n",
  direction: {
    description:
      'Direction of the quantity change specified as either an increase, decrease or replacement.',
    schema: {
      required: {
        type: {
          blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
        },
        value: true,
      },
    },
    type: {
      blueId: 'CVMkWffJ7quAiCT1yuTA9Yfe2iFwZdCBMRUkJAvQowDL',
    },
  },
  lotIdentifier: {
    description:
      'Identifier for the new lot (in case of increase) or for the existing lot to be changed(in case of decrease or replacement). This optional attribute is mandatory in case of a decrease or replacement if the initial trade state contains multiple trade lots.\n',
    itemType: {
      blueId: '8eDineGwQr2VXBeVEPbnJZvEcNhDbLu8HtmubDT6RBoZ',
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
  name: 'cdm/event/common/QuantityChangeInstruction',
} as const;
