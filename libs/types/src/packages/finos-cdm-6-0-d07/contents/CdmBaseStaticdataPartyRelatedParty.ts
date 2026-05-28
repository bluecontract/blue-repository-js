export const CdmBaseStaticdataPartyRelatedParty = {
  accountReference: {
    description: 'Reference to an account.',
    type: {
      blueId: 'HQT4a6mn7V2UkpeZMUtsntaJUxLAPKdHrjNwJP4dzxQX',
    },
  },
  name: 'cdm/base/staticdata/party/RelatedParty',
  partyReference: {
    description: 'Reference to a party.',
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
    description:
      'The category of the relationship. The related party performs the role specified in this field for the base party. For example, if the role is ,Guarantor, the related party acts as a guarantor for the base party.\n',
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
