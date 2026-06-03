export const CdmEventCommonPartyChangeInstruction: Record<string, unknown> = {
  ancillaryParty: {
    description:
      'Specifies an ancillary party to be added onto the new transaction, e.g. the original executing party in an allocation.\n',
    type: {
      blueId: '3FLaoJ8BXZUb3VpFoXQ7ACwUhTaDAZgwztubj17GegH4',
    },
  },
  counterparty: {
    description:
      'The new counterparty who is stepping into the trade. The stepping out counterparty is inferred based on the counterparty role that is being updated.\n',
    schema: {
      required: true,
    },
    type: {
      blueId: '58TeStN7sJrzoG3o1U7FZq3fFkxbCXkvdWPYYZkf1r3x',
    },
  },
  description:
    'Specifies instruction to change the party on a trade. This primitive instruction is used in a number of scenarios including: clearing, allocation and novation. The instrution must include a trade identifier, because a change of party effectively results in a different trade.\n',
  name: 'cdm/event/common/PartyChangeInstruction',
  partyRole: {
    description:
      'Specifies an additional party roles to be added on to the new transaction.',
    type: {
      blueId: 'Hrt2EoYJokASG9J62NMKWt8UZbQN6BwtESp7hVDVQYvm',
    },
  },
  tradeId: {
    description:
      'The identifier to be assigned to the new trade post change of party.',
    itemType: {
      blueId: '6zgzXM8ryqdp6CFr8BH4PKyJcHZsjXogtRiA2DcyKgBU',
    },
    schema: {
      minItems: 1,
    },
    type: {
      blueId: '8DSFoWG9MqRSUhStqoPLrwVQiYByRh18NWbDEarN8MKF',
    },
  },
};
