export const aPIRequest = {
  name: 'API Request',
  description:
    'Represents an API request. This structure can be used for all types of API requests, including those with JSON or text bodies.\n',
  headers: {
    description:
      'Key-value pairs representing HTTP headers to be sent with the request.',
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
  method: {
    description:
      'The HTTP method for the request (e.g., GET, POST, PUT, DELETE).',
    type: {
      blueId: 'F92yo19rCcbBoBSpUA5LRxpfDejJDAaP1PRxxbWAraVP',
    },
    constraints: {
      options: [
        {
          type: {
            blueId: 'F92yo19rCcbBoBSpUA5LRxpfDejJDAaP1PRxxbWAraVP',
          },
          value: 'GET',
        },
        {
          type: {
            blueId: 'F92yo19rCcbBoBSpUA5LRxpfDejJDAaP1PRxxbWAraVP',
          },
          value: 'POST',
        },
        {
          type: {
            blueId: 'F92yo19rCcbBoBSpUA5LRxpfDejJDAaP1PRxxbWAraVP',
          },
          value: 'PUT',
        },
        {
          type: {
            blueId: 'F92yo19rCcbBoBSpUA5LRxpfDejJDAaP1PRxxbWAraVP',
          },
          value: 'DELETE',
        },
        {
          type: {
            blueId: 'F92yo19rCcbBoBSpUA5LRxpfDejJDAaP1PRxxbWAraVP',
          },
          value: 'PATCH',
        },
        {
          type: {
            blueId: 'F92yo19rCcbBoBSpUA5LRxpfDejJDAaP1PRxxbWAraVP',
          },
          value: 'HEAD',
        },
        {
          type: {
            blueId: 'F92yo19rCcbBoBSpUA5LRxpfDejJDAaP1PRxxbWAraVP',
          },
          value: 'OPTIONS',
        },
      ],
    },
  },
  queryParams: {
    description:
      'Key-value pairs representing query parameters to be appended to the URL.',
    type: {
      blueId: '294NBTj2mFRL3RB4kDRUSckwGg7Kzj6T8CTAFeR1kcSA',
    },
    keyType: {
      blueId: 'F92yo19rCcbBoBSpUA5LRxpfDejJDAaP1PRxxbWAraVP',
    },
  },
  body: {
    description:
      'The request body. Can be a string for text data, a dictionary for JSON data, or null if no body is required.',
  },
  url: {
    description: 'The full URL for the API endpoint.',
    type: {
      blueId: 'F92yo19rCcbBoBSpUA5LRxpfDejJDAaP1PRxxbWAraVP',
    },
  },
  timeout: {
    description:
      'The maximum time (in milliseconds) to wait for a response before timing out.',
    type: {
      blueId: 'DHmxTkFbXePZHCHCYmQr2dSzcNLcryFVjXVHkdQrrZr8',
    },
  },
} as const;
