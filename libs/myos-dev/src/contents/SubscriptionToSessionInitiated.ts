export const subscriptionToSessionInitiated = {
  at: {
    description: 'ISO 8601 timestamp when the subscription became active.',
    type: {
      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
    },
  },
  description:
    'Confirms that MyOS Admin accepted the subscription request and will start forwarding updates.',
  name: 'Subscription to Session Initiated',
  targetSessionId: {
    description: 'Session being observed.',
    type: {
      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
    },
  },
  type: {
    blueId: '3gtD3i9bgfhDat3VB53vrQpchWFn1McYe2ngSc3YLjar',
  },
} as const;
