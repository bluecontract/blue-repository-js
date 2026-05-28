export const CdmLegaldocumentationMasterMasterAgreementClauseVariant = {
  counterparty: {
    description:
      'Optional counterparty role. This can be used where a clause needs to assign a different variant to the different parties on the agreement based upon their role i.e. Party A or Party B.\n',
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
  description:
    'Sets the details for a specific variant associated to a clause in a Master Agreement',
  identifier: {
    description: 'Unique identifier for this variant',
    schema: {
      required: {
        type: {
          blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
        },
        value: true,
      },
    },
    type: {
      blueId: '3ogLgKzrgp38r1n3NkU7CtA1DcL4gyLuTT9mAegThW7k',
    },
  },
  name: 'cdm/legaldocumentation/master/MasterAgreementClauseVariant',
  otherParty: {
    description:
      'Optional party. This can be used where a clause needs to assign different variants to different parties who may or may not be on the agreement.\n',
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
  variableSet: {
    description:
      'For some variants of some clauses additional details are required to work out what has been elected. This array can be used to define the name and value of these variables. Please refer to the agreement documentation for more details of the variables that are available for any clause.\n',
    itemType: {
      blueId: 'Di6SFxkKQMc6nqT3aGU1YqGGEZxoqde2cDU2V2RUauq9#0',
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
} as const;
