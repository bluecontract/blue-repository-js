export const DocumentProcessingTerminated = {
  cause: {
    description: 'One of fatal, graceful.',
    type: {
      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
    },
  },
  description:
    'Core type of Blue Language v1.0 (see https://language.blue).\nPublished at the terminating scope when processing ends, either gracefully\nor fatally. Bridgeable to the parent via Embedded Node Channel if configured.\n',
  name: 'Document Processing Terminated',
  reason: {
    description: 'Optional explanation.',
    type: {
      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
    },
  },
} as const;
