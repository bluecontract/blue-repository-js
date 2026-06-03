export const CdmEventCommonPositionIdentifier: Record<string, unknown> = {
  assignedIdentifier: {
    description:
      'The identifier value. This level of indirection between the issuer and the identifier and its version provides the ability to associate multiple identifiers to one issuer, consistently with the FpML PartyTradeIdentifier.\n',
    itemType: {
      blueId: 'HUSEHXgSpK91Brg3mku9fHTV4D8bnuM9D7uwKV2HynTU',
    },
    schema: {
      minItems: 1,
    },
    type: {
      blueId: '8DSFoWG9MqRSUhStqoPLrwVQiYByRh18NWbDEarN8MKF',
    },
  },
  description:
    'Defines a position identifier as a special case of the generic identifier type, that also includes the position identifier class.\n',
  identifierType: {
    description:
      'The enumerated classification of the identifier. Optional as a position identifier may be party-specific, in which case it may not correspond to any established classification.\n',
    type: {
      blueId: '9YDcX7WZdjBgo7K9Kss1FBKB5BJLedbkwzY5f4DdFZ48',
    },
  },
  issuer: {
    description:
      'The identifier issuer, when specified explicitly alongside the identifier value (instead of being specified by reference to a party).\n',
    type: {
      blueId: 'HTDqFgte5VF88dLHnCZMjvyetfxfTAKxf9r8ciErE7Vg',
    },
  },
  issuerReference: {
    description:
      'The identifier issuer, when specified by reference to a party specified as part of the transaction.',
    type: {
      blueId: 'Doqu2fdYiHUWbSaMDHL5YoyEeuzbTrSjqbT1ZLqmB1Cr',
    },
  },
  name: 'cdm/event/common/PositionIdentifier',
};
