export const CdmBaseStaticdataPartyParty: Record<string, unknown> = {
  account: {
    description:
      'The account that might be associated with the party. At most one account can be specified, as it is expected that this information is used in the context of a contract or legal document where only one account per party can be associated with such object.\n',
    type: {
      blueId: 'Ci7ty5zffGzjgsQdhnezMazESuasmjVRABXcDJanwgLf',
    },
  },
  businessUnit: {
    description:
      'Optional organization unit information used to describe the organization units (e.g. trading desks) involved in a transaction or business process, incl. the contact information (when relevant).\n',
    itemType: {
      blueId: 'EMjJhiDkKtnd6Xy5ATKZRxxn7miYV6i9qRKmbwi8PePK',
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
      blueId: 'AWye6DehLS3vyWXet8adWpUZ8kLZYQCWMkCgEK9CoRSR',
    },
  },
  description:
    'A class to specify a party, without a qualification as to whether this party is a legal entity or a natural person, although the model provides the ability to associate a person (or set of persons) to a party, which use case would imply that such party would be a legal entity (even if not formally specified as such).\n',
  name: 'cdm/base/staticdata/party/Party',
  partyId: {
    description:
      'The identifier associated with a party, e.g. the 20 digits LEI code.',
    itemType: {
      blueId: 'AGa4xDzohuMeonuvvfPSohH7tmSdN59ng4Gm6V1AQJmm',
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
      blueId: 'C3NyCURgLaHrTtjTpfDUYJnBfR1HhhpQmNSowonp7YHH',
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
      blueId: 'GZevPGzamzSxh8yoRnX4ADVPupYmtwh9tYQvwURzxjmZ',
    },
    schema: {
      minItems: 0,
    },
    type: {
      blueId: '8DSFoWG9MqRSUhStqoPLrwVQiYByRh18NWbDEarN8MKF',
    },
  },
};
