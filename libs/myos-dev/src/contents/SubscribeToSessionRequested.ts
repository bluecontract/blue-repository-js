export const subscribeToSessionRequested = {
  description:
    'Document asks MyOS Admin to mediate a subscription to a target session it can READ.',
  name: 'Subscribe to Session Requested',
  subscription: {
    events: {
      description: 'Optional allow-list of emitted event patterns to forward.',
      type: {
        blueId: '6aehfNAxHLC1PHHoDr3tYtFH3RWNbiWdFancJ1bypXEY',
      },
    },
    id: {
      description: 'Optional client correlation id.',
      type: {
        blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
      },
    },
  },
  targetSessionId: {
    description: 'Session to subscribe to.',
    type: {
      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
    },
  },
  type: {
    blueId: '3n91zvNzZkMN4mdBNMA3ez9ccJQDzkNcv67BtYnMW8Hn',
  },
} as const;
