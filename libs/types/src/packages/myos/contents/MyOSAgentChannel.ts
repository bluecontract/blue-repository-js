export const MyOSAgentChannel: Record<string, unknown> = {
  agent: {
    description: 'Optional MyOS agent associated with this channel',
    type: {
      blueId: '6Fxxx58U6WKzA4WQPCLPmMMCCEb9QLFYdb8yMLZDVdXL',
    },
  },
  description:
    'MyOS-specific agent channel extending Channel with agent and event fields',
  event: {
    description: 'Optional event node reference',
  },
  name: 'MyOS Agent Channel',
};
