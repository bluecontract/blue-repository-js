export const CdmBaseStaticdataPartyPartyContactInformation = {
  additionalInformation: {
    description: 'Specification of special instructions of the relevant party.',
    type: {
      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
    },
  },
  businessUnit: {
    description:
      'Optional organization unit information used to describe the organization units (e.g. trading desks) involved in a transaction or business process, incl. the contact information (when relevant).\n',
    itemType: {
      blueId: '4wK85f9dMypnjbUUmXb66JUEiKd6uhgWc8Eg1rx4exS4',
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
  contactInformation: {
    description:
      'The postal/street address, telephone number, email address and/or web page. If the contact information is specific to the associated business unit(s), it should be associated with those.\n',
    type: {
      blueId: '8K3bpBAvaZu9SQSpibF46XfDiBxveFTBYFEXySs3rjsP',
    },
  },
  description:
    'A class to specify contact information within a party: address and, optionally, associated business unit and person. This class also supports the ISDA CSA representation as a single string, through the address attribute.\n',
  name: 'cdm/base/staticdata/party/PartyContactInformation',
  partyReference: {
    description:
      'The reference to the party to which the contact information refers to.',
    type: {
      blueId: 'GnY3garuhYiHPrATUwY5JKQmZJPACHzjobkgXbmNJCik',
    },
  },
  person: {
    description:
      'Optional information about people involved in a transaction or business process. (These are employees of the party.)\n',
    itemType: {
      blueId: 'GPJrucxvdtQQxaNZByVgHcHLEAux1TNC7KL1JdEdBgLF',
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
