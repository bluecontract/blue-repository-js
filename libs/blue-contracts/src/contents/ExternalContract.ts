export const externalContract = {
  name: 'External Contract',
  description:
    'Represents an external contract that can be used within another contract.',
  localContractInstanceId: {
    description: 'The ID of the local contract instance within this contract.',
    type: {
      blueId: 'DHmxTkFbXePZHCHCYmQr2dSzcNLcryFVjXVHkdQrrZr8',
    },
  },
  initiateContractEntry: {
    description: 'The entry which initiated this contract.',
  },
} as const;
