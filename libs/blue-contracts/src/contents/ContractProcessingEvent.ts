export const contractProcessingEvent = {
  name: 'Contract Processing Event',
  description:
    'Represents an event that occurs during the processing of a contract instance, capturing the state and context of the workflow and contract steps involved.',
  initiateContractEntry: {
    description: 'Entry for initiating the contract.',
  },
  workflowStepName: {
    description: 'The name of the workflow step where the event occurred.',
    type: {
      blueId: 'F92yo19rCcbBoBSpUA5LRxpfDejJDAaP1PRxxbWAraVP',
    },
  },
  initiateContractProcessingEntry: {
    description: 'Entry for initiating the processing of the contract.',
  },
  contractInstanceId: {
    description:
      'Identifier for the contract instance where the event occurred.',
    type: {
      blueId: 'DHmxTkFbXePZHCHCYmQr2dSzcNLcryFVjXVHkdQrrZr8',
    },
  },
  event: {
    description:
      'The actual event that was triggered when processing the contract.',
  },
  workflowInstanceId: {
    description:
      'Identifier for the workflow instance where the event occurred.',
    type: {
      blueId: 'DHmxTkFbXePZHCHCYmQr2dSzcNLcryFVjXVHkdQrrZr8',
    },
  },
} as const;
