export const performContractAction = {
  name: 'Perform Contract Action',
  description:
    'Represents an action to be performed on a contract instance within a specific workflow.\n',
  workflowInstance: {
    description:
      'The identifier of the workflow instance within which the action is being executed.',
    type: {
      blueId: 'DHmxTkFbXePZHCHCYmQr2dSzcNLcryFVjXVHkdQrrZr8',
    },
  },
  action: {
    description: 'The actual action to be performed.',
  },
  initiateContractEntry: {
    description:
      'The original Initiate Contract Action timeline entry. This links the processing action to the specific contract initiation.',
    type: {
      blueId: '5BDj3UbH6nUPh6bUQ9vfEchjV2vGLMwhd1FJ5UYaRcos',
    },
  },
  workflowName: {
    description:
      'The name of the workflow in which this action is being performed.',
    type: {
      type: {
        blueId: 'F92yo19rCcbBoBSpUA5LRxpfDejJDAaP1PRxxbWAraVP',
      },
      value: 'String',
    },
  },
  contractInstance: {
    description:
      'The identifier of the contract instance on which the action is to be performed.',
    type: {
      blueId: 'DHmxTkFbXePZHCHCYmQr2dSzcNLcryFVjXVHkdQrrZr8',
    },
  },
} as const;
