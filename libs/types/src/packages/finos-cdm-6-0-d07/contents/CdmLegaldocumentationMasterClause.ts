export const CdmLegaldocumentationMasterClause = {
  description:
    'A type for documenting additional clause that cannot yet be represented with the model and yet needed for a digital representation of the agreement\n',
  identifier: {
    description: 'The  name or identifier associated to this clause',
    type: {
      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
    },
  },
  name: 'cdm/legaldocumentation/master/Clause',
  subcomponents: {
    description:
      'Additional hierarchichal components of the clause if relevant',
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
  terms: {
    description: 'Content of this bespoke clause',
    type: {
      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
    },
  },
} as const;
