export const agreedUponSimulatedEvent = {
  name: 'Agreed Upon Simulated Event',
  description:
    'Represents a virtual event that all parties in the contract have agreed to treat as if it actually occurred.',
  event: {
    description:
      'The simulated event that should be processed by the contract as if it were a real occurrence.\nThis can be any valid event type that the contract is designed to handle, such as a timeline entry,\na state change, or a participant action.',
  },
} as const;
