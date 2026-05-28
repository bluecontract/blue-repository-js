export const CdmEventCommonTradeIdentifier = {
  assignedIdentifier: {
    description:
      'The identifier value. This level of indirection between the issuer and the identifier and its version provides the ability to associate multiple identifiers to one issuer, consistently with the FpML PartyTradeIdentifier.\n',
    itemType: {
      blueId: 'CNZP6GsTZi731ekV62fUVAXc2yL9DVbiHje2LSX8DmWf',
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
  description:
    'Defines a trade identifier as a special case of the generic identifier type, that also includes the trade identifier class.\n',
  identifierType: {
    description:
      'The enumerated classification of the identifier. Optional as a trade identifier may be party-specific, in which case it may not correspond to any established classification.\n',
    type: {
      blueId: '9SEUQrSK7ewpiykS84gvowEErbpYgoX5vEhGy89i4FTd',
    },
  },
  issuer: {
    description:
      'The identifier issuer, when specified explicitly alongside the identifier value (instead of being specified by reference to a party).\n',
    type: {
      blueId: 'F5GfdsSNcjLAm9anbfMQqxdxAFonErhU5UXFbQzq1zXY',
    },
  },
  issuerReference: {
    description:
      'The identifier issuer, when specified by reference to a party specified as part of the transaction.',
    type: {
      blueId: 'GnY3garuhYiHPrATUwY5JKQmZJPACHzjobkgXbmNJCik',
    },
  },
  name: 'cdm/event/common/TradeIdentifier',
} as const;
