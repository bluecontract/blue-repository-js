export const lLMRequest = {
  name: 'LLM Request',
  description:
    'Represents a request to a Language Learning Model (LLM). This structure can be used for all types of LLM requests.\n',
  prompt: {
    description: 'The main text prompt to be sent to the LLM.',
    type: {
      blueId: 'F92yo19rCcbBoBSpUA5LRxpfDejJDAaP1PRxxbWAraVP',
    },
  },
  promptParams: {
    description:
      'Key-value pairs representing additional parameters for the prompt.',
    type: {
      blueId: '294NBTj2mFRL3RB4kDRUSckwGg7Kzj6T8CTAFeR1kcSA',
    },
    keyType: {
      blueId: 'F92yo19rCcbBoBSpUA5LRxpfDejJDAaP1PRxxbWAraVP',
    },
  },
} as const;
