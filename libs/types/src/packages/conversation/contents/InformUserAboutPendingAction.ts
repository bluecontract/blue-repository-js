export const InformUserAboutPendingAction = {
  "name": "Inform User About Pending Action",
  "type": {
    "blueId": "5Wz4G9qcnBJnntYRkz4dgLK5bSuoMpYJZj4j5M59z4we"
  },
  "description": "Conversation event notifying that a required user action must be performed by running a specific operation defined in the document. Provides the operation name, user-facing text, the channel to watch, and the expected request shape.\n",
  "operation": {
    "type": {
      "blueId": "DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K"
    },
    "description": "The name of the operation defined in the document that the user is required to run to fulfill the pending action."
  },
  "title": {
    "type": {
      "blueId": "DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K"
    },
    "description": "A short, user-facing title describing the required action (e.g., \"Payment Setup Required\", \"Agreement Required\")."
  },
  "message": {
    "type": {
      "blueId": "DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K"
    },
    "description": "Human-readable explanation of what is needed and relevant context."
  },
  "channel": {
    "type": {
      "blueId": "DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K"
    },
    "description": "Contracts-map key of the channel in this scope expected to receive the follow-up that triggers the required operation.\n"
  },
  "expectedRequest": {
    "description": "The expected request payload structure for the operation’s request."
  }
} as const;
