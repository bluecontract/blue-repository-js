export const CdmLegaldocumentationMasterMasterAgreementClauseVariant: Record<
  string,
  unknown
> = {
  counterparty: {
    description:
      'Optional counterparty role. This can be used where a clause needs to assign a different variant to the different parties on the agreement based upon their role i.e. Party A or Party B.\n',
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
  description:
    'Sets the details for a specific variant associated to a clause in a Master Agreement',
  identifier: {
    description: 'Unique identifier for this variant',
    schema: {
      required: true,
    },
    type: {
      blueId: 'HEy66WYZgdArbo4SMoNQ7wRkHqRju4CT4fkMcrUgbA5p',
    },
  },
  name: 'cdm/legaldocumentation/master/MasterAgreementClauseVariant',
  otherParty: {
    description:
      'Optional party. This can be used where a clause needs to assign different variants to different parties who may or may not be on the agreement.\n',
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
  variableSet: {
    description:
      'For some variants of some clauses additional details are required to work out what has been elected. This array can be used to define the name and value of these variables. Please refer to the agreement documentation for more details of the variables that are available for any clause.\n',
    itemType: {
      blueId: '6Fnwwf9PJokoeYXxkAzwU7oLnG6xfF9FHrzmoQVkBtQu#0',
    },
    schema: {
      minItems: 0,
    },
    type: {
      blueId: '8DSFoWG9MqRSUhStqoPLrwVQiYByRh18NWbDEarN8MKF',
    },
  },
};
