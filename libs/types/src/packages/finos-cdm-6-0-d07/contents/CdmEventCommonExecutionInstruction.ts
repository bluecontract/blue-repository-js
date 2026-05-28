export const CdmEventCommonExecutionInstruction = {
  ancillaryParty: {
    description:
      'Maps any ancillary parties, e.g. parties involved in the transaction that are not one of the two principal parties.\n',
    itemType: {
      blueId: 'gyjCjxW6qhXCC455CPDLkx4ccUz75HgdRL21KfMsdMs',
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
  collateral: {
    description:
      'Detail the collateral requirement anticipated with the transaction.',
    type: {
      blueId: '4TmMsyAdoN2Np4C6v3ypajqNSQXAgmDT7v2FYpcc7DY7',
    },
  },
  counterparty: {
    description:
      'Maps two defined parties to counterparty enums for the transacted product.',
    itemType: {
      blueId: '3xDGPtjud4dCVNF9Swm1X7WoCse6gMziwHGvUnp1h3EK',
    },
    schema: {
      maxItems: {
        type: {
          blueId: '5WNMiV9Knz63B4dVY5JtMyh3FB4FSGqv7ceScvuapdE1',
        },
        value: 2,
      },
      minItems: {
        type: {
          blueId: '5WNMiV9Knz63B4dVY5JtMyh3FB4FSGqv7ceScvuapdE1',
        },
        value: 2,
      },
    },
    type: {
      blueId: '6aehfNAxHLC1PHHoDr3tYtFH3RWNbiWdFancJ1bypXEY',
    },
  },
  description:
    'Specifies instructions for execution of a transaction, consisting of a product, price, quantity, parties, trade identifier, execution details, and settlement terms.\n',
  executionDetails: {
    description:
      'Specifies the type and venue of execution, e.g. via voice, or electronically.',
    schema: {
      required: {
        type: {
          blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
        },
        value: true,
      },
    },
    type: {
      blueId: 'AgMJ76KMYXbdeYrEq5PfQtesuf5rxVkbspBBciEBpYux',
    },
  },
  lotIdentifier: {
    description: 'Lot Identifier associated with the transaction.',
    type: {
      blueId: '8eDineGwQr2VXBeVEPbnJZvEcNhDbLu8HtmubDT6RBoZ',
    },
  },
  name: 'cdm/event/common/ExecutionInstruction',
  parties: {
    description:
      'Defines all parties to that execution, including agents and brokers.',
    itemType: {
      blueId: '694bqGLce4g9XrBubcFXs81gNNsvVTGK3msPSdNsj5jD',
    },
    schema: {
      minItems: {
        type: {
          blueId: '5WNMiV9Knz63B4dVY5JtMyh3FB4FSGqv7ceScvuapdE1',
        },
        value: 2,
      },
    },
    type: {
      blueId: '6aehfNAxHLC1PHHoDr3tYtFH3RWNbiWdFancJ1bypXEY',
    },
  },
  partyRoles: {
    description:
      'Defines the role(s) that party(ies) may have in relation to the execution.',
    itemType: {
      blueId: '8fXEqMXsnZAuwSFKfhiksmAPnV7yvaxSbmwgTbGrN75M',
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
  priceQuantity: {
    description:
      'Defines the prices (e.g. spread, equity price, FX rate), quantities (e.g. currency amount, no. shares) and settlement terms (e.g. initial fee, broker fee, up-front cds payment or option premium settlement) associated with the constituents of the transacted product.\n',
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
  product: {
    description:
      'Defines the financial product to be executed and contract formed.',
    schema: {
      required: {
        type: {
          blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
        },
        value: true,
      },
    },
    type: {
      blueId: 'DQtAbxe1tLy9aRaawabAsHzDGXiQUiSvjt76ym1myncb#2',
    },
  },
  tradeDate: {
    description: 'Denotes the trade/execution date.',
    schema: {
      required: {
        type: {
          blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
        },
        value: true,
      },
    },
    type: {
      blueId: 'F5GfdsSNcjLAm9anbfMQqxdxAFonErhU5UXFbQzq1zXY',
    },
  },
  tradeIdentifier: {
    description:
      'Denotes one or more identifiers associated with the transaction.',
    itemType: {
      blueId: '5NL7sLmwPvsGQHH4cx5g8ajq8wbZMimREKKDky2KMRFQ',
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
  tradeTime: {
    description:
      'Denotes the trade time and timezone as agreed by the parties to the trade.',
    type: {
      blueId: 'rB8EXnktzaQ1oDqNjTTbY6Wub1oWxsU4bXUUGA32yMY',
    },
  },
} as const;
