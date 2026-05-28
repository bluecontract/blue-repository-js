export const CdmBaseStaticdataPartyPartyReferencePayerReceiver = {
  description:
    'Specifies the parties responsible for making and receiving payments defined by this structure.',
  name: 'cdm/base/staticdata/party/PartyReferencePayerReceiver',
  payerAccountReference: {
    description:
      'A reference to the account responsible for making the payments defined by this structure.',
    type: {
      blueId: 'HQT4a6mn7V2UkpeZMUtsntaJUxLAPKdHrjNwJP4dzxQX',
    },
  },
  payerPartyReference: {
    description:
      'The party responsible for making the payments defined by this structure.',
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
  receiverAccountReference: {
    description:
      'A reference to the account that receives the payments corresponding to this structure.',
    type: {
      blueId: 'HQT4a6mn7V2UkpeZMUtsntaJUxLAPKdHrjNwJP4dzxQX',
    },
  },
  receiverPartyReference: {
    description:
      'The party that receives the payments corresponding to this structure.',
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
} as const;
