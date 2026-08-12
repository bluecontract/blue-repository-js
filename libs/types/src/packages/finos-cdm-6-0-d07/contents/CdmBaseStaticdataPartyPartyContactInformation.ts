export const CdmBaseStaticdataPartyPartyContactInformation: Record<
  string,
  unknown
> = {
  additionalInformation: {
    description: 'Specification of special instructions of the relevant party.',
    type: {
      blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
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
      'The postal/street address, telephone number, email address and/or web page. If the contact information is specific to the associated business unit(s), it should be associated with those.\n',
    type: {
      blueId: 'AWye6DehLS3vyWXet8adWpUZ8kLZYQCWMkCgEK9CoRSR',
    },
  },
  description:
    'A class to specify contact information within a party: address and, optionally, associated business unit and person. This class also supports the ISDA CSA representation as a single string, through the address attribute.\n',
  name: 'cdm/base/staticdata/party/PartyContactInformation',
  partyReference: {
    description:
      'The reference to the party to which the contact information refers to.',
    type: {
      blueId: 'Doqu2fdYiHUWbSaMDHL5YoyEeuzbTrSjqbT1ZLqmB1Cr',
    },
  },
  person: {
    description:
      'Optional information about people involved in a transaction or business process. (These are employees of the party.)\n',
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
};
