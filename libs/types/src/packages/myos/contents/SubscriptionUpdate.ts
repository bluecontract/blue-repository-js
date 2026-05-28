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
    blueId: '7ugyHm8fpgvQx6pbLcW8cRNLBVDBExCp2iSYgd82ak6z',
  },
  update: {
    description: 'The update (subscription event) from the target session.',
  },
} as const;
