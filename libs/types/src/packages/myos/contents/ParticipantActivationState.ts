export const ParticipantActivationState = {
  "name": "Participant Activation State",
  "description": "Tracks participant account status and activation",
  "accountStatus": {
    "type": {
      "blueId": "DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K"
    },
    "description": "Participant's MyOS account status from bootstrap events (Active | Inactive | Failed)"
  },
  "errorMessage": {
    "type": {
      "blueId": "DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K"
    },
    "description": "Error message if participant activation failed"
  }
} as const;
