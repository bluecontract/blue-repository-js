export const CdmEventPositionAvailableInventoryRecord = {
  collateral: {
    description:
      'The type of collateral can often be required when determining if the piece of availability being described is suitable for a party.\n',
    itemType: {
      blueId: 'otvEhr2nsePtQK4XNps2jE29Fd9hQtnEiPi9j3sssCi',
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
  description:
    'An individual piece of available inventory. This represents a single security and its associated criteria. The criteria are used to describe any restrictions on the securities.\n',
  expirationDateTime: {
    description:
      'There may be a set period/time restriction associated to the security.',
    type: {
      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
    },
  },
  identifer: {
    description:
      'Unique identifier for this record. This can be used to uniquely identify a specific piece of inventory.',
    type: {
      blueId: 'CNZP6GsTZi731ekV62fUVAXc2yL9DVbiHje2LSX8DmWf',
    },
  },
  interestRate: {
    description:
      'An optional element which can be used to hold a rate associated to this piece of availability.',
    type: {
      blueId: 'wuC3RHpv6ahucWwxTgdeQyeUP8ecWQQqgMvSpx3Z543',
    },
  },
  name: 'cdm/event/position/AvailableInventoryRecord',
  partyRole: {
    description:
      'An individual security may be held by several agents. Including the party role at this level allows us to reference the party holding this specific item.\n',
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
  quantity: {
    description: 'The quantity of the security',
    type: {
      blueId: '2uPPgn1ZsbovDfjRb1d8M9YmmgEnNo9UeG1VEz2wceY3',
    },
  },
  security: {
    description: 'The security details.',
    type: {
      blueId: 'AKAF6F23pDRPx5M9gsqtAKXBUf46Vnz1STHsk38YEAWm',
    },
  },
} as const;
