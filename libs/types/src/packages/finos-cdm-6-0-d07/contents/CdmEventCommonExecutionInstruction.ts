export const CdmEventCommonExecutionInstruction: Record<string, unknown> = {
  ancillaryParty: {
    description:
      'Maps any ancillary parties, e.g. parties involved in the transaction that are not one of the two principal parties.\n',
    itemType: {
      blueId: '4iPHY4aygMFyDNb5teEsJeb7EyeK3CitfuP7DqfgnT1w',
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
      blueId: 'CMbZdR1wHnpwviTkU9fmf4tki9sWinxrSZWks1aEdhJu',
    },
  },
  counterparty: {
    description:
      'Maps two defined parties to counterparty enums for the transacted product.',
    itemType: {
      blueId: '57Lwnif22McYRjgDzSyRZTsqY1Ac9LMSJcJ9KRXKiE6w',
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
      blueId: 'GXAR1SUGjpvZsUZvh3feCdkEXnfGS76pgRRAwtrV4BAA',
    },
  },
  lotIdentifier: {
    description: 'Lot Identifier associated with the transaction.',
    type: {
      blueId: '2uYMDSb9jahYcE91VXzzWYsnUVct3k5thb1czx4jPYF7',
    },
  },
  name: 'cdm/event/common/ExecutionInstruction',
  parties: {
    description:
      'Defines all parties to that execution, including agents and brokers.',
    itemType: {
      blueId: 'DqdehuAibH9Q4aC2zYPJp37ysFFDSYwuUYRNYQCeevFd',
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
      blueId: '6DrJREpu1Ms3M4U1q7jqGjM46V1o8vxq4K1i3X4dwMvz',
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
      blueId: '4XEYGgCSfXx2tFwmQjMsXhuwaCjsNZ42jtKAcr8itiqe',
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
      blueId: '52zbUBnH8375AE19gNSXRU7GgGs5tcoUhR84LVdMrBWi#5',
    },
  },
  tradeDate: {
    description: 'Denotes the trade/execution date.',
    schema: {
      required: true,
    },
    type: {
      blueId: 'HvrBWWRL9WzJPU9bs48T3Uf9CcUgCfqtEszZPN3tYS3n',
    },
  },
  tradeIdentifier: {
    description:
      'Denotes one or more identifiers associated with the transaction.',
    itemType: {
      blueId: 'FGujWvfXdExA7nDNwp6iHf3hWYRL3g9JS9EZfYhS7N2y',
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
      blueId: '6XsZzNy8iHgmk7eDnmTPs7QFCthawsNg96517G4uThjP',
    },
  },
};
