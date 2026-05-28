export const CdmBaseStaticdataPartyCounterparty = {
  description:
    'Defines a counterparty enumerated value, e.g. Party1 or Party2, with an associated party reference. The product is agnostic to the actual parties to the transaction, with the party references abstracted away from the product definition and replaced by the CounterpartyEnum (e.g. values Party1 or Party2). The CounterpartyEnum can then be positioned in the product (e.g. to specify which counterparty is the payer, receiver etc) and this Counterparty type, which is positioned outside of the product definition, allows the CounterpartyEnum to be associated with an actual party reference.\n',
  name: 'cdm/base/staticdata/party/Counterparty',
  partyReference: {
    description: 'Specifies the party that is associated to the counterparty.',
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
      'Specifies the CounterpartyEnum, e.g. either Party1 or Party2, that is associated to the partyReference.',
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
