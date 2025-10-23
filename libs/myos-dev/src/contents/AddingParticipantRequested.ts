export const addingParticipantRequested = {
  channelName: {
    description: 'The abstract channel name for the new participant.',
    type: {
      blueId: 'F92yo19rCcbBoBSpUA5LRxpfDejJDAaP1PRxxbWAraVP',
    },
  },
  name: 'Adding Participant Requested',
  participantBinding: {
    accountId: {
      type: {
        blueId: 'F92yo19rCcbBoBSpUA5LRxpfDejJDAaP1PRxxbWAraVP',
      },
    },
    description: 'How to identify the new user.',
    email: {
      type: {
        blueId: 'F92yo19rCcbBoBSpUA5LRxpfDejJDAaP1PRxxbWAraVP',
      },
    },
  },
} as const;
