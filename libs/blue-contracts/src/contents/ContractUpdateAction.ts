export const contractUpdateAction = {
  name: 'Contract Update Action',
  description:
    'Represents an action to update a contract instance. This structure serves as the standard method for contract \nprocessors to document and present steps in the contract lifecycle.\n',
  contractInstancePrev: {
    description: 'The contract instance before incoming event is applied.',
    type: {
      blueId: 'F92yo19rCcbBoBSpUA5LRxpfDejJDAaP1PRxxbWAraVP',
    },
  },
  initiateContractEntry: {
    description:
      'The original Initiate Contract Action timeline entry. This links the processing action to the specific contract.',
    type: {
      blueId: '5BDj3UbH6nUPh6bUQ9vfEchjV2vGLMwhd1FJ5UYaRcos',
    },
  },
  contractInstance: {
    description: 'The contract instance after incoming event is applied.',
  },
  emittedEvents: {
    description: 'A list of events emitted during the contract processing.',
    type: {
      blueId: 'G8wmfjEqugPEEXByMYWJXiEdbLToPRWNQEekNxrxfQWB',
    },
  },
  epoch: {
    description:
      'The epoch number associated with this update action. Starts with zero for newly initiated contract.',
    type: {
      blueId: 'DHmxTkFbXePZHCHCYmQr2dSzcNLcryFVjXVHkdQrrZr8',
    },
  },
  initiateContractProcessingEntry: {
    description:
      'The original Initiate Contract Processing Action timeline entry.',
    type: {
      blueId: '5BDj3UbH6nUPh6bUQ9vfEchjV2vGLMwhd1FJ5UYaRcos',
    },
  },
} as const;
