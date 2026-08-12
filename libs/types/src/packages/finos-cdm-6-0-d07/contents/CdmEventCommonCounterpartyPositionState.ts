export const CdmEventCommonCounterpartyPositionState: Record<string, unknown> =
  {
    counterpartyPosition: {
      description:
        'Represents the Position that has been effected by a business or life-cycle event.',
      schema: {
        required: true,
      },
      type: {
        blueId: '9Scj1Dqa8srcxPcX2EXyAtivP7FtPptCYaromKVdSVAW',
      },
    },
    description:
      'Defines the fundamental financial information that can be changed by a Primitive Event and by extension any business or life-cycle event. Each PositionState specifies where a Position is in its life-cycle. PositionState is a root type and as such, can be created independently to any other CDM data type, but can also be used as part of the CDM Event Model.\n',
    name: 'cdm/event/common/CounterpartyPositionState',
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
    state: {
      description:
        'Represents the State of the Position through its life-cycle.',
      type: {
        blueId: 'C63rgYVcyFKqAfdZwjLkhMUDs7CMMKgc5Zg92LyjVGu9',
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
