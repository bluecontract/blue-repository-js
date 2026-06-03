export const CdmEventCommonExecutionInstruction: Record<string, unknown> = {
  ancillaryParty: {
    description:
      'Maps any ancillary parties, e.g. parties involved in the transaction that are not one of the two principal parties.\n',
    itemType: {
      blueId: '3FLaoJ8BXZUb3VpFoXQ7ACwUhTaDAZgwztubj17GegH4',
    },
    schema: {
      minItems: 0,
    },
    type: {
      blueId: '8DSFoWG9MqRSUhStqoPLrwVQiYByRh18NWbDEarN8MKF',
    },
  },
  collateral: {
    description:
      'Detail the collateral requirement anticipated with the transaction.',
    type: {
      blueId: '6jhHzxNcd11YEG9a9f1yBWhmm5qpzmbZ6E7JEqHpPj7r',
    },
  },
  counterparty: {
    description:
      'Maps two defined parties to counterparty enums for the transacted product.',
    itemType: {
      blueId: '58TeStN7sJrzoG3o1U7FZq3fFkxbCXkvdWPYYZkf1r3x',
    },
    schema: {
      maxItems: 2,
      minItems: 2,
    },
    type: {
      blueId: '8DSFoWG9MqRSUhStqoPLrwVQiYByRh18NWbDEarN8MKF',
    },
  },
  description:
    'Specifies instructions for execution of a transaction, consisting of a product, price, quantity, parties, trade identifier, execution details, and settlement terms.\n',
  executionDetails: {
    description:
      'Specifies the type and venue of execution, e.g. via voice, or electronically.',
    schema: {
      required: true,
    },
    type: {
      blueId: '34vDDjWK88raLcbwzsk1RG6XiYVNqS2twvW2mBVySxxe',
    },
  },
  lotIdentifier: {
    description: 'Lot Identifier associated with the transaction.',
    type: {
      blueId: '9tpFoqFu1yX5LZEATGF8CYsE5VSXhkQua9LMXwLEX2Pv',
    },
  },
  name: 'cdm/event/common/ExecutionInstruction',
  parties: {
    description:
      'Defines all parties to that execution, including agents and brokers.',
    itemType: {
      blueId: '3skPfLDtYJ59SZAAdcu2JDHySdtCEVu8FzTnUX8D5mfy',
    },
    schema: {
      minItems: 2,
    },
    type: {
      blueId: '8DSFoWG9MqRSUhStqoPLrwVQiYByRh18NWbDEarN8MKF',
    },
  },
  partyRoles: {
    description:
      'Defines the role(s) that party(ies) may have in relation to the execution.',
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
  priceQuantity: {
    description:
      'Defines the prices (e.g. spread, equity price, FX rate), quantities (e.g. currency amount, no. shares) and settlement terms (e.g. initial fee, broker fee, up-front cds payment or option premium settlement) associated with the constituents of the transacted product.\n',
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
  product: {
    description:
      'Defines the financial product to be executed and contract formed.',
    schema: {
      required: true,
    },
    type: {
      blueId: '8uQuzNQKBLC5kpFy4UH3BU7PPtpbRZEfLQ2ftrsgLHbm#4',
    },
  },
  tradeDate: {
    description: 'Denotes the trade/execution date.',
    schema: {
      required: true,
    },
    type: {
      blueId: 'HTDqFgte5VF88dLHnCZMjvyetfxfTAKxf9r8ciErE7Vg',
    },
  },
  tradeIdentifier: {
    description:
      'Denotes one or more identifiers associated with the transaction.',
    itemType: {
      blueId: '6zgzXM8ryqdp6CFr8BH4PKyJcHZsjXogtRiA2DcyKgBU',
    },
    schema: {
      minItems: 1,
    },
    type: {
      blueId: '8DSFoWG9MqRSUhStqoPLrwVQiYByRh18NWbDEarN8MKF',
    },
  },
  tradeTime: {
    description:
      'Denotes the trade time and timezone as agreed by the parties to the trade.',
    type: {
      blueId: 'DuGS3hb9QASiMfVarVtXqrw8YdvHS99bzooo3dinungf',
    },
  },
};
