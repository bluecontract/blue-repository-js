export const AgentActor = {
  description:
    'Base actor type for a non-human actor exercising delegated authority.',
  name: 'Agent Actor',
  onBehalfOf: {
    description: 'Actor whose authority this agent is using.',
    type: {
      blueId: 'CN5efWVizJbRsMCw8YWRfT2q9vM9XfeGDN9wFvYcvMnQ',
    },
  },
  type: {
    blueId: 'CN5efWVizJbRsMCw8YWRfT2q9vM9XfeGDN9wFvYcvMnQ',
  },
} as const;
