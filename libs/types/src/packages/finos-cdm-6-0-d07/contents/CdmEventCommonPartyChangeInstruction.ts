export const CdmEventCommonPartyChangeInstruction = {
  ancillaryParty: {
    description:
      'Specifies an ancillary party to be added onto the new transaction, e.g. the original executing party in an allocation.\n',
    type: {
      blueId: 'gyjCjxW6qhXCC455CPDLkx4ccUz75HgdRL21KfMsdMs',
    },
  },
  counterparty: {
    description:
      'The new counterparty who is stepping into the trade. The stepping out counterparty is inferred based on the counterparty role that is being updated.\n',
    schema: {
      required: {
        type: {
          blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
        },
        value: true,
      },
    },
    type: {
      blueId: '3xDGPtjud4dCVNF9Swm1X7WoCse6gMziwHGvUnp1h3EK',
    },
  },
  description:
    'Specifies instruction to change the party on a trade. This primitive instruction is used in a number of scenarios including: clearing, allocation and novation. The instrution must include a trade identifier, because a change of party effectively results in a different trade.\n',
  name: 'cdm/event/common/PartyChangeInstruction',
  partyRole: {
    description:
      'Specifies an additional party roles to be added on to the new transaction.',
    type: {
      blueId: '8fXEqMXsnZAuwSFKfhiksmAPnV7yvaxSbmwgTbGrN75M',
    },
  },
  tradeId: {
    description:
      'The identifier to be assigned to the new trade post change of party.',
    itemType: {
      blueId: '5NL7sLmwPvsGQHH4cx5g8ajq8wbZMimREKKDky2KMRFQ',
    },
    schema: {
      minItems: {
        type: {
          blueId: '5WNMiV9Knz63B4dVY5JtMyh3FB4FSGqv7ceScvuapdE1',
        },
        value: 1,
      },
    },
    type: {
      blueId: '6aehfNAxHLC1PHHoDr3tYtFH3RWNbiWdFancJ1bypXEY',
    },
  },
} as const;
