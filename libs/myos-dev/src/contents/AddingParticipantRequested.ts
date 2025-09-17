export const addingParticipantRequested = {
  name: 'Adding Participant Requested',
  channelName: {
    description: 'The abstract channel name for the new participant.',
    type: {
      blueId: 'F92yo19rCcbBoBSpUA5LRxpfDejJDAaP1PRxxbWAraVP',
    },
  },
  participantBinding: {
    description: 'How to identify the new user.',
    accountId: {
      type: {
        blueId: 'F92yo19rCcbBoBSpUA5LRxpfDejJDAaP1PRxxbWAraVP',
      },
    },
    email: {
      type: {
        blueId: 'F92yo19rCcbBoBSpUA5LRxpfDejJDAaP1PRxxbWAraVP',
      },
    },
  },
} as const;
