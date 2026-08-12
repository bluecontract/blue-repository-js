export const CdmBaseStaticdataPartyPartyRole: Record<string, unknown> = {
  description:
    'A class to specify the role(s) that party(ies) may have in relation to the execution, contract or other legal agreement.\n',
  name: 'cdm/base/staticdata/party/PartyRole',
  ownershipPartyReference: {
    description:
      'A reference to the party that has ownership of this party role information. FpML specifies that For shared trade information, this attribute will reference the originator of the data (for example, an execution facility or clearing house).\n',
    type: {
      blueId: 'Doqu2fdYiHUWbSaMDHL5YoyEeuzbTrSjqbT1ZLqmB1Cr',
    },
  },
  partyReference: {
    description: 'A reference to the party to which the role refers to.',
    schema: {
      required: true,
    },
    type: {
      blueId: 'Doqu2fdYiHUWbSaMDHL5YoyEeuzbTrSjqbT1ZLqmB1Cr',
    },
  },
  role: {
    description: 'The party role.',
    schema: {
      required: true,
    },
    type: {
      blueId: 'GaVQx77bWVG9DoP6sEfKJFggBPtqn5A3tsZSpn3avRUv',
    },
  },
};
