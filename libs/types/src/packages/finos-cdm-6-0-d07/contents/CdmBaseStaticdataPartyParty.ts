export const CdmBaseStaticdataPartyParty: Record<string, unknown> = {
  account: {
    description:
      'The account that might be associated with the party. At most one account can be specified, as it is expected that this information is used in the context of a contract or legal document where only one account per party can be associated with such object.\n',
    type: {
      blueId: 'HCfJUUx9k8N8QqUgtRQZDaSkcsnmcWrN6CsVeT5ViMfM',
    },
  },
  businessUnit: {
    description:
      'Optional organization unit information used to describe the organization units (e.g. trading desks) involved in a transaction or business process, incl. the contact information (when relevant).\n',
    itemType: {
      blueId: '6L9P51qVV3HH366DyCCXDxSEYLtr6zN1bAMebbiK5iW1',
    },
    schema: {
      minItems: 0,
    },
    type: {
      blueId: '8DSFoWG9MqRSUhStqoPLrwVQiYByRh18NWbDEarN8MKF',
    },
  },
  contactInformation: {
    description:
      'The postal/street address, telephone number, email address and/or web page. If the contact information is specific to the associated business unit(s) or person (s), it should be associated with those.\n',
    type: {
      blueId: '2vquTQrHfbG8GVEjvB7SAZfAmxeyh1hxQeEN1wjro58A',
    },
  },
  description:
    'A class to specify a party, without a qualification as to whether this party is a legal entity or a natural person, although the model provides the ability to associate a person (or set of persons) to a party, which use case would imply that such party would be a legal entity (even if not formally specified as such).\n',
  name: 'cdm/base/staticdata/party/Party',
  partyId: {
    description:
      'The identifier associated with a party, e.g. the 20 digits LEI code.',
    itemType: {
      blueId: '9cfoNdV96xTzev5mSMGvEn7aYQWsjw2BsB7p8HG2KVYx',
    },
    schema: {
      minItems: 1,
    },
    type: {
      blueId: '8DSFoWG9MqRSUhStqoPLrwVQiYByRh18NWbDEarN8MKF',
    },
  },
  person: {
    description:
      'The person(s) who might be associated with the party as part of the execution, contract or legal document.',
    itemType: {
      blueId: 'Dz8x4hxN4LrnwACtSYMSryByQKNPMssYkK9899oiNbyh',
    },
    schema: {
      minItems: 0,
    },
    type: {
      blueId: '8DSFoWG9MqRSUhStqoPLrwVQiYByRh18NWbDEarN8MKF',
    },
  },
  personRole: {
    description: 'The role of the person(s)',
    itemType: {
      blueId: '9jMFqKdmgCwgQBzfKNbUAGoTLobW3aCoWXv25TRM7oHp',
    },
    schema: {
      minItems: 0,
    },
    type: {
      blueId: '8DSFoWG9MqRSUhStqoPLrwVQiYByRh18NWbDEarN8MKF',
    },
  },
};
