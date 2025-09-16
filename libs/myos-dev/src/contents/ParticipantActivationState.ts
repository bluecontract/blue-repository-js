export const participantActivationState = {
  name: 'Participant Activation State',
  description: 'Tracks participant account status and activation',
  accountStatus: {
    description:
      "Participant's MyOS account status from bootstrap events (Active | Inactive | Failed)",
    type: {
      blueId: 'F92yo19rCcbBoBSpUA5LRxpfDejJDAaP1PRxxbWAraVP',
    },
  },
  errorMessage: {
    description: 'Error message if participant activation failed',
    type: {
      blueId: 'F92yo19rCcbBoBSpUA5LRxpfDejJDAaP1PRxxbWAraVP',
    },
  },
} as const;
