export const CdmEventCommonTrade = {
  account: {
    description:
      "Represents a party's granular account information, which may be used in subsequent internal processing.",
    itemType: {
      blueId: '2redquTFoM18tjds3NfGQwUYCvsE2KxUExBUqKyf3rJX',
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
  adjustment: {
    description:
      'Specifies the conditions that govern the adjustment to the quantity of a product being traded: e.g. execution, portfolio rebalancing etc. It is typically used in the context of Equity Swaps.\n',
    type: {
      blueId: 'FP5233evs7ZPmt4TtJViFwDZ7XUgyXmKmP7WGgjrSKtp',
    },
  },
  ancillaryParty: {
    description:
      'Specifies the parties with ancillary roles in the transaction. The product is agnostic to the actual parties involved in the transaction, with the party references abstracted away from the product definition and replaced by the AncillaryRoleEnum. The AncillaryRoleEnum can then be positioned in the product and this AncillaryParty type, which is positioned outside of the product definition, allows the AncillaryRoleEnum to be associated with an actual party reference.\n',
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
  clearedDate: {
    description:
      'Specifies the date on which a trade is cleared (novated) through a central counterparty clearing service.',
    type: {
      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
    },
  },
  collateral: {
    description: 'Represents the collateral obligations of a party.',
    type: {
      blueId: '4TmMsyAdoN2Np4C6v3ypajqNSQXAgmDT7v2FYpcc7DY7',
    },
  },
  contractDetails: {
    description:
      'Represents information specific to trades involving contractual products.',
    type: {
      blueId: '73jkwTbyMo2KXQaySh2bPD7JZbKKWQBJYofeJMMprsr2',
    },
  },
  counterparty: {
    description:
      'Specifies the parties which are the two counterparties to the transaction.  The product is agnostic to the actual parties to the transaction, with the party references abstracted away from the product definition and replaced by the counterparty enum (e.g. CounterpartyEnum values Party1 or Party2). The counterparty enum can then be positioned in the product (e.g. to specify which counterparty is the payer, receiver etc) and this counterparties attribute, which is positioned outside of the product definition, allows the counterparty enum to be associated with an actual party reference.\n',
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
    'Defines the output of a financial transaction between parties - a Business Event. A Trade impacts the financial position (i.e. the balance sheet) of involved parties.\n',
  executionDetails: {
    description:
      'Represents information specific to trades that arose from executions.',
    type: {
      blueId: 'AgMJ76KMYXbdeYrEq5PfQtesuf5rxVkbspBBciEBpYux',
    },
  },
  name: 'cdm/event/common/Trade',
  party: {
    description:
      'Represents the parties to the trade. The cardinality is optional to address the case where the trade is defined within a BusinessEvent data type, in which case the party is specified in BusinessEvent.\n',
    itemType: {
      blueId: '694bqGLce4g9XrBubcFXs81gNNsvVTGK3msPSdNsj5jD',
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
  partyRole: {
    description:
      'Represents the role each specified party takes in the trade. further to the principal roles, payer and receiver.\n',
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
  product: {
    description:
      'The underlying product to be included in a contract or execution.',
    type: {
      blueId: 'DQtAbxe1tLy9aRaawabAsHzDGXiQUiSvjt76ym1myncb#2',
    },
  },
  tradeDate: {
    description: 'Specifies the date which the trade was agreed.',
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
      'Represents the identifier(s) that uniquely identify a trade for an identity issuer. A trade can include multiple identifiers, for example a trade that is reportable to both the CFTC and ESMA, and then has an associated USI (Unique Swap Identifier) UTI (Unique Trade Identifier).\n',
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
  tradeLot: {
    description:
      'Specifies the price, quantity and effective date of each trade lot, when the same product may be traded multiple times in different lots with the same counterparty. In a trade increase, a new trade lot is added to the list, with the corresponding effective date. In a trade decrease, the existing trade lot(s) are decreased of the corresponding quantity (and an unwind fee may have to be settled). The multiple cardinality and the ability to increase existing trades is used for Equity Swaps in particular.\n',
    itemType: {
      blueId: 'ZLG4da8C48xHnYaRKjAQoKys4k2Y2XufFG4HGCeTAwU',
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
