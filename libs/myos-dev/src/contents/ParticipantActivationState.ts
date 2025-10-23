export const participantActivationState = {
  accountStatus: {
    description:
      "Participant's MyOS account status from bootstrap events (Active | Inactive | Failed)",
    type: {
      blueId: 'F92yo19rCcbBoBSpUA5LRxpfDejJDAaP1PRxxbWAraVP',
    },
  },
  description: 'Tracks participant account status and activation',
  errorMessage: {
    description: 'Error message if participant activation failed',
    type: {
      blueId: 'F92yo19rCcbBoBSpUA5LRxpfDejJDAaP1PRxxbWAraVP',
    },
  },
  name: 'Participant Activation State',
} as const;
