export const myOSAgentEvent = {
  name: 'MyOS Agent Event',
  description:
    'MyOS-specific agent event with agent ID, timestamp, and event data',
  agentId: {
    description: 'Optional agent identifier',
    type: {
      blueId: 'F92yo19rCcbBoBSpUA5LRxpfDejJDAaP1PRxxbWAraVP',
    },
  },
  id: {
    description: 'Optional event ID',
    type: {
      blueId: 'DHmxTkFbXePZHCHCYmQr2dSzcNLcryFVjXVHkdQrrZr8',
    },
  },
  event: {
    description: 'Optional event node reference',
  },
  timestamp: {
    description: 'Optional timestamp for the event',
    type: {
      blueId: 'DHmxTkFbXePZHCHCYmQr2dSzcNLcryFVjXVHkdQrrZr8',
    },
  },
} as const;
