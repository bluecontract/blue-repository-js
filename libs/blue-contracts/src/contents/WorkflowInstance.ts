export const workflowInstance = {
  name: 'Workflow Instance',
  description:
    'Represents an instance of a workflow that was triggered and is being processed.',
  stepResults: {
    description:
      'A mapping between step names and a dictionary of returned values for all steps that have been processed by this instance and returned some value.',
  },
  finished: {
    description: 'Indicates whether the workflow instance is finished.',
    type: {
      blueId: 'EL6AjrbJsxTWRTPzY8WR8Y2zAMXRbydQj83PcZwuAHbo',
    },
  },
  id: {
    description:
      'The unique identifier for the workflow instance. Each new workflow instance gets a consecutive number starting from 0.',
    type: {
      blueId: 'DHmxTkFbXePZHCHCYmQr2dSzcNLcryFVjXVHkdQrrZr8',
    },
  },
  workflow: {
    description:
      'The workflow for which this instance was created. This value is unchanged and reflects the state of the workflow at the moment this instance was created.',
  },
  currentStepName: {
    description:
      'The name of the step at which processing stopped, if the instance is not finished.',
    type: {
      blueId: 'F92yo19rCcbBoBSpUA5LRxpfDejJDAaP1PRxxbWAraVP',
    },
  },
} as const;
