export const CdmEventPositionAvailableInventoryRecord: Record<string, unknown> =
  {
    collateral: {
      description:
        'The type of collateral can often be required when determining if the piece of availability being described is suitable for a party.\n',
      itemType: {
        blueId: '8hWgiVw3Z4pR86PBv9214e4QhrokD1GQkXWEKYdrQ7Xe',
      },
      schema: {
        minItems: 0,
      },
      type: {
        blueId: '8DSFoWG9MqRSUhStqoPLrwVQiYByRh18NWbDEarN8MKF',
      },
    },
    description:
      'An individual piece of available inventory. This represents a single security and its associated criteria. The criteria are used to describe any restrictions on the securities.\n',
    expirationDateTime: {
      description:
        'There may be a set period/time restriction associated to the security.',
      type: {
        blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
      },
    },
    identifer: {
      description:
        'Unique identifier for this record. This can be used to uniquely identify a specific piece of inventory.',
      type: {
        blueId: 'FkMWf1pd7YUm7zUWH64xW6YKJEWnWCzUoCiDxJWMWd2U',
      },
    },
    interestRate: {
      description:
        'An optional element which can be used to hold a rate associated to this piece of availability.',
      type: {
        blueId: 'D6pT9tDvB6nnaNaPVHodxcm2djqTNykgt6VJoD2uDq4M',
      },
    },
    name: 'cdm/event/position/AvailableInventoryRecord',
    partyRole: {
      description:
        'An individual security may be held by several agents. Including the party role at this level allows us to reference the party holding this specific item.\n',
      itemType: {
        blueId: '6DrJREpu1Ms3M4U1q7jqGjM46V1o8vxq4K1i3X4dwMvz',
      },
      schema: {
        minItems: 0,
      },
      type: {
        blueId: '8DSFoWG9MqRSUhStqoPLrwVQiYByRh18NWbDEarN8MKF',
      },
    },
    quantity: {
      description: 'The quantity of the security',
      type: {
        blueId: 'AdJnZG9c8KBZpbUXw47UmJ1yNJN4AK3q9P9aMJjaKanN',
      },
    },
    security: {
      description: 'The security details.',
      type: {
        blueId: 'GRccc39hoCxirVd5AgYHyNZT6TtiBJj8USkFUA6nQcfG',
      },
    },
  };
