export const sequentialWorkflowOperation = {
  name: 'Sequential Workflow Operation',
  description:
    'The most common approach for implementing operations. Links to an operation definition and defines processing steps that execute sequentially when the operation is called.',
  type: {
    blueId: 'AQYxXnq4Yr9kRhfQnvneuyHRyMzDHFiewF27EeqVy6du',
  },
  channel: {
    description:
      'Specifies the channel through which Operation Request events are sent to invoke this operation implementation on the document.',
    type: {
      blueId: 'F92yo19rCcbBoBSpUA5LRxpfDejJDAaP1PRxxbWAraVP',
    },
  },
  operation: {
    description:
      'References the name of the operation definition that this implementation serves. Links this workflow to a specific Operation contract.',
    type: {
      blueId: 'F92yo19rCcbBoBSpUA5LRxpfDejJDAaP1PRxxbWAraVP',
    },
  },
} as const;
