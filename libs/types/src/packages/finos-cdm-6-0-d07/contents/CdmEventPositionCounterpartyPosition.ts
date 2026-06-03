export const CdmEventPositionCounterpartyPosition: Record<string, unknown> = {
  collateral: {
    description: 'Represents the collateral obligations of a party.',
    type: {
      blueId: '5okT4PBEHijywnb7jBieEoVCyGTRkhzDmbMEDnxtpD92',
    },
  },
  contractDetails: {
    description:
      'Represents information specific to trades or positions involving contractual products.',
    type: {
      blueId: '9QvPaXwgMX4bfTdirhDyje4sXJhxGdfrXikFFGpngwAb',
    },
  },
  description:
    'A Position describes the accumulated effect of a set of securities or financial transactions.',
  executionDetails: {
    description:
      'Defines specific attributes that relate to trade or position executions.',
    type: {
      blueId: 'AveBbPNcyiENsH8aGj4xhEY7GkX7xuoVApDW87Er969J',
    },
  },
  name: 'cdm/event/position/CounterpartyPosition',
  openDateTime: {
    description: 'The date and time when the position was opened.',
    type: {
      blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
    },
  },
  party: {
    description:
      'The parties involved in the position, including the Clearing Organization.',
    itemType: {
      blueId: '3skPfLDtYJ59SZAAdcu2JDHySdtCEVu8FzTnUX8D5mfy',
    },
    schema: {
      minItems: 0,
    },
    type: {
      blueId: '8DSFoWG9MqRSUhStqoPLrwVQiYByRh18NWbDEarN8MKF',
    },
  },
  partyRole: {
    description:
      'Represents the role each specified party takes in the position.',
    itemType: {
      blueId: 'Hrt2EoYJokASG9J62NMKWt8UZbQN6BwtESp7hVDVQYvm',
    },
    schema: {
      minItems: 0,
    },
    type: {
      blueId: '8DSFoWG9MqRSUhStqoPLrwVQiYByRh18NWbDEarN8MKF',
    },
  },
  positionBase: {
    description:
      'Encapsulates the core constituents that characterize a position.',
    schema: {
      required: true,
    },
    type: {
      blueId: '5L5ELtTjqEroydK4qXv9bitzL5wJ8yY6yjAhFum13A7U',
    },
  },
  positionIdentifier: {
    description:
      'Represents the identifier(s) that uniquely identify a position for an identity issuer. A position can include multiple identifiers, for example an internal position identifer and a UTI (Unique Trade Identifier).\n',
    itemType: {
      blueId: '69nLFfiGcCWNuTn9H9eiEcBwsXuqgNxxqgB7X8X9XaSz',
    },
    schema: {
      minItems: 0,
    },
    type: {
      blueId: '8DSFoWG9MqRSUhStqoPLrwVQiYByRh18NWbDEarN8MKF',
    },
  },
  tradeReference: {
    description: 'Reference to all the trades that constitute the position.',
    itemType: {
      blueId: 'EQ41UGrPkUeaUNXD9QmELA1aEoVBtx9tVzgQZ5Tp1rMT',
    },
    schema: {
      minItems: 0,
    },
    type: {
      blueId: '8DSFoWG9MqRSUhStqoPLrwVQiYByRh18NWbDEarN8MKF',
    },
  },
};
