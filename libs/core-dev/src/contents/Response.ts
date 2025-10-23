export const response = {
  name: 'Response',
  description:
    'The base type for any event that is a direct response to a prior Request event.\n',
  type: {
    blueId: '3gtD3i9bgfhDat3VB53vrQpchWFn1McYe2ngSc3YLjar',
  },
  inResponseTo: {
    type: {
      name: 'Correlation',
      description:
        'A structured reference linking this response back to the original action and trigger.',
      requestId: {
        description:
          "The 'requestId' from the specific Request event this is a response to.",
        type: {
          blueId: 'F92yo19rCcbBoBSpUA5LRxpfDejJDAaP1PRxxbWAraVP',
        },
      },
      incomingEvent: {
        description:
          'An event which initiated the entire workflow. Normally just blueId of it.',
      },
    },
  },
} as const;
