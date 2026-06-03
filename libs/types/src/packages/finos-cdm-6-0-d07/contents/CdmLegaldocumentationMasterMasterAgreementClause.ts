export const CdmLegaldocumentationMasterMasterAgreementClause: Record<
  string,
  unknown
> = {
  counterparty: {
    description:
      'Optional counterparty role. This can be used where a clause needs to be assigned to a specific party on the agreement based upon their role i.e. Party A or Party B.\n',
    itemType: {
      blueId: '6RRexSdxduLUUJjoAGhNuhXszw24mwyTFrHtwAqU2SDG',
    },
    schema: {
      maxItems: 2,
      minItems: 0,
    },
    type: {
      blueId: '8DSFoWG9MqRSUhStqoPLrwVQiYByRh18NWbDEarN8MKF',
    },
  },
  description: 'Defines clauses that make up a Master Agreement',
  identifer: {
    description: 'Unique identifier for the clause',
    schema: {
      required: true,
    },
    type: {
      blueId: '8PqFpFTcFhXD8jv7MGaW7zx9isCBxvU2dYAKLW7yU6tM',
    },
  },
  name: 'cdm/legaldocumentation/master/MasterAgreementClause',
  otherParty: {
    description:
      'Optional party. This can be required for umbrella agreements where a clause may need to be assigned to a specific party who may or may not be on the agreement.\n',
    itemType: {
      blueId: 'H6gWEiw9pVTmNQVvvZzt7KcBJ1Ub6wMyaVh3zbM7qCkM',
    },
    schema: {
      minItems: 0,
    },
    type: {
      blueId: '8DSFoWG9MqRSUhStqoPLrwVQiYByRh18NWbDEarN8MKF',
    },
  },
  variant: {
    description:
      'Allows multiple variants to be defined for a clause. This needs to be an array as some clauses can specify different variants for different parties. At least one variant must be specified for a clause.\n',
    itemType: {
      blueId: '7wLk2adpUVoD6AqqF85TpGzcSum1hoSQ8TeAhfcmdpmH',
    },
    schema: {
      minItems: 1,
    },
    type: {
      blueId: '8DSFoWG9MqRSUhStqoPLrwVQiYByRh18NWbDEarN8MKF',
    },
  },
};
