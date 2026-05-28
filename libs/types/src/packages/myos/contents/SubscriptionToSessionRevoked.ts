export const SubscriptionToSessionRevoked = {
  description:
    'Indicates MyOS Admin stopped forwarding updates for the subscription.',
  name: 'Subscription to Session Revoked',
  reason: {
    description: 'Optional explanation for the revocation.',
    type: {
      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
    },
  },
  subscriptionId: {
    description: 'The subscription id that was revoked.',
    type: {
      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
    },
  },
  targetSessionId: {
    description: 'Session that is no longer being forwarded.',
    type: {
      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
    },
  },
  type: {
    blueId: '7aeKdDTceCVYDtyYZRdK7eQ8UU6PWn6X26Uea3XrGZdX',
  },
} as const;
