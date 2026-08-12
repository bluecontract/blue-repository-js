export const CdmBaseStaticdataPartyPartyReferencePayerReceiver: Record<
  string,
  unknown
> = {
  description:
    'Specifies the parties responsible for making and receiving payments defined by this structure.',
  name: 'cdm/base/staticdata/party/PartyReferencePayerReceiver',
  payerAccountReference: {
    description:
      'A reference to the account responsible for making the payments defined by this structure.',
    type: {
      blueId: 'HtZnJJw9C1Sg3ZZnEs8UKM65tyQLQcsMEQcVGZJx34Hi',
    },
  },
  payerPartyReference: {
    description:
      'The party responsible for making the payments defined by this structure.',
    schema: {
      required: true,
    },
    type: {
      blueId: 'Doqu2fdYiHUWbSaMDHL5YoyEeuzbTrSjqbT1ZLqmB1Cr',
    },
  },
  receiverAccountReference: {
    description:
      'A reference to the account that receives the payments corresponding to this structure.',
    type: {
      blueId: 'HtZnJJw9C1Sg3ZZnEs8UKM65tyQLQcsMEQcVGZJx34Hi',
    },
  },
  receiverPartyReference: {
    description:
      'The party that receives the payments corresponding to this structure.',
    schema: {
      required: true,
    },
    type: {
      blueId: 'Doqu2fdYiHUWbSaMDHL5YoyEeuzbTrSjqbT1ZLqmB1Cr',
    },
  },
};
