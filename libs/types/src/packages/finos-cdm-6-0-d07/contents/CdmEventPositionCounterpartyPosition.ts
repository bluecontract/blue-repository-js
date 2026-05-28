export const CdmEventPositionCounterpartyPosition = {
  collateral: {
    description: 'Represents the collateral obligations of a party.',
    type: {
      blueId: '7j2afftZwsKVHvwsGny36DeHZyszQTNjaKddY3EUPFWP',
    },
  },
  contractDetails: {
    description:
      'Represents information specific to trades or positions involving contractual products.',
    type: {
      blueId: 'B8n9R5augGxzewv3AeZA4bBhgHYizX9BW45egn8ua3br',
    },
  },
  description:
    'A Position describes the accumulated effect of a set of securities or financial transactions.',
  executionDetails: {
    description:
      'Defines specific attributes that relate to trade or position executions.',
    type: {
      blueId: 'CMP6Shj6SxTXkHaZATbUmY9anEdJwQH5tnPfbddySWBo',
    },
  },
  name: 'cdm/event/position/CounterpartyPosition',
  openDateTime: {
    description: 'The date and time when the position was opened.',
    type: {
      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
    },
  },
  party: {
    description:
      'The parties involved in the position, including the Clearing Organization.',
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
      'Represents the role each specified party takes in the position.',
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
  positionBase: {
    description:
      'Encapsulates the core constituents that characterize a position.',
    schema: {
      required: {
        type: {
          blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
        },
        value: true,
      },
    },
    type: {
      blueId: '7NAeEvw67mqergRTy5KQA52oFxHHa8GFwsojp9Laqfiv',
    },
  },
  positionIdentifier: {
    description:
      'Represents the identifier(s) that uniquely identify a position for an identity issuer. A position can include multiple identifiers, for example an internal position identifer and a UTI (Unique Trade Identifier).\n',
    itemType: {
      blueId: 'AnXrCwduqixvTNugK5Dsyr9upeRqJtsTmmvnvRrEjA7k',
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
  tradeReference: {
    description: 'Reference to all the trades that constitute the position.',
    itemType: {
      blueId: 'DXhfNgQ1Hmipx5YJVPFZLYTAfk5vomh4ywYmSZX1ChyJ',
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
} as const;
