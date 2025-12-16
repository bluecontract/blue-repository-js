export const SessionEpochAdvanced = {
  "name": "Session Epoch Advanced",
  "description": "Snapshot captured from a target session epoch emission.",
  "type": {
    "blueId": "5Wz4G9qcnBJnntYRkz4dgLK5bSuoMpYJZj4j5M59z4we"
  },
  "sessionId": {
    "type": {
      "blueId": "DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K"
    },
    "description": "Session whose state advanced."
  },
  "timestamp": {
    "type": {
      "blueId": "DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K"
    },
    "description": "ISO 8601 timestamp for the emission."
  },
  "epoch": {
    "type": {
      "blueId": "5WNMiV9Knz63B4dVY5JtMyh3FB4FSGqv7ceScvuapdE1"
    },
    "description": "Epoch number."
  },
  "document": {
    "description": "Document state after the emission."
  }
} as const;
