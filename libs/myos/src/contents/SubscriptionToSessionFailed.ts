export const subscriptionToSessionFailed = {
  description:
    'Indicates MyOS Admin rejected the subscription request before activation.',
  name: 'Subscription to Session Failed',
  reason: {
    description: 'Explanation why the subscription could not be established.',
    type: {
      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
    },
  },
  targetSessionId: {
    description: 'Session that was requested, if known.',
    type: {
      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
    },
  },
  type: {
    blueId: '5Wz4G9qcnBJnntYRkz4dgLK5bSuoMpYJZj4j5M59z4we',
  },
} as const;
