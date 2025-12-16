export const SubscribeToSessionRequested = {
  "name": "Subscribe to Session Requested",
  "type": {
    "blueId": "5Wz4G9qcnBJnntYRkz4dgLK5bSuoMpYJZj4j5M59z4we"
  },
  "description": "Document asks MyOS Admin to mediate a subscription to a target session it can READ.",
  "targetSessionId": {
    "type": {
      "blueId": "DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K"
    },
    "description": "Session to subscribe to."
  },
  "subscription": {
    "id": {
      "type": {
        "blueId": "DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K"
      },
      "description": "Optional client correlation id."
    },
    "events": {
      "type": {
        "blueId": "6aehfNAxHLC1PHHoDr3tYtFH3RWNbiWdFancJ1bypXEY"
      },
      "description": "Optional allow-list of emitted event patterns to forward."
    }
  }
} as const;
