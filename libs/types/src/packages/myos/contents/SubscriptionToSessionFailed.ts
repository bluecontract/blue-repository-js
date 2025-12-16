export const SubscriptionToSessionFailed = {
  "name": "Subscription to Session Failed",
  "type": {
    "blueId": "5Wz4G9qcnBJnntYRkz4dgLK5bSuoMpYJZj4j5M59z4we"
  },
  "description": "Indicates MyOS Admin rejected the subscription request before activation.",
  "subscriptionId": {
    "type": {
      "blueId": "DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K"
    },
    "description": "The subscription id that failed."
  },
  "targetSessionId": {
    "type": {
      "blueId": "DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K"
    },
    "description": "Session that was requested, if known."
  },
  "reason": {
    "type": {
      "blueId": "DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K"
    },
    "description": "Explanation why the subscription could not be established."
  }
} as const;
