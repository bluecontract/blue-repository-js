export const CdmBaseStaticdataIdentifierLocationIdentifier = {
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
    'Specifies a location identifier. An issuer and an identifier type can be associated with the actual identifier value as a way to properly qualify it.\n',
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
  locationIdentifierType: {
    description: 'Specifies the nature of a location identifier.',
    type: {
      blueId: 'uri72eSXHNadMdx367eVwLSSA5rqrou8jwm3NGJ1u3K',
    },
  },
  name: 'cdm/base/staticdata/identifier/LocationIdentifier',
} as const;
