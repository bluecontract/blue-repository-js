export const aPIResponse = {
  name: 'API Response',
  description:
    'Represents an API response. This structure can be used for all types of API responses, including those with JSON or text bodies.\n',
  headers: {
    description:
      'Key-value pairs representing HTTP headers received in the response.',
    type: {
      blueId: '294NBTj2mFRL3RB4kDRUSckwGg7Kzj6T8CTAFeR1kcSA',
    },
    keyType: {
      blueId: 'F92yo19rCcbBoBSpUA5LRxpfDejJDAaP1PRxxbWAraVP',
    },
    valueType: {
      blueId: 'F92yo19rCcbBoBSpUA5LRxpfDejJDAaP1PRxxbWAraVP',
    },
  },
  responseTime: {
    description: 'The time taken (in milliseconds) for the API to respond.',
    type: {
      blueId: 'DHmxTkFbXePZHCHCYmQr2dSzcNLcryFVjXVHkdQrrZr8',
    },
  },
  body: {
    description:
      'The response body. Can be a string for text data, a dictionary for JSON data, or null if no body is returned.',
  },
  error: {
    description:
      'Any error message if the request failed. Null if no error occurred.',
    type: {
      blueId: 'F92yo19rCcbBoBSpUA5LRxpfDejJDAaP1PRxxbWAraVP',
    },
  },
  contentType: {
    description:
      'The content type of the response (e.g., application/json, text/plain).',
    type: {
      blueId: 'F92yo19rCcbBoBSpUA5LRxpfDejJDAaP1PRxxbWAraVP',
    },
  },
  statusCode: {
    description: 'The HTTP status code of the response.',
    type: {
      blueId: 'DHmxTkFbXePZHCHCYmQr2dSzcNLcryFVjXVHkdQrrZr8',
    },
  },
} as const;
