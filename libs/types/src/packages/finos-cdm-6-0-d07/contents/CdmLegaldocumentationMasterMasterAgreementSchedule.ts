export const CdmLegaldocumentationMasterMasterAgreementSchedule = {
  clause: {
    description:
      'Clauses that have had elections made against them in this Master Agreement. There must be at least one clause defined in the agreement.\n',
    itemType: {
      blueId: '3N7EgkSRxjnYvZ2ERBeP5kVt5dr65FiuYYh8NGNQ35t2',
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
  description: 'The set of elections which specify a Master Agreement.',
  name: 'cdm/legaldocumentation/master/MasterAgreementSchedule',
} as const;
