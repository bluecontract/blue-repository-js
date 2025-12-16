export const MyOSPackage = {
  "name": "MyOS Package",
  "type": {
    "blueId": "8s2rAFDtiB6sCwqeURkT4Lq7fcc2FXBkmX9B9p7R4Boc"
  },
  "description": "A distributable blueprint for a new Agent session, which can include pre-configured automations that start on installation.\n",
  "document": {
    "description": "The full initial state of the Agent to be created. Root type MUST specialize 'Agent'."
  },
  "agentStoreDescription": {
    "type": {
      "blueId": "DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K"
    },
    "description": "Human-readable description for stores/directories"
  },
  "channelBindings": {
    "type": {
      "blueId": "G7fBT9PSod1RfHLHkpafAGBDVAJMrMhAMY51ERcyXNrj"
    },
    "keyType": {
      "blueId": "DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K"
    },
    "valueType": {
      "blueId": "DcoJyCh7XXxy1nR5xjy7qfkUgQ1GiZnKKSxh8DJusBSr"
    },
    "description": "Maps channel names to participant identifiers"
  },
  "installerChannel": {
    "type": {
      "blueId": "DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K"
    },
    "description": "Channel name in 'document' to bind to the installing user/account"
  },
  "initialMessages": {
    "description": "Optional per-participant invitation messages (installer's message is public)",
    "defaultMessage": {
      "type": {
        "blueId": "DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K"
      },
      "description": "Default invitation message sent to all participants"
    },
    "perChannel": {
      "type": {
        "blueId": "G7fBT9PSod1RfHLHkpafAGBDVAJMrMhAMY51ERcyXNrj"
      },
      "keyType": {
        "blueId": "DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K"
      },
      "valueType": {
        "blueId": "DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K"
      },
      "description": "Per-channel custom invitation messages"
    }
  },
  "capabilities": {
    "type": {
      "blueId": "G7fBT9PSod1RfHLHkpafAGBDVAJMrMhAMY51ERcyXNrj"
    },
    "keyType": {
      "blueId": "DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K"
    },
    "valueType": {
      "blueId": "4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u"
    },
    "description": "Optional MyOS Admin capability contracts to attach (participantsOrchestration, sessionInteraction, workerAgency)"
  },
  "automationTemplate": {
    "type": {
      "blueId": "8JHhvprgxVUFZCQpyeEJfMFF8vuVEAnjqojftJ6B2E6S"
    },
    "description": "Optional automation template to start post-creation"
  }
} as const;
