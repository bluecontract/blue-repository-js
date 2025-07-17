export const localContract = {
  name: 'Local Contract',
  description:
    'Pointer to a local contract instance within the parent contract. It uniquely identifies the local contract instance.',
  id: {
    description:
      'The unique identifier for the local contract instance. The main contract instance has id=0. Instances created within this contract will have ids starting from 1 and will be stored within localContractInstances.',
    type: {
      blueId: 'DHmxTkFbXePZHCHCYmQr2dSzcNLcryFVjXVHkdQrrZr8',
    },
  },
} as const;
