export const CdmLegaldocumentationMasterMasterAgreementClause: Record<
  string,
  unknown
> = {
  counterparty: {
    description:
      'Optional counterparty role. This can be used where a clause needs to be assigned to a specific party on the agreement based upon their role i.e. Party A or Party B.\n',
    itemType: {
      blueId: '7qRfgFBAefYQ37ztmK2dW9i4twZzBjKcQiHPeHrcRtYw',
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
      blueId: 'FmDnyLJSvr6LXHiDJUX2Nr93Ud1wiRFF9F7t8PyY65JJ',
    },
  },
  name: 'cdm/legaldocumentation/master/MasterAgreementClause',
  otherParty: {
    description:
      'Optional party. This can be required for umbrella agreements where a clause may need to be assigned to a specific party who may or may not be on the agreement.\n',
    itemType: {
      blueId: 'GaVQx77bWVG9DoP6sEfKJFggBPtqn5A3tsZSpn3avRUv',
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
      blueId: 'A8ZiN1bhVxyGsrcaW9Akt1J2YpZyqe8iaPJmq6UAoNnN',
    },
    schema: {
      minItems: 1,
    },
    type: {
      blueId: '8DSFoWG9MqRSUhStqoPLrwVQiYByRh18NWbDEarN8MKF',
    },
  },
};
