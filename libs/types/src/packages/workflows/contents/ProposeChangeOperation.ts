export const ProposeChangeOperation: Record<string, unknown> = {
  description:
    'Operation marker for proposing a Change Request without applying it immediately. The operation records a proposed\nchange under proposal state so another participant or policy-controlled workflow can later accept or reject it.\n\nPropose Change is used when a document requires review, approval, negotiation, or human consent before applying a\nmutation. The request shape is Workflows/Change Request, including a summary and optional structured sectionChanges.\nThe operation itself only declares the action; the paired Propose Change Workflow implements storage and validation.\n',
  name: 'Propose Change Operation',
  request: {
    type: {
      blueId: 'AVuAYKsZEMLjY3XwmKMe1LPrVAEo6R6FepDjPqgndF7J',
    },
  },
  type: {
    blueId: '7pZPbabkYt8GUuY8JnALqhJ7gqoChfZoE5tKmU3gBpFv',
  },
};
