export const subscriptionUpdate = {
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
    blueId: '3gtD3i9bgfhDat3VB53vrQpchWFn1McYe2ngSc3YLjar',
  },
  update: {
    description: 'The update (subscription event) from the target session.',
  },
} as const;
