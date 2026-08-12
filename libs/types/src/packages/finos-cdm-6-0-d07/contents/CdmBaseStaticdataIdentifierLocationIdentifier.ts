export const CdmBaseStaticdataIdentifierLocationIdentifier: Record<
  string,
  unknown
> = {
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
    'Specifies a location identifier. An issuer and an identifier type can be associated with the actual identifier value as a way to properly qualify it.\n',
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
  locationIdentifierType: {
    description: 'Specifies the nature of a location identifier.',
    type: {
      blueId: '7dLLgnD4PFY6GgCdfDEzYK7BV9sYLkMTPmWqn2RvBHuV',
    },
  },
  name: 'cdm/base/staticdata/identifier/LocationIdentifier',
};
