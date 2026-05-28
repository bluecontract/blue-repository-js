export const CdmBaseStaticdataPartyPartyRole = {
  description:
    'A class to specify the role(s) that party(ies) may have in relation to the execution, contract or other legal agreement.\n',
  name: 'cdm/base/staticdata/party/PartyRole',
  ownershipPartyReference: {
    description:
      'A reference to the party that has ownership of this party role information. FpML specifies that For shared trade information, this attribute will reference the originator of the data (for example, an execution facility or clearing house).\n',
    type: {
      blueId: 'GnY3garuhYiHPrATUwY5JKQmZJPACHzjobkgXbmNJCik',
    },
  },
  partyReference: {
    description: 'A reference to the party to which the role refers to.',
    schema: {
      required: {
        type: {
          blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
        },
        value: true,
      },
    },
    type: {
      blueId: 'GnY3garuhYiHPrATUwY5JKQmZJPACHzjobkgXbmNJCik',
    },
  },
  role: {
    description: 'The party role.',
    schema: {
      required: {
        type: {
          blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
        },
        value: true,
      },
    },
    type: {
      blueId: 'EncqNSCrVYMkox9haeHEq66bWJTaR3vwubufrZkZzB4',
    },
  },
} as const;
