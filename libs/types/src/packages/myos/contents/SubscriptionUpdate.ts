export const SubscriptionUpdate = {
  description: 'Update to a subscription.',
  name: 'Subscription Update',
  subscriptionId: {
    description: 'The ID of the subscription.',
    type: {
      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
    },
  },
  targetSessionId: {
    description: 'The ID of the target session.',
    type: {
      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
    },
  },
  type: {
    blueId: '5Wz4G9qcnBJnntYRkz4dgLK5bSuoMpYJZj4j5M59z4we',
  },
  update: {
    description: 'The update (subscription event) from the target session.',
  },
} as const;
