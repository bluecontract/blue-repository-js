export const MyOSAgentChannel = {
  agent: {
    description: 'Optional MyOS agent associated with this channel',
    type: {
      blueId: '8DQrCT6Mf9wHQyRc4NdYhjFW4FbKi83no2QPe54UhdQ5',
    },
  },
  description:
    'MyOS-specific agent channel extending Channel with agent and event fields',
  event: {
    description: 'Optional event node reference',
  },
  name: 'MyOS Agent Channel',
} as const;
