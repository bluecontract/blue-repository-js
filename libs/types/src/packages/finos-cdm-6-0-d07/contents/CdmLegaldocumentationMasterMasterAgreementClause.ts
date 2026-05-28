export const CdmLegaldocumentationMasterMasterAgreementClause = {
  counterparty: {
    description:
      'Optional counterparty role. This can be used where a clause needs to be assigned to a specific party on the agreement based upon their role i.e. Party A or Party B.\n',
    itemType: {
      blueId: '6x12g8enT8MoRfSx5A65GDeBhgNsaewRCdXG5hsioGmL',
    },
    schema: {
      maxItems: {
        type: {
          blueId: '5WNMiV9Knz63B4dVY5JtMyh3FB4FSGqv7ceScvuapdE1',
        },
        value: 2,
      },
      minItems: {
        type: {
          blueId: '5WNMiV9Knz63B4dVY5JtMyh3FB4FSGqv7ceScvuapdE1',
        },
        value: 0,
      },
    },
    type: {
      blueId: '6aehfNAxHLC1PHHoDr3tYtFH3RWNbiWdFancJ1bypXEY',
    },
  },
  description: 'Defines clauses that make up a Master Agreement',
  identifer: {
    description: 'Unique identifier for the clause',
    schema: {
      required: {
        type: {
          blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
        },
        value: true,
      },
    },
    type: {
      blueId: 'ATRquhefedUFSWUpWKJTWMqSXbQ5oeXqJjWsFxU4zXvd',
    },
  },
  name: 'cdm/legaldocumentation/master/MasterAgreementClause',
  otherParty: {
    description:
      'Optional party. This can be required for umbrella agreements where a clause may need to be assigned to a specific party who may or may not be on the agreement.\n',
    itemType: {
      blueId: 'EncqNSCrVYMkox9haeHEq66bWJTaR3vwubufrZkZzB4',
    },
    schema: {
      minItems: {
        type: {
          blueId: '5WNMiV9Knz63B4dVY5JtMyh3FB4FSGqv7ceScvuapdE1',
        },
        value: 0,
      },
    },
    type: {
      blueId: '6aehfNAxHLC1PHHoDr3tYtFH3RWNbiWdFancJ1bypXEY',
    },
  },
  variant: {
    description:
      'Allows multiple variants to be defined for a clause. This needs to be an array as some clauses can specify different variants for different parties. At least one variant must be specified for a clause.\n',
    itemType: {
      blueId: '82sz4bxrB4XdaHpf6yNEZZyFnSqicJknQE13QAy4QvNx',
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
