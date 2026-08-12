export const CdmBaseStaticdataPartyRelatedParty: Record<string, unknown> = {
  accountReference: {
    description: 'Reference to an account.',
    type: {
      blueId: 'HtZnJJw9C1Sg3ZZnEs8UKM65tyQLQcsMEQcVGZJx34Hi',
    },
  },
  name: 'cdm/base/staticdata/party/RelatedParty',
  partyReference: {
    description: 'Reference to a party.',
    schema: {
      required: true,
    },
    type: {
      blueId: 'Doqu2fdYiHUWbSaMDHL5YoyEeuzbTrSjqbT1ZLqmB1Cr',
    },
  },
  role: {
    description:
      'The category of the relationship. The related party performs the role specified in this field for the base party. For example, if the role is ,Guarantor, the related party acts as a guarantor for the base party.\n',
    schema: {
      required: true,
    },
    type: {
      blueId: 'GaVQx77bWVG9DoP6sEfKJFggBPtqn5A3tsZSpn3avRUv',
    },
  },
};
