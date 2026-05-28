export const CdmBaseStaticdataPartyPayerReceiver = {
  description:
    'Specifies the parties responsible for making and receiving payments defined by this structure.',
  name: 'cdm/base/staticdata/party/PayerReceiver',
  payer: {
    description:
      'Specifies the counterparty responsible for making the payments defined by this structure.  The party is one of the two principal parties to the transaction.\n',
    schema: {
      required: {
        type: {
          blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
        },
        value: true,
      },
    },
    type: {
      blueId: '6x12g8enT8MoRfSx5A65GDeBhgNsaewRCdXG5hsioGmL',
    },
  },
  receiver: {
    description:
      'Specifies the party that receives the payments corresponding to this structure.  The party is one of the two counterparties to the transaction.\n',
    schema: {
      required: {
        type: {
          blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
        },
        value: true,
      },
    },
    type: {
      blueId: '6x12g8enT8MoRfSx5A65GDeBhgNsaewRCdXG5hsioGmL',
    },
  },
} as const;
