export const CdmEventCommonTradeIdentifier: Record<string, unknown> = {
  assignedIdentifier: {
    description:
      'The identifier value. This level of indirection between the issuer and the identifier and its version provides the ability to associate multiple identifiers to one issuer, consistently with the FpML PartyTradeIdentifier.\n',
    itemType: {
      blueId: 'FkMWf1pd7YUm7zUWH64xW6YKJEWnWCzUoCiDxJWMWd2U',
    },
    schema: {
      minItems: 1,
    },
    type: {
      blueId: '8DSFoWG9MqRSUhStqoPLrwVQiYByRh18NWbDEarN8MKF',
    },
  },
  description:
    'Defines a trade identifier as a special case of the generic identifier type, that also includes the trade identifier class.\n',
  identifierType: {
    description:
      'The enumerated classification of the identifier. Optional as a trade identifier may be party-specific, in which case it may not correspond to any established classification.\n',
    type: {
      blueId: 'FNeBLo1sQ7hp52M9UHnepcizEyD5BNf1S9y1z3f4hE11',
    },
  },
  issuer: {
    description:
      'The identifier issuer, when specified explicitly alongside the identifier value (instead of being specified by reference to a party).\n',
    type: {
      blueId: 'HvrBWWRL9WzJPU9bs48T3Uf9CcUgCfqtEszZPN3tYS3n',
    },
  },
  issuerReference: {
    description:
      'The identifier issuer, when specified by reference to a party specified as part of the transaction.',
    type: {
      blueId: 'Doqu2fdYiHUWbSaMDHL5YoyEeuzbTrSjqbT1ZLqmB1Cr',
    },
  },
  name: 'cdm/event/common/TradeIdentifier',
};
