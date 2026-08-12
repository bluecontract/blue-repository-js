export const CdmEventCommonTradeState: Record<string, unknown> = {
  description:
    'Defines the fundamental financial information that can be changed by a Primitive Event and by extension any business or life-cycle event. Each TradeState specifies where a Trade is in its life-cycle. TradeState is a root type and as such, can be created independently to any other CDM data type, but can also be used as part of the CDM Event Model.\n',
  name: 'cdm/event/common/TradeState',
  observationHistory: {
    description:
      'Represents the observed events related to a particular product or process, such as credit events or corporate actions.\n',
    itemType: {
      blueId: '3WyHtwLZQPjVJB4zC26ena33X6r2fxTfkWVEiZi6eH1Q',
    },
    schema: {
      minItems: 0,
    },
    type: {
      blueId: '8DSFoWG9MqRSUhStqoPLrwVQiYByRh18NWbDEarN8MKF',
    },
  },
  resetHistory: {
    description:
      'Represents the updated Trade attributes which can change as the result of a reset event. Only the changed values are captured, leaving the remaining data attributes empty. See Create_Reset function for further details on how TradeState is used in the Reset event. The TradeState data type is used to maintain backwards compatibility with the current Reset mechanism.\n',
    itemType: {
      blueId: '7vPrkkWh58nfDDkqkzYizHoGeQi5BC57ZpmFndxmft9R',
    },
    schema: {
      minItems: 0,
    },
    type: {
      blueId: '8DSFoWG9MqRSUhStqoPLrwVQiYByRh18NWbDEarN8MKF',
    },
  },
  state: {
    description: 'Represents the State of the Trade through its life-cycle.',
    type: {
      blueId: 'C63rgYVcyFKqAfdZwjLkhMUDs7CMMKgc5Zg92LyjVGu9',
    },
  },
  trade: {
    description:
      'Represents the Trade that has been effected by a business or life-cycle event.',
    schema: {
      required: true,
    },
    type: {
      blueId: 'Gm86NetLQn7WB75RP28UxDg7WZvhyUm1usBgfAPjFkdM',
    },
  },
  transferHistory: {
    description:
      'Represents the updated Trade attributes which can change as the result of a transfer event.',
    itemType: {
      blueId: '5DE1nk33eUe1qZRRMM5fGCsyGFrVj8JswsEvwtwzL2K9',
    },
    schema: {
      minItems: 0,
    },
    type: {
      blueId: '8DSFoWG9MqRSUhStqoPLrwVQiYByRh18NWbDEarN8MKF',
    },
  },
  valuationHistory: {
    itemType: {
      blueId: '7fUqjcMznRtsQXbh382nhVNPoG8pPi1kH6C6QRJ1NXii',
    },
    schema: {
      minItems: 0,
    },
    type: {
      blueId: '8DSFoWG9MqRSUhStqoPLrwVQiYByRh18NWbDEarN8MKF',
    },
  },
};
