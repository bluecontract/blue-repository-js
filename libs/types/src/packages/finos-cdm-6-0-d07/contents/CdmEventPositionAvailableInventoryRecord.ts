export const CdmEventPositionAvailableInventoryRecord: Record<string, unknown> =
  {
    collateral: {
      description:
        'The type of collateral can often be required when determining if the piece of availability being described is suitable for a party.\n',
      itemType: {
        blueId: 'EE9ddWepUCVpA88PcNq8buPwyuFbJawoqrJwAAwpCjcx',
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
        blueId: 'HUSEHXgSpK91Brg3mku9fHTV4D8bnuM9D7uwKV2HynTU',
      },
    },
    interestRate: {
      description:
        'An optional element which can be used to hold a rate associated to this piece of availability.',
      type: {
        blueId: 'GLmQaa2vVZKjaht1sNMcUL55xfAgWQxpj5ENxwvVRvsm',
      },
    },
    name: 'cdm/event/position/AvailableInventoryRecord',
    partyRole: {
      description:
        'An individual security may be held by several agents. Including the party role at this level allows us to reference the party holding this specific item.\n',
      itemType: {
        blueId: 'Hrt2EoYJokASG9J62NMKWt8UZbQN6BwtESp7hVDVQYvm',
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
        blueId: 'DGJZYRtm8AD2nG2o56eH5EDc8FujZiiXmBsuHgLf3UCR',
      },
    },
    security: {
      description: 'The security details.',
      type: {
        blueId: '5R9o4hMGFG6JsprSkPFoQuMmr2FvfKQchfGbxtSgy2JY',
      },
    },
  };
