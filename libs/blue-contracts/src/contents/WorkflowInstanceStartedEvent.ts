export const workflowInstanceStartedEvent = {
  name: 'Workflow Instance Started Event',
  initiateContractEntry: {
    description: 'Entry for initiating the contract.',
  },
  initiateContractProcessingEntry: {
    description: 'Entry for initiating the processing of the contract.',
  },
  currentStepName: {
    description:
      'The name of the workflow step where the workflow instance has stopped.',
    type: {
      blueId: 'F92yo19rCcbBoBSpUA5LRxpfDejJDAaP1PRxxbWAraVP',
    },
  },
  contractInstanceId: {
    description: 'Identifier for the contract instance',
    type: {
      blueId: 'DHmxTkFbXePZHCHCYmQr2dSzcNLcryFVjXVHkdQrrZr8',
    },
  },
  workflowInstanceId: {
    description: 'Identifier for the newly created workflow instance',
    type: {
      blueId: 'DHmxTkFbXePZHCHCYmQr2dSzcNLcryFVjXVHkdQrrZr8',
    },
  },
} as const;
