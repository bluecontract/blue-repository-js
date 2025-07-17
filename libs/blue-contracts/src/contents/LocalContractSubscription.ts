export const localContractSubscription = {
  name: 'Local Contract Subscription',
  description: 'Represents a subscription to a local contract.',
  type: {
    blueId: 'BnzvPoTRbeT8JmH6rDn3Sh9f2gfCNBTm58WVxdUcorXr',
  },
  contractInstanceId: {
    description:
      'Identifier for the specific contract instance this subscription is associated with.\nIf null, the subscription applies to all contract instances.\n',
  },
  event: {
    description:
      'Represents the event this subscription is interested in.\nIf null, the subscription applies to all events within the specified contract instance.',
  },
  workflowInstanceId: {
    description:
      'Identifier for the specific workflow instance this subscription is associated with.\nIf null, the subscription applies to all workflow instances within the specified contract instance.\n',
  },
} as const;
