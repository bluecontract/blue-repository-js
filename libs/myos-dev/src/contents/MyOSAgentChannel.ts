export const myOSAgentChannel = {
  name: 'MyOS Agent Channel',
  description:
    'MyOS-specific agent channel extending Channel with agent and event fields',
  event: {
    description: 'Optional event node reference',
  },
  agent: {
    description: 'Optional MyOS agent associated with this channel',
    type: {
      blueId: '9dvBsvQ5tGUZmR3bQkRy8nfwzAkSuM4NA8e4Fmy9eJtN',
    },
  },
} as const;
