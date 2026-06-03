export const CdmBaseStaticdataPartyAccount: Record<string, unknown> = {
  accountBeneficiary: {
    description: 'A reference to the party beneficiary of the account.',
    type: {
      blueId: 'Doqu2fdYiHUWbSaMDHL5YoyEeuzbTrSjqbT1ZLqmB1Cr',
    },
  },
  accountName: {
    description: 'The name by which the account is known.',
    type: {
      blueId: 'HTDqFgte5VF88dLHnCZMjvyetfxfTAKxf9r8ciErE7Vg',
    },
  },
  accountNumber: {
    description: 'The account number.',
    schema: {
      required: true,
    },
    type: {
      blueId: 'HTDqFgte5VF88dLHnCZMjvyetfxfTAKxf9r8ciErE7Vg',
    },
  },
  accountType: {
    description: 'The type of account, e.g. client, house.',
    type: {
      blueId: '4ziQZYSMsRBGw2UcuWWBCV7f3BDZdr6LRtdVLEavoHaw',
    },
  },
  description:
    'A class to specify an account as an account number alongside, optionally. an account name, an account type, an account beneficiary and a servicing party.\n',
  name: 'cdm/base/staticdata/party/Account',
  partyReference: {
    description: 'A reference to the party to which the account refers to.',
    type: {
      blueId: 'Doqu2fdYiHUWbSaMDHL5YoyEeuzbTrSjqbT1ZLqmB1Cr',
    },
  },
  servicingParty: {
    description:
      'The reference to the legal entity that services the account, i.e. in the books of which the account is held.',
    type: {
      blueId: 'Doqu2fdYiHUWbSaMDHL5YoyEeuzbTrSjqbT1ZLqmB1Cr',
    },
  },
};
