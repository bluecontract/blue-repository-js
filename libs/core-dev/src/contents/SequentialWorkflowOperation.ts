export const sequentialWorkflowOperation = {
  name: 'Sequential Workflow Operation',
  description:
    'The most common approach for implementing operations. Links to an operation definition and defines processing steps that execute sequentially when the operation is called.',
  type: {
    blueId: '9VFwowb9bZ2hnEFqo4UW66VMbx7R5GhCZRr3PLibkK4m',
  },
  operation: {
    description:
      'References the name of the operation definition that this implementation serves. Links this workflow to a specific Operation contract.',
    type: {
      blueId: 'F92yo19rCcbBoBSpUA5LRxpfDejJDAaP1PRxxbWAraVP',
    },
  },
} as const;
