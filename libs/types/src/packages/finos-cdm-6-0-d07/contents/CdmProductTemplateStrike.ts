export const CdmProductTemplateStrike = {
  buyer: {
    description: 'The buyer of the option.',
    type: {
      blueId: '3h5wRr1PRsH4WePSXwrdNrRnbGYxzTUTdLMKCpegAmi8',
    },
  },
  description: 'A class describing a single cap or floor rate.',
  name: 'cdm/product/template/Strike',
  seller: {
    description: 'The party that has sold.',
    type: {
      blueId: '3h5wRr1PRsH4WePSXwrdNrRnbGYxzTUTdLMKCpegAmi8',
    },
  },
  strikeRate: {
    description: 'The rate for a cap or floor.',
    schema: {
      required: {
        type: {
          blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
        },
        value: true,
      },
    },
    type: {
      blueId: '7pwXmXYCJtWnd348c2JQGBkm9C4renmZRwxbfaypsx5y',
    },
  },
} as const;
