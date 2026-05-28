export const CdmBaseStaticdataPartyParty = {
  account: {
    description:
      'The account that might be associated with the party. At most one account can be specified, as it is expected that this information is used in the context of a contract or legal document where only one account per party can be associated with such object.\n',
    type: {
      blueId: '2redquTFoM18tjds3NfGQwUYCvsE2KxUExBUqKyf3rJX',
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
      'The postal/street address, telephone number, email address and/or web page. If the contact information is specific to the associated business unit(s) or person (s), it should be associated with those.\n',
    type: {
      blueId: '8K3bpBAvaZu9SQSpibF46XfDiBxveFTBYFEXySs3rjsP',
    },
  },
  description:
    'A class to specify a party, without a qualification as to whether this party is a legal entity or a natural person, although the model provides the ability to associate a person (or set of persons) to a party, which use case would imply that such party would be a legal entity (even if not formally specified as such).\n',
  name: 'cdm/base/staticdata/party/Party',
  partyId: {
    description:
      'The identifier associated with a party, e.g. the 20 digits LEI code.',
    itemType: {
      blueId: 'F9QyJcHdFeo31fUAc165RhT6gR1XEBxazkp5cgYo4DAF',
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
  person: {
    description:
      'The person(s) who might be associated with the party as part of the execution, contract or legal document.',
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
  personRole: {
    description: 'The role of the person(s)',
    itemType: {
      blueId: '3uQqaX7x6W6DWTjsoQ1nPnUqxSnb3hwfBUfB75JAtaZJ',
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
