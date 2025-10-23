export const myOSAgentEvent = {
  agentId: {
    description: 'Optional agent identifier',
    type: {
      blueId: 'F92yo19rCcbBoBSpUA5LRxpfDejJDAaP1PRxxbWAraVP',
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
      blueId: 'F92yo19rCcbBoBSpUA5LRxpfDejJDAaP1PRxxbWAraVP',
    },
  },
  name: 'MyOS Agent Event',
  timestamp: {
    description: 'Optional timestamp for the event',
    type: {
      blueId: 'DHmxTkFbXePZHCHCYmQr2dSzcNLcryFVjXVHkdQrrZr8',
    },
  },
} as const;
