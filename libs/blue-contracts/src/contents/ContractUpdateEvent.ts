export const contractUpdateEvent = {
  name: 'Contract Update Event',
  description: 'Represents an event of changing content of the contract.',
  changeset: {
    description: 'JSON Patch representing the change',
  },
} as const;
