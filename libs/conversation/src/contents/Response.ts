export const response = {
  description:
    'The base type for any event that is a direct response to a prior Request event.\n',
  inResponseTo: {
    type: {
      description:
        'A structured reference linking this response back to the original action and trigger.',
      incomingEvent: {
        description:
          'An event which initiated the entire workflow. Normally just blueId of it.',
      },
      name: 'Correlation',
      requestId: {
        description:
          "The 'requestId' from the specific Request event this is a response to.",
        type: {
          blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
        },
      },
    },
  },
  name: 'Response',
  type: {
    blueId: '5Wz4G9qcnBJnntYRkz4dgLK5bSuoMpYJZj4j5M59z4we',
  },
} as const;
