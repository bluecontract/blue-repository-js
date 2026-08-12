export const CdmBaseStaticdataPartyPayerReceiver: Record<string, unknown> = {
  description:
    'Specifies the parties responsible for making and receiving payments defined by this structure.',
  name: 'cdm/base/staticdata/party/PayerReceiver',
  payer: {
    description:
      'Specifies the counterparty responsible for making the payments defined by this structure.  The party is one of the two principal parties to the transaction.\n',
    schema: {
      required: true,
    },
    type: {
      blueId: '7qRfgFBAefYQ37ztmK2dW9i4twZzBjKcQiHPeHrcRtYw',
    },
  },
  receiver: {
    description:
      'Specifies the party that receives the payments corresponding to this structure.  The party is one of the two counterparties to the transaction.\n',
    schema: {
      required: true,
    },
    type: {
      blueId: '7qRfgFBAefYQ37ztmK2dW9i4twZzBjKcQiHPeHrcRtYw',
    },
  },
};
