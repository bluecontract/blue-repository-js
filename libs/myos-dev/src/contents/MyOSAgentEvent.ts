export const myOSAgentEvent = {
  agentId: {
    description: 'Optional agent identifier',
    type: {
      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
    },
  },
  description:
    'MyOS-specific agent event with agent ID, timestamp, and event data',
  event: {
    description: 'Optional event node reference',
  },
  id: {
    description: 'Optional event ID',
    type: {
      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
    },
  },
  name: 'MyOS Agent Event',
  timestamp: {
    description: 'Optional timestamp for the event',
    type: {
      blueId: '5WNMiV9Knz63B4dVY5JtMyh3FB4FSGqv7ceScvuapdE1',
    },
  },
} as const;
