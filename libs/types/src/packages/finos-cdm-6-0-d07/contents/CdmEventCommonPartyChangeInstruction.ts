export const CdmEventCommonPartyChangeInstruction: Record<string, unknown> = {
  ancillaryParty: {
    description:
      'Specifies an ancillary party to be added onto the new transaction, e.g. the original executing party in an allocation.\n',
    type: {
      blueId: '4iPHY4aygMFyDNb5teEsJeb7EyeK3CitfuP7DqfgnT1w',
    },
  },
  counterparty: {
    description:
      'The new counterparty who is stepping into the trade. The stepping out counterparty is inferred based on the counterparty role that is being updated.\n',
    schema: {
      required: true,
    },
    type: {
      blueId: '57Lwnif22McYRjgDzSyRZTsqY1Ac9LMSJcJ9KRXKiE6w',
    },
  },
  description:
    'Specifies instruction to change the party on a trade. This primitive instruction is used in a number of scenarios including: clearing, allocation and novation. The instrution must include a trade identifier, because a change of party effectively results in a different trade.\n',
  name: 'cdm/event/common/PartyChangeInstruction',
  partyRole: {
    description:
      'Specifies an additional party roles to be added on to the new transaction.',
    type: {
      blueId: '6DrJREpu1Ms3M4U1q7jqGjM46V1o8vxq4K1i3X4dwMvz',
    },
  },
  tradeId: {
    description:
      'The identifier to be assigned to the new trade post change of party.',
    itemType: {
      blueId: 'FGujWvfXdExA7nDNwp6iHf3hWYRL3g9JS9EZfYhS7N2y',
    },
    schema: {
      minItems: 1,
    },
    type: {
      blueId: '8DSFoWG9MqRSUhStqoPLrwVQiYByRh18NWbDEarN8MKF',
    },
  },
};
