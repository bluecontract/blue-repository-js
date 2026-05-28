export const CdmEventWorkflowPartyCustomisedWorkflow = {
  customisedWorkflow: {
    description: 'Non-standardized data in a generic form.',
    itemType: {
      blueId: '9To4fnNdzSDWsi6bJQXF3mF5qrWL3Z512YNM4QAgavMg',
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
  description:
    'A class to specify a party-related, non-standardized data in a generic form.',
  name: 'cdm/event/workflow/PartyCustomisedWorkflow',
  partyName: {
    description: 'The party name to which the workflow pertains to.',
    type: {
      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
    },
  },
  partyReference: {
    description: 'Reference to the party to which the workflow pertains to.',
    type: {
      blueId: 'GnY3garuhYiHPrATUwY5JKQmZJPACHzjobkgXbmNJCik',
    },
  },
} as const;
