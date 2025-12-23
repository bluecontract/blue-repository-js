export const ParticipantActivationState = {
  accountStatus: {
    description:
      "Participant's MyOS account status from bootstrap events (Active | Inactive | Failed)",
    type: {
      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
    },
  },
  description: 'Tracks participant account status and activation',
  errorMessage: {
    description: 'Error message if participant activation failed',
    type: {
      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
    },
  },
  name: 'Participant Activation State',
} as const;
