export const SubscriptionToSessionRevoked = {
  "name": "Subscription to Session Revoked",
  "type": {
    "blueId": "5Wz4G9qcnBJnntYRkz4dgLK5bSuoMpYJZj4j5M59z4we"
  },
  "description": "Indicates MyOS Admin stopped forwarding updates for the subscription.",
  "subscriptionId": {
    "type": {
      "blueId": "DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K"
    },
    "description": "The subscription id that was revoked."
  },
  "targetSessionId": {
    "type": {
      "blueId": "DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K"
    },
    "description": "Session that is no longer being forwarded."
  },
  "reason": {
    "type": {
      "blueId": "DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K"
    },
    "description": "Optional explanation for the revocation."
  }
} as const;
