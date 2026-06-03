export const CdmEventCommonQuantityChangeInstruction: Record<string, unknown> =
  {
    change: {
      description:
        'Quantity by which the trade is being increased, decreased or replaced, and the price at which such quantity change is agreed. The quantity change should always be specified as a positive number, with the direction (increase/decrease/replacement) being specified by the direction enumeration. A fee can also be associated to the quantity change by specifying a Price component of type CashPrice, including the corresponding settlement date and direction.\n',
      itemType: {
        blueId: '2C9DbWa8E4D3cXHSXuDyYmWwrs1ySFopMnyA3XWWesm8',
      },
      schema: {
        minItems: 1,
      },
      type: {
        blueId: '8DSFoWG9MqRSUhStqoPLrwVQiYByRh18NWbDEarN8MKF',
      },
    },
    description:
      "Instructions required to create a Quantity Change Primitive Event, which can be either an increase, a decrease or a replacement. An increase adds a new trade lot to the original trade, whereas a decrease subtracts from an existing trade lot's quantity. A replacement updates the quantity of an existing trade lot to the new value.\n",
    direction: {
      description:
        'Direction of the quantity change specified as either an increase, decrease or replacement.',
      schema: {
        required: true,
      },
      type: {
        blueId: '3PEKcTxZjwjadkRHkdE5cLAN5jWQkiSt4SmaU1mwZbgZ',
      },
    },
    lotIdentifier: {
      description:
        'Identifier for the new lot (in case of increase) or for the existing lot to be changed(in case of decrease or replacement). This optional attribute is mandatory in case of a decrease or replacement if the initial trade state contains multiple trade lots.\n',
      itemType: {
        blueId: '9tpFoqFu1yX5LZEATGF8CYsE5VSXhkQua9LMXwLEX2Pv',
      },
      schema: {
        minItems: 0,
      },
      type: {
        blueId: '8DSFoWG9MqRSUhStqoPLrwVQiYByRh18NWbDEarN8MKF',
      },
    },
    name: 'cdm/event/common/QuantityChangeInstruction',
  };
