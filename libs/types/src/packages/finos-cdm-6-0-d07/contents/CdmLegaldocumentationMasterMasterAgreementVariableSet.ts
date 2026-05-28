export const CdmLegaldocumentationMasterMasterAgreementVariableSet = {
  description:
    'Defines a type where additional variables associated to clauses and their variants can be described.',
  name: 'cdm/legaldocumentation/master/MasterAgreementVariableSet',
  val: {
    description: 'The value for this variable',
    type: {
      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
    },
  },
  variableSet: {
    description:
      'For some variants a table of variables is required. To support this use case we need to be able to specify variables within variables. Including a variable set here gives us infinite nesting opportunities - realistically we are only ever expecting that a table would need to be defined for any particular clause, so we would expect two levels of nesting as a maximum i.e. variableSet->variableSet->name/value.\n',
    itemType: {
      blueId: 'this#0',
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
