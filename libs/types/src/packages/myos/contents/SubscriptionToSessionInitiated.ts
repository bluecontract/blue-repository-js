export const SubscriptionToSessionInitiated = {
  at: {
    description: 'ISO 8601 timestamp when the subscription became active.',
    type: {
      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
    },
  },
  description:
    'Confirms that MyOS Admin accepted the subscription request and will start forwarding updates.',
  document: {
    description:
      'The document state at the time the subscription became active.',
  },
  epoch: {
    description: 'The epoch number at which the subscription became active.',
    type: {
      blueId: '5WNMiV9Knz63B4dVY5JtMyh3FB4FSGqv7ceScvuapdE1',
    },
  },
  name: 'Subscription to Session Initiated',
  subscriptionId: {
    description: 'The subscription id that was initiated.',
    type: {
      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
    },
  },
  targetSessionId: {
    description: 'Session being observed.',
    type: {
      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
    },
  },
  type: {
    blueId: '36epvrpVHZLjapbeZsNodz2NDnm7XZeNZcnkWHgkP1pp',
  },
} as const;
