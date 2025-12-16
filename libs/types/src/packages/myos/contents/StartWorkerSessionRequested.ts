export const StartWorkerSessionRequested = {
  "name": "Start Worker Session Requested",
  "type": {
    "blueId": "5Wz4G9qcnBJnntYRkz4dgLK5bSuoMpYJZj4j5M59z4we"
  },
  "description": "Parent worker requests from MyOS Admin to start a new child session. Parent worker requires to have Worker Agency Permission Grant.",
  "onBehalfOf": {
    "type": {
      "blueId": "DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K"
    }
  },
  "document": {
    "description": "Target Blue document to be bootstrapped"
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
  "initialMessages": {
    "description": "Messages sent to participants when inviting them to the bootstrapped document",
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
  }
} as const;
