export const ProposeChangeOperation = {
  description:
    'Operation marker for proposing a Change Request without applying it immediately. The operation records a proposed\nchange under proposal state so another participant or policy-controlled workflow can later accept or reject it.\n\nPropose Change is used when a document requires review, approval, negotiation, or human consent before applying a\nmutation. The request shape is Coordination/Change Request, including a summary and optional structured sectionChanges.\nThe operation itself only declares the action; the paired Propose Change Workflow implements storage and validation.\n',
  name: 'Propose Change Operation',
  request: {
    type: {
      blueId: 'Em6YA77iVnnRaScCrkZr9C9VkQF14i2pk5fA8KNiHS41',
    },
  },
  type: {
    blueId: '9Fu3Rjq8hNKnZS71ZU8RXBBupZEa7Wb8z44GtzfSwjbr',
  },
} as const;
