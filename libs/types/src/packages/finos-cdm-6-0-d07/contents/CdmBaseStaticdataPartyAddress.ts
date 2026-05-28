export const CdmBaseStaticdataPartyAddress = {
  city: {
    description: 'The city component of the postal address.',
    type: {
      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
    },
  },
  country: {
    description:
      'The ISO 3166 standard code for the country within which the postal address is located.',
    type: {
      blueId: 'F5GfdsSNcjLAm9anbfMQqxdxAFonErhU5UXFbQzq1zXY',
    },
  },
  description: 'A class to specify a post or street address.',
  name: 'cdm/base/staticdata/party/Address',
  postalCode: {
    description:
      'The code, required for computerized mail sorting systems, that is allocated to a physical address by a national postal authority.\n',
    type: {
      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
    },
  },
  state: {
    description:
      'A country subdivision used in postal addresses in some countries. For example, US states, Canadian provinces, Swiss cantons, ...\n',
    type: {
      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
    },
  },
  street: {
    description:
      'The set of street and building number information that identifies a postal address within a city.',
    itemType: {
      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
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
} as const;
