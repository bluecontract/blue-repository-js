export const SubscriptionUpdate = {
  "name": "Subscription Update",
  "type": {
    "blueId": "5Wz4G9qcnBJnntYRkz4dgLK5bSuoMpYJZj4j5M59z4we"
  },
  "description": "Update to a subscription.",
  "subscriptionId": {
    "type": {
      "blueId": "DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K"
    },
    "description": "The ID of the subscription."
  },
  "targetSessionId": {
    "type": {
      "blueId": "DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K"
    },
    "description": "The ID of the target session."
  },
  "update": {
    "description": "The update (subscription event) from the target session."
  }
} as const;
