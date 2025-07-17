export const contractInstance = {
  name: 'Contract Instance',
  description:
    'An instantiated contract that holds the current state, workflows, and nested contract instances.',
  workflowInstances: {
    description:
      'The list of active workflow instances that are currently running. Once a workflow is terminated, it is removed from this list.',
  },
  startedLocalContractCount: {
    description:
      'The number of local contract instances that have been initiated.',
    type: {
      blueId: 'DHmxTkFbXePZHCHCYmQr2dSzcNLcryFVjXVHkdQrrZr8',
    },
  },
  localContractInstances: {
    description:
      'The list of active local contract instances that are currently running within this contract. Once a contract is terminated, it is removed from this list.',
  },
  contract: {
    description:
      'The contract associated with this instance, reflecting any changes due to workflow executions.',
  },
  id: {
    description:
      'The unique identifier for the contract instance. The main contract instance has id=0. Instances created within this contract will have ids starting from 1 and will be stored within localContractInstances.',
    type: {
      blueId: 'DHmxTkFbXePZHCHCYmQr2dSzcNLcryFVjXVHkdQrrZr8',
    },
  },
  startedWorkflowCount: {
    description: 'The number of workflow instances that have been initiated.',
    type: {
      blueId: 'DHmxTkFbXePZHCHCYmQr2dSzcNLcryFVjXVHkdQrrZr8',
    },
  },
} as const;
