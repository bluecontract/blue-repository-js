export const CdmEventCommonCounterpartyPositionState: Record<string, unknown> =
  {
    counterpartyPosition: {
      description:
        'Represents the Position that has been effected by a business or life-cycle event.',
      schema: {
        required: true,
      },
      type: {
        blueId: 'DhpZ3SZe34Pz3xJLcAS74rHhgZSez7ZvQx3yqmXcYA8r',
      },
    },
    description:
      'Defines the fundamental financial information that can be changed by a Primitive Event and by extension any business or life-cycle event. Each PositionState specifies where a Position is in its life-cycle. PositionState is a root type and as such, can be created independently to any other CDM data type, but can also be used as part of the CDM Event Model.\n',
    name: 'cdm/event/common/CounterpartyPositionState',
    observationHistory: {
      description:
        'Represents the observed events related to a particular product or process, such as credit events or corporate actions.\n',
      itemType: {
        blueId: '7UyroNcHi5ggaDeDqgACDvjixoTVqZyHPUiNuGcK3gXq',
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
        blueId: 'HcvuPprC3CbAxkBiEwkiWsJzW5pVqZ7occ8cncqAtQR',
      },
    },
    valuationHistory: {
      itemType: {
        blueId: '35r3StzAH6Qus8FCSpiCqqUrKHx9d4SYBCL2gEecgCJq',
      },
      schema: {
        minItems: 0,
      },
      type: {
        blueId: '8DSFoWG9MqRSUhStqoPLrwVQiYByRh18NWbDEarN8MKF',
      },
    },
  };
