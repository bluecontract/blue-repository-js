export const allEventsExternalContractSubscription = {
  name: 'All Events External Contract Subscription',
  description:
    'Represents a subscription to an external contract, to all events emitted by this contract.',
  type: {
    blueId: 'BnzvPoTRbeT8JmH6rDn3Sh9f2gfCNBTm58WVxdUcorXr',
  },
  initiateContractEntry: {
    description:
      'The original Initiate Contract Action timeline entry. This links the processing action to the specific contract initiation.',
    type: {
      blueId: '5BDj3UbH6nUPh6bUQ9vfEchjV2vGLMwhd1FJ5UYaRcos',
    },
  },
} as const;
