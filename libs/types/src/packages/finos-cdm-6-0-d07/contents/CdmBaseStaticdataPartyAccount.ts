export const CdmBaseStaticdataPartyAccount = {
  accountBeneficiary: {
    description: 'A reference to the party beneficiary of the account.',
    type: {
      blueId: 'GnY3garuhYiHPrATUwY5JKQmZJPACHzjobkgXbmNJCik',
    },
  },
  accountName: {
    description: 'The name by which the account is known.',
    type: {
      blueId: 'F5GfdsSNcjLAm9anbfMQqxdxAFonErhU5UXFbQzq1zXY',
    },
  },
  accountNumber: {
    description: 'The account number.',
    schema: {
      required: {
        type: {
          blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
        },
        value: true,
      },
    },
    type: {
      blueId: 'F5GfdsSNcjLAm9anbfMQqxdxAFonErhU5UXFbQzq1zXY',
    },
  },
  accountType: {
    description: 'The type of account, e.g. client, house.',
    type: {
      blueId: 'HWaoVtND9cNy4h58tMGuWiynD42VByHqrEfXft6ogrRr',
    },
  },
  description:
    'A class to specify an account as an account number alongside, optionally. an account name, an account type, an account beneficiary and a servicing party.\n',
  name: 'cdm/base/staticdata/party/Account',
  partyReference: {
    description: 'A reference to the party to which the account refers to.',
    type: {
      blueId: 'GnY3garuhYiHPrATUwY5JKQmZJPACHzjobkgXbmNJCik',
    },
  },
  servicingParty: {
    description:
      'The reference to the legal entity that services the account, i.e. in the books of which the account is held.',
    type: {
      blueId: 'GnY3garuhYiHPrATUwY5JKQmZJPACHzjobkgXbmNJCik',
    },
  },
} as const;
