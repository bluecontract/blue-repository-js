export const lLMResponse = {
  name: 'LLM Response',
  description:
    'Represents a response from a Language Learning Model (LLM). This structure can be used for all types of LLM responses.\n',
  responseTime: {
    description:
      'The time taken (in milliseconds) for the LLM to generate the response.',
    type: {
      blueId: 'DHmxTkFbXePZHCHCYmQr2dSzcNLcryFVjXVHkdQrrZr8',
    },
  },
  content: {
    description: 'The generated content from the LLM.',
    type: {
      blueId: 'F92yo19rCcbBoBSpUA5LRxpfDejJDAaP1PRxxbWAraVP',
    },
  },
} as const;
